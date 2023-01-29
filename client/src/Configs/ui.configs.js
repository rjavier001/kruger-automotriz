const uiConfigs = {
  style: {
    gradientBgImage: {
      dark: {
        backgroundImage: "linear-gradient(to top, #81bd00, rgba(0,0,0,0))"
      },
      light: {
        backgroundImage: "linear-gradient(to top, #6b778c, rgba(0,0,0,0))"
      }
    },
    horizontalGradientBgImage: {
      dark: {
        backgroundImage: "linear-gradient(to right,#81bd00, rgba(0,0,0,0))"
      },
      light: {
        backgroundImage: "linear-gradient(to right, #6b778c, rgba(0,0,0,0))"
      }
    },
    typoLines: (lines, textAlign) => ({
      textAlign: textAlign || "justify",
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: lines
    }),
    mainContent: {
      maxWidth: "1366px",
      margin: "auto",
      padding: 2
    }
  },
  size: {
    sidebarWith: "300px",
    contentMaxWidth: "1366px"
  }
};

export default uiConfigs;