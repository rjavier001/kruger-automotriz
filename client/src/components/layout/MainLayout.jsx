import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import FooterComp from "../common/FooterComp";
import GlobalLoading from "../common/GlobalLoading";
import NavbarComp from "../common/NavbarComp";
import AuthModal from "../common/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import userApi from "../../api/modules/users.api";
// import favoriteApi from "../../api/modules/favorite.api";
import { setUser, setUserRole,setUserData } from "../../redux/features/userSlice";

const MainLayout = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const authUser = async () => {
      const { response, err } = await userApi.validateAuth();
      if (response) {
        dispatch(setUserRole(response.role));
        dispatch(setUser(response));
        const userData = await userApi.getInfo(response.userId);
        dispatch(setUserData(userData.response));
      }
      if (err) dispatch(setUser(null));
    };
    authUser();
  }, [dispatch]);

  return (
    <>
      <GlobalLoading />
      <AuthModal />
      <Box display="flex" minHeight="100vh" pt={{ xs: 2, sm: 2, md: 10 }}>
        <NavbarComp />
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
      </Box>
      <FooterComp />
    </>
  );
};

export default MainLayout;
