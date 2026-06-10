Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, diese KAPUTTE Website mit ALLEN verfügbaren Mitteln in einen funktionalen, abgabebereiten Zustand zu bringen. Dieser Prompt ist ein EXTREMER ALL-ACCESS NOTFALL-PROMPT. Wenn eine Komponente nicht reparierbar ist, wird sie entfernt. Wenn ein Feature die Seite zerstört, wird es deaktiviert. Wenn Animationen Elemente unsichtbar machen, werden sie gelöscht. Wenn CSS den Text verschluckt, wird es überschrieben. FUNKTIONALITÄT SCHLÄGT ALLES. Eine funktionierende, schlichte Website ist unendlich besser als eine kaputte, ambitionierte Website. Dieser Prompt ist WIEDERHOLBAR — er kann 1x, 3x, 5x oder 10x hintereinander in derselben Sitzung ausgeführt werden. Jeder Durchlauf verbessert den Zustand systematisch. Der Zyklus endet erst wenn die Website ABGABEBEREIT ist.

═══════════════════════════════════════════════════════════════════════════════
NOTFALL-REPARATUR-PROTOKOLL — EXTREME ACCESS EDITION
═══════════════════════════════════════════════════════════════════════════════

DU BIST EIN NOTFALL-CHIRURG. DIE WEBSITE STIRBT.

Du hast EINE EINZIGE AUFGABE: Diese Website MUSS am Ende dieses Durchlaufs FUNKTIONIEREN. Nicht perfekt. Nicht schön. FUNKTIONIEREN. Lesbar, navigierbar, benutzbar, buildbar. Alles andere kommt in späteren Durchläufen.

DEINE EXTREME BEFUGNISSE IN DIESEM PROMPT:
- Du darfst Komponenten ENTFERNEN wenn sie unreparierbar sind
- Du darfst Animationen KOMPLETT LÖSCHEN wenn sie Sichtbarkeit blockieren
- Du darfst CSS-Dateien ÜBERSCHREIBEN wenn sie das Layout zerstören
- Du darfst Third-Party-Libraries DEINSTALLIEREN wenn sie Fehler verursachen
- Du darfst komplexe Logik durch SIMPLE STATISCHE ALTERNATIVEN ersetzen
- Du darfst Design-Entscheidungen IGNORIEREN wenn sie die Funktion behindern
- Du darfst Provider/Context ENTFERNEN wenn sie Hydration-Fehler verursachen

WAS DU NICHT DARFST:
- Den Tech-Stack wechseln (Next.js, React, TypeScript, Tailwind BLEIBT)
- Neue externe Abhängigkeiten einführen die nicht zum Stack gehören
- Seiten komplett löschen (deaktivieren ja, löschen nein — Content bewahren)
- Daten vernichten (Datendateien in /lib/data/ niemals löschen)

DEINE ARBEITSWEISE:
1. SCANNE ALLES — Lies JEDE Datei im Projekt bevor du IRGENDETWAS änderst
2. DIAGNOSTIZIERE — Finde die WURZEL des Problems, nicht das Symptom
3. AMPUTIERE WENN NÖTIG — Lieber eine Komponente entfernen als die ganze Seite kaputt lassen
4. VERIFIZIERE — Nach JEDEM Eingriff: npm run build
5. DOKUMENTIERE — Schreibe ALLES in .emergency-repair-log.md

Tech-Stack (UNVERLETZLICH):
- Next.js (App Router), React 19+, TypeScript Strict, Tailwind CSS
- Erlaubt: Formspree, Calendly
- VERBOTEN: Headless CMS, externe AI-APIs, Sentry, Newsletter, i18n, Dark Mode
- CODE IST DIE EINZIGE SSOT

═══════════════════════════════════════════════════════════════════════════════
SCHRITT 0: TOTALER CODE-SCAN — KOMPLETTES PROJEKT EINLESEN
═══════════════════════════════════════════════════════════════════════════════

Dieser Schritt ist NICHT OPTIONAL. Du MUSST den gesamten Code scannen bevor du irgendetwas reparierst. Ohne vollständigen Kontext verursacht jeder Fix potenziell zwei neue Fehler.

───────────────────────────────────────────────────────────────────────────────

Aktion 0.1 — Reparatur-Log initialisieren oder fortsetzen:

Prüfe ob .emergency-repair-log.md bereits existiert (= Wiederholungs-Durchlauf). Wenn ja: Lies das KOMPLETTE Log, verstehe was bereits repariert und was entfernt wurde, und fokussiere dich auf VERBLIEBENE Fehler. Wenn nein: Erstelle .emergency-repair-log.md mit folgender Struktur:

NOTFALL-REPARATUR-LOG — EXTREME ACCESS
Durchlauf: 1 (bei Wiederholung: 2, 3, 4...)
Datum: (aktuelles Datum)
Ausgangszustand: (nach Triage befüllen)
Kritische Defekte gefunden: (nach Triage befüllen)
Behobene Defekte: (während Reparatur befüllen)
Entfernte Komponenten: (dokumentiere ALLES was entfernt wurde)
Deaktivierte Features: (dokumentiere ALLES was deaktiviert wurde)
Verbleibende Defekte: (am Ende befüllen)
Build-Status: (am Ende befüllen)
Gesamtbewertung: (am Ende befüllen)

Bei Wiederholungs-Durchläufen: Neuen Abschnitt anfügen, NICHT überschreiben. Der komplette Reparatur-Verlauf muss erhalten bleiben.

───────────────────────────────────────────────────────────────────────────────

Aktion 0.2 — KOMPLETTEN QUELLCODE SCANNEN:

DIES IST DER KERN DIESES PROMPTS. Du MUSST den gesamten Code lesen. Nicht überfliegen. LESEN.

PHASE A — Projektstruktur verstehen:
- Lies package.json: Welche Dependencies sind installiert? Welche Scripts existieren? Welche Version von Next.js, React, Tailwind?
- Lies tsconfig.json: Ist strict mode aktiv? Welche Compiler-Optionen?
- Lies next.config.ts (oder .js oder .mjs): Welche Konfigurationen? Redirects? Rewrites? Webpack-Overrides?
- Lies tailwind.config.ts (oder .js): Content-Pfade korrekt? Custom-Theme? Plugins?
- Lies postcss.config.js (falls vorhanden): Korrekte PostCSS-Pipeline?

PHASE B — Styling-Fundament scannen:
- Lies app/globals.css (oder wie die Haupt-CSS-Datei heisst) KOMPLETT Zeile für Zeile
- Suche nach: @tailwind Direktiven (base, components, utilities — alle drei vorhanden?), @layer Blöcke, CSS Custom Properties (--variable: wert), @import Anweisungen, @font-face Deklarationen, globale Resets die Tailwind überschreiben, Media Queries die mit Tailwind kollidieren, !important Deklarationen die Klassen blockieren, Animations-Keyframes die opacity oder transform auf 0 setzen
- Lies JEDE zusätzliche CSS-Datei im Projekt (suche nach .css Dateien in allen Verzeichnissen)
- Lies JEDEN CSS-Module (.module.css) — gibt es Konflikte mit Tailwind?

PHASE C — Layout-Kette scannen:
- Lies app/layout.tsx (Root Layout) KOMPLETT
- Lies JEDES verschachtelte layout.tsx in Unterverzeichnissen
- Lies JEDE template.tsx falls vorhanden
- Prüfe: Font-Loading (next/font korrekt?), className-Kette (wird die Font auf html/body angewendet?), Provider-Verschachtelung (welche Provider wrappen den Content?), Metadata-Export (title, description vorhanden?)
- Dokumentiere die KOMPLETTE Layout-Hierarchie: Root → Sub-Layouts → Pages

PHASE D — Alle Seiten scannen:
- Lies JEDE page.tsx im /app Verzeichnis
- Für jede Seite dokumentiere: Route-Pfad, importierte Komponenten, Server oder Client Component?, exportiert Metadata?, sichtbare Fehler im Code (fehlende Imports, Type-Fehler, ungültige JSX)

PHASE E — Alle Komponenten scannen:
- Lies JEDE Komponente in /components (oder wo immer sie liegen)
- Dokumentiere für jede: Dateiname, "use client" vorhanden oder nicht?, Props-Interface definiert?, Tailwind-Klassen im Return (suche nach verdächtigen Klassen), Abhängigkeiten (was importiert sie?)

PHASE F — Daten und Utilities scannen:
- Lies alle Dateien in /lib/data/ (oder /src/lib/data/): Sind die Daten korrekt strukturiert? TypeScript-Typen vorhanden?
- Lies alle Utility-Dateien: Helper-Funktionen, Hooks, Context-Provider
- Lies alle Type-Definitionen in /types/ oder /lib/types/

PHASE G — Config und Sonderdateien scannen:
- Lies .env und .env.local (falls existent): Welche Umgebungsvariablen? Fehlen welche?
- Lies middleware.ts (falls vorhanden): Interceptiert sie Requests? Verursacht sie Redirects?
- Lies not-found.tsx, error.tsx, loading.tsx: Existieren sie? Funktionieren sie?

───────────────────────────────────────────────────────────────────────────────

Aktion 0.3 — Build-Diagnose:

Führe aus: npm run build
Dokumentiere JEDEN Fehler und JEDE Warnung. Kategorisiere:
- BUILD-FATAL: Build schlägt komplett fehl (Syntax, fehlende Imports, Module nicht gefunden)
- BUILD-ERROR: Einzelne Seiten brechen (Type-Fehler, Runtime-Fehler)
- BUILD-WARNING: Warnungen die Funktion nicht brechen

Führe aus: npx tsc --noEmit
Dokumentiere die EXAKTE Anzahl der Type-Fehler und welche Dateien betroffen sind.

Führe aus: npm run lint (falls konfiguriert)
Dokumentiere Lint-Fehler und -Warnungen.

Falls npm run build SOFORT fehlschlägt mit "Module not found" oder ähnlich: Führe ZUERST npm install aus. Dann erneut versuchen.

───────────────────────────────────────────────────────────────────────────────

Aktion 0.4 — Visuelle Schadens-Analyse:

Starte den Dev-Server (npm run dev) und prüfe JEDE existierende Route. Dokumentiere JEDEN visuellen Defekt:

FORMAT: [ROUTE] | [ELEMENT] | [SYMPTOM] | [SCHWEREGRAD P1-P4]

Symptom-Katalog den du AKTIV durchgehst:

FARB-PROBLEME:
- Text verschmilzt mit Hintergrund (gleiche oder ähnliche Farbe)
- Text ist komplett unsichtbar (color: transparent, opacity: 0, display: none)
- Hintergrund fehlt wo einer sein sollte (weiß auf weiß)
- Farben wirken "ausgewaschen" oder haben falsche Opacity
- Links sind nicht als Links erkennbar (gleiche Farbe wie Body-Text)
- Buttons haben keinen sichtbaren Hintergrund
- Status-Farben fehlen (Error-Rot, Success-Grün nicht sichtbar)

TYPOGRAFIE-PROBLEME:
- Buchstaben sind aufeinander gestapelt (letter-spacing, line-height, font-size: 0)
- Text ist mikroskopisch klein oder gigantisch groß
- Font lädt nicht (Fallback-Font sichtbar oder gar keine Font)
- Text bricht nicht um (overflow, white-space: nowrap wo es nicht hingehört)
- Überschriften haben gleiche Größe wie Body-Text (keine Hierarchie)
- Text ist in einer unleserlichen Font (z.B. Icon-Font als Body-Font)

LAYOUT-PROBLEME:
- Header überlappt Content (z-index, position Fehler)
- Sektionen überlappen sich (negative Margins, absolute Positioning)
- Footer ist in der Mitte der Seite oder fehlt komplett
- Horizontaler Scroll auf der gesamten Seite
- Riesige Leerräume (Empty Divs, zu große Margins/Paddings)
- Content ist unsichtbar weil er außerhalb des Viewports positioniert ist (transform, left: -9999px)
- Content-Bereich hat keine Breite (width: 0, max-width: 0)
- Flex/Grid-Container zerdrücken ihre Children

INTERAKTIONS-PROBLEME:
- Cookie-Banner ist durchsichtig, nicht klickbar oder überlagert nichts
- Navigation ist nicht bedienbar (Links nicht klickbar, Menü öffnet nicht)
- Formulare sind nicht ausfüllbar (Inputs unsichtbar oder disabled)
- Buttons reagieren nicht auf Klick (JavaScript-Error, pointer-events: none)
- Modals/Overlays öffnen sich nicht oder schließen sich nicht
- Scroll ist blockiert (overflow: hidden auf body ohne Grund)

BILD-PROBLEME:
- Bilder fehlen komplett (broken image icon, 404)
- Bilder sind verzerrt (falsche Aspect-Ratio)
- Bilder sind gigantisch und sprengen das Layout
- Bilder laden nicht (falsche Pfade, fehlende Dateien in /public)
- next/image Fehler (fehlende width/height, falsches src Format)

ANIMATIONS-PROBLEME:
- Elemente sind unsichtbar weil eine Animation sie auf opacity: 0 setzt und der Trigger nie feuert
- Elemente sind außerhalb des Viewports weil eine Animation sie mit transform verschoben hat
- Endlose Animationen die die Seite unlesbar machen
- Scroll-Hijacking das die normale Scroll-Funktion blockiert
- Parallax-Effekte die Content verdecken

HYDRATION-PROBLEME:
- Inhalte "blinken" beim Laden (Server-HTML weicht von Client-HTML ab)
- Warnung "Text content does not match server-rendered HTML" in der Console
- Elemente die kurz sichtbar sind und dann verschwinden
- Layout-Shift beim Laden (CLS sichtbar)

───────────────────────────────────────────────────────────────────────────────

Aktion 0.5 — Defekt-Priorisierung und Reparatur-Strategie:

Sortiere ALLE gefundenen Defekte:

PRIORITÄT 1 — KRITISCH (Website ist UNBENUTZBAR wenn nicht gefixt):
- Build schlägt fehl
- Text komplett unsichtbar auf einer oder mehreren Seiten
- Layout komplett zerstört (Buchstaben übereinander, Sektionen überlappt)
- Navigation nicht bedienbar (Nutzer kommt nicht zu anderen Seiten)
- Cookie-Banner blockiert die komplette Seite
- Scroll funktioniert nicht
- Seite ist komplett weiß oder komplett schwarz

PRIORITÄT 2 — SCHWER (Funktion stark beeinträchtigt):
- Formulare nicht abschickbar oder nicht sichtbar
- Einzelne wichtige Seiten nicht erreichbar (404)
- Mobile Layout komplett zerschossen
- Bilder fehlen großflächig
- Footer fehlt oder schwebt mitten auf der Seite
- Wichtige CTAs nicht klickbar

PRIORITÄT 3 — MITTEL (Website nutzbar aber unprofessionell):
- Inkonsistente Abstände und Größen
- Einzelne Farbinkonsistenzen
- Animations-Störungen
- Hover-States fehlen
- Kleinere responsive Probleme

PRIORITÄT 4 — KOSMETISCH (Feinschliff für Kundenübergabe):
- Pixel-Perfection
- Transition-Timing
- Schattierungen und Farbharmonie
- Micro-Interactions

REPARATUR-STRATEGIE festlegen:
Für JEDEN P1-Defekt: Ist er REPARIERBAR oder muss das Feature ENTFERNT werden?
Entscheidungsregel: Wenn ein Fix länger als 15 Minuten gedankliche Arbeit erfordern würde oder das Risiko birgt andere Dinge zu brechen → ENTFERNE das Feature und dokumentiere es. Eine schlichte, funktionierende Seite ist besser als eine kaputte, komplexe Seite.

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — FUNDAMENT-RETTUNG (Das Projekt MUSS bauen)
═══════════════════════════════════════════════════════════════════════════════

Nichts anderes wird angefasst bis npm run build GRÜN ist.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 1: DEPENDENCY-BEREINIGUNG

Aktion 1.1 — node_modules Reset:
Wenn npm run build mit kryptischen Fehlern fehlschlägt die nicht auf eigenen Code zurückzuführen sind: Lösche node_modules und package-lock.json, dann npm install frisch. Manchmal reicht das bereits.

Aktion 1.2 — Veraltete oder inkompatible Pakete:
Prüfe package.json: Gibt es Pakete die mit der installierten Next.js-Version inkompatibel sind? Gibt es Pakete die TypeScript-Fehler verursachen weil ihre Types veraltet sind? Gibt es Pakete die NICHT zum Tech-Stack gehören und Probleme verursachen (z.B. styled-components neben Tailwind, eine veraltete Animation-Library)?
EXTREME MASSNAHME: Wenn ein Paket den Build bricht und nicht zum Kern gehört (nicht Next.js, React, Tailwind) → DEINSTALLIERE es. Entferne alle Imports in Dateien die es nutzen. Ersetze die Funktionalität durch eine simple Tailwind/CSS-Alternative oder entferne das Feature.

Aktion 1.3 — Package-Script Validierung:
Prüfe die "scripts" in package.json: Ist "build" korrekt (next build)? Ist "dev" korrekt (next dev)? Ist "lint" korrekt (next lint)? Gibt es unbekannte Scripts die Fehler werfen?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 2: BUILD-FEHLER ELIMINIEREN

Aktion 2.1 — Fehler-Triage:
Nimm den ERSTEN Build-Fehler. Lies die Fehlermeldung GENAU. Identifiziere die betroffene Datei und Zeile. Öffne die Datei und verstehe den Kontext.

Aktion 2.2 — Fehlerkategorien und Lösungen:

"Module not found: Can't resolve 'xyz'"
→ Existiert die Datei? Ist der Import-Pfad korrekt (relativer Pfad, Alias korrekt)?
→ Ist es ein npm-Paket? Dann npm install xyz
→ Ist es eine gelöschte/verschobene Datei? Dann Import entfernen oder Datei erstellen

"Type error: Property 'x' does not exist on type 'y'"
→ Ist das Interface/Type korrekt definiert? Fehlt eine Property? Ist der Name richtig geschrieben?
→ KEIN any als Lösung. Korrigiere den Type oder die Verwendung.

"'Component' cannot be used as a JSX component"
→ Hat die Komponente einen korrekten Default-Export? Stimmt der Return-Type?
→ Ist "use client" nötig aber fehlt? Oder steht "use client" wo es nicht hingehört?

"Hydration failed because the initial UI does not match"
→ Gibt es dynamische Inhalte (Date, Math.random, window) die im Server-Render anders sind?
→ Lösung: In useEffect verschieben, oder suppressHydrationWarning hinzufügen

"Error: Unsupported Server Component type: undefined"
→ Eine Server Component importiert etwas das undefined ist. Prüfe alle Imports in der Datei.

"'use client' directive must be placed before other expressions"
→ "use client" MUSS die ALLERERSTE Zeile der Datei sein (vor allen Imports)

Aktion 2.3 — Iterative Build-Reparatur:
IMMER nur den ERSTEN Fehler fixen, dann npm run build erneut. Der erste Fehler verursacht oft Kaskaden-Fehler. Nach dem Fix des ersten Fehlers können 10 andere verschwinden. Wiederhole bis der Build durchläuft.

