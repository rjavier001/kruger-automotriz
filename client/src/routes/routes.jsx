import HomePage from "../screens/HomePage";
import Shop from "../screens/ShopPage";
import CheckOutPage from "../screens/CheckOutPage";
import ProductDetailPage from "../screens/ProductDetailPage";
import NotFoundPage from "../screens/NotFoundPage";
import PaymentPage from "../screens/PaymentPage";
import { Navigate } from "react-router-dom";

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
  {
    path: "/*",
    element: <NotFoundPage />,
    state: "not-found",
  },
  {
    path: "/payment",
    element: <PaymentPage />,
    state: "payment",
  },
];

export default routes;
