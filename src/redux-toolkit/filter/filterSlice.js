import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterOption: "A to Z",
        favoriteList: [],
}
const filterSlice = createSlice({
    name: "filter",
    initialState,
    reducers: {
        changeFilterOption(state, action) {
            state.filterOption = action.payload;
        },
        addToTheFavorite(state, action) {
            state.favoriteList.push(action.payload)
        },
        removeFromTheFavorite(state, action) {
            state.favoriteList = state.favoriteList.filter(fav => fav.name !== action.payload)
        },
        
    }
});

export const { addToTheFavorite, removeFromTheFavorite, changeFilterOption } = filterSlice.actions;
export default filterSlice.reducer;