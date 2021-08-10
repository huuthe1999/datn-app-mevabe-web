// libs
import React from "react";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const BlogContent = () => {
  const {
    blog: { content },
  } = useSelector((state) => state.DETAIL_HANDBOOK_REDUCER);

  return (
    <div
      className="blog-content-wrapper"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default BlogContent;
