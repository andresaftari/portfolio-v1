"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { EASE } from "@/constants/motion";
import { cn } from "@/lib/cn";
import type { Experience } from "@/types/project";

interface ExperienceRowProps {
  job: Experience;
  index: number;
  open: boolean;
  onToggle: () => void;
}

export function ExperienceRow({
  job,
  index,
  open,
  onToggle,
}: ExperienceRowProps) {
  return (
    <Reveal className="border-t border-line last:border-b">
      <button
        type="button"
        className="grid min-h-[89px] w-full grid-cols-[145px_1fr_24px] items-center gap-[18px] py-3 text-left tablet:grid-cols-[112px_1fr_20px] tablet:gap-[14px] narrow:min-h-[84px] narrow:grid-cols-[1fr_24px] narrow:gap-[5px] narrow:py-[14px] phone:min-h-[78px] phone:grid-cols-[85px_1fr_20px] phone:gap-[11px] phone:py-[13px] tiny:grid-cols-[80px_1fr_18px] tiny:gap-[10px]"
        aria-expanded={open}
        aria-controls={`job-${index}`}
        onClick={onToggle}
      >
        <span
          className={cn(
            "text-[10px] narrow:col-start-1 phone:text-[8px] tiny:text-[7px]",
            open ? "text-accent" : "text-muted",
          )}
        >
          {job.date}
        </span>
        <span className="narrow:col-start-1 phone:col-start-2">
          <h3 className="text-[17px] font-medium leading-normal tracking-[-0.04em] narrow:text-[16px] phone:text-[15px] tiny:text-[14px]">
            {job.title}
          </h3>
          <span className="mt-[3px] block text-[11px] text-muted phone:text-[10px] tiny:text-[9px]">
            {job.place}
          </span>
        </span>
        {open ? (
          <Minus
            size={18}
            className="text-accent narrow:col-start-2 narrow:[grid-row:1/3] phone:col-start-3 phone:[grid-row:auto]"
          />
        ) : (
          <Plus
            size={18}
            className="narrow:col-start-2 narrow:[grid-row:1/3] phone:col-start-3 phone:[grid-row:auto]"
          />
        )}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={`job-${index}`}
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
          >
            <p className="ml-[163px] max-w-[450px] pb-6 text-[13px] text-muted tablet:ml-[126px] narrow:ml-0 phone:ml-24 phone:pb-5 phone:text-[12px] tiny:ml-0">
              {job.text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Reveal>
  );
}
