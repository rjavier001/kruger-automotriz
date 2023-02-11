import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupsIcon from "@mui/icons-material/Groups";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import HistoryIcon from "@mui/icons-material/History";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import InventoryIcon from "@mui/icons-material/Inventory";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LineAxisIcon from "@mui/icons-material/LineAxis";
import SettingsIcon from "@mui/icons-material/Settings";

const main = [
  {
    display: "home",
    path: "/",
    icon: <HomeOutlinedIcon />,
    state: "home",
  },
  {
    display: "shop",
    path: "/shop",
    icon: <ShoppingCartCheckoutIcon />,
    state: "shop",
  },
  {
    display: "about us",
    path: "/about",
    icon: <GroupsIcon />,
    state: "about",
  },
  {
    display: "contact us",
    path: "/contact",
    icon: <ContactsIcon />,
    state: "contactus",
  },
];

const user = [
  {
    display: "admin dashboard",
    path: "/admin",
    icon: <SettingsSuggestIcon />,
    state: "favorite",
  },
  {
    display: "shop history",
    path: "/history",
    icon: <HistoryIcon />,
    state: "history",
  },
  {
    display: "in progress orders",
    path: "/progressorders",
    icon: <ProductionQuantityLimitsIcon />,
    state: "progressorders",
  },
  {
    display: "password update",
    path: "/password-update",
    icon: <LockResetOutlinedIcon />,
    state: "password.update",
  },
];

const admin = [
  {
    display: "dashboard",
    path: "/admin",
    icon: <DashboardIcon />,
    state: "dashboard",
  },
  {
    display: "users",
    path: "/admin/users",
    icon: <GroupIcon />,
    state: "users",
  },
  {
    display: "products",
    path: "/admin/products",
    icon: <InventoryIcon />,
    state: "products",
  },
  {
    display: "mailing",
    path: "/",
    icon: <ContactMailIcon />,
    state: "mailing",
  },
  {
    display: "notification",
    path: "/",
    icon: <NotificationsActiveIcon />,
    state: "notification",
  },
  {
    display: "analitycs",
    path: "/",
    icon: <LineAxisIcon />,
    state: "analitycs",
  },
  {
    display: "settings",
    path: "/",
    icon: <SettingsIcon />,
    state: "settings",
  }
];

const menuConfigs = { main, user, admin };

export default menuConfigs;
