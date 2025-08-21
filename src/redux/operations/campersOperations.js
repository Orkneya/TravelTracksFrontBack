import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api/campersApi.js";

export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await API.get("/campers", {
        params: { page, limit },
      });
      return {
        items: response.data.items,
        total: response.data.total,
      };
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCamper = createAsyncThunk(
  "campers/fetchCamper",
  async (id, thunkAPI) => {
    try {
      const response = await API.get(`/campers/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
