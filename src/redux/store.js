import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { authReducer, interceptor } from "./auth/auth-slice";
import { newsReducer } from "./news/news-slice";
import { friendsReducer } from "./ourFriends/ourFriends-slice";
import { noticesReducer } from "./notices/notices-slice";

import handleMiddleware from "./utils/handleMiddleware";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notices: noticesReducer,
    news: newsReducer,
    friends: friendsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: true,
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(handleMiddleware),
});

interceptor(store);

export const persistor = persistStore(store);
