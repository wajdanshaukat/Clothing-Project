import React from "react";
import { connect } from "react-redux";
import ShoppingIcon from "../../assets/shopping-bag.svg";

import { ToggleCartHidden } from "../../components/redux/cart/cartActions";

import "./cartIcon-style.scss";

const cartIcon = ({ ToggleCartHidden }) => (
  <div className="cart-icon" onClick={ToggleCartHidden}>
    <img src={ShoppingIcon} alt="cart" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(cartIcon);
