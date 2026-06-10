Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, das visuelle Bewegungs- und Animationssystem dieser Next.js/React/TypeScript Website wie ein weltklasse Film zu choreografieren — jede Bewegung hat Zweck, Gewicht und emotionale Resonanz. Phase 4 hat die Komponentenanatomie etabliert. Phase 5 bringt sie zum LEBEN. Dies ist Design-Phase 5 von 10 der Supreme Design & UX Pipeline.

═══════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE DESIGN-PROTOKOLL
═══════════════════════════════════════════════════════════════════════════════

DESIGN PILLAR 1 — SYNC VISION & DISCOVERY
Lies .ai-design-context.md (Brand DNA, Farben, Typografie, Abstände, Komponenten aus Phasen 1-4). Lies .design-upgrade-state.md. Pre-Flight Animation Discovery durchführen:

1. Existierende Animationen: Grep für transition, animation, @keyframes, framer-motion, transform in allen Komponenten
2. Existierende Hover-States: dokumentieren, was bei jedem interaktiven Element beim Hovern passiert
3. prefers-reduced-motion: Wird es respektiert? Wo?
4. Animation-Performance: Nutzen Animationen nur transform+opacity? (GPU-beschleunigt)
5. Page-Transitions: Existieren sie? Wie implementiert?

DESIGN PILLAR 2 — SURGICAL STYLING INJECTION
Neue CSS-Klassen sorgfältig hinzufügen, DOM/Logik nie zerstören. Animation-Klassen zu tailwind.config.ts erweitern.

DESIGN PILLAR 3 — VISUAL ATOMIC VALIDATION
npm run build && npm run lint && npx tsc --noEmit + visueller Check. Keine Fehler, keine Warnings.

DESIGN PILLAR 4 — DESIGN-STATE HANDOFF
.design-upgrade-state.md mit Phase-5-Fortschritt aktualisieren. Checkpoint vor Phase 6.

DESIGN PILLAR 5 — SELF-OPTIMIZING DESIGN LOOP
.ai-design-context.md mit Motion-Token-System, Reduced-Motion-Details, Hover-Choreografie, Scroll-Reveal-Konfiguration aktualisieren.

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — ANIMATIONS-TOKEN-SYSTEM
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 1: MOTION-DESIGN-TOKENS DEFINIEREN
───────────────────────────────────────────────────────────────────────────────

Definiere die Animation-Vokabeln mit CSS Custom Properties in globals.css:

EASING-KURVEN (fünf Stufen):
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)    [standard Balance]
--ease-out: cubic-bezier(0.0, 0, 0.2, 1)       [Eingang/Exit, natürlich]
--ease-in: cubic-bezier(0.4, 0, 1, 1)          [Einleitungsbewegung]
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1) [Bouncy, Freude]
--ease-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94) [Seide, elegant]

DURATIONEN (sechs Stufen):
--duration-instant: 100ms
--duration-fast: 150ms
--duration-normal: 250ms
--duration-slow: 400ms
--duration-slower: 600ms
--duration-slowest: 1000ms

STAGGER-WERTE:
--stagger-fast: 50ms
--stagger-normal: 100ms
--stagger-slow: 150ms

Registriere ALLE in globals.css UND erweitere tailwind.config.ts:
transitionDuration: { instant: '100ms', fast: '150ms', normal: '250ms', slow: '400ms', slower: '600ms', slowest: '1000ms' }
transitionTimingFunction: { 'ease-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)', 'ease-smooth': '...' }

REGEL: Keine Animation >1000ms. Nie ease-linear für UI-Elemente. Immer ease-out für Eingänge.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 2: PREFERS-REDUCED-MOTION — MANDATORY FIRST
───────────────────────────────────────────────────────────────────────────────

KRITISCH: Implementiere das Reduced-Motion-System VOR allen anderen Animationen.

In globals.css:
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}

Erstelle useReducedMotion() Hook in lib/hooks/useReducedMotion.ts:
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
Nutze diesen in allen JS-Animations.

Falls Framer Motion: Wickle AnimatePresence in <MotionConfig reducedMotion="user">

