import privateClient from "../client/private.client";

const productsEndpoints = {
  list: "products",
  add: "products/save",
  remove: ({ productId }) => `products/${productId}`,
};

const productsApi = {
  getList: async () => {
    try {
      const response = await privateClient.get(productsEndpoints.list);

      return { response };
    } catch (err) {
      return { err };
    }
  },
  remove: async ({ productId }) => {
    try {
      const response = await privateClient.delete(
        productsEndpoints.remove({ productId })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default productsApi;