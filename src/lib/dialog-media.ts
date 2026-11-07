import type { Project, ProjectType, RenderMode } from "@/types/project";

export const RENDER_MODES: [RenderMode, string][] = [
  ["layout", "Layout"],
  ["solid", "Solid"],
  ["material", "Material"],
  ["lighting", "Lighting"],
  ["final", "Final render"],
];

export interface DialogMediaInfo {
  embedType: ProjectType;
  embedMedia: string;
  isVideo: boolean;
  availableModes: [RenderMode, string][];
  effectiveMode: RenderMode | undefined;
  rendered: string;
  sourceUrl: string;
}

export function resolveDialogMedia(
  project: Project,
  shot: number,
  renderMode: RenderMode,
): DialogMediaInfo {
  const activeShot =
    project.type === "render" ? (project.renders?.[shot] ?? null) : null;
  const embedType: ProjectType = activeShot?.video
    ? "youtube"
    : activeShot?.drive
      ? "drive"
      : project.type;
  const embedMedia =
    activeShot?.video ||
    activeShot?.drive?.match(/\/d\/([^/]+)/)?.[1] ||
    project.media;
  const isVideo = embedType === "youtube" || embedType === "drive";
  const availableModes = RENDER_MODES.filter(
    ([mode]) =>
      activeShot?.[mode] && !(mode === "solid" && activeShot.hideSolidMode),
  );
  const effectiveMode: RenderMode | undefined = activeShot?.[renderMode]
    ? renderMode
    : availableModes[0]?.[0];
  const rendered =
    (effectiveMode && activeShot?.[effectiveMode]) ||
    activeShot?.image ||
    project.image;
  const sourceUrl =
    embedType === "youtube"
      ? `https://www.youtube.com/watch?v=${embedMedia}`
      : embedType === "drive"
        ? `https://drive.google.com/file/d/${embedMedia}/view`
        : project.type === "render"
          ? rendered
          : project.media || project.image;

  return {
    embedType,
    embedMedia,
    isVideo,
    availableModes,
    effectiveMode,
    rendered,
    sourceUrl,
  };
}
