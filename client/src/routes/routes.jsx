import HomePage from "../Screens/HomePage";
import Shop from "../Screens/ShopPage";
import CheckOutPage from "../Screens/CheckOutPage";

export const routesGen = {
  home: "/",
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },
  {
    path: "/shop",
    element: <Shop />,
    state: "shop",
  },
  {
    path: "/checkout",
    element: <CheckOutPage />,
    state: "checkout",
  },
];

export default routes;
