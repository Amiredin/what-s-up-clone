import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider.js";

function Login() {
  const [{}, dispatch] = useStateValue();

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="data:image/png;base64,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"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to whatsapp</h1>
        </div>

        <Button onClick={signIn}>Sign in With Google</Button>
      </div>
    </div>
  );
}

export default Login;
