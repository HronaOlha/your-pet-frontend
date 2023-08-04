import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  getCurrentUser,
  logIn,
  logOut,
  refreshUser,
  registration,
  updateUser,
  refreshToken,
  addUserPet,
  deleteUserPet,
  googleAuth,
} from "./auth-operations";

import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  getActions,
  getInitialState,
  getUserFulfilled,
  handlePending,
  handleRejected,
  handlefulfilled,
  userFulfilled,
  userUpdateFulfilled,
  userRefreshFulfilled,
  userRefreshRejected,
  refreshTokenFullfilled,
  addPetFulfilled,
  deletePet,
  googleAuthFullfilled,
} from "./auth-utils";
import { axiosPrivate } from "/src/shared/utils/axiosConfig";

const initialState = {
  user: {
    name: "",
    email: "",
    birthday: "",
    pets: [],
    city: "",
    phone: "",
    isNewUser: false,
  },
  token: null,
  tokenLifeTime: null,
  refreshToken: null,
  isLoggedIn: false,
  isLoader: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action) {
      state.token = action.payload.token;
      state.refreshToken = action.payload.refreshToken;
      state.tokenLifeTime = action.payload.tokenLifeTime;
    },
    resetState(state) {
      state.isLoggedIn = false;
      state.token = null;
      state.tokenLifeTime = null;
      state.refreshToken = null;
      state.user = initialState.user;
    },
  },
  extraReducers: (builder) => {
    builder
      // REGISTRATION
      .addCase(registration.fulfilled, userFulfilled)

      //LogIn
      .addCase(logIn.fulfilled, userFulfilled)
      .addCase(logIn.rejected, (state) => {
        state.isLoggedIn = false;
      })

      // LOGOUT
      .addCase(logOut.fulfilled, getInitialState)

      // UPDATE USER
      .addCase(updateUser.fulfilled, userUpdateFulfilled)

      // GetCurrentUser
      .addCase(getCurrentUser.fulfilled, getUserFulfilled)

      //REFRESH USER
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, userRefreshFulfilled)

      .addCase(refreshUser.rejected, userRefreshRejected)

      .addCase(refreshToken.fulfilled, refreshTokenFullfilled)

      .addCase(googleAuth.fulfilled, googleAuthFullfilled)

      .addCase(addUserPet.fulfilled, addPetFulfilled)

      .addCase(deleteUserPet.fulfilled, deletePet)

      .addMatcher(isAnyOf(...getActions("pending")), handlePending)
      .addMatcher(isAnyOf(...getActions("fulfilled")), handlefulfilled)
      .addMatcher(isAnyOf(...getActions("rejected")), handleRejected);
  },
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["token", "tokenLifeTime", "refreshToken"],
};
export const { resetState, setToken } = authSlice.actions;
export const authReducer = persistReducer(persistConfig, authSlice.reducer);

export const interceptor = (store) => {
  axiosPrivate.interceptors.request.use(
    async (config) => {
      const auth = store?.getState()?.auth;
      if (auth?.token) {
        const currentDate = new Date();
        const tokenLifeTime = new Date(auth.tokenLifeTime);

        if (currentDate >= tokenLifeTime) {
          await store.dispatch(refreshToken());
          if (config?.headers) {
            config.headers["Authorization"] = `Bearer ${
              store.getState().auth.token
            }`;
          }
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
  axiosPrivate.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response.status === 401 && store.getState().auth?.token) {
        store.dispatch(resetState());
      }
      return Promise.reject(error);
    }
  );
};
