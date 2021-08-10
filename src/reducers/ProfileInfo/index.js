// others
import CONSTANTS from "@/constants";

const {
  FETCH_USER_INFO_LOADING,
  FETCH_USER_INFO_SUCCESS,
  FETCH_USER_INFO_ERROR,
  FETCH_USER_CHILDS_LOADING,
  FETCH_USER_CHILDS_SUCCESS,
  FETCH_USER_CHILDS_ERROR,
} = CONSTANTS.ACTION_TYPES.PROFILE_ACTIONS;

export const initialState = {
  userInfo: {},
  childs: [],
  isLoading: false,
  isError: false,
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER_CHILDS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_CHILDS_SUCCESS:
      return {
        ...state,
        childs: payload.data.children || [],
        isLoading: false,
        isError: false,
      };
    case FETCH_USER_CHILDS_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    case FETCH_USER_INFO_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: payload.data.user || {},
        isLoading: false,
        isError: false,
      };
    case FETCH_USER_INFO_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    default: {
      return state;
    }
  }
};
