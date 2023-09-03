import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header cart={cart} />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart={setCart} />} exact />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
