"use client"

import Image from "next/image"
import Link from "next/link"
import { cn } from "@workspace/ui/lib/utils"
import { portfolio } from "@/data/portfolio"

function Tile({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode
  className?: string
  delay?: number
}) {
  return (
    <div
      className={cn(
        "glass bento-tile rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10",
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

function HeroTile() {
  return (
    <Tile className="flex flex-col justify-center lg:col-span-2" delay={0}>
      <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {portfolio.role}
      </p>
      <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight lg:text-5xl">
        {portfolio.name}
      </h1>
      <p className="mt-4 max-w-sm text-base font-light leading-relaxed text-muted-foreground">
        {portfolio.tagline}
      </p>
    </Tile>
  )
}

function AvatarTile() {
  return (
    <Tile className="flex items-center justify-center overflow-hidden p-2" delay={80}>
      <Image
        src={portfolio.heroImage}
        alt={portfolio.name}
        width={600}
        height={600}
        className="h-full w-full rounded-xl object-cover"
        priority
      />
    </Tile>
  )
}

function AboutTile() {
  return (
    <Tile className="flex flex-col justify-between" delay={160}>
      <div>
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          About
        </h2>
        <p className="mt-3 text-sm font-light leading-relaxed text-muted-foreground">
          {portfolio.about.bio}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {portfolio.about.skills.slice(0, 5).map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-medium text-primary-foreground"
          >
            {skill}
          </span>
        ))}
        {portfolio.about.skills.length > 5 && (
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-medium text-secondary-foreground">
            +{portfolio.about.skills.length - 5}
          </span>
        )}
      </div>
    </Tile>
  )
}

function ProjectTile({
  project,
  index,
  delay,
}: {
  project: (typeof portfolio.projects)[number]
  index: number
  delay: number
}) {
  const spanClass =
    project.span === "wide"
      ? "lg:col-span-2"
      : project.span === "tall"
        ? "lg:row-span-2"
        : ""

  return (
    <Tile className={cn("group flex flex-col overflow-hidden p-2", spanClass)} delay={delay}>
      <Link href={project.url || "/"} className="flex flex-1 flex-col">
        <div className="relative flex-1 overflow-hidden rounded-xl">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className={cn(
              "h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]",
              project.span === "tall" ? "aspect-[3/4]" : "aspect-[4/3]",
            )}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="px-3 pb-2 pt-3">
          <div className="flex items-baseline justify-between">
            <h3 className="text-sm font-semibold tracking-tight">
              {project.title}
            </h3>
            <span className="text-[10px] font-medium text-muted-foreground">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </Tile>
  )
}

function ContactTile() {
  return (
    <Tile
      className="flex flex-col justify-between"
      delay={240 + portfolio.projects.length * 80}
    >
      <div>
        <h2 className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Contact
        </h2>
        <p className="mt-3 text-lg font-semibold tracking-tight">
          Let&apos;s talk
        </p>
        <a
          href={`mailto:${portfolio.contact.email}`}
          className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          {portfolio.contact.email}
        </a>
      </div>
      <div className="mt-4 flex gap-2">
        {portfolio.contact.socials.map((social) => (
          <a
            key={social.platform}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex h-9 w-9 items-center justify-center rounded-full text-[10px] font-medium transition-all hover:-translate-y-0.5 hover:shadow-md"
            aria-label={social.platform}
          >
            {social.platform.slice(0, 2)}
          </a>
        ))}
      </div>
    </Tile>
  )
}

export function BentoGrid() {
  return (
    <div className="mx-auto min-h-svh max-w-6xl px-4 pt-20 pb-8 lg:flex lg:items-center lg:pt-20 lg:pb-12">
      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4 lg:auto-rows-[minmax(180px,auto)]">
        <HeroTile />
        <AvatarTile />
        <AboutTile />
        {portfolio.projects.map((project, index) => (
          <ProjectTile
            key={project.title}
            project={project}
            index={index}
            delay={240 + index * 80}
          />
        ))}
        <ContactTile />
      </div>
    </div>
  )
}
