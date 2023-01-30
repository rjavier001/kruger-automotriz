import { IconButton, Stack, Typography } from "@mui/material";

import Image from "mui-image";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import Logo from "../../Assets/LOGO_KRUGERMOTORS.png";
import chevrolet_logo from "../../Assets/Logos/chevrolet_logo.png";
import fiat_logo from "../../Assets/Logos/fiat_logo.png";
import ford_logo from "../../Assets/Logos/ford_logo.png";
import kia_logo from "../../Assets/Logos/kia_logo.png";
import volkswagen_logo from "../../Assets/Logos/volkswagen_logo.png";

import { Box } from "@mui/system";

const DividerBrand = () => {
  return (
    <Stack
      sx={{
        marginTop: "40px",
        background: "#ff910d",
        padding: "0.5em 1.5em 0.5em 1.5em",
        objectFit: "contain",
      }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      direction="row"
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Image width="20%" src={chevrolet_logo} />
      <Image width="15%" src={fiat_logo} />
      <Image width="18%" src={kia_logo} />
      <Image width="20%" src={ford_logo} />
      <Image width="20%" src={volkswagen_logo} />
    </Stack>
  );
};

export default DividerBrand;
