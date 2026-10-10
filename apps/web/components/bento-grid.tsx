"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@workspace/ui/lib/utils"
import { portfolio } from "@/data/portfolio"

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function getSocialIcon(platform: string) {
  const p = platform.toLowerCase()
  if (p.includes("discord")) return <DiscordIcon className="h-3.5 w-3.5" />
  if (p.includes("x") || p.includes("twitter")) return <XIcon className="h-3 w-3" />
  if (p.includes("github")) return <GithubIcon className="h-3.5 w-3.5" />
  return <span className="text-[10px] font-mono">{platform.slice(0, 2)}</span>
}

function Tile({
  children,
  className,
  delay = 0,
  id,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  id?: string
}) {
  return (
    <div
      id={id}
      className={cn(
        "glass bento-tile rounded-2xl bg-white/75 backdrop-blur-xs p-5 sm:p-7 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/5 hover:bg-white/85 border border-black/10 relative z-10",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Mobile-only unified Hero + Logo tile (compact, high-density, ultra-clean)
function MobileHeroTile() {
  return (
    <Tile className="flex md:hidden col-span-2 order-1 items-center justify-between gap-3 p-4 sm:p-5" delay={0}>
      <div className="flex-1 pr-1">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-tight">
          {portfolio.hero.title}
        </h1>
        <p className="mt-1 text-xs font-light leading-relaxed text-muted-foreground">
          {portfolio.hero.subtitle}
        </p>
      </div>

      {/* Compact logo on mobile */}
      <div className="relative shrink-0 h-14 w-14 sm:h-16 sm:w-16 flex items-center justify-center p-1 border border-black/[0.08] rounded-xl bg-black/[0.02]">
        <Image
          src="/logo-transparent.png"
          alt={portfolio.name}
          width={128}
          height={128}
          className="h-full w-full object-contain select-none filter contrast-125"
          priority
        />
      </div>
    </Tile>
  )
}

// Desktop HeroTile (rendered only on md+)
function HeroTile() {
  return (
    <Tile className="hidden md:flex flex-col justify-center lg:col-span-2 lg:order-2 min-h-[220px]" delay={0}>
      <div className="py-2">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] leading-[1.08]">
          {portfolio.hero.title}
        </h1>
        <p className="mt-3 text-base sm:text-lg font-light leading-relaxed text-muted-foreground">
          {portfolio.hero.subtitle}
        </p>
      </div>
    </Tile>
  )
}

// Desktop LogoTile (rendered only on md+)
function LogoTile() {
  return (
    <Tile
      className="hidden md:flex group relative items-center justify-center overflow-hidden p-3 sm:p-4 lg:col-span-1 lg:order-1 min-h-[220px] border border-black/[0.08] hover:border-black/30 transition-all duration-300"
      delay={0}
    >
      {/* Blueprint grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035] group-hover:opacity-[0.07] transition-opacity duration-500"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, black 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
        aria-hidden="true"
      />

      {/* Code scanline laser effect - appears only on hover */}
      <div
        className="pointer-events-none absolute inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-black/40 to-transparent -translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-[260px] transition-all duration-1000 ease-in-out"
        aria-hidden="true"
      />

      {/* Corner crosshairs of the tile that expand on hover */}
      <span
        className="pointer-events-none absolute top-2.5 left-2.5 w-2.5 h-2.5 border-t border-l border-black/25 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-black/60"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute top-2.5 right-2.5 w-2.5 h-2.5 border-t border-r border-black/25 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-black/60"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-2.5 left-2.5 w-2.5 h-2.5 border-b border-l border-black/25 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-black/60"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute bottom-2.5 right-2.5 w-2.5 h-2.5 border-b border-r border-black/25 transition-all duration-300 group-hover:w-4 group-hover:h-4 group-hover:border-black/60"
        aria-hidden="true"
      />

      {/* Logo filling the entire space of the tile */}
      <div className="relative z-10 flex h-full w-full items-center justify-center p-1">
        <div className="relative h-44 w-44 sm:h-48 sm:w-48 flex items-center justify-center transition-transform duration-500 ease-out group-hover:scale-105">
          <Image
            src="/logo-transparent.png"
            alt={portfolio.name}
            width={380}
            height={380}
            className="h-full w-full object-contain select-none drop-shadow-sm filter contrast-125"
            priority
          />
        </div>
      </div>
    </Tile>
  )
}

function ContactTile() {
  return (
    <Tile
      id="contacto"
      className="group flex flex-col justify-between col-span-2 lg:col-span-1 lg:order-3 min-h-[200px] sm:min-h-[230px] border border-black/[0.08] hover:border-black/25 transition-all duration-300 order-5"
      delay={160}
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          Contacto
        </span>
        <span className="text-[10px] font-mono text-muted-foreground/50">03</span>
      </div>

      <div className="my-auto py-2.5 sm:py-3">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-foreground">
          ¿Hablamos?
        </h2>
        <p className="mt-1 text-xs font-light leading-relaxed text-muted-foreground">
          Escr&iacute;benos para colaboraciones, nuevos proyectos o simplemente para conversar.
        </p>
      </div>

      <div className="flex items-center justify-between pt-2.5 sm:pt-3 border-t border-border/60">
        <a
          href={`mailto:${portfolio.contact.email}`}
          aria-label={`Escribir a ${portfolio.contact.email}`}
          title={`Escribir a ${portfolio.contact.email}`}
          className="group/mail flex h-7 w-7 items-center justify-center rounded-full bg-black text-white transition-all hover:scale-110 hover:bg-neutral-800 active:scale-95 shadow-xs"
        >
          <svg
            className="h-3.5 w-3.5 transition-transform duration-200 group-hover/mail:translate-x-0.5 group-hover/mail:-translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>

        <div className="flex shrink-0 items-center gap-1.5">
          {portfolio.contact.socials.map((social) => (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-7 w-7 items-center justify-center rounded-full border border-black/10 bg-white/70 text-muted-foreground transition-all hover:border-black hover:bg-black hover:text-white hover:scale-105 active:scale-95"
              aria-label={social.platform}
              title={social.platform}
            >
              {getSocialIcon(social.platform)}
            </a>
          ))}
        </div>
      </div>
    </Tile>
  )
}

function AboutTile() {
  return (
    <Tile className="flex flex-col justify-between col-span-2 lg:col-span-2 lg:order-4 min-h-[190px] sm:min-h-[220px] order-4" delay={240}>
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          Acerca de
        </span>
        <span className="text-[10px] font-mono text-muted-foreground/50">01</span>
      </div>

      <div className="space-y-2.5 sm:space-y-3.5 my-auto py-3 sm:py-4">
        <p className="text-sm sm:text-base lg:text-lg font-normal leading-relaxed tracking-tight text-foreground">
          {portfolio.about.statement}
        </p>
        <p className="text-xs sm:text-sm lg:text-base font-light leading-relaxed text-muted-foreground">
          {portfolio.about.detail}
        </p>
      </div>

      <div className="text-[10px] sm:text-[11px] font-mono text-muted-foreground/50 tracking-wider">
        SILANTRO LABS
      </div>
    </Tile>
  )
}

function ProjectsTile() {
  const hasProjects = portfolio.projects.length > 0
  const featured = portfolio.projects[0]

  return (
    <Tile
      id="proyectos"
      className="group relative flex flex-col justify-between col-span-1 lg:col-span-1 lg:order-5 p-4 sm:p-6 min-h-[160px] sm:min-h-[230px] border border-black/[0.08] hover:border-black/30 transition-all duration-300 order-2 overflow-hidden"
      delay={320}
    >
      {/* Subtle interactive accent line at top border on hover */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-[1.5px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        aria-hidden="true"
      />

      {/* Top Header: Identical clean editorial typography as Artículos */}
      <div className="flex items-center justify-between">
        <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          Proyectos
        </span>
        <span className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono tracking-wider text-muted-foreground group-hover:bg-black group-hover:text-white transition-colors duration-300">
          {featured?.date || "07.10.2026"}
        </span>
      </div>

      {/* Content: Clean title + short description + tech tags */}
      <div className="my-auto py-2 sm:py-2.5">
        {featured ? (
          <Link href={`/proyectos/${featured.slug}`} className="block group/link space-y-1.5 sm:space-y-2">
            <h3 className="text-xs sm:text-base font-bold tracking-tight text-foreground transition-colors group-hover/link:text-foreground/75 line-clamp-2">
              {featured.title}
            </h3>
            <p className="hidden sm:block border-l border-black/15 pl-2 text-xs font-light leading-relaxed text-muted-foreground line-clamp-2 transition-colors group-hover/link:border-black/40">
              {featured.shortDescription}
            </p>
            {featured.tags && featured.tags.length > 0 && (
              <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 pt-0.5">
                {featured.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded bg-black/[0.04] px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono text-muted-foreground transition-colors group-hover/link:text-foreground/80 group-hover/link:bg-black/[0.07]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ) : (
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-semibold tracking-tight text-foreground">
              En desarrollo
            </p>
            <p className="text-[11px] sm:text-xs font-light leading-snug sm:leading-relaxed text-muted-foreground line-clamp-2">
              Series de programación y software en proceso.
            </p>
          </div>
        )}
      </div>

      {/* Footer: Clean text action with animated directional arrow on hover */}
      <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-border/60 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70">
        <Link
          href="/proyectos"
          className="flex items-center justify-between w-full hover:text-foreground transition-colors group/read"
        >
          <span className="font-semibold text-foreground/80 group-hover/read:text-foreground">
            <span className="hidden sm:inline">VER PROYECTOS</span>
            <span className="sm:hidden">VER &rarr;</span>
          </span>
          <span className="hidden sm:inline text-xs transition-transform duration-300 group-hover/read:translate-x-1.5">
            &rarr;
          </span>
        </Link>
      </div>
    </Tile>
  )
}

function ArticlesTile() {
  const hasArticles = portfolio.articles.length > 0
  const featured = portfolio.articles[0]

  return (
    <Tile
      id="articulos"
      className="group relative flex flex-col justify-between col-span-1 lg:col-span-1 lg:order-6 p-4 sm:p-6 min-h-[160px] sm:min-h-[230px] border border-black/[0.08] hover:border-black/30 transition-all duration-300 order-3 overflow-hidden"
      delay={400}
    >
      {/* Subtle interactive accent line at top border on hover */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-[1.5px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"
        aria-hidden="true"
      />

      <div className="flex items-center justify-between">
        <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.2em] uppercase text-muted-foreground">
          Artículos
        </span>
        <span className="rounded-full bg-neutral-100 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-mono tracking-wider text-muted-foreground group-hover:bg-black group-hover:text-white transition-colors duration-300">
          {featured?.date || "07.10.2026"}
        </span>
      </div>

      <div className="my-auto py-2 sm:py-3">
        {featured ? (
          <Link href={`/articulos/${featured.slug}`} className="block group/link space-y-1 sm:space-y-1.5">
            <h3 className="text-xs sm:text-base font-bold tracking-tight text-foreground transition-colors group-hover/link:text-foreground/75 line-clamp-2">
              {featured.title}
            </h3>
            {/* Desktop excerpt */}
            {featured.excerpt && (
              <p className="hidden sm:block border-l border-black/15 pl-2.5 text-xs font-light leading-relaxed text-muted-foreground line-clamp-2 transition-colors group-hover/link:border-black/40">
                {featured.excerpt}
              </p>
            )}
            {/* Mobile context: short minimal context */}
            {(featured.mobileExcerpt || featured.excerpt) && (
              <p className="sm:hidden border-l border-black/15 pl-1.5 text-[10px] font-light leading-snug text-muted-foreground line-clamp-2 transition-colors group-hover/link:border-black/40">
                {featured.mobileExcerpt || featured.excerpt}
              </p>
            )}
          </Link>
        ) : (
          <div className="space-y-1">
            <p className="text-xs sm:text-sm font-semibold tracking-tight text-foreground">
              En redacción
            </p>
            <p className="text-[11px] sm:text-xs font-light leading-snug sm:leading-relaxed text-muted-foreground line-clamp-2">
              Notas y artículos sobre tecnología.
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-border/60 text-[9px] sm:text-[10px] font-mono uppercase tracking-wider text-muted-foreground/70">
        <Link
          href={featured ? `/articulos/${featured.slug}` : "/articulos"}
          className="flex items-center justify-between w-full hover:text-foreground transition-colors group/read"
        >
          <span className="font-semibold text-foreground/80 group-hover/read:text-foreground">
            <span className="hidden sm:inline">LEER PUBLICACIÓN</span>
            <span className="sm:hidden">LEER &rarr;</span>
          </span>
          <span className="hidden sm:inline text-xs transition-transform duration-300 group-hover/read:translate-x-1.5">
            &rarr;
          </span>
        </Link>
      </div>
    </Tile>
  )
}

export function BentoGrid() {
  return (
    <div className="mx-auto min-h-svh max-w-6xl px-3 sm:px-4 pt-20 sm:pt-24 pb-16 lg:flex lg:items-center lg:pt-24 lg:pb-20">
      <div className="grid w-full grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:auto-rows-[minmax(220px,auto)]">
        <MobileHeroTile />
        <LogoTile />
        <HeroTile />
        <ContactTile />
        <AboutTile />
        <ProjectsTile />
        <ArticlesTile />
      </div>
    </div>
  )
}
