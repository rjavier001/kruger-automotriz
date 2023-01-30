import { IconButton, Stack, Typography } from "@mui/material";

import Image from "mui-image";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import Logo from "../../assets/LOGO_KRUGERMOTORS.png";
import chevrolet_logo from "../../assets/Logos/chevrolet_logo.png";
import fiat_logo from "../../assets/Logos/fiat_logo.png";
import ford_logo from "../../assets/Logos/ford_logo.png";
import kia_logo from "../../assets/Logos/kia_logo.png";
import volkswagen_logo from "../../assets/Logos/volkswagen_logo.png";

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
    >
      <Image width="auto" height={80} src={chevrolet_logo} />
      <Image width="auto" src={fiat_logo} />
      <Image width="auto" src={kia_logo} />
      <Image width="auto" src={ford_logo} />
      <Image width="auto" src={volkswagen_logo} />
    </Stack>
  );
};

export default DividerBrand;
