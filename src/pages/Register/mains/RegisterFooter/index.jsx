// libs
import React from "react";
import { Link } from "react-router-dom";
// others
import CONSTANTS from "@/constants";

const RegisterFooter = () => (
  <div className="register-footer-wrapper">
    Đã có tài khoản?{" "}
    <Link to={CONSTANTS.ROUTERS.LOGIN}>
      <strong>Đăng nhập</strong>
    </Link>
  </div>
);

export default RegisterFooter;
