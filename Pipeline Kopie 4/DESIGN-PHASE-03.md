Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben,

DESIGN-PHASE 3 VON 10: SPATIAL ARCHITECTURE & GRID MATHEMATICS
═══════════════════════════════════════════════════════════════

Tech Stack: Next.js 15+ | React 19 | TypeScript Strict | Tailwind 4 | cn()/tailwind-merge
Integration Points: Formspree (forms) + Calendly (scheduling) ONLY. NO Dark Mode. Code is SSOT.

DESIGN-CONTEXT SYNC & DISCOVERY
═══════════════════════════════════════════════════════════════

STEP 0: VORFLUG-CHECKLISTE
─────────────────────────────────────────────────────────────────
○ Read .ai-design-context.md (Brand DNA from Phase 1 + Type Scale from Phase 2)
○ Read .design-upgrade-state.md (current state, completed tasks)
○ Execute 6-Point Spatial Discovery:
  1. Spacing audit: document ALL padding/margin/gap values across existing components
  2. Container analysis: find max-width patterns in content areas and sections
  3. Grid inventory: CSS Grid vs Flexbox usage, column counts, current breakpoints
  4. Vertical rhythm: measure spacing between all major page sections
  5. Whitespace health: identify areas that feel cramped or too loose
  6. Responsive behavior: trace layout changes at 375px/640px/768px/1024px/1280px/1440px

BLOCK A: WEISSRAUM ALS DESIGN-ELEMENT
═══════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: WEISSRAUM-PHILOSOPHIE DEFINIEREN
───────────────────────────────────────────────────────────────────
Whitespace ist nicht leerer Raum — es ist aktives Design-Element. Definiere die Brand-Persönlichkeit:

TYPE-A (Generous/Luxurious):
- Sektions-Padding: py-20 bis py-32 (desktop) | py-12 bis py-16 (mobile)
- Card-Spacing: gap-8 bis gap-12
- Horizontal: px-8 bis px-12 (desktop) | px-4 (mobile)
- Implikation: Premium, breathing room, confidence, high-end

TYPE-B (Balanced/Professional):
- Sektions-Padding: py-16 bis py-24 (desktop) | py-10 bis py-14 (mobile)
- Card-Spacing: gap-6 bis gap-8
- Horizontal: px-6 bis px-8 (desktop) | px-4 (mobile)
- Implikation: Trust, efficiency, accessible luxury, business-ready

TYPE-C (Dense/Technical):
- Sektions-Padding: py-12 bis py-16 (desktop) | py-8 bis py-10 (mobile)
- Card-Spacing: gap-4 bis gap-6
- Horizontal: px-4 bis px-6 (desktop) | px-3 (mobile)
- Implikation: Data-driven, information-rich, developer-focused

ENTSCHEIDUNG: Wähle einen Type basierend auf Brand DNA (Phase 1). Dokumentiere:
"Unser Weißraum-Architektur folgt TYPE-[X]. Das bedeutet: [3-4 konkrete Auswirkungen]"

Anwende Gestalt-Gesetz der Nähe (Law of Proximity):
- Verwandte Elemente: gap-2 bis gap-4 (tight clustering)
- Modulgruppen: gap-6 bis gap-8 (visual grouping)
- Sektions-Grenzen: gap-16 bis gap-32 (clear separation)

ULTRATHINK-TASK 2: SEKTIONS-RHYTHMUS (MAKRO-SPACING)
───────────────────────────────────────────────────────────────────
Vertikaler Rhythmus = Konsistente Abstände zwischen großen Sektionen. Das schafft Harmonie.

SPACING-SKALA (basierend auf 8px-System):
4px (spacing-0.5) | 8px (spacing-1) | 16px (spacing-2) | 24px (spacing-3) | 32px (spacing-4)
48px (spacing-6) | 64px (spacing-8) | 96px (spacing-12) | 128px (spacing-16) | 160px (spacing-20)
192px (spacing-24) | 256px (spacing-32)

SEKTIONS-PADDING-FORMEL (Fluid Responsive):
- Kleine Sektionen: padding-block: clamp(3rem, 2rem + 4vw, 6rem)
- Standard-Sektionen: padding-block: clamp(4rem, 3rem + 5vw, 8rem)
- Große Sektionen: padding-block: clamp(6rem, 4rem + 6vw, 12rem)

