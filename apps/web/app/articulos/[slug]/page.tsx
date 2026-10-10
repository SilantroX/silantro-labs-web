import Link from "next/link"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPostBySlug, getAllSlugs } from "@/lib/mdx"

export function generateStaticParams() {
  const slugs = getAllSlugs("articulos").length > 0 ? getAllSlugs("articulos") : getAllSlugs("blog")
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  try {
    const post = getPost(slug)
    return {
      title: `${post.meta.title} — SILANTRO LABS`,
      description: post.meta.excerpt || "Publicación oficial de SILANTRO LABS",
    }
  } catch {
    return { title: "Artículo no encontrado — SILANTRO LABS" }
  }
}

function getPost(slug: string) {
  try {
    return getPostBySlug("articulos", slug)
  } catch {
    return getPostBySlug("blog", slug)
  }
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

export default async function ArticuloSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let post
  try {
    post = getPost(slug)
  } catch {
    notFound()
  }

  // If the markdown content includes a leading '# Title', strip it to prevent duplicate heading
  const cleanContent = post.content.replace(/^#\s+[^\n]+\n+/, "")

  return (
    <div className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:pt-32">
      <Link
        href="/articulos"
        className="group mb-8 inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
      >
        <span className="transition-transform duration-200 group-hover:-translate-x-1">&larr;</span>
        <span>Volver a Artículos</span>
      </Link>

      <article className="rounded-3xl bg-white p-7 sm:p-12 md:p-16 border border-black/10 shadow-2xl shadow-black/5 relative z-10">
        <header className="mb-10 sm:mb-12 border-b border-border/60 pb-8 sm:pb-10">
          <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
            <span>SILANTRO LABS // PUBLICACI&Oacute;N</span>
            <time>{formatDate(String(post.meta.date))}</time>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem] leading-[1.14]">
            {post.meta.title}
          </h1>
        </header>

        {/* Clean, comfortable reading area */}
        <div className="mx-auto max-w-[680px]">
          <div className="prose prose-neutral max-w-none text-foreground/90 prose-headings:text-foreground prose-headings:font-bold prose-headings:tracking-tight prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-10 prose-h3:mb-4 prose-p:text-[17px] sm:prose-p:text-[18px] prose-p:leading-[1.8] sm:prose-p:leading-[1.85] prose-p:font-light prose-p:text-foreground/90 prose-p:my-5 sm:prose-p:my-6 prose-ul:my-5 sm:prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6 prose-li:text-[17px] sm:prose-li:text-[18px] prose-li:leading-[1.8] sm:prose-li:leading-[1.85] prose-li:font-light prose-li:text-foreground/90 prose-li:my-1.5 marker:text-foreground/70 prose-strong:font-semibold prose-strong:text-foreground prose-hr:border-border/60 prose-hr:my-10">
            <MDXRemote source={cleanContent} />
          </div>

          <div className="mt-14 pt-8 border-t border-border/50 flex items-center justify-between text-[11px] font-mono uppercase tracking-widest text-muted-foreground/60">
            <span>SILANTRO LABS</span>
            <span>&mdash; FIN DE PUBLICACI&Oacute;N</span>
          </div>
        </div>
      </article>
    </div>
  )
}
