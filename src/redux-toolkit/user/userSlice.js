import { createSlice } from "@reduxjs/toolkit";
import { logInUser, logOutUser, registerUser } from "./operations";

const initialState = {
  isLoading: false,
  error: null,
  user: {
    email: null,
    token: null,
    id: null,
    name: null,
    isLogIn: false,
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
 
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true;
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user.email = action.payload.email;
      state.user.token = action.payload.accessToken;
      state.user.id = action.payload.uid;
      state.user.name = action.payload.displayName;
      state.user.isLogIn = true;
      state.error = null;
      state.isLoading = false
    }),
      builder.addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
      builder.addCase(logInUser.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(logInUser.fulfilled, (state, action) => {
      state.user.email = action.payload.email;
      state.user.token = action.payload.accessToken;
      state.user.id = action.payload.uid;
      state.user.name = action.payload.displayName;
      state.user.isLogIn = true;
        state.error = null;
        state.isLoading = false;
    }),
      builder.addCase(logInUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      }),
      builder.addCase(logOutUser.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(logOutUser.fulfilled, (state) => {
        state.user.email = null;
        state.user.token = null;
        state.user.id = null;
        state.user.name = null;
        state.user.isLogIn = false;
        state.error = null;
        state.isLoading = false;
    }),
      builder.addCase(logOutUser.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
