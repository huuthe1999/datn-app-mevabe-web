// others
import CONSTANTS from "@/constants";

const {
  FETCH_STD_HEIGHT_MAX_SUCCESS,
  FETCH_STD_HEIGHT_MIN_SUCCESS,
  FETCH_STD_WEIGHT_MAX_SUCCESS,
  FETCH_STD_WEIGHT_MIN_SUCCESS,
} = CONSTANTS.ACTION_TYPES.ACTIVITY_TRACK_ACTIONS;

export const initialState = {
  standardHeightMin: [],
  standardHeightMax: [],
  standardWeightMin: [],
  standardWeightMax: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_STD_HEIGHT_MAX_SUCCESS:
      return {
        ...state,
        isLoading: false,
        standardHeightMax: payload.data.standard_notes,
      };
    case FETCH_STD_HEIGHT_MIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        standardHeightMin: payload.data.standard_notes,
      };
    case FETCH_STD_WEIGHT_MAX_SUCCESS:
      return {
        ...state,
        isLoading: false,
        standardWeightMax: payload.data.standard_notes,
      };
    case FETCH_STD_WEIGHT_MIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        standardWeightMin: payload.data.standard_notes,
      };
    default: {
      return state;
    }
  }
};
