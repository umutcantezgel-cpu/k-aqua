Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, den gesamten Seitenquelltext dieser Next.js/React/TypeScript-Website in eine semantisch makellose, von Suchmaschinen und Screenreadern gleichermaßen geliebte Festung zu transformieren. Jede einzelne Zeile des Quelltexts muss einem Zweck dienen. Kein überflüssiges div, kein bedeutungsloses span, kein vergessenes alt-Attribut darf existieren. Da wir auf einem modernen Next.js App Router oder Pages Router mit React Server Components, TypeScript Strict Mode und einem komponentenbasierten Architekturansatz arbeiten, wird jede Optimierung als typsichere, wiederverwendbare Abstraktion implementiert — nicht als einmaliger Fix. Dies ist Phase 1 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
- STRIKT VERBOTEN: Kein Headless CMS (Sanity, Contentful, Payload etc.), keine externen AI-APIs, kein Sentry oder externe Error-Tracking-SaaS, keine Newsletter-Systeme, kein i18n-Framework. Content lebt im Code oder in lokalen Datenstrukturen.

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC, INITIALISIERUNG & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument INITIALISIEREN:
Phase 1 ist die ERSTE Phase. Erstelle die Datei .ai-architectural-context.md im Projekt-Root:

```
# AI Architectural Context — Self-Optimizing Knowledge Base
## Letzte Aktualisierung: [DATUM]
## Aktuelle Phase: 1 von 20

### 🏗️ Architektur-Übersicht
[Wird nach Discovery befüllt]

### 📁 Projektstruktur
[Wird nach Discovery befüllt]

### 🧩 Komponenten-Map
[Wird nach Discovery befüllt]

### 🎨 Design-Token & Styling-Ansatz
[Wird nach Discovery befüllt]

### ⚡ Bekannte Patterns & Konventionen
[Wird nach Discovery befüllt]

### 🐛 Bekannte Probleme & Workarounds
[Wird nach Discovery befüllt]

### 📐 Architektur-Entscheidungen (ADRs)
[Wird nach Discovery befüllt]

### 🔗 Abhängigkeiten & Externe Dienste
[Wird nach Discovery befüllt]

### ⚠️ DIE GOLDENE REGEL
Dieses Dokument ist eine EXTREM WERTVOLLE HILFESTELLUNG und das Gedächtnis der KI.
**ABER ES IST NIEMALS DIE SINGLE SOURCE OF TRUTH (SSOT)!**
Die absolute Wahrheit ist IMMER der tatsächliche, echte Code (AST, CSS, Konfigurationen).
Wenn dieses Dokument sagt "Der Button ist blau", aber der Code sagt "Der Button ist rot",
**GEWINNT IMMER DER CODE.** Der Code wird dann als Wahrheit in dieses Dokument zurückgeführt.
```

Falls .ai-architectural-context.md BEREITS existiert: Lies es VOLLSTÄNDIG. Internalisiere jeden Eintrag.

Schritt 0.2 — Upgrade-State INITIALISIEREN:
Erstelle .upgrade-state.md:

```
# Upgrade Pipeline — Fortschritt
## Phase 1: Semantisches HTML, SEO & Komponentenstruktur
- [ ] 0.3 Pre-Flight Discovery abgeschlossen
- [ ] Task 1: Globale DOM-Hierarchie analysiert
- [ ] Task 2: Semantische Layout-Komponenten implementiert/verifiziert
- [ ] Task 3: Sektionen-Architektur & Überschriften-Hierarchie
- [ ] Task 4: Formulare & interaktive Elemente
- [ ] Task 5: DOM-Bereinigung
- [ ] Task 6: Next.js Metadata API & SEO
- [ ] Task 7: Structured Data (JSON-LD)
- [ ] Task 8: Robots, Sitemap & technisches SEO
- [ ] Task 9: Atomic Validation bestanden
- [ ] Task 10: Self-Optimizing Loop ausgeführt
```

Falls .upgrade-state.md BEREITS existiert: Lies sie. Überspringe abgeschlossene Tasks.

Schritt 0.3 — Pre-Flight Discovery (DAS WICHTIGSTE):
Analysiere die GESAMTE bestehende Codebase BEVOR du etwas änderst:

