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
      <div to="citem" className="link">
        <img src={props.img} />
      </div>
      <div className="ccard-body">
        <h2>{props.title}</h2>
        <div>Quantity:{cart[props.pkey].quantity}</div>
        <Button
          className="buttons"
          variant="outlined"
          color="success"
          onClick={() => dispatch(AddCart(props.product.id))}
        >
          Add to Cart
        </Button>

        <Button
          className="buttons"
          variant="outlined"
          color="error"
          onClick={() => dispatch(DeleteCart(props.product.id))}
        >
          Remove from Cart
        </Button>
      </div>
    </div>
  );
}

export default CartCard;
