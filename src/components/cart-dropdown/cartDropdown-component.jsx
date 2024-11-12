import React from "react";
import CustomButton from "../custom-button/custom-buttonComponent";

import "./cart-dropdown-style.scss";
// import CartItem from "../cart-item/cartItem-component";


const CartDropdown = () => (
    <div className="cart-dropdown">
        <div className="cart-items">
            <CustomButton>GO TO CHECKOUT</CustomButton>

        </div>
    </div>
)

export default CartDropdown;