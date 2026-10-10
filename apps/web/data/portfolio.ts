export type Social = {
  platform: string
  url: string
}

export type ProjectItem = {
  title: string
  slug: string
  shortDescription: string
  tags: string[]
  githubUrl?: string
  youtubePlaylistUrl?: string
  tiktokPlaylistUrl?: string
  demoUrl?: string
  learnings?: string
  date?: string
  status?: "Completado" | "En desarrollo" | "Experimento"
}

export type ArticleItem = {
  title: string
  date: string
  slug: string
  tag?: string
  excerpt?: string
  mobileExcerpt?: string
}

export type Portfolio = {
  name: string
  hero: {
    title: string
    subtitle: string
  }
  heroImage: string
  about: {
    statement: string
    detail: string
  }
  projects: ProjectItem[]
  articles: ArticleItem[]
  community: {
    label: string
    url: string
  }
  contact: {
    heading: string
    cta: string
    email: string
    socials: Social[]
  }
}

export const portfolio: Portfolio = {
  name: "SILANTRO LABS",
  hero: {
    title: "SILANTRO LABS",
    subtitle: "Productos digitales, software e ideas.",
  },
  heroImage: "/logo-transparent.png",
  about: {
    statement:
      "Un espacio para crear proyectos, probar ideas y aprender haciendo.",
    detail:
      "Desde pequeñas herramientas hasta aplicaciones completas, sin miedo a experimentar.",
  },
  projects: [
    {
      title: "Bot de Discord en Python para SILANTRO LABS",
      slug: "bot-discord-python-silantro-labs",
      shortDescription:
        "Bot oficial de la comunidad: comandos slash, roles y automatizaciones en tiempo real.",
      tags: ["Python", "discord.py", "AsyncIO", "API", "Automation"],
      githubUrl: "https://github.com",
      youtubePlaylistUrl: "https://youtube.com",
      tiktokPlaylistUrl: "https://tiktok.com",
      learnings:
        "Arquitectura asíncrona con discord.py (Cogs y extensiones modulares), manejo de eventos en tiempo real, persistencia de datos y despliegue continuo de bots en servidores cloud.",
      date: "07.10.2026",
      status: "En desarrollo",
    },
  ],
  articles: [
    {
      title: "El comienzo de SILANTRO LABS",
      date: "07.10.2026",
      slug: "el-comienzo-de-silantro-labs",
      tag: "Publicación 01",
      excerpt: "Detrás de Silantro estoy yo: Miguel. Esta es la historia de cómo pasé de 'hackear' juegos a los 15 años a crear mi propio laboratorio de software.",
      mobileExcerpt: "De hackear juegos a crear este laboratorio de software.",
    },
  ],
  community: {
    label: "Unirse a la comunidad",
    url: "https://discord.gg/QG6T3DUwj",
  },
  contact: {
    heading: "¿Hablamos?",
    cta: "Contactar →",
    email: "hello@silantrolabs.com",
    socials: [
      { platform: "Discord", url: "https://discord.gg/QG6T3DUwj" },
      { platform: "X", url: "https://x.com" },
      { platform: "GitHub", url: "https://github.com" },
    ],
  },
}
