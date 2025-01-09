import React, { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/shop/ShopComponent";
import SignInAndSignUp from "./pages/signin-&-signup/signin-&-signupComponent";
import Header from "./components/header/HeaderComponent";
import CheckOutPage from "./pages/check-out/checkOut-component";

import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebaseUtils";
import { setCurrentUser } from "./components/redux/user/userAction";
import { selectCurrentUser } from "./components/redux/user/userSelectors";
import CollectionPage from "./pages/collection/collection-component";

import { GlobalStyle } from "./globel-style";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
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

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
      <GlobalStyle />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/shop/*" element={<ShopPage />} />
        <Route path="/shop/:collectionId" element={<CollectionPage />} />
        <Route exact path="/checkout" element={<CheckOutPage />} />
        <Route
          exact
          path="/signin"
          element={currentUser ? <Navigate to="/" /> : <SignInAndSignUp />}
        />
      </Routes>
    </div>
  );
};

export default App;
