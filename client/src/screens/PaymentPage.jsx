import {
  Container,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
  MenuItem,
  Box,
  Divider,
} from "@mui/material";
import React, { useState } from "react";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import Image from "mui-image";
const PaymentPage = () => {
  const cart = useSelector((state) => state.cart);
  const { userData } = useSelector((state) => state.user);
  const payments = [
    {
      value: "Paypall",
      label: "Paypall",
    },
    {
      value: "Tarjeta",
      label: "Tarjeta",
    },
  ];
  const formik = useFormik({
    initialValues: {
      name: userData?.name || "",
      apellido: userData?.lastName || "",
      email: userData?.email || "",
      address: userData?.address || "",
    },
    onSubmit: (values, { resetForm }) => {
      alert(JSON.stringify(values, null, 2));
      resetForm();
    },
  });
  return (
    <Container sx={styles.container}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" sx={styles.numberHeaders}>
            1.-Confirma tu orden:
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Typography sx={styles.headers}>Repuesto:</Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography sx={styles.headers}>Subtotal:</Typography>
            </Grid>
          </Grid>

          {cart.cartItems?.map((cartItem) => (
            <>
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="center"
              >
                <Grid item xs={12} md={6}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
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
                    <Typography>{cartItem.cartQuantity}x</Typography>
                    {cartItem.name}
                  </Box>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Typography sx={styles.price}>
                    ${cartItem.price * cartItem.cartQuantity}
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ marginY: 2 }} />
            </>
          ))}
          <Stack sx={styles.stackRoot}>
            <Typography sx={styles.headers}>Total:</Typography>
            <Typography sx={styles.headers}>{cart.cartTotalAmount}$</Typography>
            <Typography sx={styles.headers}>
              Peso Total a precio de envio:
            </Typography>
            <Typography sx={styles.headers}>
              {cart.cartTotalWeight / 200}$
            </Typography>
          </Stack>
        </Grid>

        <Grid container item xs={12} md={6}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" sx={styles.numberHeaders}>
              2.-Escoge un metodo de pago:
            </Typography>

            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              defaultValue="EUR"
              helperText="Please select your currency"
            >
              {payments.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Typography variant="h6" sx={styles.numberHeaders}>
            3.-Ingresa tu informacion de pago:
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2} mb={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="name"
                  label="Nombre"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  required
                  id="apellido"
                  label="Apellido"
                  name="apellido"
                  onChange={formik.handleChange}
                  value={formik.values.apellido}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  type={"email"}
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  required
                  id="address"
                  label="Direccion"
                  name="address"
                  onChange={formik.handleChange}
                  value={formik.values.address}
                  fullWidth
                />
              </Grid>
            </Grid>

            <Button variant="contained" type="submit">
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PaymentPage;

export const styles = {
  container: {
    marginY: 5,
  },
  headers: {
    fontWeight: "bold",
    fontSize: "15px",
    textAlign: "center",
  },
  numberHeaders: {
    marginBottom: 2,
  },
  price: {
    textAlign: "center",
  },
  stackRoot: {
    borderWidth: 1,
    borderColor: "black",
    borderStyle: "solid",
    borderRadius: 20,
  },
};
