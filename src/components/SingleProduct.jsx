import React from "react";
import { useCart } from "../contexts/CartContext";
import { Card } from "react-bootstrap";

const SingleProduct = ({ prod }) => {
  const { cart, setCart } = useCart();

  return (
    <Card className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>${prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="btn btn-danger"
          onClick={() => {
            setCart(cart.filter(c => c.id !== prod.id));
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => {
            setCart([...cart, prod]);
          }}
        >
          Add to Cart
        </button>
      )}
    </Card>
  );
};

export default SingleProduct;
