import { Reveal } from "@/components/ui/Reveal";

export function QuotePanel() {
  return (
    <Reveal className="relative flex flex-col items-start overflow-hidden border-l border-[#ad1a2a] bg-[linear-gradient(140deg,#8b0f1b,#41080f)] px-7 py-[30px] before:pointer-events-none before:absolute before:left-[-65%] before:top-20 before:h-[45px] before:w-[200%] before:-rotate-45 before:bg-[#bf20302b] tablet:px-5 narrow:col-span-full narrow:grid narrow:min-h-[150px] narrow:grid-cols-[40px_1.6fr_1fr] narrow:items-center narrow:gap-5 narrow:border-t narrow:px-[25px] narrow:py-5 phone:col-auto phone:-mx-5 phone:min-h-[135px] phone:grid-cols-[30px_1fr_65px] phone:gap-3 phone:px-[17px] phone:py-[21px] tiny:grid-cols-[25px_1fr_55px]">
      <span className="h-[55px] font-display text-[76px] font-normal leading-[1.02] text-[#ef3848] narrow:h-[50px] phone:text-[64px]">
        “
      </span>
      <blockquote className="z-[1] my-6 text-[clamp(17px,1.8vw,27px)] font-normal leading-[1.4] tracking-[-0.035em] tablet:text-[21px] narrow:m-0 narrow:text-[23px] phone:text-[20px] phone:tracking-[-0.04em] tiny:text-[17px]">
        From concept
        <br className="narrow:hidden" />
        to clean code,
        <br className="narrow:hidden" />
        <em className="not-italic text-[#ffa4ac] narrow:block">
          to a product
          <br className="narrow:hidden" />
          people enjoy.
        </em>
      </blockquote>
      <span className="mb-10 -rotate-10 font-hand text-[42px] font-normal leading-[1.15] narrow:m-0 narrow:text-center narrow:text-[40px] phone:-rotate-12 phone:text-[27px] tiny:text-[24px]">
        Andre
      </span>
      <div className="mt-auto flex flex-col gap-3 text-[9px] leading-[1.7] narrow:hidden">
        LET’S BUILD
        <br />
        THE NEXT THING WELL.
        <span className="text-[29px] text-[#ff4255]" aria-hidden="true">
          ✳
        </span>
      </div>
    </Reveal>
  );
}
