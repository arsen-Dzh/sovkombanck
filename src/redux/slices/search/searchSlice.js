import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTooltip = createAsyncThunk(
  "search/fetchTooltip",
  async (search, { dispatch }) => {
    dispatch(setSearch(search));
    const { data } = await axios.post(
      "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/fio",
      { query: search },
      {
        headers: {
          Authorization: "Token " + "46eda496ff3b09b9a21683741b55c5e427d74116",
        },
      }
    );
    return data.suggestions;
  }
);

const initialState = {
  search: "",
  tooltip: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    clearTooltip(state) {
      state.tooltip = [];
    },
  },
  extraReducers: {
    [fetchTooltip.fulfilled]: (state, action) => {
      state.tooltip = action.payload;
    },
  },
});

export const { setSearch, clearTooltip } = searchSlice.actions;

export default searchSlice.reducer;
