// libs
import PostAttachments from "@/pages/Stories/components/PostAttachments";
import PostContent from "@/pages/Stories/components/PostContent";
import React from "react";
import PostHeader from "../PostHeader";
import PostInteract from "../PostInteract";
import PostInteractCount from "../PostInteractCount";

// others
import "./style.scss";

const StoryPost = ({
  post: {
    createAt,
    title,
    images = [],
    _id,
    likeUsers,
    comments,
    user,
    child,
    ...post
  } = {},
}) => (
  <div className="story-post-wrapper">
    <PostHeader date={createAt} user={user} child={child} _id={_id} />
    <PostContent content={title} />
    <PostAttachments attachments={images} _id={_id} />
    <PostInteractCount likeUsers={likeUsers} comments={comments} _id={_id} />
    <PostInteract
      _id={_id}
      likeUsers={likeUsers}
      url={post["url-web"]}
      hasImage={!!images.length}
    />
  </div>
);

export default StoryPost;
