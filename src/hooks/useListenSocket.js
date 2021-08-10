import { useEffect } from "react";
import useSocket from "./useSocket";

export const useListenSocket = (event, handler) => {
  const { socket } = useSocket();

  // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.

  useEffect(() => {
    socket.on(event, handler);
    return () => {
      socket.off(event, handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event]);
};
