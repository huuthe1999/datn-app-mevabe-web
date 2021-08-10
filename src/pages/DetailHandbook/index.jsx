// libs
import React from "react";
import { useSelector } from "react-redux";
// components
import BlogTitle from "./mains/BlogTitle";
import BlogContent from "./mains/BlogContent";
import OriginalBlogButton from "./mains/OriginalBlogButton";
import SearchDetailGuide from "./ghosts/SearchDetailGuide";
// hocs
import { withLoading } from "@/hocs";
// others
import "./style.scss";
import PageTitle from "./mains/PageTitle";
import Origin from "./mains/Origin";

const DetailHandbook = () => {
  const { isLoading } = useSelector((state) => state.DETAIL_HANDBOOK_REDUCER);

  return (
    <div className="detail-handbook-wrapper">
      {withLoading(isLoading)(
        <>
          <BlogTitle />
          <Origin />
          <BlogContent />
          <OriginalBlogButton />
        </>
      )}
      <PageTitle />
      <SearchDetailGuide />
    </div>
  );
};

export default DetailHandbook;
