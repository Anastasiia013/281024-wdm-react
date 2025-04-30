import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: {
        reducer: (store, {payload})=> [...store, payload],
        prepare: data => {
            return {
                payload: {
                    id: nanoid(),
                    completed: false,
                    ...data,
                }
            }
        }
    }
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
