import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
  signin: "auth/sign-in",
  signup: "auth/sign-up",
  getInfo: ({ id }) => `users/${id}`,
  passwordUpdate: "users/update-password",


  listUsers: "users",
  usersById: ({ id }) => `users/${id}`,
  updateUserById: ({ id }) => `users/${id}`,
  deleteUserById: ({ id }) => `users/${id}`,

  assignOrder: ({ id }) => `users/assign-order/${id}`,

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
      console.log(data)
      const response = await publicClient.post(userEndpoints.signup, data);
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
  passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateClient.put(userEndpoints.passwordUpdate, {
        password,
        newPassword,
        confirmNewPassword,
      });

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
    console.log('usersApi', id, data)
    console.log(localStorage.getItem("actkn"));
    try {
      const response = await privateClient.put(userEndpoints.updateUserById({ id }),data);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  deleteUserById: async (id) => {
    console.log('usersApi', id)
    try {
      const response = await privateClient.delete(userEndpoints.deleteUserById({ id }));
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

};

export default userApi;
