import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import Image from "mui-image";

import Delivery from "../../assets/KrugerEntregas.png";

const DeliveryComp = () => {
  return (
    <Stack>
      <Typography
        textAlign="center"
        variant="h3"
        component="div"
        sx={{
          paddingTop: "40px",
          paddingBottom: "20px",
          fontFamily: "Staatliches",
        }}
      >
        Entregas a Domicilio
      </Typography>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Card
          sx={{
            display: "flex",
            width: "80%",
          }}
        >
          <CardMedia
            component="img"
            // height="150"
            sx={{
              width: 230,
            }}
            image={Delivery}
            alt="Delivery"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              paddingRight={42}
              textAlign="justify"
            >
              Nuestros <strong>rapi-krugeritos</strong> hacen entregas a
              domicilio en la ciudad de Quito y a nivel nacional por medio de la
              empresa Servientrega o si prefieres puedes retirar tu compra en
              nuestra empresa.
              <br /> <br />{" "}
              <strong>
                Si tu compra llega a más de 300 $ el envío es gratis!!
              </strong>
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default DeliveryComp;
