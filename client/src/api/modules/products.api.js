import privateClient from "../client/private.client";

const productsEndpoints = {
  list: "products",
  add: "products/save",
  search: ({ query }) => `products/search?description=${query}`,
  remove: ({ productId }) => `products/${productId}`,
  productById: ({ id }) => `products/${id}`,
  editProduct: ({ id }) => `products/${id}`,
  deleteProduct: ({ id }) => `products/${id}`,


  listCategory: "categories",
  addCategory: "categories/save",
  deleteCategory: ({ id }) => `categories/${id}`,
  editCategory: ({ id }) => `categories/${id}`,
  categoryById: ({ id }) => `categories/${id}`,

  listDiscounts: "discounts",
  postDiscount: "discounts",
  deleteDiscount: ({ id }) => `discounts/${id}`,
  editDiscount: ({ id }) => `discounts/${id}`,
  discountById: ({ id }) => `discounts/${id}`,

  listFeatured: "featured",
  featuredById: ({ id }) => `featured/${id}`,
  addFeatured: "featured",
  editFeatured: ({ id }) => `featured/${id}`,
  deleteFeatured: ({ id }) => `featured/${id}`
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

  //---------------------------------------------------------------------------------
  postProducts: async (data) => {
    try {
      const response = await privateClient.post(productsEndpoints.add, data);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
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

  //---------------------------------------------------------------------------------
  search: async (query) => {
    try {
      const response = await privateClient.get(productsEndpoints.search({ query }));
      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  getListCategory: async () => {
    try {
      const response = await privateClient.get(productsEndpoints.listCategory);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  postCategory: async (data) => {
    try {
      const response = await privateClient.post(productsEndpoints.addCategory, data);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  getProductById: async (id) => {
    try {
      const response = await privateClient.get(productsEndpoints.productById({ id }));

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  putProductById: async (id, data) => {
    try {
      const response = await privateClient.put(productsEndpoints.editProduct({ id }), data);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  deleteProductById: async (id) => {
    try {
      const response = await privateClient.delete(productsEndpoints.deleteProduct({ id }));

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  deleteCategory: async (id) => {
    try {
      const response = await privateClient.delete(productsEndpoints.deleteCategory({ id }));

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  putCategoryById: async (id, data) => {
    try {
      const response = await privateClient.put(productsEndpoints.editCategory({ id }), data);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  getCategoryById: async (id) => {
    try {
      const response = await privateClient.get(productsEndpoints.categoryById({ id }));

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  getListDiscounts: async () => {
    try {
      const response = await privateClient.get(productsEndpoints.listDiscounts);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  postDiscount: async (data) => {
    try {
      const response = await privateClient.post(productsEndpoints.postDiscount, data);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  deleteDiscountById: async (id) => {
    try {
      const response = await privateClient.delete(productsEndpoints.deleteDiscount({ id }));
      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  putDiscountById: async (id, data) => {
    console.log(id,data)
    try {
      const response = await privateClient.put(productsEndpoints.editDiscount({ id }), data);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  getDiscountById: async (id) => {
    try {
      const response = await privateClient.get(productsEndpoints.discountById({ id }));

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  getFeaturedList: async () => {
    try {
      const response = await privateClient.get(productsEndpoints.listFeatured);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  getFeaturedById: async (id) => {
    try {
      const response = await privateClient.get(productsEndpoints.featuredById({ id }));

      return { response };
    } catch (err) {
      return { err };
    }
  },

   //---------------------------------------------------------------------------------
   postFeatured: async (data) => {
    try {
      const response = await privateClient.post(productsEndpoints.addFeatured, data);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  putFeaturedById: async (id, data) => {
    try {
      const response = await privateClient.put(productsEndpoints.editFeatured({ id }), data);

      return { response };
    } catch (err) {
      return { err };
    }
  },

  //---------------------------------------------------------------------------------
  deleteFaturedById: async (id) => {
    try {
      const response = await privateClient.delete(productsEndpoints.deleteFeatured({ id }));
      return { response };
    } catch (err) {
      return { err };
    }
  },

};



export default productsApi;
