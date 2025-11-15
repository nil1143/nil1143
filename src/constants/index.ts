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
} from "react-icons/si";

// Define technologies with their colors FIRST
export const technologies = {
  javascript: { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
  typescript: { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
  react: { icon: SiReact, name: "React", color: "#61DAFB" },
  nextjs: { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
  tailwind: { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  mongodb: { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  prisma: { icon: SiPrisma, name: "Prisma", color: "#23282f" },
  stripe: { icon: SiStripe, name: "Stripe", color: "#635BFF" },
  express: { icon: SiExpress, name: "Express", color: "#000000" },
  html5: { icon: SiHtml5, name: "HTML5", color: "#E34F26" },
};

// import project_chat from "@/public/project-chat.png";
// import project_jobsearch from "@/public/project-img-jobsearch.png";
// import project_event from "@/public/project-img-event.png";
// import project_nilai from "@/public/project-img-nilai.png";
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
      technologies.nextjs,
      technologies.mongodb,
      technologies.tailwind,
    ],
    image: "/project-chat.png",
    source_code_link: "https://github.com/nil1143/streamify",
    live_link: "https://streamify-bmad.onrender.com",
    category: "full-stack",
    features: [
      {
        title: "Real-time Chat",
        description: "WebSocket-powered instant messaging with typing indicators and read receipts"
      },
      {
        title: "Friend Discovery",
        description: "Search and connect with users through friend request system"
      },
      {
        title: "Theme Customization",
        description: "Light/dark mode with persistent user preferences"
      },
      {
        title: "Responsive Design",
        description: "Fully responsive across all devices with mobile-first approach"
      }
    ],
    highlights: [
      {
        title: "Real-time Communication",
        description: "Implemented Socket.io for instant messaging and live presence updates",
        color: "blue"
      },
      {
        title: "State Management",
        description: "Redux for complex chat state, friend lists, and notification handling",
        color: "orange"
      },
      {
        title: "MongoDB Integration",
        description: "Efficient data modeling for users, messages, and relationships",
        color: "purple"
      }
    ]
  },
  {
    slug: "job-search",
    name: "JobSearch App",
    description:
      "MERN application built with Next.js and TypeScript. Connects job seekers and employers with features for listings, profiles and secure workflows — hosted on Vercel.",
    technologies: [
      technologies.typescript,
      technologies.nextjs,
      technologies.prisma,
      technologies.stripe,
      technologies.tailwind,
    ],
    image: "/project-img-jobsearch.png",
    source_code_link: "https://github.com/nil1143/job-search",
    live_link: "https://job-search-roan.vercel.app",
    category: "full-stack",
    features: [
      {
        title: "Job Listings Management",
        description: "Create, edit, and manage job postings with rich text descriptions"
      },
      {
        title: "Applicant Tracking",
        description: "Track applications, review candidates, and manage hiring pipeline"
      },
      {
        title: "Stripe Integration",
        description: "Premium job listings and subscription-based employer features"
      },
      {
        title: "Advanced Search",
        description: "Filter jobs by location, salary, type, and experience level"
      }
    ],
    highlights: [
      {
        title: "TypeScript & Type Safety",
        description: "Full type coverage with Prisma ORM for database type generation",
        color: "blue"
      },
      {
        title: "Payment Processing",
        description: "Integrated Stripe webhooks for subscription management and payments",
        color: "purple"
      },
      {
        title: "Authentication & Authorization",
        description: "Role-based access control for job seekers and employers",
        color: "orange"
      }
    ]
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
    source_code_link: "https://github.com/nil1143/event-mern",
    live_link: "https://event-mern-nine.vercel.app/",
    category: "full-stack",
    features: [
      {
        title: "Event Creation",
        description: "Create and manage events with custom details, pricing, and capacity"
      },
      {
        title: "Ticket Booking",
        description: "Secure ticket purchasing with Stripe payment integration"
      },
      {
        title: "Event Discovery",
        description: "Browse and search events by category, date, and location"
      },
      {
        title: "User Dashboard",
        description: "Manage created events and view purchased tickets in one place"
      }
    ],
    highlights: [
      {
        title: "Payment Integration",
        description: "Stripe Checkout for secure ticket purchases and refunds",
        color: "purple"
      },
      {
        title: "Image Upload",
        description: "Cloudinary integration for event image management and optimization",
        color: "blue"
      },
      {
        title: "Server Actions",
        description: "Next.js 14 Server Actions for type-safe mutations and data fetching",
        color: "orange"
      }
    ]
  },
  {
    slug: "nilai",
    name: "nilAI",
    description:
      "Modern React landing page for a SaaS product — UI‑only, responsive and production‑ready with polished components.",
    technologies: [
      technologies.react,
      technologies.tailwind,
      technologies.express,
    ],
    image: "/project-img-nilai2.png",
    source_code_link: "https://github.com/nil1143/saas_landing_stripe",
    live_link: "https://saas-landing-pi.vercel.app/",
    category: "ui",
    features: [
      {
        title: "Modern UI Design",
        description: "Clean, professional interface with smooth animations"
      },
      {
        title: "Responsive Layout",
        description: "Mobile-first design that works on all screen sizes"
      },
      {
        title: "Interactive Components",
        description: "Engaging CTAs, accordions, and testimonial sections"
      },
      {
        title: "Performance Optimized",
        description: "Fast load times with optimized assets and lazy loading"
      }
    ],
    highlights: [
      {
        title: "Component Architecture",
        description: "Reusable React components with clean separation of concerns",
        color: "blue"
      },
      {
        title: "Tailwind Mastery",
        description: "Advanced Tailwind patterns including custom animations and gradients",
        color: "purple"
      },
      {
        title: "Deployment Ready",
        description: "Production-optimized build with Vercel deployment configuration",
        color: "orange"
      }
    ]
  },
];

// Helper functions
export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};

export const getProjectsByCategory = (category: Project["category"]) => {
  return projects.filter((project) => project.category === category);
};