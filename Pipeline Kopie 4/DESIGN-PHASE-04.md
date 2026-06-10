Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die mikro-visuelle Anatomie aller Komponenten zu standardisieren — Button-Systeme, Card-Hierarchien, Input-Felder, Badges, Avatare und die perfekte Orchestrierung aller Interaktionsstates. Dies ist die KOMPONENTEN-DNA-Phase. Jede noch so kleine visuellen Entscheidung (Padding, Border-Radius, Shadow-Level, Transition-Dauer, Hover-Effekt) wird EXAKT dokumentiert und in Tailwind/CSS implementiert. Nach Phase 4 existiert ein vollständiger Component-Anatomy-Guide mit 8 Komponenten-Spezifikationen, 22 visuellen Validierungs-Checklisten, und ein aktualisiertes Design-Kontext-Dokument das als SSOT für alle zukünftigen UI-Entscheidungen dient.

═════════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE DESIGN-PROTOKOLL — LIES DIES VOR JEDER AKTION
═════════════════════════════════════════════════════════════════════════════════

DU BIST EIN KOMPONENTEN-ARCHITECT, KEIN BULLDOZER.

Deine 5 Design-Säulen:
1. SYNC VISION & DISCOVERY: Lies .ai-design-context.md UND .design-upgrade-state.md VOLLSTÄNDIG. Pre-Flight-Komponenten-Audit durchführen. Keine Änderung ohne Kontext.
2. SURGICAL STYLING INJECTION: Injiziere neue Komponenten-Klassen behutsam. Nutze Tailwind-Compose-Patterns intelligent. Ersetze KEINE bestehenden Varianten komplett.
3. VISUAL ATOMIC VALIDATION: Nach jedem Task → npm run build && npm run lint && npx tsc --noEmit. Prüfe visuell: Alle States sichtbar? Hover-Effekte smooth? Focus-Ringe präsent? STOPP bei Fehlern.
4. DESIGN-STATE HANDOFF: Aktualisiere .design-upgrade-state.md nach jedem Task. Dokumentiere: welche Komponenten finalisiert, welche noch offen.
5. SELF-OPTIMIZING DESIGN LOOP: Nach Phase 4 → aktualisiere .ai-design-context.md mit ALLEN Komponenten-Spezifikationen als neue Sections.

TECH-STACK-RESTRIKTIONEN (UNVERLETZLICH):
- Core: Next.js (App Router), React, TypeScript (Strict Mode)
- Styling: Tailwind CSS FIRST, CSS Modules wo Dynamik nötig, CSS Custom Properties für Token-Verfolgung
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Component-Library npm-Package (Shadcn OK nur wenn selbst geforkt), keine Dark Mode
- UI-Code IST SSOT: Wenn Code anders aussieht als .ai-design-context.md → Code gewinnt IMMER

═════════════════════════════════════════════════════════════════════════════════
SCHRITT 0 — PRE-FLIGHT KOMPONENTEN-AUDIT
═════════════════════════════════════════════════════════════════════════════════

Vor JEDEM Task in Phase 4:

1. .ai-design-context.md öffnen. Alle Farb-Tokens, Radius-Tokens, Shadow-Levels, Type-Skala NOTIEREN
2. .design-upgrade-state.md öffnen. Welche Komponenten sind bereits dokumentiert? Was ist neu?
3. KOMPONENTEN-INVENTAR durchgehen:
   - Button (welche Dateien? app/components/Button.tsx?)
   - Card (Card.tsx, CardImage.tsx, CardFooter.tsx?)
   - Input (Input.tsx, Textarea.tsx?)
   - Badge (Badge.tsx?)
   - Avatar (Avatar.tsx, AvatarImage.tsx?)
   - SelectDropdown, Link, Tabs, Toast, Modal — alles notieren
4. FÜR JEDE KOMPONENTE: aktuelles Tailwind-Markup LESEN. Was sind die base-Klassen? Welche Variants?
5. STATE-AUDIT: Welche komponenten haben :hover, :focus, :disabled, :active states? Sind diese konsistent?
6. INTERAKTION PRÜFEN: Welche Komponenten triggern visuelles Feedback auf Klick? Gibt es Transitions?

═════════════════════════════════════════════════════════════════════════════════
BLOCK A — BUTTON-ANATOMIE
═════════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 1: BUTTON-DESIGN-SYSTEM — DIE KONVERSIONSMOTOREN
───────────────────────────────────────────────────────────────────────────────────

