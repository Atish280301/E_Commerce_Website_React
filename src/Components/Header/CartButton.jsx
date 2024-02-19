import React from "react";
const CartButton = (props) => {
    return (
        <>
            <button className="BTN" onClick={props.ShowCart}>
                <p>Cart</p>
                <p>0</p>
            </button>
        </>
    );
}
export default CartButton;