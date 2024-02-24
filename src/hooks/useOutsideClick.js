import { useEffect, useRef } from "react";

export function useOutsideClick(action, listenCapture = true) {
  const ref = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        action();
      }
    }
    document.addEventListener("click", handleClick, listenCapture);
    return () =>
      document.removeEventListener("click", handleClick, listenCapture);
  }, [action, listenCapture]);
  return { ref };
}
