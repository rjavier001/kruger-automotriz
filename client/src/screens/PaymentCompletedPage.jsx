import React from "react";
import Image from "mui-image";
import { Button, Container, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useNavigate } from "react-router-dom";

const PaymentCompletedPage = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/shop");
  };
  return (
    <Grid
      justifyContent={"center"}
      alignItems={"center"}
      container
      md={12}
      sm={12}
      mt={7}
    >
      <Grid item md={12} sm={12} xs={12}>
        <Image
          alt="product"
          showLoading={false}
          errorIcon={true}
          fit={"contain"}
          src={require("../assets/check.png")}
          height={280}
          duration={1000}
        />
      </Grid>
      <Grid item md={12} sm={12} xs={12}>
        <Stack spacing={3} sx={styles.items}>
          <Typography variant="h6" sx={{ textAlign: "center" }}>
            Gracias por tu compra
          </Typography>
          <Button
            variant="contained"
            color="success"
            onClick={() => handleBack()}
          >
            Regresar a comprar
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default PaymentCompletedPage;

export const styles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
  items: {
    flex: 1,
    alignItems: "center",
  },
};
