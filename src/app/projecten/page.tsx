import type { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContentBlockImageLeft } from "@/components/content-block-image-left"
import {
  getProjectenPage,
  PROJECTEN_TOTAL_PAGES,
  type ProjectItem,
} from "@/data/projecten"
import projectenImages from "@/data/projecten-images.json"

export const metadata: Metadata = {
  title: "Projecten | Bakker Rentmeesters",
  description:
    "Overzicht van projecten waarbij Bakker Rentmeesters betrokken is: grondverwerving, dijkversterking, warmtenetten, zonneparken en meer.",
}

const PLACEHOLDER_IMAGE = "/placeholder.svg"

/** Afbeelding voor een project: uit projecten-images.json (scrape) of placeholder. */
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

function projectenPaginationHref(page: number): string {
  return page === 1 ? "/projecten" : `/projecten/page/${page}`
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
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Link
            key={page}
            href={projectenPaginationHref(page)}
            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
              page === currentPage
                ? "bg-accent text-accent-foreground"
                : "bg-muted text-muted-foreground hover:bg-secondary hover:text-foreground"
            }`}
          >
            {page}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default function ProjectenPage() {
  const page = 1
  const items = getProjectenPage(page)

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
            currentPage={page}
            totalPages={PROJECTEN_TOTAL_PAGES}
          />
        </div>
      </div>
      <Footer />
    </main>
  )
}
