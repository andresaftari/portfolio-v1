import { cn } from "@/lib/cn";

interface WordmarkProps {
  variant?: "header" | "footer";
  ariaLabel?: string;
}

export function Wordmark({ variant = "header", ariaLabel }: WordmarkProps) {
  return (
    <a
      className={cn(
        "inline-flex min-h-11 items-center font-display leading-none tracking-[-0.4px]",
        variant === "header" ? "text-[24px] phone:text-[22px]" : "text-[21px]",
      )}
      href="#home"
      aria-label={ariaLabel}
    >
      ANDRE
      <span className="ml-[3px] mt-[9px] self-start text-[12px] text-accent">
        ®
      </span>
    </a>
  );
}
