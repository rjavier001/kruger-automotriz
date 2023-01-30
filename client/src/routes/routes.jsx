import HomePage from "../screens/HomePage";
import Shop from "../screens/ShopPage";
import CheckOutPage from "../screens/CheckOutPage";
import CardProductComp from "../Components/common/CardProductComp";

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
  },
  {
    path: "/shop/:productId",
    element: <CardProductComp />,
    state:"shop.detail"
  }  
];

export default routes;