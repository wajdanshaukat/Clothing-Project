import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebaseUtils";
import { setCurrentUser } from "../redux/user/userAction";
import { selectCartHidden } from "../redux/cart/cartSelectors";
import { selectCurrentUser } from "../redux/user/userSelectors";
import CartIcon from "../cart-icon/cartIcon-component";
import CartDropdown from "../cart-dropdown/cartDropdown-component";
import CrownLogo from "../../assets/logoone.svg";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from  './header-styles'


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
    <HeaderContainer>
      <LogoContainer to="/" >
        <img src={CrownLogo} alt="Logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink className="option" to="/contact">
          CONTACT
        </OptionLink>
        {currentUser ? (
          <OptionLink as='div' onClick={handleSignOut}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink className="option" to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