Buttons sind die #1 Conversion-Elemente. Sie MÜSSEN irresistibel sein.

1.1 BUTTON-VARIANTEN (aus Phase 1 Farb-Tokens):

PRIMARY (Das Konversions-Button):
- Background: Brand Primary (Phase 1 primary-600 oder primary-700)
- Text-Farbe: Weiß (oder contrast-safe light von Phase 1)
- Border: none (oder 1px transparent für Fokus-Ring-Offset)
- Tailwind-Basis: bg-primary-600 text-white font-medium
- Base-Größe (md): height: 40px
- Padding: px-4 (horizontal), py-2 (vertical, ergibt 40px mit line-height)

SECONDARY (Sekundär-Aktion):
- Background: Neutral surface color oder transparent
- Border: 1px solid phase-1-border-color (z.B. gray-300)
- Text-Farbe: primary text color (z.B. gray-900)
- Tailwind-Basis: bg-transparent border border-gray-300 text-gray-900 font-medium
- Hover: bg-gray-50 (leichte Fläche für Feedback)

GHOST (Text-only, minimal):
- Background: transparent
- Border: none
- Text-Farbe: primary-600 (Phase 1)
- Tailwind-Basis: bg-transparent text-primary-600 font-medium
- Hover: bg-primary-50 (subtil!)

DESTRUCTIVE (Warnung/Gefahr):
- Background: error-600 (Phase 1 rot, z.B. red-600)
- Text-Farbe: white
- Tailwind-Basis: bg-red-600 text-white font-medium
- Semantik: confirm-before-action

1.2 BUTTON-GRÖSSEN:

SM (32px):
- height: 32px, padding: px-3 (horizontal), font-size: text-sm
- Icon: 16px

MD (40px, STANDARD):
- height: 40px, padding: px-4 (horizontal), font-size: text-base
- Icon: 18px
- DIES ist die Standard-Größe. Die meisten Buttons sollten MD sein.

LG (48px):
- height: 48px, padding: px-6 (horizontal), font-size: text-base
- Icon: 20px
- Nutze für Hero-CTAs oder mobil wo Finger-Targeting wichtig

XL (56px):
- height: 56px, padding: px-8 (horizontal), font-size: text-lg
- Icon: 24px
- Nur für absolute Hero-Momente (z.B. über-dem-Fold Konversionskritischer CTA)

1.3 BORDER-RADIUS & MINIMALÄSTHETIK:

Border-radius: von Phase 1 Radius-Token
- Wenn Phase 1 sagt "radius-md = 6px" → NUTZE DAS
- Konsistenz mit anderen Komponenten ist KRITISCH
- Button, Input, Card sollten GLEICHE radius haben → visuell kohärent

MIN-WIDTH: Buttons dürfen niemals zu schmal sein. Minimum 120px für Label+Padding, oder Icon-Buttons square (width = height)

1.4 TYPOGRAFIE IM BUTTON:

- Font-Weight: font-medium (500) — hebt sich vom Body ab ohne bold zu sein
- Letter-Spacing: optional slight tracking (tracking-tight oder tracking-normal, je nach Marke)
- Text-Transform: keine Caps-Konversion in Tailwind, nutze semantic HTML <button> nur mit normalem Text
- Line-Height: kann reduziert werden auf line-height: 1.2 (bei sehr großen Buttons) damit Padding symmetrisch bleibt

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 2: BUTTON-STATES — DIE MAGIE DER INTERAKTION
───────────────────────────────────────────────────────────────────────────────────

JEDER State hat eine CSS-Transition. Kein State ist instant.

DEFAULT (Base-Zustand):
- Bereits "clickable" aussehen durch Farbe oder subtile Elevation
- Primary Button hat bereits solide Farbe (reads: "click me")
- Secondary Button: subtile Border zeigt Grenze
- Ghost Button: nur Text, aber Phase-1-Primärfarbe macht es clickable
- Schatten: Phase 1 elevation-level-0 oder elevation-level-1 (subtle)

HOVER (Zeige Feedback):
Option A: Brighten/Darken
- filter: brightness(0.9) auf Primary (abdunkeln 10%)
- ODER: bg-primary-700 (eine Shade dunkler)
- Smooth transition: transition: all 200ms ease-out

