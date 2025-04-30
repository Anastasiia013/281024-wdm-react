import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (store, { payload }) => [...store, payload],
      prepare: (data) => {
        return {
          payload: {
            id: nanoid(),
            completed: false,
            ...data,
          },
        };
      },
    },
    toggleTodoCompleted: (store, { payload }) => {
      const todo = store.find((item) => item.id === payload);
      todo.completed = !todo.completed;
    },
    deleteTodo: (store, { payload }) =>
      store.filter((item) => item.id !== payload),
  },
});

export const { addTodo, deleteTodo, toggleTodoCompleted } = todoSlice.actions;

export default todoSlice.reducer;
