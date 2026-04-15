import type { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy verklaring | Bakker Rentmeesters",
  description:
    "Privacyverklaring van Bakker Rentmeesters en Makelaars: gegevens, cookies en Google Analytics.",
}

const gaOptOut = "https://tools.google.com/dlpage/gaoptout"

export default function PrivacyVerklaringPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <h1 className="font-serif text-4xl font-bold text-foreground">
            Privacy verklaring www.rentmeester.nl
          </h1>

          <p className="mt-8 text-foreground leading-relaxed">
            Deze privacy verklaring is voor het laatst aangepast op 25-06-2018.
          </p>

          <h2 className="mt-10 font-serif text-xl font-semibold text-foreground">
            Opslaan van gegevens
          </h2>
          <p className="mt-3 font-semibold text-foreground">
            Contactgegevens / formulier
          </p>
          <p className="mt-2 text-foreground leading-relaxed">
            Als u het contactformulier op de website invult, of ons een e-mail
            stuurt, dan worden de gegevens die u ons toestuurt bewaard zolang als
            naar de aard van het formulier of de inhoud van uw e-mail nodig is
            voor de volledige beantwoording en afhandeling daarvan. Uw gegevens
            worden niet door ons aan derden verstrekt.
          </p>
          <p className="mt-4 text-foreground leading-relaxed">
            Naast dit contactformulier worden er geen persoonsgegevens
            opgeslagen.
          </p>

          <h2 className="mt-10 font-serif text-xl font-semibold text-foreground">
            Cookies
          </h2>
          <p className="mt-3 font-semibold text-foreground">
            Functionele cookies
          </p>
          <p className="mt-2 text-foreground leading-relaxed">
            Deze website maakt gebruik van een CMS (Content Management Systeem)
            voor het beheren van de content. Dit CMS plaatst een sessie cookie
            om de website veilig te maken. Deze cookie is nooit te herleiden tot
            u als persoon.
          </p>
          <p className="mt-6 font-semibold text-foreground">
            Analytische cookies
          </p>
          <p className="mt-2 text-foreground leading-relaxed">
            Zoals hieronder beschreven in de officiële verklaring die Google
            Analytics gebruikers op hun website moeten plaatsen maakt deze
            website gebruik van Google Analytics. Dit programma levert
            belangrijke statistieken over aantallen bezoekers, de bezochte
            pagina&apos;s, de verkeersbronnen en andere essentiële informatie
            waarmee wij deze website voortdurend kunnen verbeteren voor de
            gebruikers. Deze statistieken zijn anoniem en niet te herleiden tot
            een bepaalde persoon of gebruiker. Er wordt geen gebruik gemaakt
            van &apos;behavioural targeting&apos; waarmee u op basis van uw
            klikgedrag speciale inhoud krijgt te zien; uw surfgedrag blijft
            volledig anoniem. Gegevens uit contactformulieren worden nooit in
            Analytics verwerkt of opgeslagen.
          </p>
          <p className="mt-4 text-foreground leading-relaxed">
            Het cookie van Google Analytics is een &apos;first party
            cookie&apos;, dat wil zeggen dat het cookie officieel eigendom is
            van Bakker Rentmeesters en Makelaars en niet van Google. Dit cookie
            wordt niet gebruikt voor advertenties of andere commerciële
            doeleinden. Bakker Rentmeesters en Makelaars heeft een
            verwerkersovereenkomst met Google. Daarnaast is Google Analytics zo
            ingesteld dat IP-adressen anoniem zijn gemaakt, zodat gegevens nooit
            naar u of uw IP adres te herleiden zijn. Verder wordt vanuit het
            Analytics account van Bakker Rentmeesters en Makelaars geen
            informatie gedeeld met Google of andere partijen. Daarmee is het
            Analytics cookie van Bakker Rentmeesters en Makelaars een
            niet-privacy gevoelig first-party cookie dat nodig is om de kwaliteit
            en veiligheid van www.rentmeester.nl te kunnen waarborgen. Het
            Analytics cookie blijft 6 maanden geldig.
          </p>
          <p className="mt-4 text-foreground leading-relaxed">
            Voor het analyseren van de websitestatistieken hebben wij toegang
            gegeven tot onze Google Analytics account aan onze website beheerder
            Inxpact uit Zwolle. Met hen hebben we een verwerkersovereenkomst
            gesloten.
          </p>
          <p className="mt-4 text-foreground leading-relaxed">
            Als u het script van Google Analytics liever helemaal wilt blokkeren
            dan kunt u hier een opt-out plugin voor Google Analytics downloaden:{" "}
            <a
              href={gaOptOut}
              className="text-primary underline underline-offset-4 hover:text-primary/90"
              target="_blank"
              rel="noopener noreferrer"
            >
              {gaOptOut}
            </a>
            . Met deze plugin telt uw bezoek niet meer mee in de statistieken van
            alle websites die Google Analytics gebruiken.
          </p>

          <p className="mt-8 font-semibold text-foreground">
            Google Analytics – verklaring van Google:
          </p>
          <blockquote className="mt-3 border-l-2 border-border pl-4 text-muted-foreground leading-relaxed">
            &quot;Deze website maakt gebruik van Google Analytics, een
            webanalyse-service die wordt aangeboden door Google Inc.
            (&quot;Google&quot;). Google Analytics maakt gebruik van
            &apos;cookies&apos; (tekstbestandjes die op uw computer worden
            geplaatst) om de website te helpen analyseren hoe bezoekers de site
            gebruiken. De door het cookie gegenereerde anonieme informatie over
            uw gebruik van de website wordt overgebracht naar en door Google
            opgeslagen op servers in de Verenigde Staten. Google gebruikt deze
            informatie om bij te houden hoe deze website wordt gebruikt,
            rapporten over de website-activiteit op te stellen voor de eigenaar
            van deze website en andere diensten aan te bieden met betrekking tot
            website-activiteit en internetgebruik. Google mag deze informatie
            alleen aan derden verschaffen indien Google hiertoe wettelijk wordt
            verplicht, of voor zover deze derden de informatie namens Google
            verwerken. Google zal uw IP-adres niet combineren met andere gegevens
            waarover Google beschikt. U kunt het gebruik van cookies weigeren
            door in uw browser de daarvoor geëigende instellingen te kiezen. Wij
            wijzen u er echter op dat u in dat geval wellicht niet alle
            mogelijkheden van deze website kunt benutten. Door gebruik te maken
            van deze website geeft u toestemming voor het verwerken van de
            informatie door Google op de wijze en voor de doeleinden zoals
            hiervoor omschreven.&quot;
          </blockquote>

          <p className="mt-8 text-foreground leading-relaxed">
            Als u vragen heeft over ons privacy beleid, kunt u contact met ons
            opnemen.
          </p>
          <dl className="mt-6 space-y-2 text-foreground leading-relaxed">
            <div>
              <dt className="font-semibold">Bedrijfsnaam:</dt>
              <dd>Bakker Rentmeesters en Makelaars</dd>
            </div>
            <div>
              <dt className="font-semibold">Gevestigd:</dt>
              <dd>Hoekje 14, 4286 LN Almkerk</dd>
            </div>
            <div>
              <dt className="font-semibold">Website:</dt>
              <dd>www.rentmeester.nl</dd>
            </div>
            <div>
              <dt className="font-semibold">E-mail:</dt>
              <dd>
                Dit e-mailadres wordt beveiligd tegen spambots. JavaScript dient
                ingeschakeld te zijn om het te bekijken.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <Footer />
    </main>
  )
}
