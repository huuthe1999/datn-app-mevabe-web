import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  FETCH_USER_INFO_LOADING,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_ERROR,
  FETCH_USER_CHILDS_LOADING,
  FETCH_USER_CHILDS_SUCCESS,
  FETCH_USER_CHILDS_ERROR,
} = CONSTANTS.ACTION_TYPES.PROFILE_ACTIONS;

export const fetchUserProfile = ({ userId, cbSuccess }) =>
  request({
    url: CONSTANTS.ENDPOINTS.USERS.ID_USER_ID(userId),
    method: "GET",
    LOADING_ACTION: FETCH_USER_INFO_LOADING,
    ERROR_ACTION: FETCH_USER_INFO_ERROR,
    SUCCESS_ACTION: FETCH_USER_INFO_SUCCESS,
    cbSuccess,
  });

export const updateProfile = ({ user, cbSuccess, cbFinally, cbError }) =>
  request({
    url: CONSTANTS.ENDPOINTS.USERS.ME,
    method: "PUT",
    data: user,
    cbSuccess,
    cbFinally,
    cbError,
  });

export const fetchUserChilds = ({ userId, cbSuccess }) =>
  request({
    url: CONSTANTS.ENDPOINTS.CHILDS.USER_USER_ID(userId),
    method: "GET",
    LOADING_ACTION: FETCH_USER_CHILDS_LOADING,
    ERROR_ACTION: FETCH_USER_CHILDS_ERROR,
    SUCCESS_ACTION: FETCH_USER_CHILDS_SUCCESS,
    cbSuccess,
  });
