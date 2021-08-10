// libs
import React from "react";
import { Spin } from "antd";
// others
import "./styles.scss";

const MainSpinner = () => (
  <div className="main-spinner-wrapper">
    <Spin size="large" tip="...Đang tải dữ liệu" />
  </div>
);
export default MainSpinner;
