// others
import CONSTANTS from "@/constants";

const {
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} = CONSTANTS.ACTION_TYPES.LOGIN_ACTIONS;

export const initialState = {
  isLoading: false,
  isError: false,
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case LOGIN_ERROR:
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
