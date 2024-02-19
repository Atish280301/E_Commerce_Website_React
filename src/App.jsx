import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
const App = () => {
  const [ShowCart, SetShowCart] = useState(false);
  const ShowCartHandler = () => {
    SetShowCart(true);
  }
  const OffCartHandler = () => {
    SetShowCart(false);
  }
  return (
    <Router>
      <>
        {ShowCart && <Cart OnOffCart={OffCartHandler} />}
        <Header OnShowCart={ShowCartHandler} />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Store" element={<Product />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </>
    </Router>
  );
}
export default App;