import React, { useContext } from "react";

import CheckOutItem from "../../components/checkout-item/checkout-item-component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button-component";

import { CartContext } from "../../provider/cart/cart-provider";

import "./check-out-style.scss";

const CheckOutPage = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>

      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <div className="total">
        <span>Total: ${cartTotal}</span>
      </div>
      <div className="test-warning">
        *Please use the following test card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/30 - CVC: 123
      </div>
      <StripeCheckoutButton price={cartTotal} />
    </div>
  );
};

export default CheckOutPage;
