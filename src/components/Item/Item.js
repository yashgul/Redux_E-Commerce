import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  decrement,
  increment,
  reset,
  AddCart,
  DeleteCart,
} from "../../actions/actions.js";
import "./Item.css";
function Item() {
  const location = useLocation();
  const { id } = location.state;

  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);

  const dispatch = useDispatch();

  return (
    <div className="flex">
      <span>ID:{id}</span>
    </div>
  );
}

export default Item;
