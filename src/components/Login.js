import { Button } from "@material-ui/core";
import React from "react";
import "./login.css";
import { auth, provider } from "../firebase";
function Login() {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__telegram">
        <img
          src="https://images-platform.99static.com//7Q-Hqrtilp5oAiyOnpAbQaY_ADI=/28x1018:923x1913/fit-in/500x500/99designs-contests-attachments/103/103576/attachment_103576322"
          alt=""
        />
        <h1>Aswin Message</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
}

export default Login;
