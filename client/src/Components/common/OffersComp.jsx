import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

import Piston from "../../assets/Pistons2.png";
import KitDist1 from "../../assets/KitDist2.jpg";
import KitEmbrague2 from "../../assets/kitEm2.png";
import Offer_Faros from "../../assets/Offer_Faros.png";
import Offer_Amortiguadores from "../../assets/Offer_Amortiguadores.png";

const OffersComp = () => {
  return (
    <Stack>
      <Divider variant="middle" sx={{ paddingTop: "20px" }} />
      <Typography
        textAlign="center"
        variant="h3"
        component="div"
        sx={{ paddingTop: "20px", fontFamily: "Staatliches" }}
      >
        Ofertas
      </Typography>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Card sx={{ backgroundColor: "#0f0c0c", maxWidth: 345, boxShadow: 0 }}>
          <CardActionArea>
            <CardContent>
              <Typography
                textAlign="center"
                gutterBottom
                variant="h4"
                component="div"
                color="primary"
                sx={{ fontFamily: "Staatliches" }}
              >
                10% Descuento
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                textAlign="center"
                sx={{ fontFamily: "Staatliches" }}
              >
                Amortiguadores
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="350"
              sx={{
                position: "relative",
                objectFit: "contain",
              }}
              image={Offer_Amortiguadores}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ backgroundColor: "#0f0c0c", maxWidth: 345, boxShadow: 0 }}>
          <CardActionArea>
            <CardContent>
              <Typography
                textAlign="center"
                gutterBottom
                variant="h4"
                component="div"
                color="primary"
                sx={{ fontFamily: "Staatliches" }}
              >
                25% Descuento
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                textAlign="center"
                sx={{ fontFamily: "Staatliches" }}
              >
                Faros
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="350"
              sx={{
                marginLeft: "3em",
                padding: "2.5em 2.5em 0 2.5em",
              }}
              image={Offer_Faros}
              alt="Offer_Faros"
            />
          </CardActionArea>
        </Card>
        <Card sx={{ backgroundColor: "#0f0c0c", maxWidth: 345, boxShadow: 0 }}>
          <CardActionArea>
            <CardContent>
              <Typography
                textAlign="center"
                gutterBottom
                variant="h4"
                component="div"
                color="primary"
                sx={{ fontFamily: "Staatliches" }}
              >
                15% Descuento
              </Typography>
              <Typography
                variant="h5"
                color="text.secondary"
                textAlign="center"
                sx={{ fontFamily: "Staatliches" }}
              >
                Pistones
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              height="350"
              sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
              image={Piston}
              alt="green iguana"
            />
          </CardActionArea>
        </Card>
      </Stack>
    </Stack>
  );
};

export default OffersComp;
