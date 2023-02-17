import publicClient from "../client/private.client";

const ordersEndPoints = {
  add: "orders",
  remove: "orders/{id}",
  update: ({ id }) => `orders/${id}`,
  assignProduct: ({ id }) => `orders/assign-product/${id}`,
  assignPayment: ({ id }) => `orders/assign-payment/${id}`,

  listOrderByUser:({ id }) => `orders/list/${id}`,
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

  remove: async ({ orderId }) => {
    try {
      const response = await publicClient.delete(
        ordersEndPoints.remove({ orderId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },

  clearOrder: async (id, data) => {
    try {
      const response = await publicClient.put(
        ordersEndPoints.update({ id }),
        data
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },

  listOrderByUser: async (id) => {
    try {
      const response = await publicClient.get(
        ordersEndPoints.listOrderByUser({ id })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default ordersApi;
