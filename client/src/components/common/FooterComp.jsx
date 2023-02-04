import { IconButton, Stack, styled, Typography } from "@mui/material";
import Image from "mui-image";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

import Logo from "../../assets/LOGO_KRUGERMOTORS.png";

const FooterComp = () => {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    textAlign: "end",
  }));

  return (
    <Stack>
      <Stack
        sx={{ marginTop: "0px", background: "#ff910d" }}
        /* height={200} */
        direction={{ md: "row", xs: "column" }}
        spacing={12}
        justifyContent="space-evenly"
      >
        <Stack direction="column" spacing={0} alignItems={"center"}>
          <Stack direction="row" spacing={0}>
            <Stack
              sx={{
                width: "10px",
                marginTop: "10px",
                background: "#00b040",
              }}
            >
              &nbsp;
            </Stack>
            <Typography
              variant="button"
              sx={{ paddingTop: "10px", color: "#ffffff" }}
            >
              &nbsp; Ventas y Cotizaciones
            </Typography>
          </Stack>

          <Typography variant="h4">
            LLAMANOS
            <br />
            123 456 789
          </Typography>
          <Div>
            Lun - Vie: 08:00 AM - 18:00 PM
            <br />
            Sab: 08:00 AM - 12:00 PM
          </Div>
        </Stack>

        <Stack height={180} alignItems={"center"}>
          <Typography
            sx={{ paddingLeft: "10px", paddingTop: "10px" }}
            variant="h4"
          >
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

        <Stack justifyContent={"center"} alignItems={"center"}>
          <Image src={Logo} alt="krugermotors" height={200} fit={"contain"} />
          <Typography variant="button" sx={styles.subtitle}>
            Repuestos 100% confiables
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default FooterComp;

export const styles = {
  subtitle: { textAlign: "center", fontWeight: "bold", fontSize: 16 },
};
