import ProtectedPage from "../components/common/ProtectedPage";
import ProtectedPageAdmin from "../components/common/ProtectedPageAdmin";
import HomePage from "../screens/HomePage";
import Shop from "../screens/ShopPage";
import CheckOutPage from "../screens/CheckOutPage";
import ProductDetailPage from "../screens/ProductDetailPage";
import NotFoundPage from "../screens/NotFoundPage";
import PaymentPage from "../screens/PaymentPage";
import CreateProduct from "../components/admin/componentsProduct/CreateProduct";
import EditFieldsCategory from "../components/admin/componentsProduct/EditFieldsCategory";
import UserDashboard from "../components/admin/usersAdmin/UserDashboard";
import DashBoardPage from "../screens/DashBoardPage";
import Category from "../components/admin/componentsProduct/Category";
import Discounts from "../components/admin/componentsProduct/Discounts";
import Products from "../components/admin/componentsProduct/Products";
import { EditProduct } from "../components/admin/componentsProduct/EditProduct";
import Featured from "../components/admin/componentsProduct/Featured";
import ContactPage from "../screens/ContactPage";
import AboutUsPage from "../screens/AboutUsPage";
import PaymentCompletedPage from "../screens/PaymentCompletedPage";
import { ProgressOrderPage } from "../screens/ProgressOrderPage";
import EditDeleteProducts from "../components/admin/componentsProduct/EditDeleteProducts";
import PasswordUpdatePage from "../screens/PasswordUpdatePage";
import UnderConstructionPage from "../screens/UnderConstructionPage";
import { HistoryPage } from "../screens/HistoryPage";

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
    path: "/contact",
    element: <ContactPage />,
    state: "contact",
  },
  {
    path: "/about",
    element: <AboutUsPage />,
    state: "about",
  },
  {
    path: "/password-update",
    element: (
      <ProtectedPage>
        <PasswordUpdatePage />
      </ProtectedPage>
    ),
    state: "password.update",
  },
  {
    path: "/*",
    element: <NotFoundPage />,
    state: "not-found",
  },
  {
    path: "/under-construction",
    element: <UnderConstructionPage />,
    state: "under-construction",
  },
  {
    path: "/payment",
    element: <PaymentPage />,
    state: "payment",
  },
  {
    path: "/success",
    element: <PaymentCompletedPage />,
    state: "success",
  },
  {
    path: "/history",
    element: <HistoryPage />,
    state: "progress",
  },
  {
    path: "/progressorders",
    element: <ProgressOrderPage />,
    state: "progress",
  },
  {
    path: "/admin",
    element: (
      <ProtectedPageAdmin>
        <DashBoardPage />
      </ProtectedPageAdmin>
    ),
    state: "admin",
  },
  {
    path: "/admin/products",
    element: (
      <ProtectedPageAdmin>
        <Products />
      </ProtectedPageAdmin>
    ),
    state: "products",
  },
  {
    path: "/admin/products/create",
    element: (
      <ProtectedPageAdmin>
        <CreateProduct />
      </ProtectedPageAdmin>
    ),
    state: "create",
  },
  {
    path: "/admin/products/viewAll",
    element: (
      <ProtectedPageAdmin>
        <EditDeleteProducts />
      </ProtectedPageAdmin>
    ),
    state: "edit-all-products",
  },
  {
    path: "/admin/products/edit/:id",
    element: (
      <ProtectedPageAdmin>
        <EditProduct />
      </ProtectedPageAdmin>
    ),
    state: "edit",
  },
  {
    path: "/admin/products/category-edit",
    element: (
      <ProtectedPageAdmin>
        <Category />
      </ProtectedPageAdmin>
    ),
    state: "edit-category",
  },
  {
    path: "/admin/category/edit/:id",
    element: (
      <ProtectedPageAdmin>
        <EditFieldsCategory />
      </ProtectedPageAdmin>
    ),
    state: "category-fields",
  },
  {
    path: "/admin/products/discounts",
    element: (
      <ProtectedPageAdmin>
        <Discounts />
      </ProtectedPageAdmin>
    ),
    state: "discounts",
  },
  {
    path: "/admin/products/featured",
    element: (
      <ProtectedPageAdmin>
        <Featured />
      </ProtectedPageAdmin>
    ),
    state: "featured",
  },
  {
    path: "/admin/users",
    element: (
      <ProtectedPageAdmin>
        <UserDashboard />
      </ProtectedPageAdmin>
    ),
    state: "users",
  },
];

export default routes;
