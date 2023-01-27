import * as types from "./actionType";

const initialState = {
  orders: [],
  order: {},
  loading: true,
};

const ordersReducers = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_ORDERS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };
    default:
      return state;
  }
};

export default ordersReducers;
