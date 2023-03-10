import { LoadingButton } from "@mui/lab";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/users.api";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import {
  setUser,
  setUserData,
  setUserRole,
} from "../../redux/features/userSlice";
import ordersApi from "../../api/modules/orders.api";
import { setOrderId } from "../../redux/features/userSlice";

const SigninForm = ({ switchAuthState }) => {
  const dispatch = useDispatch();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [order, setOrder] = useState({ status: "Created", totalPrice: 0 });

  const createOrder = async () => {
    const { response } = await ordersApi.postOrders(order);
    dispatch(setOrderId(response.id));
  };

  const signinForm = useFormik({
    initialValues: {
      password: "",
      userName: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(4, "username minimum 4 characters")
        .required("username is required"),
      password: Yup.string()
        .min(4, "password minimum 4 characters")
        .required("password is required"),
    }),
    onSubmit: async (values) => {
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      const { response, err } = await userApi.signin(values);
      setIsLoginRequest(false);

      if (response) {
        createOrder();
        signinForm.resetForm();
        dispatch(setUserRole(response.role));
        dispatch(setUser(response));
        dispatch(setAuthModalOpen(false));
        toast.success("Sign in success");
        const userData = await userApi.getInfo(response.userId);
        dispatch(setUserData(userData.response));
      }
      if (err) setErrorMessage(err);
    },
  });

  return (
    <Box
      className="animate__animated animate__flipInY"
      component="form"
      onSubmit={signinForm.handleSubmit}
    >
      <Stack spacing={2}>
        <TextField
          id="outlined-basic-signin-1"
          label="User Name"
          variant="outlined"
          type="text"
          name="userName"
          fullWidth
          value={signinForm.values.userName}
          onChange={signinForm.handleChange}
          color="success"
          error={
            signinForm.touched.userName &&
            signinForm.errors.userName !== undefined
          }
          helperText={signinForm.touched.userName && signinForm.errors.userName}
        />
        <TextField
          id="outlined-basic-signin-2"
          label="Password"
          variant="outlined"
          type="password"
          name="password"
          fullWidth
          value={signinForm.values.password}
          onChange={signinForm.handleChange}
          color="success"
          error={
            signinForm.touched.password &&
            signinForm.errors.password !== undefined
          }
          helperText={signinForm.touched.password && signinForm.errors.password}
        />
      </Stack>

      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginTop: 4 }}
        loading={isLoginRequest}
      >
        sign in
      </LoadingButton>

      <Button fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()}>
        sign up
      </Button>
      {errorMessage && (
        <Box sx={{ marginTop: 2 }}>
          <Alert severity="error" variant="outlined">
            {errorMessage}
          </Alert>
        </Box>
      )}
    </Box>
  );
};

export default SigninForm;
