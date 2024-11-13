import React from "react";
import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/shop/ShopComponent";
import SignInAndSignUp from "./pages/signin-&-signup/signin-&-signupComponent";
import { Routes, Route, Navigate } from "react-router-dom";
import {
  auth,
  createUserProfileDocument,
} from "./components/firebase/firebaseUtils";

import { setCurrentUser } from "./components/redux/user/userAction";

import { connect } from "react-redux";
import Header from "./components/header/HeaderComponent";
import "./App.css";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapshot) => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
          console.log("Current user set:", snapshot.data());
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            exact
            path="/signin"
            element={
              this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp />
            }
          />
        </Routes>
      </div>
    );
  }
}
 
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
