// libs
import { List, Skeleton } from "antd";
import React from "react";
// others
import "./style.scss";

const LoaderContent = () => (
  <div className="loader-content-wrapper">
    <Skeleton
      avatar={{ shape: "circle", size: 45 }}
      active
      title={{ width: "40%" }}
      paragraph={false}
    />
    <Skeleton active paragraph title={false} />
    <Skeleton.Image className="image-loader" />
    <div className="button-loader">
      {[...Array(3).keys()].map((item) => (
        <Skeleton.Button active key={item} />
      ))}
    </div>
    <List
      itemLayout="horizontal"
      dataSource={[...Array(2).keys()]}
      renderItem={() => (
        <List.Item>
          <Skeleton avatar title active />
        </List.Item>
      )}
    />
  </div>
);

export default LoaderContent;
