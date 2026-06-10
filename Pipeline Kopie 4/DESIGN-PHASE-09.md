Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, eine visuell kohärente Markenwelt zu schaffen, in der jede Komponente, jede Seite und jeder Zustand denselben visuellen Dialekt sprechen. Dies ist Design-Phase 9 von 10 der Supreme Design & UX Pipeline.

In dieser Phase werden alle visuellen Assets harmonisiert: Farbtokens werden seiten- und komponentenübergreifend konsistent angewendet, die Spacing- und Rhythm-Sprache wird vereinheitlicht, und die responsive Ansicht auf allen Geräten bleibt optisch identisch. Das Ergebnis ist eine Website, die sich wie ein einziges kohärentes Design-System anfühlt, nicht wie eine Sammlung unabhängiger Seiten.

═══════════════════════════════════════════════════════════════════════════════
PROTOKOLL
═══════════════════════════════════════════════════════════════════════════════

FÜNF SÄULEN DER PHASE 9:
  1. Thematische Farbkonsistenz — Farbtokens seiten- und komponentenübergreifend auditable
  2. Komponenten-Thematische Einheit — Buttons, Cards, Inputs, Inputs folgen ONE Visual DNA
  3. Seiten-Übergreifende Visuelle Harmonie — Landing→About→Services→Contact bilden ein Brand-Universum
  4. Responsive Theme-Konsistenz — Mobile/Tablet/Desktop haben identischen visuellen Character
  5. Validation & Handoff — Audit-Tools und Asset-Registry für Phase 10

TECH STACK (hart):
  • Next.js (App Router bevorzugt)
  • React + TypeScript Strict Mode
  • Tailwind CSS + CSS Modules + CSS Custom Properties
  • Formspree (Kontakt) + Calendly (Bookings)

KRITISCHE RESTRICTIONS:
  ⊗ KEIN Dark Mode (vollständig entfernt aus der Pipeline)
  ⊗ KEIN Sentry (keine Error-Tracking-Integration)
  ⊗ KEIN externe CMS, AI-APIs, Newsletter-Services, i18n
  ✓ NUR Light-Mode, NUR Single-Language (Englisch), NUR Primary Brand-Palette

═══════════════════════════════════════════════════════════════════════════════
STEP 0: PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Vor Beginn der Tasks müssen folgende Discovery-Aktivitäten durchgeführt werden:

AKTION 0.1 — .ai-design-context.md lesen und analysieren
  • Öffne /mnt/src/.ai-design-context.md
  • Extrahiere: Brand-Farben (primary, secondary, accent, neutral), Typen-Skala, Spacing-Token
  • Dokumentiere: Welche Farbtokens sind derzeit aktiv? Welche sind fragmentiert oder dupliziert?
  • Frage: Verwendet JEDE Seite die gleiche Farbpalette? Oder gibt es CSS-Inkonsistenzen?

AKTION 0.2 — Current Visual Audit durchführen
  • Screenshot alle Hauptseiten: Landing, About, Services, Contact, 404
  • Öffne jeden Screenshot in Nebeneinander-Ansicht
  • Prüfe auf: Farbabweichungen, unterschiedliche Button-Stile, inkonsistente Abstände, unterschiedliche Border-Radius
  • Dokumentiere jede Anomalie mit Seitennamen und Komponenten-ID

AKTION 0.3 — CSS-Überblick erstellen
  • Öffne tailwind.config.ts und custom-theme.css (falls vorhanden)
  • Schreibe alle definierten Farbtokens auf: rgb-Werte, Hex-Werte, var(--custom-*)
  • Markiere: Welche Tokens sind aktiv? Welche sind veraltet oder doppelt?

───────────────────────────────────────────────────────────────────────────────
BLOCK A: THEMATISCHE FARBKONSISTENZ
───────────────────────────────────────────────────────────────────────────────

═══ ULTRATHINK-TASK 1: Cross-Page Farb-Audit ═══

Ziel: Garantiere, dass JEDE Seite (Landing, About, Services, Contact, 404) die identische Farbpalette nutzt.

