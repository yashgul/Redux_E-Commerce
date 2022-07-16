import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  AddCart,
  DeleteCart,
} from "../../actions/actions.js";

function Products() {
  const counter = useSelector((state) => state.counterReducer);
  const cart = useSelector((state) => state.cartReducer);
  console.log(cart);
  //console.log(counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>
        Hello World <br /> A little Redux Project. YaaY!
      </h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment(1))}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>

      <div className="items">
        <h3>ITEM 1</h3>
        <button onClick={() => dispatch(AddCart(1))}>ADD</button>
        <button onClick={() => dispatch(DeleteCart(1))}>REMOVE</button>
        <span>{cart[0].quantity}</span>
      </div>

      <div className="items">
        <h3>ITEM 2</h3>
        <button onClick={() => dispatch(AddCart(2))}>ADD</button>
        <button onClick={() => dispatch(DeleteCart(2))}>REMOVE</button>
      </div>

      <div className="items">
        <h3>ITEM 3</h3>
        <button onClick={() => dispatch(AddCart(3))}>ADD</button>
        <button onClick={() => dispatch(DeleteCart(3))}>REMOVE</button>
      </div>
    </div>
  );
}

export default Products;
