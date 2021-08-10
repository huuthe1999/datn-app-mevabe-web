// others
import CONSTANTS from "@/constants";

const {
  FETCH_DETAIL_HANDBOOK_LOADING,
  FETCH_DETAIL_HANDBOOK_SUCCESS,
  FETCH_DETAIL_HANDBOOK_ERROR,
} = CONSTANTS.ACTION_TYPES.DETAIL_HANDBOOK_ACTIONS;

export const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_DETAIL_HANDBOOK_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_DETAIL_HANDBOOK_SUCCESS:
      return {
        ...state,
        blog: payload.data.guide,
        isLoading: false,
        isError: false,
      };
    case FETCH_DETAIL_HANDBOOK_ERROR:
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
