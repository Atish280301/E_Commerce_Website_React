import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
const App = () => {
  const [ShowCart, SetShowCart] = useState(false);
  const ShowCartHandler = () => {
    SetShowCart(true);
  }
  const OffCartHandler = () => {
    SetShowCart(false);
  }
  return (
    <>
      {ShowCart && <Cart OnOffCart = {OffCartHandler} />}
      <Header OnShowCart = {ShowCartHandler} />
      <Product />
    </>
  );
}
export default App;