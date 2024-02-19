import React, { useContext } from "react";
import Array from "../Array/Array";
import '../Style/Product.css';
import CartContext from "../Context/CartContext";
const Product = () => {
    const menuCtx = useContext(CartContext);
    const SendToCart = (item) => {
        console.log(item);
        const existingItem = menuCtx.MenuItems.find(i => i.title === item.title);
        if (existingItem) {
            alert("Product is already added");
        } else {
            menuCtx.AddToMenu({ ...item, quantity: 1 });
        }
    };
    return (
        <>
            <div className="ProductBox">
                {
                    Array.map((item, index) => (
                        <div key={index} className="Product">
                            <img src={item.imageUrl} alt={item.title} width="210px" height="200px" />
                            <div className="Content">
                                <p>{item.title}</p>
                                <p>{item.price} /-</p>
                            </div>
                            <button className="BTN BTN1" onClick={() => SendToCart(item)}>Cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
export default Product;