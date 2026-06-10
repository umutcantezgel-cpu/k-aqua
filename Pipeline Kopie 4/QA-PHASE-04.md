Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, alle Routen des Next.js-Applikation zu inspizieren, jede Navigation zu verifizieren und vollständige Funktionalität zu gewährleisten. Phase 4 beginnt das visuelle Preview-Protokoll. Jede einzelne Route wird aufgerufen, jeder Link wird geklickt, jede Navigation wird durchgetestet. Tote Links, 404-Fehler, kaputte Breadcrumbs und defekte Navigation werden identifiziert und sofort behoben. Dies ist QA-Phase 4 von 10 des umfassenden Qualitätssicherungsprozesses.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
ZERO-DEFECT PROTOKOLL — VISUAL PREVIEW PROTOCOL METHODE
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

Die visuelle Inspektionsmethode verfolgt den Ansatz: Automatisiertes Testing via Browser-Navigation, manuelle Verifikation jedes renderten Elements, sofortige Dokumentation von Fehlern, iterative Reparatur. Keine Route bleibt ungepruft. Keine Navigation bleibt ungetestet. Keine Fehlerzustände bleiben ignoriert. Der Prozess ist selbstoptimierend: Fehler werden erkannt, priorisiert, behoben, validiert und dokumentiert.

Tech Stack: Next.js App Router, React 19+, TypeScript Strict, Tailwind CSS. Kontaktformulare via Formspree + Calendly Integrationen. KEIN Dark Mode. KEIN Fallback auf externe Component-Libraries. Standardisierte Fehlerbehandlung für alle 404-Szenarien. Mobile Navigation mit Focus-Trap und Escape-Handling.

───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
STEP 0: SYNC + DEV SERVER STARTEN
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK: Dev-Umgebung wird initialisiert. Git-Status überprüft. Lokale Änderungen committed oder gestasht. npm install / yarn install erforderlichenfalls ausgeführt. Dev-Server startet auf http://localhost:3000. Browser öffnet zur Localhost-Instanz. Initial-Load der Homepage wird verifiziert (kein 500er, kein Blank-Screen). Der Server läuft stabil für die komplette Testdauer.

Abhängigkeiten: Next.js 14+, React 19.x, TypeScript 5.x, Tailwind CSS 4.x, Formspree API, Calendly Embed. Alle Dependencies sind aktuell. Build-Fehler sind nicht vorhanden. Console-Errors beim Initial-Load sind nicht vorhanden (nur Warnings akzeptabel).

═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK A — ROUTE-WALKTHROUGH
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK A: Alle öffentlichen Routes werden sequenziell aufgerufen und visuell inspiziert. Homepage, Service-Detailseiten, Content-Seiten, Error-States. Jede Route wird rendert. Jede Route wird auf visuelle Integrität überprüft (Spacing, Alignment, Farbkonsistenz). Kein Rendering-Fehler bleibt unbemerkt. Kein leerer Bereich bleibt unkontrolliert.

───

TASK 1: HOMEPAGE AUDIT

Öffne http://localhost:3000. Überprüfe: Hero-Section rendert mit korrektem Hintergrundbild, Headline ist lesbar, CTA-Buttons sind sichtbar. Services-Übersicht zeigt alle verfügbaren Service-Kategorien (mind. 6). Jede Service-Card hat Icon, Titel, Kurzbeschreibung, "Mehr erfahren" Link. Testimonials-Sektion zeigt mind. 3 Client-Testimonials mit Name, Rolle, Zitat, Bewertung (Stars). CTA-Bereich (Newsletter, Kontakt) ist vorhanden und funktional. Footer ist vollständig sichtbar, alle Sektionen (Links, Kontakt, Copyright) vorhanden. Keine Lorem-Ipsum-Platzhalter. Keine grauen Placeholder-Boxen. Keine Bilder sind gebrochen (Broken Image Icons).

