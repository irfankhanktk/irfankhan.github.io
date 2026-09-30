import type { IconKey } from "@/lib/icons";

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  /** Short words cycled in the hero ("I build ___"). */
  roles: string[];
  /** Highlighted stack shown in the hero code window. */
  stack: string[];
  location: string;
  availability: string;
  email: string;
  resumeUrl: string;
  /** Used for the <meta name="description"> and social previews. */
  description: string;
  keywords: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: IconKey;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  summary: string;
}

export interface About {
  paragraphs: string[];
  stats: Stat[];
  experience: Experience[];
  education: { school: string; degree: string; period: string };
  certifications: string[];
}

export interface Skill {
  name: string;
  icon: IconKey;
}

export interface SkillGroup {
  category: string;
  icon: IconKey;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  /** Path under /public (e.g. "/projects/app.png") or a remote URL allowed in next.config.ts. */
  image: string;
  imageAlt: string;
  tags: string[];
  githubUrl?: string;
  /** Leave undefined to hide the "Live" button. */
  liveUrl?: string;
  featured?: boolean;
}

export interface Service {
  title: string;
  description: string;
  icon: IconKey;
  deliverables: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  country: string;
  project?: string;
  /** Placeholder entries show in development only and are hidden in production builds. */
  placeholder?: boolean;
}

export interface NavItem {
  label: string;
  href: `#${string}`;
}
