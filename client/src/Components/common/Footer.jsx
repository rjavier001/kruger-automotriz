import { IconButton, Stack, Typography } from "@mui/material";

import Image from "mui-image";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import Logo from "../../assets/LOGO_KRUGERMOTORS.png";
import { Box } from "@mui/system";

const Footer = () => {
  return (
    <Stack
      sx={{ marginTop: "40px", background: "#ff910d" }}
      height={200}
      direction="row"
      spacing={12}
      justifyContent="space-evenly"
    >
      <Stack direction="row" spacing={2}>
        <Typography sx={{ paddingTop: "30px" }} variant="h3">
          LLAMANOS <br /> 123 456 789
        </Typography>
      </Stack>
      <Stack height={180} alignItems={"flex-start"}>
        <Typography sx={{ paddingLeft: "10px" }} variant="h4">
          Redes
        </Typography>

        <IconButton>
          <FacebookIcon /> Facebook
        </IconButton>
        <IconButton>
          <InstagramIcon /> Instagram
        </IconButton>
        <IconButton>
          <TwitterIcon /> Twitter
        </IconButton>
      </Stack>

      <Image width="auto" src={Logo} />
    </Stack>
  );
};

export default Footer;
