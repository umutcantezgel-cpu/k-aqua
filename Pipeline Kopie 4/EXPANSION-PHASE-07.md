Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die Website mit echten interaktiven Modulen zum Leben zu erwecken. Ein funktionierender Projektkosten-Rechner, URL-synchronisierte Filter für Services und Blog, eine Client-seitige Suchfunktion, animierte Counter, Scroll-Reveal-Animationen und eine Tab-Komponente — alles echte Client Components die FUNKTIONIEREN. Dies ist Expansion-Phase 7 von 10 der 10X Foundation Expansion Pipeline.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
PHASE 7 — INTERACTIVE MODULES: RECHNER, FILTER, SUCHE & DYNAMISCHE SEKTIONEN
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

TECH STACK
─────────────────────────────────────────────────────────────────────────────────────────────────────────
• Runtime: Next.js App Router (React 19, TypeScript Strict)
• Styling: Tailwind CSS v4
• Forms: Formspree (EmailJS-Alternative gestrichen)
• Kalender: Calendly Widget (Embed nur, keine Integration)
• State: React Hooks (useState, useEffect, useCallback, useRef)
• Performance: Code Splitting, Client-only mit "use client"
• Observables: IntersectionObserver (native, kein Polyfill nötig)
• VERBOTEN: CMS, Sentry, Dark Mode, externe Analytics-Library

AUSGANGSLAGE
─────────────────────────────────────────────────────────────────────────────────────────────────────────
Phase 6 lieferte Struktur. Seiten sind statisch. Nutzer kann nicht interagieren.
Phase 7 macht alles lebendig: Preisrechner kalkuliert in Echtzeit, Filter ändern Ansichten sofort,
Suche durchsucht lokal, Counter zählen hochgerissen, Tabs wechseln, Accordions auf/zu.
Ziel: 100% funktionale User Experience ohne Backend-Komplexität.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE EXPANSION-PROTOKOLL
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

1. Alle neuen Dateien bekommen "use client" am Header wenn sie Client-interaktiv sind
2. Keine Änderung an Phase-6-Komponenten außer: import von Interaktiven in bestehende Seiten
3. Alle Filter und Suche nutzen useSearchParams + useRouter → URLs sind teilbar
4. Performance-Budget: Kein Modul über 20KB gzipped
5. Accessibility: ARIA-Labels, Keyboard-Navigation, prefers-reduced-motion respektieren
6. Code = SSOT: .ai-expansion-context.md und .expansion-state.md als Quelle der Wahrheit

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
STEP 0: SYNC & DISCOVERY
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

Konsultiere Phase-2 (Services mit Kategorien), Phase-3 (Komponenten-Katalog), Phase-6 (bestehende Seiten).
Stelle sicher: /lib/data/services.ts, /lib/data/blog.ts, /lib/data/faq.ts existieren und sind aktuell.
Wenn nicht: Erstelle minimal-Dummys damit Komponenten compilieren.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK A — PROJEKT-KOSTEN-RECHNER
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

TASK 1: Calculator-Komponente
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: src/components/interactive/ProjectCalculator.tsx

"use client" am Top. Multi-Step-Wizard:

Step 1 — Service-Typ auswählen
  Optionen: Webdesign, E-Commerce, App-Entwicklung, Redesign, Maintenance (aus Phase-2)
  Darstellung: Große klickbare Karten mit Icon (Tailwind Bild oder SVG-Icon)

Step 2 — Projekt-Umfang
  Optionen: Klein (Landing, 3-5 Seiten), Mittel (Corporate, 10-15 Seiten), Groß (Portal, 30+ Seiten)
  Beschreibung unter jeder Option in kleinem Text

Step 3 — Zusatz-Features (Checkboxes, mehrfach wählbar)
  SEO Optimierung, Analytics Setup, Blog System, Mehrsprachigkeit, E-Commerce Integration,
  SSL & Sicherheit, Performance Audit

Step 4 — Zeitrahmen
  Standard (4-8 Wochen, Faktor 1.0), Express (2-4 Wochen, Faktor 1.4)

Ergebnis-Anzeige:
  "Geschätzter Investitionrahmen: ab 2.400 € bis 4.800 €"
  Plus Text: "Basis Webdesign Projekt (Standard Umfang)" + geselektete Features aufgelistet

State Management: Step via useState, selectedOptions als Objekt
Navigation: "Weiter" und "Zurück" Buttons (Zurück nur wenn Step > 1)
Preimatrix: TypeScript-Konstante am Komponenten-Ende

TASK 2: Preisberechnung (Detaillierte Logik)
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Die Kalkulation funktioniert so:

BASE_PRICES (in EUR, pro Service):
  Webdesign: 2400
  E-Commerce: 3500
  App-Entwicklung: 5000
  Redesign: 1800
  Maintenance: 800

