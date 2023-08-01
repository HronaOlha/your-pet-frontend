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
import authReducer from "./auth/auth-slice";
import { petsReducer } from "./pets/pets-slice";
import { newsReducer } from "./news/news-slice";
import { friendsReducer } from "./ourFriends/ourFriends-slice";
import { noticesReducer } from "./notices/notices-slice";

import { interceptor } from "../shared/utils/axiosConfig";
import handleMiddlewateForNoticePage from "./utils/handleMiddlewateForNoticePage";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    pets: petsReducer,
    notices: noticesReducer,
    news: newsReducer,
    friends: friendsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(handleMiddlewateForNoticePage),
});

interceptor(store);

export const persistor = persistStore(store);
