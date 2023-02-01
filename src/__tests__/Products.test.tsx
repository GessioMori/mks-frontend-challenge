import "whatwg-fetch";
import { screen } from "@testing-library/react";
import Home from "@/pages/";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/global";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { apiResponse } from "./utils/apiResponse.example";
import { renderWithProviders } from "./utils";

describe("Tests products functionalities", () => {
  const handlers = [
    rest.get(
      "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products",
      (req, res, ctx) => {
        return res(ctx.json(apiResponse), ctx.delay(150));
      }
    ),
  ];

  const server = setupServer(...handlers);

  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it("Should render all product cards", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    for (let i = 0; i < apiResponse.products.length; i++) {
      expect(
        await screen.findByText(apiResponse.products[i].name)
      ).toBeInTheDocument();
    }
    expect(screen.queryByTestId("loader-spinner")).toBeFalsy();
  });

  it("Should render products information", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    for (let i = 0; i < apiResponse.products.length; i++) {
      expect(
        await screen.findByText(apiResponse.products[i].name)
      ).toBeInTheDocument();
      expect(
        await screen.findByText(apiResponse.products[i].description)
      ).toBeInTheDocument();
      expect(
        await screen.findByText(
          "R$" + apiResponse.products[i].price.split(".")[0]
        )
      ).toBeInTheDocument();
    }
  });

  it("Should render error message when API call fails", async () => {
    server.use(
      rest.get(
        "https://mks-challenge-api-frontend.herokuapp.com/api/v1/products",
        (req, res, ctx) => {
          return res(ctx.status(500));
        }
      )
    );

    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    expect(
      await screen.findByText(
        "Houve um erro no carregamento dos produtos, tente novamente mais tarde!"
      )
    ).toBeInTheDocument();

    expect(screen.queryByTestId("loader-spinner")).toBeFalsy();
  });

  it("Should render loader when API call is loading", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    expect(screen.queryAllByTestId("loader-spinner")).toHaveLength(8);
  });
});
