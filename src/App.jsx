import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
      </div>
    </BrowserRouter>
  );
};

export default App;