BEISPIEL-IMPLEMENTIERUNG (Tailwind + clamp):
```css
/* Hero */
.section-hero {
  padding-block: clamp(4rem, 3rem + 6vw, 10rem);
}
/* Features */
.section-features {
  padding-block: clamp(3rem, 2.5rem + 4vw, 7rem);
}
/* CTA */
.section-cta {
  padding-block: clamp(2rem, 1.5rem + 3vw, 5rem);
}
```

HINTERGRUND-RHYTHMUS:
- Sektionen abwechseln: Hintergrundfarbe A ↔ Hintergrundfarbe B
- Nie zwei aufeinanderfolgende Sektionen mit demselben Hintergrund
- Verwende Subtile Varianten (z.B. white vs. gray-50) oder Texturen (subtle grid, noise)
- Übergangszone: 1-2px Linie oder 4px Farbübergang schaffen visuelle Markierung

ULTRATHINK-TASK 3: CONTAINER-ARCHITEKTUR
───────────────────────────────────────────────────────────────────
Definiere wiederverwendbare Container-Größen für konsistente Layouts:

CONTAINER-BREAKPOINTS:
- Narrow (max-w-2xl): 42rem / 672px — lange Texte, Dokumentation, Datenschutz
- Standard (max-w-5xl): 64rem / 1024px — Standard-Content-Sektionen
- Wide (max-w-6xl): 72rem / 1152px — Card-Grids, Feature-Sammlungen
- XL (max-w-7xl): 80rem / 1280px — Hero, Testimonials, breite Layouts
- Full-Breite: max-w-[1440px] — absolute Maximum für Ultra-Screens
- Edge-to-Edge: 100vw — Hintergründe, Farbbänder (content innen max-w-)

HORIZONTALE PADDING:
- Mobile (375px): px-4 (16px padding)
- Tablet (768px): px-6 (24px padding)
- Desktop (1024px+): px-8 (32px padding)
- Wide (1280px+): px-12 (48px padding)

CONTAINER-KOMPONENTE (TypeScript + Tailwind):
```tsx
export const Container = ({ 
  children, 
  variant = "standard", 
  className 
}: ContainerProps) => {
  const variants = {
    narrow: "max-w-2xl",
    standard: "max-w-5xl",
    wide: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-[1440px]"
  };
  
  return (
    <div className={cn(
      "mx-auto w-full px-4 sm:px-6 lg:px-8",
      variants[variant],
      className
    )}>
      {children}
    </div>
  );
};
```

ALLE Container müssen mx-auto (zentriert) sein. KEINE asymmetrischen Abstände.

BLOCK B: GRID-MATHEMATIK
═══════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: FLEXIBLES SPALTEN-SYSTEM
───────────────────────────────────────────────────────────────────
Responsives Grid-System mit mathematischer Konsistenz:

BREITE-BASIERT:
Mobile (375px):
- 1 Spalte (volle Breite)
- Klassen: grid grid-cols-1

Tablet (640px):
- 2 Spalten
- Klassen: sm:grid-cols-2

Tablet+ (768px):
- 2 Spalten (Text + Sidebar)
- 3 Spalten (Features)
- Klassen: md:grid-cols-3

Desktop (1024px):
- 3-4 Spalten je nach Content-Typ
- Klassen: lg:grid-cols-4

Wide (1280px):
- 4-6 Spalten für dichte Grids
- Klassen: xl:grid-cols-6

GAP-SYSTEM (konsistent):
- Mobile: gap-4 (16px)
- Tablet: gap-6 (24px)
- Desktop: gap-8 (32px)
- Große Grids: gap-12 (48px)

BEISPIEL (3-er Card-Grid):
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
  {cards.map(card => (
    <Card key={card.id} {...card} />
  ))}
