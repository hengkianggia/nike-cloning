import { createSlice } from "@reduxjs/toolkit";

const initialState = { grid: false };

const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    gridFilter(state) {
      state.grid = !state.grid;
    },
  },
});

export const gridAction = gridSlice.actions;

export default gridSlice.reducer;
