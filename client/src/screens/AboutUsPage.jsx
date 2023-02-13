import { Avatar, Stack, Typography } from "@mui/material";

const AboutUsPage = () => {
  return (
    <Stack
      textAlign="center"
      justifyContent="center"
      alignItems="center"
      spacing={4}
    >
      <Stack width={924}>
        <Typography variant="h5">
          <Typography variant="p" color="primary" sx={{ fontWeight: "bold" }}>
            Kruger Motors
          </Typography>
          , Somos una importadora automotriz con sede en la ciudad de Quito -
          Ecuador, distribuimos repuestos automotrices de varias líneas tanto
          pesada como para automóviles.
        </Typography>
      </Stack>

      <Stack>
        <Typography
          variant="button"
          sx={{ fontWeight: "bold", fontSize: "large" }}
        >
          Integrantes del team
        </Typography>
      </Stack>

      <Stack direction="row" spacing={4}>
        <Stack
          direction="column"
          alignItems="center"
          spacing={1}
          maxWidth={210}
        >
          <Avatar
            alt="David Lozada"
            src="https://avatars.githubusercontent.com/u/91855669"
            sx={{ width: 200, height: 200 }}
          />
          <Typography variant="h6" color="primary" fontWeight="bold">
            David Lozada
          </Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quam excepturi itaque nihil.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          spacing={1}
          maxWidth={210}
        >
          <Avatar
            alt="Javier Vallejo"
            src="https://avatars.githubusercontent.com/u/18273987?v=4"
            sx={{ width: 200, height: 200 }}
          />
          <Typography variant="h6" color="primary" fontWeight="bold">
            Javier Vallejo
          </Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quam excepturi itaque nihil.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          spacing={1}
          maxWidth={210}
        >
          <Avatar
            alt="Javier Yanez"
            src="https://avatars.githubusercontent.com/u/9219956?v=4"
            sx={{ width: 200, height: 200 }}
          />
          <Typography variant="h6" color="primary" fontWeight="bold">
            Javier Yanez
          </Typography>
          <Typography variant="caption">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quam excepturi itaque nihil.
          </Typography>
        </Stack>
        <Stack
          direction="column"
          alignItems="center"
          spacing={1}
          maxWidth={210}
        >
          <Avatar
            alt="Kevin Lastname"
            src="https://avatars.githubusercontent.com/u/65980001?v=4"
            sx={{ width: 200, height: 200 }}
          />
          <Typography variant="h6" color="primary" fontWeight="bold">
            Kevin Veliz
          </Typography>
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
