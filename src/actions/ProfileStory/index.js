import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  FETCH_PROFILE_STORY_LOADING,
  FETCH_PROFILE_STORY_SUCCESS,
  FETCH_PROFILE_STORY_ERROR,
  SHOW_STORY_MODAL,
  UPDATE_MODAL_DATA,
  DELETE_STORY,
} = CONSTANTS.ACTION_TYPES.PROFILE_STORY_ACTIONS;

export const fetchProfileStory = ({
  userId,
  childId,
  page,
  limit,
  cbSuccess,
  cbFinally,
  cbError,
}) =>
  request({
    url: childId
      ? CONSTANTS.ENDPOINTS.STATUS.ALL_CHILD_CHILDID(childId)
      : CONSTANTS.ENDPOINTS.STATUS.ALL_USER_USERID(userId),
    method: "GET",
    params: { page, limit },
    LOADING_ACTION: FETCH_PROFILE_STORY_LOADING,
    ERROR_ACTION: FETCH_PROFILE_STORY_ERROR,
    SUCCESS_ACTION: FETCH_PROFILE_STORY_SUCCESS,
    cbSuccess,
    cbFinally,
    cbError,
  });

export const setShowStoryModal = (payload) => ({
  type: SHOW_STORY_MODAL,
  payload,
});

export const fetchLikers = ({ statusId, cbSuccess, cbFinally, cbError }) =>
  request({
    url: CONSTANTS.ENDPOINTS.STATUS.ALL_LIKERS(statusId),
    method: "GET",
    cbSuccess,
    cbFinally,
    cbError,
  });

export const fetchStoryDetail = ({ statusId, cbSuccess, cbFinally, cbError }) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.STATUS.STATUS_ID(statusId),
    cbSuccess,
    cbFinally,
    cbError,
  });

export const updateModalData = (payload) => ({
  type: UPDATE_MODAL_DATA,
  payload,
});

export const removeStory = (_id) => ({
  type: DELETE_STORY,
  payload: _id,
});
