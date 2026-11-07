"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useMotionEnabled } from "@/hooks/use-motion";

export function ReadingProgress() {
  const enabled = useMotionEnabled();
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 28,
    restDelta: 0.001,
  });
  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[150] h-0.5 origin-left bg-accent"
      style={{ scaleX: enabled ? progress : scrollYProgress }}
    />
  );
}