Option B: Lift (Empfohlen für Premium-Feel):
- transform: translateY(-2px)
- box-shadow: erhöhe auf elevation-level-2 (deutlichere Elevation)
- transition: all 200ms cubic-bezier(0.34, 1.56, 0.64, 1) (ease-out-elastic für bouncy Feel)

BEST PRACTICE: Kombiniere beide. Primary Button:
```
bg-primary-600 shadow-lg
hover:bg-primary-700 hover:shadow-xl hover:translate-y-[-2px]
transition: all 200ms ease-out
```

FOCUS (Tastatur-Navigation + a11y):
- Fokus-Ring von Phase 1: outline: 2px solid primary-color, outline-offset: 2px
- Oder in Tailwind: ring-2 ring-offset-2 ring-primary-600
- NICHT verstecken. MUST be visible.
- Ring-Offset = space zwischen Button und Ring (2px ist standard)

ACTIVE / PRESSED (Moment wenn Button gedrückt):
- Reverse the Hover: translateY(+1px) — "press down"
- Shadow: reduziere auf elevation-level-1 oder 0
- Hintergrund optional etwas dunkler (für extra Feedback)
- Dauer: 100ms (schneller als Hover)

DISABLED (Nicht verfügbar):
- opacity: 50% oder 60%
- cursor: not-allowed
- pointer-events: none
- ENTFERNE alle Hover/Focus-Effekte (keine Transitions in disabled state)
- Tailwind: disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none

LOADING (Button ist in Aktion):
- Spinner replaces Text OR erscheint left-of-text
- Button width: KONSTANT (wenn Text weg, spinner da) → keine Layout-Shift
- Optional: reduce opacity slight um "processing" zu zeigen
- Spin-Animation: @keyframes spin (Tailwind hat animate-spin)
- Duration: 1.5s oder 2s, kontinuierlich

TRANSITIONIER ALLES:
```css
button {
  transition: all 200ms ease-out;
}
button:disabled {
  transition: none; /* Disabled state ist instant */
}
```

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 3: BUTTON-ICON-INTEGRATION
───────────────────────────────────────────────────────────────────────────────────

Icons + Text oder Icon-Only. Keine unbegründeten Ikonen.

BUTTON MIT ICON + TEXT:

- Icon Left (Standard): icon gap-2 text
- Icon-Größe: proportional zu Button-Größe
  * SM: 16px
  * MD: 18px (Standard)
  * LG: 20px
  * XL: 24px
- Gap zwischen Icon und Text: gap-2 (8px, Phase 1 spacing)
- Alignment: flex items-center justify-center (zentriert Icon und Text)
- Font weight: Button ist font-medium, Icon erbt automatisch die Schwere

ICON ANIMATION on HOVER:

- Arrow nach rechts: hover:translate-x-1 (subtle move)
- Reload-Icon: hover:rotate-90 oder hover:animate-spin
- Chevron-Down: hover:translate-y-0.5
- Dauer: 200ms ease-out (gleich wie Button)
- Optional nur auf Icon anwenden: `.icon { transition: transform 200ms ease-out }`

ICON-ONLY BUTTONS:

- Beide Dimensionen = Button-Höhe (square)
  * SM: 32px × 32px
  * MD: 40px × 40px (Standard)
  * LG: 48px × 48px
- Icon-Größe = Button-Größe - 8px Padding
  * MD Icon-Button: Icon 24px (40px - 16px padding total)
- aria-label: MANDATORY ("Close", "Settings", "Delete")
- Tailwind: w-10 h-10 p-2 (beispiel für MD)

═════════════════════════════════════════════════════════════════════════════════
BLOCK B — CARD-DESIGN
═════════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 4: CARD-ANATOMIE — DAS UNIVERSAL CONTAINER
───────────────────────────────────────────────────────────────────────────────────

Cards sind die vielseitigsten Elemente. Sie müssen Content-First sein, nicht Design-Heavy.

STRUKTUR:

Top-Section (Optional):
- Image oder Media: overflow-hidden, aspect-ratio (z.B. aspect-video), object-cover
- Image border-radius-top: phase-1-radius (z.B. 6px)

