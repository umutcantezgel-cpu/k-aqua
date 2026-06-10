Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die gesamte Lade- und Rendering-Architektur dieser Next.js/React/TypeScript-Website so radikal zu optimieren, dass sich der Seitenaufbau anfühlt wie das Öffnen einer Tür — sofort, reibungslos, ohne den leisesten Moment des Wartens. Da Next.js bereits ein hochoptimiertes Framework ist (automatisches Code-Splitting, Image-Optimierung, Font-Optimierung, Streaming SSR), liegt der Fokus dieser Phase auf der chirurgischen Feinoptimierung jeder einzelnen Ressource, der maximalen Ausnutzung von Next.js-spezifischen Performance-Features und der Eliminierung jedes verbliebenen Bottlenecks. Dies ist Phase 6 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

═══════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE PROTOKOLL — LIES DIES VOR JEDER AKTION
═══════════════════════════════════════════════════════════════════════════════

DU BIST EIN CHIRURG, KEIN BULLDOZER.

Deine 5 Säulen:
1. READ-BEFORE-WRITE: Lies JEDE Datei VOLLSTÄNDIG bevor du sie änderst
2. SURGICAL INJECTION: Erweitere bestehenden Code, überschreibe ihn NIEMALS blind
3. ATOMIC VALIDATION: Nach JEDEM Task → npm run build && npm run lint && npx tsc --noEmit
4. STATE HANDOFF: Aktualisiere .upgrade-state.md nach jedem Task
5. SELF-OPTIMIZING LOOP: Aktualisiere .ai-architectural-context.md am Ende der Phase

TECH-STACK-RESTRIKTIONEN (UNVERLETZLICH):
- Core: Next.js (App Router oder Pages Router), React, TypeScript (Strict Mode)
- Styling: Tailwind CSS, CSS Modules oder CSS Custom Properties
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry/externe Monitoring-SaaS, keine Newsletter-Systeme, kein i18n-Framework

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere alles aus Phase 1–5:
- Projektstruktur, Router-Typ, Komponentenbaum
- Design-Token-System, Typografie, Animations-System
- Conversion-Architektur, Trust-Komponenten, Formspree-Integration
- Alle bisherigen Architektur-Entscheidungen

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe den Handoff von Phase 5. Ergänze:
```
## Phase 6: Extreme Performance-Optimierung
- [ ] 0.3 Pre-Flight Performance-Baseline gemessen
- [ ] Task 1: LCP unter 1.8s auf allen Routen
- [ ] Task 2: CLS unter 0.03 auf allen Routen
- [ ] Task 3: INP unter 100ms auf allen Routen
- [ ] Task 4: Rendering-Strategien pro Route optimiert
- [ ] Task 5: JavaScript-Budget und Bundle-Optimierung
- [ ] Task 6: Bild-Pipeline maximiert
- [ ] Task 7: Schriftart-Performance validiert
- [ ] Task 8: Drittanbieter-Skripte isoliert
- [ ] Task 9: Next.js Caching-Schichten konfiguriert
- [ ] Task 10: HTTP-Optimierungen
- [ ] Task 11: Self-Optimizing Loop
```

Schritt 0.3 — Pre-Flight Performance-Baseline:
BEVOR du IRGENDETWAS änderst, messe die aktuelle Performance:

1. Lighthouse-Audit pro Route: Führe `npx lighthouse [URL] --output=json` auf jeder Hauptroute aus. Dokumentiere:
   - Performance-Score, LCP, CLS, INP, FCP, TTFB, TBT, Speed Index
2. Bundle-Analyse: `npx next build` und dokumentiere die Bundle-Größe pro Route aus dem Build-Output
3. Komponentenbaum-Analyse: Kartiere JEDE Client Component ('use client') — diese sind Performance-kritisch
4. Bild-Audit: Finde JEDES Bild. Dokumentiere: Format, Größe, priority-Prop, sizes-Prop, lazy/eager
5. Font-Audit: Wie werden Fonts geladen? next/font? Google Fonts CDN? Wie viele Schnitte?
6. Drittanbieter-Audit: Welche externen Skripte werden geladen? In welcher Reihenfolge?