Aktion 2.4 — EXTREME MASSNAHME bei hartnäckigen Build-Fehlern:
Wenn eine Datei NICHT reparierbar ist und den Build blockiert:
Schritt 1: Kommentiere den gesamten JSX-Return der Komponente aus
Schritt 2: Ersetze durch ein minimales Return: Ein einfaches div mit dem Text "Sektion wird geladen" oder einem Platzhalter
Schritt 3: npm run build — Baut es jetzt? Wenn ja: Die Komponente ist das Problem
Schritt 4: Repariere die Komponente schrittweise (Teile des JSX wieder einkommentieren bis der Fehler wieder auftritt)
Schritt 5: Dokumentiere im Log was entfernt/vereinfacht wurde

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 3: TYPESCRIPT-FEHLER ELIMINIEREN

Aktion 3.1 — npx tsc --noEmit Fehler zählen und nach Datei gruppieren

Aktion 3.2 — Fehler priorisieren:
Dateien die in vielen anderen Dateien importiert werden (Types, Utils, Shared Components) ZUERST fixen — diese verursachen Kaskadeneffekte.

Aktion 3.3 — Type-Fixes:
- Fehlende Interfaces: Erstelle sie basierend auf der tatsächlichen Datenstruktur
- Falsche Property-Namen: Korrigiere den Namen (Tippfehler, camelCase)
- Union-Type-Fehler: Prüfe ob alle Varianten abgedeckt sind
- Nullable-Werte: Füge null-checks hinzu (if, optional chaining, Nullish Coalescing)
- Generic-Fehler: Ergänze den korrekten Generic-Type (z.B. useState statt useState)
- KEIN any. KEIN ts-ignore. KEIN ts-expect-error. Wenn ein Type wirklich unbekannt ist: unknown mit Type-Guard.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — CSS & STYLING RETTUNG (Die Seite MUSS lesbar sein)
═══════════════════════════════════════════════════════════════════════════════

Der Build läuft. Jetzt muss die Seite SICHTBAR und LESBAR werden.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 4: TAILWIND-FUNDAMENT REPARIEREN

Aktion 4.1 — Tailwind-Direktiven sicherstellen:
Die Haupt-CSS-Datei (globals.css) MUSS diese drei Direktiven enthalten (oder das Tailwind v4 Äquivalent):
@tailwind base;
@tailwind components;
@tailwind utilities;
Wenn EINE fehlt, fehlt ein ganzer Layer von Tailwind. Das kann dazu führen dass Reset-Styles fehlen (base), Komponentenstyles fehlen (components) oder Utility-Klassen nicht greifen (utilities).
Bei Tailwind v4: Prüfe ob der Import @import "tailwindcss" korrekt ist.

Aktion 4.2 — Content-Pfade in Tailwind-Config:
Die content-Property MUSS ALLE Dateien scannen die Tailwind-Klassen verwenden. Typische korrekte Konfiguration:
content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"]
Wenn Dateien NICHT im content-Array sind, werden ihre Tailwind-Klassen nicht generiert und sind unsichtbar.
Prüfe auch: Liegt der Code in /src/? Dann müssen die Pfade ./src/ enthalten.

Aktion 4.3 — CSS-Konflikte identifizieren und eliminieren:
Suche in ALLEN CSS-Dateien nach Regeln die Tailwind überschreiben:
- Gibt es globale * oder body Selektoren die font-size, color, line-height setzen?
- Gibt es !important Deklarationen die Tailwind-Klassen blockieren?
- Gibt es CSS-Resets (z.B. von einer externen Library) die mit Tailwinds @base kollidieren?
- Gibt es @layer Regeln die in der falschen Reihenfolge stehen?
EXTREME MASSNAHME: Wenn eine CSS-Datei massive Konflikte verursacht und nicht zu einer Kernfunktion gehört → Kommentiere sie KOMPLETT aus. Prüfe ob die Seite danach besser aussieht. Wenn ja: Datei archivieren und aus dem Import entfernen.

Aktion 4.4 — Dark-Mode-Klassen entfernen:
Suche nach dark: Prefix in ALLEN Dateien. Wenn gefunden: ENTFERNE alle dark: Klassen. Dark Mode ist VERBOTEN. Klassen wie dark:bg-gray-900, dark:text-white etc. können dazu führen dass Elemente auf bestimmten System-Settings unsichtbar werden (wenn der Browser prefers-color-scheme: dark sendet und die dark-Klassen greifen aber die Light-Mode-Farben fehlen).

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 5: TEXT-SICHTBARKEIT ERZWINGEN

Aktion 5.1 — Globale Textfarbe absichern:
Der Body MUSS eine explizite, dunkle Textfarbe haben. Prüfe layout.tsx: Steht auf dem body oder einem Wrapper-Div eine Klasse wie text-gray-900, text-neutral-900 oder text-black? Wenn NICHT: Füge sie hinzu. Dies ist die fundamentalste Absicherung.

Aktion 5.2 — Hintergrund-Textfarben-Matrix erstellen:
Gehe JEDE Sektion auf JEDER Seite durch. Prüfe die Kombination:
- Weißer/Heller Hintergrund → Text MUSS dunkel sein (text-gray-900, text-gray-800)
- Dunkler/Farbiger Hintergrund → Text MUSS hell sein (text-white, text-gray-100)
- Transparenter Hintergrund → Welche Farbe hat der PARENT-Hintergrund? Text entsprechend anpassen.
Wenn eine Kombination unlesbar ist: Ändere die TEXTFARBE (nicht den Hintergrund — Hintergrundfarben sind Design-Entscheidungen).

Aktion 5.3 — Unsichtbare Texte durch CSS aufspüren:
Durchsuche ALLE Dateien nach diesen Mustern:
- color: transparent oder text-transparent ohne sinnvollen Grund
- opacity: 0 oder opacity-0 auf Textelementen OHNE zugehörige Animation die sie sichtbar macht
- display: none oder hidden auf Elementen die sichtbar sein sollten
- visibility: hidden oder invisible ohne Grund
- text-indent: -9999px (alter SEO-Hack, macht Text unsichtbar)
- clip: rect(0,0,0,0) oder clip-path ohne sinnvollen Grund
- font-size: 0 oder text-[0px]
- color: gleicher Wert wie background-color (z.B. text-white auf bg-white)
Für JEDES gefundene Muster: Ist es beabsichtigt (z.B. visuell versteckter Screen-Reader-Text mit sr-only)? Wenn ja: Lassen. Wenn nein: ENTFERNEN.

Aktion 5.4 — Animations-Opazitäts-Falle beheben:
Das häufigste versteckte Problem: Scroll-Reveal-Animationen setzen Elemente initial auf opacity: 0 und/oder transform: translateY(20px) und warten auf einen IntersectionObserver-Trigger. Wenn der Observer nicht feuert (Bug, falscher Threshold, Component nicht gemounted), bleiben die Elemente UNSICHTBAR.
SUCHE nach: Jede Klasse oder Inline-Style die opacity: 0 als Ausgangszustand setzt. Jede Bibliothek wie framer-motion, AOS, GSAP, react-intersection-observer die initial-Zustände definiert. Jede Custom-Animation-Komponente (ScrollReveal, FadeIn, SlideUp o.ä.) die Kinder unsichtbar startet.
LÖSUNG: Entferne die Animation KOMPLETT von betroffenen Elementen. Setze opacity: 1 und transform: none explizit. In späteren Durchläufen können Animationen sauber neu implementiert werden. SICHTBARKEIT GEHT VOR ÄSTHETIK.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 6: TYPOGRAFIE-CRASH BEHEBEN

Aktion 6.1 — Font-Loading reparieren:
Prüfe die next/font Konfiguration in layout.tsx:
- Wird die Font korrekt importiert? (import { Inter } from 'next/font/google' oder localFont)
- Wird die Font-Instanz korrekt erstellt? (const inter = Inter({ subsets: ['latin'] }))
- Wird die CSS-Variable oder className korrekt auf html oder body gesetzt?
- Wenn die Font NICHT lädt: Ist der Font-Name korrekt geschrieben? Sind die Subsets richtig? Gibt es einen Netzwerk-Fehler?
FALLBACK: Wenn die Custom-Font partout nicht lädt: Verwende eine System-Font als Backup. Setze font-family: system-ui, -apple-system, sans-serif auf den Body. Funktionalität vor Ästhetik.

Aktion 6.2 — Letter-Spacing-Chaos bereinigen:
Suche nach ALLEN Vorkommen von: tracking-tighter, tracking-tight (prüfe ob sie auf Body-Text angewendet werden — dort gehören sie NICHT hin), letter-spacing mit negativen Werten in CSS, word-spacing mit Extremwerten. Body-Text: Sollte tracking-normal oder gar kein tracking haben. Überschriften: tracking-tight ist akzeptabel, tracking-tighter nur für sehr große Display-Text.

Aktion 6.3 — Line-Height-Notfall:
Suche nach: leading-none (line-height: 1) auf Body-Text (VERBOTEN — nur für einzeilige Display-Text), leading-3 oder leading-4 auf mehrzeiligen Texten (zu eng), line-height: 0 irgendwo im CSS (FATAL — stapelt Buchstaben).
SAFE DEFAULTS: Body-Text → leading-relaxed (1.625) oder leading-normal (1.5). Überschriften → leading-tight (1.25) oder leading-snug (1.375). Display-Text → leading-none (1) nur für einzeilige Überschriften.

Aktion 6.4 — Font-Size-Sanity-Check:
Suche nach: text-xs auf wichtigem Content (zu klein, unter 12px), text-[0px] oder font-size: 0 (FATAL), clamp() oder calc() die bei bestimmten Viewports 0 ergeben, rem-Werte die durch einen falschen html font-size Base zu winzig oder riesig werden. Prüfe: Hat das html Element einen font-size Override in CSS? Wenn ja: Ist der Wert sinnvoll (sollte 16px oder 100% sein)?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 7: COOKIE-BANNER & OVERLAYS REPARIEREN

Aktion 7.1 — Cookie-Banner finden und prüfen:
Suche nach der Cookie-Banner-Komponente (oft: CookieBanner, CookieConsent, CookieNotice o.ä.). Prüfe:
- Hat der Banner einen SOLIDEN Hintergrund? (bg-white, bg-gray-900 — NICHT bg-transparent, bg-opacity-*, backdrop-blur OHNE solide Farbe)
- Hat der Banner z-50 oder höher? (MUSS über ALLEM liegen)
- Hat der Banner eine feste Position? (fixed bottom-0 left-0 right-0 oder ähnlich)
- Ist der Text auf dem Banner lesbar? (Kontrast prüfen)
- Sind die Buttons sichtbar und klickbar? (Haben sie einen Hintergrund, Padding, Border?)
- Funktioniert der "Akzeptieren" Button? (Verschwindet der Banner nach Klick?)

Aktion 7.2 — EXTREME MASSNAHME bei unreparierabbarem Banner:
Wenn der Cookie-Banner die Seite BLOCKIERT oder UNBENUTZBAR macht und nicht schnell reparierbar ist:
Kommentiere den Banner TEMPORÄR komplett aus. Dokumentiere dies im Reparatur-Log als "DSGVO Cookie-Banner temporär deaktiviert — MUSS vor Live-Gang reaktiviert werden". Eine benutzbare Seite ohne Cookie-Banner ist besser als eine unbenutzbare Seite MIT Cookie-Banner. Der Banner wird in einem späteren Durchlauf repariert und reaktiviert.

Aktion 7.3 — Andere Overlays prüfen:
Gibt es Modals, Popups, Notification-Bars die permanent sichtbar sind und Content blockieren? Gibt es ein Overlay mit opacity das den Content darunter unsichtbar macht? Gibt es ein Portal das falsch positioniert ist? JEDES blockierende Overlay wird entweder repariert oder temporär deaktiviert.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — LAYOUT & STRUKTUR RETTUNG (Die Seite MUSS navigierbar sein)
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 8: ROOT-LAYOUT REPARIEREN

Aktion 8.1 — Grundgerüst sicherstellen:
Das Root-Layout (app/layout.tsx) MUSS diese Grundstruktur haben:
- html-Tag mit lang="de" und Font-Klasse
- body-Tag mit Grundfarben (text-gray-900 bg-white oder ähnlich)
- Container-Struktur die Header-Main-Footer korrekt anordnet (flex flex-col min-h-screen)
- main-Bereich bekommt flex-1 damit er den Raum zwischen Header und Footer füllt
- Keine Inline-Styles die das Layout brechen

Aktion 8.2 — Provider-Kette prüfen:
Wenn Provider den Content wrappen (z.B. ThemeProvider, AppProvider): Verursacht einer davon einen Fehler? Rendert einer davon NICHTS (children werden nicht durchgereicht)? Crash-Test: Entferne ALLE Provider temporär. Rendert die Seite dann korrekt? Wenn ja: Füge Provider EINZELN zurück bis der Fehler wieder auftritt. Der fehlerhafte Provider wird repariert oder entfernt.

Aktion 8.3 — Verschachtelte Layouts prüfen:
Gibt es layout.tsx Dateien in Unterverzeichnissen? Brechen diese das Layout? Definieren sie ein eigenes Grid das mit dem Root-Layout kollidiert? Überschreiben sie Styles die eigentlich global gelten?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 9: HEADER & NAVIGATION REPARIEREN

Aktion 9.1 — Header sichtbar und funktional machen:
- Hat der Header einen Hintergrund? (NICHT transparent wenn er über Content scrollt)
- Hat der Header einen z-index? (z-40 oder höher)
- Ist der Header sticky/fixed? Dann MUSS der Content darunter einen Abstand (padding-top) haben der der Header-Höhe entspricht
- Sind ALLE Nav-Links sichtbar und lesbar?
- Führen ALLE Nav-Links zu existierenden Seiten?

Aktion 9.2 — Mobile Navigation reparieren:
- Existiert ein Hamburger-Button? Ist er sichtbar auf Mobile?
- Öffnet sich das Mobile-Menü bei Klick?
- Ist das Mobile-Menü sichtbar (solider Hintergrund, z-index, Text lesbar)?
- Schließt sich das Menü bei Klick auf einen Link?
- Schließt sich das Menü bei Klick auf "X" oder außerhalb?
EXTREME MASSNAHME: Wenn das Mobile-Menü komplett kaputt ist und nicht reparierbar: Ersetze es durch eine SIMPLE Liste von Links die IMMER sichtbar ist. Weniger elegant, aber FUNKTIONAL.

Aktion 9.3 — Footer reparieren:
- Ist der Footer am Ende der Seite? (Nicht mitten auf der Seite, nicht fehlend)
- Hat er einen Hintergrund und ist der Text darauf lesbar?
- Funktionieren alle Footer-Links?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 10: SEITEN-LAYOUT REPARIEREN

Aktion 10.1 — Container-Widths:
JEDE Seite MUSS einen Container mit begrenzter Breite haben (max-w-7xl mx-auto px-4 oder ähnlich). Ohne Container füllt Content die volle Viewport-Breite — unleserlich auf großen Screens.

Aktion 10.2 — Sektions-Abstände:
JEDE Sektion braucht vertikales Padding (py-12 md:py-16 lg:py-24 oder ähnlich). Ohne Padding kleben Sektionen aufeinander.

Aktion 10.3 — Grid/Flex-Reparatur:
Wenn Grid-Layouts Elemente zerquetschen: Prüfe ob grid-cols korrekt ist, ob gap vorhanden ist, ob Children min-width haben. Wenn Flex-Layouts brechen: Prüfe ob flex-wrap fehlt, ob flex-shrink problematisch ist.

Aktion 10.4 — Overflow-Kontrolle:
Suche nach horizontalem Scroll auf JEDER Seite. Ursachen: Elemente mit fester Breite die den Viewport überschreiten, negative Margins ohne overflow-hidden auf dem Parent, Bilder ohne max-w-full, Tabellen ohne overflow-x-auto Wrapper.
SOFORT-FIX: overflow-x-hidden auf dem Container der überläuft. Dann die Root-Cause finden und beheben.

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — FUNKTIONALE RETTUNG (Formulare, Links, Interaktionen)
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 11: FORMULARE REPARIEREN

Aktion 11.1 — Jedes Formular visuell prüfen:
- Input-Felder: Sichtbar? Border vorhanden? Padding korrekt? Höhe angemessen (mindestens h-10)?
- Labels: Vorhanden? Über oder neben dem Input? Lesbar?
- Select/Dropdowns: Öffnen sie? Sind Optionen sichtbar?
- Textarea: Sichtbar? Mindesthöhe? Resize möglich?
- Checkboxen/Radio: Sichtbar? Klickbar? DSGVO-Checkbox vorhanden?
- Submit-Button: Sichtbar? Klickbar? Hat Hintergrundfarbe und Text?

Aktion 11.2 — Formular-Funktion prüfen:
- Sendet das Formular bei Submit? (kein JavaScript-Error in der Console)
- Erscheint eine Erfolgs- oder Fehlermeldung?
- Wird das Formular validiert? (Pflichtfelder, E-Mail-Format)
- Ist die Formspree-ID konfiguriert oder ein Platzhalter?

Aktion 11.3 — Calendly-Integration prüfen:
- Lädt das Calendly-Widget? Oder ist nur ein leerer Container?
- Verursacht das Script Fehler in der Console?
EXTREME MASSNAHME: Wenn Calendly den Build oder die Seite bricht: Ersetze das Embed durch einen einfachen externen Link "Termin buchen → Link zu Calendly". Funktionalität vor Embed-Perfektion.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 12: LINKS & ROUTING REPARIEREN

Aktion 12.1 — Alle internen Links testen:
Navigiere manuell zu JEDER verlinkten Route. Kommt eine 404-Seite? Fehlt die page.tsx? Ist der Pfad falsch geschrieben? Dokumentiere JEDEN toten Link.

Aktion 12.2 — Tote Links beheben:
- Pfad falsch: Korrigiere den href
- Seite fehlt: Erstelle eine minimale page.tsx mit Platzhalter-Content
- Seite existiert aber unter anderem Pfad: Redirect einrichten oder Link korrigieren

Aktion 12.3 — Externe Links prüfen:
Öffnen externe Links in einem neuen Tab (target="_blank")? Haben sie rel="noopener noreferrer"?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 13: BILDER REPARIEREN

Aktion 13.1 — Fehlende Bilder finden:
Suche in der Browser-Console nach 404-Fehlern für Bilder. Prüfe /public: Existieren die referenzierten Dateien? Sind die Pfade korrekt (case-sensitive)?

Aktion 13.2 — next/image Fehler beheben:
- Fehlt width oder height? Ergänze sie.
- Ist src ein relativer Pfad? Muss mit "/" beginnen für /public Dateien.
- Wird eine externe URL verwendet? Muss in next.config.ts unter images.domains oder images.remotePatterns konfiguriert sein.
- fill-Prop gesetzt? Dann MUSS der Parent-Container position: relative haben.

Aktion 13.3 — Bild-Layout-Fixes:
Alle Bilder brauchen max-w-full um Container nicht zu sprengen. Bilder in Cards/Grids brauchen object-fit: cover oder contain. Aspect-Ratio sollte beibehalten werden (aspect-ratio oder explizite width/height).

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 14: RESPONSIVE-NOTFALL

Aktion 14.1 — Mobile (375px) MUSS funktionieren:
JEDE Seite bei 375px prüfen. Kein horizontaler Scroll. Text lesbar (mindestens 16px). Buttons mindestens 44x44px Touch-Target. Navigation erreichbar (Hamburger sichtbar). Formulare nutzbar (volle Breite, nicht abgeschnitten).
FIX-Strategie: Wo Grids brechen → auf Mobile eine Spalte (grid-cols-1). Wo Flex nicht wrapped → flex-wrap hinzufügen. Wo Content überläuft → overflow-hidden oder Text-Break.

