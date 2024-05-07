

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favoriteMovies: [],
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addFavoriteMovie: (state, action) => {
      state.favoriteMovies.push(action.payload);
    },
    removeFavoriteMovie: (state, action) => {
      state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload.id);
    },
  },
});

export const { addFavoriteMovie, removeFavoriteMovie } = movieSlice.actions;

export default movieSlice.reducer;
