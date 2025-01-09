import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebaseUtils";
import { setCurrentUser } from "../redux/user/userAction";
import { selectCartHidden } from "../redux/cart/cartSelectors";
import { selectCurrentUser } from "../redux/user/userSelectors";
import CartIcon from "../cart-icon/cartIcon-component";
import CartDropdown from "../cart-dropdown/cartDropdown-component";
import CrownLogo from "../../assets/logoone.svg";

import "./header-style.scss";

const Header = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const hidden = useSelector(selectCartHidden);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          setCurrentUser({
            id: userAuth.uid,
            email: userAuth.email,
            displayName: userAuth.displayName,
            ...userAuth,
          })
        );
      } else {
        dispatch(setCurrentUser(null));
      }
    });

    return () => unsubscribeFromAuth();
  }, [dispatch]);

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
