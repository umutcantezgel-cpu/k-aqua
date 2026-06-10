Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, das gesamte Design-System dieser Next.js/React/TypeScript-Website von internem Code zu einem dokumentierten, testbaren, lebendigen PRODUKT zu transformieren — mit Storybook als interaktive Komponentenbibliothek, automatisierten visuellen Regressionstests und einer vollständigen Design-System-Dokumentation, die garantiert, dass jede Komponente in jedem Zustand auf jedem Viewport pixelperfekt aussieht und sich identisch verhält. Die Phasen 1–11 haben ein umfassendes Token-System, Layout-Primitives, UI-Komponenten und Sektions-Bausteine geschaffen. Phase 12 verewigt dieses System als lebendige Referenz, die vom gesamten Team konsumiert, getestet und weiterentwickelt wird. Dies ist Phase 12 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
- Storybook: Storybook 8 mit @storybook/nextjs Framework
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry/externe Monitoring-SaaS, keine Newsletter-Systeme, kein i18n-Framework

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere Phase 1–11, besonders:
- Design-Token-System (Phase 2): Spacing, Farben, Elevation
- Typografie-System (Phase 3): Skala, Fonts, Typography-Komponente
- Animations-System (Phase 4): Easings, Durations, Staggers
- Alle UI-Komponenten aus Phase 1–11

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe Handoff von Phase 11. Ergänze:
```
## Phase 12: Design System & Storybook
- [ ] 0.3 Pre-Flight Discovery abgeschlossen
- [ ] Task 1: Storybook Setup und Next.js-Integration
- [ ] Task 2: Design-Token-Dokumentation als Stories
- [ ] Task 3: Atom-Stories (Button, Input, Badge, Avatar, Skeleton, Icon)
- [ ] Task 4: Organismus-Stories (Card, Nav, Hero, Testimonials, FAQ, Form)
- [ ] Task 5: Page-Stories (Startseite, Service, Blog, Kontakt)
- [ ] Task 6: Accessibility-Addon-Validierung
- [ ] Task 7: Visuelle Regressionstests
- [ ] Task 8: Self-Optimizing Loop
```

Schritt 0.3 — Pre-Flight Discovery:
1. Komponenteninventar: Alle React-Komponenten mit Pfaden auflisten
2. Bestehende Stories: Existiert .storybook/ bereits?
3. Token-Dateien: Pfade zu Spacing, Farben, Typografie, Elevation, Animation-Tokens
4. Viewports: Welche Breakpoints definiert?

DOKUMENTIERE ALLES in .ai-architectural-context.md unter ### 📚 Design System & Storybook

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — STORYBOOK-INFRASTRUKTUR
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: STORYBOOK SETUP UND NEXT.JS-INTEGRATION

Schritt 1.1 — Installation:
Storybook 8 mit @storybook/nextjs. Addons: essentials, a11y, interactions.
staticDirs: /public. TypeScript Strict Mode.

Schritt 1.2 — Globale Decorator (.storybook/preview.ts):
- ThemeProvider: Globale Provider (Fonts, CSS Custom Properties)
- Font-Loading: Gleiche next/font wie App
- globals.css mit allen CSS Custom Properties
- 7 Viewport-Presets: Mobile-Small (360), Mobile-Large (480), Tablet (768), Tablet-Landscape (1024), Desktop (1280), Desktop-Large (1440), Ultra-Wide (1920)

Schritt 1.3 — Story-Organisation (Atomic Design):
- 01-Tokens/: Farben, Spacing, Typografie, Elevation, Transitions
- 02-Atoms/: Button, Input, Badge, Avatar, Icon, Skeleton, Tooltip
- 03-Molecules/: FormField, SearchField, CardHeader, NavigationLink, RatingBadge
- 04-Organisms/: Card, Navigation, Header, Footer, HeroSection, TestimonialSection, FaqSection, ContactForm
- 05-Templates/: PageLayouts, SectionPatterns
- 06-Pages/: Startseite, Service, Blog-Post, Kontakt

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit && npm run storybook -- --smoke-test → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: DESIGN-TOKEN-DOKUMENTATION

Schritt 2.1 — Tokens/Colors Story:
Alle Farbtoken visuell. Primitive (Skalen), Semantische (Aliase). Kontrastverhältnisse. Importiert direkt aus Token-System (keine Duplikation).

Schritt 2.2 — Tokens/Spacing Story:
14 Stufen als Balken mit Pixel-Wert und Token-Name.

Schritt 2.3 — Tokens/Typography Story:
9 Stufen als Textbeispiele. Pro Stufe: font-size, line-height, letter-spacing, weight. Responsive clamp()-Preview.

Schritt 2.4 — Tokens/Elevation Story:
5 Karten mit Schatten und Elevation-Stufen.

