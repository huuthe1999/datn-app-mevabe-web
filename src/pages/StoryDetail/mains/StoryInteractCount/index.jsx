import React from "react";
import { useDispatch, useSelector } from "react-redux";
// others
import "./style.scss";
import { setShowLikerModal } from "@/actions/StoryDetail";

const StoryInteractCount = () => {
  const {
    status: { likeUsers = [] },
    comments = [],
  } = useSelector((state) => state.STORY_DETAIL_REDUCER);
  const dispatch = useDispatch();

  return (
    <div className="story-interact-count-wrapper">
      <div className="like" onClick={() => dispatch(setShowLikerModal(true))}>
        {likeUsers.length} lượt thích
      </div>
      <div className="comment">{comments.length} bình luận</div>
    </div>
  );
};

export default StoryInteractCount;
