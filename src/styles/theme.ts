export const theme = {
  colors: {
    white: "#FFFFFF",
    black: "#000000",
    gray400: "373737",
    gray600: "#2C2C2C",
    gray300: "#EEEEEE",
    gray200: "#F9F9F9",
    blue: "#0F52BA",
  },
  radii: {
    sm: "4px",
    md: "5px",
    lg: "8px",
    full: "9999px",
  },
  fontWeights: {
    light: 300,
    regular: 400,
    semibold: 600,
    bold: 700,
  },
  sizes: {
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "48px",
  },
} as const;

export type Theme = typeof theme;
