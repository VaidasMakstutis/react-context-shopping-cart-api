import React, { useEffect, useState } from "react";
import { useCart } from "../contexts/CartContext";
import SingleProduct from "./SingleProduct";

const CartComponent = () => {
  const { cart } = useCart();
  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, cur) => acc + Number(cur.price), 0));
  }, [cart]);

  return (
    <div>
      <span style={{ fontSize: 30 }}>My Cart</span>
      <br />
      <span style={{ fontSize: 30 }}>Total: ${total}</span>
      <div className="productsContainer">
        {cart.map(prod => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  );
};

export default CartComponent;
