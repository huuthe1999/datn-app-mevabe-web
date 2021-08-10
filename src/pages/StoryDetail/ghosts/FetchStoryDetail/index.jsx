// libs
import {
  fetchHighLevelComments,
  fetchStoryDetail,
} from "@/actions/StoryDetail";
import { useRouter } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// others

const FetchStoryDetail = () => {
  const router = useRouter();
  const { statusId } = router.params;
  const dispatch = useDispatch();

  const { shouldRefreshComments, shouldRefreshStoryDetail } = useSelector(
    (state) => state.STORY_DETAIL_REDUCER
  );

  useEffect(() => {
    dispatch(fetchStoryDetail(statusId));
  }, [dispatch, statusId, shouldRefreshStoryDetail]);

  useEffect(() => {
    dispatch(fetchHighLevelComments(statusId));
  }, [dispatch, statusId, shouldRefreshComments]);

  return <></>;
};

export default FetchStoryDetail;
