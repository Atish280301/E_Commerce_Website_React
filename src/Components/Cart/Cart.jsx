import React from "react";
import ReactDOM from "react-dom";
import '../Style/Cart.css';
const Cart = (props) => {
    return ReactDOM.createPortal(
        <>
            <div className="Container">
                <div className="Cart-Box">
                    <div className="Cart-Array">
                        {

                        }
                    </div>
                    <div className="TotalAmount">
                        <p className="TA">Total Amount:</p>
                        <p className="TA">100 /-</p>
                    </div>
                    <div className="Cart-Btns">
                        <button className="BTN" onClick={props.OnOffCart}>Cancel</button>
                    </div>
                </div>
            </div>
        </>, document.getElementById("root1")
    );
}
export default Cart;