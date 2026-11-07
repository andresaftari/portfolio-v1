"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { Magnetic } from "@/components/ui/Magnetic";
import { EASE } from "@/constants/motion";
import { PORTRAIT_PATH } from "@/constants/profile";
import { useMotionEnabled } from "@/hooks/use-motion";
import { HeroBottom } from "./HeroBottom";
import { HeroSide } from "./HeroSide";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const enabled = useMotionEnabled();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 85]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, -55]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative isolate m-auto h-[clamp(720px,calc(100svh_-_66px),990px)] max-w-[1800px] overflow-hidden border-b border-line tablet:h-[730px] narrow:h-[690px] phone:h-[780px] tiny:h-[770px]"
    >
      <div className="absolute inset-x-gutter top-[23px] z-[4] flex justify-between text-[11px] leading-[1.6] phone:top-[17px] phone:text-[8px]">
        <span className="font-bold text-accent">
          SOFTWARE ENGINEER / REMOTE
          <br />
          <span className="text-muted">FRONT-END & MOBILE</span>
        </span>
        <span className="flex h-5 items-center gap-[9px] text-[10px] text-muted tablet:text-[8px] phone:gap-[5px] phone:text-[6px]">
          <i className="size-[5px] rounded-full bg-accent phone:size-1" />
          AVAILABLE FOR COLLABORATION
        </span>
      </div>
      <motion.div
        className="absolute left-[calc(var(--gutter)_-_5px)] top-[81px] z-[-1] w-[calc(100%_-_var(--gutter)_*_2)] origin-center whitespace-nowrap font-display text-[min(25.3vw,455px)] font-normal leading-none tracking-[-0.024em] text-[#bd0c22] after:absolute after:inset-0 after:bg-[linear-gradient(0deg,#090909,transparent_90%)] after:opacity-[0.85] tablet:top-[90px] narrow:top-[95px] phone:left-[17px] phone:top-[74px] phone:text-[23.8vw] phone:leading-[1.15] phone:tracking-[-0.025em] phone:after:opacity-50"
        aria-hidden="true"
        style={enabled ? { y: titleY } : {}}
        initial={enabled ? { clipPath: "inset(0 0 100% 0)" } : false}
        animate={{ clipPath: "inset(0 0 0% 0)" }}
        transition={{ duration: 1.4, ease: EASE }}
      >
        PORTFOLIO
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-px left-[28%] z-[1] h-[91%] w-[49%] origin-bottom min-[801px]:bottom-0 min-[801px]:left-[23%] min-[801px]:top-[65px] min-[801px]:h-auto min-[801px]:w-[57%] narrow:left-[19%] narrow:h-[78%] narrow:w-[65%] phone:bottom-[269px] phone:h-[465px] phone:w-[78%] tiny:bottom-[284px] tiny:left-[15%] tiny:h-[425px] tiny:w-[83%]"
        style={enabled ? { y: portraitY, scale: portraitScale } : {}}
        initial={enabled ? { opacity: 0 } : false}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        <Image
          src={PORTRAIT_PATH}
          alt="Portrait of Andre Saftari with red studio rim lighting"
          width={1024}
          height={1536}
          priority
          sizes="(min-width: 801px) 57vw, 80vw"
          className="size-full object-contain object-bottom contrast-[1.03] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)] min-[801px]:absolute min-[801px]:top-0 min-[801px]:h-[120%] min-[801px]:object-top phone:[mask-image:linear-gradient(to_bottom,black_75%,transparent_100%)]"
        />
      </motion.div>
      <motion.div
        className="absolute bottom-[110px] left-gutter z-[3] w-[28%] tablet:w-[30%] narrow:w-[33%] phone:inset-x-5 phone:bottom-[92px] phone:grid phone:w-auto phone:grid-cols-[1.2fr_1fr] phone:items-start phone:gap-x-5 tiny:grid-cols-[1.15fr_1fr] tiny:gap-x-3"
        style={enabled ? { y: copyY } : {}}
        initial={enabled ? { opacity: 0, x: -35 } : false}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.35, ease: EASE }}
      >
        <p className="mb-2 origin-left -rotate-7 font-hand text-[clamp(36px,4.2vw,66px)] font-normal leading-[1.15] phone:col-span-full phone:mb-[3px] phone:text-[35px] tiny:text-[31px]">
          Hello, I’m
        </p>
        <h1 className="mb-[14px] whitespace-nowrap font-display text-[clamp(58px,6.9vw,117px)] font-normal leading-[1.02] tracking-[-0.025em] tablet:text-[72px] narrow:text-[61px] phone:col-span-full phone:mb-[13px] phone:text-[66px] phone:leading-[1.04] phone:tracking-[-0.02em] tiny:text-[58px]">
          ANDRE<span className="text-accent">.</span>
        </h1>
        <p className="mb-[18px] text-[clamp(15px,1.6vw,25px)] font-extrabold leading-[1.23] tracking-[-0.025em] text-accent narrow:text-[17px] phone:col-start-1 phone:row-start-3 phone:mb-[10px] phone:text-[15px] phone:leading-[1.2] tiny:text-[14px]">
          SOFTWARE
          <br className="phone:hidden" />
          ENGINEER
        </p>
        <p className="mb-[21px] max-w-[245px] text-[13px] leading-[1.8] text-[#b9b5b2] tablet:text-[11px] narrow:max-w-[195px] phone:col-start-1 phone:row-start-4 phone:mb-0 phone:max-w-[220px] phone:leading-[1.7] tiny:text-[10px]">
          Building for web and mobile.
          <br />I turn ideas into fast, polished products, from the first commit
          to the final release.
        </p>
        <Magnetic
          href="#portfolio"
          className="inline-flex min-h-[46px] items-center justify-between gap-[30px] bg-button-red px-[19px] py-[14px] text-[12px] text-white transition-colors duration-[250ms] hover:bg-[#bc1a2b] phone:col-start-2 phone:row-start-4 phone:mt-0.5 phone:min-h-11 phone:justify-center phone:gap-[11px] phone:self-start phone:p-3 phone:text-[10px] tiny:gap-2 tiny:px-2 tiny:py-[11px] tiny:text-[9px]"
        >
          See my work <ArrowDown size={17} />
        </Magnetic>
        <span className="mt-[22px] flex items-center gap-2 text-[9px] text-muted phone:col-start-2 phone:row-start-5 phone:mt-[10px] phone:gap-[5px] phone:whitespace-nowrap phone:text-[7px]">
          <MapPin size={12} className="text-accent" /> JAKARTA, INDONESIA
        </span>
      </motion.div>
      <HeroSide />
      <HeroBottom />
    </section>
  );
}
