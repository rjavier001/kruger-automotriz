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
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, getTotal, decreaseCart } from "../redux/features/cartSlice";
import { setOrderId } from "../redux/features/userSlice";
import ReviewComp from "../components/common/ReviewComp";
import { setAuthModalOpen } from "../redux/features/authModalSlice";
import ordersApi from "../api/modules/orders.api";

const ProductDetailPage = () => {
  const cart = useSelector((state) => state.cart);
  const [order, setOrder] = useState({ status: "Created", totalPrice: 0 });

  const { user } = useSelector((state) => state.user);
  const { userOrderId } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  let location = useLocation();
  let { props } = location.state;
  const dispatch = useDispatch();
  const userOrder = { productId: 27 };

  const createOrder = async () => {
    const { response } = await ordersApi.postOrders(order);
    console.log("order created", response);
    dispatch(setOrderId(response.id));
  };

  const assignProd = async () => {
    const { response } = await ordersApi.assignProdToOrder(userOrderId, {
      productId: props.id,
      quantity,
    });
    console.log("Prod info", response);
  };

  const handleAddtoCart = async (props) => {
    console.log(props);
    if (user) {
      props = { ...props, quantity };
      if (!userOrderId) {
        await createOrder();
        await assignProd();
      } else assignProd();

      dispatch(addToCart(props));
      navigate("/checkout");
    } else dispatch(setAuthModalOpen(true));
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
            <Stack direction={"column"} sx={styles.rightPanel}>
              <Typography variant="h6">{props.name}</Typography>
              <Typography variant="h6">{props.description}</Typography>
              <Stack sx={{ fontWeigth: "bold" }}>
                <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                  Precio Unit.
                </Typography>

                <Typography variant="h7">{props.salePrice}$</Typography>
              </Stack>

              <Stack>
                <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                  Nro de serie:
                </Typography>
                <Typography variant="h7">1745646</Typography>
              </Stack>

              <Stack>
                <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                  Stock:{" "}
                </Typography>
                <Typography variant="h7"> {props.stock}</Typography>
              </Stack>

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

                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => handleAddtoCart(props)}
                >
                  Comprar
                </Button>
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
  rightPanel: {
    flex: 1,
    height: 450,
    alignItems: "space-around",
    justifyContent: "space-around",
    borderRadius: 10,
    borderWidth: 1,
    borderStyle: "solid",
    boxShadow: "-13px 18px 8px -5px rgba(34, 60, 80, 0.2)",
    padding: 5,
  },
};
