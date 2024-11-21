import React from "react";
import { useNavigate } from "react-router-dom";

import "./menu-item.scss";

const MenuItem = ({ id, linkUrl, imageUrl, title, size }) => {
  const navigate = useNavigate();
  return (
    <div
      id={id}
      className={`${size} menu-item`}
      onClick={() => navigate(linkUrl)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
