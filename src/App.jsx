import React from "react";
import HomePage from "./pages/Homepage/HomepageComponent";
import ShopPage from "./pages/shop/ShopComponent";
import SignInAndSignUp from "./pages/signin-&-signup/signin-&-signupComponent";
import { Routes, Route } from "react-router-dom";
import { auth } from "./components/firebase/firebaseUtils";

import Header from "./components/header/HeaderComponent";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInAndSignUp />} />
        </Routes>
      </div>
    );
  }
}

export default App;
