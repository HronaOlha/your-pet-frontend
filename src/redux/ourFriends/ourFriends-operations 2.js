import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://my-pet-app-8sz1.onrender.com";

const getFriends = createAsyncThunk(
  "/sponsors",
  async (friends, { rejectWithValue }) => {
    try {
      const { data } = await axios.get("/sponsors", friends);
      return data.sponsors;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export default getFriends;
