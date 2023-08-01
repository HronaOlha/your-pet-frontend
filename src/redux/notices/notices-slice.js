import { createSlice } from "@reduxjs/toolkit";
import {
  fetchNotices,
  fetchAddFavorite,
  fetchDeleteFavorite,
  resetNotices,
  fetchCardById,
  resetCardById,
  deleteCardById,
  takeFavoritesList,
} from "./notices-operations";
import {
  handleFulfilledDeleteCardById,
  handleFulfilledFetchCardById,
  handleFulfilledFetchNotices,
  handleFulfilledFetchNoticesAddFavorite,
  handleFulfilledFetchNoticesDeleteFavorite,
  handlePendingFetchNotices,
  handlePendingFetchNoticesFavorite,
  handleRejectedFetchNotices,
  handleRejectedFetchNoticesFavorite,
  handleResetCardById,
  handleResetFavoriteList,
  handleTakeFavoritesList,
} from "./notices-utils";

export const noticesSlice = createSlice({
  name: "notices",
  initialState: {
    items: [],
    favorite: [],
    cardById: {},
    total: 0,
    isLoading: false,
    isLoadingFavorite: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNotices.pending, handlePendingFetchNotices)
      .addCase(fetchNotices.fulfilled, handleFulfilledFetchNotices)
      .addCase(fetchNotices.rejected, handleRejectedFetchNotices)
      // ==========================================
      .addCase(fetchAddFavorite.pending, handlePendingFetchNoticesFavorite)
      .addCase(
        fetchAddFavorite.fulfilled,
        handleFulfilledFetchNoticesAddFavorite
      )
      .addCase(fetchAddFavorite.rejected, handleRejectedFetchNoticesFavorite)
      // ==========================================
      .addCase(fetchDeleteFavorite.pending, handlePendingFetchNoticesFavorite)
      .addCase(
        fetchDeleteFavorite.fulfilled,
        handleFulfilledFetchNoticesDeleteFavorite
      )
      .addCase(fetchDeleteFavorite.rejected, handleRejectedFetchNoticesFavorite)
      // ===========================================
      .addCase(fetchCardById.pending, handlePendingFetchNotices)
      .addCase(fetchCardById.fulfilled, handleFulfilledFetchCardById)
      .addCase(fetchCardById.rejected, handleRejectedFetchNotices)
      // ===========================================
      .addCase(deleteCardById.pending, handlePendingFetchNotices)
      .addCase(deleteCardById.fulfilled, handleFulfilledDeleteCardById)
      .addCase(deleteCardById.rejected, handleRejectedFetchNotices)
      // ===========================================
      .addCase(resetNotices, handleResetFavoriteList)
      .addCase(resetCardById, handleResetCardById)
      .addCase(takeFavoritesList, handleTakeFavoritesList);
  },
});

export const noticesReducer = noticesSlice.reducer;
