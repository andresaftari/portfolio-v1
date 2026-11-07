"use client";

import { ArrowDown } from "lucide-react";
import { PlayCircle } from "@/components/ui/PlayCircle";
import { featuredProjects } from "@/constants/projects";
import { useProjectDialog } from "@/hooks/use-project-dialog";

export function HeroBottom() {
  const { open } = useProjectDialog();
  const featured = featuredProjects[0];
  return (
    <div className="absolute inset-x-gutter bottom-0 z-[5] flex h-[63px] items-center justify-between border-t border-line bg-[linear-gradient(0deg,#090909_60%,#09090988)] text-[10px] phone:h-[55px] phone:text-[9px]">
      <button
        type="button"
        className="group flex min-h-11 items-center gap-[13px] text-[10px] phone:gap-2 phone:text-[9px]"
        onClick={() => featured && open(featured)}
      >
        <PlayCircle
          size={12}
          className="size-8 group-hover:bg-accent phone:size-[27px]"
        />
        VIEW FEATURED WORK
        <span className="ml-[10px] text-[8px] text-muted narrow:hidden">
          WEB / MOBILE
        </span>
      </button>
      <span className="flex items-center gap-[18px] text-[9px] text-muted narrow:gap-2 phone:gap-[7px] phone:text-[7px]">
        SCROLL TO DISCOVER{" "}
        <ArrowDown size={13} className="text-accent phone:w-[10px]" />
      </span>
      <span className="text-[10px] text-muted phone:hidden">SELECTED WORK</span>
    </div>
  );
}
