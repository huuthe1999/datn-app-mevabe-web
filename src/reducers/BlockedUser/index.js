// others
import CONSTANTS from "@/constants";

const {
  FETCH_BLOCKED_USERS_LOADING,
  FETCH_BLOCKED_USERS_SUCCESS,
  FETCH_BLOCKED_USERS_ERROR,
} = CONSTANTS.ACTION_TYPES.BLOCKED_USER_ACTIONS;

export const initialState = {
  blockedUsers: [],
  isLoading: false,
  isError: false,
  error: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_BLOCKED_USERS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_BLOCKED_USERS_SUCCESS:
      return {
        ...state,
        blockedUsers: payload.data.userList,
        isLoading: false,
        isError: false,
      };
    case FETCH_BLOCKED_USERS_ERROR:
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
