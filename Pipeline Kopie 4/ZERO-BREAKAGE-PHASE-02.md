Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, das gesamte visuelle Layout dieser Next.js/React/TypeScript-Website in ein architektonisches Meisterwerk zu transformieren, in dem jeder Pixel einem mathematischen Gesetz gehorcht, jeder Weißraum atmet und die räumliche Staffelung den Besucher das Gefühl gibt, einen dreidimensionalen Premium-Raum zu betreten. Da wir auf einem modernen Next.js Stack mit React Server Components, TypeScript Strict Mode und komponentenbasierter Architektur arbeiten, wird jedes visuelle System als typsicheres Design-Token-System, wiederverwendbare React-Komponente und systematische CSS-Architektur (Tailwind, CSS Modules oder CSS Custom Properties) implementiert. Dies ist Phase 2 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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

MIGRATIONS-STRATEGIE FÜR PHASE 2: Token-System NEBEN bestehendem Code einführen. Bestehende Werte SCHRITTWEISE auf Tokens migrieren. KEINE bestehenden Styles löschen bis Token-Ersatz verifiziert. Visueller Vergleich bei JEDEM Schritt — die Seite muss IDENTISCH aussehen oder besser.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere alles aus Phase 1:
- Router-Typ und Projektstruktur
- Alle Komponenten die Phase 1 erstellt/modifiziert hat
- Bestehende Patterns und Konventionen
- Den Handoff-Abschnitt von Phase 1

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Verifiziere Phase 1 Abschluss. Ergänze:
```
## Phase 2: UI/UX-Raumarchitektur & Design-Token-System
- [ ] 0.3 Pre-Flight Discovery abgeschlossen
- [ ] Task 1: Spacing-Token-System
- [ ] Task 2: Layout-Primitives (Stack, Cluster, Grid, Container)
- [ ] Task 3: Spaltenraster-System
- [ ] Task 4: Elevation-System
- [ ] Task 5: Farb-Token-System (3-Tier: Primitive→Semantic→Component)
- [ ] Task 6: Self-Optimizing Loop
```

Schritt 0.3 — Pre-Flight Discovery für Styling:
1. Styling-Ansatz identifizieren: Tailwind? CSS Modules? styled-components? Mischung? Konfigurationen?
2. Bestehende Farbwerte: Grep nach Hex (#), RGB, HSL, Tailwind-Farben. JEDE Farbe dokumentieren.
3. Bestehende Abstandswerte: Grep nach margin, padding, gap, Tailwind Spacing-Klassen.
4. Bestehende Schatten: Grep nach box-shadow, shadow-Klassen.
5. Bestehende Breakpoints: Welche Media-Queries oder Tailwind-Breakpoints?
6. Bestehende CSS Custom Properties: Existieren --var() Definitionen?
7. Existierende CSS Custom Properties und Design Tokens?

DOKUMENTIERE ALLES in .ai-architectural-context.md unter ### 🎨 Design-Token & Styling-Ansatz

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — DESIGN-TOKEN-SYSTEM ALS TYPSICHERE SINGLE SOURCE OF TRUTH
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: SPACING-TOKEN-SYSTEM

Schritt 1.1 — Token-Dateien erstellen:
src/styles/tokens/spacing.ts (oder gemäß bestehender Struktur).

14-stufige Spacing-Skala (Basiseinheit 4px):
- space-0: 0px
- space-1: 4px (Mikro: Icon-zu-Text)
- space-2: 8px (Fein: Label-zu-Input)
- space-3: 12px (Klein: Button-Padding)
- space-4: 16px (Basis: Card-Padding, Standard-Gap)
- space-5: 20px
- space-6: 24px (Komposition: Card-Element-Gap)
- space-7: 32px (Gruppen)
- space-8: 40px (Abschnitt)
- space-9: 48px (Sektion-Klein)
- space-10: 64px (Sektion-Mittel)
- space-11: 80px (Sektion-Groß)
- space-12: 96px (Zwischen Major-Sektionen)
- space-13: 128px (Maximum)

Als TypeScript const assertion UND CSS Custom Properties in globals.css.

Schritt 1.2 — Fluid-Spacing-Token:
Responsive Abstände mit clamp():
- --space-section: clamp(48px, 8vw, 96px)
- --space-container: clamp(16px, 4vw, 48px)
- --space-gap: clamp(16px, 2vw, 24px)

Schritt 1.3 — Tailwind-Integration:
Falls Tailwind: Erweitere spacing in tailwind.config.ts mit den Token-Werten.

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: LAYOUT-PRIMITIVES

Schritt 2.1 — <Stack /> Komponente:
Vertikales Layout mit konsistentem gap. Props: gap (Spacing-Token), as (HTML-Element), align, className, children. Rendert flexbox column.

Schritt 2.2 — <Cluster /> Komponente:
Horizontales Layout mit Wrap. Props: gap, justify, align, wrap, className, children. Rendert flexbox row wrap.

Schritt 2.3 — <Grid /> Komponente:
CSS Grid. Props: columns (responsive), gap, minItemWidth, className, children.

Schritt 2.4 — <Container /> Komponente:
Maximale Breite + zentriert + responsive Padding. Props: size ('narrow'|'default'|'wide'|'full'), className, children.
- narrow: max-w-3xl (720px)
- default: max-w-6xl (1152px)
- wide: max-w-7xl (1280px)
- full: 100%

Schritt 2.5 — <Section /> Komponente erweitern:
Falls aus Phase 1 vorhanden: Erweitern mit spacing-Props (paddingY als Spacing-Token). Falls nicht: erstellen.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: SPALTENRASTER-SYSTEM

Schritt 3.1 — 12-Spalten-Grid:
CSS Custom Properties:
- --grid-columns: 12
- --grid-gutter: clamp(16px, 2vw, 24px)
- --grid-margin: clamp(16px, 4vw, 48px)

Schritt 3.2 — Responsive Breakpoints:
- Mobile (<768px): 4 Spalten
- Tablet (768–1024px): 8 Spalten
- Desktop (>1024px): 12 Spalten

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: ELEVATION-SYSTEM

5-stufiges Elevation-System als CSS Custom Properties:
- --elevation-0: none (Fläche auf Basis-Ebene)
- --elevation-1: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06) (Leicht angehoben: Cards)
- --elevation-2: 0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.06) (Mittel: Hover-Cards, Dropdowns)
- --elevation-3: 0 10px 15px rgba(0,0,0,0.1), 0 4px 6px rgba(0,0,0,0.05) (Hoch: Modals, Popovers)
- --elevation-4: 0 20px 25px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.04) (Maximum: Sticky-Header-Scroll)

