import React from "react";
import {auth} from "../firebase/firebaseUtils";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import  CrownLogo from "../../assets/logoone.svg";

import "./header-style.scss";

const Header = ({currentUser}) => (
  <div className="header">
    <Link to="/" className="logo-container">
    <img src={CrownLogo} alt="Logo"/>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to = "/contact">CONTACT</Link>
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

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
