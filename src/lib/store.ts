import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { lastFmSlice } from "./reducers";

export const store = configureStore({
  reducer: {
    [lastFmSlice.reducerPath]: lastFmSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(lastFmSlice.middleware),
});

setupListeners(store.dispatch);
