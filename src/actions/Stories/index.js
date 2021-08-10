// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";
import { toFormData } from "@/restAPI/tranformRequest";

const {
  FETCH_STORY_LIST_LOADING,
  FETCH_STORY_LIST_SUCCESS,
  FETCH_STORY_LIST_ERROR,
  UPLOAD_STORY_LOADING,
  UPLOAD_STORY_SUCCESS,
  UPLOAD_STORY_ERROR,
  SET_SHOW_MODAL,
  LIKE_STORY,
  DISLIKE_STORY,
  GET_LIKERS_SUCCESS,
  GET_LIKERS_LOADING,
  SHOW_LIKER_MODAL,
  SET_LIKER_STORY,
  TRIGGER_FETCH_STORIES,
  UPDATE_LOADING_STORIES,
  RESET_STORY_LIST,
  FETCH_STORY_DETAIL,
  FETCH_STORY_DETAIL_LOADING,
} = CONSTANTS.ACTION_TYPES.STORIES_ACTIONS;

export const fetchStoryListByChild = (childId) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.STATUS.GET_ALL(childId),
    LOADING_ACTION: FETCH_STORY_LIST_LOADING,
    SUCCESS_ACTION: FETCH_STORY_LIST_SUCCESS,
    ERROR_ACTION: FETCH_STORY_LIST_ERROR,
  });

export const setShowStoriesModal = ({ showModal }) => ({
  type: SET_SHOW_MODAL,
  payload: {
    showModal,
  },
});

export const uploadStory = ({ childId, data, cbSuccess, cbFinally }) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.STATUS.CREATE(childId),
    data,
    cbSuccess,
    cbFinally,
    LOADING_ACTION: UPLOAD_STORY_LOADING,
    SUCCESS_ACTION: UPLOAD_STORY_SUCCESS,
    ERROR_ACTION: UPLOAD_STORY_ERROR,
  });

export const uploadImages = ({ data, cbSuccess, cbError, cbFinally }) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.IMAGES.UPLOAD_MULTIPLE,
    data,
    LOADING_ACTION: UPLOAD_STORY_LOADING,
    ERROR_ACTION: UPLOAD_STORY_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
    transformRequest: [toFormData],
  });

export const submitReaction = (isLiked) => (_id) =>
  request({
    method: "POST",
    url: isLiked
      ? CONSTANTS.ENDPOINTS.STATUS.DISLIKE(_id)
      : CONSTANTS.ENDPOINTS.STATUS.LIKE(_id),
    SUCCESS_ACTION: isLiked ? DISLIKE_STORY : LIKE_STORY,
  });

export const getAllLiker = ({ statusId, cbSuccess, cbFinally, cbError }) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.STATUS.ALL_LIKERS(statusId),
    SUCCESS_ACTION: GET_LIKERS_SUCCESS,
    LOADING_ACTION: GET_LIKERS_LOADING,
    cbSuccess,
    cbFinally,
    cbError,
  });

export const setShowLikerModal = (isShow) => ({
  type: SHOW_LIKER_MODAL,
  payload: isShow,
});

export const setLikerStory = (statusId) => ({
  type: SET_LIKER_STORY,
  payload: statusId,
});

export const fetchAllStatus = ({
  page,
  limit,
  cbFinally,
  shouldFilter = false,
}) =>
  request({
    method: "GET",
    url: shouldFilter
      ? CONSTANTS.ENDPOINTS.STATUS.ALL_FILTER_HIDDEN
      : CONSTANTS.ENDPOINTS.STATUS.BASE,
    params: { page, limit },
    LOADING_ACTION: FETCH_STORY_LIST_LOADING,
    SUCCESS_ACTION: FETCH_STORY_LIST_SUCCESS,
    ERROR_ACTION: FETCH_STORY_LIST_ERROR,
    cbFinally,
  });

export const triggerFetchStory = (page) => ({
  type: TRIGGER_FETCH_STORIES,
  payload: page,
});

export const updateLoadingStories = (limit) => ({
  type: UPDATE_LOADING_STORIES,
  payload: limit,
});

export const resetStoryList = () => ({
  type: RESET_STORY_LIST,
});

export const deleteStory = ({ _id, cbSuccess, cbFinally, cbError }) =>
  request({
    method: "DELETE",
    url: CONSTANTS.ENDPOINTS.STATUS.STATUS_ID(_id),
    cbSuccess,
    cbFinally,
    cbError,
  });

export const fetchStoryDetail = ({ _id, cbSuccess, cbFinally, cbError }) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.STATUS.STATUS_ID(_id),
    cbSuccess,
    cbFinally,
    cbError,
    SUCCESS_ACTION: FETCH_STORY_DETAIL,
    LOADING_ACTION: FETCH_STORY_DETAIL_LOADING,
  });

export const updateStory = ({ statusId, data, cbSuccess, cbFinally }) =>
  request({
    method: "PUT",
    url: CONSTANTS.ENDPOINTS.STATUS.STATUS_ID(statusId),
    data,
    cbSuccess,
    cbFinally,
    LOADING_ACTION: UPLOAD_STORY_LOADING,
    SUCCESS_ACTION: UPLOAD_STORY_SUCCESS,
    ERROR_ACTION: UPLOAD_STORY_ERROR,
  });

export const hideStory = ({ idStatusHidden, idOwnerHidden, cbSuccess }) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.STATUS.HIDDEN,
    params: { idStatusHidden, idOwnerHidden },
    cbSuccess,
  });
