// libs
import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// others
import CONSTANTS from "@/constants";
import "./style.scss";

const BlogFooter = ({ slug }) => (
  <div className="blog-footer-wrapper">
    <Link to={`${CONSTANTS.ROUTERS.HANDBOOK}/${slug}`}>
      <Button type="link" size="small">
        Đọc tiếp
        <ArrowRightOutlined />
      </Button>
    </Link>
  </div>
);

export default BlogFooter;
