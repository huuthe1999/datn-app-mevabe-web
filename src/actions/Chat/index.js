import CONSTANTS from "@/constants";
import { request } from "@/restAPI";

const {
  FETCH_CONVERSATIONS_LOADING,
  FETCH_CONVERSATIONS_ERROR,
  SET_CURRENT_CONVERSATION,
  UPDATE_CONVERSATION,
  UPDATE_MESSAGE_STATUS,
  UPDATE_PAGINATION_DATA,
  UPDATE_SINGLE_USER_MESSAGES,
  UPDATE_SERIAL_USER_MESSAGES,
  UPDATE_SINGLE_USER_SINGLE_MESSAGE,
  TRIGGER_SCROLL_BOTTOM,
} = CONSTANTS.ACTION_TYPES.CHAT_ACTIONS;

export const updateMessageStatus = ({ messageId, targetUser }) => ({
  type: UPDATE_MESSAGE_STATUS,
  payload: { messageId, targetUser },
});

export const updateConversation = (payload) => ({
  type: UPDATE_CONVERSATION,
  payload,
});

export const fetchConversations = ({ data, cbSuccess }) =>
  request({
    url: CONSTANTS.ENDPOINTS.MESSAGES.CONVERSATIONS,
    method: "GET",
    params: data,
    LOADING_ACTION: FETCH_CONVERSATIONS_LOADING,
    ERROR_ACTION: FETCH_CONVERSATIONS_ERROR,
    cbSuccess,
  });

export const fetchMessages = ({ userId, data, cbSuccess, cbFinally }) =>
  request({
    url: CONSTANTS.ENDPOINTS.MESSAGES.USERID(userId),
    method: "GET",
    params: data,
    cbSuccess,
    cbFinally,
  });

export const setCurrentConversation = (userId) => ({
  type: SET_CURRENT_CONVERSATION,
  payload: userId,
});

export const updateSingleUserMessages = ({ targetUser, messages }) => ({
  type: UPDATE_SINGLE_USER_MESSAGES,
  payload: { targetUser, messages },
});

export const updateSingleUserSingleMessage = ({ targetUser, message }) => ({
  type: UPDATE_SINGLE_USER_SINGLE_MESSAGE,
  payload: { targetUser, message },
});

export const updateSerialUserMessages = (payload) => ({
  type: UPDATE_SERIAL_USER_MESSAGES,
  payload,
});

export const updatePaginationData = (payload) => ({
  type: UPDATE_PAGINATION_DATA,
  payload,
});

export const triggerScrollBotttom = (senderId) => ({
  type: TRIGGER_SCROLL_BOTTOM,
  payload: senderId,
});
