import { useEffect, useState } from "react";
import ordersApi from "../../api/modules/orders.api";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import ReceiptIcon from "@mui/icons-material/Receipt";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PaymentIcon from "@mui/icons-material/Payment";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import { setGlobalLoading } from "../../redux/features/globalLoadingSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const steps = [
  { name: "Order Placed", icon: <ReceiptIcon /> },
  { name: "Pick Up", icon: <DirectionsCarIcon /> },
  { name: "Laundry", icon: <PaymentIcon /> },
  { name: "DropOff", icon: <LocalShippingIcon /> },
];

const OrderItemComp = ({ id }) => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState({});

  useEffect(() => {
    const getOrderInfo = async () => {
      dispatch(setGlobalLoading(true));
      const { response, err } = await ordersApi.get(id);
      dispatch(setGlobalLoading(false));

      if (err) toast.error(err.message);
      if (response) {
        setOrder(response);
      }
    };

    getOrderInfo();
  }, []);


  return (
    <Card sx={{ minWidth: "20rem" }}>
      <CardContent sx={{ my: 1 }}>
        <Typography>Order No: {order.id}</Typography>
        <Typography>{order.created}</Typography>
      </CardContent>
      <Divider variant="middle"></Divider>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Products
        </Typography>
        {order?.products?.map((product, id) => (
          <div key={id}>
            <Grid>
              <Typography variant="body2" color="text.secondary">
                * Name: {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                * Precio ${product.price}
                {/* {product.orderProducts[id].quantity} */}
               
              </Typography>
              <Typography
                sx={{ marginTop: 2 }}
                variant="body2"
                color="text.secondary"
              ></Typography>
            </Grid>
          </div>
        ))}
      </CardContent>
      <Divider variant="middle"></Divider>
      <Stepper sx={{ marginTop: 4 }} alternativeLabel activeStep={0}>
        {steps.map((label, i) => (
          <Step key={i}>
            <StepLabel>
              <Grid container rowSpacing={1}>
                <Grid item xs={12}>
                  <Typography variant="caption" display="block" gutterBottom>
                    {label.name}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {label.icon}
                </Grid>
              </Grid>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <CardActions></CardActions>
    </Card>
  );
};

export default OrderItemComp;
