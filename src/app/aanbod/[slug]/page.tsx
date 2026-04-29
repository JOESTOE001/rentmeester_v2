import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MarkdownBody } from "@/components/markdown-body"
import {
  AanbodImageCarousel,
  type AanbodGalleryImage,
} from "@/components/aanbod-image-carousel"
import { getAanbodBySlug, type AanbodStatus } from "@/lib/aanbod"
import { aanbodIndex } from "@/data/aanbod"
import { ArrowLeft } from "lucide-react"

/** Vereist voor output: 'export' (GitHub Pages): alle slugs vooraf genereren. */
export function generateStaticParams() {
  return aanbodIndex.map((item) => ({ slug: item.slug }))
}

const statusLabelsMap: Record<AanbodStatus, string> = {
  "te-koop": "",
  verkocht: "verkocht",
  "verkocht-onder-voorbehoud": "verkocht onder voorbehoud",
}

function splitBodyAndGallery(body: string): {
  body: string
  images: AanbodGalleryImage[]
} {
  const galleryHeading = /^##\s+Afbeeldingen\s*$/im
  const headingMatch = galleryHeading.exec(body)

  if (!headingMatch) return { body, images: [] }

  const beforeGallery = body.slice(0, headingMatch.index).trim()
  const afterHeading = body.slice(headingMatch.index + headingMatch[0].length)
  const nextHeadingMatch = /^##\s+/m.exec(afterHeading)
  const gallerySection = nextHeadingMatch
    ? afterHeading.slice(0, nextHeadingMatch.index)
    : afterHeading
  const afterGallery = nextHeadingMatch
    ? afterHeading.slice(nextHeadingMatch.index).trim()
    : ""

  const images = Array.from(
    gallerySection.matchAll(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)
  ).map((match) => ({
    alt: match[1],
    src: match[2],
  }))

  return {
    body: [beforeGallery, afterGallery].filter(Boolean).join("\n\n"),
    images,
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const item = await getAanbodBySlug(slug)
  if (!item) return { title: "Niet gevonden" }
  return {
    title: `${item.title} | Aanbod | Bakker Rentmeesters`,
    description: item.excerpt || undefined,
  }
}

export default async function AanbodDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const item = await getAanbodBySlug(slug)
  if (!item) notFound()

  const statusLabel = statusLabelsMap[item.status]
  const hasImage = item.image
  const PLACEHOLDER_IMAGE = "/placeholder.svg"
  const { body, images } = splitBodyAndGallery(item.body)

  return (
    <main className="min-h-screen bg-transparent">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link
            href="/aanbod"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/70 bg-card/95 px-4 py-2 text-sm font-semibold text-foreground shadow-md backdrop-blur-sm transition-colors hover:bg-card"
          >
            <ArrowLeft className="h-4 w-4" />
            Terug naar aanbod
          </Link>

          <article className="rounded-xl border border-border bg-card overflow-hidden shadow-sm">
            {/* Hoofdafbeelding */}
            <div className="relative aspect-[16/9] w-full bg-muted">
              <Image
                src={hasImage ? item.image! : PLACEHOLDER_IMAGE}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
                priority
              />
            </div>

            <div className="p-6 lg:p-8">
              {statusLabel && (
                <span
                  className={`inline-block rounded-full px-3 py-1 text-xs font-medium mb-4 ${
                    item.status === "verkocht-onder-voorbehoud"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {statusLabel}
                </span>
              )}
              <h1 className="font-serif text-3xl font-bold text-foreground lg:text-4xl">
                {item.title}
              </h1>
              {item.excerpt && (
                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>
              )}
              {item.extra && (
                <p className="mt-2 text-sm text-muted-foreground">
                  {item.extra}
                </p>
              )}

              {/* Uitgebreide tekst (body: markdown + HTML zoals <strong>) */}
              {body && (
                <div className="mt-8">
                  <MarkdownBody content={body} className="leading-relaxed" />
                </div>
              )}

              <AanbodImageCarousel images={images} />

              <p className="mt-8 text-sm text-muted-foreground">
                Voor meer informatie over dit aanbod, neem gerust contact met ons
                op.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex rounded-lg bg-[#5f8f53] px-6 py-3 text-sm font-semibold text-white hover:bg-[#527d48]"
              >
                Neem contact op
              </Link>
            </div>
          </article>
        </div>
      </div>
      <Footer />
    </main>
  )
}
