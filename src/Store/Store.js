import { configureStore } from "@reduxjs/toolkit";
import gridReducer from '../Store/Grid'
import filterReducer from '../Store/Filter'

const store = configureStore({
  reducer: { grid: gridReducer, filter:filterReducer},
});

export default store;