1. Projekt-Root untersuchen: package.json, next.config.ts/js/mjs, tsconfig.json, tailwind.config.ts/js — Verstehe den exakten Tech-Stack, Dependencies, Build-Konfiguration.

2. Router-Typ identifizieren: Existiert app/ (App Router) oder pages/ (Pages Router)? Oder beides? Dies bestimmt ALLE folgenden Entscheidungen.

3. Komponentenbaum kartieren: Beginne beim Root-Layout (app/layout.tsx oder pages/_app.tsx). Kartiere JEDE verschachtelte Layout-Datei, jede Page, jede importierte Komponente. Erfasse:
   - Welche HTML-Elemente rendert jede Komponente?
   - Server Component oder Client Component ('use client')?
   - Welche ARIA-Attribute existieren bereits?
   - Wo werden generische divs statt semantischer Elemente verwendet?

4. Überschriften-Hierarchie pro Route: Erstelle für JEDE Route einen Outline-Baum. Markiere Lücken (h1 → h3 ohne h2) und Duplikate.

5. Landmark-Regions inventarisieren: Hat jede Seite header, nav (mit aria-label), main, footer? Wo fehlen sie?

6. Bestehende SEO-Infrastruktur dokumentieren:
   - Existiert generateMetadata()? In welchen Dateien?
   - Gibt es JSON-LD Schemas? Welche Typen?
   - Existiert robots.ts/txt? sitemap.ts/xml?
   - Wie werden title und meta aktuell gesetzt?

7. DOM-Redundanzen zählen: Identifiziere überflüssige Wrapper-divs. Ziel: DOM-Tiefe <15, Knoten <1500 pro Route.

DOKUMENTIERE ALLES in .ai-architectural-context.md unter den passenden Sektionen.

═══════════════════════════════════════════════════════════════════════════════
UNIVERSELLE SICHERHEITSREGELN FÜR ALLE TASKS
═══════════════════════════════════════════════════════════════════════════════

1. Niemals blind überschreiben. Wenn eine Datei existiert, LIES sie zuerst. Verstehe ihre Logik.
2. Abwärtskompatibilität ist Gesetz. Jede Änderung harmoniert mit bestehendem Code. Keine Breaking Changes.
3. Ein Task, ein Commit. Nach jedem Task: npm run build && npm run lint && npx tsc --noEmit. Fehler? STOPP & Fix.
4. Bestehende Business-Logik NIEMALS entfernen. Unklar? Dokumentiere als Frage im Kontext-Dokument.

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — SEMANTISCHE KOMPONENTENARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: GLOBALE DOM-HIERARCHIE-ANALYSE UND KOMPONENTENPLAN

Schritt 1.1 — Server vs. Client Components kartieren:
In Next.js App Router ist die Unterscheidung fundamental:
- Server Components (default): Rendern HTML auf dem Server, kein Client-JS
- Client Components ('use client'): useState, useEffect, onClick, Browser-APIs

Semantische HTML-Struktur primär in Server Components — sie erzeugen das initiale HTML für Suchmaschinen und Screenreader.

Schritt 1.2 — Überschriften-Hierarchie über Layout-Grenzen validieren:
Bei verschachtelten Layouts (app/layout.tsx → app/services/layout.tsx → app/services/seo/page.tsx) muss die Heading-Kaskade über ALLE Layout-Ebenen konsistent sein.

Schritt 1.3 — Landmark-Regions-Inventar:
Jede gerenderte Seite MUSS aufweisen:
- Genau ein <header>
- Mindestens ein <nav> mit aria-label
- Genau ein <main> mit id="main-content"
- Genau ein <footer>

Schritt 1.4 — Redundanz-Analyse:
DOM-Knoten zählen. Überflüssige Wrapper-divs identifizieren. Ziel: DOM-Tiefe <15, Knoten <1500.

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: SEMANTISCHE LAYOUT-KOMPONENTEN IMPLEMENTIEREN ODER VERIFIZIEREN

CHIRURGISCHE ANWEISUNG: Prüfe ZUERST ob diese Komponenten bereits existieren. Wenn ja: Verbessere. Wenn nein: Erstelle. Überschreibe NIEMALS eine bestehende, funktionierende Komponente blind.

