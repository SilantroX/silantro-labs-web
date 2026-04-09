import Image from "next/image"
import Link from "next/link"
import { getAllPosts } from "@/lib/mdx"

export const metadata = {
  title: "Blog — Portfolio",
  description: "Thoughts on design, development, and the space in between.",
}

export default function BlogPage() {
  const posts = getAllPosts("blog")

  return (
    <div className="mx-auto max-w-3xl px-4 pb-16 pt-24">
      <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      <p className="mt-2 text-muted-foreground">
        Thoughts on design, development, and the space in between.
      </p>
      <div className="mt-10 flex flex-col gap-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="glass group flex gap-5 overflow-hidden rounded-2xl p-3 shadow-lg shadow-black/5 transition-all hover:-translate-y-0.5 hover:shadow-xl"
          >
            {typeof post.image === "string" && (
              <div className="hidden shrink-0 overflow-hidden rounded-xl sm:block">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={200}
                  height={100}
                  className="h-28 w-44 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
            )}
            <div className="flex flex-col justify-center py-1">
              <time className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <h2 className="mt-1 font-semibold tracking-tight">
                {post.title}
              </h2>
              <p className="mt-1 text-sm font-light text-muted-foreground">
                {post.excerpt}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
