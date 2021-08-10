// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} = CONSTANTS.ACTION_TYPES.LOGIN_ACTIONS;

export const submitLogin = ({ username, password, cbSuccess }) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.AUTHS.LOGIN,
    data: { username, password },
    LOADING_ACTION: LOGIN_LOADING,
    SUCCESS_ACTION: LOGIN_SUCCESS,
    ERROR_ACTION: LOGIN_ERROR,
    cbSuccess,
  });
