// libs
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// hooks
import { useChild } from "@/hooks";
// others
import { fecthChildDetail, updateScreenMode } from "@/actions/ChildManage";
import { SCREEN_STATUS } from "@/dataSources/ChildManage";

const SearchChildInfo = () => {
  const { currentChild, triggerSelectFlag } = useChild();
  const dispatch = useDispatch();
  const { childInfo, shouldRefreshChildInfo } = useSelector(
    (state) => state.CHILD_MANAGE_REDUCER
  );

  useEffect(() => {
    if (currentChild) {
      dispatch(fecthChildDetail(currentChild));
    }
  }, [currentChild, dispatch, triggerSelectFlag, shouldRefreshChildInfo]);

  useEffect(() => {
    dispatch(
      updateScreenMode(
        childInfo?._id ? SCREEN_STATUS.UPDATE : SCREEN_STATUS.REGISTER
      )
    );
  }, [childInfo?._id, dispatch]);

  return <></>;
};

export default SearchChildInfo;
