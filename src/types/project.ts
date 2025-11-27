import { IconType } from "react-icons";

export interface Technology {
  icon: IconType;
  name: string;
  color: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Highlight {
  title: string;
  description: string;
  color: "orange" | "blue" | "purple" | "green" | "red";
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  technologies: Technology[];
  image: string;
  images?: string[];
  source_code_link: string;
  live_link: string;
  category: "full-stack" | "frontend" | "games";
  features: Feature[];
  highlights: Highlight[];
}