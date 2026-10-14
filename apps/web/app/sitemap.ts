import type { MetadataRoute } from "next"
import { portfolio } from "@/data/portfolio"
import { getAllSlugs } from "@/lib/mdx"

export const dynamic = "force-static"

const BASE_URL = "https://silantrolabs.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString().split("T")[0]

  // Rutas estáticas principales (con trailingSlash)
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/proyectos/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/articulos/`,
      lastModified: currentDate,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ]

  // Rutas dinámicas de Proyectos
  const projectRoutes: MetadataRoute.Sitemap = portfolio.projects.map((project) => ({
    url: `${BASE_URL}/proyectos/${project.slug}/`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  // Rutas dinámicas de Artículos
  const articleSlugs = getAllSlugs("articulos").length > 0
    ? getAllSlugs("articulos")
    : getAllSlugs("blog")

  const articleRoutes: MetadataRoute.Sitemap = articleSlugs.map((slug) => ({
    url: `${BASE_URL}/articulos/${slug}/`,
    lastModified: currentDate,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...projectRoutes, ...articleRoutes]
}
