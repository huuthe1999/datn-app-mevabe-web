// others
import CONSTANTS from "@/constants";

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

export const initialState = {
  conversations: {},
  messages: {},
  isLoading: false,
  currentUser: {},
  unread: {},
  pagination: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case TRIGGER_SCROLL_BOTTOM: {
      return {
        ...state,
        shouldScrollBottom: new Date().getTime(),
        scrollAt: payload,
      };
    }
    case UPDATE_PAGINATION_DATA: {
      return {
        ...state,
        pagination: { ...state.pagination, ...payload },
      };
    }
    case UPDATE_SERIAL_USER_MESSAGES: {
      return {
        ...state,
        messages: { ...state.messages, ...payload },
      };
    }
    case UPDATE_SINGLE_USER_MESSAGES: {
      const { targetUser, messages } = payload;
      const currentMessages = state.messages[targetUser] || [];
      const currentMessagesId = currentMessages.map(({ _id }) => _id);
      return {
        ...state,
        messages: {
          ...state.messages,
          [targetUser]: [
            ...messages.filter(({ _id }) => !currentMessagesId.includes(_id)),
            ...currentMessages,
          ],
        },
      };
    }
    case UPDATE_SINGLE_USER_SINGLE_MESSAGE: {
      const { targetUser, message } = payload;
      const { senderObj, ...messageObj } = message;

      let conversationUpdate = {};
      if (senderObj && !state.conversations[senderObj?._id]) {
        conversationUpdate = {
          [senderObj?._id]: senderObj,
        };
      }

      let unreadUpdate = {};
      if (senderObj && state.currentUser?._id !== senderObj?._id) {
        unreadUpdate = {
          [senderObj?._id]: (state.unread[senderObj?._id] || 0) + 1,
        };
      }

      return {
        ...state,
        conversations: {
          ...state.conversations,
          ...conversationUpdate,
        },
        unread: {
          ...state.unread,
          ...unreadUpdate,
        },
        messages: {
          ...state.messages,
          [targetUser]: [...(state.messages[targetUser] || []), messageObj],
        },
      };
    }
    case UPDATE_MESSAGE_STATUS: {
      return {
        ...state,
        messages: {
          ...state.messages,
          [payload.targetUser]: (state.messages[payload.targetUser] || []).map(
            (mes) =>
              mes?.message_id === payload.messageId
                ? { ...mes, isFail: true }
                : mes
          ),
        },
      };
    }
    case SET_CURRENT_CONVERSATION:
      return {
        ...state,
        currentUser: payload,
        conversations: state.conversations[payload._id]
          ? state.conversations
          : { ...state.conversations, [payload._id]: payload },
        unread: {
          ...state.unread,
          [payload._id]: 0,
        },
      };
    case FETCH_CONVERSATIONS_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case UPDATE_CONVERSATION:
      return {
        ...state,
        conversations: { ...state.conversations, ...payload },
        isLoading: false,
      };
    case FETCH_CONVERSATIONS_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default: {
      return state;
    }
  }
};