Middle-Section (Content):
- Padding: großzügig. p-6 oder p-8 (24–32px alle Seiten)
- Heading: von Phase 1 Type-Skala (z.B. text-lg font-semibold)
- Description: text-base font-regular, line-height: 1.5, color: gray-600
- Spacing between elements: gap-4 oder gap-3 (16px oder 12px)

Bottom-Section (Optional):
- CTA Button, Metadata, Footer
- Padding: same as middle oder inherited
- Borderline zwischen Content und Footer: optional subtle border-top

CARD-CONTAINER SELBST:

- Background: surface color (von Phase 1, z.B. white oder gray-50)
- Border: 1px solid phase-1-border-color (z.B. gray-200 oder subtle tinted)
- Border-radius: phase-1-radius (meist md oder lg, z.B. 8px oder 12px)
- Shadow: Phase 1 elevation-level-1 (subtle, z.B. 0 1px 3px rgba(0,0,0,0.1))
- Tailwind: bg-white border border-gray-200 rounded-lg shadow-sm

CARD-IMAGE SPEZIAL:

- <img> mit overflow-hidden parent
- object-cover: krop das Bild proportional
- Aspect-ratio: aspect-video (16:9) oder aspect-square, je nach Content-Typ
- Lazy loading: loading="lazy" oder nutze Next.js Image Component
- Kein Border-Radius um Image-Selbst, nur um Card-Parent

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 5: CARD-HOVER-ERLEBNIS — ALIVE & RESPONSIVE
───────────────────────────────────────────────────────────────────────────────────

Cards MÜSSEN sich LEBENDIG anfühlen.

SHADOW ELEVATION:
- Resting: elevation-level-1 (z.B. shadow-sm)
- Hover: elevation-level-2 oder elevation-level-3 (z.B. shadow-lg)
- Transition: alle Effekte zusammen, 300ms

LIFT EFFECT:
- Resting: translateY(0)
- Hover: translateY(-4px) (Card hebt sich 4px an)
- Transition: cubic-bezier(0.25, 0.46, 0.45, 0.94) (smooth easing)

BORDER INTENSIFY (Optional):
- Resting: border-gray-200
- Hover: border-gray-300 oder border-primary-200 (subtil intensiver)

IMAGE ZOOM (Wenn Card ein Image hat):
- Image im Parent mit overflow-hidden
- Resting: scale(1)
- Hover: scale(1.05) (5% zoom)
- Transition: 300ms ease-out (gleich wie Card)

VOLLSTÄNDIGES EXAMPLE (Primary Clickable Card):
```
card {
  bg-white border border-gray-200 rounded-lg shadow-sm
  transition: all 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)
  cursor: pointer
}
card:hover {
  shadow-lg
  translate-y-[-4px]
  border-gray-300
}
card-image {
  overflow-hidden
  transition: transform 300ms ease-out
}
card:hover card-image {
  transform: scale(1.05)
}
```

═════════════════════════════════════════════════════════════════════════════════
BLOCK C — INPUT-FELDER, BADGES & AVATARE
═════════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 6: INPUT-FELD-DESIGN — VERTRAUEN & KLARHEIT
───────────────────────────────────────────────────────────────────────────────────

Input-Felder müssen PREMIUM und VERTRAUENSWÜRDIG wirken.

HEIGHT & DIMENSIONS:

- MD (Standard): height: 40px (gleich wie MD Button! Kohärenz!)
- LG: height: 48px
- Padding: px-4 (horizontal), py-2 (vertical)
- Kommt auf Line-Height an. Mit lh-tight kann 32px auch passen.

STYLING:

- Border: 1px solid phase-1-border-color (z.B. gray-300)
- Border-radius: GLEICH wie Buttons (phase-1-radius, z.B. 6px) — KONSISTENZ!
- Background: leicht anders als Seite (z.B. white auf gray-50 page, oder gray-50 auf white page)
- Tailwind: bg-white border border-gray-300 rounded-md
- Font: text-base font-regular (gleich wie Body)
- Text-color: gray-900 (primary text)

STATES:

DEFAULT:
- Border: subtle (gray-300)
- Shadow: none oder minimal
- Cursor: text

FOCUS:
- Border-color: primary-600 (Phase 1 primär)
- Shadow: ring (Focus-Ring, 2px)
  * Tailwind: ring-2 ring-offset-2 ring-primary-600
- Transition: all 150ms ease-out (schneller als Button, weil Input)
- Placeholder-text: still visible or fade slightly

