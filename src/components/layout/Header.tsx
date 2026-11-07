"use client";

import { ArrowUpRight, Menu, Pause, Play, X } from "lucide-react";
import { useEffect, useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { desktopNav } from "@/constants/profile";
import { useActiveSection } from "@/hooks/use-active-section";
import { useMotion } from "@/hooks/use-motion";
import { cn } from "@/lib/cn";
import { MobileMenu } from "./MobileMenu";
import { Wordmark } from "./Wordmark";

export function Header() {
  const { enabled, toggle } = useMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection();

  useEffect(() => {
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-[70] flex h-[66px] items-center justify-between gap-5 border-b border-line bg-[#090909f5] px-gutter narrow:h-[60px] phone:h-14 phone:gap-3">
      <Wordmark ariaLabel="Andre Saftari, home" />
      <nav
        className="ml-[7%] flex gap-8 tablet:ml-0 tablet:gap-[25px] narrow:gap-5 phone:hidden"
        aria-label="Main navigation"
      >
        {desktopNav.map(([id, label]) => (
          <a
            key={id}
            href={`#${id}`}
            className={cn(
              "relative flex min-h-11 items-center text-[12px] transition-colors duration-[250ms] hover:text-ink narrow:text-[11px]",
              active === id
                ? "text-ink before:absolute before:-left-[11px] before:size-1 before:rounded-full before:bg-accent"
                : "text-muted",
            )}
          >
            {label}
          </a>
        ))}
      </nav>
      <div className="flex items-center gap-6 tablet:gap-5 narrow:gap-[10px] phone:gap-[13px]">
        <button
          type="button"
          className="flex min-h-11 items-center gap-[7px] text-[10px] text-muted hover:text-ink phone:min-w-[72px] phone:text-[9px]"
          onClick={toggle}
          aria-label={enabled ? "Pause animations" : "Enable animations"}
          aria-pressed={!enabled}
        >
          {enabled ? <Pause size={13} /> : <Play size={13} />}
          <span>Motion {enabled ? "on" : "off"}</span>
        </button>
        <a
          className="flex min-h-11 items-center gap-3 text-[12px] narrow:hidden"
          href="#contact"
        >
          Let’s talk <ArrowUpRight size={16} className="text-accent" />
        </a>
        <IconButton
          bordered={false}
          className="min-[601px]:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X /> : <Menu />}
        </IconButton>
      </div>
      <MobileMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </header>
  );
}
