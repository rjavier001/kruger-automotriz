import axios from "axios";
import * as types from "./actionType";

const getOrders = (orders) => ({
  type: types.GET_ORDERS,
  payload: orders,
});

const orderAdded = () => ({
  type: types.ADD_ORDER,
});

const orderDeleted = () => ({
  type: types.DELETE_ORDER,
});

const orderUpdated = () => ({
  type: types.UPDATE_ORDER,
});

const singleOrder = (order) => ({
  type: types.GET_SINGLE_ORDER,
  payload: order,
});

export const loadOrders = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_API}/38`)
      .then((resp) => {
        console.log("respeee", resp.data.id);
        dispatch(getOrders(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
