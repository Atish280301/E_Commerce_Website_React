import React from "react";
const CartContext = React.createContext({
    ProCart: [],
    AddProItems: (item) => {},
    RemoveItems: (item) => {},
    AddToMenu: (item) => {},
    MenuItems: [],
    ClickCount: 0,
    IncrementClickCount: () => {}
});
export default CartContext;