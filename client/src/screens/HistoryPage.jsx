import { LoadingButton } from "@mui/lab";
import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import VideoLabelIcon from "@mui/icons-material/VideoLabel";
import styled from "@emotion/styled";

import OrderItemComp from "../components/common/OrderItemComp";
import userApi from "../api/modules/users.api";
import { setGlobalLoading } from "../redux/features/globalLoadingSlice";

import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import Container from "../components/common/Container";
import uiConfigs from "../configs/ui.configs";

export const HistoryPage = () => {
  const userState = useSelector((state) => state.user.user);
  const [user, setUser] = useState({});
  const [ordersList, setOrdersList] = useState([]);
  const [ordersListFiltered, setOrdersListFiltered] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const skip = 2;

  useEffect(() => {
    const getUserOrders = async () => {
      dispatch(setGlobalLoading(true));
      const { response, err } = await userApi.getInfo(userState.userId);
      dispatch(setGlobalLoading(false));

      if (err) toast.error(err.message);
      if (response) {
        setCount(response.userOrders.length);
        setOrdersList([...response.userOrders]);
        setOrdersListFiltered([...response.userOrders].splice(0, skip));
      }
    };

    getUserOrders();
  }, []);

  const onLoadMore = () => {
    setOrdersListFiltered([
      ...ordersListFiltered,
      ...[...ordersList].splice(page * skip, skip),
    ]);
    setPage(page + 1);
  };

  return (
    <Box sx={{ ...uiConfigs.style.mainContent }}>
      <Container header={`Your orders (${count})`}>
        <Stack spacing={2}>
          {ordersListFiltered.map((item) => (
            <Box key={item.id}>
            <OrderItemComp id={item.orderId}/>              
              <Divider
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              />
            </Box>
          ))}
          {ordersListFiltered.length < ordersList.length && (
            <Button onClick={onLoadMore}>load more</Button>
          )}
        </Stack>
      </Container>
    </Box>
  );
};
