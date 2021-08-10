import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  FETCH_STORY_DETAIL_LOADING,
  FETCH_STORY_DETAIL_SUCCESS,
  FETCH_STORY_DETAIL_ERROR,
  FETCH_COMMENTS_LOADING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  LIKE_STORY,
  DISLIKE_STORY,
  REFRESH_COMMENTS,
  SET_BASE_COMMENT,
  TRIGGER_RELOAD_SUB_COMMENT,
  SHOW_LIKER_MODAL,
  REFRESH_STORY_DETAIL,
} = CONSTANTS.ACTION_TYPES.STATUS_DETAIL_ACTIONS;

export const fetchStoryDetail = (statusId) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.STATUS.STATUS_ID(statusId),
    LOADING_ACTION: FETCH_STORY_DETAIL_LOADING,
    ERROR_ACTION: FETCH_STORY_DETAIL_ERROR,
    SUCCESS_ACTION: FETCH_STORY_DETAIL_SUCCESS,
  });

export const fetchHighLevelComments = (statusId) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.COMMENTS.HIGH_LEVEL_STATUS_ID(statusId),
    LOADING_ACTION: FETCH_COMMENTS_LOADING,
    ERROR_ACTION: FETCH_COMMENTS_ERROR,
    SUCCESS_ACTION: FETCH_COMMENTS_SUCCESS,
  });

export const submitReaction = (isLiked) => (_id) =>
  request({
    method: "POST",
    url: isLiked
      ? CONSTANTS.ENDPOINTS.STATUS.DISLIKE(_id)
      : CONSTANTS.ENDPOINTS.STATUS.LIKE(_id),
    SUCCESS_ACTION: isLiked ? DISLIKE_STORY : LIKE_STORY,
  });

export const submitHighLevelComment = ({
  content,
  arrImg = [],
  statusId,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.COMMENTS.HIGH_LEVEL_STATUS_ID(statusId),
    data: { content, arrImg },
    cbSuccess,
    cbError,
    cbFinally,
  });

export const refreshComments = () => ({
  type: REFRESH_COMMENTS,
});

export const submitLowLevelComment = ({
  content,
  arrImg = [],
  statusId,
  commentId,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.COMMENTS.LOW_LEVEL_STATUS_ID_COMMENT_ID(
      statusId,
      commentId
    ),
    data: { content, arrImg },
    cbSuccess,
    cbError,
    cbFinally,
  });

export const setBaseComment = (comment) => ({
  type: SET_BASE_COMMENT,
  payload: comment,
});

export const fetchLowLevelComments = ({ _id, cbSuccess, cbError, cbFinally }) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.COMMENTS.LOW_LEVEL_COMMENT_ID(_id),
    cbSuccess,
    cbError,
    cbFinally,
  });

export const triggerReloadSubComments = (commentId) => ({
  type: TRIGGER_RELOAD_SUB_COMMENT,
  payload: commentId,
});

export const showLikerModal = (payload) => ({
  type: SHOW_LIKER_MODAL,
  payload,
});

export const fetchLikerUsers = ({ statusId, cbSuccess, cbFinally, cbError }) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.STATUS.ALL_LIKERS(statusId),
    cbSuccess,
    cbFinally,
    cbError,
  });

export const updateStory = ({ statusId, data, cbSuccess, cbFinally }) =>
  request({
    method: "PUT",
    url: CONSTANTS.ENDPOINTS.STATUS.STATUS_ID(statusId),
    data,
    cbSuccess,
    cbFinally,
  });

export const refreshStoryDetail = () => ({
  type: REFRESH_STORY_DETAIL,
});
