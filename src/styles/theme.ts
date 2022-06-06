import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    primary: {
      highlight: "#FFBA08"
    },
    dark: {
      info : "#999999",
      headings : "#47585B",
      black : "#000000"
    },
    light: {
      info : "#DADADA",
      headings : "#F5F8FA",
      white : "#FFFFFF"
    },
  },
  fonts: {
    heading: `"Poppins", sans-serif`,
    body: `"Poppins", sans-serif`
  },
  styles: {
    global: {
      body: {
        fontFamily: "Poppins",
        bg: "light.headings",
        color: "dark.headings"
      }
    }
  }
});
