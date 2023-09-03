import React from "react";
import { useCart } from "../contexts/CartContext";
import faker from "faker";
import SingleProduct from "./SingleProduct";

faker.seed(100);

const Home = () => {
  const { products } = useCart();

  return (
    <div className="productsContainer">
      {products.map((prod, id) => (
        <SingleProduct key={id} prod={prod} />
      ))}
    </div>
  );
};

export default Home;
