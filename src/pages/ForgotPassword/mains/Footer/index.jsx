// libs
import React from "react";
import { Link } from "react-router-dom";
import { DoubleLeftOutlined, DoubleRightOutlined } from "@ant-design/icons";
// others
import CONSTANTS from "@/constants";
import "./style.scss";

const Footer = () => (
  <div className="footer-wrapper">
    <Link to={CONSTANTS.ROUTERS.LOGIN}>
      <DoubleLeftOutlined />
      <strong>Đăng nhập</strong>
    </Link>
    <Link to={CONSTANTS.ROUTERS.REGISTER}>
      <strong>Đăng kí</strong>
      <DoubleRightOutlined />
    </Link>
  </div>
);

export default Footer;
