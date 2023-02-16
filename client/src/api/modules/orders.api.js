import publicClient from "../client/private.client";

const ordersEndPoints = {
  add: "orders",
  assignProduct: ({ id }) => `orders/assign-product/${id}`,
  assignPayment: ({ id }) => `orders/assign-payment/${id}`,
};

const ordersApi = {
  postOrders: async (data) => {
    try {
      const response = await publicClient.post(ordersEndPoints.add, data);

      return { response };
    } catch (err) {
      return { err };
    }
  },
  /* --------------------------------------------------------------------*/
  assignProdToOrder: async (id, data) => {
    try {
      const response = await publicClient.put(
        ordersEndPoints.assignProduct({ id }),
        data
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },

  assignPaymentToOrder: async (id, data) => {
    try {
      const response = await publicClient.put(
        ordersEndPoints.assignPayment({ id }),
        data
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default ordersApi;
