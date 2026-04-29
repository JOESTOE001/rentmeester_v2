"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowDown } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/achtergronden/rentmeester_bg.webp"
          alt="Nederlands platteland landschap"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-hero-overlay/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-hero-overlay/90 via-transparent to-hero-overlay/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 sm:px-6 sm:py-32 lg:px-8">
        <div className="min-w-0 max-w-[42rem] lg:max-w-3xl">
          {/* Overline */}
          <div
            className={`mb-6 transition-all duration-1000 delay-200 sm:mb-8 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-card/20 bg-card/10 px-4 py-1.5 text-[0.7rem] font-medium tracking-widest uppercase text-card/80 backdrop-blur-sm sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Sinds 1990 actief
            </span>
          </div>

          {/* Heading */}
          <h1
            className={`max-w-full font-serif text-[clamp(2rem,9.2vw,4.5rem)] font-bold leading-[1.08] text-card transition-all duration-1000 delay-400 sm:text-5xl lg:text-7xl ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <span className="block text-balance">
              <span className="block sm:inline">Uw specialist in</span>{" "}
              <span className="block italic text-[oklch(0.94_0.1_78)] sm:inline">
                landelijk
              </span>{" "}
              <span className="block sm:inline">vastgoed</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-5 max-w-[34rem] text-base leading-7 text-card/85 transition-all duration-1000 delay-600 sm:mt-6 sm:text-lg lg:text-xl lg:leading-relaxed ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            Bakker Rentmeesters is al meer dan 30 jaar uw
            vertrouwde partner voor advies, beheer en begeleiding bij
            landelijk gelegen vastgoed in heel Nederland.
          </p>

          {/* CTA Buttons */}
          <div
            className={`mt-8 flex flex-col gap-3 transition-all duration-1000 delay-700 sm:mt-10 sm:flex-row sm:gap-4 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <a
              href="#diensten"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-accent-foreground transition-all hover:bg-accent/90 hover:shadow-lg sm:w-auto sm:px-8"
            >
              Onze diensten
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-lg border border-card/30 bg-card/10 px-6 py-3.5 text-sm font-semibold text-card backdrop-blur-sm transition-all hover:bg-card/20 sm:w-auto sm:px-8"
            >
              Neem contact op
            </a>
          </div>

          {/* Stats */}
          <div
            className={`mt-10 grid min-w-0 grid-cols-3 gap-3 transition-all duration-1000 delay-1000 sm:mt-16 sm:flex sm:gap-12 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            {[
              { number: "30+", label: "Jaar ervaring" },
              { number: "500+", label: "Projecten" },
              { number: "100%", label: "Betrokkenheid" },
            ].map((stat) => (
              <div key={stat.label} className="flex min-w-0 flex-col">
                <span className="font-serif text-2xl font-bold text-card sm:text-3xl lg:text-4xl">
                  {stat.number}
                </span>
                <span className="mt-1 min-w-0 break-words text-[0.55rem] uppercase leading-tight tracking-[0.08em] text-card/70 sm:text-xs sm:tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 sm:block">
        <a
          href="#over-ons"
          className="flex flex-col items-center gap-2 text-card/60 transition-colors hover:text-card"
          aria-label="Scroll naar beneden"
        >
          <span className="text-xs tracking-widest uppercase">Ontdek meer</span>
          <ArrowDown className="h-4 w-4 animate-bounce" />
        </a>
      </div>
    </section>
  )
}
