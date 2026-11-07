"use client";

import { MotionConfig, useReducedMotion } from "framer-motion";
import { type ReactNode, useEffect, useMemo, useState } from "react";
import { EASE, MOTION_STORAGE_KEY } from "@/constants/motion";
import { MotionContext } from "@/hooks/use-motion";

export function MotionProvider({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  const [motionOn, setMotionOn] = useState(true);
  const enabled = motionOn && !reduced;

  useEffect(() => {
    try {
      if (localStorage.getItem(MOTION_STORAGE_KEY) === "off")
        setMotionOn(false);
    } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = enabled ? "on" : "off";
  }, [enabled]);

  const value = useMemo(
    () => ({
      enabled,
      toggle: () => {
        const next = !motionOn;
        setMotionOn(next);
        try {
          localStorage.setItem(MOTION_STORAGE_KEY, next ? "on" : "off");
        } catch {}
      },
    }),
    [enabled, motionOn],
  );

  return (
    <MotionContext.Provider value={value}>
      <MotionConfig
        reducedMotion={enabled ? "user" : "always"}
        transition={{ ease: EASE }}
      >
        {children}
      </MotionConfig>
    </MotionContext.Provider>
  );
}
