import { IconButton, Stack, Typography } from "@mui/material";

import Image from "mui-image";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import Logo from "../../Assets/LOGO_KRUGERMOTORS.png";

import { Box } from "@mui/system";

const DividerBrand = () => {
  return (
    <Stack
      sx={{ marginTop: "40px", background: "#ff910d" }}
      height={100}
      direction="row"
      spacing={10}
      alignItems="center"
      justifyContent="space-evenly"
    ></Stack>
  );
};

export default DividerBrand;
