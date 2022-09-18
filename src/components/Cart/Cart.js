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
  cart.products.forEach(
    (product) => (total += product.cost * product.quantity)
  );

  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <Navbar />

      <div className="container">
        <div className="cartitems">
          <ul>
            {cart.products.map((product, key) => {
              console.log(product);
              return product.quantity === 0 ? null : (
                <li className="items" key={product.id}>
                  <CartCard
                    img={product.img}
                    title={product.title}
                    product={product}
                    pkey={key}
                    desc={product.desc}
                  />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="summary">
          <p className="sumhead">Summary</p>

          <span className="row">
            <p className="head">Order Total</p>
            <p className="val">${total}</p>
          </span>

          <span className="row">
            <p className="head">Date of Arrival</p>
            <p className="val">24th January</p>
          </span>

          <span className="row">
            <p className="head">GST</p>
            <p className="val">${(total * 18) / 100}</p>
          </span>

          <span className="row">
            <p className="head total">Total</p>
            <p className="val">${(total * 118) / 100}</p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cart;
