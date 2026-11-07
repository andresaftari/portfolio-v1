import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Reveal } from "./Reveal";
import { eyebrow } from "./styles";

interface SectionHeadingProps {
  label: string;
  title: ReactNode;
  action: ReactNode;
  compact?: boolean;
}

export function SectionHeading({
  label,
  title,
  action,
  compact = false,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex items-end justify-between gap-7 phone:gap-3",
        compact ? "mb-[34px] phone:mb-[22px]" : "mb-[22px] phone:mb-[19px]",
      )}
    >
      <div>
        <span
          className={cn(
            eyebrow,
            "mb-3 block text-[11px] text-muted wide:text-[12px] phone:mb-[9px] phone:text-[8px]",
          )}
        >
          {label}
        </span>
        <h2
          className={cn(
            "font-semibold tracking-[-0.06em] leading-[1.2] phone:tracking-[-0.045em] phone:leading-[1.3]",
            compact
              ? "text-[clamp(20px,2.1vw,31px)] narrow:text-[23px] phone:max-w-[260px] phone:text-[18px]"
              : "text-[clamp(21px,2.35vw,37px)] narrow:text-[24px] phone:text-[20px]",
          )}
        >
          {title}
        </h2>
      </div>
      {action}
    </Reveal>
  );
}
