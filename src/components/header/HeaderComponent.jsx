import React from "react";
import { auth } from "../firebase/firebaseUtils";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../cart-icon/cartIcon-component";
import CartDropdown from "../cart-dropdown/cartDropdown-component";
import { selectCartHidden } from "../redux/cart/cartSelectors";
import { selectCurrentUser } from "../redux/user/userSelectors";

import { Link } from "react-router-dom";
import CrownLogo from "../../assets/logoone.svg";

import "./header-style.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <img src={CrownLogo} alt="Logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/contact">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
