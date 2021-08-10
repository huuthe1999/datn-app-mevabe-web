// others
import CONSTANTS from "@/constants";

const {
  SEND_RESET_PASSWORD_EMAIL_LOADING,
  SEND_RESET_PASSWORD_EMAIL_SUCCESS,
  SEND_RESET_PASSWORD_EMAIL_ERROR,
  SAVE_EMAIL,
  REENTER_EMAIL,
} = CONSTANTS.ACTION_TYPES.FORGOT_PASSWORD_ACTIONS;

export const initialState = {
  isLoading: false,
  isError: false,
  error: {},
  email: "",
  sendEmailSuccess: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SEND_RESET_PASSWORD_EMAIL_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case SEND_RESET_PASSWORD_EMAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        sendEmailSuccess: true,
      };
    case SEND_RESET_PASSWORD_EMAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    case SAVE_EMAIL:
      return {
        ...state,
        email: payload.email,
      };
    case REENTER_EMAIL:
      return initialState;
    default: {
      return state;
    }
  }
};
