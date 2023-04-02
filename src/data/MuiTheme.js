import { createTheme } from "@mui/material/styles";
// MUI
import { truncateLines } from "./MuiHelpers";

const theme = createTheme({
  direction: "ltr",
  palette: {
    primary: {
      main: "#0b594f",
    },
    secondary: {
      main: "#0b594f",
    },
    text: {
      main: "#777",
      secondary: "#bdbdbd",
    },
  },

  components: {
    MuiTypography: {
      variants: truncateLines([1, 2, 3, 4, 5]),
    },
    MuiButton: {
      styleOverrides: {
        root: {
          padding: "15px 40px",
          borderRadius: "0",
          fontWeight: 700,
          fontSize: 14,
          textTransform: "uppercase",
          "@media screen and (max-width: 768px)": {
            padding: "10px 20px",
            fontSize: 12,
          },
        },
        contained: {
          color: "#fff",
          backgroundColor: "#d7282b",
          boxShadow: "0px 14px 24px 0px #d7282b3d",
          border: "2px solid #d7282b",

          "&:hover": {
            color: "#000",
            backgroundColor: "#fff",
            boxShadow: "unset",
            borderColor: "#d7282b",
          },
        },
        outlined: {
          color: "#fff",
          backgroundColor: "#d7282b",
          border: "2px solid #d7282b",
          boxShadow: "unset",

          "&:hover": {
            color: "#000",
            backgroundColor: "#fff",
            border: "2px solid #fff",
            boxShadow: "unset",
          },
        },
        secondOutlined: {
          color: "#000",
          backgroundColor: "#fff",
          border: "2px solid #fff",
          boxShadow: "unset",

          "&:hover": {
            color: "#fff",
            backgroundColor: "#d7282b",
            border: "2px solid #d7282b",
            boxShadow: "unset",
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 400,
          maxWidth: "100%",
        },
      },
    },
  },
});
export default theme;
