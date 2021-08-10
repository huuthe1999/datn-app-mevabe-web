// libs
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import { Carousel } from "antd";
import React from "react";
import { useSelector } from "react-redux";
// others
import "./style.scss";

const StoryImages = () => {
  const {
    status: { images = [] },
  } = useSelector((state) => state.STORY_DETAIL_REDUCER);

  return (
    <div className="story-images-wrapper">
      <div className="story-images-wrapper-inner">
        <Carousel
          arrows
          prevArrow={<LeftCircleOutlined />}
          nextArrow={<RightCircleOutlined />}
          infinite
        >
          {images.map((image, index) => (
            /* eslint-disable-next-line react/no-array-index-key */
            <img src={image} alt="" key={index} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default StoryImages;