ERROR:
- Border-color: red-600 oder error-600
- Shadow: ring-2 ring-offset-2 ring-red-600
- Text-color: optional tinted red
- Icon right: small error-icon (z.B. ⚠️)
- Error-message: below input, font-xs, color: red-600, margin-top: gap-1

SUCCESS:
- Border-color: green-600 oder success-600
- Shadow: ring-2 ring-offset-2 ring-green-600
- Icon right: checkmark
- Success-message: optional, below input

DISABLED:
- opacity: 50%
- background: gray-100 oder slightly grayed
- cursor: not-allowed
- border-color: gray-300 (neutral)
- Keine Hover/Focus-Effekte

DISABLED + ERROR: Error-Zustand ignoriert, zeige nur disabled

PLACEHOLDER:

- color: gray-400 oder gray-500
- font-style: optional italic
- Verschwindet auf Focus (echt oder via opacity)

TEXTAREA:

- Gleiche Styling wie Input
- min-height: 120px (Mindestens 3 Zeilen)
- resize: vertical (nutzer kann vergrößern, aber nicht schmäler)
- Tailwind: resize resize-y (nicht resize-none)
- Font: monospace optional wenn für Code, sonst regular body font

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 7: BADGE- & TAG-DESIGN
───────────────────────────────────────────────────────────────────────────────────

Badges sind kleine Status-Indikatoren. Müssen lesbar sein.

STRUKTUR:

- Shape: pill-shaped (rounded-full)
- Text: xs (12px) oder sm (14px)
- Padding: px-2 py-0.5 (minimalist) oder px-3 py-1 (etwas großzügiger)
- Font-weight: font-medium (sticht hervor)
- Optional: text-transform uppercase für Status (z.B. "ACTIVE", "PENDING")

VARIANTEN (nutze Phase 1 Farben):

DEFAULT (Neutral):
- bg-gray-200 text-gray-900

PRIMARY:
- bg-primary-100 text-primary-900 (heller Hintergrund, dunkler Text für Kontrast)

SUCCESS:
- bg-green-100 text-green-900

WARNING:
- bg-yellow-100 text-yellow-900

ERROR:
- bg-red-100 text-red-900

ICON IM BADGE (Optional):

- Icon: 12px × 12px
- Links vom Text oder statt Text wenn Icon-only
- gap-1 zwischen Icon und Text

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 8: AVATAR-DESIGN — KREISE DER IDENTITÄT
───────────────────────────────────────────────────────────────────────────────────

Avatare sind zirkulär und konsistent. Nutze sie für User-Identität.

GRÖSSEN (alle border-radius: 50%):

SM: 32px × 32px
MD: 40px × 40px (Standard)
LG: 56px × 56px
XL: 80px × 80px

STYLING:

- Shape: rounded-full (border-radius: 50%)
- Border: optional ring-2 ring-white (wenn überlagert mit anderen Avataren)
- Object-fit: cover (Image füllt Kreis, cropped proportional)
- Lazy loading: loading="lazy" oder Next.js Image

FALLBACK (Wenn kein Image):

- Initials auf gefärbtem Hintergrund
- Initials: 2 Buchstaben (z.B. "JD" für John Doe)
- Background-Farbe: hash vom Namen → konsistent für gleiche Person
  * Beispiel: name "Alice" → hash → farbe #E74C3C
- Text: white, font-semibold, zentriert
- Fallback-Farben: von Phase 1 Farb-Palette (Primär, Secondary, Success, Warning, Error, Info rotierend)

═════════════════════════════════════════════════════════════════════════════════
BLOCK D — QUERSCHNITTS-KONSISTENZ & VALIDIERUNG
═════════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 9: DESIGN-TOKEN-KONSISTENZ-AUDIT
───────────────────────────────────────────────────────────────────────────────────

Nach ALLEN Tasks in Phase 4: Audit-Durchlauf.

AUDIT-CHECKLISTE (22 Items):

FARBEN:
☐ Alle Komponenten-Hintergründe aus Phase 1 Farb-Tokens (keine rogue Hex-Werte)
☐ Alle Text-Farben konsistent (Primary: gray-900, Secondary: gray-600, etc.)
☐ Status-Farben konsistent (Success: green-600, Error: red-600, Warning: yellow-500)
☐ Hover-States verwenden brighter/darker Shade aus gleicher Farb-Familie

