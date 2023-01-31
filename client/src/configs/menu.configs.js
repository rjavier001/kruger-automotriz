import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupsIcon from "@mui/icons-material/Groups";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";

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
    display: "shop history",
    path: "/history",
    // icon: <FavoriteBorderOutlinedIcon />,
    state: "history",
  },
  {
    display: "in progress orders",
    path: "/progressorders",
    // icon: <RateReviewOutlinedIcon />,
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
