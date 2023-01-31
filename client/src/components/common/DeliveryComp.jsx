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
              Realizamos envíos a nivel nacional por medio de la empresa Servi
              Entrega o Larrcourier, si te encuentras en la ciudad de Quito
              puedes retirar tu compra en nuestra empresa. <br /> Si tu compra
              llega a más de 300 $ el envío es gratis!!
            </Typography>
          </CardContent>
        </Card>
      </Stack>
    </Stack>
  );
};

export default DeliveryComp;
