import React from "react";
import { Card } from "react-bootstrap";

const SingleProduct = ({ prod, cart, setCart }) => {
  console.log(cart);
  return (
    <Card className="products">
      <img src={prod.image} alt={prod.name} />
      <div className="productDesc">
        <span style={{ fontWeight: 700 }}>{prod.name}</span>
        <span>${prod.price.substring(0, 3)}</span>
      </div>
      {cart.includes(prod) ? (
        <button
          className="add btn btn-danger"
          onClick={() => {
            setCart(cart.filter(c => c.id !== prod.id));
          }}
        >
          Remove from Cart
        </button>
      ) : (
        <button
          className="add btn btn-primary"
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
