"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { EASE } from "@/constants/motion";
import { CV_PATH } from "@/constants/profile";
import { useMotionEnabled } from "@/hooks/use-motion";

const statRow =
  "flex items-center gap-[17px] border-b border-line py-3 tablet:gap-2 narrow:flex-col narrow:items-start narrow:gap-[5px] phone:gap-[3px] phone:py-[7px]";
const statValue =
  "min-w-[70px] font-display text-[52px] font-normal leading-[1.02] tracking-[-0.03em] text-accent tablet:min-w-[58px] tablet:text-[46px] narrow:text-[40px] phone:text-[36px] phone:leading-none";
const statLabel =
  "text-[9px] leading-normal text-muted tablet:text-[8px] tiny:text-[7px]";

const stats: { value: string; label: [string, string] }[] = [
  { value: "2", label: ["PLATFORMS:", "WEB & MOBILE"] },
  { value: "4", label: ["CORE", "FRAMEWORKS"] },
];

export function HeroSide() {
  const enabled = useMotionEnabled();
  return (
    <motion.div
      className="absolute bottom-[110px] right-gutter z-[3] w-[17%] narrow:bottom-[115px] narrow:w-[18%] phone:bottom-[285px] phone:w-[74px] tiny:bottom-[280px] tiny:w-[63px]"
      initial={enabled ? { opacity: 0, x: 30 } : false}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.55, ease: EASE }}
    >
      <div className="mb-[45px] flex items-center gap-[17px] tablet:gap-[10px] narrow:mb-[55px] phone:hidden">
        <span
          className="flex size-[45px] shrink-0 items-center justify-center rounded-full border border-[#87212b] text-[34px] text-accent tablet:size-[34px] tablet:text-[25px] narrow:hidden"
          aria-hidden="true"
        >
          ✳
        </span>
        <p className="text-[12px] leading-[1.6] tablet:text-[10px]">
          Clean code.
          <br />
          Thoughtful products.
        </p>
      </div>
      <div className="-mx-3 bg-[linear-gradient(90deg,#090909b8,#090909e8)] px-3">
        {stats.map(({ value, label }) => (
          <div key={value} className={statRow}>
            <span className={statValue}>{value}</span>
            <p className={statLabel}>
              {label[0]}
              <br />
              {label[1]}
            </p>
          </div>
        ))}
        <div className={statRow}>
          <span className={statValue}>
            100<span className="text-[30px] phone:text-[22px]">%</span>
          </span>
          <a
            href="#experience"
            aria-label="See Andre Saftari's experience"
            className="flex min-h-11 items-center gap-[9px] text-[9px] text-ink hover:text-accent phone:gap-[6px] phone:text-[7px] tiny:gap-1 tiny:text-[6px]"
          >
            REMOTE-FIRST
            <ArrowUpRight size={12} className="text-accent" />
          </a>
        </div>
        <a
          href={CV_PATH}
          download
          className="mt-2 flex min-h-11 items-center gap-[11px] text-[10px] hover:text-accent tablet:text-[9px] phone:justify-start phone:gap-0 phone:text-[0px]"
        >
          <Download
            size={16}
            className="text-accent narrow:w-[13px] phone:size-[17px]"
          />
          <span>DOWNLOAD CV</span>
        </a>
      </div>
    </motion.div>
  );
}