SCOPE_MULTIPLIER:
  Klein: 1.0
  Mittel: 1.8
  Groß: 3.0

FEATURE_ADDITIONS (je Feature, wird addiert NACH Multiplikation):
  SEO: +400
  Analytics: +200
  Blog: +300
  Mehrsprachigkeit: +600
  E-Commerce: +1200
  SSL/Sicherheit: +150
  Performance Audit: +250

TIMELINE_FACTOR:
  Standard: 1.0
  Express: 1.4 (schlägt auf den FINALEN Betrag auf)

BERECHNUNG (Pseudo-Code):
  basePrice = BASE_PRICES[selectedService]
  baseMult = basePrice × SCOPE_MULTIPLIER[selectedScope]
  withFeatures = baseMult + SUM(FEATURE_ADDITIONS[selectedFeatures])
  timeline = withFeatures × TIMELINE_FACTOR[selectedTimeline]
  minimum = timeline × 0.8
  maximum = timeline × 1.2
  display = `ab ${minimum.toFixed(0)} € bis ${maximum.toFixed(0)} €`

Beispiel: Webdesign, Mittel, +SEO +Analytics, Express
  = (2400 × 1.8) + 400 + 200 = 4720
  × 1.4 (Express) = 6608
  min = 5286, max = 7930
  Anzeige: "ab 5.286 € bis 7.930 €"

TASK 3: Calculator-Integration
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Primärer Ort: /app/anfrage/page.tsx (oberhalb des Formspree-Formulars)
Optionaler Ort: /app/preisrechner/page.tsx (eigene "Preisrechner" Seite, einfach nur Calculator)

Nach Ergebnis-Anzeige: CTA-Button
  "Jetzt unverbindliches Angebot anfordern"
  Linkt zu /anfrage mit URL-Parameter: ?service=webdesign (basierend auf Auswahl)
  Formspree-Formular kann dann in hidden field vorausfüllen (optional)

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK B — FILTER & SUCH-SYSTEME
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

TASK 4: Service-Filter
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: src/components/interactive/ServiceFilter.tsx

"use client" am Top. Props: services (array aus /lib/data/services.ts)

UI:
  Horizontal Tabs/Buttons: "Alle" + kategorien aus Services
  Z.B. Alle | Webdesign | E-Commerce | Entwicklung | Support

State: activeCategory via useState

Logik beim Klick:
  activeCategory setzen
  Gefilterte Services anzeigen (filter() auf array)
  URL aktualisieren: useRouter + useSearchParams
    z.B. ?kategorie=webdesign
  Browser Back/Forward funktioniert (Kategorie wird wiederhergestellt)

Animation:
  Services-Container: CSS transition (opacity 150ms, transform 150ms)
  Beim Filter-Wechsel: opacity-0 translate-y-4 kurz, dann opacity-100 translate-y-0
  Tailwind: transition-all duration-150

Service-Karte (aus Phase 6 oder neue):
  Icon, Titel, Kurzbeschreibung, "Mehr erfahren" Link

TASK 5: Blog-Filter & Tags
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: src/components/interactive/BlogFilter.tsx

"use client" am Top. Props: posts (array aus /lib/data/blog.ts)

UI:
  Kategorie-Tabs (horizontal): Alle | Webdesign | Marketing | Entwicklung | ...
  Tags (unter Kategorie): Badge-Buttons in Grau/Blau, klickbar
    Z.B. [SEO] [Performance] [React] [UX Design]

State: activeCategory, activeTags (Array, mehrfach auswählbar)

Logik:
  Filter mit BEIDEN Bedingungen (AND-Logik):
    posts.filter(p => (activeCategory === 'Alle' || p.category === activeCategory) &&
                      (activeTags.length === 0 || activeTags.every(tag => p.tags?.includes(tag))))
  URL: ?kategorie=webdesign&tags=seo,performance
  useRouter + useSearchParams für Sync

Sortierung:
  Dropdown: "Neueste zuerst" (default), "Älteste zuerst"
  State: sortOrder
  Sortierung angewendet NACH Filter

Animation: Wie ServiceFilter (transition-all)

TASK 6: Suchfunktion
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: src/components/interactive/SearchBar.tsx

"use client" am Top. Props: optional (placeholder anpassbar)

UI:
  Input-Feld + Lupen-Icon (rechts in Input, nicht als eigener Button)
  Placeholder: "Suche Services, Blog, FAQ..."
  Maximale Breite: Responsive (100% auf Mobile, max-w-md auf Desktop)

Suche (Client-seitig, kein API):
  Durchsucht: /lib/data/services.ts, /lib/data/blog.ts, /lib/data/faq.ts
  Felder: title, description, content, tags
  Case-insensitive

Debounce:
  useCallback + useRef für Debounce Timer
  500ms (nicht 300ms, zu aggressiv)
  Auf "change" Event triggern

