import React from "react";
import '../Style/Header.css';
import CartButton from "./CartButton";
const Header = (props) => {
    return (
        <>
            <div className="Header">
                <div className="Btn-Box">
                    <button className="BTN">Home</button>
                    <button className="BTN">Store</button>
                    <button className="BTN">About</button>
                </div>
                <div className="Btn-Box">
                    <CartButton ShowCart={props.OnShowCart} />
                </div>
            </div>
        </>
    );
}
export default Header;