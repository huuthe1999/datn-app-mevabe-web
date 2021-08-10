// libs
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// actions
import {
  fetchAllStatus,
  resetStoryList,
  triggerFetchStory,
  updateLoadingStories,
} from "@/actions/Stories";
import { useAuth, useRouter } from "@/hooks";

const FetchStoryList = () => {
  const dispatch = useDispatch();
  const { shouldFetchStories, next } = useSelector(
    (state) => state.STORIES_REDUCER
  );
  const router = useRouter();
  const { shouldRefreshData } = router.location.state || {};
  const isInitialMount = useRef(true);
  const { user } = useAuth();

  useEffect(() => {
    if (next?.page && next?.limit) {
      dispatch(updateLoadingStories(next?.limit));
      dispatch(
        fetchAllStatus({
          page: next?.page,
          limit: next?.limit,
          shouldFilter: user?._id,
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, shouldFetchStories]);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      dispatch(resetStoryList());
      dispatch(triggerFetchStory());
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRefreshData]);

  return <></>;
};

export default FetchStoryList;
