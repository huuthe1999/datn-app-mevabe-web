// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

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

export const createHeightNote = ({
  childId,
  data,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.HEIGHT_NOTES.CHILD_ID(childId),
    data,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const updateHeightNote = ({
  noteId,
  data,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "PUT",
    url: CONSTANTS.ENDPOINTS.HEIGHT_NOTES.HEIGHT_NOTE_ID(noteId),
    data,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const deleteHeightNote = ({ noteId, cbSuccess, cbError, cbFinally }) =>
  request({
    method: "DELETE",
    url: CONSTANTS.ENDPOINTS.HEIGHT_NOTES.HEIGHT_NOTE_ID(noteId),
    cbSuccess,
    cbError,
    cbFinally,
  });

export const fetchAllHeightNotes = ({
  childId,
  params,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.HEIGHT_NOTES.ALL_CHILD_ID(childId),
    params,
    LOADING_ACTION: FETCH_HEIGHT_NOTES_LOADING,
    SUCCESS_ACTION: FETCH_HEIGHT_NOTES_SUCCESS,
    ERROR_ACTION: FETCH_HEIGHT_NOTES_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const refreshHeightNotes = () => ({
  type: REFRESH_HEIGHT_NOTES,
});

export const setShowHeightNotesModal = (isShow) => ({
  type: SHOW_HEIGHT_NOTES_MODAL,
  payload: isShow,
});

export const fetchHeightNoteDetail = ({
  noteId,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.HEIGHT_NOTES.HEIGHT_NOTE_ID(noteId),
    LOADING_ACTION: FETCH_HEIGHT_NOTE_DETAIL_LOADING,
    SUCCESS_ACTION: FETCH_HEIGHT_NOTE_DETAIL_SUCCESS,
    ERROR_ACTION: FETCH_HEIGHT_NOTE_DETAIL_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });
