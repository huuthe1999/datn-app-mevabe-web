// libs
import React from "react";
import FetchUserProfile from "./ghosts/FetchUserProfile";
import ProfileSwitch from "./mains/ProfileSwitch";
import SideMenu from "./mains/SideMenu";
import "./style.scss";

const Profile = () => (
  <div className="profile-wrapper">
    <SideMenu />
    <ProfileSwitch />
    <FetchUserProfile />
  </div>
);

export default Profile;
