export type Social = {
  platform: string
  url: string
}

export type Project = {
  title: string
  description: string
  tags: string[]
  image: string
  url?: string
  span?: "wide" | "tall"
}

export type Portfolio = {
  name: string
  role: string
  tagline: string
  heroImage: string
  about: {
    bio: string
    skills: string[]
  }
  projects: Project[]
  contact: {
    email: string
    socials: Social[]
  }
}

export const portfolio: Portfolio = {
  name: "Ali Madjaji",
  role: "Designer & Developer",
  tagline: "Crafting digital experiences that put people first.",
  heroImage: "/ali.webp",
  about: {
    bio: "I'm a designer and developer with a passion for creating intuitive, human-centered digital products. With experience spanning UX research, interface design, and front-end development, I bridge the gap between design intent and technical execution.",
    skills: [
      "UX Design",
      "UI Design",
      "Prototyping",
      "User Research",
      "React",
      "TypeScript",
      "Figma",
      "Design Systems",
    ],
  },
  projects: [
    {
      title: "Mindful — Wellness App",
      description:
        "A mobile-first wellness application designed to help users build healthy daily habits through gentle reminders and progress tracking.",
      tags: ["UX", "Mobile", "Research"],
      image: "/images/project-01.svg",
      url: "/projects/mindful",
    },
    {
      title: "Nova Dashboard",
      description:
        "A comprehensive analytics dashboard for SaaS products, featuring real-time data visualization and customizable widgets.",
      tags: ["UI", "Dashboard", "Design System"],
      image: "/images/project-02.svg",
      url: "/projects/nova-dashboard",
    },
    {
      title: "Bloom — E-commerce Redesign",
      description:
        "Complete redesign of an online plant shop, improving conversion rates by 40% through streamlined checkout and enhanced product discovery.",
      tags: ["UX", "E-commerce", "Branding"],
      image: "/images/project-03.svg",
      url: "/projects/bloom",
      span: "tall",
    },
    {
      title: "Pulse — Design System",
      description:
        "A scalable design system built for a fintech startup, ensuring consistency across 12 product surfaces with documented components and tokens.",
      tags: ["Design System", "UI", "Development"],
      image: "/images/project-04.svg",
      url: "/projects/pulse",
      span: "wide",
    },
  ],
  contact: {
    email: "contact@alimadjaji.com",
    socials: [
      { platform: "LinkedIn", url: "https://linkedin.com" },
      { platform: "Dribbble", url: "https://dribbble.com" },
      { platform: "GitHub", url: "https://github.com" },
    ],
  },
}
