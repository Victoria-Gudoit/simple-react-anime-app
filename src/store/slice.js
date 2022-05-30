import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { LOAD_STATUSES } from "./constants";
import { getTopAnime } from "../api/anime";

export const fetchTopAnime = createAsyncThunk(
  "topAnime/getTopAnime",
  async (type) => {
    const result = await getTopAnime(type);
    console.log(result.data.slice(0, 12));
    return result.data;
  }
);

export const { actions, reducer } = createSlice({
  name: "anime",
  initialState: {
    data: [],
    loadStatus: LOAD_STATUSES.UNKNOWN,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTopAnime.pending, (state) => {
      state.loadStatus = LOAD_STATUSES.LOADING;
    });
    builder.addCase(fetchTopAnime.fulfilled, (state, action) => {
      state.loadStatus = LOAD_STATUSES.LOADED;
      state.data = action.payload;
    });
    builder.addCase(fetchTopAnime.rejected, (state) => {
      state.loadStatus = LOAD_STATUSES.ERROR;
    });
  },
});
