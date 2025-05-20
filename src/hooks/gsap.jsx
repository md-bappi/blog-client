import gsap from "gsap";
import { useEffect } from "react";

export const useSidebarMoveRight = (item, trig) => {
  useEffect(() => {
    if (trig && item.current) {
      gsap.fromTo(
        item.current,
        {
          x: -300,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    }
  }, [item, trig]);
};

// Sidebar close animation with callback
export const animateSidebarClose = (ref, onComplete) => {
  if (ref.current) {
    gsap.to(ref.current, {
      x: -300,
      opacity: 0,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete,
    });
  }
};
