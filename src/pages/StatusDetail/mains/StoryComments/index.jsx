// libs
import { useFirstRender } from "@/hooks";
import React from "react";
import { useSelector } from "react-redux";
import CommentContainer from "../../components/CommentContainer";
// others
import "./style.scss";

const StoryComments = () => {
  const { isLoadingComments, comments } = useSelector(
    (state) => state.STATUS_DETAIL_REDUCER
  );

  const isFirstRender = useFirstRender();
  const isLoadingHighLevel = isFirstRender && isLoadingComments;

  return (
    <div className="story-comments-wrapper">
      {(isLoadingHighLevel ? [...Array(2).keys()] : comments).map((comment) => (
        <CommentContainer
          key={comment?._id || comment}
          comment={comment}
          isLoadingHighLevel={isLoadingHighLevel}
        />
      ))}
    </div>
  );
};

export default StoryComments;
