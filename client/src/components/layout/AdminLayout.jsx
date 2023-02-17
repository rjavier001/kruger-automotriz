import * as React from "react";
import { Box } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import FooterComp from "../common/FooterComp";
// import GlobalLoading from "../common/GlobalLoading";
import AuthModal from "../common/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import userApi from "../../api/modules/users.api";
import {
  setUser,
  setUserData,
  setUserRole,
} from "../../redux/features/userSlice";

import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import menuConfigs from "../../configs/menu.configs";
import {
  DrawerHeader,
  AppBar,
  Drawer,
} from "../../configs/styledComponent.configs";

const AdminLayout = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const { user } = useSelector((state) => state.user);

  const handdleLogut = () => {
    dispatch(setUserData(null));
    dispatch(setUser(null));
    dispatch(setUserRole("invite"));
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const authUser = async () => {
      const { response, err } = await userApi.validateAuth();
      if (response) {
        dispatch(setUserRole(response.role));
        dispatch(setUser(response));
      }
      if (err) dispatch(setUser(null));
    };
    authUser();
  }, [dispatch]);
  return (
    <>
      {/* <GlobalLoading /> */}
      <AuthModal />
      <Box display="flex" minHeight="100vh" pt={{ xs: 10, sm: 25, md: 20 }}>
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleDrawerOpen}
                  edge="start"
                  sx={{
                    marginRight: 5,
                    ...(open && { display: "none" }),
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                  Kurger Admin
                </Typography>
              </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={open}>
              <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronRightIcon />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
              </DrawerHeader>
              <Divider />
              <List>
                {menuConfigs.admin.slice(0, 4).map((item, index) => (
                  <ListItem
                    component={Link}
                    to={item.path}
                    key={index}
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography textTransform="capitalize">
                            {item.display}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {menuConfigs.admin.slice(4, 7).map((item, index) => (
                  <ListItem
                    component={Link}
                    to={item.path}
                    key={index}
                    disablePadding
                  >
                    <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText
                        disableTypography
                        primary={
                          <Typography textTransform="capitalize">
                            {item.display}
                          </Typography>
                        }
                      />
                    </ListItemButton>
                  </ListItem>
                ))}
                <ListItemButton
                  component={Link}
                  to="/"
                  sx={{ borderRadius: "10px" }}
                  onClick={handdleLogut}
                >
                  <ListItemIcon>
                    <LogoutOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography textTransform="capitalize">
                        sign out
                      </Typography>
                    }
                  />
                </ListItemButton>
              </List>
            </Drawer>
            <Box sx={{ flexGrow: 1 }}>
              <Outlet />
            </Box>
          </Box>
        </Box>
      </Box>
      <FooterComp />
    </>
  );
};

export default AdminLayout;
