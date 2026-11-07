import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { eyebrow } from "@/components/ui/styles";
import { skills, software } from "@/constants/profile";
import { cn } from "@/lib/cn";
import { panelHeading } from "./styles";

const rowClass =
  "grid grid-cols-[1fr_auto] gap-[6px] border-b border-line py-[14px] text-[12px] phone:gap-[5px] phone:py-3";
const rowText =
  "col-span-full text-[12px] leading-[1.6] text-muted tablet:text-[11px] phone:text-[12px]";
const labelClass = cn(eyebrow, "text-[10px] text-accent phone:text-[9px]");

export function FocusPanel() {
  return (
    <Reveal className="pb-[34px] pr-[35px] pt-[29px] tablet:pr-[22px] narrow:pb-[25px] phone:py-6 phone:pr-0">
      <h3 className={panelHeading}>FOCUS & SKILLS</h3>
      <p className={labelClass}>FOCUS</p>
      <div className={rowClass}>
        <strong className="font-semibold">Software Developer</strong>
        <span className="text-[10px] text-accent">Remote</span>
        <p className={rowText}>
          Remote-first, AI-first company with about 15 developers.
        </p>
      </div>
      <div className={rowClass}>
        <strong className="font-semibold">Front-end Web</strong>
        <p className={rowText}>React · Next.js</p>
      </div>
      <div className={rowClass}>
        <strong className="font-semibold">Mobile</strong>
        <p className={rowText}>Flutter · React Native · Expo</p>
      </div>
      <p className={cn(labelClass, "mb-[14px] mt-6 phone:mt-[21px]")}>
        TECH TOOLKIT
      </p>
      <div className="flex flex-wrap gap-[7px] phone:gap-[6px]">
        {skills.map((skill) => (
          <span
            key={skill}
            className="border border-[#30282a] px-[9px] py-[6px] text-[10px] leading-[1.4] text-[#c2bdb9] phone:px-2"
          >
            {skill}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-[14px] phone:mt-5 phone:gap-[18px]">
        {software.map(([file, name]) => (
          <Image
            key={file}
            src={`/Asset/svg/${file}.svg`}
            alt={name}
            title={name}
            width={28}
            height={28}
            className="size-[26px] opacity-80 transition-[opacity,translate] duration-300 hover:-translate-y-[3px] hover:opacity-100 phone:size-[25px]"
          />
        ))}
      </div>
    </Reveal>
  );
}