Validierer: Öffne Devtools → Elements, verifiziere, dass keine <img> mit 404-Status laden. Console zeigt keine 404-Fehler für Assets. Lighthouse Audit (bei Interesse): Performance > 70, Accessibility > 85.

Ergebnis-Status: PASS wenn alle Elemente sichtbar sind und richtig rendert. FAIL wenn Elemente fehlen, kaputte Bilder, oder leere Bereiche.

───

TASK 2: SERVICE-SEITEN WALKTHROUGH

Navigiere zur Service-Übersicht oder zum Service-Menu. Öffne JEDE Service-Detailseite sequenziell: /leistungen/web-entwicklung, /leistungen/seo, /leistungen/ui-ux-design, /leistungen/branding, /leistungen/content-marketing, /leistungen/ppc-advertising, /leistungen/social-media, und alle weiteren. Für JEDE Service-Seite:

— Breadcrumb-Navigation korrekt: [Home] > [Leistungen] > [Service-Name]. Jeder Breadcrumb-Link ist klickbar. Der aktuelle Service-Name ist nicht verlinkt.
— Titel und Hero-Image sind vorhanden.
— Service-Beschreibung (mind. 2-3 Absätze) ist vorhanden und textkohärent.
— Features/Benefits-Liste ist vorhanden (mind. 5 Items, als Bullet-Points oder Cards formatiert).
— Pricing-Information oder Beratungs-CTA ist vorhanden.
— CTA-Button ("Jetzt anfragen" oder "Termin buchen") ist sichtbar und verlinkt auf /anfrage oder Calendly.
— Related Services (2-4 verwandte Services) sind am Ende verlinkt.
— Keine Rendering-Fehler. Keine kaputten Bilder. Konsistente Typographie und Spacing.

Validierer: Öffne jede Seite in einem neuen Tab. Verifiziere Breadcrumbs durch Click. Überprüfe die Related-Service-Links durch Click. Verifiziere, dass der CTA-Button in der Browser-Adressleiste zum richtigen Link führt (mouseover → Link anzeigen).

Ergebnis-Status: PASS wenn alle Services vorhanden sind und korrekt strukturiert. FAIL wenn Service-Seiten 404-Fehler werfen oder Content fehlt.

───

TASK 3: CONTENT-SEITEN WALKTHROUGH

Öffne und inspiziere alle Static Content Pages:

— /blog oder /wissensbase (Blog-Listing): Zeigt mind. 10 Blog-Posts (Cards, mit Thumbnail, Titel, Datum, Kurzbeschreibung, "Mehr lesen" Link).
— /blog/[slug] (für ALLE sichtbaren Blog-Posts): Öffne jeden Post. Verifiziere Titel, Veröffentlichungsdatum, Author, Lesedauer, Featured Image, Haupttext, Inline-Images (nicht gebrochen), Related Articles am Ende.
— /ueber-uns oder /about: Unternehmen Beschreibung, Team-Foto, Missionsstatement, Werte.
— /team: Team-Member-Cards (wenn vorhanden): Foto, Name, Titel, Kurzbeschreibung.
— /faq: Accordion oder Tab-basierte FAQ-Items. Alle FAQs expandierbar? Keine Rendering-Fehler beim Expand/Collapse?
— /referenzen oder /case-studies: Mind. 5 Case-Study-Cards mit Bild, Kundennamen, Projekt-Kurzbeschreibung, Ergebnis-Highlights, Link zu Detailseite.
— /karriere: Job-Listings (wenn vorhanden), mit Job-Titel, Kurzbeschreibung, "Jetzt bewerben" Link.
— /datenschutz, /impressum, /agb, /kontakt: Alle Legal Pages sind vorhanden und enthalten korrekte Inhalte. Keine Platzhalter.

