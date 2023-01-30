import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupsIcon from "@mui/icons-material/Groups";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

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

// const user = [
//   {
//     display: "favorites",
//     path: "/favorites",
//     icon: <FavoriteBorderOutlinedIcon />,
//     state: "favorite",
//   },
//   {
//     display: "reviews",
//     path: "/reviews",
//     icon: <RateReviewOutlinedIcon />,
//     state: "reviews",
//   },
//   {
//     display: "password update",
//     path: "/password-update",
//     icon: <LockResetOutlinedIcon />,
//     state: "password.update",
//   },
// ];

const menuConfigs = { main };

export default menuConfigs;
