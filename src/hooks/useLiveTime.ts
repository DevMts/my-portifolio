// hooks/useLiveTime.ts
import { useEffect, useState } from "react";

export function useLiveTime(updateEvery = 60000) {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const now = new Date();
    const delay = (60 - now.getSeconds()) * 1000;

    const timeout = setTimeout(() => {
      setTime(new Date());
      const interval = setInterval(() => setTime(new Date()), updateEvery);
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [updateEvery]);

  return time;
}
