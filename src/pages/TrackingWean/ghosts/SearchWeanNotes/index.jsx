// libs
import { fetchAllWeanNotes, fetchMaterial } from "@/actions/TrackingWean";
import { useChild } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SearchWeanNotes = () => {
  const { currentChild, triggerSelectFlag } = useChild();
  const { shouldRefreshWeanNotes } = useSelector(
    (state) => state.TRACKING_WEAN_REDUCER
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchAllWeanNotes({
        childId: currentChild,
      })
    );
  }, [currentChild, dispatch, triggerSelectFlag, shouldRefreshWeanNotes]);

  useEffect(() => {
    dispatch(fetchMaterial());
  }, [dispatch, triggerSelectFlag, shouldRefreshWeanNotes]);

  return <></>;
};

export default SearchWeanNotes;
