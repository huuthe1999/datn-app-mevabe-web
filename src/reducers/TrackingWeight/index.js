// others
import CONSTANTS from "@/constants";

const {
  FETCH_WEIGHT_NOTES_LOADING,
  FETCH_WEIGHT_NOTES_SUCCESS,
  FETCH_WEIGHT_NOTES_ERROR,
  REFRESH_WEIGHT_NOTES,
  SHOW_WEIGHT_NOTES_MODAL,
  FETCH_WEIGHT_NOTE_DETAIL_LOADING,
  FETCH_WEIGHT_NOTE_DETAIL_SUCCESS,
  FETCH_WEIGHT_NOTE_DETAIL_ERROR,
} = CONSTANTS.ACTION_TYPES.TRACKING_WEIGHT_ACTIONS;

export const initialState = {
  weightNotes: [],
  isLoading: false,
  showWeightNotesModal: false,
  modalData: {
    isLoading: false,
    weightNote: {},
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_WEIGHT_NOTES_MODAL:
      return {
        ...state,
        showWeightNotesModal: payload,
        modalData: payload
          ? state.modalData
          : {
              isLoading: false,
              weightNote: {},
            },
      };
    case FETCH_WEIGHT_NOTES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_WEIGHT_NOTES_SUCCESS:
      return {
        ...state,
        weightNotes: payload.data.notes,
        isLoading: false,
      };
    case FETCH_WEIGHT_NOTES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case REFRESH_WEIGHT_NOTES:
      return {
        ...state,
        shouldRefreshWeightNotes: new Date().getTime(),
      };
    case FETCH_WEIGHT_NOTE_DETAIL_LOADING: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: true,
        },
      };
    }
    case FETCH_WEIGHT_NOTE_DETAIL_ERROR: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
        },
      };
    }
    case FETCH_WEIGHT_NOTE_DETAIL_SUCCESS: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
          weightNote: payload.data.note,
        },
      };
    }
    default: {
      return state;
    }
  }
};