Schritt 2.1 — Root-Layout als semantisches Gerüst:
app/layout.tsx muss rendern:
1. <SkipNav /> als allererstes im <body>
2. <Header /> → semantisches <header>
3. <main id="main-content">{children}</main>
4. <Footer /> → semantisches <footer>

Zwischen <header> und <main> kein semantisch bedeutungsloses div.

Schritt 2.2 — Header-Komponente:
- Semantisches <header>
- Logo als Next.js <Link> mit alt "[Markenname] — Zur Startseite"
- Hauptnavigation in <nav aria-label="Hauptnavigation">
- Navigation-Links als Next.js <Link>
- Mobile-Menü als Client Component mit aria-expanded, Fokus-Management

Schritt 2.3 — Footer-Komponente:
- Semantisches <footer>
- Sekundäre Navigation: <nav aria-label="Footer-Navigation">
- Kontaktinfos in <address>
- Rechtliche Links: <nav aria-label="Rechtliche Informationen">
- Social-Media: <nav aria-label="Soziale Medien">

Schritt 2.4 — SkipNav-Komponente:
Visuell versteckt, bei Tastaturfokus sichtbar. Verweist auf #main-content. Text: "Zum Hauptinhalt springen".

Schritt 2.5 — Breadcrumbs-Komponente:
<nav aria-label="Navigationspfad"> mit <ol> > <li>. Aktuelle Seite: aria-current="page", NICHT verlinkt.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: SEKTIONEN-ARCHITEKTUR UND ÜBERSCHRIFTEN-HIERARCHIE

Schritt 3.1 — Section-Wrapper-Komponente:
Falls nicht vorhanden: <Section /> mit Props id, ariaLabel/ariaLabelledBy, className, children. Rendert <section>. Jede <section> MUSS identifizierbar sein.

Schritt 3.2 — Überschriften-Hierarchie reparieren:
JEDE Route: Genau eine <h1>. Keine Sprünge (kein h3 ohne h2). Layouts und Pages spielen zusammen.

Schritt 3.3 — Semantische Content-Komponenten:
- <Article /> → <article> (Blog-Posts, Testimonials, Service-Karten)
- <Aside /> → <aside> mit aria-label
- <Figure /> → <figure> + <figcaption>

Schritt 3.4 — Listen-Semantik:
- Navigation: <ul> > <li> in <nav>
- Feature-Listen: <ul> > <li>
- Schritte: <ol> > <li>
- Keine div-Ketten die visuell wie Listen aussehen

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — FORMULARE, INTERAKTION & DOM-QUALITÄT
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: FORMULARE UND INTERAKTIVE ELEMENTE

Schritt 4.1 — Formular-Architektur verifizieren:
Prüfe ALLE bestehenden Formulare:
- Sichtbares <label> verknüpft über htmlFor/id
- Input mit spezifischstem type (email, tel, url, search)
- Hilfetext via aria-describedby
- Fehlermeldung mit role="alert" und aria-describedby
- required + aria-required="true" bei Pflichtfeldern
- Korrekte autocomplete-Attribute

Schritt 4.2 — Button-Semantik:
- <button> für Aktionen
- Next.js <Link> für Navigation
- Icon-Buttons: aria-label
- Toggle-Buttons: aria-pressed
- Menü-Buttons: aria-expanded + aria-haspopup

Schritt 4.3 — Live-Regionen:
- Formular-Fehlermeldungen: role="alert"
- Toast-Benachrichtigungen: role="alert"
- Lade-Indikatoren: aria-live="polite"

Schritt 4.4 — Route-Change-Announcement:
<RouteAnnouncer /> lauscht auf usePathname()-Änderungen, aktualisiert visuell verstecktes aria-live="assertive" Element.

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: DOM-BEREINIGUNG

Schritt 5.1 — React-Fragmente statt Wrapper-divs:
Jeder div ohne Styling-Zweck und semantische Bedeutung → ersetze durch <></>.

Schritt 5.2 — Component Composition:
Keine Komponente >5 DOM-Ebenen allein.

Schritt 5.3 — TypeScript Strict Mode verifizieren:
- tsconfig.json: strict: true
- Keine any Types in Komponenten-Props
- Alle Event-Handler korrekt typisiert

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — SEO-INFRASTRUKTUR & STRUCTURED DATA
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: NEXT.JS METADATA API UND SEO

