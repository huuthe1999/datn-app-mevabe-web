// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} = CONSTANTS.ACTION_TYPES.REGISTER_ACTIONS;

export const submitRegister = ({ name, email, phone, password, cbSuccess }) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.AUTHS.SIGNUP,
    data: { name, email, phone, password },
    LOADING_ACTION: REGISTER_LOADING,
    SUCCESS_ACTION: REGISTER_SUCCESS,
    ERROR_ACTION: REGISTER_ERROR,
    cbSuccess,
  });
