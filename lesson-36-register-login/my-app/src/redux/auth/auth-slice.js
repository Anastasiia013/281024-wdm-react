import { createSlice } from "@reduxjs/toolkit";

import {pending, rejected} from "../../shared/lib/redux";

import { registerUser } from "./auth-thunks";

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    success: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder
        .addCase(registerUser.pending, pending)
        .addCase(registerUser.rejected, rejected)
        .addCase(registerUser.fulfilled, (store)=> {
            store.loading = true;
            store.success = true;
        })
    }
});

export default authSlice.reducer;