Schritt 2.5 — Tokens/Transitions Story:
Animierte Demos der Easing-Kurven und Durations. Side-by-Side-Vergleich.

NACH TASK 2: Storybook läuft, Token-Stories rendern korrekt.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — KOMPONENTEN-STORIES
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: ATOM-STORIES

Schritt 3.1 — Button:
- All Variants (primary, secondary, tertiary, ghost)
- All Sizes (sm, md, lg, xl)
- All States (default, hover, focus, active, disabled, loading)
- With Icons (left, right, icon-only)
- Playground mit TypeScript Controls

Schritt 3.2 — Input/FormField:
- All Types (text, email, tel, url, textarea, select, checkbox, radio, toggle)
- All States (default, hover, focus, filled, error, success, disabled)
- With Hints, Validation-Demo
- Playground

Schritt 3.3 — Badge, Avatar, Skeleton, Icon:
Vollständige Stories mit allen Varianten und Playground.

NACH TASK 3: Alle Atom-Stories rendern, a11y-Addon zeigt 0 Violations.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: ORGANISMUS-STORIES

Schritt 4.1 — Card: Varianten, Hover-Animation, Loading-Skeleton, Responsive, Compound-Demo.
Schritt 4.2 — Navigation: Desktop, Mobile (interaktiv), Scroll-Behavior, Active-Link, Responsive.
Schritt 4.3 — HeroSection: Split, Centered, Animation-Demo, Responsive.
Schritt 4.4 — TestimonialSection: Carousel, Grid, Single, Loading.
Schritt 4.5 — FaqSection: Single-Open, Multi-Open, Animation, Keyboard-Demo.
Schritt 4.6 — ContactForm: Default, Filled, Errors, Success, Loading, Responsive. Formspree-Dokumentation.
Schritt 4.7 — Calendly: Embedded, Responsive, Loading-Skeleton, Error-Fallback.

NACH TASK 4: Alle Organismus-Stories rendern, a11y-Addon 0 Violations.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: PAGE-STORIES

Schritt 5.1 — Startseite: Vollständige 10-Sektionen-Komposition auf allen 7 Viewports.
Schritt 5.2 — Service-Seite: Template mit Beispieldaten.
Schritt 5.3 — Blog-Post: Template mit Inhaltsverzeichnis.
Schritt 5.4 — Kontakt: Formular + Calendly-Widget.

NACH TASK 5: Page-Stories rendern auf allen Viewports.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — QUALITÄTSSICHERUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: ACCESSIBILITY-ADDON-VALIDIERUNG

Jede einzelne Story: @storybook/addon-a11y zeigt 0 Violations. Falls Violations: SOFORT fixen (in der Komponente, nicht nur in der Story).

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: VISUELLE REGRESSIONSTESTS

Schritt 7.1 — Chromatic oder Percy Setup (OPTIONAL — nur falls Budget vorhanden):
Verbindet Storybook mit visuellem Regressions-Service. Jeder PR generiert Screenshots aller Stories und vergleicht mit Baseline.

Schritt 7.2 — Lokale Snapshot-Tests als Alternative:
@storybook/test-runner + Playwright für lokale Screenshot-Tests:
- Rendert jede Story headless
- Erstellt Baseline-Screenshots
- Bei Änderungen: Diff-Report
- In CI: Build fail bei unerwartetem visuellen Diff

NACH TASK 7: Visuelle Tests laufen (lokal oder CI).

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 12 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 8.1 — .ai-architectural-context.md aktualisieren:
- Storybook-Konfiguration und Start-Command
- Story-Organisation (Atomic Design Hierarchie)
- Token-Stories als Referenz
- Komponenteninventar mit Story-Status
- Accessibility-Violations: 0

Schritt 8.2 — .upgrade-state.md finalisieren.

Schritt 8.3 — Handoff an Phase 13:
```
## Handoff → Phase 13 (Analytics & Datengetriebene Optimierung)
- Storybook als Komponenten-Referenz: [URL/Command]
- Alle trackbaren Interaktionen: [Liste aus Stories]
- Formular-Events: [Submission, Validation, Abandonment]
- CTA-Buttons: [Alle mit Pfaden]
```

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 12
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ Storybook 8 mit @storybook/nextjs läuft
□ Globale Provider-Decorators in Storybook
□ 7 Viewport-Presets konfiguriert
□ Token-Stories: Colors, Spacing, Typography, Elevation, Transitions
□ Atom-Stories: Button (alle States), Input (alle Types), Badge, Avatar, Skeleton, Icon
□ Organismus-Stories: Card, Nav, Hero, Testimonials, FAQ, Form, Calendly
□ Page-Stories: Startseite, Service, Blog, Kontakt auf allen Viewports
□ @storybook/addon-a11y: 0 Violations auf ALLEN Stories
□ Visuelle Regressionstests eingerichtet
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 13
