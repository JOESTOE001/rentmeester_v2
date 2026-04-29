"use client"

import { useState, useEffect, type MouseEvent } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Diensten",
    href: "/#diensten",
    children: [
      { label: "Advies", href: "/#diensten-advies" },
      { label: "Aan- en verkoop", href: "/#diensten-aan-en-verkoop" },
      { label: "Taxaties", href: "/diensten/taxaties" },
    ],
  },
  { label: "Aanbod", href: "/aanbod" },
  { label: "Projecten", href: "/projecten" },
  {
    label: "Over ons",
    href: "/over-ons",
    children: [
      { label: "Nieuws", href: "/nieuws" },
      { label: "Referenties", href: "/referenties" },
      { label: "Beroepsgroep", href: "/beroepsgroep" },
      { label: "Links", href: "/links" },
    ],
  },
]

export function Navigation() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const isHome = pathname === "/"
  const solidNavBar = isScrolled || !isHome

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleMobileLinkClick = (
    href: string,
    event: MouseEvent<HTMLAnchorElement>
  ) => {
    setIsMobileOpen(false)

    if (!href.startsWith("/#") || pathname !== "/") return

    event.preventDefault()

    const target = document.getElementById(href.slice(2))
    if (!target) return

    window.history.pushState(null, "", href)
    requestAnimationFrame(() => {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solidNavBar
          ? "bg-card/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 -translate-y-1 sm:-translate-y-1.5"
        >
          <Image
            src="/logo.svg"
            alt="Bakker Rentmeesters"
            width={220}
            height={66}
            className="block h-10 w-auto object-contain object-left sm:h-12"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => link.children && setOpenDropdown(link.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                  solidNavBar
                    ? "text-foreground hover:bg-secondary"
                    : "text-card/90 hover:text-card hover:bg-card/10"
                }`}
              >
                {link.label}
                {link.children && <ChevronDown className="h-3.5 w-3.5" />}
              </Link>
              {link.children && openDropdown === link.label && (
                <div className="absolute left-0 top-full pt-2">
                  <div className="rounded-lg border border-border bg-card p-2 shadow-lg min-w-48">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block rounded-md px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href="/#contact"
            className="hidden rounded-lg bg-[#5f8f53] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-[#527d48] lg:block"
          >
            Neem contact op
          </Link>
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className={`lg:hidden transition-colors ${
              solidNavBar ? "text-foreground" : "text-card"
            }`}
            aria-label={isMobileOpen ? "Menu sluiten" : "Menu openen"}
          >
            {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="border-t border-border bg-card lg:hidden">
          <div className="flex flex-col px-6 py-4">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  onClick={(event) => handleMobileLinkClick(link.href, event)}
                  className="block py-3 text-base font-medium text-foreground"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="ml-4 flex flex-col">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={(event) => handleMobileLinkClick(child.href, event)}
                        className="block py-2 text-sm text-muted-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/#contact"
              onClick={(event) => handleMobileLinkClick("/#contact", event)}
              className="mt-4 block rounded-lg bg-[#5f8f53] px-5 py-3 text-center text-sm font-medium text-white hover:bg-[#527d48]"
            >
              Neem contact op
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
