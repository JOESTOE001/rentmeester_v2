"use client"

import Image from "next/image"
import { useState } from "react"

type Props = {
  children: React.ReactNode
  imageSrc: string
  imageAlt: string
}

export function DienstPageColumns({ children, imageSrc, imageAlt }: Props) {
  const [isLandscape, setIsLandscape] = useState<boolean | null>(null)

  const wide = isLandscape === true

  return (
    <div
      className={
        wide
          ? "grid items-start gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.05fr)] lg:gap-12"
          : "grid items-start gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.68fr)] lg:gap-12"
      }
    >
      <div className="min-w-0">{children}</div>
      <div
        className={
          wide
            ? "mt-8 lg:sticky lg:top-28 lg:mt-10 lg:w-full lg:justify-self-end lg:max-w-xl"
            : "lg:sticky lg:top-28 lg:max-w-sm lg:justify-self-end"
        }
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={2400}
          height={1600}
          className="h-auto w-full rounded-2xl border border-border bg-muted shadow-lg"
          sizes={
            wide
              ? "(max-width: 1024px) 100vw, min(36rem, 48vw)"
              : "(max-width: 1024px) 100vw, 24rem"
          }
          priority
          onLoadingComplete={(img) => {
            setIsLandscape(img.naturalWidth >= img.naturalHeight)
          }}
        />
      </div>
    </div>
  )
}
