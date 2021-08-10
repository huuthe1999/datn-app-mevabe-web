import { showLikerModal } from "@/actions/StatusDetail";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// others
import "./style.scss";

const StoryInteractCount = () => {
  const {
    status: { likeUsers = [] },
    comments = [],
  } = useSelector((state) => state.STATUS_DETAIL_REDUCER);
  const dispatch = useDispatch();

  return (
    <div className="story-interact-count-wrapper">
      <div className="like" onClick={() => dispatch(showLikerModal(true))}>
        {likeUsers.length} lượt thích
      </div>
      <div className="comment">{comments.length} bình luận</div>
    </div>
  );
};

export default StoryInteractCount;
