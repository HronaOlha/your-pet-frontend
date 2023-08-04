import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic, axiosPrivate } from "../../shared/utils/axiosConfig";

export const token = {
  set(token) {
    axiosPrivate.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosPrivate.defaults.headers.common.Authorization = "";
  },
};

export const registration = createAsyncThunk(
  "auth/register",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublic.post("/users/register", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublic.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("auth/logOut", async () => {
  try {
    const { data } = await axiosPrivate.post("/users/logout");
    token.unset();

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const updateUser = createAsyncThunk(
  "auth/updateUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.put("/users/update", credentials);

      token.set(data.token);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.get("/users/current");

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const googleAuth = createAsyncThunk(
  "auth/googleAuth",
  async (accessToken, thunkAPI) => {
    try {
      token.set(accessToken);
      const { data } = await axiosPrivate.get("/users/current");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue("Unable to fetch user");
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      token.set(persistedToken);

      const { data } = await axiosPrivate.get("/users/current");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const refreshToken = state.auth.refreshToken;

      const { data } = await axiosPublic.post("/users/refresh", {
        refreshToken,
      });

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const addUserPet = createAsyncThunk(
  "auth/addUserPet",
  async (pet, { rejectWithValue }) => {
    try {
      const { data } = await axiosPrivate.post("/pets/add", pet);

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteUserPet = createAsyncThunk(
  "auth/deleteUserPet",
  async (id, { rejectWithValue }) => {
    try {
      await axiosPrivate.delete(`/pets/delete/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

//зареєстрований акк
// Viacheslav
// slav@na.com
// Kk123456
