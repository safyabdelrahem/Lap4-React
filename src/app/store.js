import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './movieslice'; 

const store = configureStore({
    reducer: {
        movies: moviesReducer,
    },
});

export default store;