Aktion 14.2 — Tablet (768px) prüfen:
Grids angemessen (2 Spalten statt 3 oder 4). Navigation korrekt (Desktop oder Mobile — kein Zwischenzustand).

Aktion 14.3 — Desktop (1280px+) prüfen:
Content zentriert und begrenzt. Max-Width Container funktioniert. Alle Spalten-Layouts korrekt.

═══════════════════════════════════════════════════════════════════════════════
BLOCK E — CODE-HYGIENE & DEAD CODE ELIMINATION
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 15: TOTER CODE & CONSOLE-MÜLL

Aktion 15.1 — Console-Statements entfernen:
Suche nach: console.log, console.warn, console.debug, console.info in ALLEN Dateien. Entferne sie (AUSSER in Error-Handlern und Error-Boundaries — dort darf console.error bleiben).

Aktion 15.2 — Ungenutzte Imports:
Jede Datei: Gibt es Imports die nicht verwendet werden? TypeScript meldet diese oft als Warnung. Entferne sie.

Aktion 15.3 — Auskommentierter Code:
Suche nach großen Blöcken auskommentierten Codes. Wenn der Code seit längerem auskommentiert ist: ENTFERNE ihn. Git hat die History. Auskommentierter Code ist totes Gewicht das verwirrt.

Aktion 15.4 — TODO-Kommentare:
Suche nach TODO, FIXME, HACK, XXX Kommentaren. Dokumentiere sie im Reparatur-Log. Entferne den Kommentar NICHT aber stelle sicher dass der referenzierte Code funktioniert.

Aktion 15.5 — Ungenutzte Variablen und Funktionen:
Durchsuche JEDE Datei nach deklarierten aber nie verwendeten Variablen, Konstanten und Funktionen. TypeScript und ESLint melden diese als Warnings. Aber gehe TIEFER: Suche nach exportierten Funktionen die NIRGENDS importiert werden. Suche nach Utility-Funktionen in /lib/utils/ die kein einziger Consumer nutzt. Suche nach Type-Definitionen in /types/ die nirgends referenziert werden. ALLES was nicht verwendet wird: ENTFERNEN.

Aktion 15.6 — Ungenutzte Dateien identifizieren und entfernen:
Erstelle eine KOMPLETTE Dateiliste aller .ts, .tsx, .css, .json Dateien im Projekt. Für JEDE Datei: Wird sie irgendwo importiert? Wird sie von Next.js automatisch geladen (page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx, sitemap.ts, robots.ts, route.ts)? Wenn NEIN auf beides: Die Datei ist eine WAISE. Prüfe ob sie Content enthält der woanders gebraucht wird. Wenn nicht: ENTFERNE die Datei. Dokumentiere jede entfernte Datei im Log.

Aktion 15.7 — Ungenutzte CSS-Klassen:
Wenn CSS-Module (.module.css) verwendet werden: Prüfe ob JEDE definierte Klasse auch im zugehörigen Component-Code referenziert wird. Ungenutzte Klassen in Modulen: ENTFERNEN. In globals.css: Gibt es Custom-CSS-Regeln die KEIN Element im Projekt matchen? Suche nach Selektoren die auf Klassen oder IDs verweisen die nirgends im JSX existieren. ENTFERNEN.

Aktion 15.8 — Ungenutzte npm-Pakete:
Vergleiche package.json dependencies mit tatsächlichen Imports im Code. Für JEDES Paket in "dependencies" und "devDependencies": Wird es irgendwo importiert oder in einem Config-File referenziert? Wenn NEIN: npm uninstall paketname. Typische Leichen: Alte CSS-Libraries neben Tailwind (styled-components, emotion, sass wenn nicht genutzt), veraltete Utility-Libraries (moment.js wenn date-fns oder nichts genutzt wird), Storybook-Pakete wenn kein Storybook existiert, Test-Libraries wenn keine Tests existieren, Linting-Plugins die nicht in der ESLint-Config referenziert werden.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 16: HYDRATION-FEHLER BEREINIGEN

Aktion 16.1 — Bekannte Hydration-Fallen:
- Datum/Uhrzeit Rendering: new Date() gibt auf Server und Client unterschiedliche Werte. MUSS in useEffect.
- window/document Zugriff: In Server Components verboten. MUSS hinter typeof window !== 'undefined' oder in useEffect.
- localStorage/sessionStorage: Nur im Client verfügbar. MUSS in useEffect mit Fallback-Wert.
- Browser-spezifische APIs (navigator, screen): MUSS in useEffect.
- Conditional Rendering basierend auf Client-State: Kann Mismatch verursachen. suppressHydrationWarning oder useEffect für initiale Werte.

Aktion 16.2 — Server/Client Boundary:
Prüfe JEDE "use client" Datei: Nutzt sie etwas Server-Only (fs, headers, cookies Server-seitig)? Das verursacht Build-Fehler.
Prüfe JEDE Datei OHNE "use client": Nutzt sie etwas Client-Only (useState, useEffect, onClick)? Das verursacht Hydration-Fehler oder Build-Fehler.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 17: SEO & METADATA SCHNELL-CHECK

Aktion 17.1 — Basis-Metadata prüfen:
Hat JEDE Seite einen title und eine description? (via metadata Export oder generateMetadata). Ist der title auf jeder Seite UNIQUE? Ist eine description vorhanden (mindestens 120 Zeichen)?

Aktion 17.2 — Sitemap & Robots:
Existiert app/sitemap.ts? Generiert sie alle öffentlichen Routen?
Existiert app/robots.ts? Erlaubt sie Crawling?
Wenn beide fehlen: Erstelle minimale Versionen.

Aktion 17.3 — Impressum & Datenschutz:
Existieren /impressum und /datenschutz Seiten? Haben sie Content? Dies ist LEGAL NOTWENDIG für deutsche Websites.

═══════════════════════════════════════════════════════════════════════════════
BLOCK E.2 — MOLEKULARE CODE-ANALYSE (Jede Zeile wird geprüft)
═══════════════════════════════════════════════════════════════════════════════

Dieser Block geht TIEFER als jeder andere. Hier wird nicht auf Dateien-Ebene gearbeitet, sondern auf ZEILEN-Ebene. Jede Funktion, jede Bedingung, jeder Ausdruck wird unter das Mikroskop gelegt.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 18: IMPORT-GRAPH & DEPENDENCY-ANALYSE

Aktion 18.1 — Import-Baum rekonstruieren:
Beginne bei app/layout.tsx (der Root). Verfolge JEDEN Import rekursiv. Erstelle einen mentalen Baum: Welche Datei importiert welche? Gibt es ZIRKULÄRE IMPORTS (Datei A importiert B, B importiert C, C importiert A)? Zirkuläre Imports verursachen undefinierte Exporte, Runtime-Crashes und mysteriöse "undefined is not a function" Fehler.
LÖSUNG bei Zirkeln: Identifiziere den Zirkel. Extrahiere die gemeinsam genutzte Logik in eine DRITTE Datei die von beiden importiert wird. Breche den Kreis.

Aktion 18.2 — Barrel-Export-Analyse:
Gibt es index.ts Dateien die als Barrel-Exports dienen (re-exportieren aus mehreren Dateien)? Barrel-Exports können Tree-Shaking verhindern und dazu führen dass der GESAMTE Inhalt aller re-exportierten Dateien in den Bundle geladen wird, selbst wenn nur eine Funktion gebraucht wird. Prüfe: Werden Barrel-Exports nur für tatsächliche "Public API" genutzt? Wenn eine Barrel-Datei 20 Komponenten re-exportiert aber nur 3 davon jemals importiert werden: Ändere die Imports auf DIREKTE PFADE statt über den Barrel.

Aktion 18.3 — Dynamische Imports prüfen:
Gibt es next/dynamic oder React.lazy Aufrufe? Laden sie korrekt? Haben sie Fallback-Komponenten (loading/suspense)? Gibt es Fälle wo dynamischer Import NICHT nötig ist (kleine Komponente die immer gebraucht wird → direkt importieren)? Gibt es Fälle wo dynamischer Import FEHLT (große Komponente die nur conditional gerendert wird → SOLLTE dynamisch sein)?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 19: FUNKTIONS-LOGIK MOLEKULAR PRÜFEN

Aktion 19.1 — JEDE Funktion auf Korrektheit prüfen:
Gehe JEDE exportierte Funktion in /lib/ und /utils/ durch. Für JEDE:
- Macht der Funktionsname klar was sie tut? (getServiceBySlug, formatDate, validateEmail)
- Ist der Return-Type korrekt und explizit angegeben?
- Gibt es Fälle wo sie undefined oder null zurückgibt ohne dass der Aufrufer damit rechnet?
- Gibt es Edge-Cases: Leerer String als Input? Leeres Array? null als Parameter? Negative Zahl?
- Wirft sie Fehler? Werden diese Fehler von JEDEM Aufrufer gefangen?

Aktion 19.2 — Array-Operationen absichern:
Suche nach JEDER Verwendung von: .find() → Gibt T oder undefined zurück. Wird der undefined-Fall IMMER behandelt? .filter() → Gibt ein leeres Array zurück wenn nichts matcht. Wird ein leeres Ergebnis korrekt dargestellt? .map() → Wird auf einem potentiell undefined Array aufgerufen? (data?.map oder data && data.map nötig?) .reduce() → Hat es einen Initialwert? Ohne Initialwert auf leerem Array: TypeError. .sort() → Mutiert das Original-Array. Wird vorher eine Kopie erstellt? ([...array].sort()) Array-Index-Zugriff (array[0], array[i]) → Wird geprüft ob der Index existiert? array[0] auf leerem Array gibt undefined.

Aktion 19.3 — Object-Operationen absichern:
Suche nach: Object.keys(), Object.values(), Object.entries() → Auf potentiell undefined/null Objekten? Punkt-Zugriff auf verschachtelte Objekte (data.user.name) → Existiert jede Ebene? Optional Chaining nötig? (data?.user?.name) Destructuring ({ name, email } = data) → Was wenn data undefined ist? Spread-Operator ({ ...defaults, ...overrides }) → Werden die Typen korrekt gemergt?

Aktion 19.4 — String-Operationen absichern:
Suche nach: .toLowerCase(), .toUpperCase(), .trim(), .split(), .replace() → Auf potentiell undefined/null Strings? Template Literals mit Variablen → Kann die Variable undefined sein? (Ergebnis: "Hallo undefined") .includes(), .startsWith(), .endsWith() → Auf potentiell undefined Strings? URL-Slug-Generierung → Werden Umlaute korrekt behandelt? (ä→ae, ö→oe, ü→ue, ß→ss)

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 20: CONDITIONAL-LOGIC EXHAUSTIV PRÜFEN

Aktion 20.1 — If/Else Vollständigkeit:
Jedes if-Statement: Gibt es einen else-Zweig wo einer sein MUSS? Beispiel: if (status === "success") zeigt Erfolgsmeldung, else if (status === "error") zeigt Fehlermeldung — aber was wenn status === "loading" oder ein unerwarteter Wert ist? Gibt es einen Default-Fall?

Aktion 20.2 — Switch-Statements:
Hat JEDES switch-Statement einen default-Case? Werden ALLE möglichen Werte eines Union-Types abgedeckt? TypeScript kann das mit exhaustive checks erzwingen (der default-Case assignt zu never — wenn ein Case fehlt meldet TypeScript einen Fehler).

Aktion 20.3 — Ternary-Operatoren prüfen:
Gibt es verschachtelte Ternaries (a ? b : c ? d : e)? Diese sind UNLESERLICH und fehleranfällig. Ersetze durch if/else oder Switch oder eine Map/Object-Lookup. Gibt es Ternaries die zu unterschiedlichen JSX-Bäumen führen (condition ? complexComponentA : complexComponentB)? Diese können React-Key-Probleme und unnötige Unmounts verursachen.

Aktion 20.4 — Falsy-Werte-Fallen:
In JavaScript sind 0, "", false, null, undefined und NaN alle falsy. Suche nach Mustern wie: {value && renderSomething} → Wenn value = 0 (eine valide Zahl), wird NICHTS gerendert UND die 0 erscheint im DOM als Text. Fix: {value !== undefined && value !== null && renderSomething} oder {typeof value === 'number' && renderSomething}. Ebenso: {items.length && renderList} → Wenn items leer ist (length = 0), wird die 0 im DOM angezeigt. Fix: {items.length > 0 && renderList}.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 21: EVENT-HANDLER & STATE-LOGIK PRÜFEN

Aktion 21.1 — onClick/onChange/onSubmit Handler:
Für JEDEN Event-Handler in JEDER Client Component:
- Ist der Handler typsicher? (e: React.MouseEvent, e: React.ChangeEvent, e: React.FormEvent)
- Wird e.preventDefault() aufgerufen wo nötig? (Forms, Links die SPA-Navigation machen)
- Wird e.stopPropagation() genutzt wo nötig? (Klick in einem Modal soll nicht den Hintergrund-Close triggern)
- Kann der Handler Fehler werfen? Wenn ja: Wird der Fehler gefangen?

Aktion 21.2 — useState Logik prüfen:
Für JEDEN useState Hook:
- Ist der Initialwert korrekt und vom richtigen Typ?
- Wird der Setter korrekt genutzt? (Bei Abhängigkeit vom vorherigen State: setCount(prev => prev + 1) statt setCount(count + 1))
- Wird State unnötig dupliziert? (Derived State: Wenn ein Wert aus anderem State BERECHNET werden kann, braucht er keinen eigenen useState — nutze useMemo stattdessen)
- Gibt es State der eigentlich in URL-Parametern leben sollte? (Filter, Sortierung, Pagination — damit die Ansicht teilbar und bookmark-bar ist)

Aktion 21.3 — useEffect Molekular-Analyse:
Für JEDEN useEffect Hook:
- DEPENDENCY-ARRAY: Ist es korrekt? Fehlen Dependencies (führt zu stale closures)? Sind zu viele Dependencies drin (führt zu unnötigen Re-Runs)?
- CLEANUP: Gibt es einen Cleanup-Return? Event-Listener MÜSSEN entfernt werden. Timer (setTimeout, setInterval) MÜSSEN geclearet werden. Subscriptions MÜSSEN unsubscribed werden. Abort-Controllers für Fetch MÜSSEN aborted werden.
- INFINITE LOOP CHECK: Setzt der useEffect einen State der in seinem eigenen Dependency-Array ist? Das erzeugt einen ENDLOS-LOOP. Beispiel: useEffect(() => { setData(fetch()) }, [data]) — FATAL.
- LEERES DEPENDENCY-ARRAY: useEffect(() => {}, []) — Läuft nur einmal bei Mount. Ist das beabsichtigt? Soll der Effekt bei Prop-Änderungen erneut laufen?
- KEIN DEPENDENCY-ARRAY: useEffect(() => {}) — Läuft bei JEDEM Render. Das ist fast immer ein Bug. Muss ein Dependency-Array haben.

Aktion 21.4 — useRef Prüfung:
Für JEDEN useRef:
- Wird der Ref vor dem ersten Render gelesen? (ref.current ist initial null)
- Wird der Ref als Dependency in useEffect genutzt? (Refs triggern KEINE Re-Renders und gehören NICHT ins Dependency-Array)
- Wird der Ref für DOM-Zugriff genutzt? Ist der Zugriff safe? (ref.current?.focus() statt ref.current.focus())

Aktion 21.5 — useCallback und useMemo Prüfung:
- Werden useCallback/useMemo dort genutzt wo sie NÖTIG sind? (Wenn Funktionen/Werte als Props an Child Components weitergegeben werden die React.memo nutzen)
- Werden sie dort genutzt wo sie UNNÖTIG sind? (Premature Optimization: Für einfache Berechnungen die bei jedem Render schnell durchlaufen — der useMemo-Overhead ist höher als die Berechnung selbst)
- Sind die Dependency-Arrays korrekt?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 22: ASYNC-CODE & ERROR-HANDLING PRÜFEN

Aktion 22.1 — Jede async Funktion prüfen:
- Ist die Funktion als async markiert? Wird der Return-Type als Promise typisiert?
- Wird JEDER await in einem try/catch Block gefangen?
- Was passiert im catch? Wird der Fehler verschluckt (leerer catch) oder korrekt behandelt (Error-State setzen, User-Nachricht zeigen)?
- Gibt es FLOATING PROMISES? (Eine async Funktion die aufgerufen wird OHNE await und OHNE .catch() — Fehler verschwinden spurlos)
- Gibt es parallele Fetches die mit Promise.all oder Promise.allSettled gebündelt werden könnten statt sequentiell zu laufen?

Aktion 22.2 — Fetch-Aufrufe prüfen:
Für JEDEN fetch() Aufruf:
- Wird die Response geprüft? (if (!response.ok) throw new Error(...))
- Wird response.json() in einem try/catch aufgerufen? (Server kann invalides JSON zurückgeben)
- Gibt es einen Timeout? (AbortController mit setTimeout)
- Was passiert bei Netzwerk-Fehler? (User-freundliche Meldung? Retry-Logik? Fallback-Daten?)
- Werden sensible Daten nur serverseitig gefetcht? (API-Keys NICHT im Client)

Aktion 22.3 — Error-Boundaries prüfen:
- Existiert eine Error-Boundary Komponente? Wenn nicht: Erstelle eine minimale.
- Wrappet sie kritische Bereiche? (Mindestens den Haupt-Content-Bereich)
- Zeigt sie eine benutzerfreundliche Fehlermeldung? (Nicht den Stack-Trace)
- Hat sie einen Retry/Reset Button?
- Loggt sie den Fehler? (console.error — KEIN Sentry, das ist verboten)

Aktion 22.4 — Loading-States prüfen:
Für JEDEN asynchronen Datenladevorgang:
- Gibt es einen Loading-State? (Spinner, Skeleton, Platzhalter)
- Wird der Loading-State ANGEZEIGT während Daten laden?
- Gibt es einen Error-State neben dem Loading-State?
- Gibt es einen Empty-State? (Wenn die Daten leer sind — "Keine Ergebnisse gefunden")
- Existieren loading.tsx Dateien für Route-Segmente die lange laden könnten?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 23: KOMPONENTEN-ANATOMIE PRÜFEN

Aktion 23.1 — Props-Validierung:
Für JEDE Komponente die Props empfängt:
- Hat sie ein explizites TypeScript-Interface für ihre Props? (interface ButtonProps { ... })
- Haben ALLE Props sinnvolle Typen? (Kein any, kein unknown ohne Type-Guard)
- Haben optionale Props Default-Werte? (Destructuring mit Defaults: { variant = "primary", size = "md" })
- Gibt es Props die IMMER zusammen kommen? (Sollten zu einem Objekt gebündelt werden)
- Gibt es Props die sich WIDERSPRECHEN können? (z.B. disabled UND onClick — wird onClick trotzdem aufgerufen wenn disabled true ist?)

Aktion 23.2 — Conditional Rendering prüfen:
- Werden Komponenten conditional gerendert? ({isOpen && Modal})
- Führt das zu Flash/Flicker? (Komponente mountet/unmountet bei jedem Toggle)
- Sollte stattdessen CSS-Visibility genutzt werden? (hidden Klasse statt Unmount — bewahrt State)
- Gibt es Conditional Returns am Anfang der Komponente? (if (!data) return null — OK, aber dokumentiert?)