Ergebnis-Dropdown:
  Unter dem Input, maximal 10 Ergebnisse, gruppiert nach Typ:
    "Services (2)"
    • Service Name — beschreibung
    • Service Name — beschreibung
    "Blog (3)"
    • Post Titel
    "FAQ (1)"
    • Frage

  Hover: Hintergrund leicht grau
  Click: Navigiert zu Detail-Seite (/leistungen#service-id, /blog/[slug], /faq#faq-id)

Keyboard:
  Enter: Navigiert zum ersten Ergebnis
  Escape: Dropdown schließt
  Arrow Down/Up: Durch Ergebnisse navigieren (optional, aber schön)

Logik:
  State: searchTerm, results
  useEffect mit Debounce auf searchTerm
  Wenn searchTerm.length < 2: keine Suche (clearTimeout)

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK C — ANIMATIONEN & DYNAMISCHE ELEMENTE
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

TASK 7: Animierter Counter
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: Erweitere StatsSection aus Phase 6 oder erstelle /components/interactive/AnimatedCounter.tsx

"use client" am Top.

Logik:
  IntersectionObserver auf Container
  Wenn sichtbar (threshold 0.3): Animation starten
  Nur 1× (Flag: hasAnimated = useRef(false))
  requestAnimationFrame-Loop: Von 0 bis targetValue hochzählen
  Dauer: 2 Sekunden
  Easing: ease-out (cubic-bezier(0.25, 0.46, 0.45, 0.94))

Props:
  target (Zielzahl): number
  label: string
  suffix: string (z.B. "+", "%", "€")

Rendering:
  <div className="text-5xl font-bold">{displayValue}</div>
  <p className="text-gray-600">{label}</p>

Code-Struktur:
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          animateCounter();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animateCounter = () => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / 2000, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(target * easeOut));
      if (progress < 1) requestAnimationFrame(animate);
    };
    animate();
  };

RESPEKTIERE: prefers-reduced-motion
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setDisplayValue(target); // Sofort auf Ziel springen
  }

TASK 8: Scroll-Reveal
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: src/components/interactive/ScrollReveal.tsx

"use client" am Top.

Props:
  children: ReactNode
  stagger: boolean (optional, default false)
  delay: number (optional, ms zu Verzögerung pro Kind)

Logik:
  Wrapper um children
  IntersectionObserver mit threshold 0.1
  Initial: opacity-0 translate-y-4
  Bei Sichtbarkeit: opacity-100 translate-y-0
  Transition: transition-all duration-500 ease-out

Wenn stagger=true:
  Jedes Kind bekommt einen delay (via CSS oder inline style)
  1. Kind: delay-0
  2. Kind: delay-100
  3. Kind: delay-200
  etc.

Code (vereinfacht):
  <div ref={observerRef} className={`transition-all duration-500 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  }`}>
    {React.Children.map(children, (child, idx) => (
      <div style={{ transitionDelay: stagger ? `${idx * delay}ms` : '0' }}>
        {child}
      </div>
    ))}
  </div>

Verwendung:
  <ScrollReveal stagger delay={100}>
    <div>Element 1</div>
    <div>Element 2</div>
  </ScrollReveal>

TASK 9: Tab-Komponente
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: src/components/interactive/Tabs.tsx

"use client" am Top.

Props:
  tabs: Array<{ label: string; content: ReactNode }>
  defaultActiveTab: number (optional, default 0)

State: activeTab via useState

UI:
  Tab-List (horizontal):
    Buttons mit label
    Active Tab: Border-Bottom (3px) in Primary-Color, Text bold
    Inactive: Gray-500, kein Border

  Tab-Panel:
    Nur aktiver Content wird angezeigt
    Smooth Fade-In (opacity transition 200ms)

Keyboard Navigation:
  Arrow Left: Vorheriger Tab
  Arrow Right: Nächster Tab
  Home: Erster Tab
  End: Letzter Tab

ARIA:
  <div role="tablist">
    <button role="tab" aria-selected={isActive} aria-controls={`panel-${idx}`}>
  <div role="tabpanel" id={`panel-${idx}`} aria-labelledby={`tab-${idx}`}>

CSS Klassen:
  active: border-b-4 border-blue-600 font-semibold
  inactive: text-gray-500 hover:text-gray-700

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK D — INTEGRATION & VALIDATION
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

TASK 10: FAQ-Seite mit Accordion
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Datei: /app/faq/page.tsx (oder erweitere existierende /app/faq/page.tsx)

Struktur:
  <header> mit Titel und Beschreibung
  <SearchBar /> zum Durchsuchen
  Accordion-Liste mit FAQ-Items
  Gruppiert nach Kategorie (von /lib/data/faq.ts)

