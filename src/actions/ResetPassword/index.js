// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  RESET_PASSWORD_LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} = CONSTANTS.ACTION_TYPES.RESET_PASSWORD_ACTIONS;

export const resetPassword = ({ newPassword, token, cbSuccess }) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.AUTHS.RESET_PASSWORD,
    data: { token, newPassword },
    LOADING_ACTION: RESET_PASSWORD_LOADING,
    SUCCESS_ACTION: RESET_PASSWORD_SUCCESS,
    ERROR_ACTION: RESET_PASSWORD_ERROR,
    cbSuccess,
  });
