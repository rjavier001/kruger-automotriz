import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import themeConfigs from "./configs/theme.configs";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import AdminLayout from "./components/layout/AdminLayout";
import routes from "./routes/routes";
import PageWrapper from "./components/common/PageWrapper";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import store from "./redux/store";
import { getTotal } from "./redux/features/cartSlice";

store.dispatch(getTotal());
const App = () => {
  const { user } = useSelector((state) => state.user);
  const { themeMode } = useSelector((state) => state.themeMode);
  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      <CssBaseline />
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          {/* <Route path="/" element={<AdminLayout />}> */}
          <Route
            path="/"
            element={user?.role === "admin" ? <AdminLayout /> : <MainLayout />}
          >
            {routes.map((route, index) =>
              route.index ? (
                <Route
                  index
                  key={index}
                  element={
                    route.state ? (
                      <PageWrapper state={route.state}>
                        {route.element}
                      </PageWrapper>
                    ) : (
                      route.element
                    )
                  }
                />
              ) : (
                <Route
                  path={route.path}
                  key={index}
                  element={
                    route.state ? (
                      <PageWrapper state={route.state}>
                        {route.element}
                      </PageWrapper>
                    ) : (
                      route.element
                    )
                  }
                />
              )
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
