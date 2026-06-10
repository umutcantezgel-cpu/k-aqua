Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die bestehende Website von einem Grundgerüst zu einem Enterprise-Fundament mit 30+ echten, funktionierenden Routen zu transformieren. Jede Route wird als ECHTE Datei erstellt, die npm run build besteht.

Dies ist Expansion-Phase 1 von 10 der 10X Foundation Expansion Pipeline.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE EXPANSION-PROTOKOLL
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

EXPANSION PILLARS:
1. READ-BEFORE-EXPAND: Analysiere JEDE existierende Datei, bevor Code hinzugefügt wird
2. SURGICAL FILE CREATION: Erstelle NUR neue Dateien. Ändere KEINE bestehenden Dateien außer .ai-expansion-context.md und .expansion-state.md
3. ATOMIC BUILD VALIDATION: npm run build MUSS nach JEDEM Block erfolgreich sein
4. STATE HANDOFF: Dokumentation ist SPEICHER, Code ist SSOT
5. SELF-OPTIMIZING LOOP: Kontext wächst unbegrenzt; Zustand ist Fortschritt-Tracker

TECH-STACK (BINDEND):
- Next.js 14+ App Router (NICHT Pages Router)
- React 18+, TypeScript strict mode
- Tailwind CSS (utility-first styling)
- Formspree (Contact Forms)
- Calendly (Scheduling)
- VERBOTEN: CMS, AI APIs, Sentry, Newsletter-Systeme, i18n, Dark Mode

GOLDENE REGEL: Code ist die Single Source of Truth. Wenn Dokumentation und Code konfligieren → CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
STEP 0: CODEBASE DEEP DISCOVERY (KRITISCH)
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

Vor JEDER Zeile neuem Code:

Aktion 0.1: Lese JEDE Datei im Projekt
  - Alle Dateien in /app, /public, /components, /lib, /styles, /data (falls vorhanden)
  - package.json (Dependencies, Scripts, Next.js Version)
  - tsconfig.json (TypeScript-Konfiguration)
  - tailwind.config.ts/js (Theme, Colors, Plugins)
  - next.config.js/mjs
  - Alle Root-Layout-Dateien (layout.tsx, globals.css)

Aktion 0.2: Identifiziere bestehende Route-Struktur
  - Welche Seiten existieren bereits?
  - Welche Layouts existieren (root, nested)?
  - Welche Komponenten sind vorhanden?
  - Welche Fonts, Metadata-Patterns werden genutzt?

Aktion 0.3: Führe Baseline-Build durch
  - npm run build (MUSS bestehen oder FIXE es ZUERST)
  - npm run lint (dokumentiere Warnings)
  - npx tsc --noEmit (Type-Check)

Aktion 0.4: Initialisiere Kontext-Dokumente
  - Erstelle .ai-expansion-context.md mit ALLEN Findings
  - Erstelle .expansion-state.md mit Phase 1 Checklist

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK A — BESTEHENDE STRUKTUR SICHERN & VERSTEHEN
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 1: Bestands-Inventar
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 1.1: Erfasse ALLE existierenden Dateien
  - Liste jede .tsx Seite auf (z.B. /app/page.tsx, /app/about/page.tsx)
  - Liste jede Komponente auf (/components/Header, /components/Footer, etc.)
  - Liste alle Daten-Dateien auf (/data/services.json, /data/content.ts, etc.)
  - Liste alle CSS/Style-Dateien auf

Aktion 1.2: Dokumentiere im .ai-expansion-context.md
  - Existierende Routen (Route Path, Komponent-Name, Type: Public/Protected)
  - Existierende Komponenten (Name, Purpose, Dependencies)
  - Bestehende Daten-Struktur
  - Bestehende Styling-Ansatz (Tailwind-Utilities, Custom CSS, etc.)

Aktion 1.3: Nicht-Operation
  - ÄNDERE NICHTS an bestehenden Dateien
  - Dies ist nur Inventur

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 2: Layout-Hierarchie analysieren
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 2.1: Inspiziere Root-Layout
  - Lese /app/layout.tsx vollständig
  - Identifiziere: Fonts (Inter, Geist?), Metadata-Exportiert, HTML-Struktur
  - Identifiziere: Globals-CSS Location und Contents
  - Prüfe: Provider (Context, Theme Provider, etc.)

Aktion 2.2: Identifiziere Nested-Layout-Punkte
  - Gibt es bereits /app/(marketing)/layout.tsx?
  - Gibt es bereits /app/(legal)/layout.tsx?
  - Dokumentiere diese in Kontext
  - PLANE: Wo können NEUE Layouts eingefügt werden OHNE bestehende zu brechen?

