import { Avatar, Stack, Typography } from "@mui/material";

import David from "../assets/team/David.png";
import JVallejo from "../assets/team/JVallejo.png";
import JYanez from "../assets/team/JYanez.png";

const AboutUsPage = () => {
  return (
    <Stack
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Typography variant="h5">
        Sobre Nosotros, somos participantes del reality KrugerStar
        <br />
        Un grupo de personas apasionadas por la programacion con diferentes
        skills, tanto en Front como en Back.
      </Typography>

      <Stack>
        <Typography variant="h6">Integrantes del team</Typography>
      </Stack>

      <Stack direction="row" spacing={4}>
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          maxWidth={210}
        >
          <Avatar
            alt="David Lozada"
            src={David}
            sx={{ width: 156, height: 156 }}
          />
          <Typography>David Lozada</Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quam excepturi itaque nihil.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          maxWidth={210}
        >
          <Avatar
            alt="Javier Vallejo"
            src={JVallejo}
            sx={{ width: 156, height: 156 }}
          />
          <Typography>Javier Vallejo</Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quam excepturi itaque nihil.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          maxWidth={210}
        >
          <Avatar
            alt="Javier Yanez"
            src={JYanez}
            sx={{ width: 156, height: 156 }}
          />
          <Typography>Javier Yanez</Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quam excepturi itaque nihil.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          spacing={2}
          maxWidth={210}
        >
          <Avatar
            alt="Kevin Lastname"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 156, height: 156 }}
          />
          <Typography>Kevin Lastname</Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quam excepturi itaque nihil.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default AboutUsPage;
