"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import { useRef } from "react";
import { MediaImage } from "@/components/ui/MediaImage";
import { EASE } from "@/constants/motion";
import { useMotionEnabled } from "@/hooks/use-motion";
import type { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpen: (project: Project) => void;
}

function projectTypeLabel(project: Project): string {
  if (project.type === "render") return "RENDER BREAKDOWN";
  if (project.type === "youtube" || project.type === "drive")
    return "DEMO / VIDEO";
  if (project.type === "website") return "WEBSITE";
  return "SCREENSHOT";
}

export function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
  const enabled = useMotionEnabled();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-12, 12]);
  const video = project.type === "youtube" || project.type === "drive";

  return (
    <motion.article
      ref={ref}
      className="group/card min-w-0 phone:first:col-span-full"
      layout
      initial={enabled ? { opacity: 0, y: 32 } : false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.08 }}
      transition={{
        duration: enabled ? 0.6 : 0,
        delay: (index % 3) * 0.06,
        ease: EASE,
      }}
      exit={{ opacity: 0, scale: 0.96 }}
    >
      <button
        type="button"
        className="group/open relative block aspect-[1.65] w-full overflow-hidden border border-line bg-[#131010] phone:aspect-[1.5] phone:group-first/card:aspect-[1.9]"
        onClick={() => onOpen(project)}
        aria-label={`View ${project.title}`}
      >
        <motion.div
          className="absolute inset-x-0 -inset-y-3 saturate-[0.55] transition-[filter] duration-500 group-hover/open:saturate-100 touch:saturate-90"
          style={enabled ? { y } : {}}
        >
          <MediaImage
            src={project.image}
            alt={project.title}
            className="size-full transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/open:scale-[1.055]"
          />
        </motion.div>
        <span className="absolute left-[15px] top-[15px] z-[2] bg-[#090909b3] px-[7px] py-[5px] text-[9px] text-[#ddd] tablet:text-[8px] narrow:left-[10px] narrow:top-[10px] phone:left-2 phone:top-2 phone:px-[5px] phone:py-1">
          {projectTypeLabel(project)}
        </span>
        <span className="absolute left-1/2 top-1/2 flex size-[52px] -translate-x-1/2 -translate-y-[40%] items-center justify-center rounded-full border border-[#ffffff65] bg-[#090909d9] opacity-0 transition-[opacity,translate] [transition-duration:0.3s,0.4s] group-hover/open:-translate-y-1/2 group-hover/open:opacity-100 group-focus-visible/open:-translate-y-1/2 group-focus-visible/open:opacity-100 touch:-translate-y-1/2 touch:opacity-100 phone:size-[34px] phone:-translate-y-1/2 phone:opacity-100 phone:group-first/card:size-11 phone:[&>svg]:w-[14px]">
          {video ? (
            <Play fill="currentColor" size={18} />
          ) : (
            <ArrowUpRight size={22} />
          )}
        </span>
        <span
          className="pointer-events-none absolute inset-[9px] border border-[#ffffff12] phone:inset-[6px]"
          aria-hidden="true"
        />
      </button>
      <button
        type="button"
        className="group/cap flex min-h-[78px] w-full items-center gap-[14px] border-b border-line text-left narrow:min-h-[70px] narrow:gap-2 phone:min-h-[60px] phone:gap-[9px] phone:group-first/card:min-h-[68px]"
        onClick={() => onOpen(project)}
      >
        <span className="min-w-[29px] font-display text-[32px] font-normal leading-none text-accent narrow:min-w-[23px] narrow:text-[28px] phone:min-w-[21px] phone:text-[26px]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="min-w-0 flex-1">
          <h3 className="overflow-hidden text-ellipsis whitespace-nowrap text-[13px] font-bold uppercase leading-[1.4] tablet:text-[11px] phone:text-[10px] phone:leading-normal phone:group-first/card:text-[12px]">
            {project.title}
          </h3>
          <span className="mt-[5px] block text-[10px] uppercase text-muted phone:mt-1 phone:text-[9px]">
            {project.category}
            {project.year ? ` / ${project.year}` : ""}
          </span>
        </span>
        <ArrowUpRight
          size={20}
          className="text-muted transition-transform duration-300 group-hover/cap:-translate-y-[3px] group-hover/cap:translate-x-[3px] group-hover/cap:text-accent narrow:w-[15px] phone:w-[13px]"
        />
      </button>
    </motion.article>
  );
}
