// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  FETCH_HANDBOOK_LOADING,
  FETCH_HANDBOOK_SUCCESS,
  FETCH_HANDBOOK_ERROR,
  FETCH_CATEGORIES_LOADING,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  RESET_HANDBOOK_LIST,
} = CONSTANTS.ACTION_TYPES.HANDBOOK_ACTIONS;

export const fetchHandbookList = ({ data, cbSuccess }) =>
  request({
    url: CONSTANTS.ENDPOINTS.GUIDES.BASE,
    method: "GET",
    params: data,
    LOADING_ACTION: FETCH_HANDBOOK_LOADING,
    ERROR_ACTION: FETCH_HANDBOOK_ERROR,
    SUCCESS_ACTION: FETCH_HANDBOOK_SUCCESS,
    cbSuccess,
  });

export const fetchCategoryList = () =>
  request({
    url: CONSTANTS.ENDPOINTS.GUIDES.CATEGORY_ALL,
    method: "GET",
    LOADING_ACTION: FETCH_CATEGORIES_LOADING,
    ERROR_ACTION: FETCH_CATEGORIES_ERROR,
    SUCCESS_ACTION: FETCH_CATEGORIES_SUCCESS,
  });

export const resetHandbookList = () => ({
  type: RESET_HANDBOOK_LIST,
});

export const fetchSuggestion = ({ cbError, cbFinally, cbSuccess }) =>
  request({
    url: CONSTANTS.ENDPOINTS.GUIDES.SUGGESTION,
    method: "GET",
    cbError,
    cbFinally,
    cbSuccess,
  });
