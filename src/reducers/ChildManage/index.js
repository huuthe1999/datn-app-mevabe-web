import CONSTANTS from "@/constants";
import { SCREEN_STATUS } from "@/dataSources/ChildManage";
import { initialChildInfo } from "@/mocks/ChildManage";

const {
  FETCH_CHILD_DETAIL_LOADING,
  FETCH_CHILD_DETAIL_SUCCESS,
  FETCH_CHILD_DETAIL_ERROR,
  UPDATE_CHILD_DETAIL,
  ADD_CHILD,
  UPDATE_SCREEN_MODE,
  SUBMIT_CHILD_LOADING,
  SUBMIT_CHILD_SUCCESS,
  SUBMIT_CHILD_ERROR,
} = CONSTANTS.ACTION_TYPES.CHILD_MANAGE_ACTIONS;

export const initialState = {
  childInfo: initialChildInfo,
  isLoading: false,
  isError: false,
  error: {},
  screenMode: SCREEN_STATUS.REGISTER,
  isLoadingSubmit: false,
};

const getFirstName = (name = "") => {
  const splitedName = name.split(" ");
  return splitedName[splitedName.length - 1] || "";
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CHILD_DETAIL_LOADING:
      return {
        ...state,
        isLoading: payload,
      };
    case FETCH_CHILD_DETAIL_SUCCESS:
      return {
        ...state,
        childInfo: {
          ...payload.data.child,
          displayAvatar: payload.data.child?.avatar,
          displayCover: payload.data.child?.avatar_background,
          displayFirstName: getFirstName(
            payload.data.child?.name
          )[0].toUpperCase(),
        },
        isLoading: false,
        isError: false,
      };
    case FETCH_CHILD_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    case UPDATE_CHILD_DETAIL:
      return {
        ...state,
        childInfo: { ...state.childInfo, ...payload },
      };
    case ADD_CHILD:
      return {
        ...state,
        childInfo: initialChildInfo,
      };
    case UPDATE_SCREEN_MODE:
      return {
        ...state,
        screenMode: payload,
      };
    case SUBMIT_CHILD_LOADING:
      return {
        ...state,
        isLoadingSubmit: true,
      };
    case SUBMIT_CHILD_SUCCESS:
      return {
        ...state,
        isLoadingSubmit: false,
        isError: false,
      };
    case SUBMIT_CHILD_ERROR:
      return {
        ...state,
        isLoadingSubmit: false,
        isError: true,
        error: payload.error,
      };
    default: {
      return state;
    }
  }
};
