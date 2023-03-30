import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: true };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    openFilter(state) {
      state.open = !state.open;
    },
  },
});

export const filterAction = filterSlice.actions;

export default filterSlice.reducer;