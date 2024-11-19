import React, { useEffect } from "react";
import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/shop/ShopComponent";
import SignInAndSignUp from "./pages/signin-&-signup/signin-&-signupComponent";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebaseUtils";
import { setCurrentUser } from "./components/redux/user/userAction";
import { selectCurrentUser } from "./components/redux/user/userSelectors";
import Header from "./components/header/HeaderComponent";
import CollectionPage from "./pages/collection/collection-component";
import CheckOutPage from "./pages/check-out/checkOut-component";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        if (userRef && typeof userRef.onSnapshot === "function") {
          userRef.onSnapshot((snapshot) => {
            dispatch(
              setCurrentUser({
                id: snapshot.id,
                ...snapshot.data(),
              })
            );
            console.log("Current user set:", snapshot.data());
          });
        } else {
          console.error("Error: userRef does not support onSnapshot");
        }
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <div>
      <Header />
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
