// libs
import React from "react";
import { Typography } from "antd";
// others
import "./style.scss";

const PostContent = ({ content, attachments }) => (
  <div className="post-content-wrapper">
    <div className="content">
      <Typography.Paragraph
        ellipsis={{ rows: 3, expandable: true, symbol: "Xem thêm" }}
      >
        {content}
      </Typography.Paragraph>
    </div>
    <div className="attachments"></div>
  </div>
);

export default PostContent;