AKTION 1.1 — Farb-Token-Inventar aufbauen
  • Erstelle eine Tabelle in /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/COLOR-TOKEN-AUDIT.txt
  • Spalten: TokenName | HexValue | TailwindClass | Pages-Used-On | Konsistent-Ja/Nein
  • Beispiel Zeilen:
    primary-500 | #3B82F6 | tw-blue-500 | Landing, Services, Contact | ✓
    accent-600 | #EC4899 | tw-pink-600 | Landing, About, Services | ✗ (Landing nutzt pink-700)
  • Gehe JEDE .tsx-Seite durch und notiere, welche Farben explizit oder über Tailwind gesetzt sind

AKTION 1.2 — Inkonsistenzen identifizieren und dokumentieren
  • Finde alle Instanzen, wo rgb(), hex(), oder inline-Farben ohne Token verwendet wurden
  • Suche nach: className="bg-[#abc123]" oder style={{backgroundColor: "#abc"}}
  • Für jede Inkonsistenz: Erstelle einen Entry mit: Komponente | Aktuelle-Farbe | Sollte-Sein-Token | Reason
  • Beispiel: "HeroSection.tsx | bg-[#f0f0f0] | bg-neutral-100 | Sollte Neutral-Token sein"

AKTION 1.3 — Farbtokens harmonisieren
  • Definiere (oder aktualisiere) tailwind.config.ts mit einheitlicher Palette:
    colors: {
      primary: { 50: '...', 100: '...', 500: '...', 600: '...', 900: '...' },
      secondary: { ... },
      accent: { ... },
      neutral: { 50: '...', 100: '...', 200: '...', 400: '...', 900: '...' },
      success: { 500: '...' }, error: { 500: '...' }, warning: { 500: '...' }, info: { 500: '...' }
    }
  • Stelle sicher: Jeder Farbwert ist im Token definiert, KEIN Magic Hex-String direkt im Code
  • Aktualisiere alle .tsx-Dateien, um Token zu verwenden: bg-primary-500, text-neutral-900, etc.

