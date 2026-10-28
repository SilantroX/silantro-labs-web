import Link from "next/link"
import { notFound } from "next/navigation"
import { portfolio } from "@/data/portfolio"
import { AdSlot } from "@/components/ad-slot"
import { ADS_CONFIG } from "@/lib/ads-config"

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

  const title = `${project.title} — Proyectos SILANTRO LABS`
  const description = project.shortDescription
  const canonicalUrl = `https://silantrolabs.com/proyectos/${slug}/`

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
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
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
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

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  )
}

function TicketIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M13 5v2" />
      <path d="M13 11v2" />
      <path d="M13 17v2" />
    </svg>
  )
}

function LightbulbIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  )
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function MegaphoneIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="m3 11 18-5v12L3 14v-3z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </svg>
  )
}

function RefreshIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </svg>
  )
}

function ExternalLinkIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function CartIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="8" cy="21" r="1" />
      <circle cx="19" cy="21" r="1" />
      <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
  )
}

function BoxIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}

function WalletIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1" />
      <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4" />
    </svg>
  )
}

function LockIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function QrIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <path d="M14 14h3v3h-3z" />
      <path d="M20 14v3h-3" />
      <path d="M14 20h6" />
      <path d="M7 7h.01" />
      <path d="M17 7h.01" />
      <path d="M7 17h.01" />
    </svg>
  )
}

function TerminalIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  )
}

function ZapIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function ModuleIcon({ name, className }: { name: string; className?: string }) {
  switch (name) {
    case "shield":
      return <ShieldIcon className={className} />
    case "ticket":
      return <TicketIcon className={className} />
    case "lightbulb":
      return <LightbulbIcon className={className} />
    case "roles":
    case "users":
      return <UsersIcon className={className} />
    case "megaphone":
    case "announcement":
      return <MegaphoneIcon className={className} />
    case "cart":
      return <CartIcon className={className} />
    case "box":
      return <BoxIcon className={className} />
    case "wallet":
      return <WalletIcon className={className} />
    case "lock":
      return <LockIcon className={className} />
    case "qr":
      return <QrIcon className={className} />
    case "terminal":
      return <TerminalIcon className={className} />
    case "zap":
      return <ZapIcon className={className} />
    default:
      return <ShieldIcon className={className} />
  }
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

  const projectJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: project.title,
    description: project.shortDescription,
    programmingLanguage: project.tags.join(", "),
    codeRepository: project.githubUrl || undefined,
    author: {
      "@type": "Person",
      name: "Silantro",
      url: "https://silantrolabs.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "SILANTRO LABS",
      url: "https://silantrolabs.com/",
    },
    url: `https://silantrolabs.com/proyectos/${slug}/`,
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:pt-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectJsonLd) }}
      />
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
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 animate-pulse" />
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

        {/* Links to Videos, Architecture, Demo and Code */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-black text-white px-4 py-2 text-xs font-mono uppercase tracking-wider hover:bg-neutral-800 transition-all hover:scale-105 active:scale-95 shadow-sm"
            >
              <ExternalLinkIcon className="h-3.5 w-3.5" />
              <span>Probar en Vivo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-mono uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95 shadow-xs"
            >
              <GithubIcon className="h-3.5 w-3.5" />
              <span>Ver Código en GitHub</span>
            </a>
          )}
          {project.diagramUrl && (
            <a
              href={project.diagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-mono uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              <DiagramIcon className="h-3.5 w-3.5" />
              <span>Diagrama Draw.io</span>
            </a>
          )}
          {project.youtubePlaylistUrl ? (
            <a
              href={project.youtubePlaylistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-mono uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              <YoutubeIcon className="h-3.5 w-3.5" />
              <span>Playlist en YouTube</span>
            </a>
          ) : project.youtubeComingSoon ? (
            <span
              className="inline-flex items-center gap-2 rounded-full border border-dashed border-black/20 bg-black/[0.02] px-4 py-2 text-xs font-mono uppercase tracking-wider text-muted-foreground/75 cursor-default select-none"
              title="Serie en YouTube próximamente"
            >
              <YoutubeIcon className="h-3.5 w-3.5 opacity-60" />
              <span>YouTube (Próximamente)</span>
            </span>
          ) : null}
          {project.tiktokPlaylistUrl ? (
            <a
              href={project.tiktokPlaylistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/15 bg-white px-4 py-2 text-xs font-mono uppercase tracking-wider hover:border-black hover:bg-black hover:text-white transition-all hover:scale-105 active:scale-95"
            >
              <TiktokIcon className="h-3 w-3" />
              <span>Serie en TikTok</span>
            </a>
          ) : project.tiktokComingSoon ? (
            <span
              className="inline-flex items-center gap-2 rounded-full border border-dashed border-black/20 bg-black/[0.02] px-4 py-2 text-xs font-mono uppercase tracking-wider text-muted-foreground/75 cursor-default select-none"
              title="Serie en TikTok próximamente"
            >
              <TiktokIcon className="h-3 w-3 opacity-60" />
              <span>TikTok (Próximamente)</span>
            </span>
          ) : null}
        </div>
      </header>

      {/* Main Content */}
      <div className="space-y-10">
        {/* Modules Section */}
        {project.modules && project.modules.length > 0 && (
          <section className="space-y-4">
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              Funciones principales
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {project.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className={`rounded-2xl border border-black/[0.08] bg-black/[0.015] p-5 sm:p-6 transition-all duration-200 hover:border-black/20 hover:bg-black/[0.025] ${
                    idx === 4 ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white text-foreground shadow-xs">
                      <ModuleIcon name={mod.icon} className="h-4 w-4" />
                    </div>
                    <h3 className="text-sm font-semibold tracking-tight text-foreground">
                      {mod.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm font-light leading-relaxed text-muted-foreground">
                    {mod.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Process & Learnings */}
        {project.learnings && (
          <section className="rounded-2xl border border-black/[0.08] bg-white p-6 sm:p-7 shadow-xs">
            <h2 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-3">
              Detrás del desarrollo
            </h2>
            <p className="text-sm sm:text-base font-light leading-relaxed text-foreground/90">
              {project.learnings}
            </p>
          </section>
        )}

        {/* Community & Context */}
        {project.contextNotice ? (
          <section className="space-y-3 text-sm font-light leading-relaxed text-muted-foreground">
            {Array.isArray(project.contextNotice) ? (
              project.contextNotice.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))
            ) : (
              <p>{project.contextNotice}</p>
            )}
          </section>
        ) : (
          <section className="space-y-3 text-sm font-light leading-relaxed text-muted-foreground">
            <p>
              Este proyecto forma parte del ecosistema de software y experimentación de <strong className="font-medium text-foreground">SILANTRO LABS</strong>. Desarrollado con estándares modernos, foco en la experiencia de usuario y arquitectura mantenible.
            </p>
          </section>
        )}

        {/* Continuous Improvement Notice */}
        {project.continuousImprovementNotice && (
          <section className="rounded-2xl border border-black/[0.08] bg-black/[0.015] p-5 sm:p-6 shadow-xs">
            <div className="flex items-start gap-3.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl border border-black/10 bg-white text-foreground shadow-xs mt-0.5">
                <RefreshIcon className="h-4 w-4" />
              </div>
              <div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">
                  {project.continuousImprovementTitle || "Evolución del proyecto"}
                </h3>
                <p className="text-sm font-normal leading-relaxed text-foreground/90">
                  {project.continuousImprovementNotice}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Espacio publicitario manual al final de la ficha del proyecto */}
        <AdSlot
          format="horizontal"
          slotName="Ficha de Proyecto (Inferior)"
          slotId={ADS_CONFIG.slots.proyectoDetail}
          className="mt-6"
        />
      </div>
    </article>
  </div>
  )
}