Aktion 23.3 — Key-Props prüfen:
- Hat JEDE Liste (map → JSX) eine key-Prop?
- Ist die Key UNIQUE und STABIL? (KEIN Math.random(), KEIN Array-Index wenn die Liste sich ändert)
- Werden Keys korrekt verwendet? (key auf dem ÄUSSERSTEN Element im map-Callback, NICHT auf einem inneren Element)

Aktion 23.4 — Children-Weitergabe:
- Werden children Props korrekt durchgereicht?
- Gibt es Wrapper-Komponenten die children NICHT rendern? (Return ohne {children} — der Inhalt verschwindet)
- Gibt es React.cloneElement oder React.Children.map? Sind diese korrekt implementiert?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 24: DATENFLUSS & STATE-ARCHITEKTUR PRÜFEN

Aktion 24.1 — Prop-Drilling identifizieren:
Wird ein Prop durch 3 oder mehr Ebenen weitergereicht ohne in den Zwischen-Ebenen genutzt zu werden? Das ist Prop-Drilling. LÖSUNG: React Context für global genutzten State (Theme, User, Navigation-State). Composition-Pattern für Layout-spezifischen State (Children-Pattern statt Props-Weiterreichung).

Aktion 24.2 — Context-Provider prüfen:
Für JEDEN React Context im Projekt:
- Ist der Provider in der richtigen Ebene platziert? (Nicht zu hoch — verursacht unnötige Re-Renders. Nicht zu niedrig — Consumer können ihn nicht erreichen.)
- Hat der Context einen sinnvollen Default-Wert? (createContext mit undefined → useContext ohne Provider wirft keinen Fehler aber gibt undefined zurück was zu Runtime-Crashes führt. BESSER: Custom Hook mit Null-Check und sinnvoller Fehlermeldung.)
- Wird der Context-Value mit useMemo stabilisiert? (Ohne useMemo wird bei jedem Provider-Render ein neues Objekt erstellt → ALLE Consumer re-rendern unnötig.)
- Gibt es mehrere Contexts die besser in EINEN zusammengelegt werden? Oder ein MEGA-Context der besser aufgeteilt werden sollte? (Faustregel: Daten die sich GEMEINSAM ändern gehören in EINEN Context. Daten die sich UNABHÄNGIG ändern gehören in SEPARATE Contexts.)

Aktion 24.3 — Server/Client Datengrenzen:
In Next.js App Router gibt es eine HARTE GRENZE zwischen Server und Client Components. Prüfe:
- Werden Daten in Server Components geladen und als Props an Client Components weitergegeben? (KORREKT)
- Laden Client Components Daten direkt aus Dateien oder via fetch? (HINTERFRAGEN — kann das serverseitig passieren?)
- Werden große Datenmengen als Props serialisiert? (Server → Client Serialisierung für große Objekte ist teuer und erhöht die Payload)
- Sind die Daten-Getter in /lib/data/ als Server-Only konzipiert? (Kein "use client" in Daten-Dateien)

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 25: PERFORMANCE-MOLEKULAR-ANALYSE

Aktion 25.1 — Unnötige Re-Renders identifizieren:
Prüfe JEDE Client Component:
- Rendert sie zu oft? (console.log("render") temporär einfügen oder React DevTools Profiler)
- Ursachen: Parent rendert → alle Children rendern (auch wenn sich deren Props nicht geändert haben). Fix: React.memo() auf Children die teuer zu rendern sind.
- Ursachen: Context-Wert ändert sich → ALLE Consumer rendern. Fix: Context-Splitting oder useMemo auf den Value.
- Ursachen: Inline-Objekte oder -Funktionen als Props ({ style: { color: "red" } } oder onClick={() => doSomething(id)}) — erstellen bei jedem Render ein NEUES Objekt/Funktion. Fix: useMemo/useCallback oder Konstante außerhalb der Komponente.

Aktion 25.2 — Bundle-Analyse:
Prüfe die Build-Ausgabe: Welche Route hat den größten JavaScript-Payload? Gibt es Routen über 150KB (uncompressed)? Werden große Libraries (lodash, moment, d3) KOMPLETT importiert statt nur die benötigten Funktionen? (import _ from "lodash" → 70KB. import debounce from "lodash/debounce" → 2KB.)
Werden Bilder über JavaScript importiert statt über next/image? (Bilder im JS-Bundle sind ein ANTI-PATTERN.)

Aktion 25.3 — Bild-Optimierung:
Für JEDES Bild auf der Website:
- Nutzt es next/image? (MUSS, außer für SVGs und Hintergrund-Bilder in CSS)
- Hat es width und height ODER fill? (next/image braucht explizite Dimensionen)
- Hat es ein alt-Attribut? (Accessibility UND SEO)
- Hat Above-the-Fold priority gesetzt? (Verhindert Lazy-Loading für das wichtigste Bild)
- Sind die Bilder in modernem Format? (.webp oder .avif statt .png/.jpg wo möglich — next/image macht das automatisch)
- Gibt es Bilder über 500KB? (Sollten komprimiert werden)
- Gibt es Bilder die als Base64 inlined sind? (Nur für winzige Icons unter 1KB akzeptabel)

Aktion 25.4 — Font-Performance:
- Wird next/font genutzt? (Verhindert Layout-Shift und FOUT)
- Werden zu viele Font-Varianten geladen? (Nur die tatsächlich genutzten Weights: 400, 500, 600, 700 — nicht alle 9)
- Ist font-display: swap oder optional konfiguriert?
- Werden Google Fonts lokal gehostet via next/font/google? (Verhindert externen Request)

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 26: SICHERHEITS-PRÜFUNG AUF CODE-EBENE

Aktion 26.1 — Exponierte Secrets:
Suche in ALLEN Dateien (inklusive .env, .env.local, .env.production) nach:
- API-Keys, Tokens, Passwörter die HARDCODED im Code stehen (NICHT in Umgebungsvariablen)
- NEXT_PUBLIC_ Variablen: Diese sind im CLIENT sichtbar. Enthält eine davon etwas Sensibles? (NEXT_PUBLIC_ darf NUR öffentliche Werte enthalten wie Formspree-ID oder Analytics-ID)
- Private Keys oder Secrets die NICHT mit NEXT_PUBLIC_ prefixed sind aber trotzdem in Client Components genutzt werden (FATAL — das exponiert sie)

Aktion 26.2 — XSS-Vektoren:
Suche nach dangerouslySetInnerHTML in ALLEN Dateien. Für JEDES Vorkommen:
- Woher kommt der HTML-String? Ist er User-Input? (FATAL — XSS-Vektor)
- Wird er sanitized? (DOMPurify oder ähnlich)
- Kann er durch eine sichere Alternative ersetzt werden? (React-Komponenten statt Raw-HTML)

Aktion 26.3 — Formular-Sicherheit:
- Haben ALLE Formulare CSRF-Schutz? (Formspree hat eingebauten Schutz)
- Wird User-Input validiert BEVOR er verarbeitet wird? (Client-seitig UND Server-seitig)
- Gibt es Honeypot-Felder gegen Spam-Bots?
- Werden Fehlermeldungen KEINE sensiblen Informationen preisgeben? (Nicht "User mit dieser E-Mail existiert bereits" sondern "Anfrage konnte nicht verarbeitet werden")

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 27: NEXT.JS SPEZIFISCHE BUG-PATTERNS

Aktion 27.1 — App Router spezifische Fallen:
- Werden async Server Components korrekt implementiert? (export default async function Page() — MUSS async sein wenn await verwendet wird)
- Wird generateStaticParams für dynamische Routen ([slug]) korrekt exportiert? Gibt die Funktion ALLE möglichen Slugs zurück?
- Wird generateMetadata korrekt typisiert? (Return-Type: Metadata)
- Gibt es Route Handler (route.ts) die korrekt implementiert sind? (GET, POST Funktionen mit NextRequest/NextResponse)

Aktion 27.2 — Middleware-Fallen:
Falls middleware.ts existiert:
- Matcht der config.matcher die korrekten Routen?
- Gibt es Endlos-Redirect-Loops? (Middleware redirectet zu einer Route die wieder die Middleware triggert)
- Werden statische Assets korrekt excluded? (Bilder, Fonts, Favicon)

Aktion 27.3 — next.config Fallen:
- Gibt es experimentelle Features die instabil sind?
- Sind redirects/rewrites korrekt konfiguriert? (Keine Endlos-Loops)
- Ist die images-Konfiguration korrekt? (domains/remotePatterns für externe Bilder)
- Werden Webpack-Overrides verwendet die den Build brechen könnten?

Aktion 27.4 — Caching-Fallen:
- Werden fetch-Aufrufe in Server Components korrekt gecached? (Next.js cached fetch standardmäßig — wenn frische Daten nötig sind muss cache: 'no-store' oder revalidate gesetzt werden)
- Gibt es unstable_cache oder revalidateTag/revalidatePath Aufrufe die nicht funktionieren?
- Cached der Browser alte Versionen der Seite? (Cache-Control Headers prüfen)

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 28: ACCESSIBILITY BUG-FIX

Aktion 28.1 — Semantisches HTML prüfen:
- Wird nur EIN h1 pro Seite verwendet? (Mehrere h1 ist ein SEO- und Accessibility-Problem)
- Ist die Überschriften-Hierarchie korrekt? (h1 → h2 → h3, NICHT h1 → h3 → h2)
- Werden semantische Elemente genutzt? (nav, main, section, article, aside, footer, header — NICHT alles div)
- Haben Bilder alt-Texte? (Dekorative Bilder: alt="". Inhaltliche Bilder: beschreibender Text)
- Haben Links beschreibenden Text? (NICHT "Hier klicken" sondern "Alle Leistungen ansehen")
- Haben Formulare Labels? (Jedes Input MUSS ein zugeordnetes Label haben via htmlFor/id)

Aktion 28.2 — Keyboard-Navigation:
- Kann JEDES interaktive Element mit Tab erreicht werden?
- Ist die Tab-Reihenfolge logisch? (Folgt dem visuellen Layout)
- Können Modals/Dropdowns mit Escape geschlossen werden?
- Gibt es eine Focus-Trap in Modals? (Tab soll nicht aus dem Modal herausspringen)
- Sind Focus-Ringe sichtbar? (outline: none ohne Alternative ist ein Accessibility-Bug)

Aktion 28.3 — ARIA-Attribute:
- Haben interaktive Elemente die KEINE nativen HTML-Elemente sind korrekte ARIA-Rollen? (Custom-Button ohne button-Tag braucht role="button")
- Haben expandierbare Elemente aria-expanded?
- Haben Bereiche die sich dynamisch ändern aria-live="polite"?
- Gibt es aria-label oder aria-labelledby wo visueller Text fehlt? (Icon-only Buttons brauchen aria-label)

═══════════════════════════════════════════════════════════════════════════════
BLOCK E.3 — DESIGN-KONSISTENZ & VISUELLE AKZEPTABILITÄT (Preview-Getrieben)
═══════════════════════════════════════════════════════════════════════════════

Dieser Block ist der VISUELLE RICHTER. Hier wird JEDES Pixel auf JEDER Seite bei JEDEM Breakpoint unter das Mikroskop gelegt. Ein Build kann grün sein und der Code kann sauber sein — aber wenn die Webseite KAPUTT AUSSIEHT ist sie KAPUTT. Dieser Block stellt sicher dass KEIN Element durchsichtig ist das solide sein muss, KEIN Text im Hintergrund verschwindet, KEIN Spacing zerstört ist und die GESAMTE visuelle Sprache konsistent und professionell wirkt. KEINE LIMITS — jede Abweichung wird gejagt und eliminiert.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 29: FARB-KONTRAST EXHAUSTIV-AUDIT

Aktion 29.1 — Globale Farbpalette extrahieren und dokumentieren:
Erfasse JEDE im Projekt verwendete Farbe — aus Tailwind-Klassen (bg-*, text-*, border-*), aus CSS Custom Properties (--color-*), aus globals.css, aus inline Styles, aus SVGs. Erstelle eine VOLLSTÄNDIGE Farbmatrix: Welche Hintergrundfarben werden verwendet? Welche Textfarben? Welche Kombinationen treten auf?

Aktion 29.2 — JEDE Text-auf-Hintergrund-Kombination validieren:
Gehe JEDE Sektion auf JEDER Seite durch. Für JEDES Textelement prüfe:
- Welche Textfarbe hat dieses Element? (Direkt via Klasse, geerbt vom Parent, oder Default?)
- Welche Hintergrundfarbe hat der NÄCHSTE Container mit definiertem Hintergrund?
- Ist der Kontrast MINDESTENS 4.5:1 für Body-Text (WCAG AA)? Mindestens 3:1 für große Überschriften (ab 24px oder 18.66px bold)?
- KRITISCHE FALLEN: Text erbt Farbe vom Body (z.B. text-gray-900) aber sitzt auf einer dunklen Section (bg-gray-900) → UNSICHTBAR. Text hat text-white aber die Section hat bg-white oder bg-gray-50 → UNSICHTBAR. Text hat eine halbtransparente Farbe (text-white/50, rgba mit Alpha < 0.7) → ZU SCHWACH.
FIX-STRATEGIE: Ändere IMMER die Textfarbe oder füge eine explizite Textfarbe hinzu — NICHT den Hintergrund. Jede Section mit dunklem Hintergrund braucht text-white oder text-gray-100 EXPLIZIT auf dem Container. Jede Section mit hellem Hintergrund braucht text-gray-900 oder text-gray-800 EXPLIZIT.

Aktion 29.3 — Overlay-Text auf Bildern und Gradients prüfen:
Suche nach JEDEM Text der über einem Bild, Video oder Gradient-Hintergrund liegt. Diese sind die HÄUFIGSTEN Kontrast-Killer:
- Hero-Sections mit Hintergrundbild und Textoverlay: Gibt es ein semi-transparentes Overlay (bg-black/50 o.ä.) das den Kontrast sichert? Ist das Overlay DUNKLER ALS 50% Opazität? Bei hellen Bildern reicht 50% oft NICHT.
- Gradient-Hintergründe: Prüfe den Kontrast am HELLSTEN Punkt des Gradients (nicht am dunkelsten). Ein Gradient von bg-blue-900 zu bg-blue-400 — der Text muss auch am bg-blue-400 Ende lesbar sein.
- Parallax/Fixed-Background Sektionen: Scrollt der Text über verschiedene Bildbereiche? Bleibt der Kontrast ÜBERALL gewährleistet?
FIX: Verwende ein SOLIDES semi-transparentes Overlay (min 60% Opazität für dunkle Overlays). Oder setze den Text in einen Container mit SOLIDEM Hintergrund (p-4 bg-white rounded).

Aktion 29.4 — Button- und Link-Farben validieren:
JEDER Button MUSS visuell als klickbares Element erkennbar sein:
- Primärer Button: SOLIDER Hintergrund, Text kontrastreich, deutlich abgegrenzt vom umliegenden Content
- Sekundärer Button: Erkennbarer Rand ODER Hintergrundunterschied
- Ghost/Outline Button: MUSS mindestens einen sichtbaren Border haben (border-2 border-current oder explizite Farbe)
- Links im Text: MÜSSEN sich vom Fließtext unterscheiden (Farbe, Unterstreichung oder beides)
- FALLE: Links mit text-gray-900 auf text-gray-900 Body-Text → NICHT unterscheidbar. Links MÜSSEN text-blue-600 oder eine andere unterscheidbare Farbe haben ODER text-decoration: underline.

Aktion 29.5 — Border- und Divider-Sichtbarkeit:
Suche nach ALLEN border-Klassen und hr/Divider-Elementen:
- border-transparent oder border-white auf weißem Hintergrund → UNSICHTBAR → NUTZLOS oder beabsichtigt?
- divide-* Klassen auf Listen: Ist die Divider-Farbe sichtbar gegen den Container-Hintergrund?
- Card-Borders: Sind Card-Ränder sichtbar genug um die Card vom Hintergrund abzugrenzen? Wenn Cards bg-white auf bg-white liegen → Cards brauchen MINDESTENS border border-gray-200 ODER shadow-sm.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 30: TRANSPARENZ & OPAZITÄTS-KOMPLETT-SCAN

Aktion 30.1 — Unbeabsichtigte Transparenz eliminieren:
Durchsuche den GESAMTEN Code nach JEDEM Vorkommen von:
- opacity-* Klassen (opacity-0, opacity-10, opacity-20, opacity-30, opacity-40, opacity-50 auf Elementen die SOLIDE sein müssen)
- bg-*/50, bg-*/40, bg-*/30 (Tailwind Alpha-Werte auf Hintergründen — JEDER muss begründet sein)
- rgba(), hsla() mit Alpha-Kanal < 1 in CSS
- backdrop-blur OHNE soliden Hintergrund dahinter (backdrop-blur allein macht Hintergrund NICHT undurchsichtig)
- bg-transparent auf Containern die Content tragen
- bg-white/0, bg-black/0 oder ähnliche Null-Opazitäts-Hintergründe
Für JEDES Vorkommen: Ist die Transparenz BEABSICHTIGT und FUNKTIONAL (z.B. Overlay, Glasmorphism mit solidem Fallback)? Oder ist sie ein BUG der Content unsichtbar oder unlesbar macht?
REGEL: Jedes Element das Text enthält MUSS einen SOLIDEN oder NAHEZU SOLIDEN (mindestens 85% Opazität) Hintergrund haben ODER der Text muss auf JEDEM möglichen Hintergrund darunter lesbar sein.

Aktion 30.2 — Container-Opazität vs. Kind-Opazität:
KRITISCHE FALLE: opacity-50 auf einem PARENT macht ALLE KINDER halbtransparent — inklusive Text, Buttons, Bilder. Das kann NICHT durch opacity-100 auf dem Kind aufgehoben werden. Durchsuche ALLE Container (div, section, aside, article) nach opacity-* Klassen. Wenn ein Container opacity < 100 hat:
- Ist der GESAMTE Inhalt (Text, Buttons, Bilder) noch lesbar und erkennbar?
- Wenn NEIN: Entferne die Container-Opazität. Wenn ein halbtransparenter Hintergrund gewünscht ist → verwende bg-*/50 statt opacity-50 auf dem Container.
- Prüfe group-hover:opacity-* und hover:opacity-* Transitionen: Machen sie Text temporär unlesbar?

Aktion 30.3 — Glassmorphism & Blur-Effekte auditieren:
Suche nach JEDEM backdrop-blur, backdrop-blur-sm, backdrop-blur-md, backdrop-blur-lg, backdrop-blur-xl:
- Wird der Blur-Effekt von einem semi-transparenten Hintergrund begleitet (bg-white/70, bg-black/40)?
- Ist der Hintergrund transparent GENUG damit der Blur sichtbar ist ABER opak GENUG damit der Text darauf lesbar bleibt?
- TESTE: Was passiert wenn der Blur-Effekt NICHT unterstützt wird (ältere Browser)? Ist der Text TROTZDEM lesbar? → Wenn nein: Füge @supports-Fallback hinzu ODER ersetze durch soliden Hintergrund.
- Cookie-Banner, Header, Modals mit Blur: Diese MÜSSEN immer einen SOLIDEN Fallback haben. Ein Cookie-Banner mit backdrop-blur-md bg-white/30 ist auf vielen Geräten DURCHSICHTIG und UNLESBAR.
FIX: Ersetze fragile Glasmorphism-Effekte durch SOLIDE Hintergründe. bg-white shadow-lg ist IMMER besser als bg-white/50 backdrop-blur-md.

