import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0077FF",
    },
    secondary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    h1: {
      color: "#F1F3F5",
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: "3rem",
      letterSpacing: "0em",
    },
    h3: {
      fontWeight: "700",
      fontSize: "16px",
      lineHeight: "24px",
    },
    subtitle2: {
      fontWeight: 700,
      fontSize: "12px",
      color: "red"
    },
    subtitle1: {
      color: "#95A1B3",
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
    },
    body1: {
      color: "#333333",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  spacing: 4,
  components: {
    MuiToolbar: {
      styleOverrides: {
        root: ({ theme }) => ({
          justifyContent: "space-between",
          paddingLeft: theme.spacing(12),
          paddingRight: theme.spacing(12),
        }),
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          textTransform: "none",
          backgroundColor: theme.palette.secondary.main,
          borderRadius: theme.spacing(3),
          padding: theme.spacing(6),
          display: "flex",
          flexDirection: "column",
          minHeight: "250px",
          alignItems: "center"
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeSmall: ({ theme }) => ({
          padding: theme.spacing(1.5, 2),
        }),
        root: ({ theme }) => ({
          textTransform: "none",
          minHeight: 32,
          backgroundColor: "#d9d9d9",
          borderRadius: "24px",
          padding: theme.spacing(3, 6),
          "&:hover": {
            backgroundColor: theme.palette.secondary.main,
          },
        }),
        outlined: {
            backgroundColor: "#d9928e",
            borderRadius: "24px",
            color: "black",
            "&:hover": {
              backgroundColor: "red",
            },
        },
        contained: {
          color: "black",
          backgroundColor: "white",
          outline: "none",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        text: {
          fontWeight: 400,
          lineHeight: "24px",
          letterSpacing: "0.14px",
          fontSize: "16px",
        },
      },
    },
  },
});
export default theme;
