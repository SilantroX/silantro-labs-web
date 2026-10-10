import { redirect } from "next/navigation"
import { portfolio } from "@/data/portfolio"

export function generateStaticParams() {
  return portfolio.projects.map((p) => ({ slug: p.slug }))
}

export default async function ProjectRedirect({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  redirect(`/proyectos/${slug}`)
}
