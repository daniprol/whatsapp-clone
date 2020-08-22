import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import Logo from "./logo.svg";
import { auth, provider } from "./firebase-config";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => console.log(result))
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src={Logo}
          alt="Whatsapp logo"
          //   styles={{ background: "transparent" }}
        />
        <div className="login_text">
          <h1>Sign in to WhatsApp</h1>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign In with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