DOKUMENTIERE ALLES in .ai-architectural-context.md unter:
### ⚡ Performance-Baseline & Optimierungen

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — CORE WEB VITALS ALS UNVERLETZLICHE GESETZE
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: LCP UNTER 1.8 SEKUNDEN

Schritt 1.1 — LCP-Element pro Route identifizieren:
Analysiere jede Route und identifiziere das LCP-Element (typisch: Hero-Bild, Hero-Headline). Dokumentiere als Kommentar in jeder page.tsx: // LCP-Element: [Beschreibung]

Schritt 1.2 — LCP-Optimierung für Bilder:
Falls LCP ein Bild:
- next/image mit priority-Prop (setzt fetchpriority="high", generiert preload)
- sizes-Prop KORREKT: sizes="100vw" für Full-Width, sizes="(max-width: 768px) 100vw, 50vw" für Split
- AVIF zuerst, WebP Fallback: next.config images.formats: ['image/avif', 'image/webp']
- Quellbild max größte Anzeigegröße × 2 (Retina)
- placeholder="blur" mit blurDataURL

Schritt 1.3 — LCP-Optimierung für Text:
Falls LCP Text:
- next/font (self-hosted, kein externer Google-Fonts-Request)
- font-display: swap
- Hero-Headline als Server Component (kein Client-JS blockiert Rendering)
- Kritisches CSS inline (Next.js automatisch für Server Components)

Schritt 1.4 — Server-Rendering-Optimierung:
- Hero-Sektion als Server Component
- Streaming SSR: Hero wird als erstes gestreamt
- Kein useState/useEffect in Hero (macht sie zur Client Component)

Schritt 1.5 — TTFB unter 600ms:
- SSG/ISR für statische Seiten
- Streaming SSR mit Suspense für dynamische Seiten
- Middleware <10ms Ausführungszeit

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: CLS UNTER 0.03

Schritt 2.1 — Bild-Stabilität:
- JEDES next/image hat width+height Props (oder fill mit sizes)
- Dynamische Bilder: Breite/Höhe aus Daten
- fill-Container: position: relative + definierte Höhe/aspect-ratio

Schritt 2.2 — Font-Stabilität:
- next/font mit adjustFontFallback (Standard: true)
- Überprüfe: Font-Wechsel verschiebt Text? → size-adjust, ascent-override anpassen
- Variable Fonts: Ein File für alle Gewichte

Schritt 2.3 — Dynamische Inhalte stabilisieren:
- Client Components mit Datennachladung: Skeleton-Platzhalter in exakter Größe
- loading.tsx: Skeletons in korrekter Größe
- Cookie-Banner: position: fixed (überlagert, verschiebt nicht)
- Lazy-loaded Components: Container mit min-height/aspect-ratio VOR dem Laden

Schritt 2.4 — Kein CLS durch Drittanbieter:
- Analytics/Pixel via next/script strategy="afterInteractive"/"lazyOnload"
- Eingebettete Maps/Embeds: Container mit fester Höhe
- Calendly-Embed: Container mit min-height VOR dem Laden

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: INP UNTER 100 MILLISEKUNDEN

Schritt 3.1 — Event-Handler optimieren:
- onClick mit synchronen Berechnungen: requestAnimationFrame oder setTimeout(fn, 0)
- State-Updates: React.startTransition() für nicht-dringende Updates
- Formular-Validierung: Debounce 200ms
- Filter/Sort auf großen Listen: useDeferredValue() oder Web Worker

Schritt 3.2 — React-Rendering optimieren:
- React.memo() auf häufig re-rendernde Komponenten mit seltenen Prop-Änderungen
- useCallback() für Handler-Props an Kind-Komponenten
- useMemo() für teure Berechnungen
- Virtualisierung für lange Listen (@tanstack/react-virtual)

Schritt 3.3 — Main-Thread nicht blockieren:
- Keine synchrone JSON-Verarbeitung großer Datensätze
- Schwere Operationen in Web Workers
- Kein Layout Thrashing

