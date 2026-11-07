import { Play } from "lucide-react";
import { cn } from "@/lib/cn";

interface PlayCircleProps {
  size: number;
  className?: string;
}

/** Circular play badge. Size classes are supplied by the caller. */
export function PlayCircle({ size, className }: PlayCircleProps) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full border border-accent text-ink transition-colors duration-300",
        className,
      )}
    >
      <Play size={size} fill="currentColor" />
    </span>
  );
}
