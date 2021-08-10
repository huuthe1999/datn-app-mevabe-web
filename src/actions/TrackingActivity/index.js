// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  FETCH_ACTIVITY_NOTES_LOADING,
  FETCH_ACTIVITY_NOTES_SUCCESS,
  FETCH_ACTIVITY_NOTES_ERROR,
  REFRESH_ACTIVITY_NOTES,
  SHOW_ACTIVITY_NOTES_MODAL,
  FETCH_ACTIVITY_NOTE_DETAIL_LOADING,
  FETCH_ACTIVITY_NOTE_DETAIL_SUCCESS,
  FETCH_ACTIVITY_NOTE_DETAIL_ERROR,
  SELECT_DATE,
} = CONSTANTS.ACTION_TYPES.TRACKING_ACTIVITY_ACTIONS;

export const selectDate = (date) => ({
  type: SELECT_DATE,
  payload: date,
});

export const createActivity = ({ data, cbSuccess, cbError, cbFinally }) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.ACTIVITY.BASE,
    data,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const updateActivity = ({
  activityId,
  data,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "PUT",
    url: CONSTANTS.ENDPOINTS.ACTIVITY.ACTIVITY_ID(activityId),
    data,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const deleteActivity = ({ activityId, cbSuccess, cbError, cbFinally }) =>
  request({
    method: "DELETE",
    url: CONSTANTS.ENDPOINTS.ACTIVITY.ACTIVITY_ID(activityId),
    cbSuccess,
    cbError,
    cbFinally,
  });

export const fetchAllActivity = ({ childId, cbSuccess, cbError, cbFinally }) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.ACTIVITY.BASE,
    params: { childId },
    LOADING_ACTION: FETCH_ACTIVITY_NOTES_LOADING,
    SUCCESS_ACTION: FETCH_ACTIVITY_NOTES_SUCCESS,
    ERROR_ACTION: FETCH_ACTIVITY_NOTES_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const refreshActivityList = () => ({
  type: REFRESH_ACTIVITY_NOTES,
});

export const setShowActivityModal = (isShow) => ({
  type: SHOW_ACTIVITY_NOTES_MODAL,
  payload: isShow,
});

export const fetchActivityDetail = ({
  activityId,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.ACTIVITY.BASE,
    params: { activityId },
    LOADING_ACTION: FETCH_ACTIVITY_NOTE_DETAIL_LOADING,
    SUCCESS_ACTION: FETCH_ACTIVITY_NOTE_DETAIL_SUCCESS,
    ERROR_ACTION: FETCH_ACTIVITY_NOTE_DETAIL_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });
