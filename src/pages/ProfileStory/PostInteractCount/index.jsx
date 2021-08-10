// libs
import React, { useState } from "react";
import LikerModal from "../LikerModal";
// others
import "./style.scss";

const PostInteractCount = ({ likeUsers = [], comments = [], _id }) => {
  const [showLikerModal, setShowLikerModal] = useState(false);

  return (
    <>
      <div className="post-interact-count-wrapper">
        <div
          className="like"
          onClick={() => {
            if (!likeUsers.length) return;
            setShowLikerModal(true);
          }}
        >
          {likeUsers.length} lượt thích
        </div>
        <div className="comment">{comments.length} bình luận</div>
      </div>
      <LikerModal {...{ showLikerModal, setShowLikerModal, _id }} />
    </>
  );
};

export default PostInteractCount;
