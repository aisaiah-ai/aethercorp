"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[80] h-[2px] origin-left"
      style={{
        scaleX,
        background:
          "linear-gradient(90deg, rgba(124,92,255,0) 0%, #7c5cff 40%, #00e1ff 100%)",
        boxShadow: "0 0 18px rgba(124, 92, 255, 0.6)",
      }}
      aria-hidden
    />
  );
}
