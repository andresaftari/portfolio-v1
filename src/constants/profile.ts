import type { Experience, ProcessStep, SideProject } from "@/types/project";

export const LINKEDIN_URL =
  "https://www.linkedin.com/in/prasidya-pramadresana-saftari";
export const LINKEDIN_LABEL = "linkedin.com/in/prasidya-pramadresana-saftari";
export const CV_PATH = "/Asset/cv/Andre_Saftari_CV.pdf";
export const PORTRAIT_PATH = "/Asset/img/andre-portrait.png";

export const desktopNav: [string, string][] = [
  ["portfolio", "Work"],
  ["about", "About"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

export const mobileNav: [string, string][] = [
  ["home", "Home"],
  ["portfolio", "Work"],
  ["about", "About"],
  ["experience", "Experience"],
  ["contact", "Contact"],
];

export const experiences: Experience[] = [
  {
    date: "PRESENT",
    title: "Software Developer",
    place: "Remote-first, AI-first company",
    text: "Building front-end web products with React and Next.js and mobile apps with Flutter and React Native/Expo, for international clients across the US, UK, Italy and the EU, within a team of about 15 developers.",
  },
  {
    date: "PRESENT",
    title: "WordPress Workstream Lead",
    place: "Lead / supervisor",
    text: "Leading and supervising a WordPress-related workstream alongside the core web and mobile work.",
  },
  {
    date: "ONGOING",
    title: "Independent Product Builder",
    place: "Side projects",
    text: "Building my own products with the Indonesian market in mind, including a privacy-first iOS budgeting app and an AI-powered beauty and fashion app.",
  },
];

export const sideProjects: SideProject[] = [
  {
    title: "Budgee",
    year: "iOS · Swift",
    image: "/Asset/img/projects/budgee.png",
    description:
      "A local-only, privacy-first iOS budgeting app built in Swift.",
  },
  {
    title: "Stylens",
    year: "Flutter · AI",
    image: "/Asset/img/projects/stylens.png",
    description:
      "An AI-powered beauty and fashion mobile app for urban women in Indonesia, built with Flutter, MongoDB and Hive, with a multi-stage skin analysis pipeline.",
  },
];

export const processSteps: ProcessStep[] = [
  {
    num: "01",
    title: "THE IDEA",
    text: "Listening to your goals. Defining the problem, the users and the outcome that matters.",
  },
  {
    num: "02",
    title: "THE PLAN",
    text: "Scoping the work, choosing the right stack, and mapping a clear path to delivery.",
  },
  {
    num: "03",
    title: "THE BUILD",
    text: "Writing clean, maintainable front-end and mobile code in small, reviewable steps.",
  },
  {
    num: "04",
    title: "THE POLISH",
    text: "Refining performance, accessibility and the details that make a product feel right.",
  },
  {
    num: "05",
    title: "THE LAUNCH",
    text: "Final review, release, and support after launch, so it holds up in the real world.",
  },
];

/** Tool icons shown under the skills, as [file name in `public/Asset/svg`, label]. */
export const software: [string, string][] = [];

export const skills: string[] = [
  "React",
  "Next.js",
  "Flutter",
  "React Native / Expo",
  "WordPress",
  "Front-end Development",
  "Mobile Development",
  "AI-assisted Development",
];
