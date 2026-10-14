import Link from "next/link"
import { portfolio } from "@/data/portfolio"

export const metadata = {
  title: "Proyectos — SILANTRO LABS",
  description:
    "Proyectos de programación, series de desarrollo en Python, experimentos y código de SILANTRO LABS.",
  alternates: {
    canonical: "https://silantrolabs.com/proyectos/",
  },
  openGraph: {
    title: "Proyectos — SILANTRO LABS",
    description:
      "Proyectos de programación, series de desarrollo en Python, experimentos y código de SILANTRO LABS.",
    url: "https://silantrolabs.com/proyectos/",
  },
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function DiagramIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M10 6.5h4" />
      <path d="M6.5 10v4" />
      <path d="M17.5 10v4" />
      <path d="M10 17.5h4" />
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

export default function ProyectosPage() {
  const projects = portfolio.projects

  return (
    <div className="mx-auto max-w-5xl px-4 pb-20 pt-28 sm:pt-32">
      {/* Header */}
      <div className="mb-12">
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          Laboratorio &amp; Desarrollo
        </span>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Proyectos
        </h1>
        <p className="mt-2 text-base font-light text-muted-foreground sm:text-lg max-w-2xl">
          Experimentos, software y series de programación en video. Código abierto, procesos reales y aprendizajes de cada construcción.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="glass group relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 bg-white/75 backdrop-blur-xs border border-black/10"
          >
            <div>
              {/* Status and Date */}
              <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80 mb-3">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-black/[0.03] px-2 py-0.5 text-[9px] font-mono tracking-widest text-black/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  {project.status || "Completado"}
                </span>
                {project.date && <span>{project.date}</span>}
              </div>

              {/* Title & Short Explanation */}
              <Link href={`/proyectos/${project.slug}`} className="block group/link">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground transition-colors group-hover/link:text-foreground/75">
                  {project.title}
                </h2>
              </Link>

              <p className="mt-2.5 text-sm font-light leading-relaxed text-muted-foreground">
                {project.shortDescription}
              </p>

              {/* Tech Stack Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border border-black/[0.08] bg-black/[0.02] px-2 py-0.5 text-[10px] font-mono text-muted-foreground"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Learning / Process Snippet */}
              {project.learnings && (
                <div className="mt-4 rounded-xl border border-black/[0.06] bg-black/[0.015] p-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/70 block mb-1">
                    Lo que aprendí
                  </span>
                  <p className="text-xs font-light leading-relaxed text-muted-foreground/90 line-clamp-3">
                    {project.learnings}
                  </p>
                </div>
              )}
            </div>

            {/* Multimedia & Links Action Bar */}
            <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between">
              {/* Media Channel Icons */}
              <div className="flex items-center gap-2">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/70 text-muted-foreground transition-all hover:border-black hover:bg-black hover:text-white hover:scale-105 active:scale-95"
                    aria-label="Código en GitHub"
                    title="Código en GitHub"
                  >
                    <GithubIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.diagramUrl && (
                  <a
                    href={project.diagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/70 text-muted-foreground transition-all hover:border-black hover:bg-black hover:text-white hover:scale-105 active:scale-95"
                    aria-label="Diagrama en Draw.io"
                    title="Diagrama de Arquitectura"
                  >
                    <DiagramIcon className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.youtubePlaylistUrl ? (
                  <a
                    href={project.youtubePlaylistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/70 text-muted-foreground transition-all hover:border-black hover:bg-black hover:text-white hover:scale-105 active:scale-95"
                    aria-label="Playlist en YouTube"
                    title="Playlist en YouTube"
                  >
                    <YoutubeIcon className="h-3.5 w-3.5" />
                  </a>
                ) : project.youtubeComingSoon ? (
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-black/20 bg-black/[0.02] text-muted-foreground/40 cursor-default select-none"
                    aria-label="Playlist en YouTube (Próximamente)"
                    title="YouTube (Próximamente)"
                  >
                    <YoutubeIcon className="h-3.5 w-3.5 opacity-60" />
                  </span>
                ) : null}
                {project.tiktokPlaylistUrl ? (
                  <a
                    href={project.tiktokPlaylistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-black/10 bg-white/70 text-muted-foreground transition-all hover:border-black hover:bg-black hover:text-white hover:scale-105 active:scale-95"
                    aria-label="Serie en TikTok"
                    title="Serie en TikTok"
                  >
                    <TiktokIcon className="h-3 w-3" />
                  </a>
                ) : project.tiktokComingSoon ? (
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-dashed border-black/20 bg-black/[0.02] text-muted-foreground/40 cursor-default select-none"
                    aria-label="Serie en TikTok (Próximamente)"
                    title="TikTok (Próximamente)"
                  >
                    <TiktokIcon className="h-3 w-3 opacity-60" />
                  </span>
                ) : null}
              </div>

              {/* View Full Project Link */}
              <Link
                href={`/proyectos/${project.slug}`}
                className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-foreground/80 hover:text-foreground transition-colors group/btn"
              >
                <span>DETALLES</span>
                <span className="transition-transform duration-200 group-hover/btn:translate-x-1">&rarr;</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
