import HomePage from "../screens/HomePage";
import Shop from "../screens/ShopPage";
import CheckOutPage from "../screens/CheckOutPage";

export const routesGen = {
  home: "/"
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/shop",
    element: <Shop />,
    state:"shop"
  } ,
  {
    path: "/checkout",
    element: <CheckOutPage />,
    state:"checkout"
  } 
];

export default routes;