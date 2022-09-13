import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  AddCart,
  DeleteCart,
  ChooseSelectedItem,
} from "../../actions/actions.js";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import "./Products.css";
import ProductCard from "./ProductCard.js";
import Navbar from "../../Navbar/Navbar.js";

function Products() {
  const selectedItem = useSelector((state) => state.chooseItem);
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);
  //console.log(counter);
  const dispatch = useDispatch();
  let total = 0;
  cart.forEach((product) => (total += product.quantity));
  return (
    <div className="App">
      <Navbar />
      <ul className="productcontainer">
        {cart.map((product, key) => {
          console.log(product, key);
          return (
            <li className="items" key={product.id}>
              <ProductCard
                img={product.img}
                title="What I learned from my visit to The Upside Down"
                author="Nancy Wheeler"
                product={product}
                pkey={key}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Products;
