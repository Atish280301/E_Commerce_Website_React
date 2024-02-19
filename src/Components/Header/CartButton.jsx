import React, { useContext } from "react";
import CartContext from "../Context/CartContext";
const CartButton = props => {
    const { ClickCount } = useContext(CartContext);
    return (
        <>
            <button className="BTN" onClick={props.ShowCart}>
                <p>Cart</p>
                <p>{ClickCount}</p>
            </button>
        </>
    );
}
export default CartButton;