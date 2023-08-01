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
      if (error.response.status === 400) {
        console.log("Невірно введені дані! Спробуйте ще раз!");
      } else if (error.response.status === 409) {
        console.log("Пошта вже використовується");
      } else {
        console.log("Упс... щось пішло не так. Перезавантажте сторінку.");
      }
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
      console.log("Невірно введені дані");
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
    console.log("string ");
    try {
      const { data } = await axiosPrivate.put("/users/update", credentials);
      console.log(data);
      token.set(data.token);
      // notifyFulfilledLogin();
      console.log("тут фулфілд логін");

      return data;
    } catch (error) {
      // notifyErrorLogin();
      console.log("тут ерор updateUser func - operation");
      return rejectWithValue(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "auth/getCurrentUser",
  async () => {
    try {
      const { data } = await axiosPrivate.get("/users/current");

      // notifyFulfilledLogin();
      console.log("тут фулфілд логін");
      console.log(data);

      return data;
    } catch (error) {
      // notifyErrorLogin();
      console.log(error);
      console.log("тут ерор getCurrentUser func - operation");
      return;
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
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "auth/refreshToken",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const refreshToken = state.auth.refreshToken;

    const { data } = await axiosPublic.post("/users/refresh", { refreshToken });

    return data;
  }
);

//зареєстрований акк
// Viacheslav
// slav@na.com
// Kk123456