BORDER & RADIUS:
☐ Alle border-radius-Werte aus Phase 1 Radius-Scale (z.B. 4px, 6px, 8px, 12px, 16px)
☐ Button, Input, Card haben GLEICHE radius (kohärent)
☐ Border-Breiten sind konsistent (1px default, 2px für focus-ring)
☐ Border-Farben aus Phase 1 Border-Palette (gray-200, gray-300, primary-200)

SCHATTEN & ELEVATION:
☐ Alle Schatten aus Phase 1 Elevation-System (Level 0, 1, 2, 3)
☐ Resting-Cards haben Level 1
☐ Hover-Cards haben Level 2 oder 3
☐ Keine random shadow-values

TYPOGRAFIE:
☐ Button-Text: font-medium
☐ Input-Placeholder: font-regular, gray-400
☐ Card-Heading: font-semibold
☐ Card-Description: font-regular, gray-600
☐ Badge-Text: font-medium, xs oder sm
☐ Keine font-weights außer: regular (400), medium (500), semibold (600), bold (700)

SPACING & PADDING:
☐ Button-Padding proportional zu Größe
☐ Card-Padding großzügig (p-6 oder p-8)
☐ Input-Padding symmetrisch
☐ Gap zwischen Icon und Text: gap-2
☐ Gap zwischen Card-Elementen: gap-3 oder gap-4

TRANSITIONS:
☐ Button-Hover: 200ms ease-out
☐ Card-Hover: 300ms cubic-bezier(...)
☐ Input-Focus: 150ms ease-out
☐ Disabled-States: keine Transitions
☐ Alle Transitions definiert in CSS oder Tailwind @apply

STATES:
☐ Hover-State SICHTBAR auf allen interaktiven Elementen
☐ Focus-Ring SICHTBAR (outline oder ring)
☐ Active-State unterschiedlich von Hover
☐ Disabled-State zeigt visuelle Hinweise (opacity, cursor: not-allowed)

ZUGÄNGLICHKEIT:
☐ Alle Buttons haben aria-label wenn Icon-only
☐ Focus-Ringe sind offset (nicht inline)
☐ Farbe allein ist nicht der einzige Indicator (Icon + Farbe für Status)
☐ Kontrast-Verhältnis getestet (WCAG AA minimum)

VALIDIERUNGSFREIGABE:

Nach Audit: npm run build && npm run lint && npx tsc --noEmit → alles grün?
Visuelles Testing: Browser aufmachen, alle States prüfen, auf Mobile testen
Wenn Audit-Item fehlschlägt → sofort fixen, nicht weitermachen

───────────────────────────────────────────────────────────────────────────────────
SELF-OPTIMIZING DESIGN LOOP — PHASE 4 ABSCHLUSS
───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 10: KONTEXT AKTUALISIEREN & HANDOFF ZU PHASE 5

Nach allen Tasks: .ai-design-context.md und .design-upgrade-state.md aktualisieren.

IN .ai-design-context.md NEUE SECTIONS HINZUFÜGEN:

7. KOMPONENTEN-SPEZIFIKATIONEN (Phase 4)

   7.1 BUTTON-SYSTEM
   - Primary, Secondary, Ghost, Destructive Variants
   - Sizes: SM (32px), MD (40px), LG (48px), XL (56px)
   - States: Default, Hover (translateY(-2px), shadow↑), Focus (ring-2 ring-primary-600), Active (translateY(+1px)), Disabled (opacity-50), Loading (spinner)
   - Icons: 16px (SM), 18px (MD), 20px (LG), 24px (XL)
   - Transitions: all 200ms ease-out
   - Min-Width: 120px (oder square für Icon-only)

   7.2 CARD-SYSTEM
   - Structure: optional [Image] → [Content Padding] → optional [Footer]
   - Styling: bg-white border-gray-200 rounded-md shadow-sm
   - Hover: shadow-lg translateY(-4px) border-gray-300
   - Image: aspect-ratio maintained, object-cover, scale(1.05) on hover
   - Transition: 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94)

   7.3 INPUT-FIELD-SYSTEM
   - Height: 40px (MD, standard)
   - Styling: bg-white border border-gray-300 rounded-md text-base
   - Focus: ring-2 ring-offset-2 ring-primary-600
   - Error: border-red-600 ring-red-600
   - Disabled: opacity-50 cursor-not-allowed
   - Placeholder: gray-400 font-regular
   - Textarea: min-height 120px, resize: vertical

   7.4 BADGE-SYSTEM
   - Shape: rounded-full (pill)
   - Text: xs or sm, font-medium
   - Padding: px-2 py-0.5
   - Variants: default (gray-200), primary, success (green), warning (yellow), error (red)

   7.5 AVATAR-SYSTEM
   - Sizes: 32px (SM), 40px (MD), 56px (LG), 80px (XL)
   - Border: rounded-full, optional ring-2 ring-white
   - Fallback: initials on hashed color
   - Image: object-cover, lazy loading

