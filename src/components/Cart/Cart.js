import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  AddCart,
  DeleteCart,
} from "../../actions/actions.js";
import "./Cart.css";
import Item from "./Item.js";

function Cart() {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);
  let total = 0;
  cart.forEach((product) => (total += product.id * product.quantity));

  console.log(cart);
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <span>{cart[0].quantity}</span>
      <ul>
        {cart.map((product) => {
          console.log(product);
          return product.quantity === 0 ? null : (
            <li className="cart" key={product.id}>
              <button onClick={() => dispatch(DeleteCart(product.id))}>
                Remove from cart
              </button>
            </li>
          );
        })}
      </ul>
      <p>Total: {total}</p>
    </div>
  );
}

export default Cart;
