"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Plus, X } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  outlineButtonClass,
  sectionWrap,
  textLinkClass,
} from "@/components/ui/styles";
import { categories, featuredProjects, projects } from "@/constants/projects";
import { useProjectDialog } from "@/hooks/use-project-dialog";
import { cn } from "@/lib/cn";
import { projectKey } from "@/lib/projects";
import { PortfolioToolbar } from "./PortfolioToolbar";
import { ProjectCard } from "./ProjectCard";

const PAGE_SIZE = 9;

export function Portfolio() {
  const { open } = useProjectDialog();
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [limit, setLimit] = useState(PAGE_SIZE);

  const results = projects.filter(
    (p) =>
      (category === "All" || p.category === category) &&
      `${p.title} ${p.category} ${p.role ?? ""}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const visible =
    expanded || category !== "All" || query
      ? results.slice(0, limit)
      : featuredProjects;

  const toggleAll = (): void => {
    if (expanded) {
      setExpanded(false);
      setCategory("All");
      setQuery("");
    } else {
      setExpanded(true);
      setLimit(PAGE_SIZE);
    }
  };

  return (
    <section
      id="portfolio"
      className={cn(sectionWrap, "py-[58px] narrow:py-[38px] phone:py-[30px]")}
    >
      <SectionHeading
        label="01 / SELECTED WORK"
        title={
          <>
            WORK THAT SHIPS<span className="text-accent">.</span>
          </>
        }
        action={
          <button type="button" className={textLinkClass} onClick={toggleAll}>
            {expanded ? "SELECTED WORK" : "ALL PROJECTS"}
            <ArrowRight size={21} />
          </button>
        }
      />
      <PortfolioToolbar
        categories={categories}
        category={category}
        query={query}
        onCategory={(c) => {
          setCategory(c);
          setExpanded(true);
          setLimit(PAGE_SIZE);
        }}
        onQuery={(q) => {
          setQuery(q);
          setExpanded(true);
          setLimit(PAGE_SIZE);
        }}
      />
      <motion.div
        className="relative grid grid-cols-3 gap-x-[22px] gap-y-7 narrow:gap-x-[15px] narrow:gap-y-5 phone:grid-cols-2 phone:gap-x-3 phone:gap-y-[19px]"
        layout
      >
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <ProjectCard
              key={projectKey(p)}
              project={p}
              index={i}
              onOpen={open}
            />
          ))}
        </AnimatePresence>
      </motion.div>
      {visible.length === 0 && (
        <div className="px-5 py-[55px] text-center">
          <p className="text-[14px] text-muted">No projects for “{query}”.</p>
          <button
            type="button"
            className={textLinkClass}
            onClick={() => {
              setQuery("");
              setCategory("All");
            }}
          >
            Reset search <X size={15} />
          </button>
        </div>
      )}
      {expanded && results.length > limit && (
        <div className="mt-[30px] flex items-center justify-center gap-5 phone:mt-6 phone:flex-col phone:gap-[10px]">
          <button
            type="button"
            className={cn(outlineButtonClass, "phone:w-full")}
            onClick={() => setLimit((v) => v + PAGE_SIZE)}
          >
            Show more projects <Plus size={16} />
          </button>
          <span className="text-[10px] text-muted">
            {visible.length} of {results.length} projects
          </span>
        </div>
      )}
    </section>
  );
}
