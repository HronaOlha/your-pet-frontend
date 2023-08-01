import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic, axiosPrivate } from "../../shared/utils/axiosConfig";

export const fetchNotices = createAsyncThunk(
  "notices/fetchNotices",
  async ({ url, privateRoute = false }, thunkAPI) => {
    try {
      const response = privateRoute
        ? await axiosPrivate.get(`${url}`)
        : await axiosPublic.get(`${url}`);

      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchAddFavorite = createAsyncThunk(
  "notices/addFavorite",
  async (url, thunkAPI) => {
    try {
      const response = await axiosPrivate.patch(`${url}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteFavorite = createAsyncThunk(
  "notices/deleteFavorite",
  async (url, thunkAPI) => {
    try {
      const response = await axiosPrivate.patch(`${url}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCardById = createAsyncThunk(
  "notices/getCardById",
  async (url, thunkAPI) => {
    try {
      const response = await axiosPublic.get(`${url}`);
      return response.data.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteCardById = createAsyncThunk(
  "notices/deleteCardById",
  async (url, thunkAPI) => {
    try {
      const response = await axiosPrivate.delete(`${url}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const resetNotices = createAction("NOTICES_RESET_FAVORITE_LIST");
export const resetCardById = createAction("NOTICES_RESET_CARD_BY_ID");
export const takeFavoritesList = createAction("TAKE_FAVORITE_LIST");
