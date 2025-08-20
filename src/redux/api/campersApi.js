import axios from "axios";

export const API = axios.create({
  baseURL: "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io",
});

// export const getCampers = (params) => API.get("/campers", { params });
// export const getCamperById = (id) => API.get(`/campers/${id}`);
