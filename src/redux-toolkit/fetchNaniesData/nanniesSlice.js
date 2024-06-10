import { createSlice } from "@reduxjs/toolkit";
import { getLastData, getNanniesData } from "./operations";

const nanniesSlice = createSlice({
    name: "nannies",
    initialState: {
        data: null,
        lastIndex: 0,
    },
    extraReducers: (builder) => {
            builder.addCase(getNanniesData.fulfilled, (state, action) => {
                state.data = action.payload;
            }),
            builder.addCase(getLastData.fulfilled, (state, action) => {
                state.lastIndex = Number(Object.keys(action.payload)[0]);
            })
    }
});

export default nanniesSlice.reducer;