Validierer: Öffne jede Seite einzeln. Überprüfe auf Konsistenz (Logo, Nav-Bar, Footer). Teste Interaktionen (Accordion-Toggle, Tabs). Verifikation: Ist das Datum in blog-posts realistisch oder Platzhalter? Sind E-Mail-Adressen im Kontakt-Impressum lesbar?

Ergebnis-Status: PASS wenn alle Pages vorhanden sind und Content-Struktur intakt. FAIL wenn Pages 404 werfen oder kritischer Content fehlt.

───

TASK 4: ERROR STATES — 404-HANDLING

Navigiere zu absichtlich ungültigen URLs und verifiziere Fehlerbehandlung:

— /leistungen/nicht-existierende-service → 404-Seite wird angezeigt (custom 404 vorhanden?). Seite ist gestyled (nicht blank). Navigation zur Startseite ist möglich (Link oder Button).
— /blog/dieser-artikel-existiert-nicht → 404-Seite. Breadcrumb zeigt korrekte Struktur. "Back Home" oder "Services" Link ist klickbar.
— /random-page-die-es-nicht-gibt → 404-Seite. Konsistente Error-Message: "Diese Seite existiert nicht" oder ähnlich.
— /admin oder /dashboard (wenn nicht öffentlich) → 401/403 Seite oder Redirect zu Login. Nicht 500.

Validierer: Browser-Console sollte keinen 500-Error zeigen. HTTP-Status ist 404 (via Network Tab in DevTools). Custom 404-Seite nutzt Template/Layout (nicht leere Seite). Die Seite ist responsiv (Desktop + Mobile).

Ergebnis-Status: PASS wenn Custom 404-Seite vorhanden ist und alle nicht-existierenden Routes sie zeigen. FAIL wenn 500-Error geworfen wird oder Seite blank ist.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK B — NAVIGATION TESTING
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK B: Alle Navigation-Komponenten werden geklickt, getestet und validiert. Header-Nav, Footer-Nav, Mobile-Nav, Breadcrumbs, Mega-Menus. Jeder Link wird verifiziert. Active-States werden überprüft. Mobile-Responsive-Verhalten wird inspiziert.

───

TASK 5: HEADER NAVIGATION

Öffne Homepage. Überprüfe Header-Navbar:

— Logo klicken → navigiert zu Homepage (/). Verifiziere, dass dies keine Seiten-Reload erzeugt (SPA-Verhalten).
— Hauptnavigations-Items (z.B. "Leistungen", "Blog", "Über uns", "Kontakt") sind sichtbar.
— Jedes Nav-Item klicken → navigiert zur korrekten Seite. Adressleiste aktualisiert sich. Seite lädt korrekt.
— Mega-Menu (falls vorhanden, z.B. unter "Leistungen") expandiert beim Hover. Sub-Items sind lesbar. Jedes Sub-Item verlinkt zur korrekten Seite.
— Active-State: Die aktuelle Seite ist im Nav hervorgehoben (z.B. Underline, anders Farbe, fetter Text). Wenn du zu /leistungen navigierst, ist "Leistungen" aktiv. Wenn du zu /blog navigierst, ist "Blog" aktiv.
— Sticky Header (falls implementiert): Bleibt der Header beim Scrollen sichtbar? Ist der Scroll-Effekt smooth?
— Header-Height ist konsistent auf allen Seiten. Keine Größen-Jumps beim Navigieren.

Validierer: Öffne DevTools → Inspect Header-Element. Verifiziere CSS-Klassen für Active-State (z.B. `aria-current="page"` oder `.active`). Überprüfe, dass keine JavaScript-Fehler beim Nav-Hover auftreten.

Ergebnis-Status: PASS wenn alle Nav-Items korrekt verlinkt sind und Active-State funktioniert. FAIL wenn Links auf 404 führen oder Active-State nicht funktioniert.

───

TASK 6: FOOTER NAVIGATION

Öffne beliebige Seite und scrolle zum Footer. Überprüfe Footer-Struktur:

