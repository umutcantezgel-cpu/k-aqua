Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, Phase 6 als vollständig funktionierende Vertrauensmaschine zu etablieren. Alle Komponenten MÜSSEN direkt mit Phase-2 Daten (testimonials.ts, case-studies.ts) verkabelt sein und in der Next.js App Router Architektur zu 100% funktionieren.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

PHASE 6 / 10: TRUST & SOCIAL PROOF — Echte Vertrauenselemente die konvertieren

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

OPENING

Phase 6 verwandelt die Website in eine Vertrauensmaschine. Testimonial-Karten mit 5-Sterne-Bewertungen, echte Case-Study-Detailseiten mit messbaren Ergebnissen, animierte Statistik-Counter, Trust-Badges und Client-Logos — alles FUNKTIONAL, alles gespeist aus den Phase-2 Datenstrukturen. Keine CMS, keine Sentry, keine Dark Mode. Nur Formspree + Calendly. Code ist SSOT. .ai-expansion-context.md + .expansion-state.md steuern den Workflow.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ ZERO-BREAKAGE EXPANSION-PROTOKOLL ═══

STEP 0: SYNC & DISCOVERY
─────────────────────────────────────────────────────────────────────────────────────────────────────────

PRE-BUILD-CHECKS

□ Lies .ai-expansion-context.md vollständig. Dokumentiere aktuellen Phase-Stand.
□ Öffne /lib/data/testimonials.ts. Prüfe: Existiert getTestimonials()? Existiert getTestimonialsByService(slug)? Mind. 6 Testimonials mit mindestens name, quote, role, company, rating, serviceSlug.
□ Öffne /lib/data/case-studies.ts. Prüfe: Existiert getCaseStudies()? Existiert getCaseStudyBySlug()? Mind. 3 Case Studies mit mindestens title, client, challenge, solution, results (array mit KPI-Objekten), technologiesUsed, industry, slug, testimonialId.
□ Prüfe Phase-3 Komponenten: Existieren /components/cards/TestimonialCard.tsx, /components/cards/ServiceCard.tsx? Falls nein → Erstelle Stubs.
□ Befehl: npm run build. Baseline muss fehlerfrei durchlaufen.

TECH STACK CONFIRMATION
─────────────────────────────────────────────────────────────────────────────────────────────────────────

React 19+ | Next.js 15+ App Router | TypeScript strict | Tailwind CSS | Formspree | Calendly
Client Components: "use client" explizit für alle interaktiven Module.
Keine Dependencies: Sentry, CMS, Dark Mode, Zustand, Redux, Drizzle.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ BLOCK A — TESTIMONIAL-SYSTEM ═══

ULTRATHINK-TASK A1: Testimonial-Anzeige-Varianten
───────────────────────────────────────────────────────────────────────────────────────────────────────

Erstelle ODER erweitere /components/cards/TestimonialCard.tsx.

Varianten (über variant-Prop: 'compact' | 'standard' | 'featured'):

COMPACT: Quote-Text (max. 2 Zeilen), Name, keine weiteren Details. Für Sidebars.
STANDARD: Quote (3-4 Zeilen), Name, Rolle + Firma in kleinerer Schrift, 5 SVG-Sterne (gefüllt bis rating), Tailwind-Card mit padding-6, border, rounded-lg, shadow-sm.
FEATURED: Großes Layout, Foto-Platzhalter (zentriert, grauer Hintergrund, alt-Text), längeres Quote, Name prominent, Rolle/Firma, Sterne größer, padding-12, rounded-xl, shadow-md.

STERNE-RENDERING: Funktion StarRating(rating: number) — Array von 5 SVG-Stars. Gefüllte Stars (primary color) bis zum rating-Wert, Rest outline (gray-300). Jeder Star ist 1rem groß.

PROPS:
interface TestimonialCardProps {
  quote: string;
  name: string;
  role?: string;
  company?: string;
  rating?: number; // 1-5
  photoUrl?: string;
  variant?: 'compact' | 'standard' | 'featured';
}

