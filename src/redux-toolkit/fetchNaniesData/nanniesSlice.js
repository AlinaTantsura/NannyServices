import { createSlice } from "@reduxjs/toolkit";
import { getLastData, getNanniesData } from "./operations";

const nanniesSlice = createSlice({
    name: "nannies",
    initialState: {
        isLoading: false,
        error: null,
        data: null,
        lastIndex: 0,
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
        builder.addCase(getLastData.pending, (state) => {
            state.isLoading = true;
        }),
            builder.addCase(getLastData.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.lastIndex = Number(Object.keys(action.payload)[0]);
            }),
            builder.addCase(getLastData.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export default nanniesSlice.reducer;