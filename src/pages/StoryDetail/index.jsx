// libs
import ModalContainer from "@/components/ModalContainer";
import { useRouter } from "@/hooks";
import classNames from "classnames";

import React from "react";
import { useSelector } from "react-redux";
import FetchStoryDetail from "./ghosts/FetchStoryDetail";
import ResetReducer from "./ghosts/ResetReducer";
import CommentInput from "./mains/CommentInput";
import LikerModal from "./mains/LikerModal";
import LoaderContent from "./mains/LoaderContent";
import StoryComments from "./mains/StoryComments";
import StoryContent from "./mains/StoryContent";
import StoryHeader from "./mains/StoryHeader";
import StoryImages from "./mains/StoryImages";
import StoryInteract from "./mains/StoryInteract";
import StoryInteractCount from "./mains/StoryInteractCount";
// others
import "./style.scss";

const StoryDetail = () => {
  const { isLoading } = useSelector((state) => state.STORY_DETAIL_REDUCER);
  const router = useRouter();
  const { hasImage } = router.location.state || {};

  return (
    <ModalContainer width="auto">
      <div className="story-detail-wrapper">
        {isLoading ? (
          <LoaderContent />
        ) : (
          <div
            className={classNames("story-detail-wrapper-inner", { hasImage })}
          >
            {hasImage ? <StoryImages /> : null}
            <div className="story-info">
              <div className="story-info-inner">
                <StoryHeader />
                <StoryContent />
                <StoryInteractCount />
                <StoryInteract />
                <StoryComments />
              </div>
              <CommentInput />
            </div>
            <LikerModal />
          </div>
        )}

        <FetchStoryDetail />
        <ResetReducer />
      </div>
    </ModalContainer>
  );
};

export default StoryDetail;
