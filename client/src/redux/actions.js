import axios from "axios";
import * as types from "./actionType";

const getProducts = (products) => ({
  type: types.GET_PRODUCTS,
  payload: products,
});

const productAdded = () => ({
  type: types.ADD_PRODUCT,
});

const productDeleted = () => ({
  type: types.DELETE_PRODUCT,
});

const productUpdated = () => ({
  type: types.UPDATE_PRODUCT,
});

const singleProduct = (product) => ({
  type: types.GET_SINGLE_PRODUCT,
  payload: product,
});

export const loadProducts = () => {
  return function (dispatch) {
    axios
      .get(`${process.env.REACT_APP_PRODUCTS}`)
      .then((resp) => {
        console.log("respeee", resp);
        dispatch(getProducts(resp.data));
      })
      .catch((error) => console.log(error));
  };
};
