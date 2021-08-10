// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  SEND_RESET_PASSWORD_EMAIL_LOADING,
  SEND_RESET_PASSWORD_EMAIL_SUCCESS,
  SEND_RESET_PASSWORD_EMAIL_ERROR,
  SAVE_EMAIL,
  REENTER_EMAIL,
} = CONSTANTS.ACTION_TYPES.FORGOT_PASSWORD_ACTIONS;

export const sendResetPasswordEmail = ({ email }) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.AUTHS.FORGOT_PASSWORD,
    data: { email },
    LOADING_ACTION: SEND_RESET_PASSWORD_EMAIL_LOADING,
    SUCCESS_ACTION: SEND_RESET_PASSWORD_EMAIL_SUCCESS,
    ERROR_ACTION: SEND_RESET_PASSWORD_EMAIL_ERROR,
  });

export const saveEmail = ({ email }) => ({
  type: SAVE_EMAIL,
  payload: { email },
});

export const reenterEmail = () => ({
  type: REENTER_EMAIL,
});
