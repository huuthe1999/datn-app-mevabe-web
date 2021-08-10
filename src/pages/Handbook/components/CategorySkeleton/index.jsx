// libs
import { Skeleton } from "antd";
import React from "react";
// others
import "./style.scss";

const CategorySkeleton = () => (
  <div className="category-skeleton-wrapper">
    <Skeleton.Avatar active shape="square" />
  </div>
);

export default CategorySkeleton;
