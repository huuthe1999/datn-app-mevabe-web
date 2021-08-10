import {
  triggerScrollBotttom,
  updateMessageStatus,
  updateSingleUserSingleMessage,
} from "@/actions/Chat";
import { useListenSocket } from "@/hooks/useListenSocket";
import React from "react";
import { useDispatch } from "react-redux";

const ListenMessage = () => {
  const dispatch = useDispatch();

  useListenSocket("addMessageToClient", (message) => {
    dispatch(
      updateSingleUserSingleMessage({
        targetUser: message.sender?._id,
        message: {
          ...message,
          sender: message.sender?._id,
          _id: message.message_id,
          senderObj: message.sender,
        },
      })
    );

    dispatch(triggerScrollBotttom(message.sender?._id));
  });

  useListenSocket("addMessageToClientCallback", (failedMessage) => {
    dispatch(
      updateMessageStatus({
        targetUser: failedMessage?.recipient,
        messageId: failedMessage?.message_id,
      })
    );
  });

  return <></>;
};

export default ListenMessage;
