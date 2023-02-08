import { cloneElement, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import LoginIcon from "@mui/icons-material/Login";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  InputBase,
  useScrollTrigger,
} from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import menuConfigs from "../../configs/menu.configs";
import { themeModes } from "../../configs/theme.configs";
import { setThemeMode } from "../../redux/features/themeModeSlice";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import Sidebar from "./Sidebar";
import UserMenu from "./UserMenu";
import Image from "mui-image";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logo from "../../assets/LOGO_KRUGERMOTORS.png";
import Slide from "@mui/material/Slide";

function HideOnScroll(props) {
  const { themeMode } = useSelector((state) => state.themeMode);
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    sx: {
      color: trigger
        ? "text.primary"
        : themeMode === themeModes.dark
        ? "primary.contrastText"
        : "text.primary",
      backgroundColor: trigger
        ? "background.paper"
        : themeMode === themeModes.dark
        ? "transparent"
        : "background.paper",
    },
  });

  // return (
  //   <Slide
  //     appear={false}
  //     direction="down"
  //     in={!trigger}
  //     sx={{
  //       color: trigger
  //         ? "text.primary"
  //         : themeMode === themeModes.dark
  //         ? "primary.contrastText"
  //         : "text.primary",
  //       backgroundColor: trigger
  //         ? "background.paper"
  //         : themeMode === themeModes.dark
  //         ? "transparent"
  //         : "background.paper",
  //     }}
  //   >
  //     {children}
  //   </Slide>
  // );
}
const ScrollAppBar = ({ children, window }) => {
  const { themeMode } = useSelector((state) => state.themeMode);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
    target: window ? window() : undefined,
  });

  return cloneElement(children, {
    sx: {
      color: trigger
        ? "text.primary"
        : themeMode === themeModes.dark
        ? "primary.contrastText"
        : "text.primary",
      backgroundColor: trigger
        ? "background.paper"
        : themeMode === themeModes.dark
        ? "transparent"
        : "background.paper",
    },
  });
};

const Navbar = () => {
  const { user } = useSelector((state) => state.user);
  const { appState } = useSelector((state) => state.appState);
  const { themeMode } = useSelector((state) => state.themeMode);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const onSwithTheme = () => {
    const theme =
      themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
    dispatch(setThemeMode(theme));
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  let location = useLocation();

  return (
    <>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      <HideOnScroll>
      {/* <ScrollAppBar> */}
        <AppBar
          position="fixed"
          color="primary"
          elevation={1}
          sx={{
            zIndex: 9999,
          }}
        >
          <Toolbar
            sx={{
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Stack sx={{ width: "100%" }}>
              <Stack
                direction={{ md: "row", xs: "column" }}
                alignItems={"center"}
              >
                <IconButton
                  color="inherit"
                  sx={{ mr: 2, display: { md: "none" } }}
                  onClick={toggleSidebar}
                >
                  <MenuIcon />
                </IconButton>
                <Stack>
                  <IconButton color="inherit">
                    <Image
                      src={Logo}
                      width={130}
                      duration={100}
                      easing={"linear"}
                    />
                  </IconButton>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Kruger Motors
                  </Typography>
                </Stack>

                <Typography
                  variant="h4"
                  fontSize={{ xs: 0, sm: 25, md: 35 }}
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    fontWeight: "bold",
                  }}
                >
                  Sabemos lo que tu auto significa para ti!
                </Typography>
                <Stack direction={"row"}>
                  <IconButton>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton>
                    <InstagramIcon />
                  </IconButton>
                  <IconButton>
                    <TwitterIcon />
                  </IconButton>
                </Stack>
              </Stack>

              <Stack
                direction="row"
                alignItems="center"
                display={{ xs: "none", md: "flex" }}
                justifyContent={"space-between"}
              >
                <IconButton sx={{ color: "inherit" }} onClick={onSwithTheme}>
                  {themeMode === themeModes.dark && <DarkModeOutlinedIcon />}
                  {themeMode === themeModes.light && <WbSunnyOutlinedIcon />}
                </IconButton>
                {menuConfigs.main.map((item, index) => (
                  <Button
                    key={index}
                    sx={{
                      color: appState.includes(item.state)
                        ? "primary.contrastText"
                        : "inherit",
                      mr: 2,
                      width: "100%",
                    }}
                    component={Link}
                    to={item.path}
                    variant={
                      appState.includes(item.state) ? "contained" : "text"
                    }
                  >
                    {item.display}
                  </Button>
                ))}
                <NavLink to={"/checkout"}>
                  <IconButton>
                    <ShoppingCartCheckoutIcon />
                    <Typography sx={styles.badge}>
                      {cartTotalQuantity}
                    </Typography>
                  </IconButton>
                </NavLink>
                {/* user menu */}
                <Stack spacing={3} direction="row" alignItems="center">
                  {!user && (
                    <LoginIcon
                      variant="contained"
                      onClick={() => dispatch(setAuthModalOpen(true))}
                    />
                  )}
                </Stack>
                {user && <UserMenu />}
                {/* user menu */}
              </Stack>
            </Stack>
          </Toolbar>
        </AppBar>
        </HideOnScroll>
      {/* </ScrollAppBar> */}
    </>
  );
};

export default Navbar;

export const styles = {
  badge: {
    background: "yellow",
    borderRadius: 25,
    height: 25,
    width: 25,
    fontWeight: "700",
    color: "black",
  },
};
