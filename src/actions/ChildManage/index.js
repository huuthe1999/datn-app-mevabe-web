// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";
import { toFormData } from "@/restAPI/tranformRequest";
import { message } from "antd";

const {
  FETCH_CHILD_DETAIL_LOADING,
  FETCH_CHILD_DETAIL_SUCCESS,
  FETCH_CHILD_DETAIL_ERROR,
  SUBMIT_CHILD_LOADING,
  SUBMIT_CHILD_SUCCESS,
  SUBMIT_CHILD_ERROR,
  UPDATE_CHILD_DETAIL,
  ADD_CHILD,
  UPDATE_SCREEN_MODE,
  UPLOAD_AVATAR_LOADING,
  UPLOAD_AVATAR_SUCCESS,
  UPLOAD_AVATAR_ERROR,
  UPLOAD_COVER_LOADING,
  UPLOAD_COVER_SUCCESS,
  UPLOAD_COVER_ERROR,
} = CONSTANTS.ACTION_TYPES.CHILD_MANAGE_ACTIONS;

export const fecthChildDetail = (childId) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.CHILDS.CHILD_BY_ID(childId),
    LOADING_ACTION: FETCH_CHILD_DETAIL_LOADING,
    SUCCESS_ACTION: FETCH_CHILD_DETAIL_SUCCESS,
    ERROR_ACTION: FETCH_CHILD_DETAIL_ERROR,
  });

export const updateChildDetail = (payload) => ({
  type: UPDATE_CHILD_DETAIL,
  payload,
});

export const addChild = () => (dispatch) => {
  dispatch({
    type: FETCH_CHILD_DETAIL_LOADING,
    payload: true,
  });

  setTimeout(() => {
    dispatch({
      type: ADD_CHILD,
    });
    dispatch({
      type: FETCH_CHILD_DETAIL_LOADING,
      payload: false,
    });
  }, 300);
};

export const deleteChild = ({ childId, cbError, cbFinally, cbSuccess }) =>
  request({
    method: "DELETE",
    url: CONSTANTS.ENDPOINTS.CHILDS.CHILD_BY_ID(childId),
    cbError,
    cbFinally,
    cbSuccess,
  });

export const updateScreenMode = (mode) => ({
  type: UPDATE_SCREEN_MODE,
  payload: mode,
});

export const updateChild = ({ childId, data, cbError, cbFinally, cbSuccess }) =>
  request({
    method: "PUT",
    data,
    cbError,
    cbFinally,
    cbSuccess,
    url: CONSTANTS.ENDPOINTS.CHILDS.CHILD_BY_ID(childId),
    LOADING_ACTION: SUBMIT_CHILD_LOADING,
    SUCCESS_ACTION: SUBMIT_CHILD_SUCCESS,
    ERROR_ACTION: SUBMIT_CHILD_ERROR,
  });

export const createChild = ({ data, cbError, cbFinally, cbSuccess }) =>
  request({
    method: "POST",
    data,
    cbError,
    cbFinally,
    cbSuccess,
    url: CONSTANTS.ENDPOINTS.CHILDS.EMPTY,
    LOADING_ACTION: SUBMIT_CHILD_LOADING,
    SUCCESS_ACTION: SUBMIT_CHILD_SUCCESS,
    ERROR_ACTION: SUBMIT_CHILD_ERROR,
  });

export const uploadAvatar = ({ data, cbSuccess, cbFinally }) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.IMAGES.UPLOAD_SINGLE,
    data,
    LOADING_ACTION: UPLOAD_AVATAR_LOADING,
    SUCCESS_ACTION: UPLOAD_AVATAR_SUCCESS,
    ERROR_ACTION: UPLOAD_AVATAR_ERROR,
    cbSuccess,
    cbFinally,
    cbError: ({ message: errMessage } = {}) => message.error(errMessage),
    transformRequest: [toFormData],
  });

export const uploadCover = ({ data, cbSuccess, cbFinally }) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.IMAGES.UPLOAD_SINGLE,
    data,
    LOADING_ACTION: UPLOAD_COVER_LOADING,
    SUCCESS_ACTION: UPLOAD_COVER_SUCCESS,
    ERROR_ACTION: UPLOAD_COVER_ERROR,
    cbSuccess,
    cbFinally,
    cbError: ({ message: errMessage } = {}) => message.error(errMessage),
    transformRequest: [toFormData],
  });
