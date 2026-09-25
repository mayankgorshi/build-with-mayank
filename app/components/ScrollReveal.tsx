"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type ScrollRevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export default function ScrollReveal({
  children,
  delay = 0,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!ref.current) return;

      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;
      const scrollingUp = currentScrollY < lastScrollY;

      const rect = ref.current.getBoundingClientRect();

      const inViewport =
        rect.top < window.innerHeight * 0.85 &&
        rect.bottom > 0;

      const completelyAbove = rect.bottom < 0;

      const completelyBelow = rect.top > window.innerHeight;

      /*
       * SCROLLING DOWN
       */
      if (scrollingDown) {
        // Entering viewport from below
        if (inViewport) {
          setAnimate(true);
          setVisible(true);
        }

        // Completely passed above the screen
        // Reset so it can animate again later
        if (completelyAbove) {
          setVisible(false);
        }
      }

      /*
       * SCROLLING UP
       */
      if (scrollingUp) {
        // Coming back into viewport from above:
        // show immediately WITHOUT animation
        if (inViewport) {
          setAnimate(false);
          setVisible(true);
        }

        // If completely below screen, prepare it
        // for the next downward reveal
        if (completelyBelow) {
          setVisible(false);
          setAnimate(true);
        }
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        animate={{
          opacity: visible ? 1 : 0,
          y: visible ? 0 : 50,
        }}
        transition={
          animate
            ? {
                duration: 0.8,
                delay,
                ease: "easeOut",
              }
            : {
                duration: 0,
              }
        }
      >
        {children}
      </motion.div>
    </div>
  );
}