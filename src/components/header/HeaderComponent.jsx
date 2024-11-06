import React from "react";

import { Link } from "react-router-dom";
import  CrownLogo from "../../assets/logoone.svg";

import "./header-style.scss";

const Header = () => (
  <div className="header">
    <Link to="/" className="logo-container">
    <img src={CrownLogo}/>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to = "/shop">CONTACT</Link>
    </div>
  </div>
);


export default Header;
