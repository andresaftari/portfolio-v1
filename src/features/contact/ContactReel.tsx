"use client";

import { MediaImage } from "@/components/ui/MediaImage";
import { PlayCircle } from "@/components/ui/PlayCircle";
import { Reveal } from "@/components/ui/Reveal";
import { featuredProjects } from "@/constants/projects";
import { useProjectDialog } from "@/hooks/use-project-dialog";

export function ContactReel() {
  const { open } = useProjectDialog();
  const featured = featuredProjects[0];
  return (
    <Reveal className="[perspective:1000px] narrow:hidden" delay={0.2}>
      <button
        type="button"
        className="block w-full rotate-5 pl-[10px] pt-[18px] transition-[rotate,translate] duration-[600ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1.5 hover:rotate-0"
        onClick={() => featured && open(featured)}
        aria-label="View featured project by Andre Saftari"
      >
        <div className="relative aspect-[1.5] w-full overflow-hidden border-[3px] border-[#2c2929] bg-[#111] shadow-[0_30px_40px_#0008]">
          <span className="absolute inset-x-[15px] top-[13px] z-[3] flex justify-between text-[8px]">
            ANDRE®
            <span className="text-[6px] text-muted">FEATURED WORK</span>
          </span>
          <div className="absolute inset-0 opacity-[0.23] saturate-[0.4]">
            <MediaImage
              src={featured?.image}
              alt="Featured project by Andre Saftari"
              className="size-full"
              sizes="(min-width: 1100px) 30vw, 40vw"
            />
          </div>
          <span className="absolute left-5 top-[31%] z-[3] text-left font-display text-[clamp(25px,3vw,45px)] font-normal leading-[1.05] tablet:text-[30px]">
            BUILD IT
            <br />
            <span className="text-accent">RIGHT.</span>
          </span>
          <PlayCircle
            size={18}
            className="absolute bottom-[23px] right-5 z-[4] size-[45px] bg-[#c91c30]"
          />
        </div>
        <span className="mt-[14px] block text-right text-[8px] text-muted">
          TAP TO SEE MY LATEST WORK.
        </span>
      </button>
    </Reveal>
  );
}
