import React from "react";

import "./checkout-item-style.scss";

const checkOutItem = ({ cartItem: { name, quantity, price, imageUrl } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">$ {price}</span>
    <div className="remove-button">&times;</div>
  </div>
);

export default checkOutItem;
