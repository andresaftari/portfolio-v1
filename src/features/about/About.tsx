"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { eyebrow, sectionWrap } from "@/components/ui/styles";
import { cn } from "@/lib/cn";
import { FocusPanel } from "./FocusPanel";
import { ProcessPanel } from "./ProcessPanel";
import { QuotePanel } from "./QuotePanel";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 75%"],
  });

  return (
    <section
      id="about"
      ref={ref}
      className={cn(
        sectionWrap,
        "pb-0 pt-[55px] narrow:pt-[38px] phone:pt-[30px]",
      )}
    >
      <Reveal className="mb-[46px] flex items-center justify-between gap-20 tablet:gap-10 narrow:mb-8 narrow:gap-[30px] phone:mb-[26px] phone:flex-col phone:items-start phone:gap-[18px]">
        <div>
          <span
            className={cn(
              eyebrow,
              "mb-5 block text-[11px] text-muted wide:text-[12px] phone:mb-[13px] phone:text-[8px]",
            )}
          >
            02 / BEHIND THE CODE
          </span>
          <h2 className="font-display text-[clamp(27px,3.55vw,55px)] font-normal leading-[1.17] tracking-[-0.01em] narrow:text-[29px] phone:text-[32px] phone:leading-[1.14] tiny:text-[28px]">
            CODE THAT WORKS.
            <br />
            PRODUCTS THAT <span className="text-accent">FEEL RIGHT.</span>
          </h2>
        </div>
        <p className="max-w-[360px] text-[14px] text-muted tablet:max-w-[300px] tablet:text-[12px] narrow:max-w-[240px] phone:max-w-full phone:leading-[1.8]">
          I’m Andre Saftari, a software engineer in Jakarta working remotely. I
          build front-end web and mobile products with React, Next.js, Flutter
          and React Native for clients across the US, UK, Italy and the EU, and
          I lead a WordPress workstream.
        </p>
      </Reveal>
      <div className="grid grid-cols-[1.1fr_1.15fr_0.72fr] border-t border-line tablet:grid-cols-[1fr_1.1fr_0.75fr] narrow:grid-cols-2 phone:grid-cols-1">
        <FocusPanel />
        <ProcessPanel progress={scrollYProgress} />
        <QuotePanel />
      </div>
    </section>
  );
}
