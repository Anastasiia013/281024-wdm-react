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
  },
});

export const { addMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
