// libs
import { useRouter } from "@/hooks";
import { List, Skeleton } from "antd";
import classNames from "classnames";
import React from "react";
// others
import "./style.scss";

const LoaderContent = () => {
  const router = useRouter();
  const { hasImage } = router.location.state || {};

  return (
    <div className={classNames("loader-content-wrapper", { hasImage })}>
      {hasImage ? <Skeleton.Image className="image-loader" /> : null}
      <div className="right">
        <Skeleton
          avatar={{ shape: "circle", size: 45 }}
          active
          title={{ width: "40%" }}
          paragraph={false}
        />
        <Skeleton active paragraph title={false} />
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
    </div>
  );
};

export default LoaderContent;
