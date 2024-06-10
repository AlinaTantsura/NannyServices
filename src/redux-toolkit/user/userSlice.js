import { createSlice } from "@reduxjs/toolkit";
import { logInUser, logOutUser, registerUser } from "./operations";

const initialState = {
    email: null,
    token: null,
    id: null,
    name: null,
    isLogIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isLogIn = true;
    }),
      builder.addCase(logInUser.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.isLogIn = true;
    }),
      builder.addCase(logOutUser.fulfilled, (state) => {
        state.email = null;
        state.token = null;
        state.id = null;
        state.name = null;
        state.isLogIn = false;
        
    });
  },
});

export default userSlice.reducer;

