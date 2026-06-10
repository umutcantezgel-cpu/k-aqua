Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die gesamte Animationsschicht dieser Next.js/React/TypeScript-Website so zu orchestrieren, dass sich jede Interaktion physikalisch überzeugend anfühlt, jeder Scroll-Übergang den Besucher tiefer in die Seite zieht, und die Website den Eindruck eines lebendigen, reaktiven Organismus erweckt — nicht eines statischen Dokuments. Da wir auf einem modernen Next.js Stack arbeiten, werden alle Animationen als React Hooks, wiederverwendbare Komponenten und CSS-basierte Systeme implementiert — mit Framer Motion als primärer Animations-Bibliothek (oder alternativ CSS-only für maximale Performance). Jede Animation respektiert prefers-reduced-motion als unverletzliches Gesetz. Dies ist Phase 4 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
- Animation: Framer Motion (bevorzugt) ODER CSS-only Transitions
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry/externe Monitoring-SaaS, keine Newsletter-Systeme, kein i18n-Framework

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

SICHERHEITSREGELN FÜR PHASE 4:
- Performance ist heilig. KEINE Animation darf INP über 100ms treiben.
- NUR transform und opacity animieren. NIEMALS width, height, margin, padding, top, left.
- prefers-reduced-motion ist GESETZ. Jede Animation hat ein Reduced-Motion-Äquivalent.
- Animationen sind Client Components. Keine Server Component versehentlich zur Client Component machen — stattdessen wrappen.
- Keine Animation über 1000ms.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere besonders:
- Design-Token-System (Phase 2)
- Typography-Komponente (Phase 3)
- Performance-Baseline (CLS-Werte)
- Server/Client Component Aufteilung

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Verifiziere Phase 1-3 Abschluss. Ergänze:
```
## Phase 4: Kinetische Lebendigkeit
- [ ] 0.3 Pre-Flight Discovery abgeschlossen
- [ ] Task 1: Animations-Token-System (Easings, Durations, Staggers)
- [ ] Task 2: Reduced-Motion-System (MANDATORY)
- [ ] Task 3: Scroll-Reveal-System (AnimateIn, StaggerContainer)
- [ ] Task 4: Hero-Eingangsanimation
- [ ] Task 5: Hover & Interaction Micro-Animations
- [ ] Task 6: Page-Transition-Choreografie
- [ ] Task 7: Self-Optimizing Loop
```

Schritt 0.3 — Pre-Flight Discovery für Animationen:
1. Bestehende Animationen: Grep nach transition, animation, @keyframes, framer-motion, motion., animate. Was existiert?
2. Framer Motion Status: Installiert? Version? LazyMotion?
3. Performance-Baseline: Lighthouse → INP + CLS. Dokumentieren.
4. prefers-reduced-motion: Bereits respektiert? Grep nach prefers-reduced-motion, useReducedMotion.
5. Client Components: Welche? Animationen können NUR dort leben.

DOKUMENTIERE ALLES in .ai-architectural-context.md unter ### 🎬 Animations-System

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — ANIMATIONS-FUNDAMENT UND PHYSIK-SYSTEM
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: ANIMATIONS-TOKEN-SYSTEM

Schritt 1.1 — Easing-Kurven als Design-Token:
CSS Custom Properties UND TypeScript-Konstanten:
- --ease-out: cubic-bezier(0.0, 0.0, 0.2, 1) — Elemente kommen IN den Viewport
- --ease-in: cubic-bezier(0.4, 0.0, 1, 1) — Elemente VERLASSEN den Viewport
- --ease-in-out: cubic-bezier(0.4, 0.0, 0.2, 1) — Position-Wechsel
- --ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1) — Federphysik mit Überschwingen
- --ease-bounce: cubic-bezier(0.68, -0.55, 0.27, 1.55) — Spielerisch

