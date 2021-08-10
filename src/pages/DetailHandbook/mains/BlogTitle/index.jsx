// libs
import React from "react";
import { useSelector } from "react-redux";
import { Typography } from "antd";
// others
import "./style.scss";

const BlogTitle = () => {
  const {
    blog: { title },
  } = useSelector((state) => state.DETAIL_HANDBOOK_REDUCER);

  return (
    <div className="blog-title-wrapper">
      <Typography.Title level={2}>{title}</Typography.Title>
    </div>
  );
};
export default BlogTitle;
