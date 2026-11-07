"use client";

import { type MotionValue, motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/constants/profile";
import { useMotionEnabled } from "@/hooks/use-motion";
import { panelHeading } from "./styles";

export function ProcessPanel({ progress }: { progress: MotionValue<number> }) {
  const enabled = useMotionEnabled();
  return (
    <div className="border-l border-line px-8 pb-[30px] pt-[29px] tablet:px-[22px] narrow:pr-0 phone:border-l-0 phone:border-t phone:px-0 phone:py-6">
      <Reveal>
        <h3 className={panelHeading}>FROM IDEA TO LAUNCH</h3>
      </Reveal>
      <div className="relative">
        <div className="absolute bottom-9 left-12 top-[9px] w-px bg-[#332326] tablet:left-[38px] phone:bottom-7 phone:left-[42px]">
          <motion.div
            className="h-full origin-top bg-accent"
            style={{ scaleY: enabled ? progress : 1 }}
          />
        </div>
        {processSteps.map(({ num, title, text }, i) => (
          <Reveal
            key={num}
            delay={i * 0.035}
            className="relative grid grid-cols-[24px_20px_1fr] items-start gap-[15px] pb-[27px] last:pb-0 tablet:grid-cols-[21px_18px_1fr] tablet:gap-[10px] phone:grid-cols-[22px_18px_1fr] phone:gap-[14px] phone:pb-[21px]"
          >
            <span className="font-display text-[20px] font-normal leading-[1.3] text-accent">
              {num}
            </span>
            <span className="relative mt-[5px] size-[14px] rounded-full border border-accent bg-ground after:absolute after:inset-1 after:rounded-full after:bg-accent" />
            <div>
              <h4 className="mb-1 text-[12px] font-bold leading-normal">
                {title}
              </h4>
              <p className="max-w-[260px] text-[12px] leading-[1.65] text-muted tablet:text-[11px] phone:max-w-none phone:text-[12px] phone:leading-[1.7]">
                {text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
