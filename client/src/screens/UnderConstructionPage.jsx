import under from "../assets/44190-under-construction-1.gif";
import { Typography, useTheme, Box } from "@mui/material";

const UnderConstructionPage = () => {
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
      <Typography fontWeight="700" fontSize="1.7rem">
        Kruger
        <span style={{ color: theme.palette.secondary.main }}>Motors</span>
      </Typography>
      <Box
        className="animate__rollIn"
        component="img"
        sx={{
          height: 500,
          width: 500,
        }}
        alt="underConstruction"
        src={under}
      />
    </Box>
  );
};

export default UnderConstructionPage;
