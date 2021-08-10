import { useRouter } from "@/hooks";
import { useListenSocket } from "@/hooks/useListenSocket";
import { notification } from "antd";
import React from "react";
import MessageNoti from "../MessageNoti";

const ListenMessageGlobal = () => {
  const router = useRouter();

  useListenSocket("addMessageToClient", (message) => {
    notification.open({
      description: <MessageNoti {...message} router={router} />,
      placement: "bottomLeft",
    });
  });

  return <></>;
};

export default ListenMessageGlobal;