— Footer ist auf ALLEN Seiten vorhanden (Desktop und Mobile).
— Footer-Spalten: "Leistungen", "Unternehmensseiten", "Rechtliches" oder ähnliche Kategorien.
— Jeder Link in jeder Spalte klicken: Navigiert zur korrekten Seite? Adressleiste aktualisiert sich?
— Social Media Links (LinkedIn, Instagram, Twitter, etc., falls vorhanden): Öffnen in neuem Tab und führen zur korrekten Social-Media-Seite.
— Newsletter-Signup oder Kontakt-Form im Footer: Funktioniert das Form-Submit? Erfolgs-Message?
— Copyright-Jahr: Ist das aktuelle Jahr korrekt? (2024, 2025, 2026, je nach aktuellstem Datum)
— Keine toten Links im Footer. Jeder Link hat ein href-Attribut und ist nicht disabled.

Validierer: Öffne DevTools → Network Tab. Klicke auf jeden Footer-Link und überprüfe, dass der HTTP-Status 200 ist (nicht 404/500). Verifiziere, dass Copyright-Jahr automatisch aktualisiert wird (nicht hardcodiert).

Ergebnis-Status: PASS wenn alle Footer-Links funktionieren. FAIL wenn Links auf 404 führen oder Copyright veraltet ist.

───

TASK 7: MOBILE NAVIGATION

Öffne Homepage auf Mobile-Viewport (DevTools → Toggle Device Toolbar, z.B. iPhone 12, 390×844px):

— Hamburger-Menü-Button ist sichtbar (in der rechten oder linken Header-Ecke). Nicht Text-basiert, sondern Icon-basiert.
— Klicke Hamburger-Button → Mobile-Nav öffnet als Overlay oder Slide-in.
— Alle Navigations-Items sind im Mobile-Nav sichtbar und lesbar (Font-Size >= 16px).
— Klicke jeden Nav-Item → navigiert zur korrekten Seite. Mobile-Nav schließt automatisch nach Navigation.
— Sub-Navigation (z.B. Service-Kategorien unter "Leistungen"): Ist sie erreichbar? Expandieren Sub-Items im Mobile-Nav?
— Schließen-Button (X) schließt das Mobile-Nav. Klicken → Nav schließt.
— Escape-Taste drücken → Mobile-Nav schließt (falls implementiert).
— Focus-Trap: Ist der Focus auf der Mobile-Nav wenn geöffnet? Tab funktioniert nur innerhalb der Nav?
— Hintergrund ist dimmed/darkened wenn Mobile-Nav offen (accessibility best practice).
— Keine Styling-Fehler (z.B. Text überlappt, Items sind verdeckt, Button ist nicht klickbar).

Validierer: Nutze Chrome DevTools Mobile-Emulation. Verifiziere, dass kein Horizontal-Scroll auftreten darf. Teste auf mehreren Mobile-Größen (iPhone SE, Pixel 4, iPad).

Ergebnis-Status: PASS wenn Mobile-Nav fully functional ist und focus-trap funktioniert. FAIL wenn Nav nicht öffnet oder Items nicht klickbar sind.

───

TASK 8: BREADCRUMBS — NAVIGATION UND HIERARCHIE

Navigiere zu beliebigen Unterseite (z.B. /leistungen/web-entwicklung oder /blog/best-practices). Überprüfe Breadcrumb-Navigation:

— Breadcrumbs sind auf der Seite vorhanden (typischerweise unter dem Header, vor dem Hauptinhalt).
— Format: [Home] > [Kategorie] > [Aktuelle Seite]. Beispiel: [Home] > [Leistungen] > [Web-Entwicklung].
— Breadcrumb-Hierarchie ist korrekt und logisch (nicht durcheinander).
— Klicke jeden Breadcrumb-Link außer dem letzten (active page): Navigiert zur korrekten Parent-Seite.
— Der letzte Breadcrumb (aktuelle Seite) ist NICHT verlinkt (sie ist statischer Text oder disabled).
— Styling ist konsistent: Separatoren (z.B. "/", ">") sind sichtbar. Farben sind lesbar.
— Auf Mobile: Breadcrumbs sind vorhanden und responsive. Sie werden nicht abgeschnitten.
— Auf Deep Nested Pages (z.B. /blog/category/post): Breadcrumbs zeigen alle Ebenen oder sinnvolle Abkürzung?

