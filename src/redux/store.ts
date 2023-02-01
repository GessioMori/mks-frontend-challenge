import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./features/cart";
import { productsApi } from "@/api";

export const store = configureStore({
  reducer: {
    cart: CartSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(productsApi.middleware);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
