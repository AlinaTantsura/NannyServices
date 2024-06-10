import { createSlice } from "@reduxjs/toolkit";
import { logInUser, logOutUser, registerUser } from "../user/operations";
import { getLastData, getNanniesData } from "../fetchNaniesData/operations";

const requestSlice = createSlice({
    name: 'request',
    initialState: {
        error: null,
        isLoading: false,
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.error = null;
            state.isLoading = true;
        })
        builder.addCase(registerUser.fulfilled, (state) => {
            state.error = null;
            state.isLoading = false
        }),
            builder.addCase(registerUser.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            }),
            builder.addCase(logInUser.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            }),
            builder.addCase(logInUser.fulfilled, (state) => {
                state.error = null;
                state.isLoading = false;
            }),
            builder.addCase(logInUser.rejected, (state, action) => {
                state.isLoading = false;
                if (action.payload === "auth/invalid-credential") {
                    state.error = "Wrong email or password(";
                    return
                }
                state.error = action.payload;
            }),
            builder.addCase(logOutUser.pending, (state) => {
                state.error = null;
                state.isLoading = true;
            }),
            builder.addCase(logOutUser.fulfilled, (state) => {
                state.error = null;
                state.isLoading = false;
            }),
            builder.addCase(logOutUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
            builder.addCase(getNanniesData.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            }),
             builder.addCase(getNanniesData.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
             }),
            builder.addCase(getNanniesData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            }),
             builder.addCase(getLastData.pending, (state) => {
                 state.isLoading = true;
                 state.error = null;
             }),
            builder.addCase(getLastData.fulfilled, (state) => {
                state.isLoading = false;
                state.error = null;
            }),
            builder.addCase(getLastData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
        ;
    }
});

export default requestSlice.reducer;