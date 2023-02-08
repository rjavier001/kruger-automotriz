import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
  signin: "auth/sign-in",
  signup: "auth/sign-up",
  getInfo: "users/info",
  passwordUpdate: "user/update-password",
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
  signup: async ({ userName, password, confirmPassword, displayName }) => {
    try {
      const response = await publicClient.post(userEndpoints.signup, {
        userName,
        password,
        confirmPassword,
        displayName,
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);

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
};

export default userApi;
