import { extendTheme } from "native-base";

export const THEME = extendTheme({
  colors:{
    blue: {
      900: "#364D9D",
      500: "#647AC7"
    },
    red: {
      500: "#EE7979"
    },
    gray: {
      100: "#1a181b",
      200: "#3e3a40",
      300: "#5f5b62",
      400: "#9f9ba1",
      500: "#d9d8da",
      600: "#edecee",
      700: "#F7F7F8"
    },
    white: "#FFFFFF"
  },
  fonts: {
    heading: "Karla_700Bold",
    body: "Karla_400Regular",
  },
  fontSizes: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
  }
});