import { formatDate } from "../../shared/utils/formatDate";
import {
  logIn,
  registration,
  logOut,
  updateUser,
  getCurrentUser,
  addUserPet,
  deleteUserPet,
  refreshToken,
  googleAuth,
} from "./auth-operations";

export const extraActions = [
  logIn,
  registration,
  logOut,
  updateUser,
  getCurrentUser,
  addUserPet,
  deleteUserPet,
  refreshToken,
  googleAuth,
];

export const getActions = (type) => extraActions.map((action) => action[type]);

export const handlePending = (state) => {
  state.isLoader = true;
};

export const handlefulfilled = (state) => {
  state.isLoader = false;
  state.error = null;
};

export const handleRejected = (state, action) => {
  state.isLoader = false;
  state.error = action.payload.response?.data?.message;
};

export const userFulfilled = (
  state,
  { payload: { token, tokenLifeTime, refreshToken, user } }
) => {
  let birthday = "";
  if (user.birthday) {
    birthday = formatDate(user.birthday);
  }

  state.isLoggedIn = true;
  state.token = token;
  state.tokenLifeTime = tokenLifeTime;
  state.refreshToken = refreshToken;
  state.user = { ...state.user, ...user, birthday };
};

export const getInitialState = (state) => {
  state.isLoggedIn = false;
  state.token = null;
  state.tokenLifeTime = null;
  state.refreshToken = null;
  state.user = { name: null, email: null };
};

export const getUserFulfilled = (state, { payload: { user } }) => {
  let birthday = "";
  if (user.birthday) {
    birthday = formatDate(user.birthday);
  }

  state.user = { ...user, birthday };
};

export const userUpdateFulfilled = (
  state,
  { payload: { token, tokenLifeTime, refreshToken, user } }
) => {
  let birthday = "";
  if (user.birthday) {
    birthday = formatDate(user.birthday);
  }

  state.token = token;
  state.tokenLifeTime = tokenLifeTime;
  state.refreshToken = refreshToken;
  state.user = { ...user, birthday };
};

export const userRefreshFulfilled = (state, { payload: { user } }) => {
  let birthday = "";
  if (user.birthday) {
    birthday = formatDate(user.birthday);
  }
  state.isRefreshing = false;
  state.user = { ...state.user, ...user, birthday };
  state.isLoggedIn = true;
};

export const googleAuthFullfilled = (state, { payload: { user } }) => {
  let birthday = "";
  if (user.birthday) {
    birthday = formatDate(user.birthday);
  }
  state.isRefreshing = false;
  state.user = { ...state.user, ...user, birthday };
  state.isLoggedIn = true;
};

export const userRefreshRejected = (state) => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
};

export const refreshTokenFullfilled = (state, { payload }) => {
  state.token = payload.token;
  state.tokenLifeTime = payload.tokenLifeTime;
  state.refreshToken = payload.refreshToken;
};

export const addPetFulfilled = (state, action) => {
  const date = formatDate(action.payload.pet.date);
  const pet = { ...action.payload.pet, date };
  state.user.pets = [...state.user.pets, pet];
};

export const deletePet = (state, action) => {
  state.user.pets = state.user.pets.filter(
    (item) => item._id !== action.payload
  );
};
