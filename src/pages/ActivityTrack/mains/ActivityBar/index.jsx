// libs
import React from "react";
import ActivityBarMenu from "../../components/ActivityBarMenu";
import ChildInfo from "../../components/ChildInfo";
// others
import "./style.scss";

const ActivityBar = () => (
  <div className="activity-bar-wrapper">
    <ChildInfo />
    <ActivityBarMenu />
  </div>
);

export default ActivityBar;
