import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (store, {payload}) => [...store, payload],
    }
});

export const {addTodo} = todoSlice.actions;

export default todoSlice.reducer;