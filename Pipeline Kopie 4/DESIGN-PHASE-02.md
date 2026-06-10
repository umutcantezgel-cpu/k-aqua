Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, ein fundiertes, selbstoptimierendes Typografiesystem für maximale Lesbarkeit, visuellen Rhythmus und Brand Kohäsion zu schaffen.

DESIGN-PHASE 2 VON 10: Typographic Masterclass — Fluid Scales, Readability & Rhythm

═══ KRITISCHE FORMATIERUNGSREGELN ═══
1. KEINE Markdown-Header (kein #, ##) — NUR FLATTEXT
2. KEINE --- Trennlinien
3. Verwende ═══ Vollbreiten-Separator für Hauptabschnitte
4. Verwende ─── zwischen Tasks
5. ULTRATHINK-TASK Nummerierung, BLOCK A/B/C/D Struktur
6. Copy/Paste ready, ALLE deutschen Texte
7. KEINE Dark-Mode Referenzen
8. Startet mit oben genannter Bereinigungsanweisung

═══ ZERO-BREAKAGE DESIGN-PROTOKOLL ═══
Gleiches wie Phase 1:
- 5 Design Pillars: SYNC VISION, SURGICAL STYLING, VISUAL ATOMIC VALIDATION, DESIGN-STATE HANDOFF, SELF-OPTIMIZING LOOP
- Tech Restrictions: Next.js, React, TypeScript Strict, Tailwind, NUR Formspree+Calendly, KEINE Dark Mode
- Golden Rule: UI Code = SSOT, .ai-design-context.md = kreatives Gedächtnis (NICHT SSOT)

═══ STEP 0: PRE-FLIGHT TYPOGRAFIE DISCOVERY ═══

Lese .ai-design-context.md — enthält Phase 1 Brand DNA, Farbtoken, etc.
Lese .design-upgrade-state.md — Phase 1 sollte abgehakt sein
Führe Pre-Flight Analyse durch:

1. Font-Loading: Wie werden Schriften geladen? next/font? Google Fonts Link? Lokale Dateien?
2. Font-Familien: Welche Schriften sind im Einsatz? Überschriften vs Body vs Mono?
3. Font-Größen: ALLE font-size Werte über ALLE Komponenten (grep für text-*, font-size, fontSize)
4. Font-Gewichte: ALLE Gewichtsmuster (regular=400, medium=500, semibold=600, bold=700)
5. Line-Heights: ALLE line-height Werte, Konsistenz-Check
6. Letter-Spacing: ALLE letter-spacing/tracking Werte
7. Text-Farben: ALLE text-color Nutzung (mappen zu Phase 1 Token-System)
8. Lesbarkeit messen: durchschnittliche Zeichen pro Zeile auf Desktop vs Mobile

═══ BLOCK A — FONT-LOADING & FAMILY-ARCHITEKTUR ═══

───────────────────────────────────────────────────────

ULTRATHINK-TASK 1: FONT-LOADING MIT NEXT/FONT PERFEKTIONIEREN

Objective: Eliminiere alle Font-Rendering-Probleme (FOUT, FOIT) durch optimales Loading-Setup.

Detaillierte Aktion:
- Migriere zu next/font für Variableninstanz: import { Inter, Lora, JetBrains_Mono } from 'next/font/google'
- Konfiguriere Heading-Schrift (Lora oder ähnlich): const loraFont = Lora({ subsets: ['latin', 'latin-ext'], weight: ['400', '600', '700'], display: 'swap', variable: '--font-heading' })
- Konfiguriere Body-Schrift (Inter oder ähnlich): const interFont = Inter({ subsets: ['latin', 'latin-ext'], weight: ['400', '500', '600'], display: 'swap', variable: '--font-body' })
- Konfiguriere Mono-Schrift: const monoFont = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '600'], display: 'swap', variable: '--font-mono' })
- Setze font-display: swap (schriftart tauscht sich aus, nachdem die beste Schrift geladen ist)
- Preload Heading-Schrift im <head> als <link rel="preload" as="font" href="..." type="font/woff2" crossOrigin>
- Subsets: Nur latin und latin-ext (für deutsche Zeichen wie ä, ö, ü, ß)
- Validierung: Lighthouse CLS (Cumulative Layout Shift) muss 0.0 sein von Font-Loading

