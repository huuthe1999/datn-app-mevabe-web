// others
import CONSTANTS from "@/constants";

const {
  FETCH_HEIGHT_NOTES_LOADING,
  FETCH_HEIGHT_NOTES_SUCCESS,
  FETCH_HEIGHT_NOTES_ERROR,
  REFRESH_HEIGHT_NOTES,
  SHOW_HEIGHT_NOTES_MODAL,
  FETCH_HEIGHT_NOTE_DETAIL_LOADING,
  FETCH_HEIGHT_NOTE_DETAIL_SUCCESS,
  FETCH_HEIGHT_NOTE_DETAIL_ERROR,
} = CONSTANTS.ACTION_TYPES.TRACKING_HEIGHT_ACTIONS;

export const initialState = {
  heightNotes: [],
  isLoading: false,
  showHeightNotesModal: false,
  modalData: {
    isLoading: false,
    heightNote: {},
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_HEIGHT_NOTES_MODAL:
      return {
        ...state,
        showHeightNotesModal: payload,
        modalData: payload
          ? state.modalData
          : {
              isLoading: false,
              heightNote: {},
            },
      };
    case FETCH_HEIGHT_NOTES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_HEIGHT_NOTES_SUCCESS:
      return {
        ...state,
        heightNotes: payload.data.notes,
        isLoading: false,
      };
    case FETCH_HEIGHT_NOTES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case REFRESH_HEIGHT_NOTES:
      return {
        ...state,
        shouldRefreshHeightNotes: new Date().getTime(),
      };
    case FETCH_HEIGHT_NOTE_DETAIL_LOADING: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: true,
        },
      };
    }
    case FETCH_HEIGHT_NOTE_DETAIL_ERROR: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
        },
      };
    }
    case FETCH_HEIGHT_NOTE_DETAIL_SUCCESS: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
          heightNote: payload.data.note,
        },
      };
    }
    default: {
      return state;
    }
  }
};
