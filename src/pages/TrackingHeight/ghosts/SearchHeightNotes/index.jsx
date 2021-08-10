// libs
import { useChild } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllHeightNotes } from "@/actions/TrackingHeight";

const SearchHeightNotes = () => {
  const { currentChild, triggerSelectFlag } = useChild();
  const { shouldRefreshHeightNotes } = useSelector(
    (state) => state.TRACKING_HEIGHT_REDUCER
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchAllHeightNotes({
        childId: currentChild,
      })
    );
  }, [currentChild, dispatch, triggerSelectFlag, shouldRefreshHeightNotes]);

  return <></>;
};

export default SearchHeightNotes;