Schritt 6.1 — Root-Metadata:
Im Root-Layout metadata/generateMetadata() mit:
- title (Template-Pattern: { default: '[Marke]', template: '%s | [Marke]' })
- description, metadataBase (kanonische Domain)
- openGraph (Type, Locale, Sitename, Default-Image)
- twitter (Card-Type, Site, Creator)
- robots (index, follow)
- alternates.canonical
- viewport (width=device-width, initial-scale=1) — OHNE maximum-scale=1 oder user-scalable=no

Schritt 6.2 — Route-spezifische Metadata:
JEDE page.tsx: Individueller Title (≤60 Zeichen), Description (≤155 Zeichen), OG-Tags, kanonische URL.

Schritt 6.3 — Dynamische Routen:
Falls [slug] existiert: generateMetadata() liest Slug-Daten und generiert individuelle Metadata.

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: STRUCTURED DATA (JSON-LD)

Schritt 7.1 — JSON-LD Helper-Komponente:
<JsonLd /> als Server Component. Akzeptiert typisiertes Schema-Objekt, rendert <script type="application/ld+json">.

Schritt 7.2 — Schemas implementieren:
- Organization (Root-Layout): Name, URL, Logo, Kontakt, Social-Links
- WebSite (Root-Layout): Name, URL, Search-Action
- LocalBusiness (falls lokal): Adresse, Öffnungszeiten, Geo
- BreadcrumbList (Unterseiten): Automatisch aus Pfad
- FAQPage (FAQ-Seiten): Fragen und Antworten
- BlogPosting (Blog-Einzelseiten): Titel, Autor, Datum, Bild
- Service (Service-Seiten): Name, Beschreibung, Provider

Schritt 7.3 — Schema-Validierung:
JEDES Schema im Google Rich Results Test: 0 Fehler, 0 Warnungen.

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: ROBOTS, SITEMAP UND TECHNISCHES SEO

Schritt 8.1 — robots.ts:
app/robots.ts mit rules (userAgent *, allow /, disallow /api/ /dev/), sitemap-URL.

Schritt 8.2 — sitemap.ts:
app/sitemap.ts mit ALLEN öffentlichen Routen, lastModified, changeFrequency, priority. Dynamische [slug]-Routen eingeschlossen.

Schritt 8.3 — Technisches SEO:
- Kanonische URLs auf jeder Seite
- Keine Soft-404s
- lang="de" auf <html>
- Keine blockierenden Ressourcen im <head>

NACH TASK 8: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 1 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 9.1 — .ai-architectural-context.md DRASTISCH erweitern:
Es gibt KEIN Zeilenlimit. Schreibe ALLES auf:
- Architektur-Übersicht: Router-Typ, Verzeichnisstruktur, Rendering-Strategie
- Komponenten-Map: JEDE Komponente, Pfad, Funktion, Server/Client
- Bestehende Patterns: Datenladung, State-Management, UI-Bibliotheken
- SEO-Infrastruktur: Metadata, Schemas, Lücken
- Gelöste Probleme und offene Fragen
- Architektur-Entscheidungen mit Begründung

Schritt 9.2 — .upgrade-state.md finalisieren:
Alle Tasks abhaken. Nicht-abgeschlossene Tasks begründen.

Schritt 9.3 — Handoff an Phase 2:
```
## Handoff → Phase 2 (UI/UX-Raumarchitektur & Design-Token-System)
- Bestehende Styling-Patterns: [Liste]
- CSS-Architektur (Tailwind/Modules/Custom Properties): [Details]
- Potenzielle Konflikte bei Token-Einführung: [Liste]
- Komponenten die gestyled werden müssen: [Pfade]
```

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 1
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ JEDE Route rendert korrekt
□ Navigation funktioniert
□ Formulare sind nutzbar
□ header → nav → main → footer auf jeder Seite
□ Überschriften-Hierarchie lückenlos auf jeder Route
□ Landmark-Regions komplett
□ Alt-Texte auf allen Bildern
□ Metadata auf jeder Route individuell
□ JSON-LD validiert im Rich Results Test
□ robots.txt und sitemap.xml korrekt generiert
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist umfassend befüllt
□ .upgrade-state.md ist aktuell mit Handoff an Phase 2
