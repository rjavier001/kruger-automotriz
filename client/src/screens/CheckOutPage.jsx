import {
  Stack,
  Box,
  Typography,
  Button,
  IconButton,
  Grid,
  Modal,
} from "@mui/material";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
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
  applyDiscount,
} from "../redux/features/cartSlice";
import { NavLink } from "react-router-dom";
import { Container } from "@mui/system";
import userApi from "../api/modules/users.api";
import ordersApi from "../api/modules/orders.api";
import FeedbackIcon from "@mui/icons-material/Feedback";

const CheckOutPage = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  const { userOrderId } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [cupon, setCupon] = useState({ obj: "", disc: 0 });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    clearOrder();
  };
  const handleDiscountChange = (item) => {
    const discount = Number(item.disc);
    console.log(item);
    dispatch(applyDiscount(discount));
    setCupon(item);
  };

  const assignOrd = async () => {
    const { response } = await userApi.assignOrder(user.userId, {
      orderId: userOrderId,
    });
    console.log("Order assigned", response);
  };

  const clearOrder = async () => {
    const { response } = await ordersApi.clearOrder(userOrderId, {});
    console.log("Cleared cart", response);
  };

  const handleonPay = () => {
    navigate("/payment");
    assignOrd();
  };

  const coupons = [
    {
      obj: "MV44",
      disc: 2.5,
    },
    { obj: "ASA3", disc: 1.5 },
    { obj: "HY65", disc: 3.5 },
    { obj: "QW12", disc: 5.5 },
  ];

  return (
    <Stack
      direction={{ sm: "row", xs: "column", md: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={styles.stackContainer}
    >
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={styles.modal}>
            <Typography id="transition-modal-title" variant="h7" component="h5">
              Prueba uno de estos
            </Typography>
            <Grid md={12}>
              {coupons.map((item) => (
                <Button
                  onClick={() => handleDiscountChange(item)}
                  sx={{
                    borderRadius: 2,
                    borderStyle: "dotted",
                    borderWidth: 2,
                    margin: 2,
                  }}
                >
                  <Typography
                    id="transition-modal-description"
                    sx={{ mt: 2, textAlign: "center" }}
                  >
                    {item.obj}
                  </Typography>
                </Button>
              ))}
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Box sx={styles.boxLeft}>
        <Typography variant="h5" mb={2} sx={styles.titleLeft}>
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
                      <DeleteForeverIcon sx={{ color: "red" }} />
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
          <Stack direction={"row"}>
            <TextField
              label="Inserte numero"
              id="filled-size-small"
              variant="outlined"
              size="small"
              value={cupon.obj}
            />
            <IconButton onClick={handleOpen}>
              <FeedbackIcon sx={{ color: "red" }} />
            </IconButton>
          </Stack>
          <Divider sx={{ marginY: 2 }} />

          <Stack sx={styles.stackRoot}>
            <Typography variant="h8">Subtotal:</Typography>
            <Typography variant="h8">
              {cart.cartTotalAmount + cupon.disc}$
            </Typography>
          </Stack>

          <Stack sx={styles.stackRoot}>
            <Typography variant="h8">Descuento:</Typography>
            <Typography variant="h8">{cupon.disc}$</Typography>
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
  titleLeft: {
    color: "#ff910d",
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
    width: "100%",
    minheight: 350,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    boxShadow: "-13px 18px 8px -5px rgba(34, 60, 80, 0.2)",
  },
  boxRight: {
    width: "100",
    minheight: 350,
    borderRadius: 5,
    borderStyle: "solid",
    borderWidth: 1,
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
  modal: {
    position: "absolute",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: 10,
    p: 4,
  },
};
