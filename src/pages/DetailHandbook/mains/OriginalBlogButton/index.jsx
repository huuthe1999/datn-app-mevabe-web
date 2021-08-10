// libs
import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const OriginalBlogButton = () => {
  const {
    blog: { info },
  } = useSelector((state) => state.DETAIL_HANDBOOK_REDUCER);

  return (
    <div className="original-blog-button-wrapper">
      <a href={info} target="_blank" rel="noreferrer">
        <Button type="primary" size="large">
          Đi tới bài viết gốc
        </Button>
      </a>
    </div>
  );
};
export default OriginalBlogButton;
