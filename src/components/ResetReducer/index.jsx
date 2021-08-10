// libs
import React from "react";
import { useDispatch } from "react-redux";
import { Prompt } from "react-router-dom";
// others
import CONSTANTS from "@/constants";
import {
  privateRoutes,
  publicRoutes,
  nonUserRoutes,
  modalRoutes,
} from "@/routers";

const ResetReducer = () => {
  const dispatch = useDispatch();

  const reducerNameByPathName = Object.entries(CONSTANTS.ROUTERS).reduce(
    (previous, [key, value]) => ({ ...previous, [value]: key }),
    {}
  );

  const shouldResetReducerByPathName = [
    ...privateRoutes,
    ...publicRoutes,
    ...nonUserRoutes,
    ...modalRoutes,
  ].reduce(
    (previous, { path, shouldResetReducer }) => ({
      ...previous,
      [path]: shouldResetReducer,
    }),
    {}
  );

  return (
    <Prompt
      message={({ pathname }) => {
        if (shouldResetReducerByPathName[pathname])
          dispatch({
            type: CONSTANTS.ACTION_TYPES.COMMON_ACTIONS.RESET_PAGE_REDUCER,
            payload: {
              page: reducerNameByPathName[pathname],
            },
          });

        return true;
      }}
    />
  );
};

export default ResetReducer;
