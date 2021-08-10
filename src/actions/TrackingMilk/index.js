// others
import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

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

export const createMilkNote = ({
  childId,
  data,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "POST",
    url: CONSTANTS.ENDPOINTS.MILK_NOTES.CHILD_ID(childId),
    data,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const updateMilkNote = ({
  noteId,
  data,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "PUT",
    url: CONSTANTS.ENDPOINTS.MILK_NOTES.MILK_NOTE_ID(noteId),
    data,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const deleteMilkNote = ({ noteId, cbSuccess, cbError, cbFinally }) =>
  request({
    method: "DELETE",
    url: CONSTANTS.ENDPOINTS.MILK_NOTES.MILK_NOTE_ID(noteId),
    cbSuccess,
    cbError,
    cbFinally,
  });

export const fetchAllMilkNotes = ({
  childId,
  params,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.MILK_NOTES.ALL_CHILD_ID(childId),
    params,
    LOADING_ACTION: FETCH_MILK_NOTES_LOADING,
    SUCCESS_ACTION: FETCH_MILK_NOTES_SUCCESS,
    ERROR_ACTION: FETCH_MILK_NOTES_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });

export const refreshMilkNotes = () => ({
  type: REFRESH_MILK_NOTES,
});

export const setShowMilkNotesModal = (isShow) => ({
  type: SHOW_MILK_NOTES_MODAL,
  payload: isShow,
});

export const fetchMilkNoteDetail = ({
  noteId,
  cbSuccess,
  cbError,
  cbFinally,
}) =>
  request({
    method: "GET",
    url: CONSTANTS.ENDPOINTS.MILK_NOTES.MILK_NOTE_ID(noteId),
    LOADING_ACTION: FETCH_MILK_NOTE_DETAIL_LOADING,
    SUCCESS_ACTION: FETCH_MILK_NOTE_DETAIL_SUCCESS,
    ERROR_ACTION: FETCH_MILK_NOTE_DETAIL_ERROR,
    cbSuccess,
    cbError,
    cbFinally,
  });
