// libs

import StoryPost from "@/pages/Stories/components/StoryPost";
import { Spin } from "antd";
import React from "react";
import { useSelector } from "react-redux";
// othe
import "./style.scss";

const StoryList = () => {
  const { storyList, isLoading } = useSelector(
    (state) => state.PROFILE_STORY_REDUCER
  );

  return (
    <div className="story-list-wrapper">
      <Spin spinning={isLoading}>
        {Object.values(storyList).map((post) => (
          <StoryPost post={post} key={post._id} />
        ))}
      </Spin>
    </div>
  );
};

export default StoryList;
