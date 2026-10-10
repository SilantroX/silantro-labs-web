"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { portfolio } from "@/data/portfolio"

const links = [
  { label: "Proyectos", href: "/proyectos" },
  { label: "Artículos", href: "/articulos" },
]

function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop: Unified centered header integrating Logo, links, and community button */}
      <nav
        aria-label="Navegación principal"
        className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 md:block"
      >
        <div className="flex items-center gap-4 rounded-full p-1.5 pl-3.5 bg-white/80 backdrop-blur-xl border border-black/[0.08] shadow-lg shadow-black/[0.03] transition-all">
          <Link
            href="/"
            aria-label="SILANTRO LABS"
            className="flex items-center transition-opacity hover:opacity-80"
          >
            <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white">
              <Image
                src="/logo-header.png"
                alt="SILANTRO LABS"
                width={24}
                height={24}
                priority
                className="h-full w-full object-contain"
              />
            </div>
          </Link>

          <div className="h-3.5 w-px bg-border/60" />

          <ul className="flex items-center gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-xs sm:text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="h-3.5 w-px bg-border/60" />

          <a
            href={portfolio.community.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full bg-black px-3.5 py-1.5 text-xs font-medium text-white shadow-sm transition-all hover:bg-neutral-800 hover:scale-[1.02] active:scale-[0.98]"
          >
            <DiscordIcon className="h-3.5 w-3.5 fill-current" />
            <span>{portfolio.community.label}</span>
            <span className="text-[10px] text-white/60 transition-transform duration-200 group-hover:translate-x-0.5">↗</span>
          </a>
        </div>
      </nav>

      {/* Mobile: brand left, community button and hamburger right */}
      <nav
        aria-label="Navegación móvil"
        className="fixed inset-x-0 top-4 z-50 flex items-center justify-between px-4 md:hidden"
      >
        <Link
          href="/"
          aria-label="SILANTRO LABS"
          className="flex items-center rounded-full p-2 bg-white/80 backdrop-blur-xl border border-black/[0.08] shadow-lg shadow-black/[0.03]"
        >
          <div className="relative flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white">
            <Image
              src="/logo-header.png"
              alt="SILANTRO LABS"
              width={20}
              height={20}
              priority
              className="h-full w-full object-contain"
            />
          </div>
        </Link>

        <div className="flex items-center gap-2">
          <a
            href={portfolio.community.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-black px-3 py-1.5 text-xs font-medium text-white shadow-md shadow-black/10 transition-all hover:bg-neutral-800 active:scale-[0.98]"
          >
            <DiscordIcon className="h-3 w-3 fill-current" />
            <span>Comunidad</span>
          </a>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Abrir menú"
                className="rounded-full bg-white/80 backdrop-blur-xl border border-black/[0.08] shadow-lg shadow-black/[0.03]"
              >
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/95 backdrop-blur-2xl border-l border-black/[0.08]">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2.5 text-left">
                  <div className="relative flex h-6 w-6 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-white">
                    <Image
                      src="/logo-header.png"
                      alt="SILANTRO LABS"
                      width={24}
                      height={24}
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span>{portfolio.name}</span>
                </SheetTitle>
              </SheetHeader>
              <ul className="flex flex-col gap-1 px-4 mt-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-4 mt-8">
                <a
                  href={portfolio.community.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-xl bg-black py-3 text-sm font-medium text-white shadow-md hover:bg-neutral-800 transition-colors"
                >
                  <DiscordIcon className="h-4 w-4 fill-current" />
                  <span>Unirse a la comunidad</span>
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </>
  )
}