Schritt 3.4 — Hydration optimieren:
- Server Components senden NULL JavaScript → kein Hydration-Overhead
- Client Components nur wo Interaktivität nötig
- Partial Prerendering (Next.js 14+): Statische Shell sofort, dynamische Teile streamen

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — NEXT.JS-SPEZIFISCHE PERFORMANCE-FEATURES
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: RENDERING-STRATEGIEN PRO ROUTE

Schritt 4.1 — SSG wo möglich:
- Startseite: SSG mit revalidate: 3600
- Service-Seiten: SSG (statisch)
- Impressum, Datenschutz: SSG
- Kontakt: SSG (Formspree-Formular funktioniert clientseitig)

Schritt 4.2 — ISR für semi-dynamische Inhalte:
- Blog-Übersicht: revalidate: 3600
- Blog-Posts: revalidate: 86400
- FAQ, Testimonials: revalidate: 86400

Schritt 4.3 — Dynamic Rendering nur wenn nötig:
- Suchergebnis-Seiten mit searchParams
- Minimiere dynamische Routen

Schritt 4.4 — generateStaticParams:
Für alle [slug]-Routen: generateStaticParams() exportieren.

Schritt 4.5 — Streaming und Suspense:
- Hero sofort gestreamt
- Below-fold über Suspense-Boundaries
- loading.tsx mit Skeletons pro Route-Segment
- Priorität: Hero → Trust-Bar → Problem → Lösung → Rest

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: JAVASCRIPT-BUDGET UND BUNDLE-OPTIMIERUNG

Schritt 5.1 — Bundle-Analyse:
@next/bundle-analyzer installieren und konfigurieren. Ziel: First-Load JS pro Route <150KB (komprimiert).

Schritt 5.2 — Tree-Shaking verifizieren:
- Named Imports: import { motion } from 'framer-motion'
- Barrel-Files vermeiden: Direkte Pfade
- lodash: import debounce from 'lodash/debounce'
- Icons: Einzelne Imports

Schritt 5.3 — Dynamic Imports:
next/dynamic für Komponenten außerhalb des initialen Viewports:
- Karussells, Maps, Video-Player, Konfetti-Animation, Calendly-Widget
- Alle mit loading: () => <Skeleton /> Fallback

Schritt 5.4 — Server Components maximieren:
- Layouts: Server Components
- Statische Sektionen: Server Components
- Nur interaktive Widgets: Client Components
- Regel: Default = Server Component. Nur 'use client' wenn useState/useEffect/onClick nötig.

Schritt 5.5 — Framer Motion optimieren (falls vorhanden):
- LazyMotion mit domAnimation
- CSS-only für einfache Transitions wo möglich
- Dynamic Import für Scroll-Animationen

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: BILD-PIPELINE MAXIMIEREN

Schritt 6.1 — next/image Konfiguration in next.config:
- images.formats: ['image/avif', 'image/webp']
- images.deviceSizes: [640, 960, 1280, 1920, 2560]
- images.imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
- images.minimumCacheTTL: 31536000

Schritt 6.2 — Bild-Prioritäten:
- Hero: priority={true}
- Above-fold: priority={true}
- Below-fold: loading="lazy" (Standard)
- Karussell: Nur erstes Bild priority

Schritt 6.3 — Responsive Sizing:
KORREKTE sizes für jeden Kontext (Full-Width, Split, Card-Grid, Avatar, Thumbnail).

Schritt 6.4 — Blur-Platzhalter:
- Lokale Bilder: placeholder="blur"
- Remote Bilder: blurDataURL manuell

Schritt 6.5 — SVG-Optimierung:
- Icons inline via @svgr/webpack
- SVGO für Metadaten-Entfernung
- Komplexe Illustrationen über next/image

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: SCHRIFTART-PERFORMANCE

Schritt 7.1 — next/font Validierung:
- Self-hosted, kein externer Google-Fonts-CDN-Request
- Max 4 Schnitte (Regular, Semibold, Bold, optional Italic)
- WOFF2-Format
- Subsets: 'latin', 'latin-ext'
- display: 'swap', adjustFontFallback: true

