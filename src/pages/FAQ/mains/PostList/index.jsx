// libs
import React from "react";
// components
import FAQPost from "../../components/FAQPost";
// others
import { mockPostList } from "@/mocks/FAQ";
import "./style.scss";

const PostList = () => (
  <div className="post-list-wrapper">
    {mockPostList(20).map((post) => (
      <FAQPost post={post} key={post.id} />
    ))}
  </div>
);

export default PostList;
