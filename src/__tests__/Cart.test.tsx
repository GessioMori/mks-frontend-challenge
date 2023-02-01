import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { ThemeProvider } from "styled-components";
import { renderWithProviders } from "./utils";
import { act } from "react-dom/test-utils";
import { apiResponse } from "./utils/apiResponse.example";
import { screen } from "@testing-library/react";
import Home from "@/pages/";
import { theme } from "@/styles/theme";
import GlobalStyle from "@/styles/global";

describe("Tests cart functionalities", () => {
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

  it("Should open cart modal", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    const cartButton = await screen.findByTestId("cart-button");

    act(() => {
      cartButton.click();
    });

    expect(screen.getByTestId("cart-modal")).toHaveStyle("display: flex");
  });

  it("Should close cart modal", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    const cartButton = await screen.findByTestId("cart-button");

    act(() => {
      cartButton.click();
    });

    const closeButton = screen.getByTestId("close-button");

    act(() => {
      closeButton.click();
    });

    expect(screen.queryByTestId("cart-modal")).toHaveStyle("display: none");
  });

  it("Should be able to add an item to cart", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    const productButton = await screen.findByTestId(
      apiResponse.products[0].name + "-button"
    );

    act(() => {
      productButton.click();
    });

    const cartButton = await screen.findByTestId("cart-button");

    expect(cartButton).toHaveTextContent("1");

    act(() => {
      productButton.click();
    });

    expect(cartButton).toHaveTextContent("2");
  });

  it("Should add product card to cart", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    const cartButton = await screen.findByTestId("cart-button");

    const productButton = await screen.findByTestId(
      apiResponse.products[0].name + "-button"
    );

    act(() => {
      productButton.click();
      cartButton.click();
    });

    const cartItem = await screen.findByTestId(
      apiResponse.products[0].name + "-cart-item"
    );

    expect(cartItem).toBeInTheDocument();
  });

  it("Should increase item quantity", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    const cartButton = await screen.findByTestId("cart-button");

    const productButton = await screen.findByTestId(
      apiResponse.products[0].name + "-button"
    );

    act(() => {
      productButton.click();
      cartButton.click();
    });

    const increaseButton = await screen.findByTestId(
      apiResponse.products[0].name + "-add-button"
    );

    act(() => {
      increaseButton.click();
    });

    const quantity = await screen.findByTestId(
      apiResponse.products[0].name + "-quantity"
    );

    expect(quantity).toHaveTextContent("2");
  });

  it("Should decrease item quantity", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    const cartButton = await screen.findByTestId("cart-button");

    const productButton = await screen.findByTestId(
      apiResponse.products[0].name + "-button"
    );

    act(() => {
      productButton.click();
      cartButton.click();
    });

    const increaseButton = await screen.findByTestId(
      apiResponse.products[0].name + "-add-button"
    );
    const decreaseButton = await screen.findByTestId(
      apiResponse.products[0].name + "-remove-button"
    );

    act(() => {
      increaseButton.click();
      increaseButton.click();
      decreaseButton.click();
    });

    const quantity = await screen.findByTestId(
      apiResponse.products[0].name + "-quantity"
    );

    expect(quantity).toHaveTextContent("2");
  });

  it("Should delete item from cart", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    const cartButton = await screen.findByTestId("cart-button");

    const productButton = await screen.findByTestId(
      apiResponse.products[0].name + "-button"
    );

    act(() => {
      productButton.click();
      cartButton.click();
    });

    const deleteButton = await screen.findByTestId(
      apiResponse.products[0].name + "-delete-button"
    );

    act(() => {
      deleteButton.click();
    });

    expect(
      screen.queryByTestId(apiResponse.products[0].name + "-cart-item")
    ).toBeNull();
  });

  it("Should show empty cart message", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    const cartButton = await screen.findByTestId("cart-button");

    act(() => {
      cartButton.click();
    });

    expect(screen.getByTestId("empty-cart")).toBeInTheDocument();
  });

  it("Should show total price", async () => {
    renderWithProviders(
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    );

    const cartButton = await screen.findByTestId("cart-button");

    const product1Button = await screen.findByTestId(
      apiResponse.products[0].name + "-button"
    );

    const product2Button = await screen.findByTestId(
      apiResponse.products[1].name + "-button"
    );

    const product3Button = await screen.findByTestId(
      apiResponse.products[3].name + "-button"
    );

    act(() => {
      product1Button.click();
      product2Button.click();
      product2Button.click();
      product3Button.click();
      product3Button.click();
      product3Button.click();
      cartButton.click();
    });

    const total =
      Number(apiResponse.products[0].price) +
      Number(apiResponse.products[1].price) * 2 +
      Number(apiResponse.products[3].price) * 3;

    expect(screen.getByTestId("total-price")).toHaveTextContent(`R$${total}`);
  });
});
