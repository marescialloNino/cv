import {
  KireyLogo
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

interface Project {
  title: string;
  techStack: string[];
  description: string;
  logo: any; 
  link?: {
    label: string;
    href: string;
  };
}

interface Education {
  school: string;
  degree: string;
  start: string;
  end?: string;
}

interface WorkExperience {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo?: any; // Adjust based on your actual usage, e.g., string for logo URLs or a specific component type for logos
  start: string;
  end?: string;
  description: string;
}

export interface ResumeData {
  name: string;
  initials?: string;
  location: string;
  locationLink?: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl?: string;
  contact: {
    email?: string;
    tel?: string;
    social?: Array<{
      name: string;
      url: string;
      icon: typeof GitHubIcon | typeof LinkedInIcon | typeof XIcon; // Example, adjust as necessary
    }>;
  };
  education?: Education[];
  work?: WorkExperience[];
  skills: string[];
  projects?: Project[]; // Marked as optional
}

export const RESUME_DATA: ResumeData = {
  name: "Nicola Schiavo",
  initials: "NS",
  location: "Venice, Italy",
  locationLink: "https://www.google.com/maps/place/Venice",
  about:
    "Electrical/Mathematical Engineer who likes to code and build, ",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "CvPhoto",
  personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "nicola.schiavoo@gmail.com",
    tel: "+393453999183",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/marescialloNino",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nicola-schiavo-a3281b271/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "University of Padua",
      degree: "Bachelor's Degree Electrical engineering",
      start: "2019",
      end: "2023",
    },
    {
      school: "University of Padua",
      degree: "Masters Degree Mathematical engineering",
      start: "2023",
      end: "",
    }
  ],
  work: [
    {
      company: "Kirey Group SRL",
      link: "https://www.kireygroup.com",
      badges: ["Remote"],
      title: "Java Software Developer",
      logo: KireyLogo,
      start: "April 2023",
      end: "",
      description:
        "Worked on several Java/Spring Boot web applications, mainly on an internal IOT platform for the industry sector (built from scratch), where i worked with several technologies, including Python, MongoDB, Docker, MQTT messaging protocol, LoRa Wan protocol, edgeX and Grafana.",
    },
  ],
  skills: [
    "Java",
    "SpringBoot",
    "MongoDB",
    "PostgreSQL",
    "Python",
    "Grafana",
  ],
  
} as const;
