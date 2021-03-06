import { useState, useEffect, useCallback } from "react";

// See: https://usehooks-typescript.com/react-hook/use-event-listener
import { useEventListener } from "./useEventListener";

const useElementSize = (elementRef) => {
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  // Prevent too many rendering using useCallback
  const updateSize = useCallback(() => {
    const node = elementRef?.current;
    if (node) {
      setSize({
        width: node.clientWidth || 0,
        height: node.clientHeight || 0,
      });
    }
  }, [elementRef]);

  // Initial size on mount
  useEffect(() => {
    updateSize();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEventListener("resize", updateSize);

  return size;
};

export default useElementSize;
