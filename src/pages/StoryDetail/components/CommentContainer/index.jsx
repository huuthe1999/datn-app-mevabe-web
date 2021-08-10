// libs
import { fetchLowLevelComments } from "@/actions/StoryDetail";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingleComment from "../SingleComment";

// others
import "./style.scss";

const CommentContainer = ({ comment, isLoadingHighLevel }) => {
  const [showReply, setShowReply] = useState(false);
  const [subComments, setSubComments] = useState([
    ...Array((comment.subComments || []).length),
  ]);
  const [isLoadingSub, setIsLoadingSub] = useState(false);
  const dispatch = useDispatch();
  const {
    subComments: { shouldReload, commentId },
  } = useSelector((state) => state.STORY_DETAIL_REDUCER);

  const handleFetchSubComments = useCallback(() => {
    dispatch(
      fetchLowLevelComments({
        _id: comment?._id,
        cbSuccess: ({ comments = {} }) => {
          setSubComments(comments?.subComments || []);
        },
        cbFinally: () => setIsLoadingSub(false),
      })
    );
  }, [comment?._id, dispatch]);

  useEffect(() => {
    if (!shouldReload || commentId !== comment?._id || showReply === false)
      return;
    handleFetchSubComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldReload]);

  const handleShowSubComments = useCallback(() => {
    setIsLoadingSub(true);
    setShowReply(true);
    handleFetchSubComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [comment?._id, dispatch]);

  const handleHideSubComment = useCallback(() => {
    setShowReply(false);
  }, []);

  return (
    <div className="comment-container-wrapper">
      <SingleComment
        comment={comment}
        showLoading={isLoadingHighLevel}
        handleShowSubComments={handleShowSubComments}
        handleHideSubComment={handleHideSubComment}
        showReply={showReply}
      >
        {showReply &&
          subComments.map((subCom) => (
            <SingleComment
              comment={subCom}
              showLoading={isLoadingSub}
              isLower
              key={subCom?._id}
            />
          ))}
      </SingleComment>
    </div>
  );
};

export default CommentContainer;
