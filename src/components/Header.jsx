import React from "react";
import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = () => {
  const { cart } = useCart();

  return (
    <div>
      <h2 className="header">React Context API</h2>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart ({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
