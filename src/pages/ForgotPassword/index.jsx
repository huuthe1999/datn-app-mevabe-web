// libs
import React from "react";
// components
import Header from "./mains/Header";
import ForgotPasswordForm from "./mains/ForgotPasswordForm";
import Footer from "./mains/Footer";
import ErrorMessage from "./mains/ErrorMessage";
// ohters
import "./style.scss";
import { useSelector } from "react-redux";
import SuccessGuide from "./mains/SuccessGuide";

const ForgotPassword = () => {
  const { sendEmailSuccess, isError } = useSelector(
    (state) => state.FORGOT_PASSWORD_REDUCER
  );

  return (
    <div className="forgot-password-wrapper">
      <Header />
      {isError && <ErrorMessage />}
      {sendEmailSuccess ? <SuccessGuide /> : <ForgotPasswordForm />}
      <Footer />
    </div>
  );
};

export default ForgotPassword;