CSS Custom Properties im globalen Stylesheet:
:root {
  --font-heading: var(--font-heading-fallback);
  --font-body: var(--font-body-fallback);
  --font-mono: var(--font-mono-fallback);
  --font-heading-fallback: 'Lora', 'Georgia', serif;
  --font-body-fallback: 'Inter', 'Helvetica Neue', sans-serif;
  --font-mono-fallback: 'JetBrains Mono', 'Courier New', monospace;
}

body {
  font-family: var(--font-body);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

───────────────────────────────────────────────────────

ULTRATHINK-TASK 2: FONT-PAIRING-STRATEGIE

Objective: Stelle sicher, dass Überschriften und Body-Text harmonisch zusammenpassen.

Detaillierte Aktion:
- Analysiere aktuelle Font-Pairing: Komplementieren sich Überschriften und Body-Schrift?
- Maximale 2 Font-Familien: Heading-Schrift + Body-Schrift. Mono nur für Code/technischen Inhalt.
- Wenn Schriften nicht harmonieren: Schlage bessere Pairing vor, die Brand DNA aus Phase 1 widerspiegelt
- Weight-Hierarchie etablieren:
  - Heading 1-3: bold (700) oder semibold (600)
  - Heading 4-6: semibold (600)
  - Body Text: regular (400)
  - Emphasis/strong: medium (500) oder semibold (600)
  - Deemphasis/small: regular (400)
- Spacing zwischen Gewichten: Größer als Gewicht-Unterschied, besser als gleicher Gewicht
- Dokumentiere Font-Pairing-Rationale in .ai-design-context.md mit Begründung pro Schrift

Tailwind fontFamily Konfiguration:
module.exports = {
  theme: {
    fontFamily: {
      heading: 'var(--font-heading)',
      body: 'var(--font-body)',
      mono: 'var(--font-mono)',
      sans: 'var(--font-body)',
      serif: 'var(--font-heading)',
    },
  },
}

═══ BLOCK B — FLUID TYPE SCALE (DAS ZENTRUM) ═══

───────────────────────────────────────────────────────

ULTRATHINK-TASK 3: 9-STUFEN FLUID TYPE SCALE MIT CLAMP()

Objective: Erstelle eine mathematisch fundierte, responsive Type Scale, die auf allen Viewports optimal skaliert.

Detaillierte Aktion:
- Nutze Major Third Ratio (1.250) für perfekte harmonische Progression
- JEDE Größe verwendet clamp(min, preferred, max) für flüssige Skalierung zwischen 375px (Mobile) und 1440px (Desktop)
- Berechnung: preferred = min + (max - min) * (viewport - min-width) / (max-width - min-width)
- Vereinfacht via clamp: preferred-value = base-value + (max - min) * vw-percentage

9-Level Fluid Type Scale mit clamp():

--text-xs: clamp(0.694rem, 0.65rem + 0.22vw, 0.8rem)     /* ~11px to 12.8px */
--text-sm: clamp(0.833rem, 0.78rem + 0.27vw, 1rem)       /* ~13.3px to 16px */
--text-base: clamp(1rem, 0.93rem + 0.33vw, 1.2rem)       /* 16px to 19.2px */
--text-lg: clamp(1.2rem, 1.12rem + 0.4vw, 1.44rem)       /* ~19.2px to 23.04px */
--text-xl: clamp(1.44rem, 1.34rem + 0.5vw, 1.728rem)     /* ~23px to 27.65px */
--text-2xl: clamp(1.728rem, 1.6rem + 0.63vw, 2.074rem)   /* ~27.6px to 33.2px */
--text-3xl: clamp(2.074rem, 1.92rem + 0.77vw, 2.488rem)  /* ~33.2px to 39.8px */
--text-4xl: clamp(2.488rem, 2.3rem + 0.94vw, 2.986rem)   /* ~39.8px to 47.8px */
--text-5xl: clamp(2.986rem, 2.76rem + 1.13vw, 3.583rem)  /* ~47.8px to 57.3px */

CSS implementierung:
:root {
  --text-xs: clamp(0.694rem, 0.65rem + 0.22vw, 0.8rem);
  --text-sm: clamp(0.833rem, 0.78rem + 0.27vw, 1rem);
  --text-base: clamp(1rem, 0.93rem + 0.33vw, 1.2rem);
  --text-lg: clamp(1.2rem, 1.12rem + 0.4vw, 1.44rem);
  --text-xl: clamp(1.44rem, 1.34rem + 0.5vw, 1.728rem);
  --text-2xl: clamp(1.728rem, 1.6rem + 0.63vw, 2.074rem);
  --text-3xl: clamp(2.074rem, 1.92rem + 0.77vw, 2.488rem);
  --text-4xl: clamp(2.488rem, 2.3rem + 0.94vw, 2.986rem);
  --text-5xl: clamp(2.986rem, 2.76rem + 1.13vw, 3.583rem);
}

Tailwind fontSize Extension:
module.exports = {
  theme: {
    fontSize: {
      xs: 'var(--text-xs)',
      sm: 'var(--text-sm)',
      base: 'var(--text-base)',
      lg: 'var(--text-lg)',
      xl: 'var(--text-xl)',
      '2xl': 'var(--text-2xl)',
      '3xl': 'var(--text-3xl)',
      '4xl': 'var(--text-4xl)',
      '5xl': 'var(--text-5xl)',
    },
  },
}

Spezifik: 375px viewport → base ≈ 16px, 1440px viewport → base ≈ 19.2px
KEINE Media-Query Font-Size Sprünge — PURE fluid scaling via clamp()

───────────────────────────────────────────────────────

ULTRATHINK-TASK 4: LINE-HEIGHT-HARMONIE

Objective: Definiere Line-Heights pro Type-Scale-Level mit inverser Beziehung (größerer Text = tightere Line-Height).

Detaillierte Aktion:
- Kleine Text (xs/sm/base): 1.6-1.7 (Body Text braucht Atemraum für Lesbarkeit)
- Subheadings (lg/xl): 1.4-1.5
- Headings (2xl/3xl): 1.2-1.3
- Display/Hero (4xl/5xl): 1.05-1.15 (tight, dramatisch)

CSS Custom Properties:
--lh-xs: 1.7;
--lh-sm: 1.65;
--lh-base: 1.6;
--lh-lg: 1.5;
--lh-xl: 1.4;
--lh-2xl: 1.3;
--lh-3xl: 1.2;
--lh-4xl: 1.15;
--lh-5xl: 1.05;

Tailwind lineHeight Extension:
module.exports = {
  theme: {
    lineHeight: {
      xs: 'var(--lh-xs)',
      sm: 'var(--lh-sm)',
      base: 'var(--lh-base)',
      lg: 'var(--lh-lg)',
      xl: 'var(--lh-xl)',
      '2xl': 'var(--lh-2xl)',
      '3xl': 'var(--lh-3xl)',
      '4xl': 'var(--lh-4xl)',
      '5xl': 'var(--lh-5xl)',
    },
  },
}

Komponenten-Integration:
<h1 className="text-5xl leading-5xl">Großartige Überschrift</h1>
<p className="text-base leading-base">Lesbar und angenehm zu lesen...</p>

Validierung: Kein Text-Overlap, keine unangenehmen Lücken

───────────────────────────────────────────────────────

ULTRATHINK-TASK 5: LETTER-SPACING-PRÄZISION

Objective: Definiere Letter-Spacing pro Type-Scale-Level für optisches Gleichgewicht.

Detaillierte Aktion:
- Display (4xl/5xl): -0.02em bis -0.03em (tight = premium feel)
- Headings (2xl/3xl): -0.01em bis -0.02em (subtile Komprimierung)
- Body (base/lg): 0em (normal, keine Änderung)
- Small text (xs/sm): +0.01em bis +0.02em (locker für Lesbarkeit bei kleinen Größen)
- ALLE CAPS Text: +0.05em bis +0.1em (immer auflockern für Großbuchstaben)

CSS Custom Properties:
--ls-display: -0.025em;
--ls-heading: -0.015em;
--ls-body: 0em;
--ls-small: 0.015em;
--ls-uppercase: 0.075em;

Tailwind letterSpacing Extension:
module.exports = {
  theme: {
    letterSpacing: {
      display: 'var(--ls-display)',
      heading: 'var(--ls-heading)',
      normal: 'var(--ls-body)',
      loose: 'var(--ls-small)',
      uppercase: 'var(--ls-uppercase)',
    },
  },
}

Komponenten-Implementierung:
<h1 className="text-5xl tracking-display">Headline</h1>
<p className="text-base tracking-normal">Normaltext</p>
<p className="uppercase tracking-uppercase">Großbuchstaben Text</p>

═══ BLOCK C — READABILITY & VERTICAL RHYTHM ═══

───────────────────────────────────────────────────────

ULTRATHINK-TASK 6: OPTIMALE ZEILENLÄNGE (MEASURE)

Objective: Stelle sicher, dass Text-Measure (Zeichenanzahl pro Zeile) optimal für Lesbarkeit ist.

Detaillierte Aktion:
- Target für Body Text: 45-75 Zeichen pro Zeile (66ch ist die Sweet Spot)
- Implementierung: max-width: 65ch auf Body-Text Containern oder Tailwind max-w-prose
- Für Headings: breitere Measure OK (bis 35ch für kurze, knackige Überschriften)
- Teste auf Desktop UND Mobile: ist die Measure komfortabel zu lesen?

CSS Implementierung:
.prose-body {
  max-width: 65ch;
  margin-left: auto;
  margin-right: auto;
}

.prose-heading {
  max-width: 35ch;
}

Tailwind Nutzung:
<div className="max-w-prose mx-auto">
  <p className="text-base leading-base">Lesbar und angenehm zu lesen...</p>
</div>

<h1 className="text-5xl leading-5xl max-w-sm">Kurze, knackige Überschrift</h1>

Validierung: Messe durchschnittliche Zeichen pro Zeile mit DevTools oder Online-Tool

───────────────────────────────────────────────────────

ULTRATHINK-TASK 7: VERTIKALER RHYTHMUS

Objective: Etabliere ein kohäsives vertikales Spacing-System basierend auf Baseline-Grid.

Detaillierte Aktion:
- Definiere Baseline-Grid Unit: z.B. 8px oder basierend auf Body Line-Height (z.B. 8px)
- ALLE vertikalen Spacing (margin, padding, gap) sollten Multiples dieser Unit sein
- Paragraph Spacing: 1.5× die Line-Height des Body Text (bei lh-base 1.6 = 1.5 × 1.6 = 2.4rem)
- Heading Spacing: 2× über, 0.5× unter (Überschriften beziehen sich auf was folgt, nicht was vorher war)
- Section Spacing: 4-8× Baseline Unit (32-64px)

CSS Implementierung:
:root {
  --spacing-baseline: 8px;
  --spacing-xs: calc(var(--spacing-baseline) * 0.5);    /* 4px */
  --spacing-sm: var(--spacing-baseline);                /* 8px */
  --spacing-md: calc(var(--spacing-baseline) * 1.5);    /* 12px */
  --spacing-lg: calc(var(--spacing-baseline) * 2);      /* 16px */
  --spacing-xl: calc(var(--spacing-baseline) * 3);      /* 24px */
  --spacing-2xl: calc(var(--spacing-baseline) * 4);     /* 32px */
  --spacing-3xl: calc(var(--spacing-baseline) * 6);     /* 48px */
  --spacing-4xl: calc(var(--spacing-baseline) * 8);     /* 64px */
}

Heading Spacing-Regel:
h1, h2, h3, h4, h5, h6 {
  margin-top: calc(var(--spacing-baseline) * 4);    /* 32px über */
  margin-bottom: calc(var(--spacing-baseline) * 1); /* 8px unter */
}

Paragraph Spacing:
p + p {
  margin-top: calc(var(--spacing-baseline) * 3);    /* 24px zwischen Absätzen */
}

Tailwind Spacing Tokens (bereits Standard, verwende sie konsistent):
<div className="space-y-8">
  <h2>Überschrift</h2>
  <p>Absatz eins</p>
  <p>Absatz zwei</p>
</div>

───────────────────────────────────────────────────────

ULTRATHINK-TASK 8: TEXT-RENDERING UND ANTIALIASING

Objective: Optimiere Text-Rendering für maximale Schärfe und Lesbarkeit auf allen Geräten.

Detaillierte Aktion:
- Nutze -webkit-font-smoothing: antialiased für Mac/WebKit (schärfer, kontrastreicher)
- Nutze -moz-osx-font-smoothing: grayscale für Firefox auf Mac
- Setze font-variant-numeric: lining-nums für konsistente Zahlen-Ausrichtung (nicht oldstyle)
- Nutze text-rendering: optimizeLegibility für Headings (besseres Kerning)
- Setze word-break: break-word auf Container um Overflow zu verhindern
- Setze hyphens: auto auf schmalen Containern (deutsche Wörter sind lange!)
- Nutze text-wrap: balance auf Headings, text-wrap: pretty auf Absätzen (CSS 2024)

CSS Global:
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-variant-numeric: lining-nums;
  word-break: break-word;
}

