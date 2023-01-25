import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Screens/Home";
import Shop from "./Screens/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
}

export default App;
