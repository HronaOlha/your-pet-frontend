import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosPublic } from "../../shared/utils/axiosConfig";

const getFriends = createAsyncThunk(
  "/sponsors",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosPublic.get("/sponsors");

      return data.sponsors;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export default getFriends;
