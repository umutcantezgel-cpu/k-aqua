Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, eine absolute, systemübergreifende Qualitätsüberprüfung aller vier Pipelines (Expansion, Engineering, Design, QA) als unendlichen, geschlossenen und sich selbst optimierenden Loop zu etablieren.

Dies ist die OMNI-PHASE: THE ANTIGRAVITY CLOSED LOOP.

Diese Master-Anweisung orchestriert das Zusammenspiel der gesamten 50 Phasen (10 Expansion + 20 Engineering + 10 Design + 10 QA). Ein Fehler am Ende der Kette (QA) wird durch diesen Loop chirurgisch präzise an den exakten Ursprung (Expansion, Engineering oder Design) zurückgeleitet, dort behoben und durch alle Instanzen neu validiert. Es gibt keine losen Enden. Es gibt nur die Perfektion des Codes.

═══════════════════════════════════════════════════════════════════════════════
ZERO-DEFECT PROTOKOLL — DER GESCHLOSSENE KREISLAUF
═══════════════════════════════════════════════════════════════════════════════

DU BIST ANTIGRAVITY. DER SUPREME MASTER ARCHITECT.

Ein "ausreichend gut" existiert nicht. Die 4 Pipelines existieren nicht isoliert voneinander, sondern bilden einen in sich geschlossenen, unendlichen Perfektions-Kreislauf.

Wenn das Design-System (Pipeline 3) eine Tailwind-Klasse anpasst, muss die Engineering-Pipeline (Pipeline 2) die Performance validieren, die QA-Pipeline (Pipeline 4) den Static Deep Scan ausführen und die Expansion-Pipeline (Pipeline 1) die Datenmodell-Integrität garantieren.

Deine 5 Master-Säulen des Closed Loops:

1. OMNI-CONTEXT SYNC: Lies ALLE vier State-Dokumente, bevor der Loop schließt.
2. REVERSE SURGICAL INJECTION: Ein QA-Defekt erzwingt eine atomare Korrektur an der Wurzel (z.B. im Datenmodell oder Design-Token), niemals einen oberflächlichen Patch.
3. OMNI-ATOMIC VALIDATION: Jeder Loop-Zyklus erfordert den ultimativen Check: npm run build && npm run lint && npx tsc --noEmit.
4. SSOT CONSOLIDATION: Der Code überschreibt jegliche theoretische Planung. Die State-Dokumente beugen sich dem Code.
5. THE INFINITE RADAR: Statischer Code-Scan und visuelles Preview-Protokoll arbeiten als permanentes Radar-System.

Tech-Stack-Restriktionen (UNVERLETZLICH & FINAL):
- Core: Next.js 14/15+ (App Router ONLY), React 19+, TypeScript (Strict Mode = true)
- Styling: Tailwind CSS v4, CSS Modules oder CSS Custom Properties
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree und Calendly
- STRIKT VERBOTEN: Headless CMS, externe AI-APIs, Sentry/Monitoring-SaaS, Newsletter, i18n, Dark Mode.
- Die Goldene Regel: CODE IST DIE EINZIGE SOURCE OF TRUTH (SSOT).

═══════════════════════════════════════════════════════════════════════════════
STEP 0: MASTER CONTEXT INGESTION & OMNI-SYNC
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Lade das gesamte Gedächtnis des Projekts in den Arbeitsspeicher:

- Pipeline 1 (Expansion): Lese .expansion-state.md und .ai-expansion-context.md
- Pipeline 2 (Engineering): Lese .upgrade-state.md und .ai-architectural-context.md
- Pipeline 3 (Design): Lese .design-upgrade-state.md und .ai-design-context.md
- Pipeline 4 (QA): Lese .qa-pipeline-state.md und .qa-defect-log.md

Schritt 0.2 — Initialisiere das Closed-Loop-Dokument:

Erstelle oder überschreibe die .omni-closed-loop-state.md im Projekt-Root. Dieses Dokument trackt den Meta-Status aller 4 Pipelines und erzwingt den automatischen Re-Trigger, falls eine Pipeline einen Defekt in einer anderen aufdeckt. Konsolidiere Nomenklaturen: Wenn Code und Planung abweichen, dokumentiere den Code-Zustand.

Schritt 0.3 — Harter Baseline-Check:

Führe aus: npm run build && npm run lint && npx tsc --noEmit. Jedes Ergebnis ungleich ZERO ERRORS/WARNINGS bricht den Loop sofort ab und erzwingt einen Rückfall in die entsprechende Reparatur-Phase.

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — PIPELINE 1 AUDIT (EXPANSION: ARCHITEKTUR & DATEN)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: ROUTE- & DATEN-INTEGRITÄTS-CHECK

