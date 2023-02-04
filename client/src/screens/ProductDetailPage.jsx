import {
  Container,
  Grid,
  Stack,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import Image from "mui-image";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CompanyBenefitsComp from "../components/CompanyBenefitsComp";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getTotal, decreaseCart } from "../redux/features/cartSlice";
import ReviewComp from "../components/common/ReviewComp";

const ProductDetailPage = () => {
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  let location = useLocation();
  let { props } = location.state;
  const dispatch = useDispatch();

  const handleAddtoCart = (props) => {
    props = { ...props, quantity };
    dispatch(addToCart(props));
  };
  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  /* Control de counter no sea menor a 0 */
  const addCouter = () => {
    if (props.stock > quantity) setQuantity(quantity + 1);
  };

  const resCounter = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  return (
    <>
      <Container>
        <Grid
          container
          spacing={2}
          marginTop="2px"
          sx={{ minHeight: 450, paddingTop: 5 }}
        >
          <Grid item xs={12} md={8} sm={6}>
            <Image
              alt="product"
              showLoading={false}
              errorIcon={true}
              fit={"contain"}
              height={450}
              width={"100%"}
              src={props.photoUrl}
              duration={1000}
            />
            {/* RIGHT PANEL */}
          </Grid>
          <Grid item xs={12} md={4}>
            Kruger Motors
            <Stack
              direction={"column"}
              sx={{
                flex: 1,
                height: 450,
                alignItems: "space-around",
                justifyContent: "space-around",
              }}
            >
              <Typography variant="h6">{props.name}</Typography>
              <Typography variant="h6">{props.description}</Typography>
              <Typography variant="h7">{props.salePrice}$</Typography>
              <Typography variant="h7">Nro de serie: 1745646</Typography>
              <Typography variant="h7">Stock: {props.stock}</Typography>

              <Stack direction={"row"} sx={styles.add}>
                <IconButton size="small" onClick={() => resCounter()}>
                  <RemoveIcon />
                </IconButton>
                <Typography>{quantity}</Typography>
                <IconButton size="small" onClick={() => addCouter()}>
                  <AddIcon />
                </IconButton>
              </Stack>

              <Stack
                direction={"row"}
                spacing={2}
                sx={{ justifyContent: "space-around" }}
              >
                <Button
                  variant="contained"
                  onClick={() => handleAddtoCart(props)}
                >
                  Agregar al carrito
                </Button>

                <NavLink to={"/checkout"} style={{ textDecoration: "none" }}>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleAddtoCart(props)}
                  >
                    Comprar
                  </Button>
                </NavLink>
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <ReviewComp props={props} />
      <CompanyBenefitsComp />
    </>
  );
};

export default ProductDetailPage;

export const styles = {
  add: {
    alignItems: "center",
  },
  rightPanel: {},
};
