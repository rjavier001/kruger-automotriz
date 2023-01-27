import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import LiveTvOutlinedIcon from "@mui/icons-material/LiveTvOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import LockResetOutlinedIcon from "@mui/icons-material/LockResetOutlined";
import ContactsIcon from "@mui/icons-material/Contacts";
import GroupsIcon from "@mui/icons-material/Groups";

const main = [
  {
    display: "home",
    path: "/",
    // icon: <HomeOutlinedIcon />,
    state: "home",
  },
  {
    display: "shop",
    path: "/shop",
    // icon: <SlideshowOutlinedIcon />,
    state: "shop",
  },
  {
    display: "about us",
    path: "/about",
    // icon: <LiveTvOutlinedIcon />,
    state: "about",
  },
  {
    display: "contact us",
    path: "/contact",
    // icon: <SearchOutlinedIcon />,
    state: "search",
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
