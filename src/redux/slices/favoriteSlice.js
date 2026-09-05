import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoritesSlice = createSlice({
  name: "favorites",

  initialState,

  reducers: {
    addFavorite: (state, action) => {
      const alreadyExists = state.favorites.find(
        (item) => item.id === action.payload.id
      );

      if (!alreadyExists) {
        state.favorites.push(action.payload);
      }
    },

    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },

    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const {
  addFavorite,
  removeFavorite,
  clearFavorites,
} = favoritesSlice.actions;

export default favoritesSlice.reducer;