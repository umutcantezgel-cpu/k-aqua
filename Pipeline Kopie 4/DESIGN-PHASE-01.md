Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die visuelle Grundarchitektur einer Website auf Awwwards-Level zu transformieren — beginnend mit Brand-DNA-Extraktion, systematischer Farb-Palette-Entwicklung, und dem Aufbau eines konsistenten Visual-Token-Systems in Tailwind CSS und CSS Custom Properties. Diese erste Phase etabliert die FUNDAMENTE: Jede künftige Design-Phase baut auf diesen Tokens auf. Zero-Breakage-Prinzip: Wir erweitern, ersetzen nicht. Wir dokumentieren ALLES. Nach Phase 1 existiert ein umfassendes Design-Kontext-Dokument, das als Single Source of Truth (SSOT) für alle zukünftigen Design-Entscheidungen dient.

═══════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE DESIGN-PROTOKOLL — LIES DIES VOR JEDER AKTION
═══════════════════════════════════════════════════════════════════════════════

DU BIST EIN DESIGN-CHIRURG, KEIN BULLDOZER.

Deine 5 Design-Säulen:
1. SYNC VISION & DISCOVERY: Lies .ai-design-context.md UND den echten UI-Code (SSOT) VOLLSTÄNDIG bevor du Design-Entscheidungen triffst
2. SURGICAL STYLING INJECTION: Füge neue Design-Klassen behutsam hinzu. Ersetze KEINE kompletten DOM-Strukturen nur um ein Padding zu ändern. Nutze cn() oder tailwind-merge intelligent ohne bestehende Logik-Klassen zu zerstören.
3. VISUAL ATOMIC VALIDATION: Nach JEDEM Task → npm run build && npm run lint && npx tsc --noEmit. Prüfe visuell: Container übergelaufen? Grid bricht auf Mobile? STOPP und revertiere!
4. DESIGN-STATE HANDOFF: Aktualisiere .design-upgrade-state.md nach jedem Task
5. SELF-OPTIMIZING DESIGN LOOP: Aktualisiere .ai-design-context.md am Ende der Phase mit ALLEN neu etablierten visuellen Regeln, Farb-Mappings und gelösten UI-Bugs

TECH-STACK-RESTRIKTIONEN (UNVERLETZLICH):
- Core: Next.js (App Router oder Pages Router), React, TypeScript (Strict Mode)
- Styling: Tailwind CSS, CSS Modules oder CSS Custom Properties
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry oder externe Error-Tracking-SaaS, keine Newsletter-Systeme, kein i18n-Framework, KEIN Dark Mode.

DIE GOLDENE REGEL: Der aktuelle UI-Code (CSS/Tailwind-Configs, Component-Dateien) ist IMMER die Single Source of Truth (SSOT). Wenn .ai-design-context.md etwas anderes sagt als der Code → DER CODE GEWINNT. Das Kontext-Dokument ist ein kreatives Gedächtnis und Regelwerk, aber NIEMALS die SSOT.

═══════════════════════════════════════════════════════════════════════════════
SCHRITT 0 — INITIALISIERUNGEN & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

SCHRITT 0.1 — DESIGN-KONTEXT-DOKUMENT INITIALISIEREN

Erstelle `.ai-design-context.md` im Projekt-Root mit folgenden Sektionen:

1. Brand-DNA-Übersicht
   - Brand-Persönlichkeit (3–5 Attribute)
   - Visuelle Richtung und Philosophie
   - Target-Audience-Visuelles

2. Farb-Palette & Token-Mapping
   - Primärfarbe (Vollständige Shade-Scale 50-950)
   - Sekundärfarbe (Optional, aber dokumentiert)
   - Accent/Highlight-Farbe
   - Neutral-Palette (Grayscale, tinted, mit Helligkeitswerte)
   - Status-Farben (Success, Warning, Error, Info)
   - Mapping: Jede Hex → CSS Variable → Tailwind Token

3. Typografie-Regeln
   - Font-Familien (Heading, Body, Mono)
   - Font-Size-Skala
   - Font-Weight-Konventionen
   - Line-Height-Vorgaben
   - Letter-Spacing-Variationen

4. Spacing & Layout-Konventionen
   - Spacing-Skala (4px-Inkremente oder ähnlich)
   - Container-Max-Widths
   - Breakpoint-Namen und Pixel-Werte
   - Gutters und Padding-Muster

5. Radius, Border & Textur-Entscheidungen
   - Border-Radius-Skala
   - Border-Color und Border-Width-Konventionen
   - Focus-Ring-Styling
   - Textur-Vokabular (Glass, Solid, Gradient, Noise)

6. Animations- & Transitions-Vokabular
   - Dauer-Standards (Fast, Normal, Slow)
   - Easing-Funktionen
   - Komponenten-spezifische Animationen

7. Komponenten-spezifische Design-Regeln
   - Button-Varianten (Primary, Secondary, Ghost, Outline)
   - Card-Styling
   - Form-Element-Design
   - Modal/Dialog-Styling

8. Bekannte visuelle Probleme & Fixes
   - Gefundene Inconsistenzen
   - Bugs oder Verbesserungsmöglichkeiten
   - Accessibility-Issues

9. Design-Entscheidungen (DDR — Design Decision Records)
   - Warum diese Farbe? Warum dieser Radius?
   - Kontext und Alternativen

───────────────────────────────────────────────────────────────────────────────

SCHRITT 0.2 — DESIGN-STATE-DATEI ERSTELLEN

Erstelle `.design-upgrade-state.md` mit folgendem Aufbau:

