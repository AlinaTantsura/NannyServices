import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 
import userReducer from "./user/userSlice.js";
import nanniesReducer from "./fetchNaniesData/nanniesSlice.js";

const rootReducer = combineReducers({
    user: userReducer,
    nannies: nanniesReducer,
})
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['nannies', 'favoriteList']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;