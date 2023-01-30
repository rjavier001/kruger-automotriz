import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import uiConfigs from "../configs/ui.configs";
import { NavLink } from "react-router-dom";

const CardComp = ({ props }) => {
  const { name, price, photoUrl, stock, description } = props;
  return (
    <Container>
      <Card raised sx={uiConfigs.box}>
        <CardMedia
          component="img"
          height="250"
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          image={photoUrl}
          title="product image"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={uiConfigs.item}
          >
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Stack
            direction="row"
            spacing={15}
            alignItems="center"
            sx={uiConfigs.card}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={uiConfigs.text}
            >
              Price: ${price}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={uiConfigs.text}
            >
              Stock: {stock}
            </Typography>
          </Stack>
        </CardContent>
        <CardActions sx={uiConfigs.button}>
          <NavLink
            to={{ pathname: "/details" }}
            state={{ props }}
            style={{ textDecoration: "none" }}
          >
            <Button color="secondary" size="medium" variant="contained">
              View More
            </Button>
          </NavLink>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CardComp;
