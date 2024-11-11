import React from "react";
import SignIn from "../../components/sign-in/Sign-inComponent";
import SignUp from "../../components/sign-up/sign-upComponent";


import "./signin-&-signupStyle.scss";


const SignInAndSignUp = () => {
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    );
};

export default SignInAndSignUp;