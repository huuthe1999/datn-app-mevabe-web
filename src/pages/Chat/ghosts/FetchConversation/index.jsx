// libs
import {
  fetchConversations,
  setCurrentConversation,
  updateConversation,
  updateSerialUserMessages,
} from "@/actions/Chat";
import { useRouter } from "@/hooks";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FetchConversation = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const { targetUser } = router.location.state || {};

  const { isLoading, conversations } = useSelector(
    (state) => state.CHAT_REDUCER
  );

  useEffect(() => {
    dispatch(
      fetchConversations({
        cbSuccess: ({ conversations = [] }) => {
          let lastMessagesData = {};
          let conversationsData = {};

          conversations.forEach(({ lastMessage, recipient }) => {
            lastMessagesData = {
              ...lastMessagesData,
              [recipient?._id]: [lastMessage],
            };
            conversationsData = {
              ...conversationsData,
              [recipient?._id]: recipient,
            };
          });

          dispatch(updateConversation(conversationsData));
          dispatch(updateSerialUserMessages(lastMessagesData));
        },
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) return;
    if (targetUser) {
      dispatch(setCurrentConversation(targetUser));
    } else if (Object.values(conversations).length) {
      dispatch(setCurrentConversation(Object.values(conversations)[0]));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, targetUser, isLoading]);

  return <></>;
};

export default FetchConversation;