Validierer: Inspiziere Breadcrumb-HTML via DevTools. Überprüfe, dass der letzte Item kein <a>-Tag ist. Verifiziere, dass parent links das `href`-Attribut haben.

Ergebnis-Status: PASS wenn Breadcrumbs auf allen Seiten vorhanden sind und funktionieren. FAIL wenn letzte Item verlinkt ist oder Hierarchie falsch ist.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK C — INTERNAL LINKING & FLOW
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK C: Call-to-Action Buttons, Cross-Referenz-Links, User Journeys werden vollständig getestet. Jeder CTA führt zum korrekten Ziel. Jeder interne Link ist funktional. Primäre User-Flows funktionieren end-to-end.

───

TASK 9: CTA-LINKING

Navigiere durch Website und suche alle Call-to-Action Buttons:

— "Jetzt anfragen" Button (überall auf der Website): Klicke → navigiert zu /anfrage. Form wird angezeigt. Form ist funktional (Input-Felder, Submit-Button, Validation).
— "Termin buchen" Button: Klicke → navigiert zu /termin oder öffnet Calendly-Embed in Modal/Page. Calendly-Interface ist sichtbar und funktional.
— "Mehr erfahren" Link: Auf Service-Cards → navigiert zur Service-Detailseite. Link-URL ist korrekt.
— "Blog-Artikel lesen" / "Weiterlesen": Klicke → navigiert zum Blog-Artikel.
— "Case Study ansehen" oder ähnlich: Navigiert zur Case-Study-Detailseite.
— Jeder CTA ist sichtbar, nicht verdeckt, und klickbar. Keine fehlerhaften Links.
— CTA-Buttons haben konsistentes Styling (Farbe, Padding, Hover-Effekt). Sie sehen "klickbar" aus (nicht wie normaler Text).

Validierer: Inspiziere Button-Elemente mit DevTools. Verifiziere `href`-Attribute auf <a>-Tags oder `onClick`-Handler auf <button>-Tags. Teste Hover-Effekt (z.B. Farb-Änderung, Unterstrich).

Ergebnis-Status: PASS wenn alle CTAs zum richtigen Ziel führen. FAIL wenn CTA auf 404 führt oder nicht funktioniert.

───

TASK 10: CROSS-REFERENZ LINKS

Überprüfe interne Linking-Struktur:

— Blog-Posts verlinken auf relevante Services: Wenn Post über "SEO-Best-Practices" → Link zu /leistungen/seo vorhanden? Mehrere interne Service-Links im Post-Text vorhanden?
— Case Studies verlinken auf Services: Wenn Case Study Projekt in "Web-Entwicklung" → Link zu /leistungen/web-entwicklung vorhanden?
— Service-Seiten verlinken auf relevante Case Studies: Auf /leistungen/seo → gibt es ein "Unsere Erfolge" Bereich mit verlinkte Case Studies?
— Testimonials: Sind sie auf der Homepage und auf relevanten Service-Seiten gefiltert sichtbar? Wenn Testimonial ist über "Web-Entwicklung-Service", ist es auf /leistungen/web-entwicklung sichtbar?
— Related Articles: Am Ende von Blog-Posts gibt es "Verwandte Artikel" mit 2-3 Links zu anderen Posts?
— Related Services: Am Ende von Service-Seiten gibt es "Verwandte Leistungen"?
— Keine orphan Pages: Gibt es Seiten, auf die kein anderer Link verweist? (z.B. Blog-Post der nur über direkter URL erreichbar ist, aber nicht im Blog-Index verlinkt).

