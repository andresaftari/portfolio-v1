"use client";

import { createContext, useContext } from "react";
import type { Project } from "@/types/project";

export interface ProjectDialogState {
  open: (project: Project) => void;
}

export const ProjectDialogContext = createContext<ProjectDialogState>({
  open: () => {},
});

export function useProjectDialog(): ProjectDialogState {
  return useContext(ProjectDialogContext);
}