IMPLEMENTIERUNG:
- Varianten via CSS-Klassen-Mapping (nicht mehrere Komponenten).
- StarRating() als separate Komponente oder Helper.
- Photo fallback: div mit bg-gray-200, Icon oder Initials.
- Keine externe SVG-Library — inline SVG für Stars.

ZIEL: npm run build fehlerfrei, TestimonialCard.tsx ist einsatzbereit.

ULTRATHINK-TASK A2: Testimonial-Karussell
───────────────────────────────────────────────────────────────────────────────────────────────────────

Erstelle /components/sections/TestimonialCarousel.tsx.

"use client" am Top.

FUNKTIONALITÄT:
- Zeigt 1 Testimonial pro View (aktuelles basierend auf currentIndex).
- Navigation: Pfeile (← →) links/rechts, Dots unten (1 pro Testimonial, aktiver Dot hervorgehoben).
- Auto-Rotation: alle 5 Sekunden zum nächsten Testimonial (Loop: Nach letztem → erstes).
- Pause bei Hover über Carousel.
- Touch-Swipe auf Mobile: Swipe rechts → vorheriges, Swipe links → nächstes.

STATE & HOOKS:
- useState(currentIndex, setCurrentIndex): Initia 0.
- useState(isAutoPlay, setIsAutoPlay): Kontrolle für Hover-Pause.
- useEffect: Interval für Auto-Rotation (5s), lädt Phase-2 testimonials via getTestimonials().

TEMPLATE-STRUKTUR:
div (container, relative, overflow-hidden)
  ├─ div (slide-content, transition-transform, duration-300)
  │  └─ TestimonialCard (variant="featured", daten aus current testimonial)
  ├─ button (arrow prev, absolute left-4)
  ├─ button (arrow next, absolute right-4)
  └─ div (dots-row, flex justify-center, mt-6)
     └─ Dots als Buttons (gefärbt: aktiv primary, inaktiv gray-300)

ZIEL: Funktionaler Carousel, swipebar, responsive.

ULTRATHINK-TASK A3: Testimonial-Grid
───────────────────────────────────────────────────────────────────────────────────────────────────────

Erstelle /components/sections/TestimonialGrid.tsx.

Zeigt ALLE Testimonials in responsivem Grid: 1 Spalte (Mobile), 2 (Tablet md), 3 (Desktop lg).

OPTIONAL: Filter-Bar oben (nach serviceSlug). Checkboxes für verfügbare Services, Default = Alle. Verwendet getTestimonials(), filtert nach selectedServices.

IMPLEMENTIERUNG:
- div (container, grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-6)
- Jede Zelle: TestimonialCard (variant="standard")
- Filter-Section (optional, oben, flex flex-wrap, gap-3)

ZIEL: Testimonial-Seite /app/referenzen/page.tsx kann diesen Grid laden.

ULTRATHINK-TASK A4: Service-spezifische Testimonials
───────────────────────────────────────────────────────────────────────────────────────────────────────

Auf jeder Service-Detailseite (/leistungen/[slug]) werden Testimonials angezeigt, die zum Service gehören.

IMPLEMENTIERUNG:
- In /app/leistungen/[slug]/page.tsx: Nutze getTestimonialsByService(slug). Falls nicht existent in Phase 2, erstelle Getter in /lib/data/testimonials.ts.
- Sektion auf Detailseite: "Was Kunden sagen" oder ähnlich.
- Zeige bis 3 Testimonials als TestimonialCards (variant="standard"), oder Carousel wenn >3.

GETTER-PRÜFUNG:
export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
  return all.filter(t => t.serviceSlug === serviceSlug);
}

ZIEL: Cross-linking zwischen Services und Testimonials funktioniert.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ BLOCK B — CASE STUDY SEITEN ═══

ULTRATHINK-TASK B5: Case Study Card
───────────────────────────────────────────────────────────────────────────────────────────────────────

Erstelle /components/cards/CaseStudyCard.tsx.

