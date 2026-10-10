import { redirect } from "next/navigation"
import { getAllSlugs } from "@/lib/mdx"

export function generateStaticParams() {
  const slugs = getAllSlugs("articulos").length > 0 ? getAllSlugs("articulos") : getAllSlugs("blog")
  return slugs.map((slug) => ({ slug }))
}

export default async function BlogSlugRedirect({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  redirect(`/articulos/${slug}`)
}
