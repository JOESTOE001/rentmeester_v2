"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const POPUP_KEY = "landeigenaar-popup-dismissed"

const LANDEIGENAAR_URL =
  "https://landeigenaar.nl/?utm_source=bakker-rentmeesters&utm_medium=popup&utm_campaign=landeigenaar_popup"

export function LandeigenaarPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    const dismissed = sessionStorage.getItem(POPUP_KEY)
    if (dismissed) return
    const timer = setTimeout(() => setIsVisible(true), 800)
    return () => clearTimeout(timer)
  }, [isMounted])

  const close = () => {
    setIsVisible(false)
    sessionStorage.setItem(POPUP_KEY, "true")
  }

  if (!isVisible) return null

  return (
    <a
      href={LANDEIGENAAR_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-3 left-1/2 z-50 flex w-[calc(100%-1.5rem)] max-w-md -translate-x-1/2 gap-3 rounded-xl border border-border bg-card p-3 shadow-lg transition-shadow hover:shadow-xl sm:bottom-6 sm:left-auto sm:right-6 sm:w-auto sm:translate-x-0 sm:gap-5 sm:p-5 animate-in slide-in-from-bottom-4 fade-in duration-300"
      aria-label="Ga naar Landeigenaar.nl – al het aanbod agrarische grond"
    >
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          close()
        }}
        className="absolute right-2 top-2 z-10 rounded p-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        aria-label="Sluiten"
      >
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="relative flex-shrink-0">
        <Image
          src="/images/landeigenaar-logo.svg"
          alt=""
          width={80}
          height={80}
          className="h-12 w-12 object-contain sm:h-16 sm:w-16"
        />
      </div>
      <div className="pr-7 pt-0.5 sm:pr-8 sm:pt-1">
        <p className="text-sm leading-6 text-foreground sm:text-base sm:leading-relaxed">
          Benieuwd naar Al het aanbod agrarische grond? Neem een kijkje op{" "}
          <span className="text-accent font-semibold underline underline-offset-2">
            Landeigenaar.nl
          </span>
        </p>
      </div>
    </a>
  )
}
