import { responsiveFontSizes } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const initialTheme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          backgroundColor: "#f8f8f8",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          "#__next": {
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
          },
        },
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  typography: {
    fontSize: 16,
    htmlFontSize: 16,
  },
});

const theme = responsiveFontSizes(initialTheme);

export default theme;
