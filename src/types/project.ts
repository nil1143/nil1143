import { IconType } from "react-icons";

export interface Technology {
  icon: IconType;
  name: string;
  color: string;
}

export interface Project {
  slug: string;
  name: string;
  description: string;
  technologies: Technology[];
  image: string;  // Changed from StaticImageData to string
  source_code_link: string;
  live_link: string;
  category: "full-stack" | "ui" | "games";
}