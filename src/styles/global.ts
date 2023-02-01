import { createGlobalStyle } from "styled-components";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const GlobalStyle = createGlobalStyle`
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    -webkit-font-smoothing: "antialiased";
    background-color: ${(props) => props.theme.colors.gray200};
    color: ${(props) => props.theme.colors.gray600};
  }
  body, input, textarea, button{
    font-family: ${montserrat.style.fontFamily};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    border: 0;
  }
`;

export default GlobalStyle;
