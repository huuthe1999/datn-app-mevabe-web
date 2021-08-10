// libs
import React from "react";
// components
import FAQHeader from "./mains/FAQHeader";
import PostList from "./mains/PostList";
// others
import "./style.scss";

const FAQ = () => (
  <div className="faq-wrapper">
    <FAQHeader />
    <PostList />
  </div>
);

export default FAQ;
