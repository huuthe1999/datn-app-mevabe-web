// libs
import { fetchAllMilkNotes } from "@/actions/TrackingMilk";
import { useChild } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchMilkNotes = () => {
  const { currentChild, triggerSelectFlag } = useChild();
  const { shouldRefreshMilkNotes } = useSelector(
    (state) => state.TRACKING_MILK_REDUCER
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchAllMilkNotes({
        childId: currentChild,
      })
    );
  }, [currentChild, dispatch, triggerSelectFlag, shouldRefreshMilkNotes]);

  return <></>;
};

export default SearchMilkNotes;