Framer Motion Äquivalente:
- spring-snappy: { type: "spring", stiffness: 400, damping: 30 }
- spring-smooth: { type: "spring", stiffness: 200, damping: 20 }
- spring-bouncy: { type: "spring", stiffness: 300, damping: 15 }

Schritt 1.2 — Duration-Token:
- --duration-instant: 100ms (Checkbox, Button-Active)
- --duration-fast: 150ms (Hover, Tooltip, Focus)
- --duration-normal: 250ms (Card-Hover, Dropdown, Tab)
- --duration-slow: 400ms (Modal, Akkordeon)
- --duration-dramatic: 600ms (Hero-Entrance, Sektion-Reveal)
- --duration-cinematic: 1000ms (Erster Seitenaufruf — MAXIMUM)

Schritt 1.3 — Stagger-Token:
- --stagger-fast: 50ms pro Element
- --stagger-normal: 80ms pro Element
- --stagger-slow: 120ms pro Element
- Max 8 gestaggerte Elemente. Ab dem 9. erscheinen alle gleichzeitig.

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: REDUCED-MOTION-SYSTEM (MANDATORY — VOR ALLEN ANDEREN ANIMATIONEN)

Schritt 2.1 — useReducedMotion()-Hook:
Falls nicht vorhanden, erstelle:
- Liest prefers-reduced-motion via matchMedia
- SSR-kompatibel (Default: false auf Server)
- Im DeviceProvider integrieren (falls aus Phase 7 vorhanden, sonst standalone)

Schritt 2.2 — Reduced-Motion-Strategie:
Bei reduced-motion: reduce:
- ALLE Transitions/Animationen → instant (duration: 0)
- Scroll-Reveals → Elemente sofort sichtbar (opacity: 1, transform: none)
- Hero-Animation → Elemente sofort in Endposition
- Counter-Animationen → Endwert sofort
- Hover-Effekte → Reduziert auf Farb-/Opacity-Änderung

