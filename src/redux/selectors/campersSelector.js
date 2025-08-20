// import { createSelector } from "@reduxjs/toolkit";

export const selectCampers = (state) => state.campers.items;
export const selectCamper = (state) => state.campers.currentCamper;
export const selectLoading = (state) => state.campers.isLoading;
export const selectError = (state) => state.campers.error;
export const selectPage = (state) => state.campers.page;
export const selectHasMore = (state) => state.campers.hasMore;

// export const selectCampersByOwner = createSelector(
//   [(state) => state.campers.byOwner, (_, ownerId) => ownerId],
//   (byOwner, ownerId) => {
//     const result = byOwner?.[ownerId]?.items;
//     return result ?? [];
//   }
// );