JEDE Animationen, die in dieser Phase hinzugefügt werden, MUSS diesen Media Query respektieren. Das ist nicht verhandelbar — Accessibility first.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — HOVER-STATES & MICRO-INTERACTIONS
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 3: BUTTON-HOVER-CHOREOGRAFIE
───────────────────────────────────────────────────────────────────────────────

Primary Buttons:
- Hover: background darkens (bg-primary-700) + translateY(-1px) + box-shadow erhöht sich (Shadow Level 0→1)
- Übergang: transition-all duration-fast ease-out
- Active/Pressed: translateY(1px) + box-shadow sinkt (Level 0) — Druck-Gefühl
- Focus: ring-2 ring-primary-500 ring-offset-2 mit duration-normal timing (nicht instant)

Secondary/Ghost Buttons:
- Hover: background erscheint (transparent → bg-primary-50) + border-color intensiviert (border-primary-400)
- Transition: duration-fast ease-out
- Disabled State: opacity-50 cursor-not-allowed, keine Transitions

Alle Transitions verwenden var(--duration-fast) und var(--ease-out). Keine Rotationen, keine komplexen Transforms.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 4: CARD-HOVER-ORCHESTRATION
───────────────────────────────────────────────────────────────────────────────

Card Container:
- Hover: translateY(-4px) + shadow-level-1 → shadow-level-2
- Transition: duration-slow ease-smooth (400ms, kubisch-bezier für Eleganz)
- Overflow: hidden (bei Kind-Bildern)

Image Inside Card:
- Hover: scale(1.03) (zoom rein ins Container)
- Transition: duration-slow ease-smooth (gleich wie Parent für Synchronisation)
- Parent overflow-hidden verhindert visuellen Bruch

Optional Border Transition:
- border-color: neutral-200 → primary-300 bei Hover (duration-normal)

Group Hover Syntax (Tailwind):
<div class="group hover:shadow-2xl transition-shadow duration-slow">
  <img class="group-hover:scale-103 transition-transform duration-slow" />
</div>

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 5: LINK- UND NAVIGATION-HOVER
───────────────────────────────────────────────────────────────────────────────

Text Links (Inline):
- Hover: Underline Animation (links-to-right mittels ::after Pseudo-Element)
- ::after { content: '', width: 0 → 100%, position: absolute, bottom: -2px, transition: width duration-normal ease-out }
- Keine Color-Änderung, nur Underline-Animation
- Fokus: ring-2 ring-primary-500

Navigation Items (Horizontal Menu):
- Aktiv-Indikator: Slides zwischen Items (transform: translateX)
- Easing: ease-smooth
- Dauer: duration-normal (250ms)
- Implementierung: CSS :nth-child Selector + calc() für Dynamic Position

Footer Links:
- Hover: color: primary-600 (mit transition-colors duration-fast)
- Keine Scale, keine Translate — nur Farbe, schnell

═══════════════════════════════════════════════════════════════════════════════
ULTRATHINK-TASK 6: INPUT-FOKUS-ANIMATION
═══════════════════════════════════════════════════════════════════════════════

Input Focus State:
- Border Color: neutral-300 → primary-500 (transition-colors duration-normal)
- Focus Ring: ring-2 ring-primary-500 ring-offset-2 (kein Instant-Erscheinen, kurze Transition)
- Box Shadow: optional inset shadow bei Focus

Floating Labels (falls verwendet):
- Resting: translateY(0) scale(1) color-neutral-500
- Focus/Filled: translateY(-24px) scale(0.85) color-primary-600
- Transition: duration-normal ease-out
- Background: white (zur Lesbarkeit über Border)

Validation Icons:
- Success: fadeIn + translateX(-4px → 0) bei focus
- Error: fadeIn + translateX(4px → 0)
- Dauer: duration-fast (150ms)
- Easing: ease-out

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — SCROLL-REVEAL & ENTRANCE-ANIMATIONEN
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 7: SCROLL-REVEAL-SYSTEM
───────────────────────────────────────────────────────────────────────────────

Erstelle AnimateIn Component (components/Motion/AnimateIn.tsx) nutzt Intersection Observer:

Export AnimateIn als Wrapper:
<AnimateIn type="fadeInUp">
  <YourComponent />
