import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Disclaimer | Bakker Rentmeesters",
  description:
    "Disclaimer: aan de informatie op deze website kunnen geen rechten worden ontleend.",
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Disclaimer
          </h1>
          <div className="mt-8 space-y-4 text-foreground leading-relaxed">
            <p>
              Aan de informatie op deze website kunnen geen rechten worden
              ontleend. Het gebruik van informatie is voor eigen risico. Tekst,
              foto&apos;s en logo&apos;s mogen niet zonder toestemming worden
              gekopieerd.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
