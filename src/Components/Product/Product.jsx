import React from "react";
import Array from "../Array/Array";
import '../Style/Product.css';
const Product = () => {
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
                            <button className="BTN BTN1">Cart</button>
                        </div>
                    ))
                }
            </div>
        </>
    );
}
export default Product;