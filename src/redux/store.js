import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./slices/search/searchSlice";

export const store = configureStore({
  reducer: {
    searchSlice,
  },
});
