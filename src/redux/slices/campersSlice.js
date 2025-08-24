import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers, fetchCamper } from "../operations/campersOperations.js";
import { fetchFilteredCampers } from "../operations/filtersOperations.js";

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
    filters: {
      equipment: [],
      type: null,
      page: 1,
      limit: 12,
    },
    total: 0,
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
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    resetFilters: (state) => {
      state.filters = { equipment: [], type: null, page: 1, limit: 6 };
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
      .addCase(fetchCamper.rejected, handleRejected)

      .addCase(fetchFilteredCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFilteredCampers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchFilteredCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const campersReducer = slice.reducer;
export const {
  incrementPage,
  setPage,
  clearCampers,
  setHasMore,
  setFilter,
  resetFilters,
} = slice.actions;
