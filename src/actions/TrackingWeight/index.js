// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

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

export const createWeightNote = ({
  childId,
  data,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.WEIGHT_NOTES.CHILD_ID(childId),
    data,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const updateWeightNote = ({
  noteId,
  data,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "PUT",
    url: CONSTANTS.ENDPOINTS.WEIGHT_NOTES.WEIGHT_NOTE_ID(noteId),
    data,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const deleteWeightNote = ({ noteId, cbSuccess, cbError, cbFinally }) =>
  request({
    method: "DELETE",
    url: CONSTANTS.ENDPOINTS.WEIGHT_NOTES.WEIGHT_NOTE_ID(noteId),
    cbSuccess,
    cbError,
    cbFinally,
  });

export const fetchAllWeightNotes = ({
  childId,
  params,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.WEIGHT_NOTES.ALL_CHILD_ID(childId),
    params,
    LOADING_ACTION: FETCH_WEIGHT_NOTES_LOADING,
    SUCCESS_ACTION: FETCH_WEIGHT_NOTES_SUCCESS,
    ERROR_ACTION: FETCH_WEIGHT_NOTES_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const refreshWeightNotes = () => ({
  type: REFRESH_WEIGHT_NOTES,
});

export const setShowWeightNotesModal = (isShow) => ({
  type: SHOW_WEIGHT_NOTES_MODAL,
  payload: isShow,
});

export const fetchWeightNoteDetail = ({
  noteId,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.WEIGHT_NOTES.WEIGHT_NOTE_ID(noteId),
    LOADING_ACTION: FETCH_WEIGHT_NOTE_DETAIL_LOADING,
    SUCCESS_ACTION: FETCH_WEIGHT_NOTE_DETAIL_SUCCESS,
    ERROR_ACTION: FETCH_WEIGHT_NOTE_DETAIL_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });
