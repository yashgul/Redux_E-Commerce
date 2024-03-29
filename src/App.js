import "./App.css";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [initialState, setInitialState] = useState([]);

  console.log(initialState);
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
