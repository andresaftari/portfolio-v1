"use client";

import { type RefObject, useEffect } from "react";

const FOCUSABLE = "button, a[href], input, select, textarea, iframe";

/** Locks page scroll, traps Tab inside the dialog, closes on Escape and restores focus. */
export function useDialogBehavior(
  ref: RefObject<HTMLElement | null>,
  onClose: () => void,
): void {
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    ref.current?.focus();

    const listener = (e: KeyboardEvent): void => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !ref.current) return;
      const nodes = [
        ...ref.current.querySelectorAll<HTMLElement>(FOCUSABLE),
      ].filter(
        (n) => !(n as HTMLButtonElement).disabled && n.getClientRects().length,
      );
      const first = nodes[0];
      const last = nodes.at(-1);
      const current = document.activeElement;
      if (e.shiftKey && (current === first || current === ref.current)) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && current === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    window.addEventListener("keydown", listener);
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", listener);
      previous?.focus();
    };
  }, [ref, onClose]);
}