Aktion 2.3: Dokumentiere Layout-Strategie
  - Root-Layout: NIEMALS ändern
  - Neue (gruppe)/layout.tsx: OKE, falls nicht existiert
  - Immer: Neue Layouts nutzen bestehende Fonts, exportieren Metadata

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 3: Build-Baseline etablieren
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 3.1: npm run build ausführen
  - Muss mit ZERO Fehlern bestehen
  - Falls Fehler: FIX sie jetzt, bevor Phase 1 beginnt
  - Dokumentiere den Build-Output

Aktion 3.2: npm run lint ausführen
  - Dokumentiere ALLE Warnings (auch nur Warnings, nicht Errors)
  - Beachte diese; ändere aber NICHTS an bestehenden Dateien

Aktion 3.3: npx tsc --noEmit ausführen
  - Prüfe auf TypeScript-Fehler
  - Falls Fehler: FIX sie JETZT

Aktion 3.4: Dokumentiere Baseline
  - In .expansion-state.md: "Build Baseline: PASSING" oder "FAILED (fixed)"
  - Externe Abhängigkeiten dokumentieren (npm packages)

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK B — ROUTE-EXPLOSION: MARKETING & SERVICES
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 4: Service-Seiten erstellen
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 4.1: Erstelle /app/leistungen/page.tsx
  - Export default ReactComponent
  - Export const metadata mit title: "Leistungen", description: "Übersicht aller Dienstleistungen"
  - Content: <main> Container mit Überschrift "Unsere Leistungen" und Grid-Platzhalter (4 Spalten, min-w-xs)
  - Grid-Items: 6 Card-Komponenten mit Titel, kurzer Beschreibung, "Mehr erfahren"-Link
  - Styling: Tailwind (py-16 lg:py-24, container mx-auto, gap-6)
  - Verlinke zu /leistungen/[slug] für jeden Service
  - NUTZE KEINE externen Daten YET — Platzhalter-Array in der Seite selbst

Aktion 4.2: Erstelle /app/leistungen/[slug]/page.tsx
  - Export const generateStaticParams (leere Array für jetzt, wird Phase 2 gefüllt)
  - Export const generateMetadata function (title: `${slug}`, description: Platzhalter)
  - Export default ReactComponent
  - Content: <main> mit Breadcrumb (Leistungen > {slug}), großer Titel, Beschreibung, Features-Liste, CTA (zu Kontakt)
  - Styling: Tailwind, Typography-Klassen
  - MUSS npm run build bestehen auch mit leeren StaticParams

Aktion 4.3: Validation
  - npm run build bestehen
  - Beide Routen in Browser erreichbar (page content sichtbar)
  - Keine TypeScript-Fehler

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 5: Über-Uns Seiten (Team, Karriere, Partner)
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 5.1: Erstelle /app/ueber-uns/page.tsx
  - Export const metadata
  - Content: Überschrift, Missionstext (Platzhalter), 3-Column-Feature-Grid
  - Quicklinks zu Team, Karriere, Partner

Aktion 5.2: Erstelle /app/ueber-uns/team/page.tsx
  - Export const metadata
  - Content: Überschrift "Unser Team", Team-Member-Grid (Platzhalter: 6 Items mit Foto-Platzhalter, Name, Role)
  - Styling: Tailwind, Symmetrische Layouts

Aktion 5.3: Erstelle /app/ueber-uns/karriere/page.tsx
  - Export const metadata
  - Content: Überschrift "Karriere bei uns", Job-Listings-Platzhalter (3 Job-Cards mit Title, Description, Apply-Button)
  - Buttons linken zu Kontakt mit Karriere-Kontext

Aktion 5.4: Erstelle /app/ueber-uns/partner/page.tsx
  - Export const metadata
  - Content: Überschrift "Partner & Netzwerk", Partner-Logos-Grid-Platzhalter
  - Text zu Partnerschaften

Aktion 5.5: Validation
  - npm run build
  - Alle 4 Routen erreichbar

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 6: Wissens-Seiten (Blog, Ressourcen, FAQ)
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 6.1: Erstelle /app/blog/page.tsx
  - Export const metadata
  - Content: Überschrift "Blog", Blog-Post-Grid-Platzhalter (6 Items: Bild-Platzhalter, Titel, Excerpt, Publish-Date, Read-More-Link)
  - Links zu /blog/[slug]