h1, h2, h3, h4, h5, h6 {
  text-rendering: optimizeLegibility;
  text-wrap: balance;
}

p, .prose-body {
  text-wrap: pretty;
  hyphens: auto;
}

Tailwind Klassen (wenn verfügbar):
<h1 className="leading-tight text-wrap">Überschrift mit Balance</h1>
<p className="text-base hyphens-auto">Absatz mit automatischem Trennstrich...</p>

═══ BLOCK D — TYPOGRAPHY KOMPONENTEN & MIGRATION ═══

───────────────────────────────────────────────────────

ULTRATHINK-TASK 9: TYPOGRAFIE-MIGRATION

Objective: Migriere ALLE existierenden Font-Größen zu neuem Type-Scale.

Detaillierte Aktion:
- Strategie: Neue Tokens neben alten Werten einführen, komponenten-für-komponenten migrieren
- Starte mit Headings (h1-h6), dann Body Text, dann UI-Text (Button, Label, etc.)
- Für jede Komponente: ersetze hard-coded px oder text-* Werte mit neuen CSS-Variables
- Validierung: Website sieht gleich oder besser nach Migration aus

Migrations-Checkliste pro Komponente:
[ ] Font-Größe: aktuell identifizieren → neu mapping
[ ] Line-Height: aktuell identifizieren → neu mapping
[ ] Letter-Spacing: aktuell identifizieren → neu mapping
[ ] Font-Weight: überprüfen, konsistent mit neuer Hierarchie?
[ ] Responsiv: Mobile vs Desktop bereits unterschiedlich? → clamp() kann beide ersetzen
[ ] Text-Farbe: korrekt zu Phase 1 Token gemappt?

