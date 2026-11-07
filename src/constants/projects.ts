import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    type: "image",
    title: "Budgee",
    description:
      "A local-only, privacy-first iOS budgeting app built in Swift.",
    media: "/Asset/img/projects/budgee.png",
    role: "iOS · Swift",
    category: "Mobile",
    image: "/Asset/img/projects/budgee.png",
  },
  {
    type: "image",
    title: "Stylens",
    description:
      "An AI-powered beauty and fashion mobile app for urban women in Indonesia, built with Flutter, MongoDB and Hive, with a multi-stage skin analysis pipeline.",
    media: "/Asset/img/projects/stylens.png",
    role: "Flutter · MongoDB · Hive",
    category: "Mobile",
    image: "/Asset/img/projects/stylens.png",
  },
];

/** Every `category` used in `projects` must be listed here, or its filter shows an empty state. */
export const categories: string[] = ["All", "Mobile"];

const FEATURED_TITLES = ["Budgee", "Stylens"];

export const featuredProjects: Project[] = FEATURED_TITLES.flatMap(
  (title) => projects.find((project) => project.title === title) ?? [],
);
