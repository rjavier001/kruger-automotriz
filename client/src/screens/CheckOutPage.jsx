import {
  Stack,
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
} from "@mui/material";
import DiscountIcon from "@mui/icons-material/Discount";
import TextField from "@mui/material/TextField";
import React, { useState, useEffect } from "react";
import Divider from "@mui/material/Divider";
import { useLocation, useNavigate } from "react-router-dom";
import Image from "mui-image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import InfoIcon from "@mui/icons-material/Info";
import {
  decreaseCart,
  removeFromCart,
  addToCart,
  clearCart,
  getTotal,
} from "../redux/features/cartSlice";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/system";
import userApi from "../api/modules/users.api";

const CheckOutPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { userOrderId } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const handleRemoveItem = (cartItem) => {
    dispatch(removeFromCart(cartItem));
  };
  const handleDecrease = (cartItem) => {
    dispatch(decreaseCart(cartItem));
  };
  const handleIncrease = (cartItem) => {
    dispatch(addToCart(cartItem));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const assignOrd = async () => {
    const { response } = await userApi.assignOrder(user.userId, {
      orderId: userOrderId,
    });
    console.log("Order assigned", response);
  };

  const handleonPay = () => {
    navigate("/payment");
    assignOrd();
  };

  return (
    <Stack
      direction={{ sm: "row", xs: "column" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={styles.stackContainer}
    >
      <Box sx={styles.boxLeft}>
        <Typography variant="h5" mb={2}>
          Detalles de Orden
        </Typography>
        {cart.cartItems.length === 0 && (
          <Stack container sx={styles.empty} spacing={2}>
            <Stack direction={"row"}>
              <InfoIcon />
              <Typography>Tu carrito esta vacio por ahora</Typography>
            </Stack>

            <NavLink to={"/shop"} style={{ textDecoration: "none" }}>
              <Button variant="contained" color="success">
                Regresar a Comprar
              </Button>
            </NavLink>
          </Stack>
        )}
        {cart.cartItems?.map((cartItem) => (
          <Box>
            <Stack direction={{ md: "column", xs: "row" }} sx={styles.boxItem}>
              <Stack
                direction={{ md: "row", xs: "column" }}
                sx={styles.headers}
                spacing={8}
              >
                <Box>
                  <Stack
                    sx={{ flex: 1, flexDirection: "row", alignItems: "center" }}
                  >
                    <IconButton onClick={() => handleRemoveItem(cartItem)}>
                      <DeleteForeverIcon />
                    </IconButton>
                    <Typography variant="h6">Producto</Typography>
                  </Stack>

                  <Image
                    alt="product"
                    showLoading={false}
                    errorIcon={true}
                    fit={"contain"}
                    src={cartItem.photoUrl}
                    height={80}
                    width={80}
                    duration={1000}
                  />
                </Box>
                <Box>
                  <Typography variant="h6">Precio</Typography>
                  <Typography>$ {cartItem.price}</Typography>
                </Box>

                <Box>
                  <Typography variant="h6">Cantidad</Typography>
                  <Stack direction={"row"} sx={styles.add}>
                    <IconButton
                      size="small"
                      onClick={() => handleDecrease(cartItem)}
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography>{cartItem.cartQuantity}</Typography>
                    <IconButton
                      size="small"
                      onClick={() => handleIncrease(cartItem)}
                    >
                      <AddIcon />
                    </IconButton>
                  </Stack>
                </Box>

                <Box>
                  <Typography variant="h6">Total</Typography>
                  <Typography>
                    $ {cartItem.price * cartItem.cartQuantity}
                  </Typography>
                </Box>
              </Stack>
            </Stack>

            <Divider sx={{ marginY: 2 }} />
          </Box>
        ))}
        {cart.cartItems.length > 0 && (
          <Button
            variant="contained"
            color="success"
            onClick={() => handleClearCart()}
          >
            Clear Cart
          </Button>
        )}
      </Box>

      {cart.cartItems.length > 0 && (
        <Box sx={styles.boxRight}>
          <Typography variant="h5">Orden actual:</Typography>

          <Stack sx={styles.stackParent}>
            <DiscountIcon color="success" />
            <Typography variant="h6">Cupones:</Typography>
          </Stack>
          <TextField
            label="Inserte numero"
            id="filled-size-small"
            variant="outlined"
            size="small"
          />
          <Divider sx={{ marginY: 2 }} />

          <Stack sx={styles.stackRoot}>
            <Typography variant="h8">Subtotal:</Typography>
            <Typography variant="h8">{cart.cartTotalAmount}$</Typography>
          </Stack>

          <Stack sx={styles.stackRoot}>
            <Typography variant="h8">Descuento:</Typography>
            <Typography variant="h8">0$</Typography>
          </Stack>

          <Stack sx={styles.stackRoot}>
            <Typography variant="h8">Total:</Typography>
            <Typography variant="h8">{cart.cartTotalAmount}$</Typography>
          </Stack>
          <Typography sx={styles.terms}>
            taxes and shipping calculated at chekout
          </Typography>

          <Button
            variant="contained"
            sx={styles.btnPagar}
            onClick={() => handleonPay()}
          >
            Pagar
          </Button>
        </Box>
      )}
    </Stack>
  );
};

export default CheckOutPage;

export const styles = {
  boxItem: {
    justifyContent: "center",
  },
  headers: {
    justifyContent: "space-around",
    fontWeight: "bold",
    alignItems: "center",
  },
  rowItems: {
    justifyContent: "space-around",
    alignItems: "center",
  },
  terms: {
    fontSize: 9,
    color: "gray",
  },
  boxLeft: {
    width: "80%",
    minheight: 350,
    borderRadius: 5,
    padding: 5,
    boxShadow: "-13px 18px 8px -5px rgba(34, 60, 80, 0.2)",
  },
  boxRight: {
    width: 250,
    height: 350,
    borderRadius: 5,
    padding: 5,
    boxShadow: "-13px 18px 8px -5px rgba(34, 60, 80, 0.2)",
  },
  stackContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  stackParent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 1,
    gap: 2,
  },
  stackRoot: {
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
  },
  btnPagar: { width: "100%", marginTop: 2 },
  stackCounter: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  add: {
    alignItems: "center",
  },
};
