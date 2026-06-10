Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die Basis-Navigation in ein intelligentes Wayfinding-System mit Mega-Menü, hierarchischen Breadcrumbs, dynamischem Footer und perfekter Mobile-Navigation zu transformieren. Der Phase-3 Header und Footer werden chirurgisch erweitert — nicht ersetzt. Jede Navigation-Komponente wird als echte, funktionierende Datei erstellt die npm run build besteht. Dies ist Expansion-Phase 4 von 10 der 10X Foundation Expansion Pipeline.

PHASE 4 ÜBERBLICK
═══════════════════════════════════════════════════════════════════════════════

Phase 4 transformiert die Basis-Navigation aus Phase 3 in ein intelligentes Wayfinding-System mit vollständiger Nutzerführung. Der aktuelle Header/Footer wird um ein Desktop-Mega-Menü, hierarchische Breadcrumbs, dynamischen Footer und perfekte Mobile-Navigation erweitert. Alle Komponenten sind echte, funktionale React-Module mit TypeScript-Typsicherheit und voller Keyboard-Navigation.

Tech-Stack: Next.js App Router, React, TypeScript Strict, Tailwind CSS. Keine CMS, kein Sentry, kein Dark Mode. Nur Formspree + Calendly als externe Integrationen. Die Navigation nutzt das Self-Hosting-Modell: Alle Daten in /lib/data/*, Code ist Source-of-Truth.


═══════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE EXPANSION-PROTOKOLL
═══════════════════════════════════════════════════════════════════════════════

Vorbedingung: Phase 3 Header.tsx, Footer.tsx, MobileNav.tsx existieren und sind funktional.

SCHRITT 0: SYNC & DISCOVERY
───────────────────────────────────────────────────────────────────────────────

0.1 Lese .ai-expansion-context.md und .expansion-state.md von Phase 3. Extrahiere:
    • Existierende NavLinks-Array im Header
    • MobileNav-Struktur und Close-Verhalten
    • Footer-Komponenten-Layout
    • Tailwind-Breakpoints (lg:, md:)

0.2 Analysiere reale Header.tsx: Welche NavLinks sind hardcodiert? Gibt es href={} Props?

0.3 Analysiere reale MobileNav.tsx: Ist es ein Full-Screen Overlay? Gibt es bereits Icon-Toggle?

0.4 Prüfe Routen aus Phase 1: /leistungen, /ueber-uns, /blog, /referenzen, /kontakt existieren?

0.5 Prüfe Phase-2 Services: Sind 8 Services definiert? Existiert getAllServices()-Funktion?

0.6 Starte npm run build als Baseline. Alle Tests müssen green sein.


═══════════════════════════════════════════════════════════════════════════════
BLOCK A — MEGA-NAVIGATION SYSTEM (Tasks ULTRATHINK-1 bis 4)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: NAVIGATION-DATENSTRUKTUR
───────────────────────────────────────────────────────────────────────────────

Erstelle /lib/data/navigation.ts mit typsicherer NavigationConfig:

├─ Export type NavigationItem = { label, href, description?, icon?, children? }
├─ Hauptmenü: 5 Items (Leistungen, Über Uns, Blog, Referenzen, Kontakt)
├─ Leistungen: children mit allen 8 Services aus Phase 2 (name→label, href→/leistungen/[slug])
├─ Über Uns: children (Team, Karriere, Partner, Testimonials)
├─ Legal: 3 Items (Impressum, Datenschutz, AGB)
├─ Social: Links zu LinkedIn, GitHub, Twitter (hrefs festgelegt)
└─ Export getNavigationConfig(): NavigationItem[] für Komponenten-Verwendung

Struktur MUSS typsicher sein. Keine any-Types. Optional Chaining wo nötig.


ULTRATHINK-TASK 2: DESKTOP MEGA-DROPDOWN
───────────────────────────────────────────────────────────────────────────────

Erweitere Header.tsx:

├─ "Leistungen" NavItem bekommt state isOpen (useState)
├─ onMouseEnter/onMouseLeave für Desktop-Hover
├─ Dropdown-Panel mit position absolute, z-50, rechts unten vom Item
├─ Panel zeigt Grid 2 Spalten (Services a-d, Services e-h)
├─ Jedes Service-Item: Icon (optional) + label + description (80 Zeichen max)
├─ Keyboard: onKeyDown für Tab (durch Items), Escape (schließt Panel)
├─ Backdrop onClick schließt Panel
├─ "use client" Direktive oben
├─ Styling: bg-white, shadow-lg, rounded-lg, p-6, border-t-4 mit Brand-Farbe
└─ Transitions: opacity 200ms, scaleY smooth (transform-origin top)


ULTRATHINK-TASK 3: MOBILE NAVIGATION UPGRADE
───────────────────────────────────────────────────────────────────────────────

Erweitere MobileNav.tsx:

├─ Full-Screen Overlay (fixed, inset-0, z-40)
├─ Animierter Fade-In (opacity 0→1 beim Mount, 200ms)
├─ Backdrop mit bg-black/50 und onClick → closeNav()
├─ Navigation Panel: max-w-xs, from-top sliding (oder fade), bg-white
├─ Accordion für "Leistungen": [+] Icon, bei Click expanded zeigt alle Services
├─ Touch-optimiert: min-h-12 (48px) pro Item, lg gap zwischen Groups
├─ Close-Button (X Icon) Top-Right, aria-label "Navigation schließen"
├─ Body Scroll-Lock: overflow-hidden wenn isOpen
├─ Alle Links aus getNavigationConfig(), onClick → closeNav()
└─ Submenu Indentation: pl-4 oder Farbe dunkler


ULTRATHINK-TASK 4: CTA IN NAVIGATION
───────────────────────────────────────────────────────────────────────────────

Add prominent Call-to-Action Button:

├─ Desktop Header: Button rechts neben Letztem NavItem, 16px gap
├─ Button Text: "Jetzt Anfragen" oder "Kontakt"
├─ Button Variant: primary (aus Phase 3 Button-Komponente), hover darken
├─ Mobile Nav: CTA Button Top (unter Close) oder Bottom (über Footer-Links)
├─ href="/kontakt" oder öffnet Formspree-Modal (später Phase 5)
├─ Aria-label: "Kontaktanfrage öffnen"
└─ Tracking-Attribut: data-cta="header-nav"


═══════════════════════════════════════════════════════════════════════════════
BLOCK B — BREADCRUMB & WAYFINDING (Tasks ULTRATHINK-5 bis 7)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: BREADCRUMB-KOMPONENTE
───────────────────────────────────────────────────────────────────────────────

Erstelle /components/ui/Breadcrumb.tsx:

├─ "use client" Direktive
├─ Hook: usePathname() für aktuellen Pfad
├─ Mapping-Objekt: { "leistungen": "Leistungen", "ueber-uns": "Über Uns", ... }
├─ Split pathname by "/", filter empty strings
├─ Generiere Breadcrumb-Array mit href rebuilding
├─ Letztes Segment: no href, aria-current="page"
├─ Trennzeichen: Chevron Icon (ChevronRight, color-muted)
├─ Schema: JSON-LD BreadcrumbList itemListElement Array
├─ Props: optional hideHome (default false)
├─ Return: <nav aria-label="Breadcrumb"> mit ol + li Structure
└─ Styling: text-sm, text-muted, gap-2, flex wrap, mb-4


ULTRATHINK-TASK 6: BREADCRUMB INTEGRATION
───────────────────────────────────────────────────────────────────────────────

Integriere Breadcrumbs site-wide:

├─ NOT auf Homepage (/ route)
├─ JA auf /leistungen, /leistungen/[slug], /ueber-uns, /blog, /blog/[slug], /referenzen, /kontakt
├─ Platzierung: direkt unter Header, über Heading h1
├─ Komponenten-Import: import Breadcrumb from "@/components/ui/Breadcrumb"
├─ Layout-Pattern: margin-top: 2rem (from Header), margin-bottom: 1rem (from Content)
├─ Prüfe alle 20+ Seiten-Templates
└─ Tests: Route /leistungen/web-design sollte zeigen "Home › Leistungen › Web-Design"


ULTRATHINK-TASK 7: ACTIVE STATE HIGHLIGHTING
───────────────────────────────────────────────────────────────────────────────

NavLinks zeigen visuell aktive Seite:

├─ Hook: usePathname() in Header
├─ Logic: isActive = pathname.startsWith(item.href) oder pathname === item.href
├─ Für /leistungen/* → "Leistungen" NavItem bleibt highlighted
├─ Visual Indikator: border-b-2 border-primary (3px) oder font-bold + text-primary
├─ Hover-State separat (lighter, unterscheidbar von aktiv)
├─ Mobile Nav: Text-Farbe darken wenn aktiv
├─ Transition: smooth 200ms für Farb-Änderungen
└─ Aria-current="page" für aktuelle Link


═══════════════════════════════════════════════════════════════════════════════
BLOCK C — FOOTER EXPANSION & SEKUNDÄR-NAV (Tasks ULTRATHINK-8 bis 10)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: DYNAMISCHER FOOTER
───────────────────────────────────────────────────────────────────────────────

Erweitere Footer.tsx:

├─ Imports: getNavigationConfig(), getAllServices(), getCompanyInfo()
├─ Layout: 4-Spalten Desktop (lg:), 2-Spalten Tablet (md:), 1 Spalte Mobile
├─ Spalte 1 "Services": getAllServices().map(s => <Link href={`/leistungen/${s.slug}`}>{s.name}</Link>)
├─ Spalte 2 "Unternehmen": (Team, Karriere, Blog, Referenzen aus Navigation)
├─ Spalte 3 "Legal": getNavigationConfig().legal.map()
├─ Spalte 4 "Kontakt": Email, Phone, Address aus getCompanyInfo()
├─ Copyright: © {new Date().getFullYear()} Company Name. All rights reserved.
├─ Social Icons: LinkedIn, GitHub, Twitter mit aria-labels
├─ Styling: bg-muted/5, border-t, p-12 lg:p-16
└─ Newsletter CTA (optional): E-mail Input mit Subscribe Button


ULTRATHINK-TASK 9: BACK-TO-TOP BUTTON
───────────────────────────────────────────────────────────────────────────────

Erstelle /components/ui/BackToTop.tsx:

├─ "use client" Direktive
├─ State: showButton = window.scrollY > 400px (useEffect + Listener)
├─ onClick: window.scrollTo({ top: 0, behavior: "smooth" })
├─ Icon: ChevronUp oder ArrowUp, animated (rotate on hover)
├─ Positioning: fixed, bottom-8, right-8, z-30
├─ Styling: bg-primary, text-white, rounded-full, w-12 h-12, shadow-lg
├─ Visibility: opacity 0 / pointer-none wenn showButton=false, 200ms transition
├─ Aria-label: "Zurück nach oben"
├─ Hover-State: scale 1.1, shadow-xl
└─ Integriere in RootLayout.tsx als letztes Element vor </body>


ULTRATHINK-TASK 10: INHALTSVERZEICHNIS (OPTIONAL FÜR LANGE SEITEN)
───────────────────────────────────────────────────────────────────────────────

Erstelle /components/ui/TableOfContents.tsx (optional):

├─ "use client" Direktive
├─ Props: headings Array oder automatisch aus DOM (querySelectorAll("h2, h3"))
├─ Generiere Sprunglinks mit Heading-IDs
├─ Struktur: nested ul (h2 → h3 indent)
├─ Desktop: Sticky Sidebar (top-32, max-h-96, overflow-auto)
├─ Mobile: Collapsible Accordion (chevron icon, expandable)
├─ Active Link Highlighting: basierend auf viewport intersection
├─ Styling: text-sm, text-muted, link-hover underline
├─ Optional: Nur für Seiten mit 3+ Headings rendern
└─ Nutzen auf: /leistungen/[slug] (Service Details), /blog/[slug]


═══════════════════════════════════════════════════════════════════════════════
BLOCK D — VALIDATION & USER FLOW (Tasks ULTRATHINK-11 bis 13)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 11: LINK-AUDIT
───────────────────────────────────────────────────────────────────────────────

Alle Navigation-Links müssen zu existierenden Routen führen:

├─ Header NavLinks: prüfe gegen Phase-1 Routes (/leistungen, /ueber-uns, /blog, etc.)
├─ Mega-Dropdown Services: /leistungen/[slug] → validate alle 8 slugs
├─ Footer Links: alle hrefs müssen resolvierbar sein
├─ Breadcrumb Mapping: sämtliche Segments müssen gelistet sein
├─ CTA href="/kontakt" → /kontakt Route MUSS existieren
├─ Externe Links: Social (LinkedIn, GitHub) mit vollständigen URLs
├─ Test: npm run build sollte KEINE unresolved href warnings zeigen
└─ Manuell: Klick jeden Footer-Link, navigiere jede Seite, 404-Check


ULTRATHINK-TASK 12: KEYBOARD-NAVIGATION
───────────────────────────────────────────────────────────────────────────────

Volle Keyboard-Accessibility:

├─ Header Tab-Reihenfolge: Logo (optional focusable) → NavItems → CTA Button
├─ Mega-Dropdown: Tab enters Panel, Arrows navigate Items, Escape closes
├─ Mobile Nav: Tab-Trap wenn geöffnet (Shift+Tab am Anfang wraps zu Ende)
├─ Alle Buttons/Links: tabIndex={0} falls nicht natürlich focusable
├─ Focus Indicator: outline-2 outline-primary, offset-2
├─ Skip-Link (optional): "Skip to Main Content" Link versteckt, bei Focus sichtbar
├─ Tests: Keyboard-only Navigation die ganze Site navigierbar
└─ Screen Reader: aria-label auf Icons, aria-expanded auf Dropdowns


ULTRATHINK-TASK 13: RESPONSIVE PRÜFUNG
───────────────────────────────────────────────────────────────────────────────

Breakpoint-Überprüfung mit echten Devices:

├─ Desktop 1024px+: Volle Header-Nav mit Mega-Dropdown, Footer 4-spaltig
├─ Tablet 768-1023px: Hamburger Icon + vereinfachte NavItems (nur Hauptkategorien)
├─ Mobile unter 768px: Nur Hamburger, Full-Screen Drawer, Footer stapelbar
├─ Tailwind Media Queries: hidden lg:flex für Desktop Nav, flex lg:hidden für Hamburger
├─ Breakpoint Konstanten in /lib/constants.ts: BREAKPOINT_LG=1024, BREAKPOINT_MD=768
├─ Device Testing: iPhone 12 (390px), iPad (768px), Desktop (1440px)
├─ Screenshot-Audit: Alle 3 Viewport-Größen
└─ Performance: Mega-Dropdown should not block on Mobile (hide/remove from DOM)


═══════════════════════════════════════════════════════════════════════════════
ATOMIC VALIDATION CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

□ /lib/data/navigation.ts erstellt und typsicher
□ Header.tsx mit Mega-Dropdown für Leistungen
□ MobileNav.tsx mit Accordion und Full-Screen Overlay
□ CTA Button in Header und Mobile Nav integriert
□ /components/ui/Breadcrumb.tsx mit JSON-LD Schema
□ Breadcrumbs auf allen Unterseiten (außer Homepage)
□ NavLinks zeigen active state mit usePathname()
□ Footer mit dynamischen Service-Links
□ Back-to-Top Button integriert und funktional
□ TableOfContents.tsx für Service/Blog-Seiten (optional)
□ Alle Links resolvierbar, keine 404s
□ Keyboard-Navigation: Tab durch alle Elemente
□ Focus Indicators sichtbar und kontrastreich
□ Desktop 1024px+ zeigt volle Nav
□ Tablet 768-1023px zeigt Hamburger
□ Mobile <768px zeigt volles Drawer
□ Footer responsive auf allen Viewports
□ npm run build erfolgreich
□ npm run lint hat keine Fehler
□ Alle TypeScript Types strict (noAny)
□ Code versioniert, .expansion-state.md aktualisiert


═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP & HANDOFF
═══════════════════════════════════════════════════════════════════════════════

Nach Phase 4:

Aktualisiere .ai-expansion-context.md:
├─ Phase 4 Status: ABGESCHLOSSEN
├─ Navigation-Struktur dokumentiert
├─ Breakpoints definiert
├─ Alle Komponenten-Pfade gelistet
└─ Known Limitations & Optimierungen notiert

Aktualisiere .expansion-state.md:
├─ Task-Completion Log (alle 13 Tasks)
├─ Build Status: ✓ green
├─ Browser Test Results: Desktop / Tablet / Mobile
├─ Accessibility Score (optional Lighthouse)
└─ Handoff Notes für Phase 5

Phase 5 baut auf Navigation auf: Formspree-Integration, Calendly-Widget, Form-Validation, Conversion Tracking.


═══════════════════════════════════════════════════════════════════════════════

PHASE 4 COMPLETE WHEN:
• Alle 13 ULTRATHINK-TASKS abgeschlossen
• Keine TypeScript Fehler
• npm run build produziert keine Warnungen
• Link-Audit bestätigt keine 404s
• Keyboard-Navigation auf allen Komponenten funktioniert
• Responsive auf Mobile / Tablet / Desktop getestet
• .expansion-state.md mit Phase 4 Completion markiert

TARGET: 500-650 Zeilen Phase-4-Code. Handoff zu Phase 5 nach Validation.

