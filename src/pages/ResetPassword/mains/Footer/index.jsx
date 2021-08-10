// libs
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
// components
// others
import CONSTANTS from "@/constants";
import "./style.scss";

const Footer = () => (
  <div className="footer-wrapper">
    <Link to={CONSTANTS.ROUTERS.FORGOT_PASSWORD}>
      <Button type="link"> Không thể khôi phục? Thử lại</Button>
    </Link>
  </div>
);

export default Footer;
