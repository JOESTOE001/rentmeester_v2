"use client"

import * as React from "react"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export interface AanbodGalleryImage {
  src: string
  alt: string
}

interface AanbodImageCarouselProps {
  images: AanbodGalleryImage[]
  title?: string
}

export function AanbodImageCarousel({
  images,
  title = "Afbeeldingen",
}: AanbodImageCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const updateSelection = () => {
      setCurrent(api.selectedScrollSnap() + 1)
      setCount(api.scrollSnapList().length)
    }

    updateSelection()
    api.on("select", updateSelection)
    api.on("reInit", updateSelection)

    return () => {
      api.off("select", updateSelection)
      api.off("reInit", updateSelection)
    }
  }, [api])

  if (images.length === 0) return null

  return (
    <section className="mt-8" aria-labelledby="aanbod-afbeeldingen-title">
      <div className="mb-3 flex items-end justify-between gap-4">
        <h2
          id="aanbod-afbeeldingen-title"
          className="text-xl font-semibold text-foreground"
        >
          {title}
        </h2>
        {images.length > 1 && (
          <span className="text-sm text-muted-foreground">
            {current} / {count}
          </span>
        )}
      </div>

      <Carousel setApi={setApi} opts={{ align: "start", loop: true }}>
        <CarouselContent className="-ml-0">
          {images.map((image, index) => (
            <CarouselItem key={`${image.src}-${index}`} className="pl-0">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-muted">
                <Image
                  src={image.src}
                  alt={image.alt || `${title} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 896px"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {images.length > 1 && (
          <>
            <CarouselPrevious className="left-3 border-white/80 bg-card/90 text-foreground shadow-md backdrop-blur-sm hover:bg-card disabled:opacity-40" />
            <CarouselNext className="right-3 border-white/80 bg-card/90 text-foreground shadow-md backdrop-blur-sm hover:bg-card disabled:opacity-40" />
          </>
        )}
      </Carousel>
    </section>
  )
}
