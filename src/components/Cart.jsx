import React, { useEffect, useState } from "react";
import SingleProduct from "./SingleProduct";

const Cart = ({ cart, setCart }) => {
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
          <SingleProduct prod={prod} key={prod.id} cart={cart} setCart={setCart} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
