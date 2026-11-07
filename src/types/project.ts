export type ProjectType = "youtube" | "drive" | "render" | "image" | "website";

export type RenderMode = "layout" | "solid" | "material" | "lighting" | "final";

export interface RenderShot {
  image?: string;
  video?: string;
  drive?: string;
  layout?: string;
  solid?: string;
  material?: string;
  lighting?: string;
  final?: string;
  hideSolidMode?: boolean;
}

export interface Project {
  type: ProjectType;
  title: string;
  description: string;
  media: string;
  role?: string;
  year?: string;
  category: string;
  image: string;
  renders?: RenderShot[];
}

export interface SideProject {
  title: string;
  year: string;
  image: string;
  description: string;
}

export interface Experience {
  date: string;
  title: string;
  place: string;
  text: string;
}

export interface ProcessStep {
  num: string;
  title: string;
  text: string;
}
