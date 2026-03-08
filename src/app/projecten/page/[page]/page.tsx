import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContentBlockImageLeft } from "@/components/content-block-image-left"
import {
  getProjectenPage,
  PROJECTEN_TOTAL_PAGES,
  type ProjectItem,
} from "@/data/projecten"
import projectenImages from "@/data/projecten-images.json"

const PLACEHOLDER_IMAGE = "/placeholder.svg"

function getProjectImage(project: ProjectItem): string {
  const path =
    project.image ??
    (projectenImages as Record<string, string>)[project.slug] ??
    PLACEHOLDER_IMAGE
  return path
}

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <ContentBlockImageLeft
      imageSrc={getProjectImage(project)}
      imageAlt={project.title}
      title={project.title}
      excerpt={project.excerpt}
      linkHref="/#contact"
      linkLabel="Meer informatie"
    />
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
    title: `Projecten – pagina ${n} | Bakker Rentmeesters & Makelaars`,
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
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Projecten
          </h1>
          <p className="mt-2 text-muted-foreground">
            Overzicht van projecten waarbij Bakker Rentmeesters betrokken is of
            is geweest.
          </p>

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
