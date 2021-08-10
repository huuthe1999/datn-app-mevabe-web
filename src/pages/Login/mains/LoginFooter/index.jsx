// libs
import React from "react";
import { Link } from "react-router-dom";
// others
import CONSTANTS from "@/constants";

const LoginFooter = () => (
  <div className="login-footer-wrapper">
    Chưa có tài khoản?{" "}
    <Link to={CONSTANTS.ROUTERS.REGISTER}>
      <strong>Đăng kí ngay</strong>
    </Link>
  </div>
);

export default LoginFooter;
