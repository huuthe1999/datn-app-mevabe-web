// libs
import React from "react";
// components
import LoginForm from "./mains/LoginForm";
import LoginHeader from "./mains/LoginHeader";
import LoginFooter from "./mains/LoginFooter";
import ErrorMessage from "./mains/ErrorMessage";
import ReceiveToken from "./ghosts/ReceiveToken";
// others
import "./style.scss";

const Login = () => (
  <div className="login-wrapper">
    <LoginHeader />
    <ErrorMessage />
    <LoginForm />
    <LoginFooter />
    <ReceiveToken />
  </div>
);

export default Login;