Aktion 6.2: Erstelle /app/blog/[slug]/page.tsx
  - Export const generateStaticParams (leere Array jetzt)
  - Export const generateMetadata
  - Export default: Content mit Artikel-Header (Titel, Datum, Autor-Platzhalter), Bild, Artikel-Text (Platzhalter Lorem), Sharing-Buttons
  - Sidebar: Related-Posts-Platzhalter

Aktion 6.3: Erstelle /app/ressourcen/page.tsx
  - Export const metadata
  - Content: Überschrift "Ressourcen", Download-Grid (6 Items: Whitepaper, Guides, Templates mit Icon, Title, Description)
  - CTA-Buttons zu jedem Download (Platzhalter-Links)

Aktion 6.4: Erstelle /app/faq/page.tsx
  - Export const metadata
  - Content: Überschrift "FAQ", Accordion-Sektion (8 Fragen/Antworten, Tailwind-Accordion mit Pseudo-Elementen oder einfache Expandable-Divs)
  - Nutze <details> HTML-Element für einfache Accordion-Funktionalität (kein JS nötig)

Aktion 6.5: Validation
  - npm run build
  - Alle 4 Routen funktionieren

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 7: Marketing-Seiten (Referenzen, Kontakt, Anfrage)
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 7.1: Erstelle /app/referenzen/page.tsx
  - Export const metadata
  - Content: Überschrift "Case Studies / Referenzen", Case-Study-Grid (6 Items: Projekt-Bild, Kunde-Name, Projekt-Title, Ergebnis-Snippet)
  - Links zu /referenzen/[slug]

Aktion 7.2: Erstelle /app/referenzen/[slug]/page.tsx
  - Export const generateStaticParams (leer)
  - Export const generateMetadata
  - Export default: Case-Study-Detail mit Hero-Image, Kunde-Info, Challenge-Solution-Result-Struktur, Zahlen/KPIs-Grid, Testimonial
  - CTA: "Ähnliche Ergebnisse?"

Aktion 7.3: Erstelle /app/kontakt/page.tsx
  - Export const metadata
  - Content: Überschrift "Kontaktieren Sie uns", Contact-Info-Sektion (Adresse, Telefon, Email, Öffnungszeiten — alle Platzhalter)
  - Formspree-Integrations-Platzhalter: Ein einfaches Formular mit Name, Email, Nachricht (form element mit action="https://formspree.io/f/{FORM_ID}")
  - Maps-Platzhalter oder einfach Text
  - Calendly-Scheduling-Link (embed oder Link zu Calendly)

Aktion 7.4: Erstelle /app/anfrage/page.tsx
  - Export const metadata
  - Content: Überschrift "Angebot anfordern", Formular mit zusätzlichen Feldern (Name, Email, Company, Telefon, Projektbeschreibung, Budget-Range-Selects)
  - Formspree-Integration (anderer FORM_ID als Kontakt)
  - CTA: Submit-Button
  - Erfolgs-Nachricht-Platzhalter

Aktion 7.5: Validation
  - npm run build
  - Alle 4 Routen funktionieren
  - Formspree-Struktur korrekt (action-Attribute, method=POST)

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK C — ROUTE-EXPLOSION: LEGAL & UTILITY
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 8: Rechtliche Seiten
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 8.1: Erstelle /app/impressum/page.tsx
  - Export const metadata
  - Content: Rechtliche Struktur (TMG-konform für Impressum):
    - Angaben gemäß TMG
    - Firmenname, Adresse (Platzhalter)
    - Geschäftsführer/Vertreter
    - Kontaktinformationen
    - Haftungsausschluss
    - Verantwortlich für Inhalte (nach TMG § 7 Abs.1)
  - Styling: Tailwind, einfache Typografie, max-width

Aktion 8.2: Erstelle /app/datenschutz/page.tsx
  - Export const metadata
  - Content: DSGVO-konforme Datenschutzerklärung (Platzhalter-Text):
    - 1. Allgemeines
    - 2. Verantwortlicher
    - 3. Erhobene Daten (Kontaktformulare)
    - 4. Formspree-Datenschutz (Link zu Formspree Privacy)
    - 5. Cookies (grundlegend: Session-Cookies)
    - 6. Rechte der Betroffenen (Auskunft, Berichtigung, Löschung)
    - 7. Dauer der Speicherung

