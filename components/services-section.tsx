"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { adviesServices, verkoopServices, specialServices } from "@/lib/services"

const dienstenBeeld = "/images/achtergronden/header_home.webp"

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="diensten" ref={ref} className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Koptekst over volle breedte */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-1000 lg:mx-0 lg:max-w-none lg:text-left ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent">
            Onze diensten
          </span>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground lg:text-5xl text-balance">
            Expertise in landelijk vastgoed
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground lg:text-lg">
            Van advies tot begeleiding bij aan- en verkoop. Wij bieden een
            breed scala aan diensten voor het landelijk gebied.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-12 lg:mt-16 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.25fr)] lg:gap-16">
          {/* Afbeelding naast diensten; op mobiel direct onder intro */}
          <div
            className={`relative lg:sticky lg:top-28 transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border shadow-lg lg:aspect-[3/4]">
              <Image
                src={dienstenBeeld}
                alt="Landelijk vastgoed en landschap"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 38vw"
              />
            </div>
          </div>

          <div className="min-w-0">
            {/* Advies Services Grid */}
            <div id="diensten-advies" className="scroll-mt-28">
              <h3
                className={`mb-8 font-serif text-xl font-semibold text-foreground transition-all duration-700 delay-200 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                Advies
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {adviesServices.map((service, i) => (
                  <Link
                    key={service.slug}
                    href={`/diensten/${service.slug}`}
                    className={`group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-accent/30 hover:shadow-lg block focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                      isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                    style={{ transitionDelay: `${300 + i * 100}ms` }}
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-accent/10">
                      <service.icon className="h-6 w-6 text-accent" />
                    </div>
                    <h4 className="mt-4 font-serif text-lg font-semibold text-foreground">
                      {service.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {service.desc}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Verkoop + Special Services */}
            <div className="mt-16 grid gap-16 lg:grid-cols-2">
              {/* Aan- en Verkoop */}
              <div id="diensten-aan-en-verkoop" className="scroll-mt-28">
                <h3
                  className={`mb-8 font-serif text-xl font-semibold text-foreground transition-all duration-700 delay-200 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  Aan- en verkoop begeleiding
                </h3>
                <div className="flex flex-col gap-4">
                  {verkoopServices.map((service, i) => (
                    <Link
                      key={service.slug}
                      href={`/diensten/${service.slug}`}
                      className={`group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-accent/30 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${600 + i * 100}ms` }}
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-secondary transition-colors group-hover:bg-accent/10">
                        <service.icon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-serif text-lg font-semibold text-foreground">
                          {service.title}
                        </h4>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {service.desc}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Specialistische diensten */}
              <div>
                <h3
                  className={`mb-8 font-serif text-xl font-semibold text-foreground transition-all duration-700 delay-200 ${
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                >
                  Specialistische diensten
                </h3>
                <div className="flex flex-col gap-4">
                  {specialServices.map((service, i) => (
                    <Link
                      key={service.slug}
                      href={`/diensten/${service.slug}`}
                      className={`group rounded-xl border border-border bg-card p-6 transition-all duration-700 hover:border-accent/30 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent block ${
                        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${600 + i * 100}ms` }}
                    >
                      <div className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-accent" />
                        <h4 className="font-serif text-lg font-semibold text-foreground">
                          {service.title}
                        </h4>
                      </div>
                      <p className="mt-2 pl-5 text-sm leading-relaxed text-muted-foreground">
                        {service.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
