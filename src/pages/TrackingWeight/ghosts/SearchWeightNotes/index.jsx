// libs
import { fetchAllWeightNotes } from "@/actions/TrackingWeight";
import { useChild } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchWeightNotes = () => {
  const { currentChild, triggerSelectFlag } = useChild();
  const { shouldRefreshWeightNotes } = useSelector(
    (state) => state.TRACKING_WEIGHT_REDUCER
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchAllWeightNotes({
        childId: currentChild,
      })
    );
  }, [currentChild, dispatch, triggerSelectFlag, shouldRefreshWeightNotes]);

  return <></>;
};

export default SearchWeightNotes;
