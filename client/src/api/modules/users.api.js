import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
  signin: "auth/sign-in",
  signup: "auth/sign-up",
  passwordUpdate: "auth/update-password",
  validateAuth: "auth",
  getInfo: ({ id }) => `users/${id}`,

  listUsers: "users",
  usersById: ({ id }) => `users/${id}`,
  updateUserById: ({ id }) => `users/${id}`,
  deleteUserById: ({ id }) => `users/${id}`,
  assignOrder: ({ id }) => `users/assign-order/${id}`,

  userListOrders: ({ id }) => `users/list/${id}`,
};

const userApi = {
  signin: async (data) => {
    try {
      console.log("send request");
      const response = await publicClient.post(userEndpoints.signin, data);
      return { response };
    } catch (err) {
      console.log("err");
      return { err };
    }
  },
  signup: async (data) => {
    try {
      console.log(data);
      const response = await publicClient.post(userEndpoints.signup, data);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  validateAuth: async () => {
    try {
      const response = await privateClient.get(userEndpoints.validateAuth);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  getInfo: async (id) => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo({ id }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
  passwordUpdate: async (data) => {
    try {
      const response = await privateClient.put(
        userEndpoints.passwordUpdate,
        data
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },

  listUsers: async () => {
    try {
      const response = await privateClient.get(userEndpoints.listUsers);
      return { response };
    } catch (err) {
      return { err };
    }
  },

  usersById: async (id) => {
    try {
      const response = await privateClient.get(userEndpoints.usersById({ id }));
      return { response };
    } catch (err) {
      return { err };
    }
  },
  updateUserById: async (id, data) => {
    try {
      const response = await privateClient.put(
        userEndpoints.updateUserById({ id }),
        data
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  deleteUserById: async (id) => {
    try {
      const response = await privateClient.delete(
        userEndpoints.deleteUserById({ id })
      );
      return { response };
    } catch (err) {
      return { err };
    }
  },
  assignOrder: async (id, data) => {
    try {
      const response = await privateClient.put(
        userEndpoints.assignOrder({ id }),
        data
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },

  userListOrders: async (id) => {
    try {
      const response = await privateClient.get(userEndpoints.userListOrders({id}));
      return {response}
    }
    catch (err){
      return{err}
    }
  }
};

export default userApi;