IN .design-upgrade-state.md:

Update Status:
- Phase 4 Complete: 100%
- Components Finalized: Button ✓, Card ✓, Input ✓, Badge ✓, Avatar ✓
- Audit Passed: 22/22 items ✓
- Next: Phase 5 — Kinetic Orchestration (Transitions, Animations, Scroll-Behavior)

═════════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNGSCHECKLISTE — DESIGN-PHASE 4
═════════════════════════════════════════════════════════════════════════════════

Nutze diese Checkliste zur Validierung. Jedes Item sollte erfüllt sein.

BUTTON DESIGN:
☐ Primary Button existiert, ist brand-color, weiß text, 40px height
☐ Secondary Button existiert, outlined, grauer border
☐ Ghost Button existiert, transparent, primary-text
☐ Destructive Button existiert, rot, für Warn-Aktionen
☐ Alle Button-Sizes definiert (SM 32, MD 40, LG 48, XL 56)
☐ Hover-State sichtbar (Darken oder Lift)
☐ Focus-Ring präsent (offset 2px)
☐ Active/Pressed-State anders als Hover
☐ Disabled-State grayed out, cursor: not-allowed
☐ Icons proportional zu Button-Größe
☐ Icon + Text hat gap-2
☐ Alle Transitions: 200ms ease-out

CARD DESIGN:
☐ Card-Container hat weiß background, subtle border, shadow-sm
☐ Hover-State: shadow hebt sich (shadow-lg), translateY(-4px)
☐ Image: aspect-ratio konsistent, object-cover, scale(1.05) on hover
☐ Padding großzügig (p-6 oder p-8)
☐ Transition smooth (300ms cubic-bezier)
☐ Card ist pointer (cursor: pointer wenn clickable)

INPUT DESIGN:
☐ Input-Höhe 40px (Standard) oder 48px (Large)
☐ Border: 1px gray-300, radius konsistent mit Button
☐ Focus-State: primary-border + ring
☐ Error-State: red border + ring + error icon
☐ Disabled-State: grayed, cursor: not-allowed
☐ Placeholder: gray-400
☐ Textarea: min-height 120px, resize: vertical
☐ Label über Input, font-medium

BADGE DESIGN:
☐ Badge: rounded-full, xs text, font-medium
☐ Variants: default, primary, success, warning, error alle haben färbe
☐ Padding: px-2 py-0.5

AVATAR DESIGN:
☐ Avatar: rounded-full, sizes 32/40/56/80px
☐ Image: object-cover, lazy loading
☐ Fallback: initials on colored background

KONSISTENZ:
☐ Alle Farben aus Phase 1 Token-System
☐ Alle border-radius aus Phase 1 Radius-Scale
☐ Alle Schatten aus Phase 1 Elevation-System
☐ Button und Input haben gleiche border-radius
☐ Card und Button haben gleiche border-radius
☐ Alle Transitions: 200ms (Button), 300ms (Card), 150ms (Input)
☐ Keine rogue CSS-Werte (alles aus Token-System)

VALIDIERUNG:
☐ npm run build erfolgreich
☐ npm run lint erfolgreich
☐ npx tsc --noEmit erfolgreich
☐ Visueller Test: alle States in Browser sichtbar
☐ Mobile Test: Finger-Targets groß genug (40px min)
☐ Kontrast-Test: Farben für WCAG AA bestanden
☐ .ai-design-context.md aktualisiert mit Phase 4 Specs
☐ .design-upgrade-state.md aktualisiert mit "Phase 4 ✓"

Ende DESIGN-PHASE 4. Bereit für PHASE 5: Kinetic Orchestration (Animation, Scroll, Dynamik).
