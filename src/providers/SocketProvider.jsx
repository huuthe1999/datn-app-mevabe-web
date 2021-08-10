// libs
import React, { useEffect, useState } from "react";
// others
import { socketContext } from "@/contexts";
import { io } from "socket.io-client";
import { socketURL } from "@/configs/api";
import { useAuth, useRouter } from "@/hooks";
import ListenMessageGlobal from "@/components/ListenMessageGlobal";
import CONSTANTS from "@/constants";

const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState(io(socketURL, { upgrade: false }));
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setSocket((socket) =>
        socket.connect().emit("joinUser", { ...user, userId: user?._id })
      );
    } else {
      setSocket((socket) => socket.disconnect());
    }

    return () => {
      setSocket((socket) => socket.disconnect());
    };
  }, [user]);

  return (
    <socketContext.Provider value={{ socket, setSocket }}>
      {children}
      {router.pathname !== CONSTANTS.ROUTERS.CHAT && <ListenMessageGlobal />}
    </socketContext.Provider>
  );
};

export default SocketProvider;
