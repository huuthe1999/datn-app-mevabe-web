// libs
import React from "react";
import { useSelector } from "react-redux";
import LikerModal from "./mains/LikerModal";
import FetchStoryDetail from "./ghosts/FetchStoryDetail";
import ResetReducer from "./ghosts/ResetReducer";
import CommentInput from "./mains/CommentInput";
import LoaderContent from "./mains/LoaderContent";
import StoryComments from "./mains/StoryComments";
import StoryContent from "./mains/StoryContent";
import StoryHeader from "./mains/StoryHeader";
import StoryImages from "./mains/StoryImages";
import StoryInteract from "./mains/StoryInteract";
import StoryInteractCount from "./mains/StoryInteractCount";
// others
import "./style.scss";
import NotFound from "../NotFound";

const StoryDetail = () => {
  const { isLoading, status: { _id } = {} } = useSelector(
    (state) => state.STATUS_DETAIL_REDUCER
  );

  return (
    <div className="status-detail-wrapper">
      {isLoading ? (
        <LoaderContent />
      ) : _id ? (
        <div className="status-detail-wrapper-inner">
          <StoryHeader />
          <StoryContent />
          <StoryImages />
          <StoryInteractCount />
          <StoryInteract />
          <StoryComments />
          <CommentInput />
        </div>
      ) : (
        <NotFound />
      )}
      <FetchStoryDetail />
      <ResetReducer />
      <LikerModal />
    </div>
  );
};

export default StoryDetail;
