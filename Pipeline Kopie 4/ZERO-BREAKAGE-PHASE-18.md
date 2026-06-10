Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, das Growth-Verhalten, Personalisierungs-Mechanismen und Conversion-Optimierungen des Systems zu verstärken.

ZERO-BREAKAGE PROTOCOL

5 PILLARS:
1. READ-BEFORE-WRITE: Alle Änderungen müssen vorherige Versionen lesen und verstehen
2. SURGICAL INJECTION: Minimale, gezielte Codeänderungen ohne Umstrukturierung
3. ATOMIC VALIDATION: npm run build && npm run lint && npx tsc --noEmit (JEDER commit)
4. STATE HANDOFF: Implizite Zustandsübergabe zwischen Tasks über Dokumentation
5. SELF-OPTIMIZING LOOP: Jede Task validiert sich selbst gegen Vorgänger

TECH-STACK CONSTRAINTS:
- Next.js mit React, TypeScript Strict, Tailwind CSS
- FORMSPREE + CALENDLY: einzige externe Integrationen
- VERBOTEN: Headless CMS, externe AI APIs, Sentry, Newsletter, i18n
- GOLDEN RULE: Code ist Single Source of Truth (SSOT)

═══════════════════════════════════════════════════════════════════

STEP 0: KONTEXT-SYNC UND PRE-FLIGHT-DISCOVERY

Lese alle existierenden Hooks, Middleware, GA4-Integration und Segment-Daten.
Verifiziere: visitor_type Cookie existiert, x-visitor-segment Header wird gesetzt.
Prüfe src/data/ auf vorhandene metrics.json und content-relations.ts.
Alle Komponenten müssen Server-Side-Rendering (middleware header) nutzen, um Flash of Unstyled Content zu vermeiden.

═══════════════════════════════════════════════════════════════════

BLOCK A — NUTZER-SEGMENTIERUNG UND BEHAVIORAL TARGETING

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 1: NUTZER-SEGMENT-ENGINE

Entwickle ein robustes Segmentierungs-System mit 6 Zielgruppen:
- new-visitor: Erstes Mal auf der Site (visitor_type=new, gesetzt im Middleware)
- returning-explorer: Rückkehrender Nutzer ohne Anfrage (visitor_type=returning, visited_pages >= 3)
- service-interested: Hat Service-Page besucht (entry_type=service_click)
- high-intent: Auf Kontakt/Calendly-Seite (entry_type=conversion_funnel)
- converted: Hat bereits kontaktiert (conversion_status=contacted)
- blog-reader: Hauptsächlich Blog-Content (entry_type=blog, visited_pages >= 5 blog)

Implementierung:
- Middleware (src/middleware.ts): Setze x-visitor-segment Header basierend auf Cookies
- Hook (src/hooks/useVisitorSegment.ts): Client-seitige Segmentierung mit Priority Rules
- GA4 Integration: Segment als custom_segment Dimension per event
- LocalStorage: Segment in userData Object speichern
- Validierung: Segment muss immer gesetzt sein, Default = new-visitor

Priority-Logik: converted > high-intent > service-interested > returning-explorer > blog-reader > new-visitor

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 2: PERSONALISIERTE INHALTE PRO SEGMENT

Erstelle Personalisierungs-Mapping für jeden Segment:

NUTZER-SEGMENT → HERO-HEADLINE (Beispiele):
- new-visitor: "Professionelle Webentwicklung für Ihr Geschäft"
- returning-explorer: "Willkommen zurück! Sehen Sie unsere neuen Services"
- service-interested: "[SERVICE_NAME] — Speziell für Ihr Projekt"
- high-intent: "Starten Sie noch heute. Kostenlose Beratung in 24h"
- converted: "Danke! Lesen Sie Case Studies ähnlicher Projekte"
- blog-reader: "Case Study: Von Strategie zur Realität"

NUTZER-SEGMENT → CTA-TEXT:
- new-visitor: "Kostenlose Anfrage stellen"
- returning-explorer: "Jetzt kontaktieren"
- service-interested: "Service anfragen"
- high-intent: "Termin buchen (kostenlos)"
- converted: "Nächstes Projekt planen"
- blog-reader: "Ähnliche Projekte sehen"

NUTZER-SEGMENT → TRUST-SIGNALS:
- new-visitor: "Über X abgeschlossene Projekte"
- service-interested: "Y Unternehmen vertrauen uns"
- high-intent: "Z erfolgreiche Anfragen diese Woche"
- converted: "Zufriedene Kunden in Europa & USA"

