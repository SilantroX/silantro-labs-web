import Image from "next/image"
import { notFound } from "next/navigation"
import { MDXRemote } from "next-mdx-remote/rsc"
import { getPostBySlug, getAllSlugs } from "@/lib/mdx"
import { MdxLayout } from "@/components/mdx-layout"

export function generateStaticParams() {
  return getAllSlugs("blog").map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  try {
    const { meta } = getPostBySlug("blog", slug)
    return { title: `${meta.title} — Blog` }
  } catch {
    return { title: "Post Not Found" }
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  let post
  try {
    post = getPostBySlug("blog", slug)
  } catch {
    notFound()
  }

  const image = typeof post.meta.image === "string" ? post.meta.image : null

  return (
    <MdxLayout backHref="/blog" backLabel="Back to blog">
      <header className="mb-8">
        {image && (
          <div className="mb-6 overflow-hidden rounded-xl">
            <Image
              src={image}
              alt={post.meta.title}
              width={800}
              height={400}
              className="w-full object-cover"
            />
          </div>
        )}
        <time className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {new Date(post.meta.date).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <h1 className="mt-2 text-3xl font-bold tracking-tight">
          {post.meta.title}
        </h1>
        {typeof post.meta.excerpt === "string" && (
          <p className="mt-3 text-lg font-light text-muted-foreground">
            {post.meta.excerpt}
          </p>
        )}
      </header>
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <MDXRemote source={post.content} />
      </div>
    </MdxLayout>
  )
}
