// others
import CONSTANTS from "@/constants";

const {
  FETCH_WEAN_NOTES_LOADING,
  FETCH_WEAN_NOTES_SUCCESS,
  FETCH_WEAN_NOTES_ERROR,
  REFRESH_WEAN_NOTES,
  SHOW_WEAN_NOTES_MODAL,
  FETCH_WEAN_NOTE_DETAIL_LOADING,
  FETCH_WEAN_NOTE_DETAIL_SUCCESS,
  FETCH_WEAN_NOTE_DETAIL_ERROR,
  FETCH_MATERIAL,
} = CONSTANTS.ACTION_TYPES.TRACKING_WEAN_ACTIONS;

export const initialState = {
  weanNotes: [],
  isLoading: false,
  showWeanNotesModal: false,
  material: [],
  modalData: {
    isLoading: false,
    weanNote: {},
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_MATERIAL:
      return {
        ...state,
        material: payload.data.materialList || [],
      };
    case SHOW_WEAN_NOTES_MODAL:
      return {
        ...state,
        showWeanNotesModal: payload,
        modalData: payload
          ? state.modalData
          : {
              isLoading: false,
              weanNote: {},
            },
      };
    case FETCH_WEAN_NOTES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_WEAN_NOTES_SUCCESS:
      return {
        ...state,
        weanNotes: payload.data.weanList,
        isLoading: false,
      };
    case FETCH_WEAN_NOTES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case REFRESH_WEAN_NOTES:
      return {
        ...state,
        shouldRefreshWeanNotes: new Date().getTime(),
      };
    case FETCH_WEAN_NOTE_DETAIL_LOADING: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: true,
        },
      };
    }
    case FETCH_WEAN_NOTE_DETAIL_ERROR: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
        },
      };
    }
    case FETCH_WEAN_NOTE_DETAIL_SUCCESS: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
          weanNote: payload.data.weanList[0] || {},
        },
      };
    }
    default: {
      return state;
    }
  }
};