LAYOUT:
div (card, border, rounded-lg, shadow-sm, hover:shadow-md, transition, overflow-hidden, cursor-pointer)
  ├─ div (header, bg-primary/5, padding-4)
  │  ├─ h3 (Projekt-Titel, text-lg font-bold)
  │  └─ p (Client-Name, text-sm text-gray-600)
  ├─ div (badge-row, padding-4, top, flex gap-2)
  │  ├─ Badge (Industry, bg-blue-100, text-blue-900, text-xs)
  │  └─ Badge (optional Service, ähnlich)
  └─ div (highlights, padding-4, border-top)
     └─ 1-2 KPI-Highlights als kleine Rows (Metrik-Name + Prozentuale Verbesserung, z.B. "+150% Traffic")

PROPS:
interface CaseStudyCardProps {
  slug: string;
  title: string;
  client: string;
  industry: string;
  highlights: { label: string; value: string }[]; // z.B. [{label: "Traffic", value: "+150%"}]
}

ZIEL: Klickbar, verlinkt zu /referenzen/[slug].

ULTRATHINK-TASK B6: Case Study Detailseite
───────────────────────────────────────────────────────────────────────────────────────────────────────

Erstelle ODER überarbeite /app/referenzen/[slug]/page.tsx als echte Seite.

STRUKTUR:

1. HERO (60vh, bg-gradient, primary color)
   ├─ Großer Client-Name
   ├─ Projekt-Titel
   └─ Industry-Badge + Publikations-Datum

2. CHALLENGE-SEKTION
   ├─ Überschrift: "Herausforderung"
   ├─ Challenge-Text aus Phase-2 Data (case-studies.ts, challenge Feld)
   └─ Optional: Bullet Points extrahiert oder aus strukturiertem Feld

3. LÖSUNG-SEKTION
   ├─ Überschrift: "Lösung"
   ├─ Solution-Text aus Phase-2 Data
   └─ Optional: Verwendete Services als Badge-Reihe

4. ERGEBNISSE-SEKTION (KPI-Grid)
   ├─ Überschrift: "Ergebnisse"
   ├─ Grid (2 Spalten Mobile, 3-4 Desktop) aus KPI-Cards
   │  └─ Jede Card: Metrik-Name (top), Vorher-Wert (grau), Pfeil/Richtung (grün), Nachher-Wert (bold), Prozentuale Verbesserung (bold, primary color)
   └─ Beispiel: "Website Performance" | 45ms → 12ms | +73%

5. TECHNOLOGIEN
   ├─ Überschrift: "Technologien & Tools"
   ├─ Badge-Reihe (flex flex-wrap gap-2)
   │  └─ Jedes Badge: bg-gray-200, text-sm, border-radius-md
   └─ Aus case-studies.ts, technologiesUsed Array

6. CLIENT-TESTIMONIAL (Optional)
   ├─ Falls testimonialId vorhanden: getTestimonials() filtern, TestimonialCard laden
   ├─ Überschrift: "Was der Client sagt"
   └─ TestimonialCard (variant="featured" oder "standard")

7. CTA-SEKTION (vor Footer)
   ├─ Überschrift: "Ähnliches Projekt starten?"
   ├─ Button: "Anfrage stellen" → /anfrage
   └─ Kurzer Beschreibungstext

IMPLEMENTIERUNG:
export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  if (!caseStudy) return notFound();
  
  const testimonial = caseStudy.testimonialId ? getTestimonialById(caseStudy.testimonialId) : null;
  
  return ( ... JSX ... );
}

ZIEL: Seite ist vollständig funktional, zeigt alle Daten korrekt, keine Errors.

ULTRATHINK-TASK B7: Referenzen-Übersicht
───────────────────────────────────────────────────────────────────────────────────────────────────────

Erstelle ODER überarbeite /app/referenzen/page.tsx.

LAYOUT:
1. Hero: "Unsere Referenzen" oder ähnlich.
2. Optional Filter-Bar (nach Industry, Service).
3. Grid aus CaseStudyCards (3 Spalten Desktop, 2 Tablet, 1 Mobile).
4. "Featured" Case Study prominent (erste Position, größer oder spezial hervorgehoben).

