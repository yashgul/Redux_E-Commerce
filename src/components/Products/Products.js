import { useSelector, useDispatch } from "react-redux";
import { ChangeFilter } from "../../actions/actions.js";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Products.css";
import ProductCard from "./ProductCard.js";
import Navbar from "../../Navbar/Navbar.js";
import Select from "@mui/material/Select";
import { useEffect } from "react";
function Products() {
  useEffect(() => {});
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);
  function compare(a, b) {
    if (a.id < b.id) {
      return 1;
    }
    return 0;
  }

  function filterItems(event) {
    console.log(cart);
    console.log(event.target.value);
    dispatch(ChangeFilter(event.target.value));
  }

  //console.log(cart);
  //console.log(counter);

  let total = 0;

  return (
    <div className="App">
      <Navbar />
      <div className="filtrow">
        <div className="searchbar">
          <input
            className="searchbar"
            onChange={(event) => filterItems(event)}
            placeholder="Search…"
            value={cart.filter_val}
          />
        </div>
        <ul className="productcontainer">
          {cart.products.map((product, key) => {
            //console.log(product, key);
            return (
              <li className="items" key={product.id}>
                <ProductCard
                  img={product.img}
                  title={product.title}
                  desc={product.desc}
                  product={product}
                  pkey={key}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Products;
