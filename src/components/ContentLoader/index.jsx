// libs
import React from "react";
import { Skeleton } from "antd";
// others
import "./style.scss";

const ContentLoader = () => (
  <Skeleton active paragraph={{ rows: 25 }} title={{ width: "60%" }} />
);

export default ContentLoader;
