"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { useForm, ValidationError } from "@formspree/react"

const FORMSPREE_FORM_ID = "mvzdzrzb"

export function ContactSection() {
  const [state, handleSubmit] = useForm(FORMSPREE_FORM_ID)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/achtergronden/achtergrond.webp"
          alt=""
          fill
          className="object-cover object-center -scale-x-100"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-background/20" aria-hidden />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div
          className={`mx-auto text-center transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-xs font-medium tracking-widest uppercase text-accent">
            Contact
          </span>
          <h2 className="mx-auto mt-4 max-w-2xl font-serif text-3xl font-bold text-foreground text-balance lg:text-5xl">
            {"Laten we kennismaken"}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-black lg:text-lg lg:whitespace-nowrap">
            Heeft u een vraag of wilt u vrijblijvend overleggen? Neem gerust contact met ons op.
          </p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          {/* Contact Form */}
          <div
            className={`rounded-2xl border border-border bg-background p-8 lg:col-span-3 transition-all duration-1000 delay-200 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {state.succeeded ? (
              <p className="text-center text-base leading-relaxed text-foreground">
                Bedankt voor uw bericht. We nemen zo snel mogelijk contact met u op.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">
                      Naam
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Uw naam"
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                    <ValidationError
                      prefix="Naam"
                      field="name"
                      errors={state.errors}
                      className="text-sm text-destructive"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="uw@email.nl"
                      className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                    <ValidationError
                      prefix="E-mail"
                      field="email"
                      errors={state.errors}
                      className="text-sm text-destructive"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-sm font-medium text-foreground">
                    Telefoonnummer
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+31 6 12345678"
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <ValidationError
                    prefix="Telefoonnummer"
                    field="phone"
                    errors={state.errors}
                    className="text-sm text-destructive"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Onderwerp
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    className="rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Kies een onderwerp
                    </option>
                    <option value="Advies">Advies</option>
                    <option value="Aan- en verkoop begeleiding">Aan- en verkoop begeleiding</option>
                    <option value="Taxaties">Taxaties</option>
                    <option value="Onteigening">Onteigening</option>
                    <option value="Grondverwerving">Grondverwerving</option>
                    <option value="Overig">Overig</option>
                  </select>
                  <ValidationError
                    prefix="Onderwerp"
                    field="subject"
                    errors={state.errors}
                    className="text-sm text-destructive"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Uw bericht..."
                    className="resize-none rounded-lg border border-input bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  />
                  <ValidationError
                    prefix="Bericht"
                    field="message"
                    errors={state.errors}
                    className="text-sm text-destructive"
                  />
                </div>
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="self-start rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:pointer-events-none disabled:opacity-60"
                >
                  {state.submitting ? "Verzenden…" : "Verstuur bericht"}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div
            className={`flex flex-col gap-6 lg:col-span-2 transition-all duration-1000 delay-400 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            {[
              {
                icon: MapPin,
                title: "Adres",
                lines: ["Hoekje 14", "4286 LN Almkerk", "Nederland"],
              },
              {
                icon: Phone,
                title: "Telefoon",
                lines: [
                  <a key="tel1" href="tel:0183402088" className="text-accent hover:underline">
                    0183-402088
                  </a>,
                  <a key="tel2" href="tel:0620603272" className="text-accent hover:underline">
                    06-20603272
                  </a>,
             
                ],
              },
              {
                icon: Mail,
                title: "E-mail",
                lines: [
                  <a key="email" href="mailto:info@rentmeester.nl" className="text-accent hover:underline">
                    info@rentmeester.nl
                  </a>,
                ],
              },
              
            ].map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-xl border border-border bg-background p-6"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                  <item.icon className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{item.title}</p>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
