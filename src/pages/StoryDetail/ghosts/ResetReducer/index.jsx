// libs
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// others
import CONSTANTS from "@/constants";

const ResetReducer = () => {
  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch({
        type: CONSTANTS.ACTION_TYPES.COMMON_ACTIONS.RESET_PAGE_REDUCER,
        payload: {
          page: "STORY_DETAIL",
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return <></>;
};

export default ResetReducer;
