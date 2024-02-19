import React, { useState } from "react";
import CartContext from "./CartContext";
const CartProvider = props => {
    const [MenuItems, SetMenuItems] = useState([]);
    const [ClickCount, SetClickCount] = useState(0);

    const IncrementClickCount = () => {
        SetClickCount(ClickCount + 1);
    };

    const DecrementClickCount = () => {
        if (ClickCount > 0) {
            SetClickCount(ClickCount - 1);
        }
    };

    const AddToMenu = (newItem) => {
        const existingItemIndex = MenuItems.findIndex(item => item.title === newItem.title);
        if (existingItemIndex !== -1) {
            const updateItems = [...MenuItems];
            updateItems[existingItemIndex].quantity += 1;
            SetMenuItems(updateItems);
        } else {
            SetMenuItems(prev => [...prev, { ...newItem, quantity: 1 }]);
        }
        IncrementClickCount();
    };

    const RemoveFromMenu = (itemToRemove) => {
        const existingItemIndex = MenuItems.findIndex(item => item.title === itemToRemove.title);
    if (existingItemIndex !== -1) {
        const updatedItems = [...MenuItems];
        if (updatedItems[existingItemIndex].quantity > 1) {
            updatedItems[existingItemIndex].quantity -= 1;
        } else {
            updatedItems.splice(existingItemIndex, 1);
        }
        SetMenuItems(updatedItems);
        DecrementClickCount();
    }
    };

    const OBJ = {
        AddToMenu,
        RemoveFromMenu,
        MenuItems,
        ClickCount
    };

    return (
        <CartContext.Provider value={OBJ}>
                {props.children}
        </CartContext.Provider>
    );
};
export default CartProvider;