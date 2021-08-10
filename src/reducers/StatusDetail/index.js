// others
import CONSTANTS from "@/constants";

const {
  FETCH_STORY_DETAIL_LOADING,
  FETCH_STORY_DETAIL_SUCCESS,
  FETCH_STORY_DETAIL_ERROR,
  FETCH_COMMENTS_LOADING,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_ERROR,
  LIKE_STORY,
  DISLIKE_STORY,
  REFRESH_COMMENTS,
  SET_BASE_COMMENT,
  TRIGGER_RELOAD_SUB_COMMENT,
  SHOW_LIKER_MODAL,
  REFRESH_STORY_DETAIL,
} = CONSTANTS.ACTION_TYPES.STATUS_DETAIL_ACTIONS;

export const initialState = {
  isLoading: false,
  isError: false,
  error: {},
  status: {},
  comments: [],
  isLoadingComments: false,
  baseComment: {},
  subComments: {
    commentId: "",
    shouldReload: 0,
  },
  showLikerModal: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STORY_DETAIL_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_STORY_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        status: payload.data.status || {},
      };
    case FETCH_STORY_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
      };
    case FETCH_COMMENTS_LOADING:
      return {
        ...state,
        isLoadingComments: true,
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoadingComments: false,
        isError: false,
        comments: payload.data.comments || [],
      };
    case FETCH_COMMENTS_ERROR:
      return {
        ...state,
        isLoadingComments: false,
        isError: true,
        error: payload.error,
      };
    case LIKE_STORY:
    case DISLIKE_STORY:
      return {
        ...state,
        status: payload.data.status,
      };
    case REFRESH_COMMENTS:
      return {
        ...state,
        shouldRefreshComments: new Date().getTime(),
      };
    case SET_BASE_COMMENT:
      return {
        ...state,
        baseComment: payload,
      };
    case TRIGGER_RELOAD_SUB_COMMENT:
      return {
        ...state,
        subComments: {
          commentId: payload,
          shouldReload: new Date().getTime(),
        },
      };
    case SHOW_LIKER_MODAL:
      return {
        ...state,
        showLikerModal: payload,
      };
    case REFRESH_STORY_DETAIL:
      return {
        ...state,
        shouldRefreshStoryDetail: new Date().getTime(),
      };
    default:
      return state;
  }
};
