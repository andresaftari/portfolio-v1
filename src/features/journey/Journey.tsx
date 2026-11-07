"use client";

import { Download } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { sectionWrap, textLinkClass } from "@/components/ui/styles";
import { CV_PATH, experiences } from "@/constants/profile";
import { cn } from "@/lib/cn";
import { ExperienceRow } from "./ExperienceRow";
import { SideProjects } from "./SideProjects";

export function Journey() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="experience"
      className={cn(
        sectionWrap,
        "pb-[50px] pt-12 narrow:py-[38px] phone:py-[30px]",
      )}
    >
      <SectionHeading
        compact
        label="03 / THE JOURNEY"
        title={
          <>
            ALWAYS MOVING. ALWAYS BUILDING<span className="text-accent">.</span>
          </>
        }
        action={
          <a className={textLinkClass} href={CV_PATH} download>
            RESUME
            <Download size={16} />
          </a>
        }
      />
      <div className="grid grid-cols-[1.65fr_1fr] gap-[65px] tablet:gap-[35px] narrow:grid-cols-[1.3fr_1fr] narrow:gap-[30px] phone:grid-cols-1">
        <div>
          {experiences.map((job, i) => (
            <ExperienceRow
              key={job.title}
              job={job}
              index={i}
              open={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
        <SideProjects />
      </div>
    </section>
  );
}
