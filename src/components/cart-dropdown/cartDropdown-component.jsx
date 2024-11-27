import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import CustomButton from "../custom-button/custom-buttonComponent";
import CartItem from "../cart-item/cartItem-component";
import { CartContext } from "../../provider/cart/cart-provider";

import "./cart-dropdown-style.scss";

const CartDropdown = () => {
  const navigate = useNavigate();
  const { cartItems, toggleHidden } = useContext(CartContext);

  const handleCheckout = () => {
    navigate("/checkout");
    toggleHidden();
  };

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={handleCheckout}>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
