// libs
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
// others
import CONSTANTS from "@/constants";
import "./style.scss";

const LoginButton = () => (
  <div className="login-button-wrapper">
    <Link to={CONSTANTS.ROUTERS.LOGIN}>
      <Button type="primary">Đăng nhập</Button>
    </Link>
  </div>
);

export default LoginButton;
