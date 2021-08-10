// libs
import React from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";
// others
import CONSTANTS from "@/constants";
import "./style.scss";

const BlogTitle = ({ title, slug }) => (
  <div className="blog-title-wrapper">
    <Link to={`${CONSTANTS.ROUTERS.HANDBOOK}/${slug}`}>
      <Typography.Paragraph ellipsis={{ rows: 2 }}>
        <Typography.Title level={5}>{title}</Typography.Title>
      </Typography.Paragraph>
    </Link>
  </div>
);

export default BlogTitle;