Komponenten-Architektur:
- <PersonalizedHero /> mit segment prop, SSR-rendered via middleware
- <PersonalizedCta /> mit action prop (contact, calendly, blog)
- <PersonalizedTrust /> mit segment-spezifischen Metriken
- Alle Komponenten: Flash of Unstyled Content vermeiden via server middleware header

Tracking: Jede Personalisierung loggen: personalization_view event mit segment dimension

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 3: BEHAVIORAL TARGETING

Implementiere 4 verhaltensspezifische Trigger-Systeme:

1. EXIT-INTENT (Desktop only):
   - Mouse verlässt Viewport oben (pageY < 20)
   - Zeige "Verlassen Sie die Seite?" Modal mit Angebot
   - Tracking: exit_intent_trigger event
   - Respektiere: prefers-reduced-motion → keine Animation

2. SCROLL-DEPTH TRIGGERING:
   - Bei 75% Scroll-Tiefe: Kontextuales CTA Banner einblenden
   - Beispiel: "Interessiert? Jetzt unverbindlich anfragen"
   - Tracking: scroll_depth_cta_75 event
   - Vermeide: mehrfaches Triggern (sessionStorage Flag)

3. TIME-BASED ENGAGEMENT:
   - Nach 60 Sekunden aktive Nutzung (nicht idle): Soft CTA anzeigen
   - Beispiel: "Fragen? Kontaktieren Sie uns live"
   - Tracking: time_engagement_cta_60s event
   - Reset bei jedem neuen Page View

4. RETURN-VISITOR RE-ENGAGEMENT:
   - Wenn visitor_type=returning: "Willkommen zurück" Banner mit Neuerungen
   - Nur 1x pro Session zeigen (sessionStorage)
   - Tracking: return_visitor_banner event

Accessibility:
- Alle Trigger respektieren prefers-reduced-motion CSS media query
- Modals/Banners müssen dismissbar sein
- Keyboard-Navigation für alle CTAs

═══════════════════════════════════════════════════════════════════

BLOCK B — DYNAMISCHER SOCIAL PROOF UND TRUST

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 4: DYNAMISCHER SOCIAL PROOF

Baue ein Metrics-System mit echten oder klar als aspirational gekennzeichneten Zahlen:

Datenquelle: src/data/metrics.json (manuell aktualisierbar oder Formspree Webhook Counter):
{
  "projects_completed": 42,
  "active_clients": 18,
  "requests_this_week": 7,
  "satisfaction_rate": 96,
  "last_request_timestamp": "2026-03-22T14:30:00Z"
}

Komponenten:
- <DynamicCounter /> mit Props: metric (string), label (string), format (number|percentage)
- Count-Up Animation triggered via IntersectionObserver (bei Element sichtbar)
- Animationsdauer: 1.2s, Easing: ease-out

Recency-Signale:
- Berechne aus last_request_timestamp: "Letzte Anfrage vor 2 Stunden"
- Format: "vor X [Minuten|Stunden|Tagen]"
- Update: alle 60 Sekunden mit requestAnimationFrame

Regeln:
- KEINE Fake-Daten — alle Zahlen müssen real sein ODER deutlich als Ziel gekennzeichnet ("Unser Ziel: X")
- Bei fehlenden Daten: Counter als disabled zeigen mit Loading-Skelett
- Validierung: Jede Metrik hat min/max bounds (z.B. satisfaction_rate 0-100)

Webhook Integration (optional):
- Formspree kann counter_incremented Event senden
- Middleware erhöht metrics.json value um 1
- Cached für 5 Minuten zur Performance-Optimierung

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 5: INTELLIGENTE CONTENT-EMPFEHLUNGEN

Entwickle Content-Relations-Graph für contextuelle Verknüpfung:

Dateistruktur: src/data/content-relations.ts
```
export const contentRelations: ContentGraph = {
  "artikel-1": {
    related: ["artikel-3", "artikel-5", "service-web"],
    relatedScore: { "artikel-3": 0.95, "artikel-5": 0.82, "service-web": 0.88 }
  },
  "service-web": {
    related: ["artikel-1", "case-study-shop", "contact"],
    relatedScore: { ... }
  }
}
```

Komponenten:
- <RelatedContent /> mit Props: currentId (string), limit (number, default 3)
- Sortierung: Nach relatedScore absteigend
- Format: 3-spaltig auf Desktop, 1-spaltig auf Mobile
- Fallback: Wenn keine Relations → zeige "Mehr Services"

Einsatzorte:
- Am Ende von Blog-Posts: "Das könnte Sie auch interessieren"
- In Service-Pages: Cross-Service-Empfehlungen (z.B. Web → SEO)
- Segment-aware: High-intent bekommt CTA-Heavy Empfehlungen

