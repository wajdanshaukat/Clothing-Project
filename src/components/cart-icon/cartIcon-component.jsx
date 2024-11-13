import React from "react";
import { connect } from "react-redux";
import ShoppingIcon from "../../assets/shopping-bag.svg";

import { ToggleCartHidden } from "../../components/redux/cart/cartActions";
import {selectCartTotal} from "../../components/redux/cart/cartSelectors";

import "./cartIcon-style.scss";

const cartIcon = ({ ToggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={ToggleCartHidden}>
    <img src={ShoppingIcon} alt="cart" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  ToggleCartHidden: () => dispatch(ToggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectCartTotal(state)
});



export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
