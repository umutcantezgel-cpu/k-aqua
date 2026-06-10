Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, das GESAMTE Projekt bis auf die letzte Zeile Code zu scannen, den vollständigen Kontext zu verinnerlichen und die bestehende README.md zu einer visuell herausragenden, inhaltlich erschöpfenden und professionell strukturierten GitHub-Präsentation auszubauen die das Projekt auf höchstem Niveau repräsentiert. KEINE Emojis. Die Professionalität entsteht durch typografische Präzision, strukturelle Klarheit und inhaltliche Tiefe — nicht durch Dekoration. Das Ergebnis ist eine README die Entwickler, Kunden und Open-Source-Besucher gleichermaßen beeindruckt und die gesamte Architektur, Funktionalität und Qualität des Projekts auf den ERSTEN Blick kommuniziert.

═══════════════════════════════════════════════════════════════════════════════
README-EXPANSION-PROTOKOLL — SUPREME GITHUB PRESENCE
═══════════════════════════════════════════════════════════════════════════════

DU BIST EIN TECHNISCHER REDAKTEUR AUF WELTKLASSE-NIVEAU.

Deine Aufgabe ist NICHT einfach eine README zu schreiben. Deine Aufgabe ist es, die GESAMTE Essenz eines Projekts — seine Architektur, seine Qualität, seinen Wert, seine Vision — in ein EINZIGES Markdown-Dokument zu destillieren das auf GitHub als erste Anlaufstelle dient. Dieses Dokument MUSS drei Zielgruppen gleichzeitig bedienen: Entwickler die den Code verstehen wollen, Kunden die das Endprodukt bewerten, und Besucher die in 10 Sekunden entscheiden ob das Projekt ihre Zeit wert ist.

DEIN VISUELLES PARADIGMA:
- KEINE Emojis. Nirgends. Nicht im Text, nicht in Überschriften, nicht in Listen. Emojis wirken in professionellen GitHub-READMEs infantil.
- Visuelle Wirkung wird erzielt durch: Shields.io Badges, ASCII-Tabellen, klare Sektions-Trennung, strategischen Einsatz von Markdown-Features (Blockquotes, horizontale Regeln, verschachtelte Listen, Code-Blöcke), konsistente typografische Hierarchie und Whitespace als Gestaltungselement.
- Der ERSTE Viewport (was man ohne Scrollen sieht) entscheidet über den Gesamteindruck. Er MUSS perfekt sein.

DEIN INHALTLICHES PARADIGMA:
- JEDE Behauptung in der README MUSS durch den tatsächlichen Code belegbar sein. Kein Marketing-Sprech ohne Substanz.
- Die README beschreibt was DAS PROJEKT IST — nicht was es sein MÖCHTE.
- Technische Präzision vor Prosa. Entwickler verachten Floskeln.
- ABER: Trockene Aufzählungen ohne Kontext sind genau so schlecht. Jede Section braucht einen EINLEITENDEN SATZ der erklärt WARUM sie relevant ist.

Tech-Stack (UNVERLETZLICH — diese Restriktionen gelten auch für die README-Inhalte):
- Next.js (App Router), React 19+, TypeScript Strict, Tailwind CSS
- Erlaubt: Formspree, Calendly
- VERBOTEN: Headless CMS, externe AI-APIs, Sentry, Newsletter, i18n, Dark Mode
- CODE IST DIE EINZIGE SSOT — Die README beschreibt den CODE, nicht eine Wunschvorstellung

═══════════════════════════════════════════════════════════════════════════════
SCHRITT 0: TOTALER PROJEKT-SCAN — DEN VOLLSTÄNDIGEN KONTEXT VERINNERLICHEN
═══════════════════════════════════════════════════════════════════════════════

Dieser Schritt ist die ABSOLUTE GRUNDLAGE. Du schreibst KEIN EINZIGES WORT in die README bevor du nicht JEDE Datei im Projekt gelesen und verstanden hast. Eine README die auf Annahmen basiert statt auf dem echten Code ist WERTLOS.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 1: PROJEKT-IDENTITÄT ERFASSEN

Aktion 1.1 — Package-Manifest analysieren:
Lies package.json KOMPLETT. Extrahiere und dokumentiere:
- Projektname (name-Feld): Wie heißt das Projekt offiziell?
- Version (version-Feld): Welche Version ist aktuell?
- Description (description-Feld): Gibt es bereits eine Beschreibung? Wie gut ist sie?
- Scripts: Welche Build/Dev/Lint/Test-Befehle existieren? (npm run dev, npm run build, npm run lint, npm run start — und was sonst?)
- Dependencies: LISTE alle Production-Dependencies mit Versions-Nummern auf. Diese definieren den Tech-Stack.
- DevDependencies: LISTE alle Dev-Dependencies auf. Diese zeigen das Tooling.
- Engine-Requirements: Gibt es engine-Einschränkungen? (Node.js Version, npm Version)
- Repository-Feld: Ist eine GitHub-URL hinterlegt?
- License-Feld: Welche Lizenz?

Aktion 1.2 — Bestehende README analysieren:
Lies die aktuelle README.md (falls vorhanden) KOMPLETT. Dokumentiere:
- Länge in Zeilen und Wörtern
- Welche Sektionen existieren bereits?
- Welche Sektionen FEHLEN?
- Qualität der bestehenden Sektionen (1-10 Skala): Genauigkeit, Vollständigkeit, Aktualität, Lesbarkeit
- Gibt es veraltete Informationen die nicht mehr zum aktuellen Code passen?
- Gibt es Badges? Welche? Sind sie aktuell?
- Gibt es Screenshots oder visuelle Elemente?
- Gibt es eine Installations-Anleitung? Ist sie vollständig und korrekt?
- Gibt es eine Projekt-Beschreibung? Trifft sie den Kern?
BEWAHRE allen bestehenden Content der KORREKT und AKTUELL ist. Die Expansion ERGÄNZT — sie ersetzt nur was veraltet oder falsch ist.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 2: ARCHITEKTUR-KARTIERUNG