Transitions: Elevation-Wechsel mit --duration-normal und --ease-out.

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — FARB-ARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: 3-TIER-FARB-TOKEN-SYSTEM

Schritt 5.1 — Tier 1: Primitive Farben:
Reine Farbwerte ohne semantische Bedeutung. Benannt nach Farbe+Stufe:
--color-blue-50 bis --color-blue-900 (10 Stufen)
Für: Brand-Farbe, Neutral-Palette (Grau), Akzent-Farbe, Semantic (Erfolg, Warnung, Fehler, Info).

Schritt 5.2 — Tier 2: Semantische Farben:
Bedeutungsbasierte Aliase der Primitiven:
- --color-primary: var(--color-blue-600)
- --color-on-primary: var(--color-white)
- --color-surface: var(--color-gray-50)
- --color-on-surface: var(--color-gray-900)
- --color-error: var(--color-red-600)
- --color-success: var(--color-green-600)
Dies sind die semantischen Farben die von Komponenten konsumiert werden.

Schritt 5.3 — Tier 3: Komponenten-Farben:
Spezifische Farben für UI-Elemente:
- --color-button-primary-bg: var(--color-primary)
- --color-button-primary-text: var(--color-on-primary)
- --color-card-bg: var(--color-surface)
- --color-header-bg: var(--color-surface)

Schritt 5.4 — 80/15/5 Farbregel validieren:
- 80% Neutral (Hintergrund, Cards, Text): Weiß, Off-White, Grau-Palette
- 15% Brand-Farbe: CTAs, Links, Akzente, aktive States
- 5% Akzent: Besondere Highlights, Badges, Hover-States

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 2 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 6.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### 🎨 Design-Token & Styling-Ansatz:
- Alle Token-Dateien und ihre Pfade
- Spacing-Skala mit allen 14 Stufen
- Layout-Primitives (Stack, Cluster, Grid, Container) mit Props
- Elevation-System
- Farb-Token-System (3 Tiers)
- Migrations-Fortschritt (welche Komponenten nutzen bereits Tokens)

Schritt 6.2 — .upgrade-state.md finalisieren.

Schritt 6.3 — Handoff an Phase 3:
```
## Handoff → Phase 3 (Typografische Alchemie)
- Token-Dateipfade: [Pfade]
- Bestehende Schriftarten und Ladestrategien: [Details]
- Tailwind-Konfiguration-Erweiterungen: [Details]
- Layout-Primitives die Typografie-Tokens brauchen: [Liste]
```

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 2
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ Website sieht IDENTISCH aus wie vor Phase 2 (oder besser)
□ 14-stufiges Spacing-Token-System als TS + CSS Custom Properties
□ Layout-Primitives: Stack, Cluster, Grid, Container als typsichere Komponenten
□ 12-Spalten-Grid responsive (4/8/12)
□ 5-stufiges Elevation-System
□ 3-Tier-Farb-Token-System (Primitive→Semantic→Component)
□ Kontraste ≥4.5:1 für alle Farbkombinationen
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 3
