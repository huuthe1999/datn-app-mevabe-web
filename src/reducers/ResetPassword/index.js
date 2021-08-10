// others
import CONSTANTS from "@/constants";

const {
  RESET_PASSWORD_LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_ERROR,
} = CONSTANTS.ACTION_TYPES.RESET_PASSWORD_ACTIONS;

export const initialState = {
  isLoading: false,
  isError: false,
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET_PASSWORD_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case RESET_PASSWORD_ERROR:
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