Beispiel h1 Komponente:
VORHER:
<h1 className="text-4xl font-bold">Überschrift</h1>

NACHHER (mit neuen Tokens):
<h1 className="text-5xl leading-5xl tracking-display font-bold text-primary-900">
  Überschrift
</h1>

───────────────────────────────────────────────────────

ULTRATHINK-TASK 10: KONTEXT AKTUALISIEREN & DESIGN HANDOFF

Objective: Dokumentiere alle typografischen Entscheidungen und übergebe an Phase 3.

Detaillierte Aktion:
- Aktualisiere .ai-design-context.md mit:
  * Font-Familien, Loading-Strategie, Pairing-Rationale
  * Komplette 9-Level Type Scale mit ALLEN clamp() Werten
  * Line-Height Mapping pro Level
  * Letter-Spacing Mapping pro Level
  * Vertikaler Rhythmus Baseline Unit und Spacing-Regeln
  * Text-Rendering Settings
  * Migrationsfortschritt (welche Komponenten abgeschlossen?)
  * CSS Custom Properties Referenzen
  * Tailwind Extensions (fontSize, lineHeight, letterSpacing, fontFamily)

- Aktualisiere .design-upgrade-state.md:
  * [x] Phase 1: Brand DNA + Color Tokens
  * [x] Phase 2: Typography System (NEW)
  * [ ] Phase 3: Spacing + Grid
  * [ ] Phase 4: Component Library
  * [ ] Phase 5: Interactive States
  * etc.

