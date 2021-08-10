// libs
import React from "react";
// components
import LoginCover from "../../components/LoginCover";
import LoginTitle from "../../components/LoginTitle";
// others
import "./style.scss";

const LoginHeader = () => (
  <div className="login-header-wrapper">
    <LoginTitle />
    <LoginCover />
  </div>
);

export default LoginHeader;