Die Struktur muss mathematisch fehlerfrei sein.

───────────────────────────────────────────────────────────────────────────────

Schritt 1.1 — Route Topology Sweep:

Simuliere einen Crawler über JEDE der 30+ definierten Routen im /app-Verzeichnis. Gibt es Waisen-Routen (Orphan Pages)? Jede Route muss durch interne Links erreichbar sein. Teste die Custom not-found.tsx und error.tsx. Jede Route muss 200 OK zurückgeben. Dokumentiere jede Route als: [PFAD] → [STATUS] → [ERREICHBAR VIA].

Schritt 1.2 — Data Matrix Validation:

Scanne /lib/data/. Prüfe alle 200+ Datensätze (Services, Blog, Team, Testimonials, Case Studies, FAQ, Company). Ist JEDES Objekt streng typisiert und entspricht exakt seinem Interface in /types/? Gibt es Felder mit undefined oder null wo ein Wert erwartet wird? Gibt es Getter-Funktionen die theoretisch undefined zurückgeben könnten ohne dass der aufrufende Code dies behandelt?

Schritt 1.3 — Referential Integrity:

Gibt es fehlende oder gebrochene Slug-Referenzen? Wenn Service A auf Case Study B verweist, MUSS Case Study B existieren. Wenn Testimonial C den serviceSlug "webdesign" referenziert, MUSS ein Service mit slug "webdesign" existieren. Jede Relation muss bidirektional intakt sein. Erstelle eine Referenz-Matrix: [QUELLE] → [ZIEL] → [STATUS: INTAKT/GEBROCHEN].

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — PIPELINE 2 AUDIT (ENGINEERING: RESILIENZ & PERFORMANCE)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: CONVERSION ENGINE & SECURITY HARDENING

Die Maschine muss sicher, performant und konvertierend sein.

───────────────────────────────────────────────────────────────────────────────

Schritt 2.1 — Performance-Gate erzwingen:

Prüfe das Next.js Build-Manifest (.next/analyze). LCP kleiner 1.8s, CLS kleiner 0.03, INP kleiner 100ms. JavaScript-Payload per Route unter 150KB (uncompressed). Jedes Bild im Above-the-Fold benötigt priority und korrekte sizes. Identifiziere Bundle-Splitting-Möglichkeiten bei Routen die das Budget überschreiten. Dokumentiere: [ROUTE] → [JS-SIZE] → [LCP] → [STATUS].

Schritt 2.2 — Formspree & Calendly Penetration:

Prüfe den Datenfluss an JEDEM Formular. Verifiziere die Validierung (Client-seitig), das Honeypot-Feld und das Error-Handling (Network Timeout, Rate Limiting, Server-Fehler). Prüfe das Calendly-Embed auf asynchronen Lazy-Load und Fallbacks. Teste: Was passiert bei Offline-Submit? Was passiert bei Invalid-Input? Was passiert bei Server-Error? Jedes Szenario muss eine benutzerfreundliche Fehlermeldung zeigen.

Schritt 2.3 — DSGVO & Security Sweep:

Verifiziere Security-Headers in der next.config.ts (Content-Security-Policy, X-Frame-Options, Strict-Transport-Security, Referrer-Policy, X-Content-Type-Options). Stelle sicher, dass ALLE Umgebungsvariablen (NEXT_PUBLIC_FORMSPREE_ID) vorhanden, aber keine Secrets im Client exponiert sind. Prüfe die DSGVO-Checkboxes auf JEDEM Formular: Nicht vorselektiert, Link zu Datenschutzerklärung funktioniert, Formular kann ohne Checkbox NICHT abgesendet werden.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — PIPELINE 3 AUDIT (DESIGN: PERFEKTION & ACCESSIBILITY)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: PIXEL-PERFECTION & KINETIC HARMONY

Das Design muss auf jedem Gerät fehlerfrei skalieren und barrierefrei sein.

───────────────────────────────────────────────────────────────────────────────

Schritt 3.1 — Design-Token Enforcement:

