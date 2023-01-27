import { Stack, Box, Typography, Button, IconButton } from "@mui/material";
import DiscountIcon from "@mui/icons-material/Discount";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import Divider from "@mui/material/Divider";
import Image from "mui-image";
import AddIcon from "@mui/icons-material/Add";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "../redux/actions";
import { useEffect } from "react";

const CheckOutPage = () => {
  const [counter, setCounter] = useState(1);

  const { products } = useSelector((state) => state.data);

  let dispatch = useDispatch();

  //LOAD Products WITH REDUX DISPATCH
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <Stack
      direction={{ sm: "row", xs: "column" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={styles.stackContainer}
    >
      <Box sx={styles.boxLeft}>
        <Typography variant="h5">Detalles de Orden</Typography>
        <Box>
          Nombre
          <Stack
            direction={{ sm: "row", xs: "column" }}
            spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            <Image
              alt="product"
              showLoading={false}
              errorIcon={true}
              fit={"cover"}
              bgColor={"red"}
              height={100}
              width={200}
            />
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, at
              molestias iusto ratione sunt deserunt libero veniam sequi ut
              labore architecto optio fugiat obcaecati assumenda quos doloribus
              numquam cum modi.
            </Typography>
          </Stack>
          <Stack
            direction={"row"}
            spacing={{ xs: 1, sm: 2, md: 4 }}
            sx={styles.stackCounter}
          >
            <Typography variant="h6">255.30$</Typography>
            <IconButton size="small" onClick={() => setCounter(counter + 1)}>
              <AddIcon />
              <Typography>{counter}</Typography>
            </IconButton>
          </Stack>
        </Box>
        ;
      </Box>

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
          <Typography variant="h8">155.99$</Typography>
        </Stack>

        <Stack sx={styles.stackRoot}>
          <Typography variant="h8">Descuento:</Typography>
          <Typography variant="h8">-5.88$</Typography>
        </Stack>

        <Stack sx={styles.stackRoot}>
          <Typography variant="h8">Total:</Typography>
          <Typography variant="h8">155.99$</Typography>
        </Stack>

        <Button
          variant="contained"
          sx={styles.btnPagar}
          onClick={() => console.log(products)}
        >
          Pagar
        </Button>
      </Box>
    </Stack>
  );
};

export default CheckOutPage;

export const styles = {
  boxLeft: {
    width: "70%",
    height: 350,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 5,
    boxShadow: "-13px 18px 8px -5px rgba(34, 60, 80, 0.2)",
  },
  boxRight: {
    width: 250,
    height: 350,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    padding: 5,
    boxShadow: "-13px 18px 8px -5px rgba(34, 60, 80, 0.2)",
  },
  stackContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f2f2f2",
    padding: 5,
    height: "100%",
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
};
