import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getNews } from "./news-operation";

import {
  handlePending,
  handleRejected,
  handlefulfilled,
  getActions,
} from "./news-utils";

export const newsSlice = createSlice({
  name: "news",
  
  initialState: {
    items: [],
    newsFilter: "",
    isLoading: false,
    error: null,
  },

  reducers: {
    changeFilter(state, { payload }) {
      state.newsFilter = payload;
    },
  },

  extraReducers: (builder) => {
    builder
      // getNews
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.items = payload.articles;
      })
      .addMatcher(isAnyOf(...getActions("pending")), handlePending)
      .addMatcher(isAnyOf(...getActions("fulfilled")), handlefulfilled)
      .addMatcher(isAnyOf(...getActions("rejected")), handleRejected);
  },
});

export const newsReducer = newsSlice.reducer;
export const { changeFilter } = newsSlice.actions;
