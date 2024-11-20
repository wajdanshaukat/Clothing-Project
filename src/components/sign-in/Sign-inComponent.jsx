import React, { useState } from "react";
import FormInput from "../form-input/form-inputComponent";
import CustomButton from "../custom-button/custom-buttonComponent";
import { signInWithEmail, signInWithGoogle } from "../firebase/firebaseUtils";

import "./sign-in-style.scss";

const SignIn = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { email, password } = credentials;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmail(email, password);
      setCredentials({ email: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