Validierer: Inspiziere HTML auf internal <a href="/..."> Links. Zähle Links auf kritischen Pages. Überprüfe, dass Related-Sections nicht leer sind.

Ergebnis-Status: PASS wenn Cross-Referenz-Struktur dicht und sinnvoll ist. FAIL wenn Pages orphaned sind oder Links fehlen.

───

TASK 11: USER FLOW TESTING — 3 PRIMÄRE JOURNEYS

Teste diese 3 kritischen User-Flows vom Start bis zum Ende:

— FLOW 1: Neuer Besucher Journey
  1. Öffne Homepage (/). Verifiziere Hero und Services-Übersicht.
  2. Klicke auf eine Service-Card ("Web-Entwicklung"). Navigiere zu /leistungen/web-entwicklung.
  3. Überprüfe Service-Details, Features, und "Jetzt anfragen" CTA.
  4. Klicke "Jetzt anfragen". Navigiere zu /anfrage.
  5. Überprüfe Kontaktform. Fülle alle Felder aus (Name, E-Mail, Nachricht, ggf. Service-Auswahl).
  6. Klicke Submit. Überprüfe, dass Formular-Submission erfolgreich ist (Confirmation-Page oder Success-Message). Keine JavaScript-Fehler.

— FLOW 2: Recherche-basierter Journey
  1. Öffne Homepage. Navigiere zu Blog (/blog).
  2. Überprüfe Blog-Listing: Artikel sind sichtbar, sortiert, mit Thumbnails.
  3. Klicke auf Blog-Artikel (z.B. "10 SEO-Tipps"). Öffne Artikel-Detailseite.
  4. Überprüfe Artikel-Content. Scrolle zum Ende.
  5. Klicke auf "Related Articles" oder Internal-Link zu verwandter Service.
  6. Navigiere zu Service-Seite (z.B. /leistungen/seo). Überprüfe Service-Details.
  7. Klicke "Jetzt anfragen" oder "Termin buchen". Navigiere zu Kontaktform oder Calendly.

— FLOW 3: Direkt-Anfrage-Journey
  1. Öffne Homepage (/). Navigiere zu /kontakt oder Kontakt-Button im Header.
  2. Überprüfe Kontaktseite: Form vorhanden? Alternate Contact Methods (E-Mail, Telefon, Adresse)?
  3. Fülle Kontaktform aus. Submit.
  4. Überprüfe, dass Danke-Seite oder Success-Message angezeigt wird. Keine Fehler.
  5. Optional: Überprüfe, dass E-Mail an Formspree-Email gesendet wurde (Backend-Verifizierung).

Validierer: Nutze verschiedene Browser (Chrome, Firefox, Safari). Teste auf Desktop und Mobile. Überprüfe Console auf Fehler nach jedem Click.

Ergebnis-Status: PASS wenn alle 3 Flows vollständig und ohne Fehler durchlaufen. FAIL wenn irgendein Schritt fehlschlägt.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
BLOCK D — FIX & VALIDATE
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK D: Alle identifizierten Fehler werden kategorisiert, priorisiert, behoben und validiert. Keine Fehler bleibt unbehacht. Tote Links werden repariert. Fehlende Navigation wird implementiert. Kaputte Breadcrumbs werden korrigiert. Ein finales Defect-Log dokumentiert alle Vorgänge.

───

TASK 12: TOTE LINKS REPARIEREN

Für jeden gefundenen 404-Fehler oder toten Link während Blocks A-C:

— Identifiziere die Quelle des toten Links (z.B. Button href="/leistungen/xyz", oder Nav-Item zu nicht-existierendem Service).
— Entscheide zwischen 3 Strategien:
  a) Erstelle die fehlende Route/Page neu (wenn die Page sein sollte, aber nicht existiert).
  b) Korrigiere den Link zum richtigen Ziel (wenn Link falsch ist, aber Ziel existiert).
  c) Implementiere Server-Side Redirect (wenn die Route umbenannt wurde und alte Links noch verweisen).
