// themeReducer.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "light",
};
const themeSlice = createSlice({
  name: "themeReducer",
  initialState: initialState,
  reducers: {
    themeReducer(state, action) {
      state.theme = action.payload;
    },
  },
});

export const themeAction = themeSlice.actions;
export default themeSlice;
