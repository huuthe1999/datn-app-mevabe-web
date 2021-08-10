import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

export const getUserInfo = ({ cbSuccess, cbError, cbFinally }) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.USERS.ME,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const getAllChildren = ({ cbSuccess, cbError, cbFinally }) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.CHILDS.ALL,
    cbSuccess,
    cbError,
    cbFinally,
  });