IMPLEMENTIERUNG:
export default function ReferenzPage() {
  const caseStudies = getCaseStudies();
  
  return (
    <div>
      <HeroSection title="Unsere Referenzen" ... />
      <TestimonialGrid ... />
      <CaseStudyGrid data={caseStudies} />
      <ContactCTA />
    </div>
  );
}

ZIEL: Übersichtsseite ist ansprechend, verlinkt zu Detailseiten.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ BLOCK C — STATISTIKEN, BADGES & LOGOS ═══

ULTRATHINK-TASK C8: Stats Section
───────────────────────────────────────────────────────────────────────────────────────────────────────

Erstelle /components/sections/StatsSection.tsx.

Layout: 4 Spalten (Desktop), 2x2 Grid (Tablet), 1 Spalte (Mobile). Gap 6, padding 12.

DATEN aus /lib/data/company.ts (falls nicht existent, erstelle):
- yearFounded: number (z.B. 2015)
- totalProjects: number (z.B. 127)
- customerSatisfaction: number (z.B. 96, %)
- teamSize: number (z.B. 14)

STAT-CARD STRUKTUR (pro Stat):
div (card, border, rounded-lg, padding-8, text-center)
  ├─ Optionales Icon (12x12, oben, margin-bottom-4)
  ├─ h3 (Große Zahl, text-4xl font-bold, primary color)
  │  └─ Jahrerfahrung: aktuelles Jahr - yearFounded
  │  └─ Projekte: totalProjects
  │  └─ Kundenzufriedenheit: customerSatisfaction + "%"
  │  └─ Team: teamSize + " Personen"
  └─ p (Label, text-sm text-gray-600, margin-top-2)

ANIMATIONEN: Keine Counter-Animation hier (kommt in Phase 7). Statische Zahlen jetzt.

ZIEL: StatsSection funktioniert, ist responsive, Daten sind korrekt.

ULTRATHINK-TASK C9: Trust Badges
───────────────────────────────────────────────────────────────────────────────────────────────────────

Erstelle /components/ui/TrustBadgeRow.tsx.

BADGES (als Array, statisch):
1. SSL-gesichert (Icon: Lock)
2. DSGVO-konform (Icon: Shield + Checkmark)
3. Google-Bewertung 4.9/5 (Icon: Star, Text: "4.9/5 Sterne")
4. Antwort in 24h (Icon: Clock, Text: "24h Antwort")

LAYOUT:
div (container, flex justify-center gap-8, flex-wrap, margin-y-8)
  └─ Jedes Badge:
     div (flex items-center gap-2, padding-3, border rounded-lg, bg-gray-50)
       ├─ Icon SVG (1rem)
       └─ span (text-xs text-gray-700)

VERWENDUNG:
- Über Kontaktformular (/anfrage)
- Im Footer
- Optional auf Homepage vor CTA

ZIEL: Trust-Signale sind sichtbar, konsistent gestylt.

ULTRATHINK-TASK C10: Client Logo Leiste
───────────────────────────────────────────────────────────────────────────────────────────────────────

Erstelle /components/sections/ClientLogos.tsx.

LABEL: "Vertrauen uns" oder "Unsere Kunden"

LOGOS:
Option A: Falls echte Logos existent: Bilder laden (z.B. /public/logos/client-1.png).
Option B: Platzhalter-Boxes mit Firmennamen aus getCaseStudies(). Jede Box: bg-gradient, Firmennamen zentriert, text-sm.

LAYOUT (Desktop): Grid oder Flex-Reihe, 6-8 Logos sichtbar, scroll horizontal auf Mobile.
HOVER-EFFEKT: Logos in Grayscale, Hover → Farbe (filter: grayscale(0)).

RESPONSIVE:
- Mobile: overflow-x-auto, snap-scroll
- Desktop: grid grid-cols-6, gap-8

ZIEL: Logo-Leiste ist ansprechend, responsive, Logos sind sichtbar oder Platzhalter vorhanden.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ BLOCK D — INTEGRATION & VALIDATION ═══

