import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.classList.add("visible");
            // Add visible to all reveal children
            for (const child of el.querySelectorAll<HTMLElement>(".reveal")) {
              child.classList.add("visible");
            }
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" },
    );

    const container = ref.current;
    if (container) {
      observer.observe(container);
      for (const el of container.querySelectorAll<HTMLElement>(".reveal")) {
        observer.observe(el);
      }
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}
