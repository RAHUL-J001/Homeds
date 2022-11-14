//=============================================================================
/**
 * Sign Up  And Sign In Functionality
 */
//=============================================================================

import React, { useState } from "react";
import { useHistory } from "react-router";
import "./Login.css";
import { auth } from "./firebase.js";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <img className="loginPage_Logo" src="images/logo11.png" alt="logo" />
      <div className="login_container">
        <h1 className="signInContent">Sign In</h1>
        <form>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="email"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="password"
          />

          <button type="submit" onClick={signIn} className="login_button">
            Sign In
          </button>
        </form>
        <p>Don't have an account ? Click below </p>
        <button onClick={register} className="SignUp_button">
          Create your Account
        </button>
      </div>
    </div>
  );
}

export default Login;
