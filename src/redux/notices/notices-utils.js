export const handlePendingFetchNotices = (state) => {
  state.isLoading = true;
  state.error = null;
};

export const handleFulfilledFetchNotices = (state, action) => {
  const { total, notices } = action.payload;

  state.items = [...notices];
  state.total = total;
  state.isLoading = false;
  state.error = null;
};

export const handleRejectedFetchNotices = (state) => {
  state.isLoading = false;
  state.error = true;
};

export const handlePendingFetchNoticesFavorite = (state) => {
  state.isLoadingFavorite = true;
  state.error = null;
};

export const handleFulfilledFetchNoticesAddFavorite = (state, action) => {
  const { favorites } = action.payload;

  state.favorite = [...favorites];
  state.isLoadingFavorite = false;
  state.error = null;
};

export const handleRejectedFetchNoticesFavorite = (state) => {
  state.isLoadingFavorite = false;
  state.error = true;
};

export const handleFulfilledFetchNoticesDeleteFavorite = (state, action) => {
  const url = window.location.href;
  const { favorites } = action.payload;

  if (url.includes("/notices/favorite")) {
    state.items = state.items.filter((item) =>
      favorites.some((favItem) => favItem === item._id)
    );

    const total = favorites.length;
    state.total = total;
  }

  state.favorite = [...favorites];
  state.isLoadingFavorite = false;
  state.error = null;
};

export const handleFulfilledFetchCardById = (state, action) => {
  state.cardById = action.payload;
  state.isLoading = false;
  state.error = null;
};

export const handleFulfilledDeleteCardById = (state, action) => {
  const { _id } = action.payload;
  const newArr = state.items.filter((item) => item._id !== _id);

  state.items = newArr;
  state.total = state.total -= 1;
};

export const handleTakeFavoritesList = (state, action) => {
  state.favorite = [...action.payload];
};

export const handleResetCardById = (state) => {
  return {
    ...state,
    cardById: {},
  };
};

export const handleResetFavoriteList = (state) => {
  return {
    ...state,
    favorite: [],
  };
};