Accordion-Komponente (aus Phase 3 oder neu):
  "use client"
  Props: items Array mit question, answer, category, id
  State: expandedId (welcher ist offen)
  Click: Toggle expandedId
  Animation: max-height 300ms ease-in-out

Search-Integration:
  SearchBar filtert FAQ-Items
  Filter-Logik: question.includes(searchTerm) || answer.includes(searchTerm)
  Gefilterte Items anzeigen

TASK 11: Interaktive Module auf Seiten verteilen
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Ort der Module:

  /app/leistungen (Services) → ServiceFilter einbinden
    `<ServiceFilter services={allServices} />`
    
  /app/blog → BlogFilter einbinden
    `<BlogFilter posts={allBlogPosts} />`
    
  /app/anfrage → ProjectCalculator einbinden (über oder neben Formular)
    `<ProjectCalculator />`
    
  /components/layout/Header.tsx oder neues /app/header-search.tsx
    → SearchBar einbinden (global abrufbar)
    
  /app/home (oder bestehende Landing) → StatsSection mit AnimatedCounter
    → ScrollReveal um Hero, Features, Testimonials wrappen
    
  /app/services/[slug] oder FAQ → Tabs für verschiedene Abschnitte

TASK 12: Performance-Check
───────────────────────────────────────────────────────────────────────────────────────────────────────────
Anforderungen:
  ✓ Alle Client-Komponenten haben "use client" am Top
  ✓ Lazy-Loading: ProjectCalculator, ServiceFilter, BlogFilter = dynamische Imports mit React.lazy
  ✓ Bundle-Size pro Modul unter 20KB gzipped
  ✓ IntersectionObserver native (kein Polyfill)
  ✓ prefers-reduced-motion respektiert (Animationen deaktiviert wenn User eingestellt)
  ✓ Keine Render-Loops oder N+1 Queries (alles lokale In-Memory Suche)
  ✓ TypeScript strict mode: Keine any-Types

Lazy-Loading Beispiel:
  const ProjectCalculator = dynamic(
    () => import('@/components/interactive/ProjectCalculator'),
    { loading: () => <div>Lädt...</div> }
  );

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
ATOMIC VALIDATION CHECKLIST
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

□ ProjectCalculator.tsx kompiliert ohne Fehler
□ Preismatrix ist hardcoded und korrekt (alle Services, Scopes, Features)
□ Preis-Range wird angezeigt (Min/Max Format stimmt)
□ ServiceFilter filtert und URL-Sync funktioniert
□ BlogFilter mit kombinierten Kategorien+Tags-Filter
□ SearchBar durchsucht alle 3 Datenquellen, Debounce funktioniert
□ AnimatedCounter zählt nur 1× hoch wenn sichtbar
□ ScrollReveal animiert bei Scroll-In, respektiert prefers-reduced-motion
□ Tabs-Komponente: Keyboard (Arrow, Home, End) funktionieren
□ FAQ-Seite mit Accordion und Search-Filter
□ Calculator auf /anfrage erreichbar
□ ServiceFilter auf /leistungen erreichbar
□ BlogFilter auf /blog erreichbar
□ SearchBar im Header/global erreichbar
□ Alle Module unter 20KB gzipped (nextra analysis)
□ Keine "any" Types in TypeScript
□ ARIA-Labels auf Tabs, Accordion, Buttons
□ Mobile-Responsiv: Filter-Buttons stacken, SearchBar resize
□ Dark Mode: NICHT implementiert (explizit ausgeschlossen)
□ Sentry/Analytics: NICHT eingebunden
□ Formspree-Integration auf /anfrage funktionstüchtig
□ Calendly Widget integriert (embed link, nicht API)

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP & HANDOFF
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

Nach Completion:
  1. Update .ai-expansion-context.md: "Phase 7 ✓ COMPLETE — Alle interaktiven Module live"
  2. Update .expansion-state.md: Aktuelle Komponenten-Liste mit Import-Paths
  3. NextPhase Pointer: "Phase 8 beginnt SEO & Metadata Infrastruktur"
  4. Code ist SSOT: Komponenten sind selbsterklärend durch Props-Types und interne Logik

═══════════════════════════════════════════════════════════════════════════════════════════════════════════
PHASE 7 COMPLETE ✓
═══════════════════════════════════════════════════════════════════════════════════════════════════════════

Live-Module mit 0 Backend-Abhängigkeit. Interaktivität ist CPU-seitig, Performance-optimal, SEO-neutral.
Nutzer kann Preise rechnen, Services filtern, Blog durchsuchen, Zahlen hochzählen sehen, Tabs wechseln.
Alle Features gebunden an Phase-2 Daten (Services, Blog, FAQ) → bei Daten-Update alle Module refreshed.

Nächste Phase: Phase 8 — SEO, Meta-Tags, Open Graph, Structured Data (JSON-LD) für alle Seiten.
