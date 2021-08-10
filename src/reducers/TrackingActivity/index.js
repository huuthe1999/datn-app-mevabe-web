// others
import CONSTANTS from "@/constants";

const {
  FETCH_ACTIVITY_NOTES_LOADING,
  FETCH_ACTIVITY_NOTES_SUCCESS,
  FETCH_ACTIVITY_NOTES_ERROR,
  REFRESH_ACTIVITY_NOTES,
  SHOW_ACTIVITY_NOTES_MODAL,
  FETCH_ACTIVITY_NOTE_DETAIL_LOADING,
  FETCH_ACTIVITY_NOTE_DETAIL_SUCCESS,
  FETCH_ACTIVITY_NOTE_DETAIL_ERROR,
} = CONSTANTS.ACTION_TYPES.TRACKING_ACTIVITY_ACTIONS;

export const initialState = {
  activities: [],
  isLoading: false,
  showActivityModal: false,
  modalData: {
    isLoading: false,
    activity: {},
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ACTIVITY_NOTES_MODAL:
      return {
        ...state,
        showActivityModal: payload,
        modalData: payload
          ? state.modalData
          : {
              isLoading: false,
              activity: {},
            },
      };
    case FETCH_ACTIVITY_NOTES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ACTIVITY_NOTES_SUCCESS:
      return {
        ...state,
        activities: payload.data.activityList,
        isLoading: false,
      };
    case FETCH_ACTIVITY_NOTES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case REFRESH_ACTIVITY_NOTES:
      return {
        ...state,
        shouldRefreshActivity: new Date().getTime(),
      };
    case FETCH_ACTIVITY_NOTE_DETAIL_LOADING: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: true,
        },
      };
    }
    case FETCH_ACTIVITY_NOTE_DETAIL_ERROR: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
        },
      };
    }
    case FETCH_ACTIVITY_NOTE_DETAIL_SUCCESS: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
          activity: payload.data.activityList[0] || {},
        },
      };
    }
    default: {
      return state;
    }
  }
};
