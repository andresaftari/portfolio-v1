"use client";

import { type HTMLMotionProps, motion, useSpring } from "framer-motion";
import { useMotionEnabled } from "@/hooks/use-motion";

export function Magnetic({
  children,
  className,
  ...props
}: HTMLMotionProps<"a">) {
  const enabled = useMotionEnabled();
  const x = useSpring(0, { stiffness: 220, damping: 20 });
  const y = useSpring(0, { stiffness: 220, damping: 20 });
  return (
    <motion.a
      className={className}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (!enabled || e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.12);
        y.set((e.clientY - r.top - r.height / 2) * 0.2);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
