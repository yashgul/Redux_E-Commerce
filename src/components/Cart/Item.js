import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  AddCart,
  DeleteCart,
} from "../../actions/actions.js";

function Item(props) {
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);

  const dispatch = useDispatch();

  return (
    <div className="flex">
      <button onClick={() => dispatch(AddCart(props.id))}>ADD</button>
      <span>ID: {props.id}</span>
      <span>Quantitity:{props.quantity}</span>
      <button onClick={() => dispatch(DeleteCart(props.id))}>REMOVE</button>
    </div>
  );
}

export default Item;
