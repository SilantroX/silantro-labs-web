"use client"

import { useState } from "react"
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
  { label: "Work", href: "/" },
  { label: "Blog", href: "/blog" },
]

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Desktop: centered glass pill */}
      <nav
        aria-label="Main navigation"
        className="fixed top-4 left-1/2 z-50 hidden -translate-x-1/2 md:block"
      >
        <div className="glass flex items-center gap-6 rounded-full px-6 py-3 shadow-lg shadow-black/5">
          <Link href="/" className="text-sm font-semibold tracking-tight">
            {portfolio.name}
          </Link>
          <ul className="flex items-center gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile: brand left, hamburger right */}
      <nav
        aria-label="Main navigation"
        className="fixed inset-x-0 top-4 z-50 flex items-center justify-between px-4 md:hidden"
      >
        <Link
          href="/"
          className="glass rounded-full px-4 py-2 text-sm font-semibold tracking-tight shadow-lg shadow-black/5"
        >
          {portfolio.name}
        </Link>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              className="glass rounded-full shadow-lg shadow-black/5"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur-xl">
            <SheetHeader>
              <SheetTitle>{portfolio.name}</SheetTitle>
            </SheetHeader>
            <ul className="flex flex-col gap-1 px-4">
              {links.map((link) => (
                <li key={link.href}>
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
          </SheetContent>
        </Sheet>
      </nav>
    </>
  )
}