Aktion 30.4 — Z-Index & Stapel-Kontext prüfen:
Durchsuche ALLE z-* Klassen und z-index CSS-Deklarationen:
- Haben Overlays, Modals, Dropdowns, Cookie-Banner den HÖCHSTEN z-index? (z-50 für Modals, z-40 für Header, z-30 für Dropdowns)
- Überlappt ein Element ein anderes UNBEABSICHTIGT? (z-10 auf einem dekorativen Element das über dem Content liegt?)
- Gibt es negative z-index (-z-10) die Elemente HINTER den Hintergrund schieben → UNSICHTBAR?
- Erstellt ein transform, will-change oder opacity eine NEUE Stacking Context die die z-index Reihenfolge bricht?
PRÜFE: Ist der Header IMMER über dem Seiten-Content? Ist ein offenes Dropdown IMMER über dem Seiten-Content? Ist ein Modal IMMER über ALLEM?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 31: TEXT-SPACING & PLACEMENT MOLEKULAR-PRÜFUNG

Aktion 31.1 — Text-Overflow & Clipping aufspüren:
Suche nach JEDEM Vorkommen von:
- overflow-hidden auf Containern die Text enthalten → Wird Text ABGESCHNITTEN? Sind letzte Zeilen unsichtbar? Werden lange Wörter (besonders im Deutschen: "Datenschutzerklärung", "Leistungsübersicht") abgeschnitten?
- truncate / text-ellipsis / whitespace-nowrap auf Elementen wo der VOLLSTÄNDIGE Text sichtbar sein muss (Überschriften, Beschreibungen)
- line-clamp-* auf Content wo mehr Text existiert als die Clamp-Anzahl → Geht kritischer Content verloren?
- max-h-* oder h-* mit overflow-hidden auf Text-Containern → Werden Absätze unten abgeschnitten?
FIX-STRATEGIE: Entferne overflow-hidden von Text-Containern es sei denn es gibt einen EXPLIZITEN Grund (z.B. Bild-Container). Ersetze truncate durch break-words wo nötig. Bei deutschen Texten: hyphens: auto oder break-words ist PFLICHT wegen der langen Komposita.

Aktion 31.2 — Padding & Margin Konsistenz prüfen:
Erstelle eine MENTALE KARTE des Spacing-Systems der Website:
- Welche Abstände werden zwischen Sektionen verwendet? (py-12, py-16, py-20, py-24?) Sind sie KONSISTENT?
- Welche Container-Paddings werden verwendet? (px-4, px-6, px-8?) Sind sie auf JEDER Seite GLEICH?
- Gibt es Sektionen mit KEINEM Padding (p-0) → Text klebt am Rand?
- Gibt es negative Margins (negative-m-*, -mt-*, -ml-*) die Elemente überlappen lassen?
- Gibt es Sektionen wo das Padding auf Mobile VERSCHWINDET (sm:px-6 aber kein px-* für Mobile → 0 Padding auf < 640px)?
REGEL: JEDE Section muss mindestens px-4 auf Mobile haben. KEIN Text darf direkt am Bildschirmrand kleben. Container MÜSSEN auf JEDER Seite identische Seitenabstände haben.

Aktion 31.3 — Vertikaler Rhythmus & Abstandslogik:
Prüfe die vertikalen Abstände ZWISCHEN den Elementen innerhalb jeder Section:
- Überschrift zu Text: Ist der Abstand konsistent? (Typisch: mb-4 oder mb-6 nach H2, mb-2 oder mb-3 nach H3)
- Text zu Text: Aufeinanderfolgende Absätze — haben sie mb-4 oder space-y-4? Oder kleben sie zusammen?
- Text zu Button/CTA: Ist genug Abstand da (mindestens mt-6)?
- Zwischen Cards in einem Grid: Haben sie gap-* oder margin? Ist der Abstand konsistent (gap-4, gap-6, gap-8)?
- FALLE: space-y-* auf einem Container wo ein Kind-Element EIGENE Margins hat → Doppelte Abstände oder kollidierende Margins
FIX: Vereinheitliche das Spacing-System. Wähle EINEN Rhythmus (4px-Basis: 4, 8, 12, 16, 24, 32, 48, 64) und wende ihn KONSISTENT an.

Aktion 31.4 — Text-Alignment & Zentrierung:
Prüfe JEDE Seite auf korrekte Text-Ausrichtung:
- Sind Hero-Sections einheitlich ausgerichtet? (text-center ODER text-left — NICHT gemischt innerhalb einer Section)
- Sind Cards innerhalb eines Grids GLEICH ausgerichtet? (Alle text-left ODER alle text-center — NICHT manche links, manche zentriert)
- Ist Body-Text IMMER linksbündig? (text-center auf langen Absätzen ist ein UX-Anti-Pattern — schwer zu lesen)
- Sind CTAs/Buttons konsistent ausgerichtet? (Alle zentriert ODER alle linksbündig)
- Gibt es Elemente die mit mx-auto zentriert sind aber KEIN max-width haben → Element nimmt volle Breite ein, mx-auto hat keinen Effekt
- Gibt es flex/grid Container wo items-center oder justify-center den Content FALSCH positioniert?

Aktion 31.5 — Whitespace-Anomalien & leere Bereiche:
Suche nach UNERKLÄRBAREM Whitespace auf Seiten:
- Riesige leere Bereiche zwischen Sektionen (doppelte Paddings, leere Divs mit Höhe)
- Sektionen die keinen Content haben aber trotzdem Platz einnehmen (leere Container mit min-h-screen oder py-24)
- Container mit display: flex und justify-between wo ein Kind-Element fehlt → restlicher Content wird an den Rand geschoben
- Hidden Elemente (hidden, sr-only, opacity-0) die trotzdem Layoutplatz einnehmen → Sollten absolute oder hidden sein
- Margin-Collapse-Bugs: Vertikale Margins kollabieren in CSS — aber NICHT in Flexbox oder Grid. Wenn ein Layout von Flexbox zu Block geändert wurde → Abstände können sich verdoppeln
PRÜFE: Scrolle JEDE Seite komplett durch. Gibt es einen Punkt wo AUFFÄLLIG viel leerer Raum ist? → Finde die Ursache im Code.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 32: ELEMENT-SICHTBARKEIT & BOUNDARY-PRÜFUNG

Aktion 32.1 — Jedes UI-Element auf Sichtbarkeit prüfen:
Gehe SYSTEMATISCH durch JEDE Seite und prüfe für JEDES sichtbare Element:
- Ist das Element TATSÄCHLICH sichtbar? (Nicht verdeckt, nicht transparent, nicht abgeschnitten, nicht außerhalb des Viewports)
- Hat das Element KLARE GRENZEN? (Cards haben Border oder Shadow. Sektionen haben Hintergrundfarb-Wechsel oder Divider. Inputs haben Border.)
- Ist das Element vom UMGEBENDEN Content unterscheidbar? (Eine weiße Card auf weißem Hintergrund ohne Border/Shadow ist UNSICHTBAR)

Aktion 32.2 — Card & Container-Sichtbarkeit:
Für JEDE Card-Komponente im Projekt:
- Hat die Card einen SICHTBAREN Hintergrund der sich vom Seiten-Hintergrund unterscheidet?
- Hat die Card einen Border ODER Shadow? (Mindestens border border-gray-200 oder shadow-sm)
- Wenn die Card auf einem farbigen Hintergrund liegt: Kontrastiert die Card-Farbe mit dem Section-Hintergrund?
- Haben ALLE Cards im selben Grid die GLEICHE visuelle Behandlung? (Nicht: Card 1 hat Shadow, Card 2 hat Border, Card 3 hat nichts)
- Haben Cards konsistente innere Paddings? (p-4, p-6 oder p-8 — NICHT gemischt im selben Grid)
- Haben Cards konsistente Eckenradien? (rounded-lg überall ODER rounded-xl überall — NICHT gemischt)

Aktion 32.3 — Formular-Element-Sichtbarkeit:
JEDES Input-Feld, Textarea, Select, Checkbox, Radio MUSS:
- Einen SICHTBAREN Border haben (NICHT border-transparent oder border-white auf weißem Hintergrund)
- Einen Hintergrund haben der sich von der Seite unterscheidet ODER einen klaren Border
- Focus-State: Bei Fokussierung MUSS eine sichtbare Änderung eintreten (ring-2 ring-blue-500, border-blue-500, oder ähnlich)
- Placeholder-Text: Muss sichtbar aber SCHWÄCHER als eingegebener Text sein (text-gray-400, NICHT text-gray-900)
- Label: MUSS sichtbar sein, MUSS ÜBER oder NEBEN dem Input stehen, NICHT im Input verschwinden
- Error-State: MUSS sich visuell vom Normal-State unterscheiden (border-red-500, text-red-600)
- Disabled-State: MUSS erkennbar sein (opacity-50 cursor-not-allowed oder bg-gray-100)

Aktion 32.4 — Icon & Badge-Sichtbarkeit:
Suche nach ALLEN Icon-Komponenten (Lucide, Heroicons, Custom SVGs):
- Haben Icons eine SICHTBARE Farbe? (text-gray-900 auf hellem Hintergrund, text-white auf dunklem)
- Sind Icons GROSS GENUG? (Mindestens 16x16px für Inline, 20x20px für UI-Icons, 24x24px für Navigation)
- Werden Icons als EINZIGES Element in Buttons verwendet? → MUSS aria-label haben UND Icon muss GROSS GENUG sein (mindestens 24x24px)
- Badges/Tags: Haben sie einen Hintergrund der sich vom Container abhebt? Ist der Text im Badge lesbar?
- Status-Indikatoren (grüne Punkte, rote Badges): Sind sie GROSS GENUG um wahrgenommen zu werden (mindestens 8x8px)?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 33: KOMPONENTEN-DESIGN-KONSISTENZ AUDIT

Aktion 33.1 — Button-Design-System validieren:
Erfasse JEDE Button-Variante im Projekt. Prüfe:
- Verwenden ALLE primären Buttons die GLEICHE Hintergrundfarbe?
- Verwenden ALLE sekundären Buttons den GLEICHEN Stil (Outline, Ghost, Subtle)?
- Haben ALLE Buttons die GLEICHE Höhe (py-2 px-4, py-3 px-6)? Oder variiert die Größe willkürlich?
- Haben ALLE Buttons die GLEICHEN Eckenradien (rounded-md überall ODER rounded-full überall)?
- Haben ALLE Buttons konsistente Hover-States? (Nicht: Button A wird dunkler, Button B wird heller, Button C hat keinen Hover)
- Haben ALLE Buttons konsistente Padding-Proportionen? (Der Text-zu-Rand-Abstand muss überall gleich wirken)
WENN Inkonsistenzen gefunden werden: Definiere EIN Button-System und wende es auf ALLE Buttons an.

Aktion 33.2 — Überschriften-System validieren:
Prüfe JEDE Seite: Wird ein konsistentes Überschriften-System verwendet?
- H1: Nur EINE pro Seite. Gleiche Größe auf allen Seiten? (text-4xl, text-5xl — IMMER gleich)
- H2 (Section-Überschriften): Gleiche Größe auf allen Seiten? Gleiche Font-Weight? Gleicher Abstand danach?
- H3 (Sub-Überschriften): Kleiner als H2? Visuell klar als Unterebene erkennbar?
- H4+ (falls vorhanden): Korrekte Hierarchie?
- FALLE: Eine Seite hat text-4xl für H2, eine andere text-2xl für H2 → INKONSISTENT
- FALLE: H2 auf einer Seite ist text-3xl font-bold, auf einer anderen text-3xl font-semibold → Subtil inkonsistent
FIX: Definiere EINE Typografie-Skala und wende sie GLOBAL an. Idealerweise über Tailwind-Klassen die in einer zentralen Stelle definiert sind.

Aktion 33.3 — Section-Layout-Pattern validieren:
Prüfe ob ähnliche Sektionen auf verschiedenen Seiten GLEICH strukturiert sind:
- Service/Feature-Grids: Gleiche Anzahl Spalten? Gleiche Card-Größe? Gleicher Gap?
- Testimonial-Sektionen: Gleiche Darstellung auf allen Seiten wo sie vorkommen?
- CTA-Sektionen: Gleiche Struktur (Überschrift + Text + Button)? Gleiche Farbgebung?
- Hero-Sektionen: Ähnliche Struktur auf allen Seiten? Konsistente Höhe?
- Footer: Identisch auf JEDER Seite (wird durch Layout sichergestellt — aber PRÜFE es)

Aktion 33.4 — Farb-Semantik validieren:
Werden Farben SEMANTISCH KONSISTENT verwendet?
- Primärfarbe (z.B. Blau): Wird sie NUR für primäre Aktionen, Links und Akzente verwendet? Oder taucht sie auch als Hintergrund auf wo sie nicht hingehört?
- Erfolg (Grün): Wird Grün IMMER für Erfolg/Bestätigung verwendet und NIRGENDS als Dekoration?
- Fehler (Rot): Wird Rot IMMER für Fehler/Warnung verwendet?
- Neutral (Grau-Skala): Wird die Grau-Skala konsistent verwendet? (NICHT text-gray-600 und text-neutral-600 und text-slate-600 gemischt — wähle EINE Grau-Familie)
- Akzent-Farben: Gibt es mehr als 2-3 Akzentfarben? → ZU VIELE → Reduziere auf max 3 (Primary, Secondary, Accent)
FIX: Wenn inkonsistente Grau-Familien gefunden werden (gray UND neutral UND slate gemischt) → Vereinheitliche auf EINE Familie im GESAMTEN Projekt.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 34: RESPONSIVE DESIGN-KONSISTENZ SWEEP

Aktion 34.1 — 375px Mobile Pixel-Perfection:
Gehe JEDE Seite bei 375px Breite durch:
- Ragt IRGENDEIN Element über den Viewport hinaus? (Prüfe: overflow-x auf body, Elemente mit fester Breite > 375px, Bilder ohne max-w-full, Tabellen ohne overflow-x-auto wrapper)
- Sind ALLE Überschriften auf EINER Zeile lesbar oder brechen sie SINNVOLL um? (Ein H1 das nach 2 Wörtern umbricht sieht kaputt aus)
- Haben ALLE Touch-Targets mindestens 44x44px? (Buttons, Links, Hamburger, Close-Icons)
- Sind ALLE Formulare auf voller Breite? (w-full auf Inputs bei Mobile)
- Ist der Text MINDESTENS 16px? (Kleinerer Text auf Mobile ist schlecht lesbar und verhindert Zoom-Override auf iOS)
- Sind Grid-Layouts korrekt auf eine Spalte umgebrochen? (grid-cols-1 auf Mobile für ALLES was mehr als eine Spalte auf Desktop hat)
- Werden horizontale Card-Layouts zu vertikalen? (flex-col auf Mobile)

Aktion 34.2 — 768px Tablet Sweep:
- Sind 3-Spalten-Grids auf 2 Spalten reduziert? (sm:grid-cols-2 oder md:grid-cols-2)
- Ist die Navigation korrekt? (Desktop-Nav ODER Mobile-Hamburger — KEIN Zwischenzustand wo beides gleichzeitig angezeigt wird)
- Sind Hero-Sections noch proportional? (Text nicht zu groß, Bild nicht zu klein)
- Sind Sidebar-Layouts korrekt? (Sidebar entweder UNTER dem Content ODER als Drawer)

Aktion 34.3 — 1280px-1536px Desktop Full-Width:
- Ist der Content-Container begrenzt? (max-w-7xl mx-auto oder ähnlich — Content DARF NICHT die volle Viewport-Breite einnehmen)
- Sind Bilder nicht verzerrt bei breiten Viewports? (object-cover, object-contain korrekt gesetzt)
- Gibt es Sektionen mit voller Breite (w-full bg-*) die Content-Container INNERHALB haben? → Content muss begrenzt sein AUCH wenn die Section volle Breite hat
- Werden zu breite Textzeilen vermieden? (Optimale Lesebreite: 45-75 Zeichen pro Zeile. max-w-prose oder max-w-3xl auf Text-Blöcke setzen)

Aktion 34.4 — Breakpoint-Übergangs-Bugs:
Prüfe die EXAKTEN Breakpoint-Grenzen (639px→640px, 767px→768px, 1023px→1024px, 1279px→1280px):
- Springt das Layout abrupt? (Akzeptabel wenn sauber, NICHT akzeptabel wenn Elemente sich kurz überlappen oder verschwinden)
- Gibt es einen Breakpoint wo ein Element VERSCHWINDET? (hidden md:block ohne Alternative auf Smaller Screens → Content fehlt auf Mobile)
- Gibt es Text der auf einem Breakpoint GENAU so lang ist dass er in eine leere Zeile umbricht? (Besonders bei Cards mit fester Höhe)
- Navigation: Wechselt der Nav-Typ an einem KLAREN Breakpoint? (NICHT: Desktop-Nav bei 900px noch sichtbar aber zu schmal für alle Links)

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 35: INTERAKTIVE ZUSTÄNDE & VISUELLES FEEDBACK

Aktion 35.1 — Hover-States Komplett-Audit:
JEDES interaktive Element MUSS einen sichtbaren Hover-State haben:
- Buttons: hover:bg-* (dunklere Variante), hover:shadow-*, hover:scale-105 — IRGENDEINE sichtbare Reaktion
- Links: hover:underline, hover:text-* (Farbwechsel) — IRGENDEINE sichtbare Reaktion
- Cards (wenn klickbar): hover:shadow-lg, hover:-translate-y-1, hover:border-* — MUSS als klickbar erkennbar sein
- Navigation-Links: hover:text-* oder hover:border-b-2 — Aktiver Zustand und Hover MÜSSEN sich unterscheiden
- Icons (wenn klickbar): hover:text-*, hover:scale-* — MUSS reagieren
PRÜFE: Gibt es hover:opacity-0 oder hover:invisible? → BUG (macht Element beim Hover unsichtbar)
PRÜFE: Gibt es hover:text-white auf weißem Hintergrund? → BUG (Text verschwindet beim Hover)

Aktion 35.2 — Aktive Zustände & Navigation-Highlighting:
- Ist auf JEDER Seite der AKTUELLE Nav-Link hervorgehoben? (font-bold, border-b-2, text-primary, bg-primary/10 — IRGENDEINE visuelle Unterscheidung)
- Breadcrumbs: Ist der AKTUELLE Breadcrumb-Eintrag visuell anders als die Links davor?
- Tab-Navigationen: Ist der AKTUELLE Tab klar hervorgehoben? (Active-Styling MUSS sich deutlich vom inaktiven Tab unterscheiden)
- Sidebar-Navigationen: Ist der AKTUELLE Punkt hervorgehoben?

Aktion 35.3 — Focus-States für Accessibility:
JEDES interaktive Element MUSS einen SICHTBAREN Focus-Ring haben:
- Suche nach outline: none, outline-none, focus:outline-none OHNE Alternative → BUG (entfernt Focus-Sichtbarkeit)
- Best Practice: focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
- PRÜFE: Tab durch JEDE Seite. Kannst du JEDERZEIT sehen WO der Focus ist? Wenn nein → Focus-Ring-Styling fehlt
- Buttons, Links, Inputs, Selects, Textareas, Checkboxes, Radios → ALLE brauchen Focus-Styling
- Custom-Components (Dropdown, Modal-Close, Accordion-Trigger) → ALLE brauchen Focus-Styling

