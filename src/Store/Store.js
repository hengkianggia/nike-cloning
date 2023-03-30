import { configureStore } from "@reduxjs/toolkit";
import gridReducer from '../Store/Grid'

const store = configureStore({
  reducer: { grid: gridReducer },
});

export default store;
