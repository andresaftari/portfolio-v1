import type { Project, SideProject } from "@/types/project";

export function sideProjectToProject(
  sideProject: SideProject,
  category: string,
): Project {
  return {
    ...sideProject,
    type: "image",
    media: sideProject.image,
    category,
  };
}

export function projectKey(project: Project): string {
  return project.category + project.title + project.media;
}