Aktion 35.4 — Disabled-States prüfen:
Suche nach disabled-Attributen und cursor-not-allowed / opacity-50 Klassen:
- Ist JEDES disabled Element visuell als NICHT KLICKBAR erkennbar?
- Werden disabled Buttons AUSGEGRAUT und mit cursor-not-allowed versehen?
- Kann man disabled Elemente NICHT fokussieren? (ODER: Fokus ist erlaubt aber visuell als disabled erkennbar)
- Werden disabled Formularfelder mit bg-gray-100 oder bg-gray-50 hinterlegt?

Aktion 35.5 — Loading- & Empty-States:
Prüfe JEDE Komponente die dynamische Daten anzeigt:
- Was wird angezeigt WÄHREND Daten laden? (Skeleton, Spinner, Platzhalter — NICHT nichts)
- Was wird angezeigt wenn KEINE Daten vorhanden sind? (Empty-State mit Nachricht — NICHT leerer Container)
- Gibt es ein Loading-Feedback bei Form-Submissions? (Button-Text ändert sich zu "Wird gesendet..." oder Spinner erscheint)
- Gibt es ein Erfolgs-Feedback nach Form-Submission? (Bestätigungs-Nachricht oder Redirect)
- Gibt es ein Fehler-Feedback bei fehlgeschlagener Form-Submission? (Fehlermeldung sichtbar, NICHT nur console.error)

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 36: VISUELLER HIERARCHIE & GEWICHTUNGS-AUDIT

Aktion 36.1 — Typografie-Skala validieren:
Prüfe ob eine KLARE typografische Hierarchie existiert:
- Display/Hero-Text: Größter Text auf der Seite (text-5xl bis text-7xl). Nur für Hero-Headlines.
- H1: Klar kleiner als Display. (text-3xl bis text-5xl). NUR EINE pro Seite.
- H2: Klar kleiner als H1. (text-2xl bis text-3xl). Section-Überschriften.
- H3: Klar kleiner als H2. (text-xl bis text-2xl). Sub-Sections.
- Body: Klar kleiner als H3. (text-base bis text-lg). Fließtext.
- Small: Klar kleiner als Body. (text-sm). Captions, Meta-Info, Timestamps.
- Micro: Nur für Labels, Badges. (text-xs).
REGEL: Zwischen JEDER Stufe MUSS ein DEUTLICHER visueller Unterschied bestehen. Wenn H2 und H3 gleich aussehen → PROBLEM. Wenn Body und Small gleich aussehen → PROBLEM.

Aktion 36.2 — Visuelles Gewicht & Aufmerksamkeits-Hierarchie:
Auf JEDER Seite: Was fällt ZUERST ins Auge? (Sollte die Hero-Headline oder der wichtigste CTA sein)
- Gibt es Elemente die LAUTER SCHREIEN als die Hauptbotschaft? (Ein riesiger, bunter Footer-Banner der wichtiger aussieht als der Hero)
- Gibt es dekorative Elemente die von der Kernbotschaft ABLENKEN? (Zu viele Farben, zu viele Animationen, zu viele verschiedene Stile)
- Ist der CTA der AUFFÄLLIGSTE Button auf der Seite? (Nicht in einer Ecke versteckt, nicht gleich gestylt wie sekundäre Buttons)
- Sind UNWICHTIGE Informationen visuell ZURÜCKGENOMMEN? (Meta-Daten, Timestamps, Footer-Links → text-sm text-gray-500, NICHT text-lg text-gray-900)

Aktion 36.3 — Spacing als Design-Element:
Prüfe ob Abstände die HIERARCHIE unterstützen:
- Mehr Abstand VOR einer neuen Section als INNERHALB einer Section (z.B. py-24 zwischen Sections, space-y-6 innerhalb)
- Zusammengehörige Elemente sind NÄHER zusammen (Gestaltgesetz der Nähe): Überschrift und zugehöriger Text → mb-4. Zwei verschiedene Content-Blöcke → mb-12.
- Cards in einem Grid haben GLEICHE Abstände zueinander (gap-6 oder gap-8 — NICHT unterschiedliche margins)
- REGEL: Intra-Gruppen-Abstände < Inter-Gruppen-Abstände < Section-Abstände

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 37: MEDIEN & GRAFIK-INTEGRITÄT

Aktion 37.1 — Bild-Qualitäts-Audit:
Prüfe JEDES Bild im Projekt:
- Lädt das Bild? (Kein 404, kein broken-image-Icon)
- Ist das Bild SCHARF? (Nicht pixelig — besonders auf Retina-Displays. Bilder sollten mindestens 2x die Anzeige-Auflösung haben)
- Ist das Bild NICHT VERZERRT? (aspect-ratio oder object-cover/contain korrekt gesetzt. NICHT gestreckt oder gequetscht)
- Ist das Bild SINNVOLL BESCHNITTEN? (object-cover schneidet Teile ab — wird der wichtige Teil abgeschnitten? object-position anpassen)
- Werden Next.js Image-Komponenten verwendet? (<Image> statt <img> für automatische Optimierung)
- Haben ALLE Images width und height Attribute? (Verhindert CLS — Cumulative Layout Shift)

Aktion 37.2 — SVG & Icon-Qualität:
Prüfe JEDES SVG und Icon:
- Werden SVGs INLINE oder als Datei geladen? (Inline ist besser für Styling-Kontrolle)
- Haben SVGs currentColor als fill oder stroke? (Damit sie die Textfarbe erben und automatisch zum Kontext passen)
- Sind SVGs SKALIERBAR? (viewBox Attribut vorhanden? Keine festen width/height in px im SVG selbst?)
- Sind Icons auf verschiedenen Hintergründen SICHTBAR? (Ein weißes Icon auf weißem Hintergrund → UNSICHTBAR)
- Sind Icon-Größen KONSISTENT? (Alle Navigation-Icons gleich groß. Alle Feature-Icons gleich groß.)

Aktion 37.3 — Dekorative Elemente & Hintergrund-Grafiken:
Prüfe ALLE dekorativen Elemente (Divider, Shapes, Background-Patterns, Gradients):
- Stören dekorative Elemente die LESBARKEIT des Texts? (Hintergrund-Patterns mit zu starkem Kontrast)
- Sind dekorative Elemente auf ALLEN Breakpoints sinnvoll? (Ein großes Background-Shape das auf Mobile den halben Text verdeckt)
- Haben decorative absolute/fixed Elemente pointer-events-none? (Sonst blockieren sie Klicks auf darunterliegende Elemente)
- Sind Gradient-Overlays korrekt? (Gradient der auf Desktop am unteren Bildrand endet → auf Mobile eventuell den halben Content verdunkelt)

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 38: ANIMATIONS-SICHERHEIT & TRANSITION-AUDIT

Aktion 38.1 — Jede Animation auf Schaden prüfen:
Suche nach JEDER Animation und Transition im Projekt:
- CSS-Animationen: @keyframes, animation-*, animate-*
- Tailwind-Transitions: transition-*, duration-*, ease-*
- Framer Motion: motion.div, initial, animate, exit, variants
- Custom Hooks: useInView, useScroll, useAnimation, IntersectionObserver
Für JEDE gefundene Animation:
- Setzt sie opacity: 0 als Startzustand? → RISIKO: Element bleibt unsichtbar wenn Animation nicht triggert
- Setzt sie transform: translateX(-100%) oder translateY(100%)? → RISIKO: Element ist außerhalb des Viewports
- Setzt sie scale(0)? → RISIKO: Element ist unsichtbar
- Hat sie eine UNENDLICHE Dauer oder extrem lange Dauer (> 2s)? → Fühlt sich broken an
- Hat sie die Eigenschaft animation-fill-mode: forwards UND der Endzustand ist opacity: 0? → Element VERSCHWINDET nach Animation
WENN eine Animation ein Sichtbarkeits-Risiko hat UND nicht 100% zuverlässig triggert → ENTFERNE SIE. Setze die Elemente auf ihren FINALEN sichtbaren Zustand (opacity: 1, transform: none).

Aktion 38.2 — Scroll-Trigger-Animationen absichern:
Suche nach ALLEN scroll-triggered Animationen (IntersectionObserver, useInView, AOS, ScrollReveal):
- Gibt es einen FALLBACK wenn der Observer NICHT feuert? (Timeout nach 3 Sekunden → Element auf sichtbar setzen)
- Triggern die Animationen EINMAL oder bei jedem Scroll? (once: true vs. Endlos-Retriggering das nervt)
- Funktionieren die Animationen auf ALLEN Breakpoints? (Ein IntersectionObserver mit rootMargin das auf Mobile nicht passt)
- PRÜFE: Scrolle JEDE Seite von oben nach unten. Bleiben Elemente unsichtbar? Flackern Elemente? Animieren Elemente RÜCKWÄRTS beim Scroll-Up?

Aktion 38.3 — Transition-Timing validieren:
- Sind hover-Transitions SCHNELL GENUG? (duration-200 oder duration-300 — NICHT duration-1000 auf einem Button-Hover)
- Sind Seiten-Transitions (page transitions) NICHT störend? (Kein 2-Sekunden-Fade bei Seitenwechsel)
- Haben Dropdown-Animations eine ANGEMESSENE Dauer? (150ms-300ms — NICHT 1s)
- Gibt es Transitions die bei REDUZIERTEM Motion abgeschaltet werden? (@media (prefers-reduced-motion: reduce) → Transitions auf 0ms oder entfernen)

Aktion 38.4 — Layout-Shift durch Animationen verhindern:
Prüfe ob Animationen CLS (Cumulative Layout Shift) verursachen:
- Animated-in Elemente die KEINEN reservierten Platz haben → Content springt wenn sie erscheinen
- Lazy-loaded Bilder ohne width/height → Layout springt beim Laden
- Font-Swap (FOUT/FOIT) → Text springt wenn Custom-Font lädt
- Conditional Content (z.B. ein Banner der nach 3 Sekunden eingeblendet wird) → Schiebt den Content nach unten
FIX: Reserviere IMMER den Platz für animierte Elemente mit min-h-*, aspect-ratio oder festen Dimensionen. Animiere NUR transform und opacity (diese verursachen KEINEN Layout-Shift). NIEMALS width, height, margin, padding animieren.

═══════════════════════════════════════════════════════════════════════════════
BLOCK E.4 — TOTALE CODE-STERILISATION (Kein überflüssiges Byte überlebt)
═══════════════════════════════════════════════════════════════════════════════

Dieser Block ist die LETZTE VERTEIDIGUNGSLINIE gegen Code-Verfall. Während Block E Dead Code auf Datei-Ebene entfernt und Block E.2 Logik auf Zeilen-Ebene prüft, geht Block E.4 an die STRUKTURELLE REINHEIT des Codes. Duplizierter Code, unsichere TypeScript-Konstrukte, Magic Values, tote Routen, verwaiste Konfigurationen, inkonsistente Namensgebung, Legacy-Patterns und undiszipliniertes Environment-Handling — ALLES wird identifiziert und chirurgisch entfernt oder korrigiert. Nach diesem Block ist die Codebase STERIL.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 39: DUPLIKAT-CODE ERKENNUNG & EXTRAKTION

Aktion 39.1 — Copy-Paste-Code zwischen Komponenten aufspüren:
Durchsuche JEDE Komponente und vergleiche sie mit JEDER anderen. Suche nach:
- Identischen oder nahezu identischen JSX-Blöcken in verschiedenen Dateien (z.B. zwei verschiedene Seiten rendern beide einen Hero-Bereich mit denselben Tailwind-Klassen, derselben Struktur, nur anderem Text)
- Identischen Utility-Funktionen die in mehreren Dateien KOPIERT statt IMPORTIERT wurden (z.B. formatDate() existiert in 3 verschiedenen Komponenten statt in /lib/utils/)
- Identischen TypeScript-Interfaces die in verschiedenen Dateien DOPPELT definiert sind statt aus einer zentralen /types/ Datei importiert zu werden
- Identischen Tailwind-Klassenketten die auf 5+ Elementen wiederholt werden (z.B. "flex items-center justify-between px-6 py-4 bg-white rounded-lg shadow-md" auf 8 verschiedenen Cards → Extrahiere in eine Card-Komponente ODER definiere als @apply Klasse)
FIX-STRATEGIE: Für jeden gefundenen Duplikat-Block:
- JSX-Duplikate → Extrahiere in eine WIEDERVERWENDBARE Komponente mit Props für die variablen Teile
- Utility-Duplikate → Verschiebe in /lib/utils/ oder /lib/helpers/ und importiere von dort
- Interface-Duplikate → Verschiebe in /types/ oder /lib/types.ts und importiere von dort
- Tailwind-Duplikate → Erstelle eine Komponente ODER nutze @apply in einem CSS-Modul (nur wenn die Klasse in 5+ Stellen verwendet wird)

Aktion 39.2 — Ähnliche Komponenten konsolidieren:
Suche nach Komponenten die sich nur in 1-2 Props unterscheiden aber ansonsten identisch aufgebaut sind:
- ServiceCard und TeamCard die beide ein Bild, Titel, Text und Link haben → Konsolidiere zu einer generischen InfoCard mit variant-Prop
- PrimaryButton und SecondaryButton die identisches HTML rendern mit unterschiedlichen Tailwind-Klassen → Konsolidiere zu einem Button mit variant-Prop
- MobileNav und DesktopNav die identische Link-Listen rendern aber unterschiedlich gestylt sind → Extrahiere die Link-Daten und -Logik in einen Shared Hook oder eine gemeinsame Datenquelle
REGEL: Wenn zwei Komponenten mehr als 70% identischen Code haben → KONSOLIDIERE sie. Weniger Code = weniger Bugs = einfachere Wartung.

Aktion 39.3 — Redundante Wrapper-Komponenten eliminieren:
Suche nach Komponenten die NICHTS TUN außer ein Kind-Element zu wrappen:
- Komponenten die NUR ein div mit einer Klasse rendern und {children} durchreichen → Ersetze durch direktes Markup am Aufrufort ODER durch eine Utility-Funktion
- Komponenten die einen Provider wrappen der nur EINEN Consumer hat → Flache den Provider direkt in das Layout ein
- Komponenten die nur Props durchreichen ohne eigene Logik → Entferne den Middleman
- Layout-Wrapper die identisch mit dem bereits vorhandenen Next.js Layout sind → ENTFERNEN
AUSNAHME: Wrapper die Logik hinzufügen (Error-Boundary, Auth-Guard, Loading-State) sind KEINE Redundanz.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 40: TYPESCRIPT STRENGE-AUDIT — JEDES ANY MUSS STERBEN

Aktion 40.1 — Jeden any-Type im Projekt eliminieren:
Suche nach JEDEM Vorkommen von : any, as any, <any>, any[] im gesamten Projekt. Für JEDES Vorkommen:
- WARUM steht dort any? Ist es Faulheit oder gibt es einen echten Grund?
- Kann es durch einen SPEZIFISCHEN Type ersetzt werden? (In 95% der Fälle: JA)
- Für Event-Handler: any → React.MouseEvent, React.ChangeEvent<HTMLInputElement>, React.FormEvent<HTMLFormElement>
- Für API-Responses: any → Definiere ein Interface das die Response-Struktur beschreibt
- Für dynamische Daten: any → Nutze generics (T extends Record<string, unknown>) oder unknown mit Type-Guards
- Für Library-Typen die fehlen: any → Erstelle eine lokale Type-Declaration (declare module "library-name")
ZIEL: ZERO any im gesamten Projekt. tsconfig.json MUSS "strict": true haben.

Aktion 40.2 — Type-Assertions (as) auditieren:
Suche nach JEDEM as Keyword das als Type-Assertion genutzt wird:
- value as string → Ist garantiert dass value ein String ist? Wenn nicht: typeof value === "string" Guard nutzen
- event.target as HTMLInputElement → Akzeptabel in Event-Handlern wo der Target-Type bekannt ist
- data as ServiceType → GEFÄHRLICH wenn data von extern kommt. Nutze Zod, io-ts oder manuelle Validierung stattdessen
- response.json() as ApiResponse → GEFÄHRLICH. Validiere die Response-Struktur bevor du sie castest
REGEL: Type-Assertions sind LÜGEN AN DEN COMPILER. Jede einzelne muss begründet sein. Wo möglich: Ersetze durch Type-Guards, Discriminated Unions oder Validierungs-Bibliotheken.

Aktion 40.3 — Non-Null-Assertions (!) eliminieren:
Suche nach JEDEM ! als Non-Null-Assertion (NICHT als logisches NOT):
- document.getElementById("root")! → Was wenn das Element nicht existiert? Nutze optional chaining oder prüfe auf null
- user!.name → Warum kann user null sein? Behebe die Ursache statt die Warnung zu unterdrücken
- ref.current! → Refs sind initial null. Nutze ref.current?.method() oder prüfe auf null
- array.find(...)! → .find() gibt T | undefined zurück. Das ! ignoriert den undefined-Fall. Handle ihn stattdessen.
REGEL: Jedes ! ist ein potenzieller Runtime-Crash. Ersetze JEDES Vorkommen durch sichere Alternativen.

Aktion 40.4 — @ts-ignore und @ts-expect-error eliminieren:
Suche nach JEDEM @ts-ignore und @ts-expect-error Kommentar:
- @ts-ignore unterdrückt JEDEN Fehler in der nächsten Zeile — inklusive echten Bugs. ENTFERNE es und FIXE den eigentlichen Fehler.
- @ts-expect-error ist MINIMAL besser (meldet wenn der Fehler verschwindet) aber sollte trotzdem NICHT nötig sein.
- Für JEDES Vorkommen: Was ist der zugrundeliegende Type-Fehler? Kann er durch korrekte Typisierung gelöst werden? In 99% der Fälle: JA.
ZIEL: ZERO @ts-ignore und ZERO @ts-expect-error im gesamten Projekt.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 41: MAGIC VALUES ELIMINIEREN — JEDE HARDCODED ZAHL UND JEDER HARDCODED STRING

Aktion 41.1 — Magic Numbers aufspüren und extrahieren:
Durchsuche den GESAMTEN Code nach hardcodierten Zahlen die NICHT selbsterklärend sind:
- setTimeout(callback, 3000) → Was bedeuten 3000ms? Extrahiere: const ANIMATION_DELAY_MS = 3000
- if (items.length > 6) → Warum 6? Extrahiere: const MAX_VISIBLE_ITEMS = 6
- padding: "24px" in Inline-Styles → Warum 24? Nutze Tailwind-Klassen (p-6) oder Design-Tokens
- width: 1280 in Berechnungen → Was repräsentiert 1280? Extrahiere: const DESKTOP_BREAKPOINT = 1280
- Akzeptable Magic Numbers die NICHT extrahiert werden müssen: 0, 1, -1, 2 in mathematischen Berechnungen wo der Kontext klar ist. Array-Indices (array[0] für das erste Element). Standardwerte die offensichtlich sind (opacity: 1, z-index: 0).
FIX: Erstelle eine /lib/constants.ts Datei (oder erweitere die bestehende) und sammle ALLE Domain-spezifischen Konstanten dort. Exportiere sie typsicher.

