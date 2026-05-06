# SvelteKit Künstler-Portfolio: S. Eschenbach

## Projektübersicht
Erstelle eine SvelteKit-Website zur Vorstellung der Künstlerin/des Künstlers
"S. Eschenbach". Die Seite soll modern, minimalistisch und brutalist-minimal
gestaltet sein, sodass die Kunstwerke im Vordergrund stehen. Sprache: Deutsch.

## Tech-Stack
- SvelteKit (neueste Version, Svelte 5 mit Runes)
- TypeScript
- Vanilla CSS oder UnoCSS (kein Tailwind-Bloat)
- Statische Bilder im Repo (`/static/images/`)
- Adapter: `@sveltejs/adapter-static` (für einfaches Deployment)
- Bildoptimierung mit `@sveltejs/enhanced-img`

## Seitenstruktur
- `/` — Startseite mit großem Hero (ein markantes Werk als Hintergrund),
  Künstlername als Signatur-Logo, dezente Navigation
- `/galerie` — Werkübersicht als Grid, klickbar für Detailansicht
- `/galerie/[slug]` — Einzelwerk-Ansicht (großes Bild, Titel, Jahr, Technik,
  Maße, optional Beschreibung)
- `/vita` — Lebenslauf des Künstlers (chronologisch, textlastig)
- `/ausstellungen` — Liste der Ausstellungen (Jahr, Ort, Titel, Solo/Gruppe)
- `/impressum` und `/datenschutz` — rechtlich notwendig in Deutschland

## Design-Richtung: Brutalist-minimal
- **Typografie**: Mono-Font für Akzente und Navigation (z.B. JetBrains Mono
  oder IBM Plex Mono), eine kantige Sans-Serif (z.B. Inter, Söhne-Alternative)
  oder Serif (z.B. Tinos) für Fließtext. Keine Schnörkel.
- **Farben**: Reduzierte Palette — gebrochenes Weiß/Beige Hintergrund
  (`#EDEAE4` oder ähnlich, wie auf der alten Seite), tiefes Schwarz für Text,
  ein einziger Akzent (z.B. das Violett/Rot aus dem alten Hero kann subtil
  zitiert werden, aber nicht aufdrängen).
- **Layout**: Klare Raster, sichtbare Linien als Trenner, generöser Weißraum,
  asymmetrische Anordnung erlaubt. Keine Schatten, keine Rundungen
  (max. 0–2px), keine Gradients außer im Hero.
- **Navigation**: Schlicht, Mono-Font, in Caps: GALERIE  VITA  AUSSTELLUNGEN.
  Fixed oder sticky oben, Unterstreichung beim Hover.
- **Bilder**: Bekommen den meisten Raum. Keine Schatten/Rahmen, aber feine
  1px-Hairlines wo nötig. Lazy Loading, Aspect Ratio bewahren.

## Inhaltliche Anforderungen
- Daten für Werke, Vita und Ausstellungen in TypeScript-Dateien unter
  `/src/lib/data/` (Beispiel-Werke, Beispiel-Vita-Einträge, Beispiel-
  Ausstellungen — Platzhalter, die ich später ersetze)
- Jeder Werk-Eintrag: `slug`, `title`, `year`, `technique`, `dimensions`,
  `image`, optional `description`
- Bilder in `/static/images/werke/` ablegen, Dateinamen = slugs

## Funktionale Anforderungen
- Voll responsiv (Mobile-First, Breakpoints bei 640/1024/1440px)
- Galerie-Grid: 2 Spalten mobil, 3 Tablet, 4 Desktop
- Werk-Detailseite: Vollbild-Ansicht, Vor/Zurück-Navigation zwischen Werken
- Sanfte Seitenübergänge (View Transitions API wo unterstützt)
- Accessibility: semantisches HTML, alt-Texte, Keyboard-Navigation,
  Lighthouse a11y Score > 95
- SEO: Meta-Tags pro Seite, OpenGraph, sitemap.xml

## Performance
- Lighthouse-Ziel: > 95 in allen Kategorien
- Bilder als WebP/AVIF mit Fallback (enhanced-img)
- Keine externen Trackingscripts, keine Cookie-Banner nötig (kein Tracking)

## Was du tun sollst
1. Projekt-Setup mit `npm create svelte@latest`
2. Ordnerstruktur und Routen anlegen
3. Layout mit Header/Footer + Navigation
4. Alle Seiten mit Platzhalter-Inhalten implementieren
5. CSS-Design-System (Variablen für Farben, Spacing, Typografie) in
   `/src/app.css`
6. README mit Anleitung zum Hinzufügen neuer Werke

Frag mich bei Designentscheidungen, wenn du dir nicht sicher bist. Zeig mir
nach dem Setup eine kurze Übersicht der Struktur, bevor du in Details gehst.