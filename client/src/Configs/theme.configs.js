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
            background: {
              default: "#000",
              paper: "#131313",
            },
          }
        : {
            primary: {
              main: "#ffb814",
              contrastText: "#ffffff",
            },
            secondary: {
              main: "#ff910d",
              contrastText: "#ffffff",
            },
            background: {
              // default: colors.grey["100"],
              paper: "#ff910d",
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
