#!/usr/bin/env node
/**
 * Build-check: zorgt dat content/aanbod bestaat voordat we bouwen.
 * Zo faalt de build op de server als de content-map niet is meegedeployed.
 */
import fs from "fs"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, "..")
const contentAanbod = path.join(root, "content", "aanbod")

if (!fs.existsSync(contentAanbod)) {
  console.error("\n[ensure-content] FOUT: content/aanbod/ ontbreekt.")
  console.error("  Verwachte map:", contentAanbod)
  console.error("  Zorg dat je bouwt vanuit de projectroot en dat de map content/ wordt meegedeployed.\n")
  process.exit(1)
}

const files = fs.readdirSync(contentAanbod).filter((f) => f.endsWith(".md"))
if (files.length === 0) {
  console.error("\n[ensure-content] FOUT: Geen .md bestanden in content/aanbod/.")
  console.error("  De site heeft markdown-content nodig voor aanbodpagina's.\n")
  process.exit(1)
}

console.log("[ensure-content] OK: content/aanbod/ aanwezig (" + files.length + " .md bestanden).")
