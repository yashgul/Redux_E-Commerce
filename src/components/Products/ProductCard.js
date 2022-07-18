import "./ProductCard.css";
import { AddCart, DeleteCart } from "../../actions/actions";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
function ProductCard(props) {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  return (
    <div className="card">
      <img src={props.img} />
      <div className="card-body">
        <h2>{props.title}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
        <Link to="item" className="link" state={{ id: props.product.id }}>
          <h5>{props.author}</h5>
        </Link>

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
          Remove from cart
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