Tracking:
- recommendation_click event: {contentId, recommendedId, rank, segment}
- Nutze für Optimierung des Relation-Graphen monatlich

═══════════════════════════════════════════════════════════════════

BLOCK C — INTERAKTIVE CONVERSION-TOOLS

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 6: INTERAKTIVE ELEMENTE

Implementiere 3 interaktive Tools:

1. PREIS-KALKULATOR:
   - Input: Projekt-Komplexität (einfach/mittel/komplex), Dauer (1-12 Monate)
   - Output: Geschätzter Preis-Range (z.B. "3.000 - 8.000 EUR")
   - Segment-Spezifik: service-interested sieht detaillierte Breakdown
   - Ende: "Lassen Sie sich individuell beraten" CTA zu Formspree
   - Tracking: calculator_start, calculator_result, calculator_cta_click

2. SERVICE-QUIZ:
   - 4 Fragen: "Was ist Ihr Hauptziel?", "Welche Technologie?", "Budget?", "Timeline?"
   - Logik: Antworten → Score pro Service (Web, SEO, App, Beratung)
   - Output: "Wir empfehlen: Web Development + SEO"
   - Ende: "Termin buchen" Button zu Calendly mit query params (service, recommendationType)
   - Tracking: quiz_start, quiz_complete, quiz_result, quiz_cta_click

3. BEFORE/AFTER SLIDER:
   - Case Study Visuals (alte Website ↔ neue Website)
   - Verwendung: src/components/CaseStudySlider.tsx
   - Mobile-friendly: Touch-Swipe oder Slider-Control
   - Tracking: case_study_slider_view, slider_interaction

Allgemeine Regeln:
- Alle Tools müssen Loading-State haben (Skeleton oder Spinner)
- Alle Ergebnisse müssen shareable sein via Social/Copy (tracking: tool_result_share)
- Error Handling: Validiere Input, zeige User-freundliche Errors
- Accessibility: Full keyboard navigation, ARIA labels

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 7: STICKY CTA UND ENGAGEMENT-TRIGGER

Baue Sticky-CTA-Bar mit Smart-Timing-Logik:

Komponente: <StickyCta />

Sichtbarkeit:
- Desktop (>=1024px): Immer in rechter Sidebar, Fixed Position
- Tablet (768-1023px): Nach 30% Scroll, Sticky Bottom Bar
- Mobile (<768px): Nach 30% Scroll, Sticky Bottom Bar

Smart-Timing:
- NICHT anzeigen wenn: Nutzer bereits Formspree besucht hat (sessionStorage flag)
- NICHT anzeigen wenn: Nutzer Calendly geöffnet hat (sessionStorage flag)
- RESET: Bei jedem neuen Tab/Window (aber nicht bei Page Reload)
- Variante pro Segment: high-intent zeigt "Jetzt buchen", new-visitor zeigt "Kostenlos anfragen"

Dismissal:
- Close-Button: X in rechter oberer Ecke
- Speichert Dismissal in sessionStorage (key: sticky_cta_dismissed)
- Nicht auf demselben Seitenbesuch erneut anzeigen
- Bei neuem Tab → erneut zeigen (neuer Session)

A/B Testing Integration:
- Props: variant (control|variant_a|variant_b)
- Tracking: sticky_cta_impression, sticky_cta_click, sticky_cta_dismiss
- Dimensionen: variant, segment, scroll_depth_on_show

═══════════════════════════════════════════════════════════════════

BLOCK D — OPTIMIERUNGSKREISLAUF

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 8: SYSTEMATISCHER OPTIMIERUNGSKREISLAUF

Etabliere monatliche Optimization-Cycle:

PROZESS:
1. Analyze (Woche 1): Sammle Daten aus GA4, Vercel Analytics, Form-Funnel, Scroll-Depth
2. Hypothesize (Woche 1-2): Identifiziere Top-3 Optimierungs-Kandidaten
3. Test (Woche 2-3): A/B Test via Phase 13 Experiment-System
4. Implement (Woche 3): Code-Änderungen, Validierung, Deployment
5. Measure (Woche 4): Resultat-Analyse, Dokumentation, nächster Zyklus

Datenquellen:
- GA4: conversion_rate, exit_rate, scroll_depth_distribution, user_journey_paths
- Vercel Analytics: Core Web Vitals (INP, CLS, LCP) pro Seite
- Form Funnel: form_view → form_start → form_submit (drop-off % pro Step)
- Rage Clicks: Detektiere doppel-klicks (sessionStorage counter, event tracking)
- Heatmaps: Scroll-Depth (Percentile Distribution), Click-Density pro Element

