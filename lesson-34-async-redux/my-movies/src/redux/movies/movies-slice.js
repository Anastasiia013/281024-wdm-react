import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const request = (store) => {
  store.loading = true;
  store.error = null;
};

const failed = (store, { payload }) => {
  store.loading = false;
  store.error = payload;
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    fetchMoviesRequest: request,
    fetchMoviesSuccess: (store, { payload }) => {
      store.loading = false;
      store.items = [...payload];
    },
    fetchMoviesFailed: failed,
    addMovieRequest: request,
    addMovieSuccess: (store, { payload }) => {
      store.loading = false;
      store.items.push(payload);
    },
    addMovieFailed: failed,
    deleteMovieRequest: request,
    deleteMovieSuccess: (store, {payload})=> {
      store.loading = false;
      store.items = store.items.filter(item => item.id !== payload);
    },
    deleteMovieFailed: failed,
  },
});

export const {
  fetchMoviesRequest,
  fetchMoviesSuccess,
  fetchMoviesFailed,
  addMovieRequest,
  addMovieSuccess,
  addMovieFailed,
  deleteMovieRequest,
  deleteMovieSuccess,
  deleteMovieFailed,
} = moviesSlice.actions;

export default moviesSlice.reducer;
