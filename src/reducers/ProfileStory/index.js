// others
import CONSTANTS from "@/constants";

const {
  FETCH_PROFILE_STORY_LOADING,
  FETCH_PROFILE_STORY_SUCCESS,
  FETCH_PROFILE_STORY_ERROR,
  SHOW_STORY_MODAL,
  UPDATE_MODAL_DATA,
  DELETE_STORY,
} = CONSTANTS.ACTION_TYPES.PROFILE_STORY_ACTIONS;
const { LIKE_STORY, DISLIKE_STORY, UPLOAD_STORY_SUCCESS } =
  CONSTANTS.ACTION_TYPES.STORIES_ACTIONS;

export const initialState = {
  storyList: {},
  isLoading: false,
  showStoryModal: false,
  modalData: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case DELETE_STORY: {
      const newStoryList = { ...state.storyList };
      delete newStoryList[payload];
      return {
        ...state,
        storyList: newStoryList,
      };
    }

    case UPDATE_MODAL_DATA:
      return {
        ...state,
        modalData: payload,
      };
    case SHOW_STORY_MODAL:
      return {
        ...state,
        showStoryModal: payload,
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
    case FETCH_PROFILE_STORY_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_PROFILE_STORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        storyList: (payload.data.statusList.status || []).reduce(
          (previous, current) => ({ ...previous, [current._id]: current }),
          {}
        ),
      };
    case FETCH_PROFILE_STORY_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case UPLOAD_STORY_SUCCESS:
      return {
        ...state,
        storyList: {
          ...state.storyList,
          [payload.data.status._id]: payload.data.status,
        },
      };
    default: {
      return state;
    }
  }
};
