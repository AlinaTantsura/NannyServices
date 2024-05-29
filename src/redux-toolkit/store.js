import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice.js";
import nanniesReducer from "./fetchNaniesData/nanniesSlice.js";

export const store = configureStore({
  reducer: {
    user: userReducer,
    nannies: nanniesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
