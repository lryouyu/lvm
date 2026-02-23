// src/store/themeSlice.ts
import {createSlice} from "@reduxjs/toolkit";




export const themeSlice = createSlice({
    name: "theme",
    initialState: {mode: "light"},
    reducers: {
        setMode: (state, action) => {
            state.mode = action.payload;
        },
    },
});

export const { setMode } = themeSlice.actions;
export default themeSlice.reducer;