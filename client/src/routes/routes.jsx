
import HomePage from "../Screens/HomePage";
import Shop from "../Screens/ShopPage";
import CheckOutPage from "../Screens/CheckOutPage";
import ProductDetailPage from "../Screens/ProductDetailPage";



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

  {
    path: "/details",
    element: <ProductDetailPage />,
    state: "details",
  },


];

export default routes;
