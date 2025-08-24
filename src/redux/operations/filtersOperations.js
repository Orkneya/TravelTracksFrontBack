import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api/campersApi.js";

export const fetchFilteredCampers = createAsyncThunk(
  "campers/fetchFiltered",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { filters } = getState().campers;

      const params = {
        page: filters.page,
        limit: filters.limit,
        location: filters.location || undefined,
        form: filters.form || undefined,
      };
      if (filters.equipment?.length) {
        filters.equipment.forEach((eq) => {
          params[eq] = true;
        });
      }

      const response = await API.get("/campers", { params });

      return {
        items: response.data.items,
        total: response.data.total,
      };
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);
