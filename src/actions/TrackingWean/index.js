// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

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

export const createWeanNote = ({ data, cbSuccess, cbError, cbFinally }) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.WEANS.BASE,
    data,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const updateWeanNote = ({
  weanId,
  data,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "PUT",
    url: CONSTANTS.ENDPOINTS.WEANS.WEAN_ID(weanId),
    data,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const deleteWeanNote = ({ weanId, cbSuccess, cbError, cbFinally }) =>
  request({
    method: "DELETE",
    url: CONSTANTS.ENDPOINTS.WEANS.WEAN_ID(weanId),
    cbSuccess,
    cbError,
    cbFinally,
  });

export const fetchAllWeanNotes = ({ childId, cbSuccess, cbError, cbFinally }) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.WEANS.BASE,
    params: { childId },
    LOADING_ACTION: FETCH_WEAN_NOTES_LOADING,
    SUCCESS_ACTION: FETCH_WEAN_NOTES_SUCCESS,
    ERROR_ACTION: FETCH_WEAN_NOTES_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const refreshWeanNotes = () => ({
  type: REFRESH_WEAN_NOTES,
});

export const setShowWeanNotesModal = (isShow) => ({
  type: SHOW_WEAN_NOTES_MODAL,
  payload: isShow,
});

export const fetchWeanNoteDetail = ({
  weanId,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.WEANS.BASE,
    params: { weanId },
    LOADING_ACTION: FETCH_WEAN_NOTE_DETAIL_LOADING,
    SUCCESS_ACTION: FETCH_WEAN_NOTE_DETAIL_SUCCESS,
    ERROR_ACTION: FETCH_WEAN_NOTE_DETAIL_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const fetchMaterial = () =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.WEANS.MATERIAL,
    SUCCESS_ACTION: FETCH_MATERIAL,
  });