</AnimateIn>

Types:
- fadeInUp (default): opacity 0→1 + translateY(20px → 0)
- fadeInDown: opacity 0→1 + translateY(-20px → 0)
- fadeIn: nur opacity
- slideInLeft: translateX(-40px → 0) + opacity 0→1
- slideInRight: translateX(40px → 0) + opacity 0→1

Konfiguration:
- Duration: duration-slow (400ms)
- Easing: ease-out
- Threshold: 0.15 (Element 15% sichtbar triggert Animation)
- Once: true (animiere nur beim ersten Erscheinen)
- Root Margin: "-50px" (starte 50px vor sichtbarem Viewport)

StaggerContainer für Child-Elemente:
<StaggerContainer staggerChildren={100}>
  <AnimateIn><Item1 /></AnimateIn>
  <AnimateIn><Item2 /></AnimateIn>
  <AnimateIn><Item3 /></AnimateIn>
</StaggerContainer>

Jedes Kind verzögert sich um stagger-normal (100ms).

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 8: SEKTIONS-SPEZIFISCHE EINGANGS-ANIMATIONEN
───────────────────────────────────────────────────────────────────────────────

Hero Section (Priorität MAX):
- Headline: fadeInUp delay-0ms
- Subheadline: fadeInUp delay-100ms
- CTA Button: fadeInUp delay-200ms + scaleIn (0.95 → 1)
- Image/Video: fadeInUp delay-300ms
- Alle nutzen duration-slow ease-out

Stats/Zahlen (CountUp Effect):
- Von 0 zu target-Zahl während Scroll-Animation
- useCountUp Hook: animiere mit easing-out über duration-slow
- Trigger beim Sichtbarwerden
- Format: "1.2K+" oder "99%"

Testimonials Grid:
- Alterniere: Left-Slide, Right-Slide, Left-Slide für visuales Interesse
- Jede Card: slideIn + fadeIn mit stagger-slow (150ms zwischen Cards)
- Dauer: duration-slow

Cards Grid (Produkte, Case Studies, etc.):
- Stagger-Animation: Erste Card delay-0, Zweite delay-100ms, Dritte delay-200ms etc.
- Type: fadeInUp
- Max Delay: 300ms (nicht zu lang)

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — PAGE-TRANSITIONS & GLOBALE ANIMATION
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 9: SEITEN-ÜBERGANGS-ANIMATION
───────────────────────────────────────────────────────────────────────────────

Route Change Transitions:
- Nutze Next.js App Router mit Layout-basierter Animation
- Oder: Framer Motion AnimatePresence mit layoutId="page"
- Effekt: Subtle Fade (opacity 1 → 0 → 1)
- Dauer: 200ms (schnell, nicht störend)
- Easing: ease-smooth

Loading Progress Bar (bei slow Connection):
- Thin bar at top: height-1 bg-primary-500
- Animiere width: 0% → 90% während loading
- Nach Page-Load: width 90% → 100% dann fadeOut
- Dauer: 300ms
- Easing: ease-out

KRITISCH: Blockiere Navigation nicht. Animation ist kosmetisch, nicht blocking. Nutze startTransition() in React 18.

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 10: SCROLL-VERHALTEN VERFEINERN
───────────────────────────────────────────────────────────────────────────────

