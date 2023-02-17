import { createTheme } from "@mui/material/styles";
import { colors } from "@mui/material";

export const themeModes = {
  dark: "dark",
  light: "light",
};

const themeConfigs = {
  custom: ({ mode }) => {
    const customPalette =
      mode === themeModes.dark
        ? {
            primary: {
              main: "#ff5000",
              contrastText: "#ffffff",
            },
            secondary: {
              main: "#ff5000",
              contrastText: "#ffffff",
            },
            /*  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,121,118,1) 35%, rgba(0,212,255,1) 100%); */
            background: {
              default: "rgb(0, 30, 60)",
              paper: "#131313",
            },
          }
        : {
            primary: {
              main: "#ff910d",
              contrastText: "#ffffff",
            },
            secondary: {
              main: "#00b040",
              contrastText: "#ffffff",
            },
            background: {
              // default: colors.grey["50"],
              // paper: "#ff910d",
            },
            text: {
              primary: "#000",
              secondary: "#6b778c",
            },
          };

    return createTheme({
      palette: {
        mode,
        ...customPalette,
      },
      components: {
        MuiButton: {
          defaultProps: { disableElevation: true },
        },
      },
    });
  },
};

export default themeConfigs;