ULTRATHINK-TASK D11: Homepage Trust Integration
───────────────────────────────────────────────────────────────────────────────────────────────────────

Überarbeite /app/page.tsx (Homepage).

NEUE REIHENFOLGE:
1. Hero Section
2. Services Overview (ServiceCard Grid)
3. StatsSection
4. TestimonialCarousel
5. ClientLogos
6. Blog Section (falls existent)
7. CTA Section (Kontakt)
8. Footer

IMPLEMENTIERUNG:
import StatsSection from '@/components/sections/StatsSection';
import TestimonialCarousel from '@/components/sections/TestimonialCarousel';
import ClientLogos from '@/components/sections/ClientLogos';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <TestimonialCarousel />
      <ClientLogos />
      <BlogSection />
      <CTASection />
    </main>
  );
}

ZIEL: Homepage zeigt alle Trust-Elemente, Flow ist überzeugend.

ULTRATHINK-TASK D12: Cross-Referencing
───────────────────────────────────────────────────────────────────────────────────────────────────────

Service-Detailseiten (/leistungen/[slug]):
- Laden getTestimonialsByService(slug) → TestimonialCarousel oder Grid
- Laden getCaseStudiesByService(slug) → CaseStudyCard Grid
- Funktionen in Phase 2 Data prüfen/erstellen

Case Study Detailseiten (/referenzen/[slug]):
- Verlinken zum genutzten Service (/leistungen/[serviceSlug])
- Zeigen Client-Testimonial (falls testimonialId vorhanden)
- Testimonial verlinkt zurück zur Service-Seite

Testimonials:
- Verlinken zum bewerteten Service (/leistungen/[serviceSlug])

GETTER PRÜFEN & ERWEITERN:
□ getCaseStudiesByService(serviceSlug: string): Filtert nach serviceSlug
□ getTestimonialsByService(serviceSlug: string): Filtert nach serviceSlug
□ getCaseStudyBySlug(slug: string): Gibt einzelne Case Study zurück
□ getTestimonialById(id: string): Gibt einzelnes Testimonial zurück

ZIEL: Alle Verlinkungen funktionieren, keine 404-Errors, Daten sind korrekt.

ULTRATHINK-TASK D13: Visueller Konsistenz-Check
───────────────────────────────────────────────────────────────────────────────────────────────────────

TAILWIND-KONFIGURATION KONSISTENZ:
□ Alle Cards: rounded-lg (oder -xl für featured)
□ Alle Schatten: shadow-sm (standard), shadow-md (hervorgehoben)
□ Padding-Standard: padding-6 (cards), padding-8 (sections), padding-12 (hero/featured)
□ Gap-Standard: gap-6 (grid), gap-4 (inline)
□ Primary Color: Konsistente Verwendung für Akzente (CTAs, Highlights, Icons)
□ Border Color: consistent-gray-200
□ Text Colors: gray-900 (headlines), gray-700 (body), gray-600 (secondary)

KOMPONENTEN-AUDIT:
□ TestimonialCard (alle Varianten): gleiche Padding, Border, Shadow
□ CaseStudyCard: gleiche Struktur, Hover-Effect
□ StatsSection Cards: gleiche Größe, Padding, Spacing
□ TrustBadges: gleiche Icons-Größe, Padding, Border
□ ClientLogos: gleiche Höhe, Spacing, Filter-Effects

ZIEL: npm run build, visueller Inconsistencies? Zero.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ ATOMIC VALIDATION ═══

npm run build
─────────────────────────────────────────────────────────────────────────────────────────────────────────

□ ZERO Typescript Errors
□ ZERO Styling Breakages
□ Alle Seiten laden: / | /leistungen/[slug] | /referenzen | /referenzen/[slug]
□ Alle Komponenten existent: TestimonialCard, TestimonialCarousel, TestimonialGrid, CaseStudyCard, StatsSection, TrustBadgeRow, ClientLogos
□ Alle Daten-Getter funktionieren: getTestimonials(), getCaseStudies(), getTestimonialsByService(), getCaseStudiesByService()
□ Responsive Design: Mobile | Tablet | Desktop (testen in Browser DevTools)
□ Keine Console-Errors, Keine Warnings

