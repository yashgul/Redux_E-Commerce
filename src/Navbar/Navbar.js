import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./Navbar.css";
function Navbar() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  let total = 0;
  cart.forEach((product) => (total += product.quantity));
  return (
    <div className="navbar">
      <Link to="/" className="link">
        <Button className="link navitem" variant="contained">
          Home
        </Button>
      </Link>
      <Link to="/cart" className="link navitem">
        <Button className="link" variant="contained">
          Cart ({total})
        </Button>
      </Link>
    </div>
  );
}

export default Navbar;
