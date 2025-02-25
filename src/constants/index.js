import {
  mobile,
  backend,
  creator,
  web,
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
  project_spotify,
  project_doc,
  github_icon,
  linkedin_icon,
  project_jobsearch,
  project_event
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
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

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "User Interface",
    icon: mobile,
  },
  {
    title: "Web Applications",
    icon: creator,
  },
  {
    title: "3D Visuals",
    icon: backend,
  },
];

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
    title: "Freelancer- REMOTE",
    company_name: "Freelance Frontend Developer",
    icon: shangrila,
    iconBg: "#383E56",
    date: "Apr 2024 -  Oct 2024",
    points: [
      "Created custom landing pages for local businesses to enhance their online presence.",
      "Utilized modern frameworks like React to build interactive user interfaces.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Provided ongoing site maintenance, bug fixes, and performance optimization.",
    ],
  },
  {
    title: "Kitchen assistant- FULL TIME",
    company_name: "1826 Restaurant",
    icon: restaurant1826,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Dec 2024",
    points: ["Regular daily restaurant tasks."],
  },
  {
    title: "Customer service assistance- REMOTE",
    company_name: "Viagogo",
    icon: viagogo,
    iconBg: "#383E56",
    date: "Sep 2022 - Jun 2023",
    points: [
      "Aswering customer questions via phone and email regarding products, services and company policies.",
      "Offering solutions, which could include troubleshooting, replacements, refunds, or escalations to higher support levels.",
      "Experience with Slack, Microsoft Teams for internal communication, coordination, and sharing customer information with team members.",
    ],
  },
  {
    title: "Kitchen supervisor- FULL TIME",
    company_name: "Adare Manor Hotel",
    icon: adaremanor,
    iconBg: "#E6DEDD",
    date: "Aug 2019 - Jun 2022",
    points: [
      "Direct experience in leading a team, delegating tasks, and managing staff performance.",
      "Overseeing and coordinating the work of kitchen porters, ensure cleanliness and compliance with hygiene regulations.",
      "Training new porters in procedures, health and safety, and proper use of equipment.",
      "Communicating with other departments management about labor needs, equipment issues, or supply shortages.",
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
    name: "JobSearch App",
    description:
      "A powerful platform connecting job seekers and employers with ease. Built with Next.js and TypeScript, Job Board offers a seamless, secure, and feature-rich experience for exploring jobs, creating listings, and managing profiles—all hosted on Vercel.",
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
      "Fully designed and ready for production, modern landing page for SaaS application with possibility to make a test payment with Stripe payment gateway.",
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
      {
        name: "stripe",
        color: "green-text-gradient",
      },
    ],
    image: project_nilai,
    source_code_link: "https://github.com/nil1143/saas_landing_stripe",
    live_link: "https://sass-landing-stripe-frontend.onrender.com",
  },
  {
    name: "Spotify Clone",
    description:
      "A web application that replicates the core functionality of the popular music streaming service Spotify. It allows users to browse songs, albums and play music. Contains Admin Panel to create and manage songs & playlists.",
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
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: project_spotify,
    source_code_link: "https://github.com/nil1143/spotify-mern",
    live_link: "https://spotify-mern-frontend.onrender.com",
  },
  {
    name: "Doctor Appointment",
    description:
      "A React application that enables users to search and filter specialized doctors.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project_doc,
    source_code_link: "https://github.com/nil1143/react-doc-appointment",
    live_link: "https://react-doc-appointment.onrender.com/",
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
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  heroContent,
  socials,
};
