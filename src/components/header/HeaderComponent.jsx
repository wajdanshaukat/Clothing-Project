import React, { useEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { auth } from "../firebase/firebaseUtils";
import CartIcon from "../cart-icon/cartIcon-component";
import CartDropdown from "../cart-dropdown/cartDropdown-component";
import CrownLogo from "../../assets/logoone.svg";
import CurrentUserContext from "../../contexts/current-user/currentUser-context";
import { CartContext } from "../../provider/cart/cart-provider";

import "./header-style.scss";

const Header = () => {
  const currentUser = useContext(CurrentUserContext);
  const { hidden } = useContext(CartContext);

  useEffect(() => {
    if (currentUser) {
      console.log(
        `User signed in: ${currentUser.displayName || currentUser.email}`
      );
    } else {
      console.log("No user is signed in.");
    }
  }, [currentUser]);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={CrownLogo} alt="Logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/shop">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={handleSignOut}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signin">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropdown />}
    </div>
  );
};

export default Header;
