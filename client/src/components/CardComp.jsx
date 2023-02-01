import {
  Button,
  Card,
  CardActions,
  CardContent,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useEffect } from "react";
import { CardMedia } from "@mui/material";
import { Container } from "@mui/system";
import uiConfigs from "../configs/ui.configs";
import { NavLink } from "react-router-dom";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import { addToCart, getTotal } from "../redux/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const CardComp = ({ props }) => {
  //Coment random
  const { name, price, photoUrl, stock, description } = props;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const handleAddtoCart = (props) => {
    props = { ...props, quantity: 1 };
    dispatch(addToCart(props));
  };

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

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
          <Stack direction={"row"} spacing={12}>
            <NavLink
              to={{ pathname: "/details" }}
              state={{ props }}
              style={{ textDecoration: "none" }}
            >
              <Button color="secondary" size="medium" variant="contained">
                View More
              </Button>
            </NavLink>
            <IconButton
              color="primary"
              variant="contained"
              onClick={() => handleAddtoCart(props)}
            >
              <ShoppingCartCheckoutIcon />
            </IconButton>
          </Stack>
        </CardActions>
      </Card>
    </Container>
  );
};

export default CardComp;
