import privateClient from "../client/private.client";

const productsEndpoints = {
  list: "products",
  add: "products/save",
  product:({ productId }) => `products/${productId}`,
  search:({query})=>`products/search?description=${query}`,
  remove:({ productId }) => `products/${productId}`,
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
  getProductById: async (productId) => {
    try {
      const response = await privateClient.get(productsEndpoints.product({productId}));

      return { response };
    } catch (err) {
      return { err };
    }
  },
  search: async (query) => {
    try {
      const response = await privateClient.get(productsEndpoints.search({query}));

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default productsApi;
