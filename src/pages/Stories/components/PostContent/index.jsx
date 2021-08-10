// libs
import React from "react";
import { Typography } from "antd";
// others
import "./style.scss";

const PostContent = ({ content }) => (
  <div className="post-content-wrapper">
    <Typography.Paragraph
      ellipsis={{ rows: 2, expandable: true, symbol: "Xem thêm" }}
    >
      {content}
    </Typography.Paragraph>
  </div>
);

export default PostContent;
