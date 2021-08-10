// libs
import React from "react";
import { useSelector } from "react-redux";
import LoadingStoryPost from "../../components/LoadingStoryPost";
// components
import StoryPost from "../../components/StoryPost";
// others
import "./style.scss";

const StoryList = () => {
  const { storyList, fakeStories } = useSelector(
    (state) => state.STORIES_REDUCER
  );

  return (
    <div className="story-list-wrapper">
      {Object.values(storyList).map((post) => (
        <StoryPost post={post} key={post._id} />
      ))}
      {fakeStories.map((item) => (
        <LoadingStoryPost key={item._id} />
      ))}
    </div>
  );
};

export default StoryList;
