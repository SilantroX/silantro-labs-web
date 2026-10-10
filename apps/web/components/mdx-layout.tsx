import Link from "next/link"

export function MdxLayout({
  backHref,
  backLabel,
  children,
}: {
  backHref: string
  backLabel: string
  children: React.ReactNode
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-24">
      <Link
        href={backHref}
        className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        &larr; {backLabel}
      </Link>
      <article className="rounded-3xl bg-white p-8 shadow-2xl shadow-black/5 md:p-12 border border-black/10 relative z-10">
        {children}
      </article>
    </div>
  )
}
