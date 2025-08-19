import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

// пока редьюсеров нет
const rootReducer = combineReducers({});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
/----------------------/;

// import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import storage from "redux-persist/lib/storage";
// import { persistStore, persistReducer } from "redux-persist";

// import campersReducer from "./slices/campersSlice.js";
// import filtersReducer from "./slices/filtersSlice.js";
// import favoritesReducer from "./slices/favoritesSlice.js";

// const rootReducer = combineReducers({
//   campers: campersReducer,
//   filters: filtersReducer,
//   favorites: favoritesReducer,
// });

// const persistConfig = {
//   key: "root",
//   storage,
//   whitelist: ["favorites"],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
// });

// export const persistor = persistStore(store);
