import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useNavigate } from "react-router-dom";
import { ToggleCartHidden } from "../redux/cart/cartActions";

import CustomButton from "../custom-button/custom-buttonComponent";
import CartItem from "../cart-item/cartItem-component";
import { selectCartItems } from "../../components/redux/cart/cartSelectors";

import "./cart-dropdown-style.scss";

const CartDropdown = ({ cartItems, dispatch }) => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate("/checkout");
    dispatch(ToggleCartHidden());
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

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
