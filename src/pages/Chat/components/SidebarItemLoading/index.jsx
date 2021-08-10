// libs
import { Skeleton } from "antd";
import React from "react";
// others
import "./style.scss";

const SidebarItemLoading = () => (
  <div className="sidebar-item-loading-wrapper">
    <Skeleton title paragraph={{ rows: 1 }} active avatar />
  </div>
);

export default SidebarItemLoading;