Scanne die Tailwind-Klassen aller 50+ Komponenten. Wird die 8px-Grid-Mathematik strikt eingehalten (nur p-2, p-4, p-6, p-8 etc.)? Werden ausschließlich die definierten Farb- und Typografie-Tokens verwendet? Finde und eliminiere Magic-Values: Keine hardcodierten Hex-Codes (bg-[#123456]) im Markup. Keine Dark-Mode-Klassen (dark:bg-*) erlaubt — suche und entferne sie rigoros.

Schritt 3.2 — Responsive & Touch Sweep:

Nutze das Antigravity Preview Protocol. Simuliere 375px, 768px, 1024px, 1280px und 1536px. Brechen Container? Gibt es horizontalen Scroll? Skaliert Fluid Typography ohne abrupte Media-Query-Sprünge? Ist jedes Touch-Target mindestens 48x48px groß (Buttons, Links, Input-Felder, Checkboxen)? Gibt es Elemente die auf Mobile unter dem Fold verschwinden obwohl sie wichtig sind (CTAs, Kontakt-Info)?

Schritt 3.3 — WCAG AAA & Motion Audit:

Verifiziere Kontrastverhältnisse (mindestens 7:1 für Kerntext, 4.5:1 für UI-Elemente). Prüfe Fokus-Ringe auf JEDEM interaktiven Element (ring-2 ring-offset-2 oder vergleichbar). Stelle sicher, dass ALLE Animationen bei prefers-reduced-motion: reduce sofort auf 0ms Dauer fallen. Kein animiertes Element darf ohne diese Respektierung existieren. Verifiziere Tab-Reihenfolge auf jeder Seite: Ist sie logisch? Kann man die gesamte Seite nur mit Tastatur bedienen?

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — PIPELINE 4 AUDIT (QA: STERILISATION & SEO)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: ZERO-DEFECT COMPILATION

Der Code muss klinisch rein sein.

───────────────────────────────────────────────────────────────────────────────

Schritt 4.1 — Defect-Log Abgleich:

Öffne .qa-defect-log.md. Verifiziere, dass jeder dort dokumentierte Fehler (P1 Critical bis P4 Minor) den Status FIXED hat. Kein einziger Workaround darf existieren. Kein einziger Defekt darf den Status WONTFIX oder DEFERRED haben — es gibt keine Ausreden in dieser Pipeline. Wenn ein Defekt als FIXED markiert ist, verifiziere dies im Code: Wurde er WIRKLICH behoben oder nur oberflächlich gepatched?

Schritt 4.2 — Hydration & Strict Mode:

Analysiere den initialen DOM-Load gegen den hydrierten React-State. Identifiziere Timestamp-Mismatches (Date.now(), new Date()), window-abhängige Berechnungen, localStorage-Zugriffe vor Hydration. Verifiziere npx tsc --noEmit auf ZERO Errors. Keine any Typen im gesamten Projekt. Keine @ts-ignore oder @ts-expect-error ohne architektonische Begründung als Kommentar im Code. Keine eslint-disable ohne dokumentierten Grund.

Schritt 4.3 — Dead Code Elimination & SEO:

Finde und vernichte: Ungenutzte Imports, auskommentierten Code, console.log Statements (außer in Error-Boundaries), ungenutzte CSS-Klassen, ungenutzte Komponenten die nirgends importiert werden, leere Dateien. Verifiziere Metadata-APIs (generateMetadata) auf JEDER öffentlichen Seite. Prüfe sitemap.ts: Enthält ALLE öffentlichen Routen. Prüfe robots.ts: Korrekte Konfiguration. Prüfe JSON-LD Schemas: Mindestens Organization, LocalBusiness, BreadcrumbList, Service und Article auf den relevanten Seiten.

═══════════════════════════════════════════════════════════════════════════════
BLOCK E — THE CLOSED LOOP ACTIVATION (ROOT-CAUSE ROUTING)
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: REVERSE SURGICAL INJECTION & SIGN-OFF

Wenn Block A bis D ohne einen einzigen Fehler durchlaufen, wird der Loop versiegelt. Wenn auch nur EIN Fehler gefunden wurde, wird der Loop NICHT versiegelt sondern der Fehler zur Wurzel-Pipeline zurückgeroutet.

───────────────────────────────────────────────────────────────────────────────

Schritt 5.1 — Etabliere das Root-Cause-Routing:

Wenn in Block A bis D ein Fehler gefunden wird, wird er NICHT einfach lokal behoben. Das System verfolgt den Fehler zurück zur Ursprungs-Pipeline und behebt ihn an der Wurzel:

Fehler-Typ: Fehlendes Prop, Zirkelbezug, gebrochene Datenreferenz
→ Root-Cause: Pipeline 1 (Expansion) — Datenmodell oder Route-Definition anpassen

Fehler-Typ: Performance-Regression, any-Type, fehlende Error-Boundary
→ Root-Cause: Pipeline 2 (Engineering) — Render-Strategie oder Type-System anpassen

Fehler-Typ: Wackelnder Hover-State, Kontrast-Fehler, Magic-Value im Styling
→ Root-Cause: Pipeline 3 (Design) — Transform-Origin oder Design-Token global korrigieren

Fehler-Typ: Übersehener Edge-Case, fehlender Test-Pfad
→ Root-Cause: Pipeline 4 (QA) — Test-Case erweitern und Defect-Log aktualisieren

Nach JEDER Wurzel-Korrektur wird der GESAMTE Loop (Block A bis D) erneut durchlaufen. Es gibt kein partielles Re-Testing.

Schritt 5.2 — Final Consolidation & Zero-Defect Certificate:

Aktualisiere .omni-closed-loop-state.md, um exakt die Strukturen widerzuspiegeln, die den npm run build überlebt haben. Generiere dort den finalen Report mit folgenden Sektionen:

SEKTION 1: Pipeline-Status-Matrix (alle 50 Phasen mit Status COMPLETE)
SEKTION 2: Build-Metriken (Build-Dauer, Bundle-Size pro Route, TypeScript Error Count = 0)
SEKTION 3: Performance-Metriken (LCP, CLS, INP pro kritischer Route)
SEKTION 4: Accessibility-Metriken (WCAG AAA Compliance-Rate, Focus-Ring-Coverage)
SEKTION 5: Security-Metriken (CSP aktiv, HSTS aktiv, keine exponierten Secrets)
SEKTION 6: SEO-Metriken (Metadata-Coverage, JSON-LD-Coverage, Sitemap-Vollständigkeit)
SEKTION 7: Zero-Defect Certificate — Formelle Bestätigung dass die Website Enterprise-Ready, DSGVO-konform, barrierefrei und auf Awwwards-Niveau hochperformant ist

═══════════════════════════════════════════════════════════════════════════════
ULTIMATE OMNI-LOOP VALIDATION CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

Jedes Element muss erfüllt sein. Kein Voranschreiten ohne 100% Pass-Rate.

□ OMNI-01: npm run build → ZERO Errors, ZERO Warnings. LCP kleiner 1.8s, CLS kleiner 0.03.
□ OMNI-02: npx tsc --noEmit → ZERO Errors. Keine impliziten any. Keine @ts-ignore.
□ OMNI-03: npm run lint → ZERO Errors, ZERO Warnings. Keine eslint-disable ohne Begründung.
□ OMNI-04: Expansion: 30+ Routen sind live, erreichbar, 404-frei und mit Error-Boundaries geschützt.
□ OMNI-05: Expansion: 200+ Datensätze sind strikt typisiert, bidirektional verknüpft und fehlerfrei.
□ OMNI-06: Engineering: Formspree (Kontakt & Multi-Step) fängt Spam ab. DSGVO-Checkboxes blockieren Non-Compliance.
□ OMNI-07: Engineering: Calendly Embed lädt non-blocking ohne Layout-Shifts. Security Headers (CSP, HSTS) sind aktiv.
□ OMNI-08: Design: Fluid Typography & 8px-Spacings skaliert perfekt von 375px bis 1536px ohne horizontalen Scroll.
□ OMNI-09: Design: 100% WCAG AAA Kontraste, sichtbare Keyboard-Focus-Ringe, keine Dark-Mode-Klassen.
□ OMNI-10: QA: Jede Animation respektiert prefers-reduced-motion. Toter Code und console.log sind vernichtet.
□ OMNI-11: Closed Loop: Jeder identifizierte Defekt wird an der Wurzel (in der jeweiligen Pipeline) behoben, nicht oberflächlich gepatched.
□ OMNI-12: Handoff: .omni-closed-loop-state.md entspricht exakt dem Quellcode und ist bereit für die Kundenübergabe.

═══════════════════════════════════════════════════════════════════════════════
LOOP STATUS
═══════════════════════════════════════════════════════════════════════════════

Beginne mit der Ausführung dieses Closed-Loops. Analysiere das Projekt und gib einen ungeschönten, detaillierten Bericht, an welchem Block (A, B, C oder D) der Loop aktuell noch scheitert, oder ob das Omni-Protokoll erfolgreich versiegelt werden kann. Der Loop ist erst versiegelt wenn ALLE 12 OMNI-Checkpunkte bestanden sind.

Der Loop schließt sich. Die Perfektion beginnt.