Aktion 2.1 — Verzeichnisstruktur komplett erfassen:
Erstelle eine VOLLSTÄNDIGE Karte der Projektstruktur. Lies JEDEN Ordner, JEDEN Unterordner. Dokumentiere:
- /app/ Verzeichnis: Welche Routen existieren? Welche Route-Gruppen? Welche dynamischen Routen ([slug], [...catchAll])?
- /components/ Verzeichnis: Wie ist es organisiert? (Flat, Feature-basiert, Atomic Design?) Wie viele Komponenten existieren?
- /lib/ Verzeichnis: Welche Utilities, Helper, Daten-Dateien, Type-Definitionen existieren?
- /public/ Verzeichnis: Welche Assets? (Bilder, Fonts, Icons, Favicon, robots.txt, sitemap.xml)
- /types/ Verzeichnis: Welche globalen Type-Definitionen?
- Config-Dateien: tsconfig.json, tailwind.config, next.config, postcss.config, eslint.config, .prettierrc, .editorconfig, .gitignore
- Versteckte Dateien: .env.example, .nvmrc, .node-version
ZIEL: Du musst die Projekt-Struktur so gut kennen dass du sie AUSWENDIG als ASCII-Baum wiedergeben kannst.

Aktion 2.2 — Routing-Architektur dokumentieren:
Erfasse JEDE Route die das Projekt exponiert:
- Statische Routen: /, /leistungen, /ueber-uns, /kontakt, /blog, /impressum, /datenschutz etc.
- Dynamische Routen: /leistungen/[slug], /blog/[slug] etc.
- API-Routes: Gibt es Route-Handler in /app/api/?
- Catch-All Routes: [...slug]
- Route-Gruppen: (marketing), (auth) etc.
- Für JEDE Route: Kurzbeschreibung was die Seite zeigt, ob sie SSR/SSG/ISR nutzt, welche Daten sie lädt.

Aktion 2.3 — Datenfluss-Architektur dokumentieren:
Erfasse WIE Daten im Projekt fließen:
- Wo leben die Daten? (/lib/data/ als lokale TypeScript-Strukturen? API-Calls? Hardcoded?)
- Welche Datendomänen existieren? (Services, Team, Testimonials, Blog-Posts, FAQ, Case-Studies, etc.)
- Wie werden Daten in Pages geladen? (Direkte Imports in Server Components? generateStaticParams?)
- Gibt es State-Management? (React Context? URL-State? Lokaler Component-State?)
- Gibt es Formulare? (Formspree-Integration? Multi-Step?)
- Gibt es Terminbuchung? (Calendly-Integration?)

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 3: FEATURE-INVENTAR ERSTELLEN

Aktion 3.1 — Alle User-Facing Features katalogisieren:
Gehe JEDE Seite durch und dokumentiere JEDES Feature das ein Endbenutzer sieht oder nutzt:
- Navigation: Desktop-Nav, Mobile-Hamburger, Mega-Menu, Breadcrumbs, Footer-Nav
- Hero-Sections: Welcher Typ? (Bild, Video, Animation, Gradient, Split-Layout)
- Content-Sections: Service-Übersichten, Feature-Listen, Prozess-Schritte, Timelines
- Trust-Elemente: Testimonials, Case-Studies, Statistiken, Partner-Logos, Zertifikate
- Interaktive Elemente: Formulare, Calculator, Filter, Suche, Accordion, Tabs, Modals
- Medien: Bildergalerien, Videos, Animationen
- Conversion-Elemente: CTAs, Kontaktformulare, Calendly-Integration, Newsletter (falls vorhanden)
- Rechtliche Elemente: Impressum, Datenschutz, Cookie-Banner
- SEO-Elemente: Meta-Tags, Structured Data (JSON-LD), Sitemap, Robots

Aktion 3.2 — Alle Developer-Facing Features katalogisieren:
Dokumentiere was einen ENTWICKLER an diesem Projekt interessiert:
- TypeScript-Konfiguration: Strict Mode? Custom Paths? Base-URL?
- Komponenten-Architektur: Wie sind Komponenten aufgebaut? Props-System? Variants?
- Design-System: Tailwind-Theme-Konfiguration? Custom-Farben? Custom-Fonts? Design-Tokens?
- Performance-Optimierungen: next/image? next/font? Dynamic Imports? Code-Splitting?
- SEO-Implementierung: generateMetadata? JSON-LD? OG-Images?
- Formular-Handling: Formspree-Integration? Validierung? Error-Handling?
- Deployment-Konfiguration: Vercel? Docker? CI/CD?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 4: QUALITÄTS-METRIKEN ERFASSEN

Aktion 4.1 — Build & Type-Safety:
Führe die folgenden Befehle aus und dokumentiere die Ergebnisse EXAKT:
- npm run build → Wie viele Routen werden gebaut? Gibt es Warnings? Build-Größe?
- npx tsc --noEmit → ZERO Errors? Wie viele Dateien werden geprüft?
- npm run lint → Ergebnis? Warnings?
Dokumentiere die Zahlen — sie werden als Qualitäts-Badges in der README verwendet.

Aktion 4.2 — Projekt-Statistiken sammeln:
Zähle und dokumentiere EXAKT:
- Gesamtanzahl .tsx Dateien
- Gesamtanzahl .ts Dateien (ohne .tsx)
- Gesamtanzahl .css Dateien
- Gesamtanzahl Routen (page.tsx Dateien)
- Gesamtanzahl Komponenten
- Gesamtanzahl Utility-Funktionen
- Gesamtanzahl TypeScript-Interfaces/Types
- Gesamtanzahl Daten-Dateien
- Gesamtanzahl Zeilen Code (ohne node_modules, .next)
- Dependencies-Anzahl (Production + Dev separat)
Diese Zahlen werden als Fakten-Block in der README verwendet.

