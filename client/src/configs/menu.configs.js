import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupsIcon from "@mui/icons-material/Groups";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import HistoryIcon from "@mui/icons-material/History";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";

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

const menuConfigs = { main, user };

export default menuConfigs;
