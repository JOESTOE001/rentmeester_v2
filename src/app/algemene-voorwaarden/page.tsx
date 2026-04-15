import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { rvr2010Artikelen } from "@/data/rvr-2010-tekst"

export const metadata: Metadata = {
  title: "Algemene voorwaarden | Bakker Rentmeesters",
  description:
    "Algemene voorwaarden en de Regeling van Rentmeesters (RvR 2010) van Bakker Rentmeesters en Makelaars.",
}

export default function AlgemeneVoorwaardenPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Algemene voorwaarden
          </h1>

          <div className="mt-8 space-y-4 text-foreground leading-relaxed">
            <p>
              Bakker Rentmeesters en Makelaars hanteert als algemene voorwaarden
              de Regeling van Rentmeesters.
            </p>
            <p>
              <a
                href="#regeling-van-rentmeesters"
                className="text-primary underline underline-offset-4 hover:text-primary/90"
              >
                Klik hier voor de Regeling van Rentmeesters.
              </a>
            </p>
            <p>
              Iedere aansprakelijkheid is uitgesloten voor zover er geen sprake
              is van een overeenkomst van opdracht overeenkomstig de Regeling
              van Rentmeesters.
            </p>
          </div>

          <div
            id="regeling-van-rentmeesters"
            className="mt-14 scroll-mt-28 border-t border-border pt-12"
          >
            <h2 className="font-serif text-2xl font-semibold text-foreground">
              Regeling van Rentmeesters 2010 (RvR 2010)
            </h2>
            <div className="mt-8 space-y-10">
              {rvr2010Artikelen.map((art) => (
                <section key={art.titel}>
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {art.titel}
                  </h3>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {art.leden.map((lid, i) => (
                      <p key={i} className="whitespace-pre-line">
                        {lid}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
