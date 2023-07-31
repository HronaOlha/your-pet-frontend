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
// import { createSlice } from "@reduxjs/toolkit";
// import {
//   handlePending,
//   handleRejected,
//   handlefulfilled,
//   getActions,
// } from "./ourFriends-utils";
// import getFriends from "./ourFriends-operations";
// export const friendsSlice = createSlice({
//   name: "friends",
//   initialState: {
//     items: [],
//     isLoading: false,
//     error: null,
//   },
//   reducers: {
//     extraReducers: (builder) => {
//       builder
//         //getFriends
//         .addCase(getFriends.fulfilled, (state, { payload }) => {
//           state.items = payload.articles;
//         })
//         .addMatcher(isAnyOf(...getActions("pending")), handlePending)
//         .addMatcher(isAnyOf(...getActions("fulfilled")), handlefulfilled)
//         .addMatcher(isAnyOf(...getActions("rejected")), handleRejected);
//     },
//   },
// });
// export const friendsReducer = friendsSlice.reducer;
