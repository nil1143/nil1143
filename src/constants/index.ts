import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiPrisma,
  SiStripe,
  SiExpress,
  SiHtml5,
  SiNodedotjs,
  SiVite,
  SiGit,
  SiPostgresql,
  SiShadcnui,
  SiNetlify,
  SiVercel,
} from "react-icons/si";

import { BiLogoVisualStudio } from "react-icons/bi";

// Define technologies with their colors FIRST
export const technologies = {
  javascript: { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  typescript: { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  react: { icon: SiReact, name: "React", color: "#61DAFB" },
  nextjs: { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  nodejs: { icon: SiNodedotjs, name: "Node.js", color: "#339933" },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  prisma: { icon: SiPrisma, name: "Prisma", color: "#23282f" },
  stripe: { icon: SiStripe, name: "Stripe", color: "#635BFF" },
  express: { icon: SiExpress, name: "Express", color: "#000000" },
  vite: { icon: SiVite, name: "Vite", color: "#646CFF" },
  html5: { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
  git: { icon: SiGit, name: "Git", color: "#F05032" },
  postgresql: { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
  vscode: { icon: BiLogoVisualStudio, name: "VS Code", color: "#007ACC" },
  shadcn: { icon: SiShadcnui, name: "shadcn/ui", color: "#000000" },
  vercel: { icon: SiVercel, name: "Vercel", color: "#000000" },
  netlify: { icon: SiNetlify, name: "Netlify", color: "#00C7B7" },
};

import type { Experience } from "@/types/experience";
import type { Project } from "@/types/project";

export const experiences: Experience[] = [
  {
    title: "Independent / Contract",
    company_name: "Freelance Frontend Developer",
    icon: "/shangri-la.webp",
    iconBg: "#383E56",
    date: "Apr 2024 -  Oct 2024",
    points: [
      "Built responsive, accessible front‑end interfaces from Figma designs using React and modern CSS.",
      "Implemented client-side state, integrated REST APIs and handled authentication flows for small business projects.",
      "Deployed apps to Vercel and iterated based on client feedback to improve UX and performance.",
      "Collaborated directly with founders and designers to scope work, deliver milestones, and maintain documentation (see related projects).",
    ],
  },
  {
    title: "Customer service assistance / Remote",
    company_name: "Viagogo",
    icon: "/viagogo.webp",
    iconBg: "#383E56",
    date: "Sep 2022 - Jun 2023",
    points: [
      "Assisted customers with event and ticket management via phone and email, resolving inquiries efficiently.",
      "Handled troubleshooting, refunds, and escalations following company procedures to achieve timely resolutions.",
      "Collaborated with cross‑functional teams using Slack and Microsoft Teams to share ticket updates and coordinate actions.",
      "Documented recurring issues and provided actionable feedback to product and engineering teams.",
      "Maintained accurate case records and prioritised escalations to improve customer satisfaction.",
    ],
  },
  {
    title: "Self‑directed / Limerick College",
    company_name: "Start Coding Journey",
    icon: "/1826.webp",
    iconBg: "#E6DEDD",
    date: "Dec 2021 - current",
    points: [
      "Completed Web Authoring QQI Level 5 (Limerick College) — learned practical HTML, CSS and JavaScript fundamentals.",
      "Continued as a self‑taught developer, mastering responsive design and modern CSS like Tailwind to build polished UIs.",
      "Adopted React and built single‑page apps, handling client‑side state and integrating REST APIs.",
      "Progressed to full‑stack projects (Next.js / Node / MongoDB), deployed apps and maintained detailed READMEs.",
      "Document and iterate on projects based on feedback — skills transferable to collaborative Agile teams.",
    ],
  },
  {
    title: "Kitchen supervisor / Full Time",
    company_name: "Adare Manor Hotel",
    icon: "/adare-manor.webp",
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Jun 2022",
    points: [
      "Supported daily kitchen operations and maintained service quality during peak periods.",
      "Coordinated with a team to prioritise and delegate tasks, demonstrating teamwork and time‑management transferable to Agile workflows.",
      "Adapted quickly to changing priorities under pressure to maintain throughput and service levels.",
      "Followed procedures and kept accurate records, showing attention to detail and reliability.",
    ],
  },
];

export const projects: Project[] = [
  {
    slug: "streamify",
    name: "Streamify Chat App",
    description:
      "MERN stack React app with a production-ready backend. Frontend focuses on discovering friend-request flow, real-time chat, theming, and responsive UI.",
    technologies: [
      technologies.javascript,
      technologies.react,
      technologies.vite, // Add - mentioned in description: "React + Vite"
      technologies.nodejs, // Add - MERN stack = Node.js backend
      technologies.express, // Add - Express backend
      technologies.mongodb,
      technologies.tailwind,
    ],
    image: "/project-chat.png",
    images: [
      "/screenshoots/streamify-dashboard.png",
      "/screenshoots/streamify-onboarding.png",
      "/screenshoots/streamify-notifications.png",
      "/screenshoots/streamify-create.png",
      "/screenshoots/streamify-chat.png",
      "/screenshoots/streamify-call.png",
    ],
    source_code_link: "https://github.com/nil1143/streamify",
    live_link: "https://streamify-bmad.onrender.com",
    category: "full-stack",
    features: [
      {
        title: "Real-time Messaging",
        description:
          "Instant chat with language partners using Stream Chat SDK with message persistence",
      },
      {
        title: "Friend Discovery System",
        description:
          "Browse and connect with language partners through smart friend request workflow",
      },
      {
        title: "Video Calling",
        description:
          "Built-in video calls powered by Stream Video SDK with shareable call links",
      },
      {
        title: "Profile Customization",
        description:
          "Complete onboarding with language preferences, location, and bio setup",
      },
      {
        title: "Theme Switcher",
        description:
          "31 DaisyUI themes with localStorage persistence for personalized experience",
      },
    ],
    highlights: [
      {
        title: "React Query Integration",
        description:
          "Efficient server state management with caching and automatic refetching for smooth UX",
        color: "blue",
      },
      {
        title: "Responsive Design",
        description:
          "Mobile-first approach with Tailwind CSS and conditional sidebar rendering for all screen sizes",
        color: "purple",
      },
      {
        title: "Authentication Flow",
        description:
          "Secure JWT-based auth with HTTP-only cookies and protected routes using custom hooks",
        color: "orange",
      },
    ],
  },
  {
    slug: "job-search",
    name: "JobSearch App",
    description:
      "MERN application built with Next.js and TypeScript. Connects job seekers and employers with features for listings, profiles and secure workflows — hosted on Vercel.",
    technologies: [
      technologies.typescript,
      technologies.nextjs,
      technologies.nodejs,
      technologies.prisma,
      technologies.stripe,
      technologies.tailwind,
    ],
    image: "/project-img-jobsearch.png",
    images: [
      "/screenshoots/job-search-onboarding.png",
      "/screenshoots/job-search-home.png",
      "/screenshoots/job-search-detail.png",
    ],
    source_code_link: "https://github.com/nil1143/job-search",
    live_link: "https://job-search-roan.vercel.app",
    category: "full-stack",
    features: [
      {
        title: "Advanced Job Search",
        description:
          "Filter jobs by type, location, and salary with URL-based state persistence",
      },
      {
        title: "Dual User Roles",
        description:
          "Separate onboarding flows for job seekers and employers with role-based dashboards",
      },
      {
        title: "Stripe Payment Integration",
        description:
          "Tiered pricing for job listings (7, 14, 30 days) with secure checkout flow",
      },
      {
        title: "Job Management",
        description:
          "Create, edit, and manage job postings with draft-to-active status workflow",
      },
      {
        title: "Saved Jobs",
        description:
          "Bookmark favorite listings with instant UI updates and persistence",
      },
    ],
    highlights: [
      {
        title: "Next.js 15 Server Actions",
        description:
          "Type-safe server mutations with Zod validation and optimistic UI updates",
        color: "blue",
      },
      {
        title: "URL-Based State Management",
        description:
          "Search filters persist via URL params with seamless client-side navigation",
        color: "purple",
      },
      {
        title: "OAuth Authentication",
        description:
          "NextAuth.js integration with GitHub/Google providers and protected routes",
        color: "orange",
      },
    ],
  },
  {
    slug: "evently",
    name: "Evently",
    description:
      "Evently is a full-stack event management application built using the MERN stack and Next.js framework.",
    technologies: [
      technologies.typescript,
      technologies.nextjs,
      technologies.mongodb,
      technologies.stripe,
      technologies.tailwind,
    ],
    image: "/project-img-event.png",
    images: [
      "/screenshoots/event-home2.png",
      "/screenshoots/event-detail.png",
      "/screenshoots/event-mytickets.png",
      "/screenshoots/event-signup.png",
      "/screenshoots/event-create.png",
      "/screenshoots/event-settings.png",
    ],
    source_code_link: "https://github.com/nil1143/event-mern",
    live_link: "https://event-mern-nine.vercel.app/",
    category: "full-stack",
    features: [
      {
        title: "Clerk Authentication",
        description:
          "Secure user signup/sign-in, profiles, and session management",
      },
      {
        title: "CRUD Event Management",
        description:
          "Create, read, update, delete events with metadata (date, location, description)",
      },
      {
        title: "Ticket checkout",
        description: "Secure checkout and payment handling with Stripe",
      },
      {
        title: "Search & Filter",
        description: "Filterable discovery and related-event recommendations",
      },
      {
        title: "User Dashboard & Orders",
        description:
          "View and manage created events, tickets, and order search",
      },
    ],
    highlights: [
      {
        title: "Next.js Server Actions",
        description:
          "Server-side, type-safe mutations and simplified API surface",
        color: "purple",
      },
      {
        title: "TypeScript-first codebase",
        description: "Full typing for safety and better DX",
        color: "blue",
      },
      {
        title: "UploadThing/Cloudinary for images",
        description: "Optimized, scalable image handling",
        color: "orange",
      },
    ],
  },
  {
    slug: "nilai",
    name: "nilAI",
    description:
      "Single-page application showcasing a fictional AI video editing platform. Implements production-ready UI patterns including interactive pricing, smooth scroll navigation, and custom Tailwind design system with 91+ Lighthouse performance.",
    technologies: [
      technologies.react,
      technologies.tailwind,
      technologies.vite,
    ],
    image: "/project-img-nilai2.png",
    images: [
      "/screenshoots/nilai1.png",
      "/screenshoots/nilai2.png",
      "/screenshoots/nilai3.png",
      "/screenshoots/nilai4.png",
      "/screenshoots/nilai5.png",
      "/screenshoots/nilai6.png",
    ],
    source_code_link: "https://github.com/nil1143/saas_landing_stripe",
    live_link: "https://saas-landing-pi.vercel.app/",
    category: "frontend",

    // FEATURES: What the project has (user-facing)
    features: [
      {
        title: "Component Architecture",
        description:
          "Reusable button, accordion, and testimonial components with props-based customization",
      },
      {
        title: "Interactive Pricing",
        description:
          "Monthly/annual toggle with animated price transitions using react-countup",
      },
      {
        title: "Smooth Navigation",
        description:
          "React-scroll integration with active link highlighting and offset-adjusted positioning",
      },
      {
        title: "Custom Design System",
        description:
          "Cohesive color palette, custom shadows, and typography scale for consistent branding",
      },
      {
        title: "Performance Optimized",
        description:
          "Fast load times with lazy loading, code splitting, and optimized image assets",
      },
    ],

    // HIGHLIGHTS: How you built it (technical achievements)
    highlights: [
      {
        title: "Tailwind CSS Mastery",
        description:
          "Extended framework with 9 custom gradients, shadow utilities, and pseudo-element patterns via index.css",
        color: "purple",
      },
      {
        title: "React State Optimization",
        description:
          "Implemented CountUp with preserveValue prop to prevent counter resets during parent re-renders",
        color: "blue",
      },
      {
        title: "Web Vitals Achievement",
        description:
          "91+ performance and 100% accessibility Lighthouse scores through lazy loading and semantic HTML",
        color: "orange",
      },
    ],
  },
];

// Helper functions
export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((project) => project.category === category);
};
