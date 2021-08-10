// libs
import React from "react";
import { Link } from "react-router-dom";
// others
import CONSTANTS from "@/constants";
import "./style.scss";

const ForgotPasswordLink = () => (
  <div className="forgot-password-link-wrapper">
    <Link to={CONSTANTS.ROUTERS.FORGOT_PASSWORD}>Quên mật khẩu?</Link>
  </div>
);

export default ForgotPasswordLink;
