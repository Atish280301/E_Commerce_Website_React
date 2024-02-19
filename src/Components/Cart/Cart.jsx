import React, { useContext} from "react";
import ReactDOM from "react-dom";
import '../Style/Cart.css';
import CartContext from "../Context/CartContext";
const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    const handleAdd = (item) => {
        cartCtx.AddToMenu({...item, quantity: item.quantity + 1});
    }
    const handleDel = (item) => {
        cartCtx.RemoveFromMenu(item);
    };
    const calculateTotalAmount = () => {
        let total = 0;
        cartCtx.MenuItems.forEach(item => {
            total += item.quantity * item.price;
        });
        return total;
    };
    return ReactDOM.createPortal(
        <>
            <div className="Container">
                <div className="Cart-Box">
                    <div className="Cart-Array">
                        {cartCtx.MenuItems.map((item, index) => (
                            <div key={index} className="CartItem">
                                <img src={item.imageUrl} alt={item.title} width="50px" height="50px" />
                                <p>{item.title}</p>
                                <p>Quantity: {item.quantity}</p>
                                <p>Price: {item.price} /-</p>
                                <button className="BTN" onClick={()=>handleAdd(item)}>Add</button>
                                <button className="BTN" onClick={()=>handleDel(item)}>Del</button>
                            </div>
                        ))}
                    </div>
                    <div className="TotalAmount">
                        <p className="TA">Total Amount:</p>
                        <p className="TA">{calculateTotalAmount()} /-</p>
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