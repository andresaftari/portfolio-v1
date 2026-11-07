"use client";

import { ArrowUpRight, Linkedin, MapPin } from "lucide-react";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { eyebrow, sectionWrap } from "@/components/ui/styles";
import { LINKEDIN_URL } from "@/constants/profile";
import { cn } from "@/lib/cn";
import { ContactReel } from "./ContactReel";

const linkRow =
  "flex min-h-[66px] items-center gap-[15px] border-b border-line py-4 text-[12px] tablet:gap-[9px] phone:min-h-16 phone:gap-[15px] phone:py-3";
const linkIcon =
  "size-[29px] rounded-full border border-[#6b1b24] p-[6px] text-accent phone:size-[31px] phone:p-[7px]";
const linkText = "min-w-0 flex-1 [overflow-wrap:anywhere]";
const linkLabel = "mb-[5px] block text-[9px] text-muted phone:mb-1";

export function Contact() {
  return (
    <section
      id="contact"
      className={cn(
        sectionWrap,
        "bg-[linear-gradient(110deg,#0e0a0a,#090909_60%)] pb-7 pt-[50px] narrow:py-[38px] phone:py-[30px]",
      )}
    >
      <div className="grid grid-cols-[1fr_1fr_1.15fr] items-center gap-[45px] tablet:grid-cols-3 tablet:gap-[25px] narrow:grid-cols-[1fr_1.1fr] narrow:gap-x-[35px] narrow:gap-y-[25px] phone:grid-cols-1 phone:gap-5">
        <Reveal>
          <span
            className={cn(
              eyebrow,
              "mb-5 block text-[9px] text-muted phone:mb-4 phone:text-[8px]",
            )}
          >
            04 / YOUR NEXT PROJECT
          </span>
          <h2 className="mb-5 font-display text-[clamp(40px,4.4vw,70px)] font-normal leading-[1.07] tracking-[-0.02em] narrow:text-[54px] phone:mb-[17px] phone:leading-[1.08] tiny:text-[49px]">
            LET’S WORK
            <br />
            TOGETHER<span className="text-accent">.</span>
          </h2>
          <p className="text-[13px] leading-[1.8] text-muted phone:text-[12px]">
            Have a product to build?
            <br />
            Let’s make something worth using.
          </p>
          <Magnetic
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-[22px] inline-flex min-h-11 items-center gap-3 text-[10px] text-accent phone:mt-[15px]"
          >
            <span className="flex size-[35px] items-center justify-center rounded-full border border-[#6b1b24] transition-colors duration-300 group-hover:bg-[#59111c]">
              <ArrowUpRight size={21} />
            </span>
            START A CONVERSATION
          </Magnetic>
        </Reveal>
        <Reveal className="pt-[30px] narrow:pt-[15px] phone:pt-0" delay={0.1}>
          <a
            className={cn(linkRow, "hover:text-accent")}
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className={linkIcon} />
            <span className={linkText}>
              <small className={linkLabel}>LINKEDIN</small>Andre Saftari
            </span>
            <ArrowUpRight
              size={16}
              className="text-muted tablet:hidden phone:ml-auto phone:block"
            />
          </a>
          <div className={linkRow}>
            <MapPin className={linkIcon} />
            <span className={linkText}>
              <small className={linkLabel}>BASED IN</small>Jakarta, Indonesia
            </span>
          </div>
        </Reveal>
        <ContactReel />
      </div>
    </section>
  );
}
