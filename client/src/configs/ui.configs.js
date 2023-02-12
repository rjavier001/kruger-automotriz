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
  },

export default uiConfigs;
  //---------------------------------------------------------------------------//
  /* Styles for the Card Component */
  box:{
    margin:'10px',
    marginBottom: '1rem',
    boxSizing:'border-box',
    // boxShadow: 'rgba(217,183,123,0.5) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px',
    borderRadius: '1rem',
    position: "relative",
  },
  item:{
    textAlign:'center',
    marginTop:'1rem'
  },
  text:{
    fontWeight:'bold',
    fontSize:'medium'
  },
  button:{
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '1rem'
  },
  card:{
    marginTop:'1em'
  },
  img:{
    with:'2rem',
    height:'15rem'
  },
  cardMedia:{
    margin:'auto',
    objectFit:'contain'
  }
};
export default uiConfigs;