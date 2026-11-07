"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

interface PortfolioToolbarProps {
  categories: string[];
  category: string;
  query: string;
  onCategory: (category: string) => void;
  onQuery: (query: string) => void;
}

export function PortfolioToolbar({
  categories,
  category,
  query,
  onCategory,
  onQuery,
}: PortfolioToolbarProps) {
  return (
    <Reveal className="mb-[25px] flex items-center justify-between gap-5 border-y border-line tablet:flex-wrap tablet:gap-0 phone:mb-5">
      <fieldset
        className="flex min-w-0 gap-5 overflow-x-auto [scrollbar-width:none] tablet:w-full tablet:justify-between tablet:gap-[15px] phone:justify-start phone:gap-[22px] [&::-webkit-scrollbar]:hidden"
        aria-label="Project categories"
      >
        {categories.map((c) => (
          <button
            type="button"
            key={c}
            className={cn(
              "relative min-h-12 min-w-11 shrink-0 px-[3px] text-[12px] transition-colors duration-200 hover:text-ink tablet:text-[11px] phone:min-h-[46px]",
              c === category ? "text-ink" : "text-muted",
            )}
            aria-pressed={category === c}
            onClick={() => onCategory(c)}
          >
            {c}
            {c === category && (
              <motion.span
                className="absolute inset-x-0 bottom-0 h-0.5 bg-accent"
                layoutId="filter-line"
              />
            )}
          </button>
        ))}
      </fieldset>
      <label className="flex max-w-[165px] items-center gap-[9px] text-muted tablet:w-full tablet:max-w-none tablet:border-t tablet:border-line phone:min-h-11">
        <Search size={15} />
        <span className="shrink-0 text-[10px] text-muted">Search</span>
        <input
          className="min-h-11 w-full min-w-0 border-0 bg-transparent px-0.5 py-px text-[12px] text-ink placeholder:text-muted"
          aria-label="Search projects"
          type="search"
          placeholder="Title or category…"
          value={query}
          onChange={(e) => onQuery(e.target.value)}
        />
      </label>
    </Reveal>
  );
}