Aktion 4.3 — Performance-Indikatoren erfassen:
Falls messbar (über Build-Output oder Lighthouse):
- First-Load JS Bundle-Größe pro Route
- Gesamte statisch generierte Seiten
- Bild-Optimierungs-Format (WebP, AVIF)
- Font-Loading-Strategie (next/font, swap, optional)

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — README VISUELLES FUNDAMENT (Der erste Viewport entscheidet)
═══════════════════════════════════════════════════════════════════════════════

Die ersten 30 Zeilen der README sind ALLES. Ein GitHub-Besucher entscheidet in 5-10 Sekunden ob er weiterliest oder wegklickt. Dieser Block konstruiert den PERFEKTEN ersten Eindruck.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 5: HEADER-KONSTRUKTION — DAS VISUELLE TOR

Aktion 5.1 — Projekt-Banner / Hero-Bereich:
Der ERSTE sichtbare Block der README. KEINE Emojis. Optionen (wähle die passendste):

OPTION A — Minimalistisch-Typografisch (für Corporate/Agentur-Projekte):
Nutze einen zentrierten Markdown-Block mit dem Projektnamen als H1, einem kurzen Tagline-Satz als Blockquote, und einer Badge-Leiste darunter. Beispiel-Struktur (NICHT kopieren, an das echte Projekt anpassen):

<div align="center">
<h1>Projektname</h1>
<p><strong>Ein-Satz-Beschreibung die den Kern des Projekts auf den Punkt bringt.</strong></p>
<br />
[Badge-Leiste — siehe Aktion 5.2]
<br /><br />
[Optional: Screenshot oder Link zur Live-Demo]
</div>

OPTION B — Screenshot-First (wenn das Projekt visuell beeindruckend ist):
Ein großformatiger Screenshot der Startseite als Hero-Bild, darunter Name und Beschreibung. Der Screenshot MUSS aktuell sein und die BESTE Seite des Projekts zeigen.

OPTION C — ASCII-Art Header (für technisch orientierte Projekte):
Ein minimalistischer ASCII-Art Block mit dem Projektnamen, gefolgt von einer technischen Kurzbeschreibung. Nur verwenden wenn es zum Projekt-Charakter passt.

ENTSCHEIDE basierend auf dem Projekttyp. Für die meisten Next.js-Websites ist OPTION A die stärkste Wahl.

Aktion 5.2 — Badge-Leiste konstruieren:
Badges sind das VISUELLE RÜCKGRAT einer professionellen GitHub-README. Sie kommunizieren Qualität auf einen Blick. Erstelle eine HORIZONTALE Leiste mit Shields.io-Badges. Verwende diese Badges (nur die RELEVANTEN — keine leeren Versprechen):

