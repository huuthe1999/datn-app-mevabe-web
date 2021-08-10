// libs
import { Card, Skeleton } from "antd";
import React from "react";
// others
import "./style.scss";

const GuideSkeleton = () => (
  <div className="guide-skeleton-wrapper">
    <Card
      hoverable
      size="small"
      cover={<Skeleton.Avatar active shape="square" />}
    >
      <div className="single-blog-wrapper-inner">
        <Skeleton paragraph title={{ width: "70%" }} active />
      </div>
    </Card>
  </div>
);

export default GuideSkeleton;
