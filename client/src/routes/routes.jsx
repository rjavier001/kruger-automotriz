import HomePage from "../screens/HomePage";
import Shop from "../screens/ShopPage";
import CheckOutPage from "../screens/CheckOutPage";
import ProductDetailPage from "../screens/ProductDetailPage";
import NotFoundPage from "../screens/NotFoundPage";
import PaymentPage from "../screens/PaymentPage";
import Dashboard from "../components/admin/Dashboard";
import Products from "../components/admin/Products";
import CreateProduct from "../components/admin/CreateProduct";
import { EditProduct } from "../components/admin/EditProduct";
import Category from "../components/admin/Category";
import EditFieldsCategory from "../components/admin/componentsProduct/EditFieldsCategory";
import Discounts from "../components/admin/Discounts";
import Featured from "../components/admin/Featured";
import UserDashboard from "../components/admin/usersAdmin/UserDashboard";

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
  {
    path: "/admin",
    element: <Dashboard />,
    state: "adminDashboard"
  },
  {
    path: "/admin/products",
    element: <Products />,
    state: "products",
  },
  {
    path: "/admin/products/create",
    element: <CreateProduct />,
    state: "create",
  },
  {
    path: "/admin/products/edit/:id",
    element: <EditProduct />,
    state: "edit",
  },
  {
    path: "/admin/products/category-edit",
    element: <Category />,
    state: "edit-category",
  },
  {
    path: "/admin/category/edit/:id",
    element: <EditFieldsCategory />,
    state: "category-fields",
  },
  {
    path: "/admin/products/discounts",
    element: <Discounts />,
    state: "discounts",
  },
  {
    path: "/admin/products/featured",
    element: <Featured />,
    state: "featured",
  },
  {
    path: "/admin/users",
    element: <UserDashboard />,
    state: "users",
  }
  
];

export default routes;
