// others
import CONSTANTS from "@/constants";

const {
  FETCH_STORY_LIST_LOADING,
  FETCH_STORY_LIST_SUCCESS,
  FETCH_STORY_LIST_ERROR,
  UPLOAD_STORY_LOADING,
  UPLOAD_STORY_SUCCESS,
  UPLOAD_STORY_ERROR,
  SET_SHOW_MODAL,
  LIKE_STORY,
  DISLIKE_STORY,
  GET_LIKERS_SUCCESS,
  GET_LIKERS_LOADING,
  SHOW_LIKER_MODAL,
  SET_LIKER_STORY,
  TRIGGER_FETCH_STORIES,
  UPDATE_LOADING_STORIES,
  RESET_STORY_LIST,
  DETELE_STORY,
  FETCH_STORY_DETAIL,
  FETCH_STORY_DETAIL_LOADING,
} = CONSTANTS.ACTION_TYPES.STORIES_ACTIONS;

export const initialState = {
  storyList: {},
  isLoading: false,
  isError: false,
  error: {},
  showModal: false,
  isLoadingModal: false,
  isErrorModal: false,
  errorModal: {},

  isLoadingLiker: false,
  likers: [],
  showLikerModal: false,
  likerStory: "",
  next: { page: 1, limit: 10 },
  shouldFetchStories: 0,
  fakeStories: [],
  modalData: {
    status: {},
    isLoading: false,
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESET_STORY_LIST:
      return {
        ...state,
        storyList: {},
        next: { page: 1, limit: 10 },
      };
    case UPDATE_LOADING_STORIES:
      return {
        ...state,
        fakeStories: [...Array(payload).keys()].map((item) => ({
          _id: item,
          loading: true,
        })),
      };
    case FETCH_STORY_LIST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_STORY_LIST_SUCCESS: {
      const { status, next, previous, currentPage, ...rest } =
        payload.data.statusList || {};
      return {
        ...state,
        storyList: (status || []).reduce(
          (previous, current) => ({ ...previous, [current._id]: current }),
          state.storyList || {}
        ),
        isLoading: false,
        isError: false,
        next,
        previous,
        currentPage,
        ...rest,
        fakeStories: [],
      };
    }
    case FETCH_STORY_LIST_ERROR:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: payload.error,
        fakeStories: [],
      };
    case SET_SHOW_MODAL:
      return {
        ...state,
        showModal: payload.showModal,
        modalData: payload.showModal
          ? state.modalData
          : { isLoading: false, status: {} },
      };
    case UPLOAD_STORY_LOADING:
      return {
        ...state,
        isLoadingModal: true,
      };
    case UPLOAD_STORY_SUCCESS:
      return {
        ...state,
        isLoadingModal: false,
        storyList: {
          ...state.storyList,
          [payload.data.status._id]: payload.data.status,
        },
      };
    case UPLOAD_STORY_ERROR:
      return {
        ...state,
        isLoadingModal: false,
        isErrorModal: true,
        errorModal: payload.error,
      };
    case LIKE_STORY:
    case DISLIKE_STORY:
      return {
        ...state,
        storyList: {
          ...state.storyList,
          [payload?.data?.status?._id]: payload?.data?.status,
        },
      };
    case GET_LIKERS_SUCCESS:
      return {
        ...state,
        likers: payload.data?.userList?.likeUsers || [],
        isLoadingLiker: false,
      };
    case GET_LIKERS_LOADING:
      return {
        ...state,
        isLoadingLiker: true,
        showLikerModal: true,
      };
    case SHOW_LIKER_MODAL:
      return {
        ...state,
        showLikerModal: payload,
      };
    case SET_LIKER_STORY:
      return {
        ...state,
        likerStory: payload,
      };
    case TRIGGER_FETCH_STORIES:
      return {
        ...state,
        shouldFetchStories: new Date().getTime(),
      };
    case DETELE_STORY: {
      const newStoryList = { ...state.storyList };
      delete newStoryList[payload];
      return {
        ...state,
        storyList: newStoryList,
      };
    }
    case FETCH_STORY_DETAIL:
      return {
        ...state,
        modalData: {
          ...state.modalData,
          status: payload?.data?.status,
          isLoading: false,
        },
      };
    case FETCH_STORY_DETAIL_LOADING:
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: true,
        },
      };
    default: {
      return state;
    }
  }
};