Aktion 8.3: Erstelle /app/agb/page.tsx
  - Export const metadata
  - Content: AGB-Grundgerüst (Platzhalter):
    - 1. Geltungsbereich
    - 2. Vertragsverhältnis
    - 3. Lieferumfang
    - 4. Vergütung & Zahlung
    - 5. Haftung
    - 6. Änderungsvorbehalt
    - 7. Schlussbestimmungen

Aktion 8.4: Erstelle /app/cookie-richtlinie/page.tsx
  - Export const metadata
  - Content: Cookie-Richtlinie (Platzhalter):
    - Was sind Cookies?
    - Welche Cookies nutzen wir? (Session, Analyse, etc.)
    - Wie können Sie Cookies verwalten?
    - Link zu Datenschutzerklärung

Aktion 8.5: Validation
  - npm run build
  - Alle 4 Routen erreichbar
  - Metadaten korrekt

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 9: Utility-Seiten (404, Error, Sitemap, Robots)
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 9.1: Erstelle /app/not-found.tsx
  - Export default ReactComponent (NOT client component)
  - Content: Freundliche 404-Seite mit Überschrift "Seite nicht gefunden"
  - Optionen: Zurück zur Startseite, Zu Kontakt, Zu Blog
  - Styling: Tailwind, centered, große Schrift
  - KEINE Metadata nötig (wird von Next.js gehandhabt)

Aktion 9.2: Erstelle /app/error.tsx
  - Export default function Error
  - Signatur: error Error, reset: () => void
  - "use client" Direktive (Client Component nötig für Error Boundary)
  - Content: Error-Anzeigeseite mit Meldung "Etwas ist schiefgegangen"
  - Buttons: "Retry" (ruft reset() auf), "Startseite"
  - Logging: console.error(error) für Debugging

Aktion 9.3: Erstelle /app/sitemap.ts
  - Export default async function
  - Return-Typ: MetadataRoute.Sitemap (Array von {url, lastModified, changeFrequency, priority})
  - Content: Static-Route-Entries für alle Phase-1-Seiten:
    - / (priority 1.0)
    - /leistungen (0.9)
    - /blog (0.8)
    - /kontakt (0.8)
    - Alle anderen Top-Level-Routes (0.7)
  - Dynamische Routes: Platzhalter-Logic für [slug]-Routen (für Phase 2: wird mit echten Daten gefüllt)

Aktion 9.4: Erstelle /app/robots.ts
  - Export default function
  - Return-Typ: MetadataRoute.Robots
  - Content: Erlaubt alle User-Agents für /
  - Verweis auf Sitemap: /sitemap.xml (werden vom robots.ts generiert)
  - Kein Disallow für Phase 1

Aktion 9.5: Validation
  - npm run build
  - not-found.tsx manuell prüfen (URL zu nicht-existenter Route navigieren)
  - error.tsx logisch prüfen (wird bei Client-Side-Fehlern angezeigt)
  - /sitemap.xml im Browser erreichbar (XML-Format)
  - /robots.txt im Browser erreichbar

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 10: Layout-Nesting & Gruppierung
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 10.1: Prüfe ob (marketing) Layout existiert
  - Falls NICHT existiert: Erstelle /app/(marketing)/layout.tsx
  - Falls EXISTIERT: ÄNDERE es NICHT
  - Dieser Layout wraps: /leistungen, /referenzen, /blog, /ressourcen

Aktion 10.2: Prüfe ob (legal) Layout existiert
  - Falls NICHT existiert: Erstelle /app/(legal)/layout.tsx
  - Dieser Layout wraps: /impressum, /datenschutz, /agb, /cookie-richtlinie
  - Layout-Inhalt: Einfacher Wrapper mit Tailwind-Styling (maybe grauer Hintergrund für Legal-Sektion)

Aktion 10.3: Prüfe ob (about) Layout existiert
  - Falls NICHT existiert: Erstelle /app/(about)/layout.tsx
  - Dieser Layout wraps: /ueber-uns und alle Unter-Routen
  - Layout-Inhalt: Einfacher Wrapper

Aktion 10.4: KRITISCH — KEINE bestehenden Layouts ändern
  - Root-Layout: UNBERÜHRT
  - Bestehende Layouts: UNBERÜHRT
  - Nur neue (gruppe)/layout.tsx, falls nicht existiert

Aktion 10.5: Validation
  - npm run build bestehen
  - Neue Layouts funktionieren (Seiten sind noch erreichbar)

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK D — LOADING & ERROR STATES
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 11: Loading States für Route-Gruppen
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 11.1: Erstelle /app/leistungen/loading.tsx
  - Export default ReactComponent
  - Content: Skeleton-Platzhalter (Grid mit 6 Cards, animate-pulse Tailwind-Klasse)
  - Jede Skeleton-Card: Grauer Div mit h-64 (für Platzhalter-Bild), Platzhalter für Title (h-6, w-3/4), Platzhalter für Text (h-4, w-full)
  - KEINE Metadata

