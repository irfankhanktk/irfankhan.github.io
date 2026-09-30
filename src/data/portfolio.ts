/**
 * ─────────────────────────────────────────────────────────────
 *  ALL PERSONAL CONTENT LIVES IN THIS FILE.
 *  Edit text, links, skills, projects and reviews here —
 *  no component changes needed. See README.md for details.
 * ─────────────────────────────────────────────────────────────
 */
import type {
  About,
  NavItem,
  Project,
  Service,
  SiteConfig,
  SkillGroup,
  SocialLink,
  Testimonial,
} from "@/types/portfolio";

export const site: SiteConfig = {
  name: "Irfan Khan",
  title: "Full Stack Developer",
  tagline:
    "I build fast, scalable web and mobile applications from frontend to backend.",
  roles: ["web apps", "mobile apps", "REST APIs", "search experiences"],
  stack: ["ASP.NET Core", "Next.js", "React Native", "Elasticsearch", "Azure"],
  location: "Islamabad, Pakistan",
  availability: "Available for remote & freelance work",
  email: "irrfankhanktk@gmail.com",
  resumeUrl: "/resume.pdf",
  description:
    "Irfan Khan is a Full Stack Developer in Islamabad, Pakistan with 5+ years of experience building web apps with Next.js and ASP.NET Core, mobile apps with React Native, and search with Elasticsearch. Available for remote and freelance work.",
  keywords: [
    "Irfan Khan",
    "Full Stack Developer",
    "Next.js Developer",
    "React Native Developer",
    "ASP.NET Core Developer",
    "Elasticsearch",
    "Freelance Developer Pakistan",
    "Upwork Developer",
  ],
};

export const socials: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/irfankhanktk", icon: "github" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/irfan-khan-31a2a0225/",
    icon: "linkedin",
  },
  {
    label: "Upwork",
    href: "https://www.upwork.com/freelancers/~0149da9e09673c6b40",
    icon: "upwork",
  },
];

export const upworkUrl = socials.find((s) => s.icon === "upwork")!.href;

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const about: About = {
  paragraphs: [
    "I'm a full stack developer with 5+ years of experience building secure, scalable products — from ASP.NET Core and Node.js APIs to Next.js web apps and React Native mobile apps. I care about clean architecture, maintainable code and systems that stay fast as data grows.",
    "Lately I've been building advanced search with Elasticsearch and AI features with retrieval-augmented generation (RAG). I'm looking for remote roles and freelance projects with startups and teams who want a reliable engineer who can own a feature end to end.",
  ],
  stats: [
    { value: "5+", label: "Years building software" },
    { value: "3", label: "Platforms: web, mobile & API" },
    { value: "5", label: "Companies & product teams" },
  ],
  experience: [
    {
      company: "TEO International",
      role: "Senior Software Engineer",
      period: "Oct 2023 — Present",
      summary:
        "Full stack development with ASP.NET Core Web API, Next.js and Elasticsearch.",
    },
    {
      company: "Prismatic Technologies",
      role: "Senior React Native Developer",
      period: "Nov 2022 — Sep 2023",
      summary: "Led mobile feature development for cross-platform apps.",
    },
    {
      company: "WitBit Ltd",
      role: "React Native Developer",
      period: "Jun 2022 — Jan 2023",
      summary: "Built and shipped React Native features for client apps.",
    },
    {
      company: "Bellatrix",
      role: "Full Stack Developer",
      period: "Dec 2021 — Jul 2022",
      summary: "Node.js back ends and React Native apps, including hospitality clients.",
    },
    {
      company: "Excelorithm",
      role: "React Native Developer",
      period: "Feb 2021 — May 2022",
      summary: "Started my career building production mobile apps.",
    },
  ],
  education: {
    school: "Arid Agriculture University",
    degree: "BS, Computational Science",
    period: "2017 — 2021",
  },
  certifications: ["Microsoft Certified: Azure Fundamentals", "Next.js — Beginner to Advanced"],
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "layout",
    skills: [
      { name: "React", icon: "react" },
      { name: "Next.js", icon: "nextjs" },
      { name: "TypeScript", icon: "typescript" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Redux", icon: "redux" },
    ],
  },
  {
    category: "Mobile",
    icon: "mobile",
    skills: [
      { name: "React Native", icon: "react" },
      { name: "Expo", icon: "expo" },
      { name: "Android", icon: "android" },
    ],
  },
  {
    category: "Backend",
    icon: "server",
    skills: [
      { name: "ASP.NET Core", icon: "dotnet" },
      { name: "C#", icon: "csharp" },
      { name: "Node.js", icon: "nodejs" },
      { name: "Express", icon: "express" },
      { name: "REST APIs", icon: "api" },
    ],
  },
  {
    category: "Search & AI",
    icon: "search",
    skills: [
      { name: "Elasticsearch", icon: "elasticsearch" },
      { name: "RAG pipelines", icon: "ai" },
    ],
  },
  {
    category: "Database",
    icon: "database",
    skills: [
      { name: "SQL Server", icon: "sqlserver" },
      { name: "PostgreSQL", icon: "postgresql" },
      { name: "MongoDB", icon: "mongodb" },
      { name: "Firebase", icon: "firebase" },
    ],
  },
  {
    category: "Cloud & Tools",
    icon: "tools",
    skills: [
      { name: "Azure", icon: "azure" },
      { name: "Git", icon: "git" },
      { name: "Docker", icon: "docker" },
      { name: "Vercel", icon: "vercel" },
      { name: "Postman", icon: "postman" },
      { name: "Jira", icon: "jira" },
    ],
  },
];

