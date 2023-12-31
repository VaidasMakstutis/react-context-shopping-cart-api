import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import CartComponent from "./components/Cart";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/cart" element={<CartComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