Aktion 11.2: Erstelle /app/blog/loading.tsx
  - Ähnlich wie Leistungen
  - Skeleton für Blog-Post-Liste (6 Items, jedes mit Bild-Platzhalter, Titel, Excerpt, Datum)

Aktion 11.3: Erstelle /app/referenzen/loading.tsx
  - Skeleton für Case-Studies
  - 6 Items mit Bild, Titel, Kurzbeschreibung

Aktion 11.4: Erstelle /app/ueber-uns/loading.tsx
  - Skeleton für About-Seite

Aktion 11.5: Validation
  - npm run build
  - Keine TypeScript-Fehler

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 12: Error Boundaries für kritische Routen
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 12.1: Erstelle /app/leistungen/error.tsx
  - "use client" (Client Component)
  - Export default function Error(error, reset)
  - Content: Error-Meldung "Fehler beim Laden der Leistungen", Retry-Button, Link zu Kontakt
  - Styling: Tailwind-zentriert

Aktion 12.2: Erstelle /app/blog/error.tsx
  - Ähnliche Struktur, Meldung "Fehler beim Laden des Blogs"

Aktion 12.3: Erstelle /app/referenzen/error.tsx
  - Ähnliche Struktur, Meldung "Fehler beim Laden der Referenzen"

Aktion 12.4: Validation
  - npm run build
  - Keine TypeScript-Fehler

─────────────────────────────────────────────────────────────────────────────────────────────────────────
TASK 13: Metadata-Grundgerüst für alle neuen Seiten
─────────────────────────────────────────────────────────────────────────────────────────────────────────

