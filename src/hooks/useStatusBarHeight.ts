import { useState, useEffect } from "react";

const useStatusBarHeight = () => {
  const [statusBarHeight, setStatusBarHeight] = useState(0);

  const onMessageEvent = (e: MessageEvent) => {
    e.stopPropagation();
    if (typeof e.data === "string") {
      const height = parseInt(e.data, 10);
      if (!isNaN(height)) {
        setStatusBarHeight(height);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("message", onMessageEvent, { capture: true });
    return () => window.removeEventListener("message", onMessageEvent);
  }, []);

  return statusBarHeight;
};

export default useStatusBarHeight;
