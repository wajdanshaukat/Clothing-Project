import React from "react";
import {auth} from "../firebase/firebaseUtils";

import { Link } from "react-router-dom";
import  CrownLogo from "../../assets/logoone.svg";

import "./header-style.scss";

const Header = (currentUser) => (
  <div className="header">
    <Link to="/" className="logo-container">
    <img src={CrownLogo}/>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to = "/shop">CONTACT</Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);


export default Header;
