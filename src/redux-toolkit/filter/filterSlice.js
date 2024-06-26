import { createSlice } from "@reduxjs/toolkit";
import { logOutUser } from "../user/operations";

const initialState = {
  filterOption: "Show all",
  favoriteList: [],
  filteredAllData: [],
};
const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeFilterOption(state, action) {
      state.filterOption = action.payload;
    },
      filterData(state, action) {
      if (state.filterOption === "A to Z") {
          state.filteredAllData = [...action.payload];
        state.filteredAllData.sort(({ name: a }, { name: b }) =>
          a.localeCompare(b)
          );
      } else if (state.filterOption === "Z to A") {
        state.filteredAllData = [...action.payload];
        state.filteredAllData.sort(({ name: a }, { name: b }) =>
          b.localeCompare(a)
          );
      } else if (state.filterOption === "Less than 10$")
        state.filteredAllData = action.payload.filter(
          (favoriteItem) => favoriteItem.price_per_hour < 10
        )
      else if (state.filterOption === "Greater than 10$")
        state.filteredAllData = action.payload.filter(
          (favoriteItem) => favoriteItem.price_per_hour >= 10
        )
      else if (state.filterOption === "Popular"){
        state.filteredAllData = [...action.payload];
        state.filteredAllData.sort(({ rating: a }, { rating: b }) =>
          b - a
          );
      }
      else if (state.filterOption === "Not popular")
        {
        state.filteredAllData = [...action.payload];
        state.filteredAllData.sort(({ rating: a }, { rating: b }) =>
          a - b
          );
      }
      else if (state.filterOption === "Show all")
        state.filteredAllData = action.payload;
    },
    addToTheFavorite(state, action) {
      state.favoriteList.push(action.payload);
      state.filteredList = state.favoriteList;
    },
    removeFromTheFavorite(state, action) {
      state.favoriteList = state.favoriteList.filter(
        (fav) => fav.name !== action.payload
      );
      state.filteredList = state.filteredList.filter(
        (fav) => fav.name !== action.payload
      );
    },
    clearFavoriteList(state) {
      state.favoriteList = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(logOutUser.fulfilled, (state) => {
      state.favoriteList = [];
    })
  }
});

export const {
  addToTheFavorite,
  removeFromTheFavorite,
  changeFilterOption,
  filterData,
  clearFavoriteList
} = filterSlice.actions;
export default filterSlice.reducer;
