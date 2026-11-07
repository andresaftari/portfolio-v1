import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

interface IconButtonProps extends ComponentProps<"button"> {
  bordered?: boolean;
}

export function IconButton({
  bordered = true,
  className,
  children,
  type = "button",
  ...props
}: IconButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex size-11 items-center justify-center transition-colors duration-200 hover:bg-[#272020]",
        bordered && "border border-line",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
