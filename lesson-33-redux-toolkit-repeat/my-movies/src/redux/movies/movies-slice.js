import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie: {
      prepare: (data) => {
        return {
          payload: {
            ...data,
            id: nanoid(),
            createdAt: new Date(),
          },
        };
      },
      reducer: (store, { payload }) => [...store, payload],
    },
    deleteMovie: (store, { payload }) =>
      store.filter((item) => item.id !== payload),
    toggleFavorite: (store, {payload})=> {
      const movie = store.find(item => item.id === payload);
      movie.favorite = !movie.favorite;
    }
  },
});

export const { addMovie, deleteMovie, toggleFavorite } = moviesSlice.actions;

export default moviesSlice.reducer;
