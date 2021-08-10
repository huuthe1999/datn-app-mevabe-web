// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

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

export const fetchVaccinShot = ({
  childId,
  shotId,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.VACCINATIONS.SHOT_CHILDID_SHOTID(childId, shotId),
    LOADING_ACTION: FETCH_VACCIN_SHOT_LOADING,
    SUCCESS_ACTION: FETCH_VACCIN_SHOT_SUCCESS,
    ERROR_ACTION: FETCH_VACCIN_SHOT_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const updateVaccinShot = ({
  shotId,
  childId,
  data,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "PUT",
    url: CONSTANTS.ENDPOINTS.VACCINATIONS.SHOT_CHILD_CHILDID_SHOTID(
      childId,
      shotId
    ),
    data,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const fetchAllVaccinNotes = ({
  childId,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.VACCINATIONS.ALL_CHILD_ID(childId),
    LOADING_ACTION: FETCH_VACCIN_NOTES_LOADING,
    SUCCESS_ACTION: FETCH_VACCIN_NOTES_SUCCESS,
    ERROR_ACTION: FETCH_VACCIN_NOTES_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const refreshVaccinNotes = () => ({
  type: REFRESH_VACCIN_NOTES,
});

export const setShowVaccinModal = (isShow) => ({
  type: SHOW_VACCIN_NOTES_MODAL,
  payload: isShow,
});
