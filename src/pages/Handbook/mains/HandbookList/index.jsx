// libs
import { useRouter } from "@/hooks";
import React from "react";
import { useSelector } from "react-redux";
import GuideSkeleton from "../../components/GuideSkeleton";
import SingleBlog from "../SingleBlog";
// others
import "./style.scss";

const HandbookList = () => {
  const { guides, isLoading } = useSelector((state) => state.HANDBOOK_REDUCER);
  const router = useRouter();
  const category = router.query.get("category");

  return category ? (
    <div className="handbook-list-wrapper">
      {isLoading
        ? [...Array(6).keys()].map((index) => <GuideSkeleton key={index} />)
        : guides.map((guide) => <SingleBlog key={guide._id} blog={guide} />)}
    </div>
  ) : null;
};

export default HandbookList;
