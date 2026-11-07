import { ChevronLeft, ChevronRight } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";
import { cn } from "@/lib/cn";
import type { RenderMode } from "@/types/project";

interface RenderControlsProps {
  modes: [RenderMode, string][];
  activeMode: RenderMode | undefined;
  onMode: (mode: RenderMode) => void;
  shot: number;
  shotCount: number;
  onShot: (shot: number) => void;
}

export function RenderControls({
  modes,
  activeMode,
  onMode,
  shot,
  shotCount,
  onShot,
}: RenderControlsProps) {
  return (
    <div className="flex items-center justify-between gap-[10px] border-y border-line px-5 py-3 phone:flex-wrap phone:px-3 phone:py-[10px]">
      <fieldset
        className="flex gap-2 phone:w-full phone:flex-wrap phone:gap-1.5"
        aria-label="Render stage"
      >
        {modes.map(([mode, label]) => (
          <button
            type="button"
            key={mode}
            className={cn(
              "min-h-11 border px-4 py-[10px] text-[11px] phone:flex-[1_1_26%] phone:px-3 phone:text-[10px]",
              activeMode === mode
                ? "border-accent bg-button-red"
                : "border-line",
            )}
            onClick={() => onMode(mode)}
            aria-pressed={activeMode === mode}
          >
            {label}
          </button>
        ))}
      </fieldset>
      {shotCount > 1 && (
        <div className="flex items-center gap-3 phone:w-full phone:justify-center phone:gap-5">
          <IconButton
            aria-label="Previous shot"
            onClick={() => onShot((shot - 1 + shotCount) % shotCount)}
          >
            <ChevronLeft />
          </IconButton>
          <span className="whitespace-nowrap text-[9px]">
            SHOT {shot + 1} / {shotCount}
          </span>
          <IconButton
            aria-label="Next shot"
            onClick={() => onShot((shot + 1) % shotCount)}
          >
            <ChevronRight />
          </IconButton>
        </div>
      )}
    </div>
  );
}
