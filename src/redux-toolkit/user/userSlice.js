import { createSlice } from "@reduxjs/toolkit";
import { logInUser, logOutUser, registerUser } from "./operations";

const initialState = {
  email: null,
  token: null,
  id: null,
  name: null,
    error: null,
  isLogIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logoutUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.accessToken;
      state.id = action.payload.uid;
      state.name = action.payload.displayName;
        state.error = null;
        state.isLogIn = true;
    }),
      builder.addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
      });
    builder.addCase(logInUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.accessToken;
      state.id = action.payload.uid;
      state.name = action.payload.displayName;
        state.error = null;
        state.isLogIn = true;
    }),
      builder.addCase(logInUser.rejected, (state, action) => {
        state.error = action.payload;
      });
    builder.addCase(logOutUser.fulfilled, (state, action) => {
      state.email = null;
      state.token = null;
      state.id = null;
      state.name = null;
        state.error = null;
        state.isLogIn = false;
    }),
      builder.addCase(logOutUser.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export const { logoutUser } = userSlice.actions;
export default userSlice.reducer;
