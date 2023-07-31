import { createSlice } from "@reduxjs/toolkit";
import getFriends from "./ourFriends-operations";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const friendsSlice = createSlice({
  name: "friends",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getFriends.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getFriends.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(getFriends.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const friendsReducer = friendsSlice.reducer;
