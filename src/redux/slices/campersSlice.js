import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "../operations/campersOperations.js";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    currentCamper: null,
    isLoading: false,
    error: null,
    page: 1,
    limit: 12,
    hasMore: true,
  },
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    clearCampers(state) {
      state.items = [];
      state.hasMore = true;
    },
    setHasMore(state, action) {
      state.hasMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, handlePending)
      .addCase(fetchCampers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.page = action.meta.arg.page;
        if (state.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
        state.hasMore = state.items.length < action.payload.total;
      })
      .addCase(fetchCampers.rejected, handleRejected)

      .addCase(fetchCamper.pending, handlePending)
      .addCase(fetchCamper.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.currentCamper = action.payload;
      })
      .addCase(fetchCamper.rejected, handleRejected);
  },
});

export const campersReducer = slice.reducer;
export const { incrementPage, setPage, clearCampers, setHasMore } =
  slice.actions;
