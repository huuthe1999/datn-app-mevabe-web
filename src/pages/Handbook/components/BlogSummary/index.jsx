// libs
import React from "react";
import { Typography } from "antd";
// others
import "./style.scss";

const BlogSummary = ({ summary }) => (
  <div className="blog-summary-wrapper">
    <Typography.Paragraph ellipsis={{ rows: 2 }}>
      {summary}
    </Typography.Paragraph>
  </div>
);

export default BlogSummary;