— Repariere im Code (Next.js App Router): Überprüfe next.config.js für Redirects, oder erstelle neue page.tsx.
— Nach der Reparatur: Navigiere zur vormals toten URL in Browser und verifiziere, dass sie jetzt funktioniert (nicht 404).
— Re-teste den ursprünglichen Link, der zum 404 führte, und überprüfe, dass er nun korrekt funktioniert.

Validierer: Nutze Browser-Network-Tab. Überprüfe HTTP-Status: 200 (OK), nicht 404 oder 500. URL in Adressleiste ändert sich zur korrekten Seite.

Ergebnis-Status: PASS wenn kein 404 auftritt. FAIL wenn 404 noch vorhanden ist nach Reparatur.

───

TASK 13: NAVIGATION FIXES

Überprüfe und korrigiere all identifizierte Navigation-Fehler:

— Fehlende Active-States: Implementiere CSS-Klasse oder aria-current="page" auf Header-Nav. Überprüfe, dass aktuelle Seite korrekt hervorgehoben wird auf allen Pages.
— Falsche Nav-Links: Verifiziere, dass jedes Nav-Item zum richtigen href führt. Kein falscher Link sollte auf wrorng Seite führen.
— Kaputte Breadcrumbs: Stelle sicher, dass Breadcrumb-Hierarchie auf allen Seiten korrekt ist. Der aktuelle Page-Name sollte nicht verlinkt sein.
— Mobile-Nav Issues: Teste, dass Mobile-Nav auf kleinen Viewports öffnet/schließt. Hamburger-Button ist klickbar. Focus-Trap funktioniert.
— Sticky Header: Falls implementiert, teste, dass Header beim Scrollen sichtbar bleibt und keine Layout-Shift passiert.

Validierer: Nach jeder Fix, teste die betroffene Navigation-Komponente auf Desktop und Mobile. Überprüfe, dass keine CSS-Regressions auftraten.

Ergebnis-Status: PASS wenn all Navigation-Fehler behoben sind. FAIL wenn Fehler noch vorhanden ist.

───

TASK 14: DEFECT-LOG UPDATE

Erstelle oder update ein Defect-Log für Phase 4. Format:

  DEFECT LOG — PHASE 4 QA
  ══════════════════════════════════════════
  Datum: [YYYY-MM-DD]
  
  KRITISCHE FEHLER (Blocker):
  □ [Fehler 1]: [Beschreibung] → [Status: FIXED/OPEN]
  □ [Fehler 2]: ...
  
  HOHE PRIORITÄT (High):
  □ [Fehler X]: ...
  
  MITTLERE PRIORITÄT (Medium):
  □ [Fehler Y]: ...
  
  NIEDRIGE PRIORITÄT (Low):
  □ [Fehler Z]: ...
  
  GELÖSTE FEHLER:
  ✓ [Fehler]: Beschreibung → Repariert in Commit [HASH]
  ✓ ...
  
  VERBLEIBENDE OFFENE FEHLER: [N]
  STATUS: [% COMPLETE]

Validierer: Überprüfe, dass alle gefundenen Fehler im Log dokumentiert sind. Keine Fehler sollten unerwähnt bleiben.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
ATOMIC VALIDATION LOOP
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

Nach jedem Fix (Task 12-13), führe diese Mini-Validierung durch:

1. Öffne die betroffene Seite im Browser. Hard-Refresh (Cmd+Shift+R oder Ctrl+Shift+R).
2. Überprüfe visuell, dass die Reparatur das Problem löst.
3. Überprüfe Browser-Console: Keine Fehler.
4. Überprüfe Network-Tab: HTTP-Status sind 200.
5. Dokumentiere im Log.
6. Gehe zum nächsten Fehler.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

