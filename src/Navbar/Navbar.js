import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "./Navbar.css";
import { ChangeFilter } from "../actions/actions";
import { useState } from "react";

function Navbar() {
  const cart = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  function filterItems(event) {
    console.log(cart);
    console.log(event.target.value);
    dispatch(ChangeFilter(event.target.value));
  }

  let total = 0;
  cart.products.forEach((product) => (total += product.quantity));
  return (
    <div className="navbar">
      <Link to="/" className="link navitem">
        <Button className="link navitem" variant="contained">
          Home
        </Button>
      </Link>
      <Link to="/cart" className="link navitem">
        <Button className="link navitem" variant="contained">
          Cart ({total})
        </Button>
      </Link>
    </div>
  );
}

export default Navbar;
