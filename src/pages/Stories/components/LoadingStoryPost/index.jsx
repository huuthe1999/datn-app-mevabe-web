// libs
import { Skeleton } from "antd";
import React from "react";
// others
import "./style.scss";

const LoadingStoryPost = () => (
  <div className="loading-story-post-wrapper">
    <Skeleton
      avatar={{ shape: "circle", size: 45 }}
      active
      title={{ width: "30%" }}
      paragraph={false}
    />
    <Skeleton active paragraph title={false} />
    <Skeleton.Image className="image-loader" />
    <div className="button-loader">
      {[...Array(3).keys()].map((item) => (
        <Skeleton.Button active key={item} />
      ))}
    </div>
  </div>
);

export default LoadingStoryPost;