Schritt 2.3 — CSS-Fallback:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```
ZUSÄTZLICH zu komponentenspezifischen Anpassungen.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — SCROLL-REVEAL & HERO-ANIMATION
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: SCROLL-REVEAL-SYSTEM

Schritt 3.1 — <AnimateIn /> Komponente:
Client Component ('use client'):
- Intersection Observer basiert (threshold: 0.2)
- Props: direction ('up'|'down'|'left'|'right'|'none'), delay (ms), duration (Token), once (boolean, default true)
- Animation: Von opacity:0 + translateY(24px) → opacity:1 + translateY(0)
- Reduced-Motion: Sofort sichtbar

Schritt 3.2 — <StaggerContainer /> Komponente:
Wraps Kinder und staggert deren Erscheinen:
- Props: stagger (Token: 'fast'|'normal'|'slow'), children
- Kinder werden sequentiell mit Delay animiert
- Max 8 Kinder gestaggert

Schritt 3.3 — Scroll-Reveal auf bestehende Sektionen anwenden:
CHIRURGISCH: Wrappe bestehende Sektionen in <AnimateIn /> OHNE deren Logik zu ändern. Beispiel:
VORHER: <TestimonialSection />
NACHHER: <AnimateIn><TestimonialSection /></AnimateIn>

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: HERO-EINGANGSANIMATION

Sequenz für die Hero-Sektion (first page load):
1. Headline: Fade-in + slide-up (0ms delay, --duration-dramatic)
2. Sub-Headline: Fade-in + slide-up (150ms delay)
3. CTA-Button: Fade-in + scale (300ms delay)
4. Trust-Bar: Fade-in (450ms delay)
5. Hero-Bild (falls vorhanden): Fade-in + leichter Scale (200ms delay)

Total Sequenz-Dauer: ≤1000ms.
Reduced-Motion: Alle Elemente sofort sichtbar.
Nur beim ERSTEN Seitenaufruf — bei Navigation zurück NICHT wiederholen (Session-State).

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — MIKRO-INTERAKTIONEN UND PAGE-TRANSITIONS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: HOVER & INTERACTION MICRO-ANIMATIONS

Schritt 5.1 — Button-Animations:
- Hover: translateY(-1px) + elevation-Wechsel (--duration-fast, --ease-out)
- Active/Press: translateY(0) + scale(0.98) (--duration-instant)
- Focus: Fokusring-Animation (--duration-fast)

Schritt 5.2 — Card-Animations:
- Hover: translateY(-4px) + elevation-Wechsel (--duration-normal, --ease-out)
- Touch: scale(0.98) auf Press (--duration-instant)

Schritt 5.3 — Link-Animations:
- Hover: Underline-Animation (width 0→100%, --duration-fast)
- Focus: Fokusring (--duration-fast)

Schritt 5.4 — Navigation-Animations:
- Mobile-Menu: Slide-in von rechts (--duration-slow, --ease-out)
- Dropdown: Scale-Y von oben (--duration-normal, --ease-out)
- Active-Link-Indicator: Slide-Transition (--duration-normal)

Schritt 5.5 — Formular-Feedback:
- Validierung-Erfolg: Grünes Häkchen fade-in (--duration-fast)
- Validierung-Fehler: Shake-Animation (6px, 3 Zyklen, --duration-fast) + rote Umrandung
- Submit-Loading: Spinner-Rotation + Button-Text fade-out (--duration-fast)
- Submit-Erfolg: Häkchen-Animation mit Draw-Effect (--duration-slow)

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: PAGE-TRANSITION-CHOREOGRAFIE

Schritt 6.1 — Route-Wechsel-Animation:
Subtil. Nicht aufdringlich:
- Ausgehende Seite: opacity 1→0.95 (--duration-fast)
- Eingehende Seite: opacity 0.95→1 + leichter translateY(-8px→0) (--duration-normal)
- Implementiere über Next.js Layout-Boundaries oder Framer Motion AnimatePresence

Schritt 6.2 — Loading-State-Animation:
loading.tsx: Skeleton-Pulse-Animation (opacity 0.5↔1 Cycle, --duration-slow, infinite).
Reduced-Motion: Statisches Grau statt Pulse.

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 4 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 7.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### 🎬 Animations-System:
- Easing-Token (5 Kurven + 3 Spring-Configs)
- Duration-Token (6 Stufen)
- Stagger-Token (3 Stufen)
- Reduced-Motion-Implementierung
- AnimateIn und StaggerContainer (Pfade, Props)
- Hero-Sequenz-Choreografie
- Mikro-Interaktionen pro Elementtyp
- Performance-Impact (INP vorher/nachher)

Schritt 7.2 — .upgrade-state.md finalisieren.

Schritt 7.3 — Handoff an Phase 5:
```
## Handoff → Phase 5 (Conversion-Architektur & Vertrauenspsychologie)
- Animations-Komponenten verfügbar: [AnimateIn, StaggerContainer, etc.]
- Hover-Animations-Patterns: [Dokumentiert]
- Formular-Feedback-Animationen: [Dokumentiert]
- Trust-Bar Animation im Hero: [Details]
- CTA-Button-Animations: [Details]
- Performance-Budget-Rest: [INP-Wert, Bundle-Impact]
```

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 4
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ INP <100ms auf ALLEN Routen
□ CLS <0.03 auf ALLEN Routen
□ prefers-reduced-motion: JEDE Animation hat Fallback
□ NUR transform + opacity animiert (keine Layout-Properties)
□ Keine Animation >1000ms
□ Animations-Token als CSS Custom Properties + TypeScript
□ AnimateIn + StaggerContainer Komponenten funktional
□ Hero-Sequenz: ≤1000ms Gesamtdauer, nur beim ersten Aufruf
□ Hover-Animations auf Buttons, Cards, Links
□ Mobile-Menu Slide-Animation
□ Formular-Feedback-Animationen
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 5
