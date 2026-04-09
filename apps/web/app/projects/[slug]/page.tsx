import Image from "next/image"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPostBySlug, getAllSlugs } from "@/lib/mdx"
import { MdxLayout } from "@/components/mdx-layout"

export function generateStaticParams() {
  return getAllSlugs("projects").map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  try {
    const { meta } = getPostBySlug("projects", slug)
    return { title: `${meta.title} — Projects` }
  } catch {
    return { title: "Project Not Found" }
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let post
  try {
    post = getPostBySlug("projects", slug)
  } catch {
    notFound()
  }

  const { meta, content } = post
  const tags = (meta.tags as string[] | undefined) ?? []
  const image = meta.image as string | undefined
  const role = meta.role as string | undefined
  const year = meta.year as string | undefined
  const url = typeof meta.url === "string" ? meta.url : null

  return (
    <MdxLayout backHref="/" backLabel="Back to portfolio">
      <header className="mb-8">
        {image && (
          <div className="mb-8 overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={meta.title}
              width={800}
              height={450}
              className="w-full object-cover"
            />
          </div>
        )}
        <h1 className="text-3xl font-bold tracking-tight">{meta.title}</h1>
        {typeof meta.description === "string" && (
          <p className="mt-2 text-lg font-light text-muted-foreground">
            {meta.description}
          </p>
        )}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {role && (
            <span className="text-xs text-muted-foreground">
              {role}
            </span>
          )}
          {role && year && (
            <span className="text-xs text-muted-foreground">&middot;</span>
          )}
          {year && (
            <span className="text-xs text-muted-foreground">
              {year}
            </span>
          )}
          {tags.length > 0 && (role || year) && (
            <span className="text-xs text-muted-foreground">&middot;</span>
          )}
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-medium text-primary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        {url && (
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
          >
            Visit Website
            <span aria-hidden="true">&rarr;</span>
          </a>
        )}
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>
    </MdxLayout>
  )
}
