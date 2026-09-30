import type { IconType } from "react-icons";
import { DiMsqlServer } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiMail,
  FiMonitor,
  FiSearch,
  FiServer,
  FiSmartphone,
  FiTool,
} from "react-icons/fi";
import {
  SiAndroid,
  SiDocker,
  SiDotnet,
  SiElasticsearch,
  SiExpo,
  SiExpress,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJavascript,
  SiJira,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiUpwork,
  SiVercel,
} from "react-icons/si";
import { TbApi, TbBrandCSharp, TbSparkles } from "react-icons/tb";
import { VscAzure } from "react-icons/vsc";

/**
 * Central icon registry. The data file refers to icons by these keys,
 * so content stays plain text and icons can be swapped in one place.
 */
export const icons = {
  // Tech
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  javascript: SiJavascript,
  tailwind: SiTailwindcss,
  redux: SiRedux,
  expo: SiExpo,
  android: SiAndroid,
  dotnet: SiDotnet,
  csharp: TbBrandCSharp,
  nodejs: SiNodedotjs,
  express: SiExpress,
  api: TbApi,
  elasticsearch: SiElasticsearch,
  ai: TbSparkles,
  sqlserver: DiMsqlServer,
  postgresql: SiPostgresql,
  mongodb: SiMongodb,
  firebase: SiFirebase,
  azure: VscAzure,
  git: SiGit,
  docker: SiDocker,
  vercel: SiVercel,
  postman: SiPostman,
  jira: SiJira,
  // Social
  github: SiGithub,
  linkedin: FaLinkedin,
  upwork: SiUpwork,
  mail: FiMail,
  // Categories & services
  layout: FiLayout,
  mobile: FiSmartphone,
  server: FiServer,
  database: FiDatabase,
  tools: FiTool,
  search: FiSearch,
  web: FiMonitor,
  code: FiCode,
} satisfies Record<string, IconType>;

export type IconKey = keyof typeof icons;
