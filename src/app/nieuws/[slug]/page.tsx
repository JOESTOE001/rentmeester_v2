import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { getNieuwsBySlug, nieuwsIndex } from "@/data/nieuws"
import { ArrowLeft } from "lucide-react"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return nieuwsIndex.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const item = getNieuwsBySlug(slug)
  if (!item) return { title: "Nieuwsbericht niet gevonden" }

  return {
    title: `${item.title} | Nieuws | Bakker Rentmeesters`,
    description: item.excerpt,
  }
}

export default async function NieuwsDetailPage({ params }: PageProps) {
  const { slug } = await params
  const item = getNieuwsBySlug(slug)
  if (!item) notFound()

  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/nieuws"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/70 bg-card/95 px-4 py-2 text-sm font-semibold text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-card"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar nieuws
          </Link>

          <article className="rounded-xl border border-border bg-card p-6 shadow-sm lg:p-8">
            <time dateTime={item.date} className="text-sm text-muted-foreground">
              {item.date}
            </time>
            <h1 className="mt-3 font-serif text-3xl font-bold text-foreground lg:text-4xl">
              {item.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-foreground">
              {item.excerpt}
            </p>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
}
