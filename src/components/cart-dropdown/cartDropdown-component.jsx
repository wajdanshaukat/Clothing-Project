import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-buttonComponent";

import "./cart-dropdown-style.scss";
import CartItem from "../cart-item/cartItem-component";
import { selectCartItems } from "../../components/redux/cart/cartSelectors";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
