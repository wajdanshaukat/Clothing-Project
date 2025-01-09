import React, { useContext } from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import { CartContext } from "../../provider/cart/cart-provider";

import "./cartIcon-style.scss";

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className="cart-icon" onClick={toggleHidden}>
      <img src={ShoppingIcon} alt="cart" />
      <span className="item-count">{cartItemsCount}</span>
    </div>
  );
};

export default CartIcon;