FUNKTIONAL-TESTS:
─────────────────────────────────────────────────────────────────────────────────────────────────────────

□ TestimonialCarousel auto-rotiert, swipebar, Dots funktionieren
□ Service-Seite zeigt relevante Testimonials (nicht alle)
□ Case Study Detailseite lädt alle Daten (Challenge, Solution, Results, Testimonial)
□ Referenzen-Grid responsive, Cards verlinken korrekt
□ Homepage zeigt Stats, Carousel, Logos in richtiger Reihenfolge
□ TrustBadges sichtbar über Kontaktformular
□ ClientLogos responsive, Grayscale-Hover funktioniert

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ SELF-OPTIMIZING LOOP & HANDOFF ═══

Nach Phase 6 Completion:

1. UPDATE .ai-expansion-context.md:
   - Phase 6 Status: ✓ Complete
   - Trust Components: ✓ Testimonials, Case Studies, Stats, Badges, Logos
   - Data Getters: ✓ Service-filtered, Slug-referenced
   - Homepage Integration: ✓ All sections stacked
   - Cross-Referencing: ✓ Services ↔ Testimonials ↔ Case Studies

2. UPDATE .expansion-state.md:
   - Completed Tasks: A1-A4, B5-B7, C8-C10, D11-D13
   - Data Structure Lock: Phase 2 testimonials.ts, case-studies.ts finalized
   - Components Deployed: 10 neue/erweiterte Komponenten
   - Next: Phase 7 — Interaktive Module (Calculator, Filter, Search)

3. COMMIT:
   git add . && git commit -m "Phase 6: Trust & Social Proof — Testimonials, Case Studies, Stats, Logos (13 ULTRATHINK-TASKS)"

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

═══ COMPLIANCE CHECKLIST (20+) ═══

PROJECT QUALITY GATES

□ TypeScript strict: tsconfig.json compiles clean
□ No external CMS: All data in /lib/data/*.ts
□ No Sentry: Zero monitoring dependencies
□ No Dark Mode: Light theme only
□ Formspree Only: No SendGrid, Mailgun, custom SMTP
□ Calendly Only: No Stripe, Acuity, custom bookings
□ No Zustand/Redux: State via useState, useEffect
□ React 19+: Latest features supported
□ Next.js 15+ App Router: No pages/, no getServerSideProps
□ Client Components: "use client" explicit, necessary
□ Tailwind CSS: No hardcoded colors, pure utility classes
□ SVG Icons: Inline, no external libraries (react-icons, heroicons)
□ Zero console.errors: All runtime errors caught
□ Zero console.warnings: Clean logs
□ Responsive: Tested on 320px, 768px, 1024px, 1440px
□ Accessibility: alt-text, semantic HTML, color contrast
□ Performance: LCP < 2.5s, CLS < 0.1, FID < 100ms
□ SEO: meta tags, og:images, structured data (Phase 8)
□ Security: No inline JS, CSP headers, HTTPS only
□ Code Quality: Prettier formatted, ESLint passing
□ Git Status: Clean working tree, all changes committed

═══════════════════════════════════════════════════════════════════════════════════════════════════════════

CLOSING

Phase 6 ist abgeschlossen. Die Website ist nun eine echte Vertrauensmaschine: Testimonials mit Sternebewertungen, Case Studies mit messbaren KPIs, Statistiken über Unternehmen-Erfolge, Trust-Badges, Client-Logos. Alles verkabelt mit Phase-2 Daten, alles responsive, alles funktional.

Phase 7 baut interaktive Module: Kalkulator (Projekt-Budget-Schätzer), Filter (nach Service, Branche), Such-Funktionalität (Case Studies, Blog). Die Vertrauenskomponenten aus Phase 6 sind SSOT (Source of Truth) für alle folgenden Phasen.

HANDOFF AN PHASE 7: Phase-6-Komponenten sind frozen. Nur Phase-2 Daten (testimonials.ts, case-studies.ts) können manuell erweitert werden. Code ist SSOT.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