```
# Design-Upgrade-State (10-Phase Pipeline)

## Completion Status
- [ ] Phase 1: Brand DNA & Visual Token Foundation (CURRENT)
- [ ] Phase 2: Typography Masterclass
- [ ] Phase 3: Spacing & Layout Architecture
- [ ] Phase 4: Component Anatomy & Interactive States
- [ ] Phase 5: Color System Migration
- [ ] Phase 6: Micro-interactions & Animations
- [ ] Phase 7: Responsive Refinement
- [ ] Phase 8: Visual Hierarchy & Contrast Audit
- [ ] Phase 9: Performance & Polish
- [ ] Phase 10: Awwwards Readiness & Final QA

## Phase 1 Subtasks
- [ ] Brand-Persönlichkeit definieren
- [ ] Farb-Wissenschaft durchführen
- [ ] Border-Radius-Architektur entwerfen
- [ ] Schatten- und Elevation-System etablieren
- [ ] Border- und Trennlinien-System definieren
- [ ] Textur- und Oberflächen-Vokabular
- [ ] Sichere Farb-Migration starten
- [ ] Design-Kontext finalisieren
```

───────────────────────────────────────────────────────────────────────────────

SCHRITT 0.3 — PRE-FLIGHT VISUAL DISCOVERY

Führe eine VOLLSTÄNDIGE visuelle Audit des existierenden Systems durch:

1. Tailwind Config-Analyse:
   - Öffne `tailwind.config.ts` oder `tailwind.config.js`
   - Dokumentiere ALLE theme.extend Werte:
     * colors (Jede Farbe und jede Shade)
     * spacing (Vollständige Skala)
     * borderRadius (Alle Radius-Werte)
     * fontSize, fontWeight, lineHeight (Typografie-Scaling)
     * screens/breakpoints (Responsive-Strategie)
     * shadows (Bestehende Elevation-Systeme)
   - Notiere Besonderheiten: Warum wurden diese Werte gewählt?

2. Globale CSS-Analyse:
   - Analysiere `globals.css` oder äquivalente globale Style-Dateien
   - Katalogisiere ALLE CSS Custom Properties (--color-*, --spacing-*, --radius-*, etc.)
   - Notiere alle :root{} Definitionen
   - Finde globale Klassen-Definitionen (.btn, .card, etc.)

