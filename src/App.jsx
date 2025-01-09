import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/shop/ShopComponent";
import SignInAndSignUp from "./pages/signin-&-signup/signin-&-signupComponent";
import Header from "./components/header/HeaderComponent";
import CheckOutPage from "./pages/check-out/checkOut-component";
import CollectionPage from "./pages/collection/collection-component";

import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebaseUtils";

<<<<<<< HEAD
import { GlobalStyle } from "./globel-style";

=======
import CurrentUserContext from "./contexts/current-user/currentUser-context";
import './App.css'
>>>>>>> 05c8cd0c16b8a562db81f605de8c87abcb3ae8d4
const App = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        setCurrentUser({
          id: userAuth.uid,
          email: userAuth.email,
          displayName: userAuth.displayName,
          ...userAuth,
        });
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
    </CurrentUserContext.Provider>
  );
};

export default App;
