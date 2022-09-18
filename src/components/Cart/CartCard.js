import "./CartCard.css";
import { AddCart, DeleteCart } from "../../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function CartCard(props) {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log(props);
  return (
    <div className="ccard cbody">
      <div className="clink">
        <img src={props.img} />
      </div>
      <h2 className="ctitle">{props.title}</h2>
      <div className="ccard-body">
        <Button
          className="cbuttons"
          variant="outlined"
          color="success"
          onClick={() => dispatch(AddCart(props.product.id))}
        >
          +
        </Button>
        <div className="quan_cost">
          <span>{cart.products[props.pkey].quantity}</span>
        </div>
        <Button
          className="cbuttons"
          variant="outlined"
          color="error"
          onClick={() => dispatch(DeleteCart(props.product.id))}
        >
          -
        </Button>
      </div>
    </div>
  );
}

export default CartCard;
