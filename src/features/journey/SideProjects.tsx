"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { eyebrow } from "@/components/ui/styles";
import { sideProjects } from "@/constants/profile";
import { useProjectDialog } from "@/hooks/use-project-dialog";
import { cn } from "@/lib/cn";
import { sideProjectToProject } from "@/lib/projects";

export function SideProjects() {
  const { open } = useProjectDialog();
  return (
    <Reveal className="border-l border-line pl-7 narrow:pl-[22px] phone:border-l-0 phone:border-t phone:pl-0 phone:pt-[23px]">
      <p
        className={cn(
          eyebrow,
          "mb-[18px] text-[9px] text-muted phone:mb-3 phone:text-[8px]",
        )}
      >
        SIDE PROJECTS
      </p>
      <h3 className="mb-[22px] font-display text-[44px] font-normal leading-[1.1] narrow:text-[38px] phone:mb-[18px] phone:text-[35px] tiny:text-[29px]">
        SMALL BUILDS.
        <br className="phone:hidden" />
        <span className="text-accent phone:ml-2">BIG IDEAS.</span>
      </h3>
      <div className="phone:grid phone:grid-cols-2 phone:gap-x-[18px] tiny:gap-x-[13px]">
        {sideProjects.map((side, i) => (
          <button
            type="button"
            key={side.title}
            className="group flex min-h-[65px] w-full items-center gap-[17px] border-t border-line text-left text-[12px] narrow:gap-[10px] phone:min-h-[68px] phone:gap-2 phone:text-[11px] tiny:text-[10px]"
            onClick={() => open(sideProjectToProject(side, "Project"))}
          >
            <span className="text-[10px] text-accent phone:text-[8px]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1">
              {side.title}
              <small className="mt-1 block text-[10px] text-muted">
                {side.year}
              </small>
            </span>
            <ArrowUpRight
              size={19}
              className="text-muted transition-transform duration-[250ms] group-hover:-translate-y-[3px] group-hover:translate-x-[3px] group-hover:text-accent phone:w-[14px]"
            />
          </button>
        ))}
      </div>
    </Reveal>
  );
}
