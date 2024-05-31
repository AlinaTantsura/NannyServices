import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'; 
import userReducer from "./user/userSlice.js";
import nanniesReducer from "./fetchNaniesData/nanniesSlice.js";
import filterReducer from "./filter/filterSlice.js"

const rootReducer = combineReducers({
    user: userReducer,
  nannies: nanniesReducer,
    filter: filterReducer,
})
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['filter', 'user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;