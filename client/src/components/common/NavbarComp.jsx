import { cloneElement, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import MenuIcon from "@mui/icons-material/Menu";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  useScrollTrigger,
} from "@mui/material";
import menuConfigs from "../../configs/menu.configs";
import { themeModes } from "../../configs/theme.configs";
import { setThemeMode } from "../../redux/features/themeModeSlice";
import { setAuthModalOpen } from "../../redux/features/authModalSlice";
import Sidebar from "./Sidebar";
import UserMenu from "./UserMenu";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const { appState } = useSelector((state) => state.appState);
  const { themeMode } = useSelector((state) => state.themeMode);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleToCO = () => {
    if (user) navigate("/checkout");
    else dispatch(setAuthModalOpen(true));
  };

  const onSwithTheme = () => {
    const theme =
      themeMode === themeModes.dark ? themeModes.light : themeModes.dark;
    dispatch(setThemeMode(theme));
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <Sidebar open={sidebarOpen} toggleSidebar={toggleSidebar} />
      <ScrollAppBar>
        <AppBar elevation={0} sx={{ zIndex: 9999 }}>
          <Toolbar
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton
                color="inherit"
                sx={{ mr: 2, display: { md: "none" } }}
                onClick={toggleSidebar}
              >
                <MenuIcon />
              </IconButton>
            </Stack>

            <Box
              flexGrow={1}
              alignItems="center"
              display={{ xs: "none", md: "flex" }}
            >
              {menuConfigs.main.map((item, index) => (
                <Button
                  key={index}
                  sx={{
                    color: appState.includes(item.state)
                      ? "primary.contrastText"
                      : "inherit",
                    mr: 2,
                    // width: "100%",
                  }}
                  component={Link}
                  to={item.path}
                  variant={appState.includes(item.state) ? "contained" : "text"}
                >
                  {item.display}
                </Button>
              ))}
            </Box>
            {/* user menu */}
            <Stack spacing={3} direction="row" alignItems="center">
              <IconButton sx={{ color: "inherit" }} onClick={onSwithTheme}>
                {themeMode === themeModes.dark && <DarkModeOutlinedIcon />}
                {themeMode === themeModes.light && <WbSunnyOutlinedIcon />}
              </IconButton>

              <IconButton onClick={() => handleToCO()}>
                <ShoppingCartCheckoutIcon />
                <Typography sx={styles.badge}>{cartTotalQuantity}</Typography>
              </IconButton>
              {!user && (
                <AccountCircleIcon
                  variant="contained"
                  onClick={() => dispatch(setAuthModalOpen(true))}
                />
              )}
            </Stack>
            {user && <UserMenu />}
            {/* user menu */}
          </Toolbar>
        </AppBar>
      </ScrollAppBar>
    </>
  );
};

export default Navbar;

export const styles = {
  badge: {
    background: "#ff910d",
    borderRadius: 25,
    height: 25,
    width: 25,
    fontWeight: "700",
    color: "black",

    borderWidth: 0.5,
    borderStyle: "solid",
  },
};
