import React from "react";

export const useOtpCounter = (duration) => {
  const [timer, setTimer] = React.useState(duration);
  React.useEffect(() => {
    if (timer <= 0) {
      return;
    }
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearTimeout(interval);
  }, [timer]);
  return timer;
};