</div>
```

GRID vs FLEXBOX:
- CSS Grid: 2D-Layouts, asymmetrische Grids, komplexe Anordnungen
- Flexbox: 1D-Layouts, Lists, Navigation, horizontale/vertikale Stacks
- DEFAULT: Grid für Card-Sammlungen, Flexbox für Komponenten-Inneres

ULTRATHINK-TASK 5: GESTALTGESETZE IM LAYOUT
───────────────────────────────────────────────────────────────────
Psychologische Sehen-Gesetze in der Praxis anwenden:

GESTALT-GESETZ 1: LAW OF PROXIMITY (Nähe)
- Verwandte Elemente sollten sich näher sein
- Nicht-verwandte sollten sich weiter weg sein
- Praktisch: Nutze spacing-scale für visuelle Hierarchie
- Audit: Sind alle Card-Gruppen mit derselben gap gemessen?

GESTALT-GESETZ 2: LAW OF SIMILARITY (Ähnlichkeit)
- Ähnlich aussehende Elemente werden als eine Gruppe wahrgenommen
- Praktisch: Alle Cards identisch stylen, alle Buttons identisch
- Audit: Gibt es inkonsistente Card-Größen oder Button-Stile?

GESTALT-GESETZ 3: LAW OF CONTINUITY (Kontinuität)
- Auge folgt einer visuellen Linie von oben-links nach unten-rechts
- Z-Muster: oben-rechts → mitte-links → unten-rechts
- F-Muster: vertikal links, horizontal oben, diagonal unten
- Praktisch: Platziere CTAs strategisch nach natürlichen Eye-Path
- Audit: Verfolge mit dem Finger die natürliche Eye-Bewegung

GESTALT-GESETZ 4: LAW OF CLOSURE (Geschlossenheit)
- Gehirn vervollständigt unvollständige Formen
- Praktisch: Cards brauchen keine dicken Ränder, wenn Spacing klar ist
- Nutze implizite Grenzen statt Striche
- Audit: Können Grenzen durch Spacing oder Hintergrund ersetzt werden?

GESTALT-GESETZ 5: LAW OF FIGURE-GROUND (Vordergrund-Hintergrund)
- Klare Unterscheidung zwischen Content und Hintergrund
- Praktisch: Nutze Kontrast (Farbe, Helligkeit, Textur)
- Audit: Ist der Inhalt deutlich von der Seite getrennt?

AUDIT-CHECKLIST (für jede Sektion):
☐ Proximity: verwandte Elemente näher? Unverwandte weiter?
☐ Similarity: alle gleichen Elemente identisch gestylt?
☐ Continuity: folgt die Eye-Bewegung einer natürlichen Linie?
☐ Closure: brauchen wir weniger Ränder/Linien?
☐ Figure-Ground: ist der Vordergrund deutlich vom Hintergrund getrennt?

BLOCK C: RESPONSIVE BREAKPOINT-STRATEGIE
═══════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: BREAKPOINT-VERFEINERUNG
───────────────────────────────────────────────────────────────────
Tailwind Standard-Breakpoints (verwende oder erweitere):
- sm: 640px (small tablets)
- md: 768px (tablets)
- lg: 1024px (laptops)
- xl: 1280px (desktops)
- 2xl: 1536px (ultra-wide)

EIGENE CUSTOM-BREAKPOINTS (tailwind.config.ts):
```ts
extend: {
  screens: {
    xs: "375px",    // iPhone SE minimum
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1440px" // optimal for premium designs
  }
}
```

SEKTIONS-SPEZIFISCHE BREAKPOINT-VERHALTEN:

NAVIGATION:
- Mobile (< 640px): Hamburger-Menü, Full-Screen Overlay
- Tablet (640px+): Hamburger noch aktiv
- Desktop (1024px+): Horizontale Navigation, Hamburger hidden

HERO-LAYOUT:
- Mobile: Stacked (Image oben, Text unten)
- Tablet: Stacked oder nebeneinander (je nach Content)
- Desktop: Nebeneinander, 50/50 Split oder 60/40

CARD-GRIDS:
- Mobile: 1 Spalte, volle Breite
- Tablet: 2 Spalten
- Desktop: 3 Spalten (oder 4 für große Grids)

FEATURE-SECTIONS:
- Mobile: Vertikal stacked
- Tablet: 2 Spalten alternativ
- Desktop: 3-4 Spalten im Zig-Zag

ULTRATHINK-TASK 7: MOBILE-FIRST SPACING-AUDIT
───────────────────────────────────────────────────────────────────
Starte mit 375px Viewport. Das ist Realität für viele Nutzer.

MOBILE-CHECKLIST:
☐ Padding-Symmetrie: py/px gleich auf allen Seiten?
☐ Touch-Ziele: Alle Buttons mindestens 48px × 48px?
☐ Horizontales Overflow: Kein Element geht über 375px hinaus?
☐ Text-Maß: 45-60 Zeichen pro Zeile (optimal lesbar)?
☐ Sektions-Abstände: Fühlt sich mobile Version first-class an?
☐ Typography: Fluide Scaling (clamp) statt abrupte Sprünge?
☐ Images: Responsive srcset? Nicht zu groß für mobile?
☐ Spacing: py-4/6/8 auf mobile, py-12/16 auf desktop?
☐ Hidden Elements: Gibt es große Desktop-Elemente, die mobile hidden sind?
☐ Form-Inputs: Font-Größe ≥ 16px (verhindert automatisches Zoom)?

RESPONSIVE PADDING-PATTERN:
```tsx
/* Klein */
<div className="px-4 py-6 md:px-6 md:py-10 lg:px-8 lg:py-16">
  content
