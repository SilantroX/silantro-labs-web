import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolio } from "@/data/portfolio"

export function generateStaticParams() {
  return portfolio.projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = portfolio.projects.find((p) => p.slug === slug)
  if (!project) return { title: "Proyecto no encontrado — SILANTRO LABS" }

  return {
    title: `${project.title} — Proyectos SILANTRO LABS`,
    description: project.shortDescription,
  }
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function TiktokIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.97v7.62c-.01 1.73-.55 3.48-1.65 4.83-1.61 2.05-4.24 3.07-6.84 2.76-2.6-.3-4.88-2.02-5.87-4.46-1-2.45-.44-5.38 1.4-7.29 1.48-1.54 3.69-2.28 5.79-1.95v4.11c-.98-.22-2.06-.01-2.85.61-.79.62-1.18 1.65-1.04 2.64.13 1 .91 1.83 1.9 2.03 1 .2 2.07-.22 2.61-1.07.31-.5.47-1.1.46-1.69V.02h-.03z" />
    </svg>
  )
}

export default async function ProyectoSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = portfolio.projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:pt-32">
      {/* Back button */}
      <div className="mb-8">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors group"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">&larr;</span>
          <span>Volver a proyectos</span>
        </Link>
      </div>

      <article className="rounded-3xl bg-white p-7 sm:p-12 md:p-14 border border-black/10 shadow-2xl shadow-black/5 relative z-10">

      {/* Header */}
      <header className="mb-10 pb-8 border-b border-border/70">
        <div className="flex items-center justify-between text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/[0.03] px-2.5 py-0.5 text-[9px] text-black">
            <span className="h-1.5 w-1.5 rounded-full bg-black/70 animate-pulse" />
            {project.status || "Proyecto"}
          </span>
          {project.date && <span>{project.date}</span>}
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
          {project.title}
        </h1>

        <p className="mt-4 text-base sm:text-lg font-light leading-relaxed text-muted-foreground">
          {project.shortDescription}
        </p>

        {/* Tech Stack Pills */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-black/10 bg-black/[0.02] px-3 py-1 text-xs font-mono text-foreground/80"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Links to Videos and Code */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>Ver Código en GitHub</span>
            </a>
          )}
          {project.youtubePlaylistUrl && (
            <a
              href={project.youtubePlaylistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-mono uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              <YoutubeIcon className="h-3.5 w-3.5" />
              <span>Playlist en YouTube</span>
            </a>
          )}
          {project.tiktokPlaylistUrl && (
            <a
              href={project.tiktokPlaylistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-mono uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              <TiktokIcon className="h-3 w-3" />
              <span>Serie en TikTok</span>
            </a>
          )}
        </div>
      </header>

      {/* Main Content & Learnings */}
      <div className="space-y-8">
        {project.learnings && (
          <section className="rounded-2xl border border-black/10 bg-white/70 backdrop-blur-xs p-6 sm:p-7 shadow-xs">
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground block mb-2">
              // Proceso y Aprendizaje
            </span>
            <p className="text-sm sm:text-base font-light leading-relaxed text-foreground/90">
              {project.learnings}
            </p>
          </section>
        )}

        <section className="space-y-4 text-sm sm:text-base font-light leading-relaxed text-muted-foreground">
          <p>
            Este proyecto forma parte de las series de desarrollo de <strong className="font-semibold text-foreground">SILANTRO LABS</strong>. El objetivo es documentar cada decisión técnica, compartir las herramientas empleadas y abrir el código para que cualquiera pueda replicarlo, adaptarlo o aprender del proceso.
          </p>
          <p>
            Puedes clonar el repositorio desde GitHub para inspeccionar la arquitectura, o seguir el paso a paso en las listas de reproducción de video en YouTube y TikTok.
          </p>
        </section>
      </div>
    </article>
  </div>
)
}
