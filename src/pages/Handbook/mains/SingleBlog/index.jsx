// libs
import React from "react";
import { Card } from "antd";
// components
import BlogTitle from "../../components/BlogTitle";
import BlogSummary from "../../components/BlogSummary";
import BlogFooter from "../../components/BlogFooter";

// others
import CONSTANTS from "@/constants";
import "./style.scss";
import { Link } from "react-router-dom";

const SingleBlog = ({
  blog: { title, description, slug, thumbnail, info } = {},
}) => (
  <div className="single-blog-wrapper">
    <Card
      hoverable
      size="small"
      cover={
        <Link to={`${CONSTANTS.ROUTERS.HANDBOOK}/${slug}`}>
          <img alt={info} src={thumbnail} />
        </Link>
      }
    >
      <div className="single-blog-wrapper-inner">
        <BlogTitle {...{ title, slug }} />
        <BlogSummary {...{ summary: description }} />
        <BlogFooter slug={slug} />
      </div>
    </Card>
  </div>
);

export default SingleBlog;
