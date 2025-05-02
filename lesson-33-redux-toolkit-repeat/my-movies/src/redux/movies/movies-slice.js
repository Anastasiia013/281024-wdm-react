import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: [],
  reducers: {
    addMovie: {
      prepare: (data) => {
        return {
          payload: {
            ...data,
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
