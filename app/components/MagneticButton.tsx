"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { MouseEvent } from "react";

export default function MagneticButton({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, {
    stiffness: 200,
    damping: 15,
  });

  const springY = useSpring(y, {
    stiffness: 200,
    damping: 15,
  });

  const handleMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();

    const xDistance = event.clientX - (rect.left + rect.width / 2);
    const yDistance = event.clientY - (rect.top + rect.height / 2);

    x.set(xDistance * 0.25);
    y.set(yDistance * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={href}
      style={{
        x: springX,
        y: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
    >
      {children}
    </motion.a>
  );
}