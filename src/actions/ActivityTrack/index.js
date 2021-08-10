// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  FETCH_STD_HEIGHT_MAX_SUCCESS,
  FETCH_STD_HEIGHT_MIN_SUCCESS,
  FETCH_STD_HEIGHT_LOADING,
  FETCH_STD_HEIGHT_ERROR,
  FETCH_STD_WEIGHT_MAX_SUCCESS,
  FETCH_STD_WEIGHT_MIN_SUCCESS,
  FETCH_STD_WEIGHT_LOADING,
  FETCH_STD_WEIGHT_ERROR,
} = CONSTANTS.ACTION_TYPES.ACTIVITY_TRACK_ACTIONS;

export const fetchStandardHeight = ({ params, isMax }) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.HEIGHT_NOTES.STANDARD_ALL,
    params: {
      ...params,
      isMax,
    },
    LOADING_ACTION: FETCH_STD_HEIGHT_LOADING,
    SUCCESS_ACTION: isMax
      ? FETCH_STD_HEIGHT_MAX_SUCCESS
      : FETCH_STD_HEIGHT_MIN_SUCCESS,
    ERROR_ACTION: FETCH_STD_HEIGHT_ERROR,
  });

export const fetchStandardWeight = ({ params, isMax }) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.WEIGHT_NOTES.STANDARD_ALL,
    params: {
      ...params,
      isMax,
    },
    LOADING_ACTION: FETCH_STD_WEIGHT_LOADING,
    SUCCESS_ACTION: isMax
      ? FETCH_STD_WEIGHT_MAX_SUCCESS
      : FETCH_STD_WEIGHT_MIN_SUCCESS,
    ERROR_ACTION: FETCH_STD_WEIGHT_ERROR,
  });
