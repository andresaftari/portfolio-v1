import { ArrowUpRight, Linkedin } from "lucide-react";
import { cacheLife } from "next/cache";
import { LINKEDIN_URL } from "@/constants/profile";
import { Wordmark } from "./Wordmark";

export async function Footer() {
  "use cache";
  cacheLife("days");
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto flex max-w-[1800px] items-center justify-between gap-[18px] px-gutter py-[23px] phone:flex-wrap phone:gap-x-[15px] phone:gap-y-[3px] phone:pb-[calc(17px_+_env(safe-area-inset-bottom,0px))] phone:pt-[17px]">
      <Wordmark variant="footer" />
      <span className="text-[9px] text-muted phone:order-3 phone:basis-full phone:text-[8px] phone:leading-[1.8] phone:text-[#9f9799]">
        © {year} ANDRE SAFTARI. BUILT WITH CARE.
      </span>
      <div className="flex gap-[10px] narrow:gap-[2px] phone:ml-auto">
        <a
          className="flex h-11 w-11 items-center justify-center hover:text-accent narrow:w-[38px] phone:w-11"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Andre Saftari on LinkedIn"
        >
          <Linkedin size={17} />
        </a>
        <a
          className="flex h-11 w-11 items-center justify-center hover:text-accent narrow:w-[38px] phone:w-11"
          href="#home"
          aria-label="Back to top"
        >
          <ArrowUpRight size={18} />
        </a>
      </div>
    </footer>
  );
}