PFLICHT-Badges (immer wenn zutreffend):
- Tech-Stack: ![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js) — Versions-Nummer MUSS zum echten Projekt passen
- ![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
- ![TypeScript](https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss)

QUALITÄTS-Badges (NUR wenn tatsächlich bestätigt durch den Scan in Task 4):
- ![Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square) — NUR wenn npm run build ZERO Errors hat
- ![TypeScript](https://img.shields.io/badge/TSC-Zero_Errors-brightgreen?style=flat-square) — NUR wenn npx tsc --noEmit ZERO Errors hat
- ![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square) — Nur mit KORREKTER Lizenz

STYLE: Verwende style=flat-square für alle Badges — es ist das professionellste Format. KEINE for-the-badge Badges (zu groß, zu bunt). KEINE plastic Badges (zu verspielt). KONSISTENTER Style für ALLE Badges.

FARB-KOORDINATION: Nutze maximal 3-4 Farben in der Badge-Leiste. Verwende die offiziellen Marken-Farben der Technologien. Qualitäts-Badges in Grün (brightgreen) für bestandene Checks.

Aktion 5.3 — Projekt-Kurzbeschreibung (2-3 Sätze):
Direkt nach den Badges: Eine PRÄZISE Kurzbeschreibung in 2-3 Sätzen. Diese Sätze müssen folgende Fragen beantworten:
- WAS ist das? (Eine Website für [Branche/Zweck])
- WIE ist es gebaut? (Mit [Tech-Stack-Highlights])
- WAS macht es besonders? (Ein differenzierendes Merkmal)
Die Beschreibung ist KEIN Marketing-Text. Sie ist eine technische Positionsbestimmung. Jedes Wort muss WAHR und BELEGBAR durch den Code sein.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 6: INHALTSVERZEICHNIS — NAVIGATION AUF EINEN BLICK

Aktion 6.1 — Table of Contents erstellen:
Ein Inhaltsverzeichnis ist PFLICHT für jede README die länger als 3 Bildschirmseiten ist. Nutze verlinkte Markdown-Anker:

---
Inhalt
---

Die Sektionen müssen GENAU den Überschriften im Dokument entsprechen. Nutze eine FLACHE Hierarchie (maximal 2 Ebenen). Gruppiere nach Relevanz:
- Erste Gruppe: Was ist das Projekt? (Über das Projekt, Features, Tech-Stack)
- Zweite Gruppe: Wie nutze ich es? (Voraussetzungen, Installation, Entwicklung, Deployment)
- Dritte Gruppe: Wie ist es aufgebaut? (Architektur, Projektstruktur, Datenmodell)
- Vierte Gruppe: Meta-Informationen (Performance, Lizenz, Kontakt)

VISUELLE TRENNUNG: Setze horizontale Regeln (---) ÜBER und UNTER das Inhaltsverzeichnis um es als Navigation klar abzugrenzen.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — INHALTLICHE KERN-SEKTIONEN (Die Substanz)
═══════════════════════════════════════════════════════════════════════════════

Jede Sektion folgt dem gleichen Muster: Überschrift → Einleitender Kontextsatz → Strukturierter Inhalt → (Optional) visuelles Element.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 7: ÜBER DAS PROJEKT — DER ELEVATOR PITCH

Aktion 7.1 — Erweiterte Projektbeschreibung:
Nach der Kurzbeschreibung im Header folgt eine ausführlichere "Über das Projekt" Sektion. 1-2 Absätze die folgende Punkte adressieren:
- KONTEXT: Für wen ist dieses Projekt? (Zielgruppe, Branche, Anwendungsfall)
- PROBLEM: Welches Problem löst es? (Warum existiert diese Website?)
- LÖSUNG: Wie löst es das Problem? (Technischer und funktionaler Ansatz)
- ERGEBNIS: Was ist das Endprodukt? (Eine performante, barrierefreie, SEO-optimierte Website)
SCHREIBE dies in PROSA — keine Bulletpoints. Professionelle Prosa mit klaren Sätzen. JEDE Aussage muss durch den gescannten Code belegbar sein.

Aktion 7.2 — Key-Features als strukturierte Übersicht:
Nach der Prosa-Beschreibung: Eine STRUKTURIERTE Feature-Übersicht. Verwende KEINE einfache Bullet-Liste. Stattdessen nutze eine KATEGORISIERTE Darstellung die visuell ansprechend ist:

Verwende Markdown-Tabellen ODER verschachtelte Listen mit fetten Kategorie-Überschriften:
- Kategorie-Überschrift in Bold
  - Feature 1 mit kurzer Erklärung
  - Feature 2 mit kurzer Erklärung

Kategorien orientieren sich an den echten Features aus Task 3:
- Architektur & Performance (z.B. App Router, SSG, Code-Splitting)
- Design & UX (z.B. Responsive, Custom Design-System, Animationen)
- SEO & Marketing (z.B. Metadata, JSON-LD, Sitemap)
- Formulare & Conversion (z.B. Formspree, Calendly, Multi-Step-Forms)
- Barrierefreiheit (z.B. WCAG, Keyboard-Navigation, Semantisches HTML)
- Code-Qualität (z.B. TypeScript Strict, ESLint, Zero-Warnings Build)

NUR Features listen die TATSÄCHLICH IM CODE EXISTIEREN.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 8: TECH-STACK SEKTION — TECHNISCHE SUBSTANZ

Aktion 8.1 — Tech-Stack als visuelle Tabelle:
Erstelle eine Markdown-Tabelle die den EXAKTEN Tech-Stack dokumentiert. Die Tabelle hat die Spalten: Technologie | Version | Zweck.

Beispiel-Struktur (Werte aus dem echten package.json):

| Technologie | Version | Zweck |
|:---|:---:|:---|
| Next.js | 15.x | Framework, App Router, SSR/SSG |
| React | 19.x | UI-Komponenten, Hooks |
| TypeScript | 5.x | Typsicherheit, Strict Mode |
| Tailwind CSS | 4.x | Utility-First Styling |
| Formspree | --- | Formular-Backend |
| Calendly | --- | Terminbuchung |

JEDE Zeile MUSS eine reale Dependency aus package.json widerspiegeln. KEINE Technologien listen die nicht im Projekt verwendet werden. Die Versions-Nummern MÜSSEN exakt sein (aus package.json).

Aktion 8.2 — Tooling & Development-Stack:
Unterhalb des Haupt-Stacks: Eine separate, kompaktere Liste des Development-Toolings:
- Linting: ESLint mit [Config-Name]
- Formatting: Prettier (falls vorhanden)
- Git-Hooks: Husky, lint-staged (falls vorhanden)
- Deployment: Vercel / Docker / [was konfiguriert ist]
NUR was TATSÄCHLICH konfiguriert ist.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 9: INSTALLATION & SETUP — DER ENTWICKLER-ONBOARDING-PFAD

Aktion 9.1 — Voraussetzungen klar definieren:
Liste JEDE Voraussetzung die ein Entwickler braucht um das Projekt lokal zum Laufen zu bringen:
- Node.js Version (aus .nvmrc, .node-version, oder engines in package.json — wenn nichts definiert: empfehle die LTS-Version)
- Package Manager (npm, yarn, pnpm — was verwendet das Projekt?)
- Git
- Betriebssystem-Anforderungen (falls relevant)

Aktion 9.2 — Schritt-für-Schritt Installation:
Erstelle eine LÜCKENLOSE Installations-Anleitung in nummerierten Schritten mit Code-Blöcken. JEDER Schritt MUSS copy-paste-fähig sein:

1. Repository klonen
2. Dependencies installieren
3. Environment-Variablen konfigurieren (mit Verweis auf .env.example)
4. Development-Server starten
5. Build testen

Für Schritt 3: Erstelle eine TABELLE aller benötigten Environment-Variablen mit Spalten: Variable | Beschreibung | Erforderlich | Beispiel. Verwende KEINE echten API-Keys oder Secrets.

Aktion 9.3 — Verfügbare Scripts dokumentieren:
Erstelle eine Tabelle ALLER npm-Scripts aus package.json:

| Befehl | Beschreibung |
|:---|:---|
| npm run dev | Startet den Development-Server |
| npm run build | Erstellt den Production-Build |
| npm run start | Startet den Production-Server |
| npm run lint | Führt ESLint aus |

NUR echte Scripts aus package.json. Keine erfundenen.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 10: PROJEKTSTRUKTUR — DER ARCHITEKTUR-ÜBERBLICK

Aktion 10.1 — ASCII-Verzeichnisbaum erstellen:
Erstelle einen SAUBEREN ASCII-Baum der Projektstruktur. NICHT jede einzelne Datei — sondern die ARCHITEKTONISCH RELEVANTEN Ordner und Schlüssel-Dateien. Nutze Unicode-Box-Drawing-Zeichen für professionelle Optik:

Verwende die Zeichen: ├──, │, └──, Verzeichnis-Ordner mit / Suffix.

Beschränke den Baum auf 2-3 Ebenen Tiefe. Annotiere wichtige Ordner mit einem kurzen Kommentar in Klammern:

app/                        (Next.js App Router)
├── (routes)/               (Route-Gruppe)
│   ├── page.tsx            (Startseite)
│   └── leistungen/
│       ├── page.tsx        (Service-Übersicht)
│       └── [slug]/
│           └── page.tsx    (Service-Detail)
├── layout.tsx              (Root-Layout)
└── globals.css             (Globale Styles)
components/                 (React-Komponenten)
├── ui/                     (Basis-UI-Elemente)
├── sections/               (Seiten-Sektionen)
└── layout/                 (Header, Footer, Nav)
lib/                        (Utilities & Daten)
├── data/                   (Lokale Daten-Dateien)
├── utils/                  (Helper-Funktionen)
└── types.ts                (Globale TypeScript-Types)

Der Baum MUSS die ECHTE Struktur des Projekts widerspiegeln. Passe ihn an den tatsächlichen Scan aus Task 2 an.

Aktion 10.2 — Architektur-Entscheidungen dokumentieren:
Unter dem Verzeichnisbaum: Ein kurzer Abschnitt (3-5 Sätze) der die WICHTIGSTEN Architektur-Entscheidungen erklärt:
- Warum App Router? (Server Components, Streaming, Nested Layouts)
- Warum lokale Daten statt CMS? (Keine externe Abhängigkeit, Type-Safety, Performance)
- Warum Tailwind? (Utility-First, Design-Token-Integration, Zero-Runtime)
- Warum Formspree? (Kein Backend nötig, DSGVO-konform, einfache Integration)
NUR Entscheidungen dokumentieren die TATSÄCHLICH getroffen wurden und aus dem Code ersichtlich sind.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — TECHNISCHE TIEFE (Für Entwickler die es genau wissen wollen)
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 11: DATENMODELL & CONTENT-ARCHITEKTUR

Aktion 11.1 — Datendomänen dokumentieren:
Erstelle eine Übersicht aller Datendomänen mit ihrer Struktur. Für jede Domain:
- Name der Domain (z.B. "Services", "Team", "Testimonials")
- Dateipfad (/lib/data/services.ts)
- TypeScript-Interface (das exakte Interface aus dem Code — als Code-Block)
- Anzahl Datensätze
- Wo werden die Daten konsumiert? (Welche Pages/Components nutzen sie?)

Aktion 11.2 — Datenfluss-Beschreibung:
Beschreibe in 2-3 Absätzen WIE Daten vom Speicherort zur UI gelangen:
- Daten leben in /lib/data/ als typsichere TypeScript-Objekte
- Server Components importieren Daten direkt (kein API-Call, kein Fetch)
- Dynamische Routen nutzen generateStaticParams für SSG
- Client-seitiger State wird über [React Context / URL-Parameter / lokalen State] verwaltet
NUR beschreiben was der CODE zeigt.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 12: ROUTING & SEITENSTRUKTUR

Aktion 12.1 — Vollständige Route-Map:
Erstelle eine Tabelle ALLER öffentlichen Routen:

| Route | Seite | Typ | Beschreibung |
|:---|:---|:---:|:---|
| / | Startseite | SSG | Hero, Services, Testimonials, CTA |
| /leistungen | Service-Übersicht | SSG | Alle Services als Card-Grid |
| /leistungen/[slug] | Service-Detail | SSG | Einzelner Service mit Details |
| /kontakt | Kontakt | SSG | Formular, Kontaktdaten, Calendly |
| /impressum | Impressum | SSG | Rechtliche Pflichtangaben |
| /datenschutz | Datenschutz | SSG | DSGVO-Datenschutzerklärung |

JEDE Route aus dem echten /app/ Verzeichnis. Typ = SSG (Static), SSR (Server-side), ISR (Incremental) — basierend auf dem tatsächlichen Rendering-Modus.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 13: KOMPONENTEN-BIBLIOTHEK ÜBERSICHT

Aktion 13.1 — Komponenten-Katalog erstellen:
Erstelle eine KATEGORISIERTE Übersicht aller Komponenten. Keine erschöpfende Prop-Dokumentation — das gehört in eine separate Docs-Seite. Stattdessen eine HIGH-LEVEL Übersicht:

Layout-Komponenten: Header, Footer, Navigation, MobileNav, Breadcrumbs, Container
UI-Komponenten: Button, Card, Badge, Input, Textarea, Select, Modal, Accordion
Section-Komponenten: HeroSection, ServiceGrid, TestimonialSlider, CTASection, StatsBar
Utility-Komponenten: SEO, SchemaOrg, ErrorBoundary, LoadingSpinner

Für jede Kategorie: Auflistung der Komponenten-Namen. Keine tiefere Dokumentation — das würde die README überfrachten.

Aktion 13.2 — Design-System Hinweis:
Falls ein Design-System existiert (Custom Tailwind-Theme, Design-Tokens, konsistentes Spacing/Farb-System): Dokumentiere es KURZ (3-5 Sätze). Verweise auf die relevanten Konfigurationsdateien (tailwind.config.ts, globals.css).

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 14: SEO & METADATA DOKUMENTATION

Aktion 14.1 — SEO-Implementierung dokumentieren:
Beschreibe WIE SEO im Projekt umgesetzt ist:
- Metadata-Generierung (generateMetadata pro Route oder globale metadata)
- Open Graph Tags (og:title, og:description, og:image)
- JSON-LD Structured Data (Schema.org — welche Schemas? Organization, WebSite, LocalBusiness, Service?)
- Sitemap-Generierung (app/sitemap.ts — dynamisch oder statisch?)
- Robots-Konfiguration (app/robots.ts)
- Canonical URLs
NUR dokumentieren was TATSÄCHLICH implementiert ist.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 15: FORMULARE & INTEGRATIONEN

Aktion 15.1 — Formspree-Integration dokumentieren:
- Welche Formulare existieren?
- Wie ist die Validierung implementiert? (Client-seitig? Schema-basiert?)
- Wie werden Erfolg/Fehler behandelt?
- Gibt es Honeypot/Spam-Schutz?

Aktion 15.2 — Calendly-Integration dokumentieren (falls vorhanden):
- Wo ist Calendly eingebunden?
- Embed oder Link?
- Fallback wenn Calendly nicht lädt?

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — VISUELLE AUFWERTUNG & GITHUB-SPEZIFISCHE ELEMENTE
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 16: SCREENSHOT-STRATEGIE

Aktion 16.1 — Hero-Screenshot erstellen:
Falls möglich: Erstelle oder referenziere einen HOCHWERTIGEN Screenshot der Startseite. Platziere ihn prominent im Header-Bereich oder direkt nach der Beschreibung.
- Format: PNG oder WebP, mindestens 1200px breit
- Inhalt: Die Startseite in Desktop-Ansicht — der BESTE visuelle Eindruck
- Darstellung: In einem Browser-Mockup oder mit abgerundeten Ecken und Schatten (optional)
- Alt-Text: Beschreibender Alt-Text für Accessibility

Aktion 16.2 — Responsive-Screenshots (optional):
Falls das Responsive-Design beeindruckend ist: Zeige Desktop + Tablet + Mobile nebeneinander in einem zusammengesetzten Bild. Das kommuniziert Qualität visuell stärker als jeder Text.

Aktion 16.3 — Screenshot-Pfade:
Alle Screenshots in einem /docs/ oder /public/readme/ Ordner ablegen. Relative Pfade in der README verwenden (./docs/screenshot-hero.png) damit sie auf GitHub korrekt angezeigt werden.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 17: COLLAPSIBLE SECTIONS FÜR TIEFE OHNE ÜBERFRACHTUNG

Aktion 17.1 — Details/Summary für optionale Tiefe:
Nutze HTML <details><summary> Tags für Sektionen die DETAILTIEFE bieten aber den Lesefluss NICHT stören sollen:

<details>
<summary><strong>Vollständige Projektstruktur anzeigen</strong></summary>
[Ausführlicher ASCII-Baum]
</details>

<details>
<summary><strong>Alle verfügbaren Scripts</strong></summary>
[Script-Tabelle]
</details>

<details>
<summary><strong>Environment-Variablen Referenz</strong></summary>
[Env-Var-Tabelle]
</details>

Kandidaten für Collapsible Sections:
- Detaillierte Projektstruktur (wenn der kompakte Baum bereits oben steht)
- Vollständige Komponenten-Liste
- Detaillierte Datenmodell-Interfaces
- Erweiterte Installations-Hinweise für verschiedene Betriebssysteme
- Troubleshooting / FAQ

NUTZE collapsible Sections GROSSZÜGIG. Sie halten die README KOMPAKT für Schnell-Leser und bieten TIEFE für Interessierte.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 18: HORIZONTALE REGELN & SEKTIONS-TRENNUNG

Aktion 18.1 — Visuelle Rhythmik durch Whitespace:
Zwischen JEDER Haupt-Sektion: Eine horizontale Regel (---) und eine Leerzeile davor und danach. Das erzeugt klare visuelle Blöcke die das Scanning erleichtern.

Aktion 18.2 — Blockquotes für Hervorhebungen:
Nutze Blockquotes (>) für wichtige Hinweise oder Kontext-Informationen die aus dem Fließtext herausstechen sollen:

> Dieses Projekt verwendet ausschließlich lokale TypeScript-Datenstrukturen als Content-Quelle.
> Es gibt keine Abhängigkeit zu externen CMS-Systemen oder Datenbanken.

Nutze Blockquotes SPARSAM — maximal 2-3 pro README. Zu viele verwässern den Effekt.

Aktion 18.3 — Code-Block-Styling:
Alle Code-Beispiele mit KORREKTEM Syntax-Highlighting:
- Shell-Befehle: ```bash
- TypeScript-Code: ```typescript
- JSX-Code: ```tsx
- JSON: ```json
- File-Pfade oder kurze Inline-Referenzen: `inline code`
KEIN Code-Block ohne Language-Identifier. Kein Syntax-Highlighting = unprofessionell.

═══════════════════════════════════════════════════════════════════════════════
BLOCK E — ABSCHLUSS-SEKTIONEN & META-INFORMATIONEN
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 19: PERFORMANCE-SEKTION

Aktion 19.1 — Performance-Fakten (NUR wenn messbar):
Wenn Lighthouse-Scores oder Build-Metriken vorliegen: Dokumentiere sie in einer kompakten Tabelle oder als Badge-Leiste:

| Metrik | Wert |
|:---|:---:|
| Lighthouse Performance | 95+ |
| First Load JS | < 85 kB |
| Build-Routen | 12 statisch |
| TypeScript Errors | 0 |

WARNUNG: NUR ECHTE, GEMESSENE Werte. Keine Schätzungen. Keine Wunsch-Werte. Wenn nicht gemessen: Sektion weglassen.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 20: DEPLOYMENT-SEKTION

Aktion 20.1 — Deployment-Anleitung:
Dokumentiere WIE das Projekt deployed wird:
- Vercel: Ist eine vercel.json vorhanden? Gibt es spezielle Konfigurationen?
- Docker: Gibt es ein Dockerfile?
- Statischer Export: Ist output: 'export' konfiguriert?
- Environment-Variablen im Deployment: Welche müssen beim Hoster konfiguriert werden?
Beschreibe den Deployment-Prozess in 3-5 Schritten. Copy-paste-fähig.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 21: LIZENZ, KONTAKT & FOOTER

Aktion 21.1 — Lizenz-Sektion:
Kurz und klar. Verweis auf die LICENSE-Datei (falls vorhanden). Wenn keine Lizenz-Datei existiert: Empfehle die Erstellung einer.

Aktion 21.2 — Kontakt/Autor-Sektion:
Minimal aber professionell:
- Name oder Firma
- Website-URL (falls die Website selbst das Projekt ist: Link zur Live-Demo)
- Kontakt-Möglichkeit (E-Mail oder GitHub-Profil)

Aktion 21.3 — "Zurück nach oben" Link:
Am ENDE der README: Ein Link der zurück zum Anfang scrollt:
<p align="right"><a href="#top">Zurück nach oben</a></p>
Ein kleines Detail das zeigt dass die README mit Sorgfalt erstellt wurde.

═══════════════════════════════════════════════════════════════════════════════
BLOCK F — QUALITÄTSSICHERUNG & FINALE VALIDIERUNG
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 22: INHALTLICHE VALIDIERUNG

Aktion 22.1 — SSOT-Abgleich:
Gehe JEDE Aussage in der neuen README durch und prüfe:
- Stimmt die genannte Next.js-Version mit package.json überein?
- Stimmen die aufgelisteten Features mit dem tatsächlichen Code überein?
- Stimmen die Routen in der Route-Map mit den tatsächlichen page.tsx Dateien überein?
- Stimmen die Komponenten-Namen mit den echten Dateinamen überein?
- Stimmen die Environment-Variablen mit den tatsächlich genutzten überein?
- Stimmen die npm-Scripts mit package.json überein?
JEDE UNSTIMMIGKEIT IST EIN BUG. Die README MUSS den Code widerspiegeln — nicht umgekehrt.

Aktion 22.2 — Vollständigkeits-Prüfung:
Prüfe ob JEDE relevante Information enthalten ist:
- Kann ein Entwickler das Projekt NUR mit der README klonen, installieren und starten? (Ohne zusätzliche Fragen stellen zu müssen?)
- Versteht ein Nicht-Techniker was das Projekt IST und KANN? (Ohne Code lesen zu müssen?)
- Versteht ein GitHub-Besucher in 10 Sekunden ob das Projekt für ihn relevant ist?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 23: VISUELLE VALIDIERUNG

Aktion 23.1 — Markdown-Rendering prüfen:
Die README wird auf GitHub gerendert — NICHT in einem lokalen Markdown-Editor. Prüfe:
- Werden ALLE Badges korrekt angezeigt? (Shields.io URLs korrekt?)
- Werden Tabellen korrekt gerendert? (Markdown-Tabellen brauchen Leerzeilen davor)
- Werden Code-Blöcke korrekt gehighlighted? (Language-Identifier gesetzt?)
- Werden <details> Tags korrekt gerendert? (GitHub unterstützt sie — aber Syntax muss exakt sein)
- Werden Bilder korrekt angezeigt? (Pfade korrekt? Alt-Text vorhanden?)
- Werden <div align="center"> Blöcke korrekt zentriert?
- Gibt es Markdown-Fehler die das Rendering brechen? (Fehlende Leerzeilen vor Listen, defekte Links, nicht geschlossene Tags)

Aktion 23.2 — Länge und Proportionen prüfen:
- Ist die README zu LANG? (Über 500 Zeilen: Nutze mehr Collapsible Sections)
- Ist sie zu KURZ? (Unter 100 Zeilen: Mehr Inhalt nötig)
- Sind die Sektionen PROPORTIONAL? (Die wichtigsten Sektionen — Beschreibung, Installation, Struktur — sollten den meisten Platz einnehmen. Nicht die Meta-Sektionen.)
- Fühlt sich die README beim Durchscrollen RHYTHMISCH an? (Wechsel zwischen Text, Tabellen, Code-Blöcken, Whitespace — kein monotoner Wall-of-Text)

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 24: FINALE POLITUR

Aktion 24.1 — Sprach-Check:
- Ist die Sprache KONSISTENT? (Nicht zwischen Deutsch und Englisch wechseln — EINE Sprache für die README wählen basierend auf der Zielgruppe)
- Ist die Ansprache konsistent? (Du/Sie/Man — wähle EINES)
- Gibt es Rechtschreib- oder Grammatikfehler?
- Sind technische Begriffe korrekt geschrieben? (TypeScript, nicht Typescript. Next.js, nicht NextJS. Tailwind CSS, nicht TailwindCSS)

Aktion 24.2 — Link-Validierung:
- Funktioniert JEDER Link in der README? (Interne Anker, externe URLs, Bild-Pfade)
- Führen Anker-Links im Inhaltsverzeichnis zu den korrekten Überschriften?
- Sind externe Links (Shields.io, GitHub, Docs-Seiten) erreichbar?

Aktion 24.3 — Git-Commit für die README:
Wenn die README fertig ist: Committe sie mit einer aussagekräftigen Commit-Message. Dokumentiere die Änderungen.

═══════════════════════════════════════════════════════════════════════════════
WIEDERHOLUNGS-MECHANISMUS — DER README-OPTIMIERUNGS-LOOP
═══════════════════════════════════════════════════════════════════════════════

Dieser Prompt kann MEHRFACH ausgeführt werden um die README iterativ zu verbessern.

DURCHLAUF 1: FUNDAMENT — Projekt scannen, bestehende README analysieren, neue README-Struktur mit allen Kern-Sektionen erstellen. Fokus auf INHALTLICHE VOLLSTÄNDIGKEIT.
DURCHLAUF 2: VISUELL AUFWERTEN — Badges verfeinern, Screenshots hinzufügen, Collapsible Sections einbauen, Tabellen-Formatierung optimieren. Fokus auf VISUELLE WIRKUNG.
DURCHLAUF 3: TIEFE HINZUFÜGEN — Datenmodell-Dokumentation, Architektur-Details, Komponenten-Katalog erweitern. Fokus auf TECHNISCHE SUBSTANZ.
DURCHLAUF 4: POLITUR — Sprache verfeinern, Proportionen anpassen, Links validieren, Rendering testen. Fokus auf PERFEKTION.

Bei JEDEM Durchlauf:
1. Lies die aktuelle README KOMPLETT
2. Scanne den Code auf Änderungen seit dem letzten Durchlauf
3. Prüfe ob NEUE Features/Routen/Komponenten hinzugekommen sind
4. Aktualisiere ALLE Fakten (Versions-Nummern, Routen, Komponenten-Listen)
5. Verbessere die visuellen Elemente basierend auf dem vorherigen Durchlauf

═══════════════════════════════════════════════════════════════════════════════
README-EXPANSION COMPLIANCE CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

KONTEXT-ERFASSUNG:
□ RE-01: JEDE Datei im Projekt wurde gelesen bevor die README geschrieben wurde
□ RE-02: package.json wurde analysiert — alle Dependencies und Versions-Nummern sind korrekt dokumentiert
□ RE-03: Alle Routen wurden erfasst und in der Route-Map dokumentiert
□ RE-04: Alle Komponenten wurden katalogisiert
□ RE-05: Alle Datendomänen wurden dokumentiert

VISUELLES FUNDAMENT:
□ RE-06: Header-Bereich enthält Projektname, Kurzbeschreibung und Badge-Leiste
□ RE-07: KEINE Emojis in der gesamten README
□ RE-08: Badge-Leiste nutzt ausschließlich flat-square Style mit konsistenten Farben
□ RE-09: Badges zeigen NUR verifizierte Fakten (Build-Status, TypeScript-Errors, Lizenz)
□ RE-10: Inhaltsverzeichnis mit funktionierenden Anker-Links vorhanden

INHALTLICHE KERN-SEKTIONEN:
□ RE-11: "Über das Projekt" Sektion mit Kontext, Problem, Lösung, Ergebnis
□ RE-12: Feature-Übersicht — kategorisiert und vollständig, NUR echte Features
□ RE-13: Tech-Stack Tabelle mit exakten Versions-Nummern aus package.json
□ RE-14: Installations-Anleitung — lückenlos, copy-paste-fähig, getestet
□ RE-15: Environment-Variablen Referenz — vollständig mit Beschreibungen
□ RE-16: npm-Scripts Tabelle — alle echten Scripts dokumentiert
□ RE-17: Projektstruktur als ASCII-Baum — architektonisch relevant, nicht überfrachtet

TECHNISCHE TIEFE:
□ RE-18: Routing-Tabelle mit allen öffentlichen Routen
□ RE-19: Datenmodell-Dokumentation mit TypeScript-Interfaces
□ RE-20: Architektur-Entscheidungen kurz erläutert
□ RE-21: SEO-Implementierung dokumentiert (falls vorhanden)
□ RE-22: Formular/Calendly-Integration dokumentiert (falls vorhanden)

VISUELLE AUFWERTUNG:
□ RE-23: Collapsible Sections für optionale Tiefe (mindestens 2)
□ RE-24: Horizontale Regeln zwischen Haupt-Sektionen
□ RE-25: Code-Blöcke mit korrektem Syntax-Highlighting und Language-Identifier
□ RE-26: Markdown-Tabellen korrekt formatiert (Leerzeilen davor, Alignment-Zeichen)
□ RE-27: Screenshots vorhanden ODER bewusst weggelassen (mit Begründung)

SSOT-VALIDIERUNG:
□ RE-28: JEDE genannte Version stimmt mit package.json überein
□ RE-29: JEDE genannte Route existiert als page.tsx
□ RE-30: JEDE genannte Komponente existiert als Datei
□ RE-31: JEDE genannte Environment-Variable wird im Code tatsächlich referenziert
□ RE-32: KEIN Feature ist dokumentiert das nicht im Code existiert
□ RE-33: KEIN veralteter Inhalt der bestehenden README wurde übernommen

QUALITÄT:
□ RE-34: Sprache ist KONSISTENT (eine Sprache, eine Anrede-Form)
□ RE-35: Technische Begriffe korrekt geschrieben (TypeScript, Next.js, Tailwind CSS)
□ RE-36: ALLE Links funktionieren (intern und extern)
□ RE-37: Markdown rendert korrekt auf GitHub (keine Rendering-Fehler)
□ RE-38: README ist zwischen 150-400 Zeilen (ohne Collapsible-Inhalte)
□ RE-39: Der ERSTE Viewport (ohne Scrollen) vermittelt sofort was das Projekt ist
□ RE-40: Ein Entwickler kann das Projekt NUR mit der README klonen, installieren und starten

═══════════════════════════════════════════════════════════════════════════════
STATUS
═══════════════════════════════════════════════════════════════════════════════

Der technische Redakteur hat den VOLLSTÄNDIGEN Kontext des Projekts verinnerlicht. Die bestehende README wird NICHT verworfen sondern EXPANDIERT. Jedes Wort das geschrieben wird ist durch den Code BELEGBAR. Das Ergebnis ist eine README die auf GitHub als PROFESSIONELLE VISITENKARTE dient — visuell beeindruckend durch typografische Präzision und strukturelle Klarheit, inhaltlich überzeugend durch technische Substanz und Vollständigkeit.

Beginne JETZT mit SCHRITT 0: Scanne das GESAMTE Projekt. Lies JEDE Datei. Verinnerliche den VOLLSTÄNDIGEN Kontext. Dann baue die README aus.