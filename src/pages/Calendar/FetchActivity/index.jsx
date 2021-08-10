// libs
import { fetchAllActivity } from "@/actions/TrackingActivity";
import { useChild } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FetchActivity = () => {
  const { currentChild, triggerSelectFlag } = useChild();
  const { shouldRefreshActivity } = useSelector(
    (state) => state.TRACKING_ACTIVITY_REDUCER
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchAllActivity({
        childId: currentChild,
      })
    );
  }, [currentChild, dispatch, triggerSelectFlag, shouldRefreshActivity]);

  return <></>;
};

export default FetchActivity;
