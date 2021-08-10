// libs
import React from "react";
import SideMenuMenu from "../../components/SideMenuMenu";
import UserAvatar from "../../components/UserAvatar";
// others
import "./style.scss";

const SideMenu = () => (
  <div className="side-menu-wrapper">
    <UserAvatar />
    <SideMenuMenu />
  </div>
);

export default SideMenu;
