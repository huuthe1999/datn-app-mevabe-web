// libs
import React from "react";
import { Spin } from "antd";
import { Loading3QuartersOutlined } from "@ant-design/icons";
// components
import Logo from "./mains/Logo";
import HeaderMenu from "./mains/HeaderMenu";
import LoginButton from "./mains/LoginButton";
import AvatarGroup from "./mains/AvatarGroup";
// hooks
import { useAuth } from "@/hooks";
// others
import "./style.scss";

const Navbar = () => {
  const { user, isAuthenticating } = useAuth();

  return (
    <div className="navbar-wrapper">
      <Logo />
      <HeaderMenu />
      {isAuthenticating ? (
        <Spin indicator={<Loading3QuartersOutlined spin />} />
      ) : user ? (
        <AvatarGroup />
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Navbar;
