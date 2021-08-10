// libs
import { getAllLiker, setLikerStory } from "@/actions/Stories";
import React from "react";
import { useDispatch } from "react-redux";
// others
import "./style.scss";

const PostInteractCount = ({ likeUsers = [], comments = [], _id }) => {
  const dispatch = useDispatch();

  return (
    <div className="post-interact-count-wrapper">
      <div
        className="like"
        onClick={() => {
          if (!likeUsers.length) return;
          dispatch(setLikerStory(_id));
          dispatch(getAllLiker({ statusId: _id }));
        }}
      >
        {likeUsers.length} lượt thích
      </div>
      <div className="comment">{comments.length} bình luận</div>
    </div>
  );
};

export default PostInteractCount;
