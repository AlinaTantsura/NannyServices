import { createSlice } from "@reduxjs/toolkit";
import { getNanniesData } from "./operations";

const nanniesSlice = createSlice({
    name: "nannies",
    initialState: {
        isLoading: false,
        error: null,
        data: null,
        favoriteList: [],
    },
    extraReducers: (builder) => {
        builder.addCase(getNanniesData.pending, (state) => {
            state.isLoading = true;
        }),
            builder.addCase(getNanniesData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.data = action.payload;
            }),
            builder.addCase(getNanniesData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default nanniesSlice.reducer;