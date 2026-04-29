import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getProjectBySlug, projectenIndex } from "@/data/projecten"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projectenIndex.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) return { title: "Project niet gevonden" }

  return {
    title: `${project.title} | Projecten | Bakker Rentmeesters`,
    description: project.excerpt,
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/projecten"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/70 bg-card/95 px-4 py-2 text-sm font-semibold text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-card"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar projecten
          </Link>

          <article className="rounded-xl border border-border bg-card p-6 shadow-sm lg:p-8">
            <h1 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
              {project.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground">
              {project.excerpt}
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
}