Aktion 41.2 — Magic Strings aufspüren und extrahieren:
Durchsuche den GESAMTEN Code nach hardcodierten Strings die an MEHREREN Stellen verwendet werden:
- Wiederholte URL-Pfade: "/leistungen/webdesign" an 5 verschiedenen Stellen → Extrahiere in /lib/routes.ts oder /lib/constants.ts
- Wiederholte Farb-Werte in Inline-Styles: "rgb(59, 130, 246)" → MUSS Tailwind-Klasse sein (text-blue-500)
- Wiederholte API-Endpoints: "https://formspree.io/f/xxxxx" → Extrahiere als FORMSPREE_ENDPOINT Konstante
- Wiederholte Fehlermeldungen: "Ein Fehler ist aufgetreten" an 4 Stellen → Extrahiere in /lib/messages.ts
- Wiederholte Breakpoint-Strings in matchMedia Aufrufen → Extrahiere in /lib/breakpoints.ts
REGEL: Wenn ein String an mehr als EINER Stelle vorkommt → Extrahiere ihn in eine Konstante. Single Source of Truth.

Aktion 41.3 — Enum-Kandidaten identifizieren:
Suche nach String-Unions oder wiederholten String-Vergleichen die als Enums oder Const-Objects besser aufgehoben wären:
- type Status = "loading" | "success" | "error" ist OK als Union-Type
- ABER: if (status === "loading") an 5 verschiedenen Stellen → Extrahiere: const STATUS = { LOADING: "loading", SUCCESS: "success", ERROR: "error" } as const → Dann: if (status === STATUS.LOADING) → Typo-sicher und autocompletion-fähig
- Wiederholte String-Keys für Objekt-Lookups → Definiere als typsicheres Const-Object

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 42: TOTE ROUTEN & UNERREICHBARER CODE

Aktion 42.1 — Verwaiste Seiten identifizieren:
Prüfe JEDE page.tsx im /app Verzeichnis:
- Wird diese Seite von IRGENDEINEM Link auf der Website erreichbar gemacht? (Suche nach href="/route-pfad" im gesamten Projekt)
- Ist die Seite in der Navigation verlinkt?
- Ist die Seite in der Sitemap enthalten?
- Wenn eine Seite NIRGENDS verlinkt ist: Ist sie trotzdem über die URL erreichbar und gewollt? (z.B. /impressum das nur im Footer verlinkt ist — das ist OK)
- Wenn eine Seite WEDER verlinkt NOCH gewollt ist: ENTFERNE die page.tsx. Dokumentiere die Entfernung im Log.

Aktion 42.2 — Unerreichbare Code-Pfade:
Suche nach Code der NIEMALS ausgeführt werden kann:
- Code nach einem return-Statement (dead code nach return/throw/continue/break)
- Code in if-Blöcken mit Bedingungen die IMMER false sind (if (false), if (typeof window === "undefined") in einer "use client" Datei)
- Funktionen die eine Exception werfen BEVOR sie zum Return kommen können
- Switch-Cases die durch vorherige Cases bereits abgedeckt sind
- Catch-Blöcke die Fehler fangen die NICHT geworfen werden können (try um synchronen Code der keine Fehler wirft)
ENTFERNE jeden unerreichbaren Code-Pfad. Er ist totes Gewicht und verschleiert die echte Logik.

Aktion 42.3 — Unbenutzbare Feature-Fragmente:
Suche nach halbfertigen Features die NIEMALS fertig implementiert wurden:
- Komponenten die existieren aber nirgends importiert werden UND keine funktionierende UI haben
- API-Route-Handler die existieren aber von keinem Frontend-Code aufgerufen werden
- State-Management-Logik (Context, Reducer) die erstellt aber nie in einen Provider eingebunden wurde
- Utility-Funktionen mit Namen wie "experimental", "test", "old", "backup", "v2"
- Dateien in Ordnern wie /archive/, /old/, /backup/, /unused/, /deprecated/
ENTFERNE alles was nicht zum AKTUELLEN, FUNKTIONIERENDEN Produkt gehört. Git bewahrt die History.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 43: KONFIGURATIONS-HYGIENE — JEDE CONFIG-DATEI AUDITIEREN

