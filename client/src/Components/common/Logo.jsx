import { Typography, useTheme, Box } from "@mui/material";
import logoIcon from "../../assets/LOGO_KRUGERMOTORS.png";

const Logo = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        paddingTop: 2,
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        sx={{
          height: 100,
          width: 100,         
        }}
        alt="krugerLogo"
        src={logoIcon}
      />
      {/* <img src={logoIcon} alt="logo" /> */}
      <Typography fontWeight="700" fontSize="1.7rem">
        Kruger<span style={{ color: theme.palette.secondary.main }}>Motors</span>
      </Typography>
    </Box>
  );
};

export default Logo;