</div>

/* Groß */
<section className="px-4 py-8 sm:px-6 sm:py-12 md:px-8 md:py-16 lg:px-12 lg:py-24">
  content
</section>
```

BLOCK D: LAYOUT-PATTERNS FÜR SEKTIONEN
═══════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: SEKTIONS-LAYOUT-BIBLIOTHEK
───────────────────────────────────────────────────────────────────
Definiere 8 wiederverwendbare Section-Muster für konsistente Struktur:

PATTERN 1: HERO
Zweck: Sofort-Einfluss, Brand-Präsenz, Large CTA
Layout: Full-width, centered oder split
Mobile: Stacked (image oben, text unten)
Desktop: 50/50 oder 60/40 split
Padding: py-20 md:py-32 lg:py-40
Klassen: grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12

PATTERN 2: FEATURES (3-ER GRID)
Zweck: Dienste/Produkte/Vorteile vorstellen
Layout: 3-spaltig auf desktop, 1-spaltig auf mobile
Padding: py-16 md:py-24 lg:py-32
Klassen: grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8

PATTERN 3: ALTERNATING (BILD-RECHTS/LINKS)
Zweck: Detailed Feature Erklärung mit visuellen Beispielen
Layout: Zig-Zag: Bild rechts, Text links; dann umgekehrt
Mobile: Vertikal stacked
Desktop: grid grid-cols-2 gap-8 lg:gap-12
Padding: py-16 md:py-20 lg:py-28

PATTERN 4: TESTIMONIALS
Zweck: Social Proof, Kunde-Geschichten
Layout: Carousel (mobile), 3-Grid (desktop), oder Masonry
Card-Style: Quote + Avatar + Name + Rolle
Gap: gap-6 lg:gap-8
Padding: py-12 md:py-18 lg:py-24

PATTERN 5: STATS/NUMBERS
Zweck: Messbare Erfolge, Metriken
Layout: 2-4 horizontale Zähler
Format: [ZAHL] [LABEL]
Padding: py-12 lg:py-20
Klassen: grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8

PATTERN 6: CTA BAND
Zweck: Call-to-Action, Momentum
Layout: Full-width, zentriert, mit Hintergrund-Farbe
Text + Button vertikal oder horizontal aligned
Padding: py-12 md:py-16 lg:py-20
Klassen: flex flex-col items-center justify-center gap-6

PATTERN 7: FAQ (ACCORDION)
Zweck: Häufige Fragen beantworten
Layout: Vertikal stacked, expandierbar
Padding: py-12 lg:py-20
Max-width: max-w-2xl (näher an narrow)

PATTERN 8: CONTACT (FORM + INFO)
Zweck: Lead Capture oder Kommunikation
Layout: Form (links), Info-Block (rechts) auf desktop
Mobile: Vertikal stacked
Padding: py-16 lg:py-24
Klassen: grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16

SELF-OPTIMIZING DESIGN LOOP — PHASE 3 ABSCHLUSS
═══════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: .AI-DESIGN-CONTEXT.MD AKTUALISIEREN
───────────────────────────────────────────────────────────────────
Schreibe alle räumlichen Entscheidungen in .ai-design-context.md:

SECTION: SPACING & WHITESPACE
─ Whitespace-Typ: [A/B/C]
─ Sektions-Padding: [clamp-formeln]
─ Container-Sizes: [dokumentiere alle 5]
─ Gap-System: [mobile/tablet/desktop]
─ Rhythmus-Muster: [alternating backgrounds ja/nein]

SECTION: GRID-SYSTEM
─ Grid-Breakpoints: [xs/sm/md/lg/xl]
─ Column-Counts: [1/2/3/4/6 bei welcher Breite?]
─ Gap-Werte: [4/6/8/12 nach Breakpoint]
─ Standard-Muster: [welche sektions-patterns verwenden grid?]

SECTION: RESPONSIVE-STRATEGIE
─ Mobile-First: [ja]
─ Breakpoints: [custom oder standard?]
─ Navigation-Verhalten: [hamburger bis xl?]
─ Layout-Shifts: [wo stacken Cards? Wo werden Bilder hidden?]

SECTION: GESTALT-AUDIT
─ Proximity: [Status: pass/fail + notes]
─ Similarity: [Status: pass/fail + notes]
─ Continuity: [Status: pass/fail + notes]
─ Closure: [Status: pass/fail + notes]
─ Figure-Ground: [Status: pass/fail + notes]

SECTION: SEKTIONS-PATTERNS
─ Pattern-Library: [alle 8 patterns dokumentiert mit klassen]

FINALE VALIDIERUNG DESIGN-PHASE 3
═══════════════════════════════════════════════════════════════

HANDOFF-CHECKLIST (18 Items):

WHITESPACE & SPACING:
☐ Weißraum-Philosophie definiert (Type A/B/C)?
☐ Sektions-Padding mit clamp() implementiert?
☐ Horizontales Padding bei allen Breakpoints dokumentiert?
☐ Spacing-Skala konsistent auf allen Komponenten?

CONTAINER & LAYOUT:
☐ Container-Komponente mit allen Variants erstellt?
☐ Alle Sektionen nutzen Container-Komponente?
☐ Max-widths konsistent (narrow/standard/wide/xl/full)?
☐ Alle Container zentriert mit mx-auto?

GRID-SYSTEM:
☐ Grid-System für 5 Breakpoints definiert?
☐ Gap-Werte konsistent (4/6/8/12)?
☐ Grid vs Flexbox-Einsatz dokumentiert?
☐ Responsive Grid-Klassen auf alle Cards angewendet?

RESPONSIVE-VERHALTEN:
☐ Mobile-Audit durchgeführt (375px)?
☐ Touch-Ziele überall ≥ 48px?
☐ Kein horizontales Overflow?
☐ Breakpoint-Verhalten für Navigation/Hero/Cards/Features dokumentiert?

GESTALT-GESETZE:
☐ Proximity-Audit durchgeführt?
☐ Similarity-Audit durchgeführt?
☐ Continuity (Eye-Path) überprüft?
☐ Closure (Ränder) optimiert?

SEKTIONS-PATTERNS:
☐ 8 Pattern-Templates erstellt + dokumentiert?
☐ Alle Sektionen einem Pattern zugewiesen?
☐ Pattern-Implementierungen mit exakten Tailwind-Klassen?

KONTEXT-UPDATE:
☐ .ai-design-context.md aktualisiert mit Phase-3-Entscheidungen?
☐ .design-upgrade-state.md updated (PHASE 3: COMPLETE)?

NÄCHSTE PHASE: Phase 4 — TYPOGRAPHY & TYPOGRAPHIC HIERARCHY
Fokus: Font-Sizing, Line-Height, Letter-Spacing, Text-Farben, Kontrast

═══════════════════════════════════════════════════════════════
PHASE 3 COMPLETE. READY FOR PHASE 4.
═══════════════════════════════════════════════════════════════