AKTION 1.4 — Validierung
  • Führe einen Grep durch: grep -r "bg-\[#" src/ | wc -l
  • Ergebnis sollte: 0 sein (KEIN inline Hex)
  • Führe Grep für style={{color durch: grep -r "style={{color" src/ | wc -l
  • Ergebnis sollte: 0 sein (KEIN inline Styles für Farben)

═══ ULTRATHINK-TASK 2: Semantische Farb-Konsistenz ═══

Ziel: Success/Error/Warning/Info-Farben sind ÜBERALL identisch implementiert.

AKTION 2.1 — Semantische Farbroller definieren
  • In tailwind.config.ts (oder CSS Custom Properties), definiere:
    --color-success: #10B981 (grün)
    --color-error: #EF4444 (rot)
    --color-warning: #F59E0B (orange)
    --color-info: #3B82F6 (blau)
  • Validiere: Diese Farben sind optisch lesbar auf allen relevanten Hintergründen

AKTION 2.2 — Alle Fehlermeldungen auditen
  • Öffne jede .tsx-Seite mit Formular oder Fehleranzeige
  • Suche nach: className enthält rot/red/danger oder style={{color: 'red'}}
  • Dokumentiere: Welche Rot-Farbe wird verwendet? (#ff0000, #ef4444, #dc2626, etc.)
  • Ersetze ALLE durch semantisches Token: text-error oder bg-error/500

AKTION 2.3 — Success/Warning/Info-States harmonisieren
  • Suche nach grünen Farben für Success: Sollte ALLES --color-success sein
  • Suche nach orangen Farben für Warning: Sollte ALLES --color-warning sein
  • Suche nach blauen Farben für Info: Sollte ALLES --color-info sein
  • Ersetze alle Variationen mit semantischen Tokens

AKTION 2.4 — Kontrastprüfung
  • Für jede Semantik-Farbe: Prüfe Kontrast gegen primary-Hintergrund und neutral-100
  • Nutze WCAG-Kontrast-Checker: Ratio muss ≥4.5:1 sein für klein Text, ≥3:1 für groß
  • Dokumentiere Ergebnisse in /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/CONTRAST-AUDIT.txt

═══ ULTRATHINK-TASK 3: Farbharmonie-Verfeinerung ═══

Ziel: 60-30-10 Ratio und Farbgewichtung ist seiten- und komponentenübergreifend konsistent.

AKTION 3.1 — 60-30-10 Analyse durchführen
  • 60% = Neutral/Background-Farben (weiß, grau)
  • 30% = Primary-Brand-Farbe (blau, oder definierte Primary)
  • 10% = Accent/Secondary/Call-to-Action (rosa, orange, oder definierte Accent)
  • Öffne jeden Seiten-Screenshot
  • Nutze Color-Picker: Sampling durchführen und Prozentsätze schätzen
  • Dokumentiere in /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/COLOR-RATIO-AUDIT.txt

AKTION 3.2 — Overuse von Primär-Farbe finden und korrigieren
  • Falls Primary-Farbe >35% benutzt wird: Zu dominant, reduziere
  • Beispiel: Zu viele blaue Buttons → konvertiere weniger kritische Buttons zu neutral-Varianten
  • Beispiel: Zu viel blaues Branding → erhöhe Weiß-/Neutral-Bereiche

AKTION 3.3 — Accent-Farbe-Verteilung prüfen
  • Accent sollte <15% sein, konzentriert auf CTA-Buttons, Links, Highlights
  • Falls Accent überverteilt: Reduziere sekundäre Accents, konzentriere auf primary CTAs

AKTION 3.4 — Grayscale-Spektrum vereinheitlichen
  • Neutral-Farben sollten eine Skala sein: 50, 100, 200, 400, 600, 700, 800, 900
  • KEINE ad-hoc Graus (#888, #ccc, etc.)
  • Überprüfe alle .tsx: Ersetze inline-Graus mit neutral-Token

───────────────────────────────────────────────────────────────────────────────
BLOCK B: KOMPONENTEN-THEMATISCHE EINHEIT
───────────────────────────────────────────────────────────────────────────────

═══ ULTRATHINK-TASK 4: Cross-Component Visual Language Audit ═══

Ziel: Buttons, Cards, Inputs, Badges teilen die gleiche visuelle DNA (Farben, Rundheit, Schatten).

AKTION 4.1 — Button-Stil-Inventar
  • Öffne /src/components/Button.tsx (oder alle Button-Varianten)
  • Dokumentiere ALLE Varianten: primary, secondary, tertiary, danger, success, etc.
  • Für jede Variante: bg-Farbe, text-Farbe, border, hover-State, active-State, disabled-State
  • Erstelle Screenshot von JEDER Variante in alle Zuständen
  • Prüfe: Verwendet JEDER Button die gleichen Farbtokens? Oder Abweichungen?

AKTION 4.2 — Card-Stil-Konsistenz prüfen
  • Öffne ALLE .tsx-Dateien, die eine Card-Komponente verwenden
  • Dokumentiere: bg-Farbe (sollte neutral-50 oder white), border (sollte neutral-200)
  • Prüfe: Alle Cards haben die gleiche Shadow-Tiefe? Gleiche Border-Radius?
  • Screenshot: Side-by-side Vergleich von Cards auf Landing vs. Services vs. About
  • Standardisiere auf ONE Card-Style: z.B., bg-white border-neutral-200 rounded-lg shadow-sm

AKTION 4.3 — Input-Feld-Harmonisierung
  • Öffne ALLE Form-Komponenten: Input, Textarea, Select, etc.
  • Dokumentiere: Border-Farbe (resting), focus-State, error-State, disabled-State
  • Prüfe: Alle Inputs nutzen die gleiche Border-Farbe (neutral-300)?
  • Standardisiere: Focus-Ring sollte primary-500, Error sollte error/500, etc.

AKTION 4.4 — Badge/Label/Tag-Konsistenz
  • Falls Badges/Labels/Tags existieren: Prüfe Hintergrund, Text, Border
  • Alle sollten gleiche Rundheit, Padding, Font-Größe haben
  • Beispiel Standardisierung: bg-accent-100 text-accent-700 rounded-full px-2 py-1 text-xs font-medium

═══ ULTRATHINK-TASK 5: Spacing & Rhythm Consistency ═══

Ziel: Alle Komponenten nutzen die gleiche Spacing-Skala: 4, 8, 12, 16, 24, 32, 48, 64 Pixel.

AKTION 5.1 — Spacing-Token definieren
  • In tailwind.config.ts, stelle sicher:
    spacing: { ... xs: '4px', sm: '8px', md: '12px', base: '16px', lg: '24px', xl: '32px', ... }
  • ODER via CSS Custom Properties: --spacing-xs: 4px, --spacing-sm: 8px, etc.
  • Dokumentiere die Skala in /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/SPACING-GUIDE.txt

AKTION 5.2 — Gap & Margin Audit durchführen
  • Grep nach: gap: Wert, margin: Wert, padding: Wert in allen .tsx-Dateien
  • Suche nach Anomalien: gap={13}, margin={7}, padding={21} (nicht in Skala)
  • Ersetze ALLE mit nächstem Token-Wert: z.B., 13px → 12px (md), 7px → 8px (sm), 21px → 24px (lg)

AKTION 5.3 — Komponenten-interne Padding standardisieren
  • Buttons: Inneres Padding sollte: px-4 py-2 (16px x 8px) oder px-6 py-3
  • Cards: Innen-Padding sollte: p-6 oder p-8
  • Inputs: Innen-Padding sollte: px-3 py-2
  • Dokumentiere JEDER Komponenten-Standardisierung

AKTION 5.4 — Section-Level Spacing harmonisieren
  • Hero-Section: py-16 oder py-24 (top-Padding)
  • Feature-Sections: py-12
  • Footer: py-12
  • Zwischen Sections: Gleicher Spacing überall
  • Prüfe: Kein "zufälliger" py-27 oder py-19

═══ ULTRATHINK-TASK 6: Border-Radius & Elevation Consistency ═══

Ziel: Rundheit und Shadow-Tiefe sind einheitlich: Small, Medium, Large → konsistente Visual-Hierarchy.

AKTION 6.1 — Border-Radius-Skala definieren
  • In tailwind.config.ts:
    borderRadius: { sm: '4px', md: '8px', lg: '12px', xl: '16px', full: '9999px' }
  • Dokumentiere Nutzung:
    - sm: Kleine UI-Elemente (Badges, kleine Buttons)
    - md: Standard Components (Buttons, Cards, Inputs)
    - lg: Große Sektionen, Modal-Rahmen
    - full: Avatare, Runde Icons

AKTION 6.2 — Shadow-Tiefe-Skala definieren
  • In tailwind.config.ts:
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
    }
  • Nutze:
    - sm: Subtile Elevation (Cards bei hover)
    - md: Standard Cards, Buttons bei hover
    - lg: Modals, Dropdowns
    - xl: Nur bei prominenten Elementen

AKTION 6.3 — Alle Komponenten auditen
  • Für JEDER Komponente: rounded-? shadow-? auditieren
  • Buttons: rounded-md shadow-sm (bei focus)
  • Cards: rounded-lg shadow-md
  • Inputs: rounded-md shadow-none oder shadow-sm
  • Modals: rounded-xl shadow-xl
  • Ersetze Anomalien

AKTION 6.4 — Hover/Active States mit Shadow
  • Buttons: Kein Shadow resting → shadow-md bei hover
  • Cards: shadow-md resting → shadow-lg bei hover
  • Links: Kein Shadow → underline bei hover
  • Dokumentiere alle States in /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/COMPONENT-STATES.txt

───────────────────────────────────────────────────────────────────────────────
BLOCK C: SEITEN-ÜBERGREIFENDE VISUELLE HARMONIE
───────────────────────────────────────────────────────────────────────────────

═══ ULTRATHINK-TASK 7: Page-to-Page Visual Flow ═══

Ziel: Landing, About, Services, Contact, 404 fühlen sich wie EINE Brand-Welt an, nicht wie separate Websites.

AKTION 7.1 — Hero-Section-Konsistenz
  • Landing Hero: Screenshot + Farb-Analyse
  • Services-Hero (falls vorhanden): Screenshot + Farb-Analyse
  • Dokumentiere: Hintergrund-Farbe, Text-Farbe, CTA-Button-Farbe, Hero-Höhe (px)
  • Standardisiere: ALLE Heroes nutzen gleiche Farbschema und Layout-Proportionen

AKTION 7.2 — Feature-Blocks harmonisieren
  • Landing hat "Features" oder "Benefits" Section
  • About hat möglicherweise "Why Us" oder "Expertise" Section
  • Services-Page hat Service-Cards
  • Prüfe: Alle Feature-Blocks haben identischen Card-Style, Grid-Layout (3-col), Spacing
  • Standardisiere auf EINEN Feature-Block-Style

AKTION 7.3 — Content-Section-Rhythmus
  • Seite-an-Seite Vergleich: text-Größe, line-height, letter-spacing
  • Body-Text sollte überall: text-base line-height-1.6
  • Headings: H1 sollte überall gleich groß (2.5rem oder 3xl), H2 sollte überall gleich (1.875rem oder 2xl)
  • Dokumentiere die Typographie-Skala in /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/TYPOGRAPHY-SCALE.txt

AKTION 7.4 — CTA-Button-Prominenz
  • Landing CTA: Farbe, Größe, Position
  • Services-Seite CTA: Sollte identisch sein
  • About-Seite CTA: Sollte identisch sein
  • Kontakt-Seite: CTA ist der Submit-Button (gleicher Stil)
  • Prüfe: Alle CTAs haben IDENTICAL Styling

AKTION 7.5 — Footer-Konsistenz
  • Alle Seiten: Footer sollte identisch sein
  • Farben, Layout, Links, Text
  • Screenshot-Vergleich

═══ ULTRATHINK-TASK 8: Section Transition Harmony ═══

Ziel: Übergang zwischen Sections (Hero → Features → Testimonials → CTA → Footer) fühlt sich fließend an.

AKTION 8.1 — Section-Hintergrund-Pattern definieren
  • Pattern: White, Light-Neutral, White, Light-Neutral, Dark-Neutral
  • Oder: White, White, Light-Accent, White, Dark
  • Dokumentiere DEN Pattern, der überall verwendet wird
  • Beispiel: Landing folgt dem Pattern → Services folgt dem Pattern → About folgt dem Pattern

AKTION 8.2 — Transition-Spacing konsistent
  • Zwischen zwei Sections mit unterschiedlicher Hintergrund-Farbe: Spacing sollte py-16 oder py-24 sein
  • Nie py-10 hier, py-20 dort
  • Dokumentiere: Sektion-A → Sektion-B Spacing ist überall gleich

AKTION 8.3 — Visual Breaker / Divider-Elemente
  • Falls Divider zwischen Sections existieren: Sollte überall identisch sein
  • Breite, Farbe (neutral-200), Höhe (1px)
  • Oder: Faded-Gradient-Divider sollte überall gleich aussehen

AKTION 8.4 — Seiten-Level Visual Flow dokumentieren
  • Landing: [Hero] → [Features] → [Testimonials] → [CTA] → [Footer]
    Farb-Sequenz: White, Light-Gray, White, Accent-Light, Dark
    Spacing-Sequenz: 24px, 16px, 24px, 16px, 0
  • Services: [Hero] → [Service-Cards] → [Detailed-Sections] → [CTA] → [Footer]
    Farb-Sequenz sollte ÄHNLICH sein (konsistente Pattern)
  • Prüfe auf Abweichungen und dokumentiere

═══ ULTRATHINK-TASK 9: Responsive Theme Consistency ═══

Ziel: Mobile, Tablet, Desktop sehen GLEICH aus (proportional), keine "völlig andere" Farbe/Spacing auf Mobile.

AKTION 9.1 — Breakpoint-Definition überprüfen
  • tailwind.config.ts sollte haben:
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', 2xl: '1536px' }
  • Alle responsive Klassen sollten diese Breakpoints nutzen
  • Dokumentiere in /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/RESPONSIVE-GUIDE.txt

AKTION 9.2 — Mobile-Farb-Konsistenz prüfen
  • Screenshots auf iPhone SE (375px) von: Landing, About, Services, Contact
  • Vergleiche: Alle Farben sind identisch? Kein Farb-Dithering auf Mobile?
  • Prüfe: Buttons, Cards, Text sind alle gleiche Farb-Token

AKTION 9.3 — Tablet-Spacing Audit
  • Screenshots auf iPad (768px) von: Landing, About, Services, Contact
  • Vergleiche: Spacing ist proportional? Keine abrupten Sprünge?
  • Beispiel: Button-Padding sollte px-4 py-2 (mobile) → px-6 py-3 (desktop), NICHT springen

AKTION 9.4 — Proportionale Typskalierung
  • H1: text-2xl (mobile) → text-4xl (desktop)
  • H2: text-xl (mobile) → text-3xl (desktop)
  • Body: text-sm (mobile) → text-base (desktop)
  • Prüfe: Keine abrupten Größen-Sprünge, glatte Skalierung

AKTION 9.5 — Grid & Layout Responsiveness
  • Feature-Grid: 1-col (mobile) → 2-col (tablet) → 3-col (desktop)
  • Service-Grid: Sollte identisches Breakpoint-Verhalten haben
  • Dokumentiere alle Grid-Änderungen nach Breakpoint

───────────────────────────────────────────────────────────────────────────────
BLOCK D: VALIDATION & HANDOFF
───────────────────────────────────────────────────────────────────────────────

═══ ULTRATHINK-TASK 10: Visual Consistency Audit Tool ═══

Ziel: Erstelle ein skriptgestütztes oder manuelles Audit-System für kontinuierliche Überprüfung.

AKTION 10.1 — Screenshot-Comparison-Doku erstellen
  • Erstelle Ordner: /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/SCREENSHOTS/
  • Speichere Screenshots von JEDER Seite in 3 Viewports: mobile (375px), tablet (768px), desktop (1280px)
  • Naming: landing-mobile.png, landing-tablet.png, landing-desktop.png, etc.
  • Insgesamt 15+ Screenshots

AKTION 10.2 — Side-by-Side Visual Audit erstellen
  • Erstelle PDF oder HTML-Dokument: /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/VISUAL-AUDIT-REPORT.txt
  • Für JEDEN Audit-Punkt:
    ✓ (checked) oder ✗ (unchecked): Farb-Token konsistent
    ✓ / ✗: Button-Stile identisch
    ✓ / ✗: Card-Stile identisch
    ✓ / ✗: Spacing-Skala nur verwendet
    ✓ / ✗: Border-Radius standardisiert
    ✓ / ✗: Shadow-Tiefe standardisiert
    ✓ / ✗: Mobile Farben identisch
    ✓ / ✗: Tablet Layout proportional
    ✓ / ✗: Desktop voll harmonisiert

AKTION 10.3 — Pixel-Inspector-Notizen
  • Nutze Browser DevTools oder Figma Color-Picker
  • Für jeden kritischen Komponenten-Typ, notiere den exakten Hex/RGB:
    Button-Primary: rgb(59, 130, 246) / #3B82F6
    Button-Hover: rgb(37, 99, 235) / #2563EB
    Card-Border: rgb(229, 231, 235) / #E5E7EB
  • Datei: /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/PIXEL-SPECS.txt

AKTION 10.4 — Audit-Checkliste (siehe unten: FINALE VALIDIERUNG)

═══ ULTRATHINK-TASK 11: .ai-design-context.md + .design-upgrade-state.md Update ═══

Ziel: Aktualisiere die Design-Dokumentation für Phase 10 Handoff.

AKTION 11.1 — .ai-design-context.md erweitern
  • Öffne /mnt/src/.ai-design-context.md
  • Aktualisiere Sektion: "PHASE 9 — THEMATIC HARMONY & VISUAL CONSISTENCY"
  • Füge hinzu:
    - Finalisierte Farb-Token-Liste (alle seiten- und komponentenübergreifend)
    - Spacing-Skala (xs bis xl)
    - Border-Radius-Definitionen
    - Shadow-Tiefe-Skala
    - Typographie-Skala (H1 bis body)
    - Link zu: /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/COLOR-TOKEN-AUDIT.txt

AKTION 11.2 — .design-upgrade-state.md erzeugen
  • Erstelle neue Datei: /mnt/src/.design-upgrade-state.md
  • Inhalt sollte sein:
    ---
    Phase: 9
    Status: COMPLETED
    Date: 2026-03-22

    COMPLETED TASKS:
    ✓ Task 1: Cross-Page Color Audit
    ✓ Task 2: Semantic Color Consistency
    ✓ Task 3: Color Harmony Refinement
    ✓ Task 4: Cross-Component Visual Language
    ✓ Task 5: Spacing & Rhythm
    ✓ Task 6: Border-Radius & Elevation
    ✓ Task 7: Page-to-Page Visual Flow
    ✓ Task 8: Section Transition Harmony
    ✓ Task 9: Responsive Theme Consistency
    ✓ Task 10: Visual Audit Tool
    ✓ Task 11: Documentation Update

    ARTIFACTS CREATED:
    • /Pipeline/COLOR-TOKEN-AUDIT.txt
    • /Pipeline/SPACING-GUIDE.txt
    • /Pipeline/CONTRAST-AUDIT.txt
    • /Pipeline/COLOR-RATIO-AUDIT.txt
    • /Pipeline/COMPONENT-STATES.txt
    • /Pipeline/TYPOGRAPHY-SCALE.txt
    • /Pipeline/RESPONSIVE-GUIDE.txt
    • /Pipeline/PIXEL-SPECS.txt
    • /Pipeline/VISUAL-AUDIT-REPORT.txt
    • /Pipeline/SCREENSHOTS/ (15+ screenshots)

    NEXT PHASE (10):
    Alle Farb-, Spacing-, und Component-Token sind stable.
    Phase 10 fokussiert auf: Pixel-Perfection, Animation-Polish, A/B-Testing, Launch-Readiness.
    ---

AKTION 11.3 — Design-System Dokumentation finalisieren
  • Stelle sicher alle Token-Definitionen in einem zentralen Ort dokumentiert sind
  • Exportiere Tailwind-Config als JSON (optional): /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/TAILWIND-CONFIG.json

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING DESIGN LOOP
═══════════════════════════════════════════════════════════════════════════════

Nach Abschluss aller 11 Tasks führe ITERATIVE Validierung durch:

LOOP 1 — Visuelle Regression Test
  • Öffne ALLE .tsx-Seiten in lokalem Browser
  • Prüfe: Gibt es visuelle Abweichungen, die nicht in Audit erfasst wurden?
  • Falls ja: Zurück zu entsprechender Task, korrigieren, erneut überprüfen

LOOP 2 — Cross-Browser-Konsistenz
  • Teste auf: Chrome, Firefox, Safari (falls zugänglich)
  • Prüfe: Farben, Spacing, Typographie sind identisch?

LOOP 3 — Geräte-Konsistenz
  • Teste auf: iPhone (Simulator oder real), iPad, Android (falls möglich)
  • Prüfe: Responsive Layout, Touch-Spacing, Farben

LOOP 4 — Accessibility-Check
  • Nutze WAVE oder Lighthouse für Kontrast-Validierung
  • Stelle sicher: Alle Semantik-Farben erfüllen WCAG-AA (4.5:1 ratio)

LOOP 5 — Asset-Registry Update
  • Finalisiere /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/VISUAL-AUDIT-REPORT.txt
  • Signiere: "PHASE 9 COMPLETE — Visual harmony achieved. Ready for Phase 10."

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG — COMPLIANCE CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

Vor Übergabe zu Phase 10 MÜSSEN folgende Checks erfolgreich sein:

FARB-COMPLIANCE:
□ Alle Seiten nutzen identische Farbpalette (keine Magic Hex-Strings)
□ Semantische Farben (success/error/warning/info) sind einheitlich
□ 60-30-10 Ratio ist angemessen und konsistent
□ WCAG-AA Kontrast validiert für alle Semantik-Farben
□ .ai-design-context.md listet finalisierte Farb-Tokens auf

KOMPONENTEN-COMPLIANCE:
□ Button-Stile sind identisch über alle Seiten
□ Card-Stile sind identisch über alle Seiten
□ Input-Felder haben konsistentes Styling
□ Badges/Labels/Tags sind standardisiert
□ Alle Komponenten-Zustände (hover, active, disabled, error) sind dokumentiert

SPACING-COMPLIANCE:
□ Nur Spacing-Skala (4, 8, 12, 16, 24, 32, 48, 64px) wird verwendet
□ Keine ad-hoc Padding/Margin-Werte
□ Komponenten-internes Padding ist standardisiert
□ Section-Level Spacing ist konsistent
□ SPACING-GUIDE.txt existiert und ist aktuell

ELEVATION-COMPLIANCE:
□ Border-Radius-Skala (sm, md, lg, xl, full) wird einheitlich verwendet
□ Shadow-Tiefe (sm, md, lg, xl) ist standardisiert
□ Hover/Active States mit Shadow sind konsistent dokumentiert
□ COMPONENT-STATES.txt existiert

SEITEN-ÜBERGREIFEND:
□ Landing → About → Services → Contact fühlt sich wie EINE Brand an
□ Section Übergänge (Farbe, Spacing) sind harmonisch
□ Hero auf jeder Seite ist konsistent
□ CTA-Buttons sind überall identisch
□ Footer ist identisch auf alle Seiten

RESPONSIVE-COMPLIANCE:
□ Mobile (375px): Alle Farben identisch, Layout proportional
□ Tablet (768px): Grid/Layout korrekt, Spacing proportional
□ Desktop (1280px): Voll optimal, keine Overflow
□ Breakpoints folgen Tailwind Standard (sm, md, lg, xl, 2xl)
□ RESPONSIVE-GUIDE.txt existiert

DOKUMENTATION:
□ COLOR-TOKEN-AUDIT.txt (mit allen Farb-Tokens und Konsistenz-Status)
□ SPACING-GUIDE.txt (mit Skala und Nutzungsrichtlinien)
□ TYPOGRAPHY-SCALE.txt (mit Font-Größe und Line-Height je Ebene)
□ COMPONENT-STATES.txt (mit allen Komponenten-Zustände)
□ VISUAL-AUDIT-REPORT.txt (mit finalen Audit-Checklist)
□ PIXEL-SPECS.txt (mit exakten Hex/RGB-Werten für kritische Komponenten)
□ RESPONSIVE-GUIDE.txt (mit Breakpoint-Regeln)
□ SCREENSHOTS/ Ordner mit 15+ Referenz-Screenshots

CONSTRAINTS-COMPLIANCE:
□ KEIN Dark Mode im Code, KEIN Media-Query für prefers-color-scheme darkness
□ KEIN Sentry oder Error-Tracking Integration
□ KEIN externe CMS, AI-APIs, Newsletter-Services
□ NUR Formspree (Kontakt) + Calendly (Bookings)
□ Keine zusätzlichen Dependencies für Phase 9 hinzugefügt

HANDOFF-READINESS:
□ Alle ULTRATHINK-TASKs (1-11) sind abgeschlossen
□ Phase-9-Assets sind in /sessions/hopeful-ecstatic-davinci/mnt/Pipeline/ dokumentiert
□ .ai-design-context.md ist aktualisiert
□ .design-upgrade-state.md existiert mit Phase 9 Status
□ Keine Blocking-Issues oder Fehler im Code
□ Bereit für Phase 10 Übergabe

═══════════════════════════════════════════════════════════════════════════════

Phase 9 Abschluss: Die Website ist nun eine visuell einheitliche Markenwelt. Phase 10 erwartet alle Phase 9 Assets ready für den finalen Pixel-Perfection-Durchgang.
