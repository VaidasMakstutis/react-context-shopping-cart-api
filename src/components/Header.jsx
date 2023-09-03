import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";

const Header = ({ cart }) => {
  return (
    <div>
      <h2 className="header">React Context API</h2>
      <ul className="nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart({cart.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
