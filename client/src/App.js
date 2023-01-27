import { ThemeProvider } from "@mui/material/styles";
import "./App.css";
import { useSelector } from "react-redux";
import themeConfigs from "./configs/theme.configs";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Shop from "./Screens/Shop";
import CheckOutPage from "./Screens/CheckOutPage";

function App() {
  const { themeMode } = useSelector((state) => state.themeMode);
  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
