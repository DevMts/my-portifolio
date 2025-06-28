import { useEffect, useState } from "react";

export function useScrollTop() {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    function onScroll() {
      setIsAtTop(window.scrollY <= 0);
    }

    // Verifica ao montar
    onScroll();

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return isAtTop;
}
