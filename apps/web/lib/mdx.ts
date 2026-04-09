import fs from "fs"
import path from "path"
import matter from "gray-matter"

const contentDir = path.join(process.cwd(), "content")

export type PostMeta = {
  slug: string
  title: string
  date: string
  excerpt: string
  [key: string]: unknown
}

export function getPostBySlug(dir: string, slug: string) {
  // Sanitize slug to prevent path traversal
  const safeSlug = slug.replace(/[^a-zA-Z0-9_-]/g, "")
  const filePath = path.join(contentDir, dir, `${safeSlug}.mdx`)
  const resolved = path.resolve(filePath)
  if (!resolved.startsWith(path.resolve(contentDir))) {
    throw new Error("Invalid slug")
  }
  const raw = fs.readFileSync(resolved, "utf-8")
  const { data, content } = matter(raw)
  return { meta: { slug: safeSlug, ...data } as PostMeta, content }
}

export function getAllPosts(dir: string): PostMeta[] {
  const dirPath = path.join(contentDir, dir)
  if (!fs.existsSync(dirPath)) return []

  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "")
      const raw = fs.readFileSync(path.join(dirPath, filename), "utf-8")
      const { data } = matter(raw)
      return { slug, ...data } as PostMeta
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getAllSlugs(dir: string): string[] {
  const dirPath = path.join(contentDir, dir)
  if (!fs.existsSync(dirPath)) return []

  return fs
    .readdirSync(dirPath)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""))
}
