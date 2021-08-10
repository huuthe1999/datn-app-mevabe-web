// libs
import React from "react";
import { useSelector } from "react-redux";
// components
import Header from "./mains/Header";
import ResetPasswordForm from "./mains/ResetPasswordForm";
import ErrorMessage from "./mains/ErrorMessage";
import Footer from "./mains/Footer";
// ohters
import "./style.scss";

const ResetPassword = () => {
  const { isError } = useSelector((state) => state.RESET_PASSWORD_REDUCER);

  return (
    <div className="reset-password-wrapper">
      <Header />
      {isError && <ErrorMessage />}
      <ResetPasswordForm />
      <Footer />
    </div>
  );
};

export default ResetPassword;
