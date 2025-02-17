import type { AppProps } from "next/app";
import GlobalStyle from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </>
  );
}
