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
  ,
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
    title: "Kitchen assistant",
    company_name: "Shangri-La Hotel",
    icon: shangrila,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
  },
  {
    title: "Kitchen supervisor",
    company_name: "Adare Manor Hotel",
    icon: adaremanor,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
  },
  {
    title: "Customer service assistance",
    company_name: "Viagogo",
    icon: viagogo,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
  },
  {
    title: "Kitchen assistant",
    company_name: "1826 Restaurant",
    icon: restaurant1826,
    iconBg: "#E6DEDD",
    date: "Dec 2023 - Present",
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
    name: "nilAI",
    description:
      "Fully designed and ready for production, modern landing page for SaaS application with possibility to make a test payment via Stripe payment gateway. MERN stack.",
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
      "A web application that replicates the core functionality of the popular music streaming service Spotify. It allows users to browse songs and albums and play music, also contains Admin Panel to create and manage songs & playlists.",
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
        name: "mongoDB",
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
      "The frontend application that enables users to search and filter through specialized doctors.",
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
