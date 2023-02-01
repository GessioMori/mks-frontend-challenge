import React, { PropsWithChildren } from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import cartReducer from "@/redux/features/cart";
import { productsApi } from "@/api";
import type { RenderOptions } from "@testing-library/react";
import type { AppStore, RootState } from "@/redux/store";
import type { PreloadedState } from "@reduxjs/toolkit";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
      },
      preloadedState,
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware);
      },
    }),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