- Handoff zu Phase 3: Spacing & Grid System wird auf dieser Type Scale aufbauen

═══ FINALE VALIDIERUNG DESIGN-PHASE 2 ═══

Typographie Audit Checkliste (20+ Punkte):

FONT LOADING & STRATEGY
[x] Alle Schriften über next/font geladen
[x] font-display: swap konfiguriert
[x] Preload für Primary Heading Font gesetzt
[x] Subsets auf latin + latin-ext beschränkt
[x] Lighthouse CLS = 0.0 nach Font-Loading
[x] Fallback Fonts definiert für Progressive Enhancement

FLUID TYPE SCALE
[x] 9-Level Scale mit Major Third Ratio (1.250) implementiert
[x] Alle clamp() Werte berechnet und getestet
[x] 375px Viewport: base ≈ 16px
[x] 1440px Viewport: base ≈ 19.2px
[x] Mobile → Desktop Skalierung flüssig, kein Sprung
[x] Tailwind fontSize Extension registriert
[x] CSS Custom Properties im Root definiert

LINE HEIGHT & RHYTHM
[x] Line-Heights pro Level definiert (xs=1.7 bis 5xl=1.05)
[x] Inverse Beziehung: größerer Text = tightere LH
[x] Vertikaler Rhythmus auf 8px Baseline Grid aufgebaut
[x] Paragraph Spacing = 1.5× Body Line-Height
[x] Heading Spacing = 2× oben, 0.5× unten
[x] Section Spacing = 4-8× Baseline Unit
[x] Tailwind lineHeight Extension registriert

