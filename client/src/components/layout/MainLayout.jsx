import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import FooterComp from "../common/FooterComp";
// import GlobalLoading from "../common/GlobalLoading";
import NavbarComp from "../common/NavbarComp";
import AuthModal from "../common/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import userApi from "../../api/modules/users.api";
// import favoriteApi from "../../api/modules/favorite.api";
import { setUser } from "../../redux/features/userSlice";

const MainLayout = () => {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.user);

  useEffect(() => {
    const authUser = async () => {
      const { response, err } = await userApi.validateAuth();
      if (response) dispatch(setUser(response));
      if (err) dispatch(setUser(null));
    };
    authUser();
  }, [dispatch]);

  // useEffect(() => {
  //   const getFavorites = async () => {
  //     const { response, err } = await favoriteApi.getList();

  //     if (response) dispatch(setListFavorites(response));
  //     if (err) toast.error(err.message);
  //   };

  //   if (user) getFavorites();
  //   if (!user) dispatch(setListFavorites([]));
  // }, [user, dispatch]);

  return (
    <>
      {/* <GlobalLoading /> */}
      <AuthModal />
      <Box display="flex" minHeight="100vh" pt={{ xs: 25, sm: 25, md: 20 }}>
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
