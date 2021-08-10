// others
import CONSTANTS from "@/constants";

const {
  FETCH_VACCIN_NOTES_LOADING,
  FETCH_VACCIN_NOTES_SUCCESS,
  FETCH_VACCIN_NOTES_ERROR,
  REFRESH_VACCIN_NOTES,
  SHOW_VACCIN_NOTES_MODAL,
  FETCH_VACCIN_SHOT_LOADING,
  FETCH_VACCIN_SHOT_SUCCESS,
  FETCH_VACCIN_SHOT_ERROR,
} = CONSTANTS.ACTION_TYPES.TRACKING_VACCIN_ACTIONS;

export const initialState = {
  vaccinations: [],
  isLoading: false,
  showVaccinNotesModal: false,
  modalData: {
    isLoading: false,
    vaccinShot: {},
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_VACCIN_NOTES_MODAL:
      return {
        ...state,
        showVaccinNotesModal: payload,
        modalData: payload
          ? state.modalData
          : {
              isLoading: false,
              vaccinShot: {},
            },
      };
    case FETCH_VACCIN_NOTES_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_VACCIN_NOTES_SUCCESS:
      return {
        ...state,
        vaccinations: payload.data.vaccinations,
        isLoading: false,
      };
    case FETCH_VACCIN_NOTES_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case REFRESH_VACCIN_NOTES:
      return {
        ...state,
        shouldRefreshVaccinNotes: new Date().getTime(),
      };
    case FETCH_VACCIN_SHOT_LOADING: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: true,
        },
      };
    }
    case FETCH_VACCIN_SHOT_ERROR: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
        },
      };
    }
    case FETCH_VACCIN_SHOT_SUCCESS: {
      return {
        ...state,
        modalData: {
          ...state.modalData,
          isLoading: false,
          vaccinShot: payload.data.vaccinationShot,
        },
      };
    }
    default: {
      return state;
    }
  }
};
