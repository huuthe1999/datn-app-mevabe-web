// libs
import React from "react";
// components
import PostContent from "../PostContent";
import PostHeader from "../PostHeader";
import PostInteract from "../PostInteract";
import CommentInput from "../CommentInput";
// others
import "./style.scss";

const FAQPost = ({
  post: { author, date, content, attachments, votes, comments } = {},
}) => (
  <div className="faq-post-wrapper">
    <PostHeader {...{ author, date }} />
    <PostContent {...{ content, attachments }} />
    <PostInteract {...{ votes, comments }} />
    <CommentInput />
  </div>
);

export default FAQPost;