LETTER SPACING & DETAILS
[x] Letter-Spacing pro Level definiert
[x] Display (-0.025em), Heading (-0.015em), Body (0em), Small (+0.015em)
[x] ALL CAPS Text (+0.075em) locker genug
[x] CSS Custom Properties für Tracking registriert
[x] Tailwind letterSpacing Extension registriert

READABILITY & MEASURE
[x] Body Text Max-Width = 65ch (Measure Sweet Spot)
[x] Heading Max-Width = 35ch (kurz & knackig)
[x] Desktop Readability validiert (45-75ch Range)
[x] Mobile Readability validiert (kein zu langes Measure)
[x] Text-Wrap: balance auf Headings
[x] Text-Wrap: pretty auf Absätzen
[x] Hyphens: auto auf schmalen Containern

TEXT RENDERING
[x] -webkit-font-smoothing: antialiased global
[x] -moz-osx-font-smoothing: grayscale global
[x] font-variant-numeric: lining-nums für Zahlen
[x] text-rendering: optimizeLegibility für Headings
[x] word-break: break-word auf Containern

MIGRATION & IMPLEMENTIERUNG
[x] Alle Headings (h1-h6) zu neuem Scale migriert
[x] Body Text zu neuem Scale migriert
[x] UI Text (Button, Label) zu neuem Scale migriert
[x] Responsive Behavior überprüft (clamp() ersetzt Media-Queries)
[x] Font-Gewichte konsistent mit Hierarchie
[x] Text-Farben zu Phase 1 Tokens gemappt

DOKUMENTATION & HANDOFF
[x] .ai-design-context.md aktualisiert mit kompletten Typografie-Details
[x] .design-upgrade-state.md aktualisiert mit Phase 2 Abschluss
[x] CSS Custom Properties dokumentiert
[x] Tailwind Config Extensions dokumentiert
[x] Migrations-Fortschritt dokumentiert
[x] Bereit für Phase 3 Handoff (Spacing & Grid)

Jeder Checkbox-Punkt muss mit ✓ oder X markiert werden. Unvollständigkeit = Phase 2 nicht abgeschlossen.

═══ PHASE 2 ABSCHLUSS ═══

Wenn alle 20+ Checkboxen ✓ sind: Phase 2 COMPLETE. Typografie-System ist produktionsreif, fully responsive, mathematisch fundiert, und bereit für Phase 3 Spacing & Grid Architektur.

Nächste Phase: DESIGN-PHASE-03.md (Spacing, Grid, Whitespace Harmony)