export const projects: Project[] = [
  {
    title: "DoctorTalk",
    description:
      "My final-year project: a mobile app that connects patients with doctors for consultations and chat, backed by a custom REST API.",
    image: "/projects/doctortalk.svg",
    imageAlt: "DoctorTalk app cover showing a doctor–patient chat screen",
    tags: ["React Native", "Android", "REST API", "Chat"],
    githubUrl: "https://github.com/irfankhanktk/DoctorTalk",
    featured: true,
  },
  {
    title: "Video Call Demo",
    description:
      "One-to-one video calling in React Native using the Agora SDK, with mute, camera switch and end-call controls from the Agora UI Kit.",
    image: "/projects/video-call.svg",
    imageAlt: "Video Call Demo cover showing two video tiles and call controls",
    tags: ["React Native", "TypeScript", "Agora SDK"],
    githubUrl: "https://github.com/irfankhanktk/VIDEO_CALL_DEMO",
  },
  {
    title: "Bakery",
    description:
      "A bakery shop app built with Expo: JWT authentication, validated forms with Formik and Yup, image uploads and Redux state management.",
    image: "/projects/bakery.svg",
    imageAlt: "Bakery app cover showing a product grid",
    tags: ["Expo", "React Native", "Redux", "Formik"],
    githubUrl: "https://github.com/irfankhanktk/BAKERY",
  },
  {
    title: "Fridge",
    description:
      "A food inventory app for tracking what's in your fridge, with offline SQLite storage, expiry dates and local push-notification reminders.",
    image: "/projects/fridge.svg",
    imageAlt: "Fridge app cover showing a list of food items with expiry dates",
    tags: ["React Native", "SQLite", "Push Notifications"],
    githubUrl: "https://github.com/irfankhanktk/Fridge",
  },
];

export const services: Service[] = [
  {
    title: "Web App Development",
    description:
      "Fast, SEO-friendly web applications and dashboards built with Next.js, React and TypeScript.",
    icon: "web",
    deliverables: ["Next.js & React", "Responsive UI", "Admin dashboards"],
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform iOS and Android apps with React Native, from first prototype to store release.",
    icon: "mobile",
    deliverables: ["React Native & Expo", "Push notifications", "Offline storage"],
  },
  {
    title: "API & Backend Development",
    description:
      "Secure, well-structured REST APIs using ASP.NET Core or Node.js with clean architecture.",
    icon: "server",
    deliverables: ["ASP.NET Core / Node.js", "Auth & roles", "Third-party integrations"],
  },
  {
    title: "Search & AI Features",
    description:
      "Elasticsearch-powered search and RAG-based AI assistants that answer from your own data.",
    icon: "search",
    deliverables: ["Elasticsearch indexing", "Relevance tuning", "RAG chat"],
  },
  {
    title: "Bug Fixing & Performance",
    description:
      "Diagnose crashes, slow screens and flaky APIs — then fix them properly, with notes you can keep.",
    icon: "tools",
    deliverables: ["Crash & bug fixes", "Query optimization", "Code review"],
  },
];

/**
 * Paste real Upwork reviews here. Entries marked `placeholder: true`
 * appear only in development (`npm run dev`) and are hidden in production.
 * If no real reviews exist, the whole section is hidden in production.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Placeholder — paste a short Upwork review here. Keep it to 1–3 sentences about the result the client got.",
    name: "Client Name",
    country: "United States",
    project: "Project type",
    placeholder: true,
  },
  {
    quote:
      "Placeholder — a second review works best when it mentions communication or speed of delivery.",
    name: "Client Name",
    country: "United Kingdom",
    project: "Project type",
    placeholder: true,
  },
  {
    quote:
      "Placeholder — a third review about code quality or ongoing support rounds this section out.",
    name: "Client Name",
    country: "Germany",
    project: "Project type",
    placeholder: true,
  },
];