Smooth Scroll:
- html { scroll-behavior: smooth; }
- Anchor Links (#section) scrollen sanft
- Dauer: ~1s (Browser-native)

Scroll-to-Top Button:
- Erscheint nach 300px Scroll
- FadeIn Animation (opacity 0 → 1) duration-fast
- Scrollt smoothly to top (window.scrollTo({ top: 0, behavior: 'smooth' }))
- Position: fixed bottom-6 right-6
- Hover: scaleUp (1.1x) + rotateZ(10deg)

Parallax Effects (OPTIONAL, Performance-geprüft):
- NUR wenn performant (transform: translateZ for GPU acceleration)
- SEHR SUBTIL: max 10% Offset
- Beispiel: Image translateY basierend auf scrollY mit easing

Sticky Elements (Headers, Sidebars):
- Smooth transition zum sticky state (Shadow erscheint)
- box-shadow: 0 2px 8px opacity-0 → opacity-0.1
- Dauer: duration-normal (250ms)
- Nicht instant

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING DESIGN LOOP — PHASE 5 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 11: KONTEXT AKTUALISIEREN UND HANDOFF
───────────────────────────────────────────────────────────────────────────────

Aktualisiere .ai-design-context.md mit:

1. Complete Motion Token System:
   - Alle Easing-Kurven (Bezier-Werte)
   - Alle Durationsstufen
   - Alle Stagger-Intervalle
   - Registrierung in Tailwind-Config

2. Reduced-Motion Implementation:
   - Global CSS Media Query
   - useReducedMotion() Hook Pfad
   - Framer Motion Setup (falls genutzt)

3. Hover Choreography für jeden Component-Type:
   - Buttons (Primary/Secondary/Ghost)
   - Cards
   - Links
   - Inputs
   - Navigation

4. Scroll-Reveal System:
   - AnimateIn Component Pfad
   - StaggerContainer Usage
   - Default Types
   - Threshold Konfiguration

5. Page Transition Approach:
   - Implementation (Framer Motion oder Next.js)
   - Duration/Easing
   - Loading State Details

6. Performance Rules:
   - ONLY transform + opacity (GPU-accelerated)
   - Keine Layout-Triggers (width, height, margin während animation)
   - Keine shadow-Animationen außer Box-Shadow
   - INP <100ms (Input Pending Time)

7. Measurement & Validation:
   - npm run build: 0 errors
   - npm run lint: 0 warnings
   - npx tsc --noEmit: strict mode passed
   - Visual check: alle Animationen flüssig @60fps

Handoff zu Phase 6: Cognitive UX & Navigation Fluidity — hier werden die Animationen in Navigation-Patterns und Information Architecture integriert.

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG DESIGN-PHASE 5 — MOTION DESIGN CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

MOTION TOKEN SYSTEM (4 Items):
☐ 5 Easing-Kurven in CSS Custom Properties definiert
☐ 6 Duration-Stufen in globals.css registriert
☐ 3 Stagger-Werte zentral konfiguriert
☐ Tailwind-Config erweitert (transitionDuration, transitionTimingFunction)

ACCESSIBILITY & PERFORMANCE (5 Items):
☐ @media prefers-reduced-motion global implementiert
☐ useReducedMotion() Hook erstellt und getestet
☐ Alle Animationen respektieren Reduced-Motion
☐ Nur transform + opacity animiert (keine Layout-Shifts)
☐ Keine Animation >1000ms

HOVER-STATES (6 Items):
☐ Button Hover: Lift-Effect (translateY + Shadow)
☐ Button Active: Press-Effect (translateY down)
☐ Card Hover: Elevation + Image Zoom
☐ Link Hover: Underline-Animation (LTR)
☐ Navigation Hover: Active-Indikator Slide
☐ Input Focus: Border Color + Ring Transition

SCROLL-REVEAL (5 Items):
☐ AnimateIn Component implementiert
☐ StaggerContainer für Child-Elemente
☐ Hero Section: Sequenzielle Eingänge
☐ Stats: CountUp-Animation
☐ Cards Grid: Staggered Reveal

PAGE TRANSITIONS (3 Items):
☐ Route-Change Fade implementiert
☐ Loading Progress Bar (bei slow connection)
☐ Keine Navigation-Blockierung

SCROLL BEHAVIOR (2 Items):
☐ html { scroll-behavior: smooth; }
☐ Scroll-to-Top Button mit Fade + Smooth

CONTEXT & HANDOFF (1 Item):
☐ .ai-design-context.md mit Motion-System aktualisiert

BUILD & DEPLOY (2 Items):
☐ npm run build: 0 errors, 0 warnings
☐ npm run lint && npx tsc --noEmit: zero warnings
☐ Visual Check: Alle Animationen smooth @60fps, INP <100ms

TOTAL: ~22 Validierungspunkte. Phase 5 ist COMPLETE, wenn alle Checkboxes grün sind.

HANDOFF READY für Phase 6: Cognitive UX & Navigation Fluidity.
