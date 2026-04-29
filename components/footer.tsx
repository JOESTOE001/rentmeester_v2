import Image from "next/image"
import type { LucideIcon } from "lucide-react"
import { Facebook, Instagram, Linkedin } from "lucide-react"

const FOOTER_SOCIAL_LINKS: {
  href: string
  label: string
  Icon: LucideIcon | "bluesky"
}[] = [
  {
    href: "https://www.facebook.com/people/Bakker-Rentmeesters-BV/61567494647203/",
    label: "Facebook",
    Icon: Facebook,
  },
  {
    href: "https://www.linkedin.com/company/bakker-rentmeesters-makelaars/posts/?feedView=all",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/bakker_rentmeesters",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://bsky.app/profile/rentmeester.nl",
    label: "Bluesky",
    Icon: "bluesky",
  },
]

function BlueskyGlyph({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        fill="currentColor"
        d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"
      />
    </svg>
  )
}

const FOOTER_PARTNER_LOGOS = [
  {
    src: "/logobanner/logo_nvr.png",
    alt: "Nederlandse Vereniging van Rentmeesters (NVR)",
    href: "https://www.rentmeesternvr.nl/",
  },
  {
    src: "/logobanner/logo_vvor.png",
    alt: "Vereniging voor Onteigeningsrecht (VVOR)",
    href: "https://vvor.info/",
  },
  {
    src: "/logobanner/logo_vastgoedcert.png",
    alt: "VastgoedCert gecertificeerd",
    href: "https://www.vastgoedcert.nl/",
  },
  {
    src: "/logobanner/logo_dobs.png",
    alt: "Register van deskundigen in onteigening (DOBS)",
    href: "https://registerdobs.nl/",
  },
  {
    src: "/logobanner/logo_funda.png",
    alt: "Funda",
    href: "https://www.funda.nl/",
  },
  {
    src: "/logobanner/logo_nrvt.png",
    alt: "Nederlands Register Vastgoed Taxateurs (NRVT)",
    href: "https://www.nrvt.nl/",
  },
  {
    src: "/logobanner/logo_rentmeesters.png",
    alt: "rentmeesters.nl",
    href: "https://www.rentmeesters.nl/",
  },
  {
    src: "/logobanner/logo_landeigenaar.png",
    alt: "LandEigenaar",
    href: "https://landeigenaar.nl/",
  },
] as const

export function Footer() {
  return (
    <>
    <footer className="border-t border-border bg-primary py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10">
                <span className="font-serif text-lg font-bold text-primary-foreground">R</span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-semibold leading-tight text-primary-foreground">
                  Rentmeester
                </span>
                <span className="text-xs tracking-widest uppercase text-primary-foreground/60">
                  Bakker B.V.
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Specialist op het gebied van landelijk gelegen vastgoed. Meer dan
              30 jaar ervaring als rentmeester in Nederland.
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Diensten</h4>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                { label: "Advies", href: "/#diensten-advies" },
                { label: "Aan- en verkoop", href: "/#diensten-aan-en-verkoop" },
                { label: "Taxaties", href: "/diensten/taxaties" },
                { label: "Onteigening", href: "/diensten/onteigening" },
                { label: "Grondverwerving", href: "/diensten/grondverwerving" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Bedrijf</h4>
            <ul className="mt-4 flex flex-col gap-2">
              {[
                { label: "Aanbod", href: "/aanbod" },
                { label: "Projecten", href: "/projecten" },
                { label: "Over ons", href: "/#over-ons" },
                { label: "Referenties", href: "/#referenties" },
                { label: "Contact", href: "/#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-primary-foreground">Contact</h4>
            <ul className="mt-4 flex flex-col gap-2">
              <li>
                <a
                  href="mailto:info@rentmeester.nl"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  info@rentmeester.nl
                </a>
              </li>
              <li>
                <a
                  href="tel:0183402088"
                  className="text-sm text-primary-foreground/60 transition-colors hover:text-primary-foreground"
                >
                  0183-402088
                </a>
              </li>
            </ul>
            <p className="mt-6 text-sm font-semibold text-primary-foreground">Social media</p>
            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Social media">
              {FOOTER_SOCIAL_LINKS.map(({ href, label, Icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground/70 transition-colors hover:bg-primary-foreground/15 hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-foreground/80"
                    aria-label={label}
                  >
                    {Icon === "bluesky" ? (
                      <BlueskyGlyph className="size-5" />
                    ) : (
                      <Icon className="size-5" aria-hidden />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 sm:flex-row">
          <p className="text-xs text-primary-foreground/50">
            &copy; {new Date().getFullYear()} Bakker Rentmeesters B.V.
            Alle rechten voorbehouden.
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a
              href="/algemene-voorwaarden"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80"
            >
              Algemene voorwaarden
            </a>
            <a
              href="/disclaimer"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80"
            >
              Disclaimer
            </a>
            <a
              href="/privacy-verklaring"
              className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80"
            >
              Privacy verklaring
            </a>
          </div>
        </div>
      </div>
    </footer>
    <div
      className="border-t border-primary bg-white py-5"
      aria-label="Keurmerken en partners"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ul className="flex w-full max-w-full flex-nowrap items-center justify-center gap-1.5 sm:gap-2 md:gap-4 lg:gap-6">
          {FOOTER_PARTNER_LOGOS.map(({ src, alt, href }) => (
            <li
              key={src}
              className="flex min-w-0 flex-1 basis-0 items-center justify-center"
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full max-w-full items-center justify-center rounded-sm outline-offset-4 transition-opacity hover:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
              >
                <Image
                  src={src}
                  alt={alt}
                  width={160}
                  height={56}
                  className="h-auto max-h-6 w-auto max-w-full object-contain opacity-90 sm:max-h-8 md:max-h-10 lg:max-h-11"
                  sizes="(max-width: 640px) 80px, (max-width: 1024px) 120px, 140px"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}
