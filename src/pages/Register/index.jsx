// libs
import React from "react";
// components
import RegisterTitle from "./mains/RegisterTitle";
import RegisterForm from "./mains/RegisterForm";
import RegisterFooter from "./mains/RegisterFooter";
import ErrorMessage from "./mains/ErrorMessage";
import ReceiveToken from "./ghosts/ReceiveToken";
// others
import "./style.scss";

const Register = () => (
  <div className="register-wrapper">
    <RegisterTitle />
    <ErrorMessage />
    <RegisterForm />
    <RegisterFooter />
    <ReceiveToken />
  </div>
);

export default Register;
