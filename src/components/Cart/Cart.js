import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  AddCart,
  DeleteCart,
} from "../../actions/actions.js";
import CartCard from "./CartCard.js";
import "./Cart.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Navbar from "../../Navbar/Navbar.js";
function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);
  let total = 0;
  cart.forEach((product) => (total += product.id * product.quantity));

  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <Navbar />
      <ul>
        {cart.map((product, key) => {
          console.log(product);
          return product.quantity === 0 ? null : (
            <li className="items" key={product.id}>
              <CartCard
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
      <p>Total: {total}</p>

      <Link to="/" className="link">
        <Button className="link" variant="contained">
          Products
        </Button>
      </Link>
    </div>
  );
}

export default Cart;
