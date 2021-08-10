// others
import CONSTANTS from "@/constants";

const {
  FETCH_MILK_NOTES_LOADING,
  FETCH_MILK_NOTES_SUCCESS,
  FETCH_MILK_NOTES_ERROR,
  REFRESH_MILK_NOTES,
  SHOW_MILK_NOTES_MODAL,
  FETCH_MILK_NOTE_DETAIL_LOADING,
  FETCH_MILK_NOTE_DETAIL_SUCCESS,
  FETCH_MILK_NOTE_DETAIL_ERROR,
} = CONSTANTS.ACTION_TYPES.TRACKING_MILK_ACTIONS;

export const initialState = {
  milkNotes: [],
  isLoading: false,
  showMilkNotesModal: false,
  modalData: {
    isLoading: false,
    milkNote: {},
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_MILK_NOTES_MODAL:
      return {
        ...state,
        showMilkNotesModal: payload,
        modalData: payload
          ? state.modalData
          : {
              isLoading: false,
              milkNote: {},
            },
      };
    case FETCH_MILK_NOTES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_MILK_NOTES_SUCCESS:
      return {
        ...state,
        milkNotes: payload.data.milkNotes,
        isLoading: false,
      };
    case FETCH_MILK_NOTES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case REFRESH_MILK_NOTES:
      return {
        ...state,
        shouldRefreshMilkNotes: new Date().getTime(),
      };
    case FETCH_MILK_NOTE_DETAIL_LOADING: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: true,
        },
      };
    }
    case FETCH_MILK_NOTE_DETAIL_ERROR: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
        },
      };
    }
    case FETCH_MILK_NOTE_DETAIL_SUCCESS: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
          milkNote: payload.data.milkNote,
        },
      };
    }
    default: {
      return state;
    }
  }
};