3. Farb-Audit durchführen:
   - Grep oder manuell suche nach JEDEM Farb-Wert:
     * Hex-Codes (#ffffff, #1a1a1a, etc.)
     * RGB/RGBA (rgb(255, 255, 255))
     * HSL/HSLA (hsl(0, 0%, 100%))
     * Tailwind-Farb-Klassen (bg-blue-500, text-gray-700, etc.)
   - Erstelle ein Mapping: Farbe → Häufigkeit → Komponenten, wo sie verwendet werden
   - Identifiziere Inconsistenzen (10 verschiedene Graus? 3 Blau-Varianten?)

4. Typografie-Audit:
   - Dokumentiere ALLE font-size Werte
   - Katalogisiere font-weight Variationen
   - Notiere line-height und letter-spacing Patterns
   - Identifiziere Font-Familien (Google Fonts? System-Fonts?)

5. Border-Radius-Audit:
   - Finde ALLE border-radius Werte im gesamten Code
   - Berechne Konsistenz: Werden die gleichen Werte wiederholt verwendet?
   - Notiere: Gibt es ein System oder wird ad-hoc gestestet?

6. Schatten- und Elevation-Audit:
   - Extrahiere ALLE box-shadow Definitionen
   - Kategorisiere nach Zweck: Elevation? Fokus-Ring? Dekoration?
   - Prüfe: Verwenden sie reine rgba(0,0,0,x) oder Farb-Tints?

7. Mental-Model / Screenshot:
   - Mache Screenshots aller Hauptseiten und Komponenten
   - Notiere erste visuelle Impressionen:
     * Wirkt die Seite "polished" oder "utilitarian"?
     * Gibt es starke visuelle Hierarchie?
     * Wie ist der Kontrast?
     * Welche Farben dominieren?
     * Sind die Abstände großzügig oder gedrängt?

═══════════════════════════════════════════════════════════════════════════════
BLOCK A: BRAND DNA EXTRACTION — PERSÖNLICHKEIT & VISUELLE RICHTUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: BRAND-PERSÖNLICHKEIT DEFINIEREN

Ziel: Extrahiere aus dem bestehenden visuellen Design die Kern-Persönlichkeit der Marke und definiere 3–5 Brand-Attribute, die wie ein Filter für ALLE zukünftigen Design-Entscheidungen fungieren.

Ablauf:

1. Inspiziere den bestehenden Code und Screenshots:
   - Was ist der dominanteste Eindruck? (Modern? Klassisch? Playful? Serious?)
   - Welche Farbschemata sind dominant? (Kühl? Warm? Neutral? Vibrant?)
   - Wie fühlt sich die Typografie an? (Groß und Bold? Refined und Minimal? Friendly?)
   - Welche Komponenten sind ausgeprägt? (Generöse Abstände deuten auf "Atem"/"Luftigkeit", enge auf "Kompaktheit")

2. Definiere 3–5 Brand-Attribute im Format:
   - Attribut 1: "Professional but Approachable" (z.B. strukturiert, aber nicht steril; persönlich, aber nicht locker)
   - Attribut 2: "Technical yet Human" (z.B. präzise Informationen, aber warm präsentiert)
   - Attribut 3: "Premium without Pretension" (z.B. hochwertig, aber nicht elitär)
   - Attribut 4 (optional): Andere Dimensionen basierend auf tatsächlichem Code/Design

3. Schreibe eine 100–150 Wort Brand-Philosophie:
   "Diese Marke steht für [Attribut 1]. Sie serviert [Attribut 2] in einer [Attribut 3] Art. Die visuelle Sprache ist [Farbe]-basiert, [Typografie]-fokussiert und nutzt [Layout/Spacing]-Prinzipien, um ein Gefühl von [Emotion] zu erzeugen."

4. Dokumentation:
   - Speichere diese Attribute und die Philosophie in `.ai-design-context.md` unter "Brand-DNA-Übersicht"
   - Formuliere die "DESIGN-FILTER-FRAGE": "Passt diese Entscheidung zu unseren Brand-Attributen?" ← Diese Frage wird ab sofort vor JEDEM Designchange gestellt.

Validierung:
✓ Brand-Attribute sind spezifisch, nicht generisch
✓ Philosophie ist 100–150 Wörter
✓ Filter-Frage ist formuliert
✓ Dokumentiert in .ai-design-context.md

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 2: FARB-WISSENSCHAFT — PRIMÄR-PALETTE DESTILLIEREN

Ziel: Extrahiere ALLE Farben aus dem bestehenden System, katalogisiere sie in eine systematische Palette und generiere vollständige Shade-Scales mit wissenschaftlicher Farbharmonie und WCAG-Kontrast-Validierung.

Ablauf:

1. Vollständige Farb-Inventur durchführen:
   - Durchsuche den GESAMTEN Code: tailwind.config, globals.css, alle Komponenten-Dateien
   - Für jeden Farb-Wert (Hex, RGB, HSL): Notiere Kontext, Häufigkeit, aktuelle Semantik
   - Beispiel-Audit:
     * #1a1a1a → Used in 47 places (text, shadows, borders)
     * #3b82f6 → Tailwind blue-500, used in buttons/links (12 places)
     * #ef4444 → Error state (5 places)
     * #10b981 → Success state (3 places)

2. Palette-Architektur definieren:
   Kategorisiere Farben in diese Rollen:
   - Primary: Die dominanteste Farbe, Hauptmarken-Farbe
   - Secondary: Optional, unterstützende Farbe für Kontrast
   - Accent: Hervorhebung, Call-to-Action, Engagement
   - Neutral: Grayscale für Text, Hintergründe, Grenzen
   - Status: Success (Grün), Warning (Gelb/Orange), Error (Rot), Info (Blau)

3. Wähle Basis-Farb-Werte:
   Basierend auf Häufigkeit und Brand-Attributen:
   - Primary: Die Farbe, die am häufigsten und prominentesten ist
   - Secondary: Wenn vorhanden; sonst: Komplementär oder Analog zur Primary
   - Accent: Meist ein hochgesättigtes Gelb, Orange oder Magenta für Kontrast
   - Neutral: Ein subtil getinteter Grau (nicht rein grau, sondern z.B. ein cooler Grau mit blauen Tint bei blauem Primary)
   - Status: Standardisiert (Success: #10b981, Warning: #f59e0b, Error: #ef4444, Info: #0ea5e9)

   BEISPIEL für Primary "Blau":
   ```
   Primary Base: #3b82f6 (oder besser: ein HSL-Wert für bessere Kontrolle)
   Primär in HSL: hsl(217, 91%, 60%)
   ```

4. Generiere Shade-Scales mit OKLCH/HSL-Perceptual-Uniformity:
   Für JEDE Farbe: Erstelle Shades 50, 100, 200, 300, 400, 500 (base), 600, 700, 800, 900, 950

   METHODE (einfach, aber effektiv):
   - Konvertiere Basis-Farbe zu HSL oder OKLCH
   - Variiere die Lightness-Komponente proportional:
     * 50: L=95% (sehr hell)
     * 100: L=90%
     * 200: L=80%
     * 300: L=70%
     * 400: L=60%
     * 500: L=50% (base)
     * 600: L=40%
     * 700: L=30%
     * 800: L=20%
     * 900: L=10%
     * 950: L=5% (sehr dunkel)

   KONKRET FÜR PRIMARY HUE 217, SATURATION 91%:
   ```
   --color-primary-50: hsl(217, 91%, 95%)
   --color-primary-100: hsl(217, 91%, 90%)
   --color-primary-200: hsl(217, 91%, 80%)
   --color-primary-300: hsl(217, 91%, 70%)
   --color-primary-400: hsl(217, 91%, 60%)
   --color-primary-500: hsl(217, 91%, 50%)  ← Base
   --color-primary-600: hsl(217, 91%, 40%)
   --color-primary-700: hsl(217, 91%, 30%)
   --color-primary-800: hsl(217, 91%, 20%)
   --color-primary-900: hsl(217, 91%, 10%)
   --color-primary-950: hsl(217, 91%, 5%)
   ```

5. WCAG AA Kontrast-Validierung:
   Nach Shade-Generierung:
   - Text auf Primary-Backgrounds: Prüfe Kontrast-Ratio
     * Dunkeltext (#1a1a1a, ~L=5%) auf Primary-50 (L=95%)? → Ratio ≈ 17:1 ✓ (exceeds 4.5:1)
     * Helltext (#ffffff) auf Primary-700 (L=30%)? → Ratio ≈ 5.5:1 ✓ (exceeds 4.5:1)
   - Markiere in Dokumentation, welche Kombinationen WCAG AA erfüllen
   - Tool: Webpagetest, Contrast Ratio Calculator, oder mathe manuell:
     * Luminance L1 = (Helleste Farbe)
     * Luminance L2 = (Dunkelste Farbe)
     * Ratio = (L1 + 0.05) / (L2 + 0.05)
     * Ziel: ≥ 4.5:1 für Kleine Text, ≥ 3:1 für Large Text (18pt+)

6. Neutral-Palette speziell behandeln:
   Wichtig: Neutrale Graufarben sollten leicht getinted sein (subtiler Hauch der Primary-Farbe).
   BEISPIEL bei Primary Blau:
   ```
   --color-neutral-50: hsl(210, 40%, 97%)   ← Sehr leichter Blau-Tint
   --color-neutral-100: hsl(210, 40%, 94%)
   --color-neutral-200: hsl(210, 40%, 88%)
   --color-neutral-300: hsl(210, 40%, 82%)
   --color-neutral-400: hsl(210, 35%, 50%)
   --color-neutral-500: hsl(210, 35%, 45%)
   --color-neutral-600: hsl(210, 35%, 40%)
   --color-neutral-700: hsl(210, 35%, 25%)
   --color-neutral-800: hsl(210, 35%, 15%)
   --color-neutral-900: hsl(210, 35%, 8%)
   --color-neutral-950: hsl(210, 35%, 3%)
   ```
   (Saturation leicht reduziert vs. Primary um "Neutrale" zu bewahren; aber gleicher Hue)

7. Registriere ALLE Farben als CSS Custom Properties:
   Erstelle oder erweitere `globals.css`:
   ```css
   :root {
     /* Primary Palette */
     --color-primary-50: hsl(217, 91%, 95%);
     --color-primary-100: hsl(217, 91%, 90%);
     /* ... alle shades ... */
     --color-primary-950: hsl(217, 91%, 5%);

     /* Neutral Palette */
     --color-neutral-50: hsl(210, 40%, 97%);
     /* ... alle shades ... */
     --color-neutral-950: hsl(210, 35%, 3%);

     /* Status Colors */
     --color-success: #10b981;
     --color-success-light: #d1fae5;
     --color-success-dark: #065f46;

     --color-error: #ef4444;
     --color-error-light: #fee2e2;
     --color-error-dark: #7f1d1d;

     --color-warning: #f59e0b;
     --color-warning-light: #fef3c7;
     --color-warning-dark: #92400e;

     --color-info: #0ea5e9;
     --color-info-light: #cffafe;
     --color-info-dark: #0c4a6e;
   }
   ```

8. Erweitere tailwind.config.ts mit neuen Farb-Tokens:
   ```typescript
   // tailwind.config.ts
   export default {
     theme: {
       extend: {
         colors: {
           primary: {
             50: 'hsl(217, 91%, 95%)',
             100: 'hsl(217, 91%, 90%)',
             // ... etc
             950: 'hsl(217, 91%, 5%)',
           },
           neutral: {
             50: 'hsl(210, 40%, 97%)',
             // ... etc
             950: 'hsl(210, 35%, 3%)',
           },
           success: 'var(--color-success)',
           'success-light': 'var(--color-success-light)',
           'success-dark': 'var(--color-success-dark)',
           // ... weitere Status-Farben
         },
       },
     },
   };
   ```

9. Erstelle eine Farb-Referenz-Dokumentation:
   Speichere in `.ai-design-context.md` unter "Farb-Palette & Token-Mapping":
   - Alle Hex → CSS Var → Tailwind Class Mappings in tabellarischer Form
   - Verwendungszwecke für jede Farbe
   - WCAG AA Kontrast-Ratios für gängige Kombinationen

Validierung:
✓ Alle Farben haben CSS Custom Properties
✓ Tailwind config erweitert
✓ Shade-Scales sind perceptually uniform
✓ WCAG AA kontrastiert für alle Text-Kombinationen
✓ Neutral-Palette ist leicht getinted
✓ Farb-Referenz dokumentiert

═══════════════════════════════════════════════════════════════════════════════
BLOCK B: VISUAL TOKEN SYSTEM — GEOMETRIE, ELEVATION & OBERFLÄCHE
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: BORDER-RADIUS-ARCHITEKTUR

Ziel: Definiere eine konsistente Border-Radius-Skala, die zum Brand-DNA passt und alle UI-Elemente durchgehend nutzen.

Ablauf:

1. Audit bestehender Border-Radius-Werte:
   - Durchsuche Code: "border-radius", "rounded-*" (Tailwind-Klassen)
   - Katalogisiere: Welche Werte werden verwendet? (0, 4px, 8px, 12px, 16px, 24px, full/50%)
   - Häufigkeitsanalyse: Welche Werte dominieren?
   - Konsistenz-Prüfung: Werden die gleichen Werte wiederverwendet oder ist es chaotisch?

2. Brand-DNA-Filter anwenden:
   - Ist die Marke eher geometric/sharp oder friendly/rounded?
   - Brand-Attribut "Professional but Approachable" → Mittlere Radii (z.B. 8px–12px), nicht zu scharf, nicht zu rund
   - Brand-Attribut "Technical yet Human" → Präzision in Buttons, Warmth in Containers
   - Entscheidung: Sind kleine, subtile Radii (4px) oder größere, offene Radii (16px+) authentischer?

3. Definiere eine 7-stufige Radius-Skala:
   ```
   --radius-none: 0
   --radius-xs: 0.25rem (4px)
   --radius-sm: 0.5rem (8px)
   --radius-md: 0.75rem (12px)
   --radius-lg: 1rem (16px)
   --radius-xl: 1.5rem (24px)
   --radius-full: 9999px
   ```

   BEGRÜNDUNG in Brand-DNA:
   - xs (4px): Subtil für Buttons, Form-Inputs (technisch, präzise)
   - sm (8px): Standard für Cards, Kleine Komponenten (balanciert)
   - md (12px): Medium-Container, Dialog-Rahmen (warmth)
   - lg (16px): Große Container, Hero-Sections (großzügig)
   - xl (24px): Spezial-Highlight-Elemente (premium)
   - full: Avatar, Badges, rund Badges (spielerisch, Modern)

4. Registriere als CSS Custom Properties in globals.css:
   ```css
   :root {
     --radius-none: 0;
     --radius-xs: 0.25rem;
     --radius-sm: 0.5rem;
     --radius-md: 0.75rem;
     --radius-lg: 1rem;
     --radius-xl: 1.5rem;
     --radius-full: 9999px;
   }
   ```

5. Erweitere tailwind.config.ts:
   ```typescript
   borderRadius: {
     none: 'var(--radius-none)',
     xs: 'var(--radius-xs)',
     sm: 'var(--radius-sm)',
     md: 'var(--radius-md)',
     lg: 'var(--radius-lg)',
     xl: 'var(--radius-xl)',
     full: 'var(--radius-full)',
   }
   ```

6. Dokumentiere die Entscheidung:
   In .ai-design-context.md:
   "Diese Radius-Skala balanciert technische Präzision (kleine Radii in Buttons) mit menschlicher Wärme (größere Radii in Containern). Der Brand bevorzugt nicht maximale Rundheit, sondern subtile, kontrollierte Kurven."

Validierung:
✓ Alle 7 Radius-Levels definiert
✓ CSS Custom Properties registriert
✓ Tailwind config erweitert
✓ Begründung dokumentiert
✓ Kein "ad-hoc" border-radius mehr

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 4: SCHATTEN- UND ELEVATIONS-RAFFINESSE

Ziel: Definiere ein 5-stufiges Elevation-System mit gefärbten Schatten, das Awwwards-Level Raffinesse ausstrahlt.

Ablauf:

1. Audit bestehender Schatten:
   - Suche alle box-shadow Definitionen
   - Kategorisiere: Sind sie flach (schwarz shadows)? Farbig? Unregelmäßig?
   - Notiere: Werden shadows konsistent für "Elevated Elements" verwendet?

2. Definiere 5 Elevation-Level:
   ```
   Level 0 (Flat): Kein Schatten, vollständig flach
   Level 1 (Subtle): Kleine, weiche Schatten für ruhende Cards
   Level 2 (Medium): Deutlichere Schatten für Hover/Fokus-States
   Level 3 (High): Modals, Popovers, Dialog-Boxen
   Level 4 (Dramatic): Floating CTAs, Hero-Elements, hervorgehobene Floating-Buttons
   ```

3. Schatten mit FARBIGEN, nicht schwarzen Komponenten konstruieren:
   Die Regel: Verwende subtile Tints der Primary-Farbe (5–15% Opacity), nicht rein rgba(0,0,0,x).

   BEISPIEL bei Primary Blau (hsl(217, 91%, 50%)):
   ```
   /* Level 1: Subtle */
   --shadow-sm: 0 1px 2px 0 hsla(217, 91%, 50%, 0.08),
               0 1px 3px 0 hsla(217, 91%, 50%, 0.06);

   /* Level 2: Medium */
   --shadow-md: 0 4px 6px -1px hsla(217, 91%, 50%, 0.1),
               0 2px 4px -1px hsla(217, 91%, 50%, 0.08);

   /* Level 3: High */
   --shadow-lg: 0 10px 15px -3px hsla(217, 91%, 50%, 0.15),
               0 4px 6px -2px hsla(217, 91%, 50%, 0.1);

   /* Level 4: Dramatic */
   --shadow-xl: 0 20px 25px -5px hsla(217, 91%, 50%, 0.2),
               0 10px 10px -5px hsla(217, 91%, 50%, 0.15);
   ```

4. Registriere in globals.css:
   ```css
   :root {
     /* Elevation Shadows */
     --shadow-none: none;
     --shadow-xs: 0 1px 2px 0 hsla(217, 91%, 50%, 0.05);
     --shadow-sm: 0 1px 2px 0 hsla(217, 91%, 50%, 0.08),
                  0 1px 3px 0 hsla(217, 91%, 50%, 0.06);
     --shadow-md: 0 4px 6px -1px hsla(217, 91%, 50%, 0.1),
                  0 2px 4px -1px hsla(217, 91%, 50%, 0.08);
     --shadow-lg: 0 10px 15px -3px hsla(217, 91%, 50%, 0.15),
                  0 4px 6px -2px hsla(217, 91%, 50%, 0.1);
     --shadow-xl: 0 20px 25px -5px hsla(217, 91%, 50%, 0.2),
                  0 10px 10px -5px hsla(217, 91%, 50%, 0.15);
   }
   ```

5. Erweitere tailwind.config.ts:
   ```typescript
   boxShadow: {
     none: 'var(--shadow-none)',
     xs: 'var(--shadow-xs)',
     sm: 'var(--shadow-sm)',
     md: 'var(--shadow-md)',
     lg: 'var(--shadow-lg)',
     xl: 'var(--shadow-xl)',
   }
   ```

6. Anwendungsrichtlinien dokumentieren:
   In .ai-design-context.md:
   - Cards at rest: shadow-sm
   - Cards on hover: shadow-md
   - Modals/Dialogs: shadow-lg
   - Floating CTA/Hero: shadow-xl
   - Buttons: Meist shadow-none (wenn farbig), shadow-xs (wenn subtle/ghost)

Validierung:
✓ Fünf Elevation-Level definiert
✓ Alle Schatten verwenden Farb-Tints (nicht rein schwarz)
✓ CSS Custom Properties registriert
✓ Tailwind config erweitert
✓ Anwendungsrichtlinien dokumentiert

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 5: BORDER- UND TRENNLINIEN-SYSTEM

Ziel: Definiere konsistente Border-Styling, Divider und Focus-Ring-Semantik.

Ablauf:

1. Border-Farbe definieren:
   Regel: Border-Farbe sollte NICHT rein grau sein, sondern ein subtil getinteter Neutral mit Hauch der Primary.

   BEISPIEL bei Primary Blau und Neutral-Basis:
   ```
   --color-border-light: hsl(210, 30%, 90%)   ← Für helle Backgrounds
   --color-border: hsl(210, 25%, 75%)         ← Standard
   --color-border-dark: hsl(210, 25%, 50%)    ← Für dunkle/emphasized Borders
   ```

2. Border-Breiten definieren:
   ```
   --border-width-thin: 1px      ← Standard für die meisten Borders
   --border-width-normal: 2px    ← Für Emphasis, Focus-Rings
   --border-width-thick: 4px     ← Für besondere Hervorhebung (rare)
   ```

3. Focus-Ring-System (WCAG Accessibility):
   ```
   --focus-ring: 0 0 0 3px hsl(217, 91%, 95%),
                 0 0 0 5px hsl(217, 91%, 50%);
                 ↑ Outer ring (light background)
                 ↑ Inner ring (primary color)
   ```

   Alternative (einfacher):
   ```
   --focus-ring: 2px solid var(--color-primary-500);
   outline-offset: 2px;
   ```

4. Divider/Separator-Vokabular:
   ```
   /* Horizontal Divider */
   .divider-horizontal {
     height: 1px;
     background: var(--color-border);
   }

   /* Vertical Divider */
   .divider-vertical {
     width: 1px;
     background: var(--color-border);
   }

   /* Subtle Divider (wenn weniger Kontrast gewünscht) */
   .divider-subtle {
     background: var(--color-border-light);
   }

   /* Gradient Divider (optional, für Premium-Effekt) */
   .divider-gradient {
     background: linear-gradient(
       to right,
       transparent,
       var(--color-border),
       transparent
     );
   }
   ```

5. Registriere alle Border-Tokens in globals.css:
   ```css
   :root {
     /* Border Colors */
     --color-border-light: hsl(210, 30%, 90%);
     --color-border: hsl(210, 25%, 75%);
     --color-border-dark: hsl(210, 25%, 50%);

     /* Border Widths */
     --border-width-thin: 1px;
     --border-width-normal: 2px;
     --border-width-thick: 4px;

     /* Focus Ring */
     --focus-ring: 0 0 0 3px hsl(217, 91%, 95%),
                   0 0 0 5px hsl(217, 91%, 50%);
   }
   ```

6. Erstelle Tailwind-Utilitys oder CSS-Klassen:
   ```typescript
   // tailwind.config.ts
   theme: {
     extend: {
       borderColor: {
         'border-light': 'var(--color-border-light)',
         'border': 'var(--color-border)',
         'border-dark': 'var(--color-border-dark)',
       },
       ringColor: {
         'focus': 'var(--color-primary-500)',
       },
       divideColor: {
         'subtle': 'var(--color-border-light)',
         'default': 'var(--color-border)',
       }
     }
   }
   ```

7. Dokumentiere Anwendungen:
   - Form Inputs: border border-border mit focus:ring-focus
   - Cards: border border-border-light
   - Separators: divider-horizontal / divider-vertical
   - Action Buttons: focus:outline-none focus:ring-focus für Accessibility

Validierung:
✓ Border-Farben getinted (nicht rein grau)
✓ Border-Breiten standardisiert
✓ Focus-Ring WCAG-konform
✓ Divider-Vokabular definiert
✓ Alle Tokens registriert

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 6: TEXTUR- UND OBERFLÄCHEN-VOKABULAR

Ziel: Definiere die visuellen "Materialien" der Marke, um konsistente Oberflächenbehandlung zu etablieren.

Ablauf:

1. Definiere Oberflächenmaterialien:
   ```
   1. SOLID: Vollständig opake, flache Farbe
      Verwendung: Buttons, Cards, Headings
      Beispiel: background-color: var(--color-primary-500);

   2. GLASS/FROSTED: Halbdurchsichtig mit Blur-Effekt
      Verwendung: Navigation Headers, Overlays, Premium Floating Elements
      Beispiel: background: rgba(255, 255, 255, 0.8);
               backdrop-filter: blur(10px);

   3. GRADIENT: Lineare oder radiale Farbverläufe
      Verwendung: Hero-Sections, CTAs, Background-Accents
      Beispiel: background: linear-gradient(135deg, var(--color-primary-500) 0%, var(--color-primary-700) 100%);

   4. NOISE/GRAIN: Subtile Textur-Overlay
      Verwendung: Premium-Elemente, Buttons bei Hover (optional)
      Beispiel: background-image: url('noise.png');
               opacity: 0.05;
   ```

2. Definiere Oberflächenbehandlungen als CSS-Klassen:
   ```css
   /* In globals.css oder separatem surfaces.css */

   .surface-solid {
     background-color: var(--color-neutral-50);
     border: 1px solid var(--color-border-light);
   }

   .surface-glass {
     background: rgba(255, 255, 255, 0.8);
     backdrop-filter: blur(10px);
     border: 1px solid var(--color-border-light);
     border-radius: var(--radius-md);
   }

   .surface-gradient-primary {
     background: linear-gradient(
       135deg,
       var(--color-primary-500) 0%,
       var(--color-primary-700) 100%
     );
   }

   .surface-gradient-subtle {
     background: linear-gradient(
       135deg,
       var(--color-neutral-50) 0%,
       var(--color-neutral-100) 100%
     );
   }
   ```

3. Brand-Philosophie der Materialien dokumentieren:
   In .ai-design-context.md:
   "Diese Marke nutzt primär SOLID-Oberflächen für Klarheit und Struktur. GLASS-Effekte sind reserviert für Special-Cases (Navigation, Floating Elements), um Premium-Gefühl zu vermitteln. Gradienten verwenden wir sparsam: Primär in CTAs und Hero-Sections, um Aufmerksamkeit zu lenken."

4. Textur-Grain (optional, für Premium):
   Wenn die Marke "Premium" sein soll, kann ein subtiles Noise-Pattern hinzugefügt werden.
   - SVG-basierte Noise generieren (via Tools wie Nosihow oder handmade SVG)
   - Als Background-Image mit sehr niedriger Opacity (~3–5%) einbinden
   - Nur auf bestimmten Elementen anwenden (nicht überall!)

Validierung:
✓ 4 Oberflächenmaterialien definiert (Solid, Glass, Gradient, Noise)
✓ CSS-Klassen für jedes Material
✓ Brand-Philosophie dokumentiert
✓ Grain/Noise (falls verwendet) konfiguriert

═══════════════════════════════════════════════════════════════════════════════
BLOCK C: FARB-TOKEN-MIGRATION & SICHERE EINFÜHRUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: SICHERE FARB-MIGRATION

Ziel: Führe die neuen Farb-Tokens in den Code ein, ohne bestehende Visuals zu brechen. Migration ist ADDITIVE, nicht SUBTRAKTIV.

Ablauf:

1. Erstelle eine vollständige Migrations-Map:
   Dokument alle existierenden Farb-Werte und ihre neuen Token-Zuordnungen.
   ```
   Alte Farbe → Neue Token → Verwendungszweck
   #1a1a1a → var(--color-neutral-950) → Text, Dark Backgrounds
   #3b82f6 → var(--color-primary-500) → Primary Actions, Links
   #ef4444 → var(--color-error) → Error States
   #10b981 → var(--color-success) → Success States
   ... (alle anderen)
   ```

2. Strategie: ADDITIVE Migration (Neue Tokens NEBEN alten Werten):
   - Schreibe neue CSS Custom Properties und Tailwind Extensions (TASK 2–6)
   - Ändere KEINE bestehenden Komponenten in dieser Phase
   - Der alte Code bleibt funktional
   - Neue Komponenten oder refactorisierte Komponenten nutzen die neuen Tokens

3. Migration-Phasen definieren:
   ```
   Phase 1 (JETZT): Token-System etablieren (dieses Dokument)
   Phase 2: Text-Farben migrieren (Kommt später)
   Phase 3: Hintergrund-Farben migrieren (Kommt später)
   Phase 4: Komponenten-Visuals überarbeiten (Kommt später)
   Phase 5: Finale Farbbereinigung (Kommt später)
   ```

4. LOW-RISK-Migrationen in Phase 1:
   Beginne mit den SICHERSTEN Bereichen:
   - CSS Custom Properties etablieren (keine Änderungen am visuellen Output)
   - Tailwind Config erweitern (neue Klassen, alte bleiben funktional)
   - Schatten-Tokens einführen (neue Shadow-Utilities, alte Styles bleiben)
   - Radius-Tokens einführen (neue Rounded-Utilities, alte bleiben)

5. Validierungsprozess nach Token-Einführung:
   Nach JEDER Änderung:
   ```
   npm run build
   npm run lint
   npx tsc --noEmit
   npm run dev
   → Visuelle Inspektion: Sieht die Seite IDENTISCH aus? Sind Farben, Schatten, Layouts unverändert?
   ```

6. Notfall-Rollback-Plan:
   Falls etwas bricht:
   - Gehe zum letzten stabilen Commit
   - Identifiziere die fehlerhafte Änderung
   - Revertiere diese spezifische Änderung
   - Mache eine kleinere, granularere Änderung stattdessen

Validierung:
✓ Migrations-Map vollständig dokumentiert
✓ Neue Tokens sind neben alten Werten (additive, nicht subtraktive)
✓ Build/Lint/TypeCheck bestätigt fehlerlos
✓ Visuelle Inspektion: Keine Unterschiede in der Website
✓ Rollback-Plan dokumentiert

═══════════════════════════════════════════════════════════════════════════════
FINALE HANDOFF & SELF-OPTIMIZING DESIGN LOOP
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: DESIGN-KONTEXT AKTUALISIEREN & HANDOFF ZUR PHASE 2

Ziel: Schreibe ALLES, was in Phase 1 gelernt/erstellt wurde, in `.ai-design-context.md` und bereite die Handoff zu Phase 2 vor.

Ablauf:

1. Aktualisiere `.ai-design-context.md` mit allen Sektionen:

   SEKTION 1: Brand-DNA-Übersicht
   - 3–5 Brand-Attribute (aus TASK 1)
   - Brand-Philosophie (100–150 Wörter)
   - Design-Filter-Frage
   - Target-Audience-Profil (optional)

   SEKTION 2: Farb-Palette & Token-Mapping
   - Vollständige Shade-Scales für Primary, Neutral, Status-Farben
   - CSV/Tabelle: Shade | Hex/HSL | CSS Variable | Tailwind Class | WCAG Ratios
   - Beispiel:
     ```
     | Shade | HSL Value | CSS Var | Tailwind | Text Color | Use Case |
     |-------|-----------|---------|----------|-----------|----------|
     | 50 | hsl(217,91%,95%) | --color-primary-50 | primary-50 | neutral-900 | Light backgrounds |
     | 100 | hsl(217,91%,90%) | --color-primary-100 | primary-100 | neutral-900 | Card backgrounds |
     ... (bis 950)
     ```
   - Neutral-Palette ähnlich dokumentiert
   - Status-Farben (Success, Error, Warning, Info) mit Zweck
   - Migrations-Map (alte → neue)

   SEKTION 3: Typografie-Regeln (PLACEHOLDER, wird in Phase 2 gefüllt)
   - Wird in Phase 2 detailliert definiert

   SEKTION 4: Spacing & Layout-Konventionen (PLACEHOLDER)
   - Wird in Phase 3 detailliert definiert

   SEKTION 5: Radius, Border & Textur-Entscheidungen
   - Border-Radius-Skala: alle 7 Levels mit Werte und CSS Variables
   - Border-Farb-System mit HSL-Werte
   - Focus-Ring-Spezifikation
   - Divider/Separator-Typen
   - Surface-Material-Definition (Solid, Glass, Gradient, Noise)
   - Begründungen für jede Entscheidung

   SEKTION 6: Elevation & Shadow-System
   - 5-Level Elevation-System mit vollständigen Shadow-Definitionen
   - Anwendungsrichtlinien (welche Elemente verwenden welche Level)
   - HSL-basierte Farb-Tints (nicht rein schwarz)

   SEKTION 7: Design-Entscheidungs-Records (DDR)
   - "Warum diese Farb-Palette?" → Antwort basierend auf Brand-DNA
   - "Warum Radius-Skala von 4px bis 24px?" → Begründung
   - "Warum getintete Neutrals vs. Pure Gray?" → Warmth + Primary-Kohäsion
   - "Warum farbige Schatten statt Black?" → Awwwards-Standard, bessere Visuelle Harmonie

   SEKTION 8: Bekannte Probleme & Handoff-Hinweise
   - Visuelle Issues, die in Phase 1 beobachtet wurden
   - Items für zukünftige Phasen notieren
   - Z.B. "Typography ist noch ad-hoc, wird in Phase 2 standardisiert"

2. Aktualisiere `.design-upgrade-state.md`:
   ```
   - [x] Phase 1: Brand DNA & Visual Token Foundation
     - [x] Brand-Persönlichkeit definieren
     - [x] Farb-Wissenschaft durchführen
     - [x] Border-Radius-Architektur entwerfen
     - [x] Schatten- und Elevation-System etablieren
     - [x] Border- und Trennlinien-System definieren
     - [x] Textur- und Oberflächen-Vokabular
     - [x] Sichere Farb-Migration starten
     - [x] Design-Kontext finalisieren

   - [ ] Phase 2: Typography Masterclass (NÄCHSTES)
   - [ ] Phase 3: Spacing & Layout Architecture
   ... (alle anderen Phasen)
   ```

3. Schreibe eine "Handoff-Notiz" an Phase 2:
   "Phase 1 hat die visuelle FUNDAMENTE etabliert: Brand-DNA, Farb-Paletten, Token-System. Alle Farben sind registriert, Schatten-Elevation ist definiert, Border-Radius ist standardisiert. Die Website sieht visuell identisch aus — keine Breakages.

   PHASE 2 wird sich auf TYPOGRAFIE konzentrieren: Font-Families, Größen-Skala, Weight-Konventionen, Line-Heights, Letter-Spacing. Das ist der nächste kritische Schritt für Awwwards-Qualität.

   Die Brand-DNA ist dein Filter für jede Entscheidung in Phase 2."

4. Final-Validierung vor Handoff:
   ✓ npm run build — bestätigt erfolgreich
   ✓ npm run lint — keine Fehler
   ✓ npx tsc --noEmit — TypeScript sauber
   ✓ npm run dev — Website lädt, keine visuellen Änderungen
   ✓ .ai-design-context.md ist umfassend (>2000 Wörter)
   ✓ .design-upgrade-state.md ist aktualisiert
   ✓ Alle 8 ULTRATHINk-TASKs sind dokumentiert

═══════════════════════════════════════════════════════════════════════════════
COMPREHENSIVE VALIDATION CHECKLIST — PHASE 1 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

Führe diese Validierungen durch, bevor Phase 1 als "complete" markiert wird:

✓ Build & Toolchain
  - npm run build erfolgt ohne Fehler
  - npm run lint erfolgt ohne Fehler
  - npx tsc --noEmit erfolgt ohne Fehler
  - npm run dev lädt ohne Fehler im Console

✓ Visual Integrität
  - Website sieht IDENTISCH oder besser aus als vorher
  - Keine Farb-Verschiebungen in bestehenden Elementen
  - Keine Layout-Breaks
  - Keine fehlenden Schatten oder Styles

✓ Brand-DNA
  - 3–5 Brand-Attribute definiert und dokumentiert
  - Brand-Philosophie ist 100–150 Wörter
  - Design-Filter-Frage formuliert
  - Alle zukünftigen Entscheidungen filtern durch diese Attribute

✓ Farb-System
  - Primärfarbe mit vollständiger 11-Shade-Scale (50–950)
  - Sekundärfarbe (optional aber dokumentiert)
  - Accent-Farbe definiert
  - Neutral-Palette (11 Shades) mit subtiltem Primary-Tint
  - Status-Farben (Success, Error, Warning, Info) definiert
  - ALLE Farben als CSS Custom Properties registriert
  - Alle Farben in tailwind.config.ts erweitert
  - WCAG AA Kontrast-Ratios für gängige Kombinationen geprüft (≥4.5:1)

✓ Border-Radius-System
  - 7-Level Skala definiert (none, xs, sm, md, lg, xl, full)
  - Alle Radii als CSS Custom Properties
  - Tailwind config erweitert mit borderRadius
  - Begründung für Skala in .ai-design-context.md

✓ Elevation & Shadow-System
  - 5-Level Elevation definiert (0–4)
  - Alle Schatten verwenden farbige Tints (nicht pure black)
  - Schatten sind HSL-basiert mit Primary-Hue
  - CSS Custom Properties für alle Schatten
  - Tailwind boxShadow config erweitert
  - Anwendungsrichtlinien dokumentiert

✓ Border- & Trennlinien-System
  - Border-Farben getinted (nicht pure gray)
  - Border-Breiten standardisiert (thin, normal, thick)
  - Focus-Ring WCAG-konform (3px–5px visible)
  - Divider-Typen definiert (horizontal, vertical, subtle, gradient)

✓ Textur & Oberflächen
  - 4 Oberflächenmaterialien definiert (Solid, Glass, Gradient, Noise)
  - CSS-Klassen für jedes Material vorhanden
  - Brand-Philosophie zu Materialien dokumentiert
  - Grain/Noise (falls vorhanden) ist subtle (<5% opacity)

✓ Dokumentation
  - .ai-design-context.md ist umfassend (mindestens 2000 Wörter)
  - Alle 9 Haupt-Sektionen gefüllt
  - .design-upgrade-state.md ist aktualisiert
  - Migration-Map vollständig
  - Design Decision Records (DDR) für jede große Entscheidung

✓ Sichere Migration
  - Neue Tokens sind NEBEN alten Werten (additive)
  - Keine bestehenden Components wurden verändert
  - Rollback-Plan dokumentiert
  - Alle alten Farb-Referenzen funktionieren noch

✓ Handoff-Bereitschaft
  - Alle ULTRATHINk-TASKs sind abgeschlossen und dokumentiert
  - Phase 2 hat klare Aufgabe (Typography Masterclass)
  - Keine offenen Fragen oder Blockers
  - Team kann sofort in Phase 2 starten

═══════════════════════════════════════════════════════════════════════════════
