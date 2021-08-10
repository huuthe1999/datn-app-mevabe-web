// others
import CONSTANTS from "@/constants";

const {
  FETCH_HANDBOOK_LOADING,
  FETCH_HANDBOOK_SUCCESS,
  FETCH_HANDBOOK_ERROR,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_LOADING,
  FETCH_CATEGORIES_ERROR,
  RESET_HANDBOOK_LIST,
} = CONSTANTS.ACTION_TYPES.HANDBOOK_ACTIONS;

export const initialState = {
  categories: [],
  guides: [],
  isLoading: false,
  isError: false,
  error: {},
  isLoadingCate: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_HANDBOOK_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_HANDBOOK_SUCCESS: {
      const { data, ...res } = payload.data;
      return {
        ...state,
        isLoading: false,
        isError: false,
        guides: payload.data.data || [],
        ...res,
      };
    }
    case FETCH_HANDBOOK_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        categories: payload.data.categories || [],
        isLoadingCate: false,
      };
    case RESET_HANDBOOK_LIST:
      return {
        ...state,
        guides: [],
      };
    case FETCH_CATEGORIES_LOADING:
      return {
        ...state,
        isLoadingCate: true,
      };
    case FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        isLoadingCate: false,
        isError: true,
        error: payload.error,
      };
    default: {
      return state;
    }
  }
};
