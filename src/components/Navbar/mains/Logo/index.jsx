// libs
import React from "react";
import { Link } from "react-router-dom";
// others
import "./style.scss";
import { ReactComponent as LogoSVG } from "@/assets/images/logo.svg";

const Logo = () => (
  <div className="logo-wrapper">
    <Link to="/">
      <LogoSVG height={64} />
    </Link>
  </div>
);

export default Logo;