Dokumentation: src/data/optimization-log.ts
```
export const optimizationLog: OptimizationEntry[] = [
  {
    month: "2026-03",
    hypothesis: "Exit-Intent Modal erhöht Form-Starts um 15%",
    metric: "form_start_rate",
    baselineValue: 0.18,
    testValue: 0.23,
    improvement: "+27%",
    effort: "medium",
    status: "implemented"
  }
];
```

Priorisierung: ICE-Score für jeden Kandidaten
- Impact: Estimated % improvement in conversion rate (1-100)
- Confidence: Datengütigkeit (0-1)
- Effort: Dev effort in days (1-21)
- ICE = (Impact × Confidence) / Effort

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 9: CONVERSION-RATE-BENCHMARKS

Definiere Baseline-Metriken und Zielwerte:

CONVERSION PATHS:
1. Blog-Post → Related-Content Click: Baseline 8%, Ziel 12%
2. Homepage → Service-Seite Klick: Baseline 6%, Ziel 10%
3. Service-Seite → Form-View: Baseline 35%, Ziel 50%
4. Form-View → Form-Submit: Baseline 22%, Ziel 30%
5. Calendly-Link → Booking: Baseline 18%, Ziel 25%

Alert-Schwellen:
- Wenn conversion rate WoW um >20% fällt → Incident-Alert (GA4 Scheduled Report)
- Wenn Form-Submit-Rate unter 18% fällt → Investigate: UX-Issue oder Form-Bug?
- Wenn Calendly-Booking unter 15% fällt → A/B Test Calendly-Platzierung

Tracking je Conversion-Path:
- Jeder Step ist ein GA4 Event mit path_step Dimension
- Funnel-View: GA4 Conversion Paths Report monatlich reviewen
- Goal: Keine Step sollte >30% Abbruch haben

───────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 10: KONTEXT AKTUALISIEREN UND HANDOFF

Aktualisiere nach Phase 18 Implementierung:

Dateistruktur aktualisieren:
- src/hooks/useVisitorSegment.ts (neu)
- src/hooks/useBehavioralTrigger.ts (neu)
- src/components/PersonalizedHero.tsx (neu)
- src/components/PersonalizedCta.tsx (neu)
- src/components/DynamicCounter.tsx (neu)
- src/components/RelatedContent.tsx (neu)
- src/components/PriceCalculator.tsx (neu)
- src/components/ServiceQuiz.tsx (neu)
- src/components/StickyCta.tsx (neu)
- src/data/metrics.json (neu)
- src/data/content-relations.ts (neu)
- src/data/optimization-log.ts (neu)
- src/middleware.ts (erweitert: visitor segment header)

Kontext-Übergabe an Phase 19:
- Alle Segmente sind stabil und validiert
- Personalisierungs-System ist produktiv (0 Flash-Issues)
- Behavioral Triggers respektieren Accessibility
- Optimization-Loop läuft automatisch monatlich
- GA4 Events sind konsistent (überprüft in Phase 19)

═══════════════════════════════════════════════════════════════════

FINALE VALIDIERUNG PHASE 18

✓ Middleware setzt x-visitor-segment Header korrekt (0 undefined)
✓ useVisitorSegment() Hook funktioniert ohne Race Conditions
✓ 6 Segmente sind definiert und haben alle >80% Coverage
✓ PersonalizedHero wird Server-seitig gerendert (kein FOUC)
✓ PersonalizedCta verschiedet je Segment (QA: manuell testen)
✓ DynamicCounter zählt smooth und respektiert prefers-reduced-motion
✓ RelatedContent zeigt Recommendations mit Score >0.7
✓ PriceCalculator validiert Input und zeigt Errors korrekt
✓ ServiceQuiz Score-Logik berechnet Top-Service korrekt
✓ StickyCta dismissal speichert in sessionStorage und zeigt nicht 2x
✓ Exit-Intent Modal zeigt nur auf Desktop (prüfe viewport width)
✓ Scroll-Depth Trigger zeigt bei 75%, sessionStorage verhindert Duplikate
✓ Time-Based CTA zeigt nach 60s Activity (prüfe event logging)
✓ Return-Visitor Banner zeigt nur 1x (sessionStorage Flag)
✓ Alle GA4 Events sind namenskonform und haben correct dimensions
✓ optimization-log.ts hat mind. 3 Einträge (Template-Beispiele)
✓ Conversion-Path Metriken sind in GA4 als Goals definiert
✓ npm run build kompiliert fehlerfrei (0 TypeScript Errors)
✓ npm run lint findet keine Violations (Eslint + Prettier)
✓ npx tsc --noEmit erfolgreich (Strict Mode)

═══════════════════════════════════════════════════════════════════
