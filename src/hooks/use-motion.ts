"use client";

import { createContext, useContext } from "react";

export interface MotionState {
  enabled: boolean;
  toggle: () => void;
}

export const MotionContext = createContext<MotionState>({
  enabled: true,
  toggle: () => {},
});

export function useMotion(): MotionState {
  return useContext(MotionContext);
}

export function useMotionEnabled(): boolean {
  return useContext(MotionContext).enabled;
}
