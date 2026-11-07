"use client";

import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { useRef, useState } from "react";
import { IconButton } from "@/components/ui/IconButton";
import { eyebrow, outlineButtonClass } from "@/components/ui/styles";
import { EASE } from "@/constants/motion";
import { useMotionEnabled } from "@/hooks/use-motion";
import { cn } from "@/lib/cn";
import { resolveDialogMedia } from "@/lib/dialog-media";
import type { Project, RenderMode } from "@/types/project";
import { DialogMedia } from "./DialogMedia";
import { RenderControls } from "./RenderControls";
import { useDialogBehavior } from "./use-dialog-behavior";

interface ProjectDialogProps {
  project: Project;
  onClose: () => void;
}

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const ref = useRef<HTMLDivElement>(null);
  const enabled = useMotionEnabled();
  const [renderMode, setRenderMode] = useState<RenderMode>("final");
  const [shot, setShot] = useState(0);
  const info = resolveDialogMedia(project, shot, renderMode);
  const shotCount = project.renders?.length ?? 0;
  const showControls =
    project.type === "render" &&
    (info.availableModes.length > 0 || shotCount > 1);

  useDialogBehavior(ref, onClose);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto overscroll-contain bg-[#000e] p-7 phone:p-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <motion.div
        ref={ref}
        className="max-h-[calc(100dvh_-_56px)] w-[min(1040px,100%)] overflow-y-auto border border-[#463236] bg-[#101010] outline-offset-[-3px] [scrollbar-color:var(--color-accent)_#111] [scrollbar-width:thin] phone:max-h-[calc(100dvh_-_24px)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
        tabIndex={-1}
        initial={enabled ? { y: 45, scale: 0.97 } : false}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.35, ease: EASE }}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-3 phone:px-3 phone:py-[7px]">
          <span className={cn(eyebrow, "text-[10px] text-accent")}>
            {project.category} {project.year && ` / ${project.year}`}
          </span>
          <IconButton
            bordered={false}
            onClick={onClose}
            aria-label="Close project"
          >
            <X />
          </IconButton>
        </div>
        <DialogMedia key={info.embedMedia} project={project} info={info} />
        {showControls && (
          <RenderControls
            modes={info.availableModes}
            activeMode={info.effectiveMode}
            onMode={setRenderMode}
            shot={shot}
            shotCount={shotCount}
            onShot={setShot}
          />
        )}
        <div className="flex items-start justify-between gap-[30px] p-6 narrow:gap-5 phone:flex-col phone:gap-4 phone:p-[18px]">
          <div>
            <h2
              id="dialog-title"
              className="mb-[10px] text-[clamp(20px,3vw,29px)] font-bold leading-[1.3] tracking-[-0.04em] phone:text-[23px]"
            >
              {project.title}
            </h2>
            {project.role && (
              <span className="text-[11px] text-accent">{project.role}</span>
            )}
            <p className="mt-3 max-w-[630px] text-[12px] text-muted phone:text-[11px]">
              {project.description}
            </p>
          </div>
          {info.sourceUrl && (
            <a
              className={cn(
                outlineButtonClass,
                "mt-1 shrink-0 narrow:px-3 narrow:py-[10px] narrow:text-[10px] phone:w-full phone:text-[11px]",
              )}
              href={info.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.type === "website"
                ? "Visit website"
                : "Open original source"}
              <ExternalLink size={15} />
            </a>
          )}
        </div>
        {info.isVideo && (
          <p className="px-6 pb-[22px] text-[10px] text-muted phone:px-[18px] phone:pb-[18px] phone:text-[9px]">
            If the owner has restricted the video, use “Open original source”.
          </p>
        )}
      </motion.div>
    </motion.div>
  );
}
