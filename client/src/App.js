import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Shop from "./Screens/Shop";
import CheckOutPage from "./Screens/CheckOutPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/checkout" element={<CheckOutPage />} />
    </Routes>
  );
}

export default App;
