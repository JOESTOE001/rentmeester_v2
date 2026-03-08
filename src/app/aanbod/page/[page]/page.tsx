import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContentBlockImageLeft } from "@/components/content-block-image-left"
import { TOTAL_PAGES } from "@/data/aanbod"
import { getAanbodPage, type AanbodItem, type AanbodStatus } from "@/lib/aanbod"

const statusLabels: Record<AanbodStatus, string> = {
  "te-koop": "",
  verkocht: "verkocht",
  "verkocht-onder-voorbehoud": "verkocht onder voorbehoud",
}

const PLACEHOLDER_IMAGE = "/placeholder.svg"

function AanbodCard({ item }: { item: AanbodItem }) {
  const statusLabel = statusLabels[item.status]
  return (
    <ContentBlockImageLeft
      imageSrc={item.image ?? PLACEHOLDER_IMAGE}
      imageAlt={item.title}
      title={item.title}
      excerpt={item.excerpt}
      linkHref={`/aanbod/${item.slug}`}
      linkLabel="Lees meer..."
      statusLabel={statusLabel || undefined}
      extra={item.extra}
    />
  )
}

function aanbodPaginationHref(p: number): string {
  return p === 1 ? "/aanbod" : `/aanbod/page/${p}`
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
            href={aanbodPaginationHref(p)}
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
  return Array.from({ length: TOTAL_PAGES - 1 }, (_, i) => ({
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
  if (n < 2 || n > TOTAL_PAGES) return { title: "Niet gevonden" }
  return {
    title: `Aanbod – pagina ${n} | Bakker Rentmeesters & Makelaars`,
    description:
      "Actueel aanbod landelijk vastgoed: woonboerderijen, bospercelen, bouwgrond en agrarisch vastgoed.",
  }
}

export default async function AanbodPagePage({
  params,
}: {
  params: Promise<{ page: string }>
}) {
  const { page } = await params
  const pageNum = Number(page)
  if (pageNum < 2 || pageNum > TOTAL_PAGES) notFound()
  const items = await getAanbodPage(pageNum)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Aanbod
          </h1>
          <p className="mt-2 text-muted-foreground">
            Actueel aanbod landelijk vastgoed van Bakker Rentmeesters &
            Makelaars.
          </p>

          <ul className="mt-10 flex flex-col gap-6 list-none p-0 m-0">
            {items.map((item) => (
              <li key={item.id}>
                <AanbodCard item={item} />
              </li>
            ))}
          </ul>

          <Pagination currentPage={pageNum} totalPages={TOTAL_PAGES} />
        </div>
      </div>
      <Footer />
    </main>
  )
}
