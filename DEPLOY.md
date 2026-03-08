# Deploy op de server (landgoedeigenaar.nl)

Zodat de site op de server **hetzelfde** is als lokaal, moet het volgende kloppen.

## 1. Alles bouwen en starten vanuit de projectroot

De app leest content en data **ten opzichte van de map waar je het commando uitvoert** (`process.cwd()`).

- **Build:** altijd in de projectroot: `npm run build`
- **Start:** altijd in dezelfde projectroot: `npm run start` (of `npm start`)

Als je bijvoorbeeld alleen de map `.next` naar de server kopieert en daar `next start` draait, ontbreekt de map `content/` en zul je een andere (lege) site zien.

## 2. Deze mappen en bestanden moeten op de server staan

Zorg dat op de server (bijv. `/var/www/rentmeester`) **de volledige projectstructuur** aanwezig is:

| Nodig voor de site |
|--------------------|
| `content/` (alle .md in `content/aanbod/`) |
| `data/` (o.a. `aanbod.ts`, `projecten.ts`, `nieuws.ts`) |
| `lib/` (o.a. `aanbod.ts`, `aanbod-content.ts`) |
| `public/` (favicon, logo’s, placeholder.svg) |
| `src/` (alle app- en componentcode) |
| `package.json`, `next.config.mjs`, `postcss.config.mjs`, `tsconfig.json` |
| `node_modules/` (na `npm install`) |
| `.next/` (na `npm run build`) |

Dus: **niet** alleen `.next` + `node_modules` deployen; ook `content/`, `data/`, `lib/` en de rest van de repo.

## 3. Build-check

Bij `npm run build` wordt gecontroleerd of `content/aanbod/` bestaat en .md-bestanden bevat. Als dat op de server niet zo is, faalt de build. Zo zie je direct dat de content-map ontbreekt of op de verkeerde plek staat.

## 4. Typische deploy-stappen op de server

```bash
# In de projectmap (bijv. /var/www/rentmeester)
cd /var/www/rentmeester
git pull   # of bestanden op een andere manier updaten

npm ci
npm run build   # faalt als content/aanbod/ ontbreekt
npm run start   # of: pm2 start npm --name "rentmeester" -- start
```

Nginx proxy naar `http://127.0.0.1:3000` (zoals in je bestaande config) is voldoende.

## 5. Als de site toch anders is dan lokaal

Controleer:

1. **Zelfde code:** zelfde branch/commit als lokaal?
2. **Zelfde map:** wordt `npm run build` en `npm run start` uitgevoerd in de map waar ook `content/`, `data/` en `lib/` staan?
3. **Content aanwezig:** `ls content/aanbod/` toont .md-bestanden?
4. **Geen oude cache:** eventueel `rm -rf .next` en opnieuw `npm run build`.

Als dit allemaal klopt, zou de site op de server hetzelfde moeten zijn als lokaal.