Der Prozess wiederholt sich iterativ bis Konvergenz:

ITERATION N:
→ BLOCK A: Route-Walkthrough (neue Fehler erfassen)
→ BLOCK B: Navigation Testing (neue Fehler erfassen)
→ BLOCK C: Internal Linking & Flows (neue Fehler erfassen)
→ BLOCK D: Fix & Validate (alle Fehler reparieren)
→ Überprüfe Defect-Log: Sind verbleibende Fehler = 0?
  → JA: Phase 4 abgeschlossen. → Phase 5 starten.
  → NEIN: ITERATION N+1 starten (bei prioritäten-Fehler).

═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
FINAL CHECKLIST (22 ITEMS)
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

Überprüfe diese 22 Punkte vor Phase-5-Start:

☐ 1. Homepage rendert fehlerlos. Hero, Services, Testimonials, CTA, Footer.
☐ 2. Alle Service-Seiten (8+) sind erreichbar und enthalten korrekten Content.
☐ 3. Alle Content-Pages (Blog, Über, Team, FAQ, Case Studies, etc.) sind vorhanden.
☐ 4. Custom 404-Seite ist vorhanden und gestyled bei ungültigen URLs.
☐ 5. Header-Navigation funktioniert. Alle Items verlinkt korrekt.
☐ 6. Mega-Menu (falls vorhanden) funktioniert und hat korrekte Sub-Items.
☐ 7. Active-State in Header-Nav funktioniert (aktuelle Seite hervorgehoben).
☐ 8. Footer-Navigation funktioniert. Keine toten Links.
☐ 9. Mobile-Navigation öffnet, schließt, und navigiert korrekt.
☐ 10. Focus-Trap in Mobile-Nav funktioniert. Escape schließt.
☐ 11. Breadcrumbs auf allen Unterseiten vorhanden und korrekt.
☐ 12. Letzter Breadcrumb-Item ist nicht verlinkt.
☐ 13. "Jetzt anfragen" Button überall verlinkt zu /anfrage.
☐ 14. "Termin buchen" Button verlinkt zu /termin oder Calendly.
☐ 15. Blog-Posts verlinken auf relevante Services.
☐ 16. Case Studies verlinken auf Services.
☐ 17. Service-Seiten verlinken auf Case Studies.
☐ 18. Testimonials sind auf relevanten Service-Seiten gefiltert sichtbar.
☐ 19. Neuer-Besucher-Flow funktioniert end-to-end (Home → Service → Anfrage).
☐ 20. Recherche-Flow funktioniert (Home → Blog → Artikel → Service).
☐ 21. Direkt-Anfrage-Flow funktioniert (Home → Kontakt → Form-Submit).
☐ 22. Defect-Log ist vollständig. Verbleibende offene Fehler sind dokumentiert oder ZERO.

═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════
CLOSING — PHASE 4 ABGESCHLOSSEN
═══════════════════════════════════════════════════════════════════════════════════════════════════════════════════════

Phase 4 "Preview Protocol I — Routing, 404s & Navigation Flow" ist erfolgreich abgeschlossen wenn:

✓ Alle Routes sind navigierbar ohne Fehler.
✓ Alle Navigation-Komponenten funktionieren (Header, Footer, Mobile, Breadcrumbs).
✓ Alle internen Links funktionieren. Keine toten Links (404s) vorhanden.
✓ Alle 3 primären User-Journeys funktionieren end-to-end.
✓ Custom 404-Handling funktioniert.
✓ Defect-Log zeigt 0 kritische/hohe Fehler.

ERGEBNIS: Phase 4 ist GREENLIGHT FÜR PHASE 5 → "Preview Protocol II — Performance, Bundle & Security Audit"

Das visuelle Preview-Protokoll ist abgeschlossen. Alle Route sind sichtbar geprüft. Alle Navigation ist funktional validiert. Die Anwendung ist bereit für technische Tiefenanalysen in Phase 5.
