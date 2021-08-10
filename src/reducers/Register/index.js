// others
import CONSTANTS from "@/constants";

const {
  REGISTER_LOADING,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} = CONSTANTS.ACTION_TYPES.REGISTER_ACTIONS;

export const initialState = {
  isLoading: false,
  isError: false,
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
      };
    case REGISTER_ERROR:
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
