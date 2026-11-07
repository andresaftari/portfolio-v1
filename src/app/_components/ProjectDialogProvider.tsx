"use client";

import { AnimatePresence } from "framer-motion";
import { type ReactNode, useCallback, useMemo, useState } from "react";
import { ProjectDialog } from "@/features/project-dialog/ProjectDialog";
import { ProjectDialogContext } from "@/hooks/use-project-dialog";
import type { Project } from "@/types/project";

export function ProjectDialogProvider({ children }: { children: ReactNode }) {
  const [project, setProject] = useState<Project | null>(null);
  const close = useCallback(() => setProject(null), []);
  const value = useMemo(() => ({ open: setProject }), []);

  return (
    <ProjectDialogContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {project && (
          <ProjectDialog
            key={project.title}
            project={project}
            onClose={close}
          />
        )}
      </AnimatePresence>
    </ProjectDialogContext.Provider>
  );
}
