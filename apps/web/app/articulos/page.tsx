import Link from "next/link"
import { getAllPosts } from "@/lib/mdx"

export const metadata = {
  title: "Artículos — SILANTRO LABS",
  description: "Notas, ideas y reflexiones sobre diseño, tecnología, programación y experimentos en SILANTRO LABS.",
  alternates: {
    canonical: "https://silantrolabs.com/articulos/",
  },
  openGraph: {
    title: "Artículos — SILANTRO LABS",
    description: "Notas, ideas y reflexiones sobre diseño, tecnología, programación y experimentos en SILANTRO LABS.",
    url: "https://silantrolabs.com/articulos/",
  },
}

function formatDate(dateStr: string) {
  try {
    const [year, month, day] = dateStr.split("-").map(Number)
    if (!year || !month || !day) return dateStr
    const date = new Date(year, month - 1, day)
    return date.toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  } catch {
    return dateStr
  }
}

export default function ArticulosPage() {
  const posts = getAllPosts("articulos").length > 0 ? getAllPosts("articulos") : getAllPosts("blog")

  return (
    <div className="mx-auto max-w-4xl px-4 pb-20 pt-28 sm:pt-32">
      <div className="mb-12">
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          Publicaciones
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Artículos
        </h1>
        <p className="mt-2 text-base font-light text-muted-foreground sm:text-lg">
          Notas, ideas y reflexiones sobre diseño, tecnología y nuestros experimentos.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/articulos/${post.slug}`}
            className="glass group flex flex-col justify-between rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/5"
          >
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-muted-foreground">
                <time>{formatDate(String(post.date))}</time>
                <span>{typeof post.tag === "string" ? post.tag : "PUBLICACIÓN"}</span>
              </div>
              <h2 className="mt-1 text-xl font-bold tracking-tight text-foreground sm:text-2xl transition-colors group-hover:text-foreground/80">
                {post.title}
              </h2>
              {typeof post.excerpt === "string" && (
                <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
                  {post.excerpt}
                </p>
              )}
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-border/50 text-[11px] font-mono uppercase tracking-widest text-muted-foreground/70">
              <span>LEER ARTÍCULO</span>
              <span className="text-sm transition-transform duration-200 group-hover:translate-x-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
