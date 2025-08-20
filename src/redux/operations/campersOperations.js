import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../api/campersApi.js";

// 🔹 Получить список кемперов
export const fetchCampers = createAsyncThunk(
  "campers/fetchAll",
  async ({ page, limit }, thunkAPI) => {
    try {
      const response = await API.get("/campers", {
        params: { page, limit },
      });

      return Array.isArray(response.data) ? response.data : [];
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// 🔹 Получить одного кемпера
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

// 🔹 Получить кемперов по владельцу
// export const fetchCampersByOwner = createAsyncThunk(
//   "campers/fetchByOwner",
//   async (ownerId, thunkAPI) => {
//     try {
//       const response = await API.get("/campers", {
//         params: { ownerId },
//       });

//       return {
//         ownerId,
//         campers: Array.isArray(response.data) ? response.data : [],
//       };
//     } catch (e) {
//       return thunkAPI.rejectWithValue({ ownerId, message: e.message });
//     }
//   }
// );
