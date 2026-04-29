import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  getProjectenPage,
  PROJECTEN_TOTAL_PAGES,
  type ProjectItem,
} from "@/data/projecten"

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Link
      href={`/projecten/${project.slug}`}
      className="group block rounded-xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:p-8"
    >
      <h2 className="font-sans text-lg font-bold uppercase tracking-wide text-accent lg:text-xl">
        {project.title}
      </h2>
      <p className="mt-3 text-base leading-relaxed text-foreground">
        {project.excerpt}
      </p>
      <span className="mt-4 inline-flex items-center text-sm font-medium text-primary underline decoration-dotted underline-offset-2 group-hover:text-accent">
        Meer informatie
      </span>
    </Link>
  )
}

function projectenPaginationHref(p: number): string {
  return p === 1 ? "/projecten" : `/projecten/page/${p}`
}

function Pagination({
  currentPage,
  totalPages,
}: {
  currentPage: number
  totalPages: number
}) {
  if (totalPages <= 1) return null
  return (
    <nav
      className="mt-12 flex flex-wrap items-center justify-center gap-2"
      aria-label="Paginering"
    >
      <span className="mr-4 text-sm text-muted-foreground">
        Pagina {currentPage} van {totalPages}
      </span>
      <div className="flex gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
          <Link
            key={p}
            href={projectenPaginationHref(p)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              p === currentPage
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {p}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export function generateStaticParams() {
  return Array.from({ length: Math.max(0, PROJECTEN_TOTAL_PAGES - 1) }, (_, i) => ({
    page: String(i + 2),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>
}): Promise<Metadata> {
  const { page } = await params
  const n = Number(page)
  if (n < 2 || n > PROJECTEN_TOTAL_PAGES) return { title: "Niet gevonden" }
  return {
    title: `Projecten – pagina ${n} | Bakker Rentmeesters`,
    description:
      "Overzicht van projecten waarbij Bakker Rentmeesters betrokken is: grondverwerving, dijkversterking, warmtenetten, zonneparken en meer.",
  }
}

export default async function ProjectenPagePage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page } = await params
  const pageNum = Number(page)
  if (pageNum < 2 || pageNum > PROJECTEN_TOTAL_PAGES) notFound()
  const items = getProjectenPage(pageNum)

  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm lg:p-8">
            <h1 className="font-serif text-4xl font-bold text-foreground">
              Projecten
            </h1>
            <p className="mt-2 text-muted-foreground">
              Overzicht van projecten waarbij Bakker Rentmeesters betrokken is of
              is geweest.
            </p>
          </div>

          <ul className="mt-10 flex flex-col gap-6 list-none p-0 m-0">
            {items.map((project) => (
              <li key={project.id}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>

          <Pagination
            currentPage={pageNum}
            totalPages={PROJECTEN_TOTAL_PAGES}
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
