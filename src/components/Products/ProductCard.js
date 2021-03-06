import "./ProductCard.css";
import { AddCart, DeleteCart } from "../../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function ProductCard(props) {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log(props);
  return (
    <div className="card">
      <div to="item" className="link">
        <img src={props.img} />
      </div>
      <div className="card-body">
        <h2>{props.title}</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
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

export default ProductCard;
