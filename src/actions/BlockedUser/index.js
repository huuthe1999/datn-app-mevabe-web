import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  FETCH_BLOCKED_USERS_LOADING,
  FETCH_BLOCKED_USERS_SUCCESS,
  FETCH_BLOCKED_USERS_ERROR,
} = CONSTANTS.ACTION_TYPES.BLOCKED_USER_ACTIONS;

export const fetchBlockedUsers = () =>
  request({
    url: CONSTANTS.ENDPOINTS.USERS.BLOCK_USERS,
    method: "GET",
    LOADING_ACTION: FETCH_BLOCKED_USERS_LOADING,
    ERROR_ACTION: FETCH_BLOCKED_USERS_ERROR,
    SUCCESS_ACTION: FETCH_BLOCKED_USERS_SUCCESS,
  });

export const unblockUser = ({
  idBlockUserList,
  cbError,
  cbFinally,
  cbSuccess,
}) =>
  request({
    url: CONSTANTS.ENDPOINTS.USERS.BLOCK_USERS,
    method: "POST",
    data: { idBlockUserList },
    cbError,
    cbFinally,
    cbSuccess,
  });
