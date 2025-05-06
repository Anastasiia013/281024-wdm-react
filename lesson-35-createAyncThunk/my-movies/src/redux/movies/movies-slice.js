import { createSlice } from "@reduxjs/toolkit";

import { fetchMovies, addMovie, deleteMovie } from "./movies-thunks";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const pending = (store) => {
  store.loading = true;
  store.error = null;
};

const rejected = (store, { payload }) => {
  store.loading = false;
  store.error = payload;
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  // reducers: {
  //   fetchMoviesRequest: pending,
  //   fetchMoviesSuccess: (store, { payload }) => {
  //     store.loading = false;
  //     store.items = [...payload];
  //   },
  //   fetchMoviesFailed: rejected,
  //   addMovieRequest: pending,
  // addMovieSuccess: (store, { payload }) => {
  //   store.loading = false;
  //   store.items.push(payload);
  // },
  //   addMovieFailed: rejected,
  //   deleteMovieRequest: pending,
  // deleteMovieSuccess: (store, {payload})=> {
  //   store.loading = false;
  //   store.items = store.items.filter(item => item.id !== payload);
  // },
  //   deleteMovieFailed: rejected,
  // },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, pending)
      .addCase(fetchMovies.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = [...payload];
      })
      .addCase(fetchMovies.rejected, rejected)
      .addCase(addMovie.pending, pending)
      .addCase(addMovie.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items.push(payload);
      })
      .addCase(addMovie.rejected, rejected)
      .addCase(deleteMovie.pending, pending)
      .addCase(deleteMovie.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.items = store.items.filter((item) => item.id !== payload);
      })
      .addCase(deleteMovie.rejected, rejected);
  },
});

// export const {
//   fetchMoviesRequest,
//   fetchMoviesSuccess,
//   fetchMoviesFailed,
//   addMovieRequest,
//   addMovieSuccess,
//   addMovieFailed,
//   deleteMovieRequest,
//   deleteMovieSuccess,
//   deleteMovieFailed,
// } = moviesSlice.actions;

export default moviesSlice.reducer;
