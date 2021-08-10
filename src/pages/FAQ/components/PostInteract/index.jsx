// libs
import React from "react";
import {
  CommentOutlined,
  DislikeOutlined,
  LikeOutlined,
} from "@ant-design/icons";
// others
import "./style.scss";

const PostInteract = ({ votes, comments }) => (
  <div className="post-interact-wrapper">
    <div className="post-interact-wrapper-inner">
      <div className="up-vote">
        <LikeOutlined />
        {votes.upVote || 0}
      </div>
      <div className="down-vote">
        <DislikeOutlined />
        {votes.downVote || 0}
      </div>
      <div className="comments">
        <CommentOutlined />
        {comments || 0}
      </div>
    </div>
  </div>
);

export default PostInteract;