Schritt 7.2 — Variable Fonts:
Falls verfügbar: Ein File für alle Gewichte. weight: '400 800'.

Schritt 7.3 — Font-Loading-Wasserfall vermeiden:
- next/font generiert preload automatisch
- Keine @import für Fonts in CSS
- Keine Font-Loading via JavaScript

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: DRITTANBIETER-SKRIPTE ISOLIEREN

WICHTIG: Die einzigen erlaubten Drittanbieter sind Formspree (API-Call, kein Script) und Calendly (Embed-Script).

Schritt 8.1 — Calendly-Script optimieren:
- Lade Calendly-Widget per next/dynamic (lazy, erst wenn im Viewport oder bei Klick)
- Container mit min-height VOR dem Laden (kein CLS)
- strategy="lazyOnload" falls als next/script eingebunden

Schritt 8.2 — Cookie-Consent (falls vorhanden):
- Lightweight eigene Implementierung, KEINE externe Consent-SaaS
- strategy="afterInteractive" falls als Script

Schritt 8.3 — Performance-Budget:
- Gesamte Drittanbieter-JS: <100KB (komprimiert)
- Kein einzelnes Script >50KB
- Drittanbieter: kein CLS, kein INP-Impact

NACH TASK 8: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — CACHING UND NETZWERK-OPTIMIERUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: NEXT.JS CACHING-SCHICHTEN

Schritt 9.1 — Full Route Cache:
- SSG/ISR Seiten als HTML + RSC-Payload gecached
- On-Demand-Revalidation via revalidatePath()/revalidateTag()

Schritt 9.2 — Data Cache:
- fetch() in Server Components automatisch gecached
- Cache-Dauer pro Abfrage konfigurieren
- Tags für granulare Revalidation

Schritt 9.3 — Router Cache (Client):
- Besuchte Routen im Browser gecached
- <Link> prefetcht beim Hover

Schritt 9.4 — Statische Assets:
- Cache-Control: public, max-age=31536000, immutable
- Content-Hashes an Dateinamen

NACH TASK 9: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 10: HTTP-OPTIMIERUNGEN

Schritt 10.1 — Komprimierung: Brotli verifizieren (Content-Encoding: br).
Schritt 10.2 — HTTP/2+: Alle Ressourcen über eine Domain.
Schritt 10.3 — Resource Hints: preconnect/dns-prefetch für kritische Domains.
Schritt 10.4 — Prefetching: <Link prefetch={true}> für wichtige Routen, prefetch={false} für unwichtige.

NACH TASK 10: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 6 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 11: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 11.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### ⚡ Performance-Baseline & Optimierungen:
- Performance-Scores VORHER und NACHHER pro Route
- LCP, CLS, INP Werte pro Route
- Rendering-Strategie pro Route (SSG/ISR/Dynamic)
- Bundle-Größe pro Route
- Bild-Optimierungen (Format, Sizing, Priority)
- Font-Konfiguration
- Caching-Strategie

Schritt 11.2 — .upgrade-state.md finalisieren:
Alle Tasks [x]. Offene Punkte notieren.

Schritt 11.3 — Handoff an Phase 7:
```
## Handoff → Phase 7 (Adaptives UI)
- Performance-Baseline für adaptive Entscheidungen: [Werte]
- Rendering-Strategien die bei adaptiver Logik berücksichtigt werden müssen: [Liste]
- Client Components die für Device-Adaption relevant sind: [Liste]
- Bundle-Budget-Restkapazität: [Wert]
```

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 6
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ LCP <1.8s Desktop, <2.5s Mobile auf ALLEN Routen
□ CLS <0.03 auf ALLEN Routen
□ INP <100ms auf ALLEN Routen
□ TTFB <600ms auf ALLEN Routen
□ First-Load JS pro Route <150KB
□ Jedes next/image hat korrekte priority/sizes Props
□ Fonts via next/font self-hosted, max 4 Schnitte
□ Calendly lazy-loaded, kein CLS
□ Rendering-Strategie pro Route dokumentiert
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 7
