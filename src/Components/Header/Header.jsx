import React, { useEffect, useState } from "react";
import '../Style/Header.css';
import CartButton from "./CartButton";
import  { Link, useLocation } from "react-router-dom";
const Header = (props) => {
    const location = useLocation();
    const [ShowCB, SetShowCB] = useState(false);
    const HandleStoreClick = () => {
        SetShowCB(true);
    }
    useEffect(()=>{
        if(location.pathname === '/Store'){
            SetShowCB(true);
        } else {
            SetShowCB(false);
        }
    },[location]);
    return (
        <>
            <div className="Header">
                <div className="Btn-Box">
                    <Link to="/Home" className="BTN" onClick={()=>SetShowCB(false)}>Home</Link>
                    <Link to="/Store" className="BTN" onClick={HandleStoreClick}>Store</Link>
                    <Link to="/About" className="BTN" onClick={()=>SetShowCB(false)}>About</Link>
                </div>
                <div className="Btn-Box">
                    {ShowCB && <CartButton ShowCart={props.OnShowCart} />}
                </div>
            </div>
        </>
    );
}
export default Header;