// libs
import { Typography } from "antd";
import React from "react";
// others
import "./style.scss";

const BlogWatched = ({ watched }) => (
  <div className="blog-watched-wrapper">
    <Typography.Text type="secondary">{watched} đã xem</Typography.Text>
  </div>
);

export default BlogWatched;