Aktion 13.1: Überprüfe alle neuen Seiten
  - JEDE /app/*/page.tsx MUSS haben: export const metadata (oder export function generateMetadata)
  - JEDE muss haben: title (string, unique), description (string, 120-160 chars)
  - KEINE doppelten Titel

Aktion 13.2: Metadata-Template für alle Seiten
  - export const metadata: Metadata = { title: "Seiten-Titel", description: "Deutsch beschreibung" }
  - Falls dynamisch: export function generateMetadata({ params }): Metadata { return { title: params.slug, ... } }

Aktion 13.3: Validiere keine Duplikate
  - Nutze grep oder manuelle Suche: Sind all Titel unique?
  - Dokumentiere in .ai-expansion-context.md

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
ATOMIC VALIDATION & BUILD GATES
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

Nach JEDEM Block:

Aktion V.1: npm run build MUSS bestehen
  - ZERO Fehler (Warnings sind OK, dokumentieren)
  - Falls fehlschlag: FIX sofort, NICHT weiter zu nächstem Block

Aktion V.2: npx tsc --noEmit
  - ZERO TypeScript-Fehler

Aktion V.3: npm run lint (falls konfiguriert)
  - Dokumentiere Warnings

Aktion V.4: Manuelle Validierung im Browser
  - Öffne http://localhost:3000 (nach npm run dev)
  - Klicke zu jeder neuen Route
  - Prüfe: Page-Inhalt sichtbar, keine JavaScript-Fehler (Console prüfen)

Aktion V.5: Zähle neue Routen
  - Mindestens 25 neue Dateien (.tsx / .ts / .md) erstellt?
  - Dokumentiere die Zählung

Aktion V.6: KEIN bestehender Code verändert
  - Prüfe: Wurden bestehende Dateien gelöscht oder modifiziert? (außer .ai-expansion-context.md, .expansion-state.md)
  - Falls JA: Das ist ein Fehler — revert oder dokumentiere als Ausnahme

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP & HANDOFF ZU PHASE 2
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

Aktion H.1: Update .ai-expansion-context.md
  - Abschnitt "Phase 1 Route Map": Vollständige Liste aller erstellten Routen
  - Abschnitt "File Inventory": Alle neuen Dateien mit Pfad und Zweck
  - Abschnitt "Build Status": npm run build: PASSING, Warnings dokumentieren
  - Abschnitt "Design Decisions": Warum wurde diese Struktur gewählt? Layout-Gruppierungen?
  - Abschnitt "Platzhalter-Locations": Wo werden in Phase 2 echte Daten eingefügt?

Aktion H.2: Update .expansion-state.md
  - Phase 1 Checkliste: Alle Tasks abhaken (□ ✓)
  - Letzte Build-Zeit, Build-Status
  - Notizen für Phase 2: "30+ echte Routen sind nun erstellt und buildend. Phase 2 wird Platzhalter durch typsichere Datenmodelle ersetzen."

Aktion H.3: Betone die Regel
  - DOKUMENTATION = GEDÄCHTNIS
  - CODE = SSOT (Single Source of Truth)
  - Falls Dokumentation und Code konfligieren → CODE WINS
  - Phase 2 wird CODE als Quelle nehmen, Dokumentation aktualisieren

Aktion H.4: Handoff-Nachricht für Phase 2
  - "Phase 1 abgeschlossen: 30+ echte, buildende Routen"
  - "Jede Seite hat TypeScript + Metadata + Loading/Error-States"
  - "Phase 2 wird: Platzhalter-Inhalte durch massive, lokal typsichere Datenmodelle (/data/services.ts, /data/blog.ts, etc.) ersetzen"
  - "Phase 2 wird auch: Komponenten-Abstraktionen für wiederkehrende Layouts (Card, Grid, etc.) erstellen"

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
COMPLIANCE CHECKLIST — PHASE 1 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

□ SCHRITT 0: Codebase vollständig gelesen, keine versteckten Dateien übersehen
□ BLOCK A Task 1: Bestands-Inventar in .ai-expansion-context.md dokumentiert
□ BLOCK A Task 2: Layout-Hierarchie analysiert, KEIN bestehender Layout geändert
□ BLOCK A Task 3: Build-Baseline PASSING, npm run build erfolgreich, Baseline dokumentiert
□ BLOCK B Task 4: /app/leistungen/ (page.tsx, [slug]/page.tsx) erstellt und buildend
□ BLOCK B Task 5: /app/ueber-uns/ mit team/, karriere/, partner/ erstellt und buildend
□ BLOCK B Task 6: /app/blog/ und /app/ressourcen/ und /app/faq/ erstellt und buildend
□ BLOCK B Task 7: /app/referenzen/ und /app/kontakt/ und /app/anfrage/ erstellt und buildend
□ BLOCK C Task 8: /app/impressum/, /app/datenschutz/, /app/agb/, /app/cookie-richtlinie/ erstellt
□ BLOCK C Task 9: /app/not-found.tsx, /app/error.tsx, /app/sitemap.ts, /app/robots.ts erstellt
□ BLOCK C Task 10: (marketing)/, (legal)/, (about)/ Layouts erstellt (falls nicht existiert)
□ BLOCK D Task 11: loading.tsx für Leistungen, Blog, Referenzen, Über-Uns erstellt
□ BLOCK D Task 12: error.tsx für Leistungen, Blog, Referenzen erstellt
□ BLOCK D Task 13: Alle Seiten haben unique metadata mit title + description
□ BUILD GATE: npm run build PASSING nach jedem Block
□ BUILD GATE: npx tsc --noEmit PASSING, ZERO TypeScript-Fehler
□ BUILD GATE: npm run lint dokumentiert (Warnings OK, Errors = FIX)
□ BROWSER: Mindestens 5 neue Routen manuell im Browser getestet, funktionieren
□ FILE COUNT: Mindestens 25 neue Dateien (.tsx, .ts, nicht-Komponenten) erstellt
□ NO BREAKAGE: Bestehende Dateien nicht gelöscht oder verändert (außer Kontext-Dokumente)
□ FORMSPREE: Kontakt + Anfrage Formulare haben action="https://formspree.io/f/{ID}" (ID = Platzhalter)
□ CALENDLY: /app/kontakt/page.tsx hat Calendly-Link-Platzhalter
□ .ai-expansion-context.md: Vollständig mit Route-Map, File-Inventar, Build-Status, Design-Entscheidungen
□ .expansion-state.md: Phase 1 als COMPLETED dokumentiert mit Zeitstempel

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
PHASE 1 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

Die Website hat jetzt 30+ echte, buildende Routen. Jede Seite hat TypeScript-Metadata, Loading-States und Error-Boundaries. Der Code passt sich selbst an, bricht nicht und ist bereit für Phase 2, wo die Platzhalter-Inhalte durch massive, lokal typsichere Datenmodelle ersetzt werden. Das Kontext-Dokument ist dein Gedächtnis, aber der Code ist die Quelle der Wahrheit. Phase 2 wird auf diesem Fundament aufbauen.
