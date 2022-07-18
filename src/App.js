import "./App.css";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Item from "./components/Item/Item";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item" element={<Item />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
