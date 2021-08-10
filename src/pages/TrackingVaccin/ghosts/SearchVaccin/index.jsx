// libs
import { fetchAllVaccinNotes } from "@/actions/TrackingVaccin";
import { useChild } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// others

const SearchVaccin = () => {
  const { currentChild, triggerSelectFlag } = useChild();
  const { shouldRefreshVaccinNotes } = useSelector(
    (state) => state.TRACKING_VACCIN_REDUCER
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchAllVaccinNotes({
        childId: currentChild,
      })
    );
  }, [currentChild, dispatch, triggerSelectFlag, shouldRefreshVaccinNotes]);

  return <></>;
};

export default SearchVaccin;
