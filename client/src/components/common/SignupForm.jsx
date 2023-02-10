import { LoadingButton } from "@mui/lab";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from "yup";
import userApi from "../../api/modules/users.api";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import { setUser } from "../../redux/features/userSlice";

const SignupForm = ({ switchAuthState }) => {
  const dispatch = useDispatch();

  const [isLoginRequest, setIsLoginRequest] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const signinForm = useFormik({
    initialValues: {
      password: "",
      userName: "",
      role: "customer",
      confirmPassword: "",
      name: "",
      lastName: "",
      email: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(4, "username minimum 4 characters")
        .required("username is required"),
      password: Yup.string()
        .min(4, "password minimum 4 characters")
        .required("password is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "confirmPassword not match")
        .min(4, "confirmPassword minimum 4 characters")
        .required("confirmPassword is required"),
      name: Yup.string().required("name is required"),
      lastName: Yup.string().required("last name is required"),
      email: Yup.string().required("email is required"),
    }),
    onSubmit: async (values) => {
      const data = {
        userName: values.userName,
        password: values.password,
        role: values.role,
        user: {
          name: values.name,
          lastName: values.lastName,
          email: values.email,
        },
      };
      setErrorMessage(undefined);
      setIsLoginRequest(true);
      const { response, err } = await userApi.signup(data);
      setIsLoginRequest(false);

      if (response) {
        const responseData = {
          userName: response.userName,
          authId: response.authId,
          userId: response.user.userId,
          token: response.token,
        };
        signinForm.resetForm();
        dispatch(setUser(responseData));
        dispatch(setAuthModalOpen(false));
        toast.success("Sign in success");
      }

      if (err) setErrorMessage(err.message);
    },
  });

  return (
    <Box
      className="animate__animated animate__flipInY"
      component="form"
      onSubmit={signinForm.handleSubmit}
    >
      <Stack spacing={3}>
        <Stack direction="row" spacing={1}>
          <TextField
            id="outlined-basic"
            label="User Name"
            variant="outlined"
            size="small"
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
            helperText={
              signinForm.touched.userName && signinForm.errors.userName
            }
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            type="text"
            name="email"
            fullWidth
            value={signinForm.values.email}
            onChange={signinForm.handleChange}
            color="success"
            error={
              signinForm.touched.email && signinForm.errors.email !== undefined
            }
            helperText={signinForm.touched.email && signinForm.errors.email}
          />
        </Stack>

        <Stack direction="row" spacing={1}>
          <TextField
            d="outlined-basic"
            label="Password"
            variant="outlined"
            size="small"
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
            helperText={
              signinForm.touched.password && signinForm.errors.password
            }
          />
          <TextField
            id="outlined-basic"
            label="Confirm Password"
            variant="outlined"
            size="small"
            type="password"
            name="confirmPassword"
            fullWidth
            value={signinForm.values.confirmPassword}
            onChange={signinForm.handleChange}
            color="success"
            error={
              signinForm.touched.confirmPassword &&
              signinForm.errors.confirmPassword !== undefined
            }
            helperText={
              signinForm.touched.confirmPassword &&
              signinForm.errors.confirmPassword
            }
          />
        </Stack>
        <Stack direction="row" spacing={1}>
          <TextField
            id="outlined-basic"
            label="Firts Name"
            variant="outlined"
            size="small"
            type="text"
            name="name"
            fullWidth
            value={signinForm.values.name}
            onChange={signinForm.handleChange}
            color="success"
            error={
              signinForm.touched.name && signinForm.errors.name !== undefined
            }
            helperText={signinForm.touched.name && signinForm.errors.name}
          />
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            size="small"
            type="text"
            name="lastName"
            fullWidth
            value={signinForm.values.lastName}
            onChange={signinForm.handleChange}
            color="success"
            error={
              signinForm.touched.lastName &&
              signinForm.errors.lastName !== undefined
            }
            helperText={
              signinForm.touched.lastName && signinForm.errors.lastName
            }
          />
        </Stack>
      </Stack>

      <LoadingButton
        type="submit"
        fullWidth
        size="large"
        variant="contained"
        sx={{ marginTop: 4 }}
        loading={isLoginRequest}
      >
        sign up
      </LoadingButton>

      <Button fullWidth sx={{ marginTop: 1 }} onClick={() => switchAuthState()}>
        sign in
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

export default SignupForm;
