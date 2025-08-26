import {
  javascript,
  html,
  css,
  tailwind,
  reactjs,
  nodejs,
  mongodb,
  git,
  restaurant1826,
  adaremanor,
  viagogo,
  shangrila,
  project_nilai,
  github_icon,
  linkedin_icon,
  project_jobsearch,
  project_event,
  project_chat,
} from "../assets";

export const navLinks = [
  {
    id: "project",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const heroContent = {
  header1: `Hi, I'm `,
  header2: "Tom.",
  paragraph1: "I develop web applications",
  paragraph2: "user interfaces and 3D visuals",
};

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

const experiences = [
  {
    title: "Independent / Contract",
    company_name: "Freelance Frontend Developer",
    icon: shangrila,
    iconBg: "#383E56",
    date: "Apr 2024 -  Oct 2024",
    points: [
      "Built resAponsive, accessible front‑end interfaces from Figma designs using React and modern CSS.",
      "Implemented client-side state, integrated REST APIs and handled authentication flows for small business projects.",
      "Deployed apps to Vercel and iterated based on client feedback to improve UX and performance.",
      "Collaborated directly with founders and designers to scope work, deliver milestones, and maintain documentation (see related projects).",
    ],
  },
  {
    title: "Customer service assistance / Remote",
    company_name: "Viagogo",
    icon: viagogo,
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
    icon: restaurant1826,
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
    icon: adaremanor,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tom proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tom does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Tom optimized our website, our traffic increased by 50%. We can't thank him enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Streamify Chat App",
    description:
      "MERN stack React app with a production-ready backend. Frontend focuses on discovering friend-request flow, real-time chat, theming, and responsive UI.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "daisyui",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "next.js",
        color: "green-text-gradient",
      },
    ],
    image: project_chat,
    source_code_link: "https://github.com/nil1143/streamify",
    live_link: "https://streamify-bmad.onrender.com",
  },
  {
    name: "JobSearch App",
    description:
      "MERN application built with Next.js and TypeScript. Connects job seekers and employers with features for listings, profiles and secure workflows — hosted on Vercel.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "shadcn",
        color: "pink-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: project_jobsearch,
    source_code_link: "https://github.com/nil1143/job-search",
    live_link: "https://job-search-roan.vercel.app",
  },
  {
    name: "Evently",
    description:
      "Evently is a full-stack event management application built using the MERN stack and Next.js framework.",
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: project_event,
    source_code_link: "https://github.com/nil1143/event-mern",
    live_link: "https://event-mern-nine.vercel.app/",
  },
  {
    name: "nilAI",
    description:
      "Modern React landing page for a SaaS product — UI‑only, responsive and production‑ready with polished components.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
    ],
    image: project_nilai,
    source_code_link: "https://github.com/nil1143/saas_landing_stripe",
    live_link: "https://saas-landing-pi.vercel.app/",
  },
];

const socials = [
  {
    id: "0",
    title: "Github",
    icon: github_icon,
    url: "https://github.com/nil1143",
  },
  {
    id: "1",
    title: "LinkedIn",
    icon: linkedin_icon,
    url: "https://www.linkedin.com/in/tomasz-nilipiuk-b5b88a239/",
  },
];

export {
  technologies,
  experiences,
  testimonials,
  projects,
  heroContent,
  socials,
};