Aktion 43.1 — tsconfig.json Audit:
Prüfe JEDE Option in tsconfig.json:
- "strict": true → MUSS gesetzt sein. Wenn false oder fehlend: SOFORT auf true setzen und ALLE resultierenden Fehler beheben.
- "noUnusedLocals": true → Aktivieren (meldet ungenutzte Variablen als Fehler)
- "noUnusedParameters": true → Aktivieren (meldet ungenutzte Funktions-Parameter als Fehler)
- "noImplicitReturns": true → Aktivieren (erzwingt explizite Returns in allen Code-Pfaden)
- "noFallthroughCasesInSwitch": true → Aktivieren (verhindert vergessene break-Statements)
- "forceConsistentCasingInFileNames": true → MUSS gesetzt sein (verhindert Import-Probleme auf Case-sensitiven Dateisystemen)
- "paths" Aliase: Sind alle definierten Aliases (@/*, @components/*, @lib/*) TATSÄCHLICH in Verwendung? Gibt es Aliase die nirgends genutzt werden? ENTFERNEN.
- "include" und "exclude": Sind die korrekten Verzeichnisse eingeschlossen/ausgeschlossen?

Aktion 43.2 — ESLint-Konfiguration auditieren:
- Existiert eine ESLint-Konfiguration? (.eslintrc.js, .eslintrc.json, eslint.config.mjs)
- Nutzt sie next/core-web-vitals oder eine vergleichbare strikte Basis?
- Gibt es CUSTOM Regeln die SINNVOLL sind? Oder gibt es Regeln die wichtige Checks DEAKTIVIEREN? (z.B. "@typescript-eslint/no-explicit-any": "off" → SOFORT auf "error" setzen)
- Gibt es .eslintignore Einträge die zu VIEL ignorieren? (Ganze Ordner die eigentlich gelintet werden sollten)
- Gibt es Inline-Disable-Kommentare (// eslint-disable-next-line) in Dateien? Für JEDES Vorkommen: Ist das Disable BEGRÜNDET oder ist es Faulheit? Wenn Faulheit: ENTFERNE den Kommentar und FIXE den Fehler.

Aktion 43.3 — next.config Tiefenaudit:
Prüfe JEDE Zeile der next.config.ts/js/mjs:
- Gibt es auskommentierte Konfigurationsblöcke? → ENTFERNEN
- Gibt es experimentelle Features? → Sind sie STABIL genug für Produktion? Wenn nicht: ENTFERNEN
- Gibt es Custom-Webpack-Konfigurationen? → Sind sie NÖTIG? Viele Custom-Configs sind Überbleibsel aus älteren Next.js-Versionen die jetzt nativ unterstützt werden
- Gibt es Redirects/Rewrites die auf nicht-existierende Routen zeigen? → ENTFERNEN
- Gibt es env-Deklarationen die NICHT in .env Dateien gehören? → VERSCHIEBEN
- images.domains oder images.remotePatterns: Werden ALLE aufgelisteten Domains tatsächlich für Bilder genutzt? Nicht genutzte Domains: ENTFERNEN

Aktion 43.4 — Tailwind-Config Audit:
Prüfe tailwind.config.ts/js:
- content-Array: Umfasst es ALLE Dateien die Tailwind-Klassen verwenden? (app/**, components/**, lib/**)
- theme.extend: Gibt es Custom-Werte die NIRGENDS im Code genutzt werden? (Custom-Farben, Custom-Breakpoints, Custom-Fonts die nie referenziert werden → ENTFERNEN)
- plugins: Werden ALLE Plugins tatsächlich genutzt? (@tailwindcss/typography, @tailwindcss/forms — nur behalten wenn WIRKLICH verwendet)

Aktion 43.5 — PostCSS & weitere Config-Dateien:
- postcss.config.js: Ist die Pipeline korrekt? (tailwindcss, autoprefixer — in dieser Reihenfolge)
- .gitignore: Werden die RICHTIGEN Dateien ignoriert? (node_modules, .next, .env.local, .env — ABER NICHT .env.example)
- package.json scripts: Gibt es Scripts die nicht funktionieren oder nicht genutzt werden? ENTFERNEN.
- Gibt es eine .prettierrc? Ist sie konsistent mit dem Code-Style? Gibt es Konflikte mit ESLint?

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 44: NAMING-CONVENTION ENFORCEMENT

Aktion 44.1 — Dateinamen-Konventionen erzwingen:
Prüfe JEDE Datei im Projekt auf konsistente Benennung:
- React-Komponenten: PascalCase (Button.tsx, ServiceCard.tsx, HeroSection.tsx). NICHT: button.tsx, service-card.tsx, heroSection.tsx
- Utility-Dateien: camelCase (formatDate.ts, validateEmail.ts). ODER kebab-case (format-date.ts). Wähle EINES und wende es KONSISTENT an.
- Hook-Dateien: camelCase mit use-Prefix (useScrollPosition.ts, useMediaQuery.ts)
- Daten-Dateien: camelCase oder kebab-case (services.ts, team-members.ts)
- Next.js-Konventionen: page.tsx, layout.tsx, loading.tsx, error.tsx, not-found.tsx → Diese sind UNVERÄNDERLICH
- Type-Dateien: camelCase oder kebab-case (types.ts, service-types.ts)
FIX: Wenn eine Datei FALSCH benannt ist: Rename sie. Aktualisiere ALLE Imports die auf sie verweisen. Verifiziere den Build.

Aktion 44.2 — Variablen & Funktionsnamen-Konventionen:
Prüfe den GESAMTEN Code auf konsistente Benennung:
- Variablen: camelCase (const serviceData, const isLoading, const handleClick)
- Funktionen: camelCase mit Verb-Prefix (getServices, formatDate, validateForm, handleSubmit)
- Komponenten: PascalCase (function ServiceCard, const HeroSection)
- Konstanten: UPPER_SNAKE_CASE für echte Konstanten (const MAX_ITEMS = 10, const API_URL = "...")
- TypeScript Types/Interfaces: PascalCase (interface ServiceProps, type ButtonVariant)
- Enums: PascalCase für Name und Werte (enum Status { Active, Inactive })
- Boolean-Variablen: Prefix mit is, has, can, should (isOpen, hasError, canSubmit, shouldRender)
INKONSISTENZEN: Suche nach Stellen wo dasselbe Konzept unterschiedlich benannt wird (getData vs fetchData vs loadData für die gleiche Operation → Vereinheitliche auf EINEN Namen)

Aktion 44.3 — Ordnerstruktur-Konsistenz prüfen:
- Gibt es Komponenten die NICHT in /components/ liegen? (Verstreut in /app/ Unterordnern ohne Grund)
- Gibt es Utilities die NICHT in /lib/ liegen?
- Gibt es Daten-Dateien die NICHT in /lib/data/ liegen?
- Gibt es Type-Definitionen die NICHT in /types/ oder /lib/types.ts liegen?
- Sind Ordnernamen konsistent? (NICHT: /Components/, /COMPONENTS/, /components/ gemischt)
- Gibt es leere Ordner? → ENTFERNEN

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 45: LEGACY-PATTERN & DEPRECATED-API ERKENNUNG

Aktion 45.1 — React Legacy-Patterns eliminieren:
Suche nach veralteten React-Patterns die in React 19+ nicht mehr Best Practice sind:
- Class Components (class MyComponent extends React.Component) → Konvertiere zu Function Components mit Hooks
- componentDidMount, componentDidUpdate, componentWillUnmount → Ersetze durch useEffect
- this.state, this.setState → Ersetze durch useState
- React.createRef() → Ersetze durch useRef
- React.forwardRef() → In React 19 ist ref eine normale Prop, forwardRef ist nicht mehr nötig
- PropTypes (import PropTypes from 'prop-types') → TypeScript-Interfaces ersetzen PropTypes vollständig. ENTFERNE PropTypes-Imports und -Definitionen
- defaultProps auf Function Components → Nutze Destructuring-Defaults stattdessen
- String Refs (ref="myRef") → FATAL VERALTET. Ersetze durch useRef

Aktion 45.2 — Next.js veraltete Patterns:
Suche nach Patterns die in Next.js App Router veraltet sind:
- getServerSideProps, getStaticProps, getStaticPaths → Nur in Pages Router gültig. In App Router: async Server Components, generateStaticParams
- next/head → In App Router: metadata Export oder generateMetadata
- next/router → In App Router: next/navigation (useRouter, usePathname, useSearchParams)
- _app.tsx, _document.tsx → Nur Pages Router. In App Router: layout.tsx
- pages/ Verzeichnis neben app/ Verzeichnis → Kann zu Konflikten führen. Wenn App Router verwendet wird: pages/ ENTFERNEN (außer für API-Routes die noch nicht migriert sind)
- next/link mit legacyBehavior → ENTFERNE legacyBehavior, nutze die moderne Link-API

Aktion 45.3 — Veraltete npm-Pakete identifizieren:
Prüfe package.json auf bekannte veraltete Pakete:
- moment.js → Ersetze durch date-fns oder natives Intl.DateTimeFormat
- lodash (Vollimport) → Nutze nur benötigte Funktionen oder native JS-Alternativen (Array.flat, Object.entries, structuredClone)
- classnames / clsx neben Tailwind → Oft unnötig wenn Tailwind conditional classes über Template Literals gelöst werden können
- node-fetch in Next.js → Nicht nötig, fetch ist nativ verfügbar
- axios → Nicht nötig für einfache Requests, fetch ist nativ. Nur behalten wenn Advanced-Features genutzt werden (Interceptors, Cancel-Tokens)
- sass / node-sass neben Tailwind → Wenn Tailwind das gesamte Styling übernimmt: ENTFERNEN
Für JEDES veraltete Paket: Ersetze durch die moderne Alternative. Entferne das alte Paket. Verifiziere den Build.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 46: ENVIRONMENT-VARIABLE HYGIENE

Aktion 46.1 — Environment-Variable Inventar erstellen:
Erfasse JEDE Umgebungsvariable die im Projekt verwendet wird:
- Suche nach process.env. in ALLEN Dateien
- Suche nach NEXT_PUBLIC_ Variablen in ALLEN Dateien
- Vergleiche mit .env, .env.local, .env.production, .env.development Dateien
Für JEDE Variable: Wird sie TATSÄCHLICH im Code referenziert? Wenn eine Variable in .env definiert ist aber NIRGENDS im Code genutzt wird → ENTFERNEN.

Aktion 46.2 — NEXT_PUBLIC_ Audit:
JEDE Variable mit NEXT_PUBLIC_ Prefix ist im CLIENT-BUNDLE sichtbar:
- Enthält sie etwas SENSIBLES? (API-Keys, Tokens, Passwörter → SOFORT entfernen und durch Server-seitige Variablen ersetzen)
- Ist sie WIRKLICH im Client nötig? (Wenn sie nur in Server Components genutzt wird → Entferne den NEXT_PUBLIC_ Prefix)
- Gibt es NEXT_PUBLIC_ Variablen die NICHT existieren aber referenziert werden? (Führt zu undefined → Runtime-Fehler)

Aktion 46.3 — .env.example erstellen oder aktualisieren:
Existiert eine .env.example Datei? Wenn nicht: ERSTELLE sie. Sie muss JEDE benötigte Umgebungsvariable auflisten — MIT Beschreibung und Platzhalter-Wert, OHNE echte Secrets:
NEXT_PUBLIC_FORMSPREE_ID=your_formspree_id_here
NEXT_PUBLIC_CALENDLY_URL=your_calendly_url_here
NEXT_PUBLIC_SITE_URL=https://your-domain.com
Wenn .env.example existiert: Ist sie AKTUELL? Enthält sie ALLE benötigten Variablen? Enthält sie KEINE veralteten Variablen?

Aktion 46.4 — Runtime-Validierung für kritische Variablen:
Für JEDE Variable die KRITISCH für den Betrieb ist:
- Gibt es eine Prüfung beim Build oder Startup die sicherstellt dass die Variable EXISTIERT? (z.B. eine /lib/env.ts Datei die alle Variablen validiert und bei fehlenden Variablen eine klare Fehlermeldung wirft statt undefiniert weiterzulaufen)
- Gibt es Fallback-Werte wo sinnvoll? (SITE_URL → "http://localhost:3000" als Fallback in Development)
- Werden Variablen mit Zod oder einem ähnlichen Schema validiert? (Typsicherheit für Env-Variablen)

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 47: CODE-FORMATIERUNG & STRUKTURELLE KONSISTENZ

Aktion 47.1 — Einrückungs-Konsistenz erzwingen:
Prüfe ob das GESAMTE Projekt eine EINHEITLICHE Einrückung verwendet:
- Tabs oder Spaces? → EINE Wahl. Konsistent im GESAMTEN Projekt
- 2 Spaces oder 4 Spaces? → Next.js-Konvention ist 2 Spaces. Wenn gemischt: VEREINHEITLICHE auf 2 Spaces.
- Gibt es Dateien mit gemischter Einrückung? (Manche Zeilen 2 Spaces, andere 4, andere Tabs → SOFORT bereinigen)
FIX: Konfiguriere .editorconfig und/oder .prettierrc konsistent. Formatiere den GESAMTEN Code mit dem gewählten Standard.

Aktion 47.2 — Import-Ordnung konsistentieren:
Jede Datei sollte eine KONSISTENTE Import-Reihenfolge haben:
1. React / Next.js Imports (react, next/*)
2. Externe Library-Imports (framer-motion, lucide-react etc.)
3. Interne Absolute Imports (@/components/*, @/lib/*)
4. Relative Imports (./Component, ../utils)
5. Type-Only Imports (import type { ... })
6. CSS-Imports (import "./styles.css")
Suche nach Dateien wo diese Reihenfolge NICHT eingehalten wird und KORRIGIERE sie. Konfiguriere eine ESLint-Regel (eslint-plugin-import/order) um die Reihenfolge automatisch zu erzwingen.

Aktion 47.3 — Konsistente Export-Patterns:
Prüfe ob das Projekt EINHEITLICHE Export-Patterns verwendet:
- Default Exports für Komponenten? ODER Named Exports? → WÄHLE EINES. Empfehlung: Default Exports für Page/Layout-Komponenten (Next.js-Konvention), Named Exports für alle anderen Komponenten und Utilities.
- Gibt es Dateien die BEIDES mischen? (export default function Component + export function helper in derselben Datei → TRENNEN oder KONSISTENT machen)
- Gibt es Re-Exports die den Import-Pfad unnötig verlängern? (import { Button } from "@/components/ui/button/index" statt "@/components/ui/button")

Aktion 47.4 — Kommentar-Hygiene:
Prüfe ALLE Kommentare im Projekt:
- Gibt es Kommentare die dem Code WIDERSPRECHEN? (Kommentar sagt "berechne Summe" aber der Code berechnet den Durchschnitt → KORRIGIERE den Kommentar oder ENTFERNE ihn)
- Gibt es offensichtliche Kommentare die NICHTS NEUES sagen? (// Setze State auf true → setState(true) — Der Code ist selbsterklärend, der Kommentar ist Rauschen → ENTFERNE ihn)
- Gibt es Kommentare in einer ANDEREN SPRACHE als der Rest? (Englische Codebase mit vereinzelten deutschen Kommentaren oder umgekehrt → VEREINHEITLICHE)
- Gibt es Kommentare mit Autoren-Namen, Datum oder Versions-Informationen? (// Added by Max on 12.03.2024 → Das gehört in die Git-History, NICHT in den Code → ENTFERNE es)
- Gibt es große Kommentar-Blöcke die ganze Sektionen erklären? → Oft ein Zeichen dass der Code zu komplex ist. Refactore den Code stattdessen.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 48: FEHLERHAFTE LOGIK & STILLE BUGS AUFSPÜREN

Aktion 48.1 — Typ-Zwangs-Fallen (Type Coercion Bugs):
Suche nach JEDEM Vergleich mit == statt ===:
- == vergleicht NICHT typstrikt: 0 == "" ist true, null == undefined ist true, "1" == 1 ist true
- ERSETZE JEDES == durch === und JEDES != durch !== im gesamten Projekt (AUSNAHME: null-Check mit == null prüft auf null UND undefined gleichzeitig — das ist ein AKZEPTABLER Shortcut)
Suche nach impliziter Type-Coercion:
- if (value) → Ist 0 ein gültiger Wert? Dann ist if (value) FALSCH weil 0 falsy ist. Nutze if (value !== undefined && value !== null)
- String-Konkatenation mit + wo Zahlen erwartet werden: "5" + 3 = "53" (String), 5 + 3 = 8 (Number)

Aktion 48.2 — Off-by-One Fehler:
Suche nach typischen Off-by-One Patterns:
- Array-Schleifen: for (let i = 0; i <= array.length; ...) → <= sollte < sein (Zugriff auf array[array.length] = undefined)
- Slice/Substring: string.slice(0, 5) gibt Zeichen 0-4 zurück, NICHT 0-5
- Pagination: Seite 1 zeigt Items 0-9, Seite 2 zeigt Items 10-19 — wird korrekt berechnet? ((page - 1) * pageSize)
- Index-basierte Berechnungen: Wird korrekt zwischen 0-basiert und 1-basiert unterschieden?

Aktion 48.3 — Race-Conditions in State-Updates:
Suche nach Patterns die zu Race-Conditions führen:
- Mehrere setState-Aufrufe die voneinander abhängen aber NICHT gebatetched werden: setCount(count + 1); setTotal(count * price) → count ist hier noch der ALTE Wert. Fix: Nutze functional Updates oder useReducer.
- Fetch-Aufrufe die parallel laufen aber Ergebnisse in falscher Reihenfolge ankommen: User tippt "abc", Fetch für "a" startet, Fetch für "ab" startet, Fetch für "abc" startet — Fetch für "a" kommt ZULETZT zurück und überschreibt das korrekte Ergebnis. Fix: AbortController, Request-Counter oder useId-basierte Tracking.
- Event-Handler die auf altem State operieren (Stale Closures): Ein onClick-Handler der einen State-Wert aus dem Render-Zeitpunkt captured statt den aktuellen Wert zu lesen.

Aktion 48.4 — Referenz vs. Kopie Bugs:
Suche nach Stellen wo Arrays oder Objekte MUTIERT statt KOPIERT werden:
- array.push(item) MUTIERT das Original → Nutze [...array, item]
- array.sort() MUTIERT das Original → Nutze [...array].sort()
- array.splice() MUTIERT das Original → Nutze array.filter() oder array.toSpliced()
- object.property = value MUTIERT das Original → Nutze { ...object, property: value }
- Verschachtelte Objekte: { ...object } macht nur eine SHALLOW Copy. Verschachtelte Objekte sind immer noch Referenzen → Nutze structuredClone() für Deep Copies oder Spreade JEDE Ebene explizit
IN REACT IST MUTATION DER #1 BUG-VERURSACHER. React erkennt KEINE Mutationen — es vergleicht REFERENZEN. Wenn du ein Array mutierst statt ein neues zu erstellen, re-rendert React NICHT und die UI zeigt veraltete Daten.

═══════════════════════════════════════════════════════════════════════════════
BLOCK F — FINALE VALIDIERUNG & REPARATUR-ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 49: DREIFACH-BUILD-VERIFIZIERUNG

Aktion 39.1 — Die drei Säulen:
npm run build → MUSS ZERO Errors haben
npx tsc --noEmit → MUSS ZERO Errors haben
npm run lint → Dokumentiere Ergebnisse (Errors beheben, Warnings akzeptabel)

Wenn EINER fehlschlägt: STOPPE. Gehe zurück zu Block A. Fixe den Fehler. Dann erneut dreifach verifizieren. Es gibt KEIN "der Build hat fast bestanden".

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 40: VISUELLE KOMPLETT-VERIFIZIERUNG

Aktion 40.1 — JEDE Route einzeln durchgehen und bewerten:

Startseite (/):
- Hero-Section: Text lesbar? CTA sichtbar und klickbar? Bild/Grafik vorhanden?
- Alle Sektionen: Sichtbar? Text lesbar? Korrekte Reihenfolge?
- Testimonials/Stats/Trust-Elemente: Angezeigt? Nicht zerbrochen?

Service-Seiten (/leistungen und Unterseiten):
- Service-Liste: Cards sichtbar? Bilder vorhanden? Links funktionieren?
- Service-Details: Content sichtbar? Layout korrekt?

Über-uns-Seite:
- Team-Bereich: Bilder laden? Text lesbar?
- Unternehmensinfo: Vorhanden und korrekt formatiert?

Kontakt-Seite:
- Formular: Alle Felder sichtbar und funktional?
- Kontaktdaten: Sichtbar?
- Calendly (falls vorhanden): Lädt oder hat Fallback?

Blog:
- Post-Liste: Angezeigt? Klickbar?
- Post-Detail: Content sichtbar? Lesbar?

Rechtliche Seiten:
- Impressum: Text vorhanden?
- Datenschutz: Text vorhanden?
- AGB (falls vorhanden): Text vorhanden?

ALLE weiteren Routen: Einzeln durchgehen und bewerten.

Aktion 40.2 — Cross-Page Konsistenz:
- Navigation sieht auf JEDER Seite identisch aus
- Footer sieht auf JEDER Seite identisch aus
- Überschriften-Hierarchie ist konsistent
- Farbpalette ist konsistent
- Abstände sind konsistent

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 41: REPARATUR-LOG FINALISIEREN

Aktion 41.1 — Log vollständig aktualisieren:
Öffne .emergency-repair-log.md und dokumentiere für DIESEN Durchlauf:

DURCHLAUF X — ABSCHLUSS-REPORT
Gefundene Defekte: X (P1: X, P2: X, P3: X, P4: X)
Behobene Defekte: X (P1: X, P2: X, P3: X, P4: X)
Verbleibende Defekte: X (P1: X, P2: X, P3: X, P4: X)
Entfernte Komponenten: (Liste)
Deaktivierte Features: (Liste)
Build-Status: PASS / FAIL
TSC-Status: PASS (0 Errors) / FAIL (X Errors)
Lint-Status: PASS / X Warnings
Browser-Console: Sauber / X Errors

Aktion 41.2 — GESAMTBEWERTUNG ausgeben:

SZENARIO A — Alle P1+P2+P3+P4 behoben, Build grün:
→ "WEBSITE IST ABGABEBEREIT. Alle kritischen, schweren, mittleren und kosmetischen Defekte sind behoben. Build besteht. TypeScript fehlerfrei. Die Website kann dem Kunden übergeben werden."

SZENARIO B — Alle P1+P2 behoben, P3/P4 verbleiben, Build grün:
→ "WEBSITE IST STABILISIERT UND FUNKTIONAL. X mittlere/kosmetische Defekte verbleiben. Empfehlung: EINEN weiteren Durchlauf für Feinschliff ausführen."

SZENARIO C — P1/P2 Defekte verbleiben:
→ "WEITERER NOTFALL-DURCHLAUF ERFORDERLICH. X kritische/schwere Defekte verbleiben. Führe diesen Prompt SOFORT ERNEUT aus. Priorisiere: [Liste der verbleibenden P1/P2 Defekte]"

SZENARIO D — Build schlägt noch fehl:
→ "BUILD FEHLGESCHLAGEN. Die Website kann nicht deployed werden. Führe diesen Prompt SOFORT ERNEUT aus mit Fokus auf BLOCK A (Build-Stabilisierung)."

═══════════════════════════════════════════════════════════════════════════════
WIEDERHOLUNGS-MECHANISMUS — DER REPARATUR-LOOP
═══════════════════════════════════════════════════════════════════════════════

Dieser Prompt wurde so konzipiert dass er ENDLOS wiederholbar ist bis die Website abgabebereit ist.

DURCHLAUF 1: ÜBERLEBEN — Build fixen, Text sichtbar machen, Layout retten. Kaputte Features ENTFERNEN wenn nötig.
DURCHLAUF 2: STABILISIEREN — Formulare, Navigation, Bilder, Responsive reparieren. Entfernte Features zurückbringen wenn möglich.
DURCHLAUF 3: MOLEKULARE REINIGUNG — Block E.2 vollständig ausführen. Import-Graph bereinigen, Dead Code eliminieren, Conditional-Logic absichern, useEffect-Abhängigkeiten prüfen, Async-Code härten, Sicherheitslücken schließen.
DURCHLAUF 4: DESIGN-KONSISTENZ & VISUELLE AKZEPTABILITÄT — Block E.3 vollständig ausführen. Farb-Kontrast-Exhaustiv-Audit, Transparenz-Scan, Text-Spacing-Prüfung, Element-Sichtbarkeit, Komponenten-Design-Konsistenz, Responsive-Sweep, Interaktive-Zustände, Visueller-Hierarchie-Audit, Medien-Integrität, Animations-Sicherheit. Die Website MUSS nach diesem Durchlauf VISUELL PROFESSIONELL und KONSISTENT aussehen.
DURCHLAUF 5: PROFESSIONALISIEREN — Spacing, Farben, Typografie vereinheitlichen. Animationen sauber reimplementieren. Entfernte Features rekonstruieren.
DURCHLAUF 6: POLIEREN — Pixel-Perfection, Hover-States, Transitions, Micro-Interactions.
DURCHLAUF 7+: PERFEKTIONIEREN — Cross-Browser, Edge-Cases, Performance, SEO-Feinschliff, Accessibility-Audit.

Bei JEDEM Durchlauf:
1. Lies .emergency-repair-log.md KOMPLETT (verstehe den Verlauf)
2. Scanne den GESAMTEN Code erneut (Schritt 0, Phase A-G)
3. Führe die KOMPLETTE Triage durch (der Zustand hat sich geändert)
4. Arbeite Block A bis F (inklusive Block E.2 Molekulare Analyse) systematisch ab
5. Aktualisiere das Log am Ende mit Gesamtbewertung
6. Wenn Bewertung nicht "ABGABEBEREIT": Prompt ERNEUT ausführen

DER LOOP ENDET WENN UND NUR WENN:
- npm run build: ZERO Errors
- npx tsc --noEmit: ZERO Errors
- JEDE Seite: Visuell korrekt und navigierbar
- JEDES Formular: Funktional
- Gesamtbewertung: ABGABEBEREIT

═══════════════════════════════════════════════════════════════════════════════
NOTFALL-REPARATUR COMPLIANCE CHECKLIST — EXTREME EDITION
═══════════════════════════════════════════════════════════════════════════════

FUNDAMENT:
□ NR-01: npm run build besteht mit ZERO Errors
□ NR-02: npx tsc --noEmit besteht mit ZERO Errors
□ NR-03: npm run lint hat keine ERRORS (Warnings dokumentiert)
□ NR-04: Keine fehlenden Dependencies (npm install läuft sauber)

SICHTBARKEIT:
□ NR-05: JEDER Text auf der Website ist lesbar (Kontrast mindestens 4.5:1)
□ NR-06: Keine Buchstaben überlappen sich (letter-spacing, line-height, font-size korrekt)
□ NR-07: Keine Elemente sind unsichtbar durch fehlerhafte Animationen (opacity: 0 Falle)
□ NR-08: Fonts laden korrekt (kein FOUT, Fallback-Font definiert)
□ NR-09: Keine Dark-Mode-Klassen (dark:*) im Code

LAYOUT:
□ NR-10: Header ist sichtbar, hat Hintergrund, Navigation funktioniert
□ NR-11: Footer ist am Seitenende, ist sichtbar und lesbar
□ NR-12: Kein horizontaler Scroll auf KEINER Seite bei KEINEM Breakpoint
□ NR-13: Keine Sektionen überlappen sich
□ NR-14: Container mit begrenzter Breite auf JEDER Seite

INTERAKTION:
□ NR-15: Cookie-Banner hat soliden Hintergrund, ist lesbar und funktional (oder dokumentiert temporär deaktiviert)
□ NR-16: ALLE Formulare sind sichtbar, ausfüllbar und abschickbar
□ NR-17: ALLE internen Links führen zu existierenden Seiten (keine 404)
□ NR-18: ALLE Buttons sind klickbar und reagieren auf Klick
□ NR-19: Mobile-Navigation (Hamburger) öffnet und schließt korrekt

RESPONSIVE:
□ NR-20: Mobile (375px): Benutzbar, lesbar, navigierbar
□ NR-21: Tablet (768px): Layout korrekt, Grid angemessen
□ NR-22: Desktop (1280px): Content zentriert, Layout korrekt
□ NR-23: Wide (1536px+): Keine Layout-Anomalien

MEDIEN:
□ NR-24: ALLE Bilder laden korrekt (keine 404, keine Verzerrungen)
□ NR-25: Bilder sprengen KEINE Container (max-w-full, object-fit)

CODE-QUALITÄT:
□ NR-26: Keine console.log Statements (außer Error-Boundaries)
□ NR-27: Keine ungenutzten Imports
□ NR-28: Kein auskommentierter Code in großen Blöcken
□ NR-29: Keine Hydration-Warnings in der Browser-Console
□ NR-30: Server/Client Boundaries korrekt ("use client" wo nötig und NUR wo nötig)

SEO & LEGAL:
□ NR-31: JEDE Seite hat unique title und description
□ NR-32: sitemap.ts existiert und enthält alle Routen
□ NR-33: robots.ts existiert
□ NR-34: /impressum existiert und hat Content
□ NR-35: /datenschutz existiert und hat Content

DESIGN-KONSISTENZ & VISUELLE AKZEPTABILITÄT:
□ NR-36: JEDE Text-auf-Hintergrund-Kombination hat mindestens 4.5:1 Kontrast (Body) oder 3:1 (große Headlines)
□ NR-37: KEIN Element ist unbeabsichtigt transparent (keine durchsichtigen Banner, Header, Cards, Modals)
□ NR-38: KEIN Text verschwindet im Hintergrund auf KEINER Seite bei KEINEM Breakpoint
□ NR-39: ALLE Buttons haben sichtbare Hover-States die sich vom Ruhezustand unterscheiden
□ NR-40: ALLE Cards haben sichtbare Grenzen (Border, Shadow oder Farbunterschied zum Hintergrund)
□ NR-41: ALLE Formular-Inputs haben sichtbare Borders und Focus-Ringe
□ NR-42: Überschriften-Hierarchie ist konsistent (H1 > H2 > H3 visuell klar unterscheidbar, identisch auf allen Seiten)
□ NR-43: Button-Styling ist konsistent (gleiche Farben, Paddings, Radien für gleiche Button-Typen)
□ NR-44: Farbpalette nutzt maximal EINE Grau-Familie (gray ODER neutral ODER slate — NICHT gemischt)
□ NR-45: Container-Paddings sind auf ALLEN Seiten identisch (px-4 Mobile, px-6 Tablet, px-8 Desktop oder konsistente Alternative)
□ NR-46: KEIN Text wird durch overflow-hidden, truncate oder line-clamp unbeabsichtigt abgeschnitten
□ NR-47: KEIN unerklärlicher Whitespace (leere Container, doppelte Paddings, versteckte Elemente mit Layout-Impact)
□ NR-48: JEDES interaktive Element hat sichtbaren Focus-Ring (KEIN outline-none ohne Alternative)
□ NR-49: Aktiver Navigation-Link ist auf JEDER Seite visuell hervorgehoben
□ NR-50: ALLE Bilder laden, sind nicht verzerrt, haben alt-Attribute und verursachen keinen CLS
□ NR-51: KEINE Animation hinterlässt Elemente in unsichtbarem Zustand (opacity: 0, transform: translate-off-screen)
□ NR-52: Scroll-Trigger-Animationen haben Fallback wenn Observer nicht feuert
□ NR-53: Text-Zeilenlänge ist auf Desktop begrenzt (max 75 Zeichen pro Zeile via max-w-prose oder max-w-3xl)
□ NR-54: KEIN horizontaler Scroll auf KEINEM Breakpoint (375px bis 1536px+)
□ NR-55: Breakpoint-Übergänge sind sauber (keine verschwindenden Elemente, keine Layout-Sprünge)

MOLEKULARE CODE-QUALITÄT:
□ NR-56: Keine zirkulären Imports im gesamten Projekt (Import-Graph ist azyklisch)
□ NR-57: Keine ungenutzten Dateien im Projekt (jede .tsx/.ts/.css wird tatsächlich importiert)
□ NR-58: Keine ungenutzten npm-Pakete in package.json (jedes Paket wird tatsächlich importiert)
□ NR-59: Keine ungenutzten Variablen oder Funktionen in KEINER Datei
□ NR-60: JEDE Array-Operation ist gegen leere Arrays abgesichert (.find(), .filter(), [0] etc.)
□ NR-61: JEDE Object-Property-Zugriff ist gegen undefined abgesichert (optional chaining oder Guard)
□ NR-62: JEDER switch hat ein default-Case oder ist exhaustiv (TypeScript never-Pattern)
□ NR-63: KEIN useEffect ohne korrekte Dependency-Array (keine fehlenden Dependencies)
□ NR-64: JEDER useEffect mit Subscriptions/Timern hat eine Cleanup-Funktion
□ NR-65: JEDER async fetch-Call hat try/catch Error-Handling
□ NR-66: Error-Boundaries existieren für alle kritischen UI-Bereiche
□ NR-67: KEINE Secrets, API-Keys oder Passwörter im Client-seitigen Code
□ NR-68: KEIN dangerouslySetInnerHTML ohne Sanitization
□ NR-69: ALLE dynamischen Routen haben generateStaticParams oder korrekte Fallback-Behandlung
□ NR-70: next.config hat KEINE veralteten oder kontraproduktiven Optionen
□ NR-71: ALLE interaktiven Elemente sind per Tastatur erreichbar (Tab-Order korrekt)
□ NR-72: ALLE Bilder haben alt-Attribute (dekorativ: alt="", inhaltlich: beschreibender Text)
□ NR-73: Semantisches HTML durchgehend (nav, main, article, section, aside statt div-Suppe)
□ NR-74: KEINE key={index} in dynamischen Listen deren Reihenfolge sich ändern kann
□ NR-75: Prop-Drilling geht maximal 2 Ebenen tief (danach Context oder Komposition)

DOKUMENTATION:
□ NR-76: .emergency-repair-log.md ist vollständig mit allen Durchläufen
□ NR-77: Entfernte Komponenten sind dokumentiert
□ NR-78: Deaktivierte Features sind dokumentiert mit Reaktivierungs-Plan
□ NR-79: KEIN funktionierender Code wurde durch die Reparatur gebrochen
□ NR-80: Gesamtbewertung: ABGABEBEREIT oder klare Anweisung für den nächsten Durchlauf

═══════════════════════════════════════════════════════════════════════════════
STATUS
═══════════════════════════════════════════════════════════════════════════════

Der Notfall-Chirurg hat EXTREME BEFUGNISSE. Die Devise ist: EINE FUNKTIONIERENDE WEBSITE LIEFERN. Wenn etwas geopfert werden muss um das Ganze zu retten — dann wird es geopfert und dokumentiert. Features können in späteren Durchläufen zurückkehren. Aber der Kunde bekommt JETZT eine Website die FUNKTIONIERT.

Beginne JETZT mit SCHRITT 0: Scanne den GESAMTEN Code. Lies JEDE Datei. Verstehe das KOMPLETTE Projekt. Dann repariere es.