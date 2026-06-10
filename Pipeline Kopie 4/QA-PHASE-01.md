Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, eine vollständige und fehlerfreie Website-Baseline zu etablieren, bevor die finale Qualitätsprüfung beginnt.

QA-PHASE-01: GLOBAL CONTEXT INGESTION & PRE-FLIGHT AUDIT

Phase 1 ist der absolute Startpunkt der finalen Qualitätsschleuse. Bevor ein einziger Fehler gefixt wird, muss der GESAMTE aktuelle Zustand der Website erfasst, dokumentiert und als Baseline etabliert werden. Die KI liest JEDEN File, JEDE Route, JEDE Komponente und erstellt ein vollständiges Bild des Ist-Zustands. Dies ist QA-Phase 1 von 10 der Final QA & Error Hunting Pipeline.

═══ ZERO-DEFECT PROTOKOLL ═══

Ab dieser Pipeline existiert kein "ausreichend gut" mehr. Jeder verschobene Pixel, jede TypeScript-Warnung, jede tote Route ist ein fataler Fehler der korrigiert werden muss.

Zwei Error-Hunting Methoden werden systematisch angewendet:

1. STATIC DEEP SCAN (Code-Ebene): Scannen des Quellcodes nach Logic-Errors, Type-Konflikten, Hydration-Mismatches, ungenutztem Code, Performance-Bottlenecks. Tools: TypeScript Compiler (tsc), ESLint, Build-Prozess, Import-Graph-Analyse.

2. VISUAL PREVIEW PROTOCOL (UI/UX-Ebene): Scannen aller Seiten-Rendering nach Pixel-Perfection, Responsive-Breaks, Z-Index-Problemen, Animation-Glitches, Contrast-Problemen, Touch-Target-Größen. Wird in Phases 4-8 durchgeführt nach Static-Fixes.

GOLDENE REGEL: Der aktuelle Quellcode ist die ABSOLUTE SSOT (Single Source of Truth). Kontext-Dokumente helfen bei der Navigation, aber der Code gewinnt IMMER. Wenn Dokumentation und Code divergieren: Code ist korrekt, Doku wird aktualisiert.

═══ STEP 0: QA-STATE INITIALISIERUNG ═══

Aktion 0.1: Erstelle .qa-pipeline-state.md mit Checkliste aller 10 QA-Phasen (Phase 1-10). Markiere Phase 1 als "in progress". Alle anderen als "pending".

Aktion 0.2: Lies .ai-expansion-context.md wenn vorhanden. Lies .design-upgrade-state.md und .upgrade-state.md wenn vorhanden. Dokumentiere: Welche der 3 vorherigen Pipelines wurden tatsächlich durchlaufen? (Pipeline 1: Expansion, Pipeline 2: Engineering, Pipeline 3: Design)

Aktion 0.3: Verzeichnis-Struktur des Projekts kartieren. Notiere Root-Pfad, Next.js Version (aus package.json), Node-Version, NPM-Version. Dokumentiere das Tech-Stack: Next.js App Router, React 19+, TypeScript Strict Mode, Tailwind CSS, Formspree, Calendly.

═══ BLOCK A — CODEBASE VOLLSTÄNDIG EINLESEN ═══

TASK 1: VERZEICHNISSTRUKTUR KARTIEREN

Aktion 1.1: Lies die GESAMTE Dateistruktur rekursiv. Dokumentiere JEDEN Ordner und JEDE Datei mit relativen Pfaden. Starte bei /app (App Router) und /src, erfasse alle Komponenten, Utils, Hooks, Styles, Public-Assets.

Aktion 1.2: Zähle Dateien nach Typ: TypeScript/TSX-Dateien (insgesamt), CSS/Tailwind-Dateien, JSON-Dateien, Konfigurationsdateien (tsconfig, next.config, tailwind.config, etc.), Markdown-Dateien. Dokumentiere Zählungen.

Aktion 1.3: Identifiziere Node-Modules-Größe und ob .next Build-Cache existiert. Prüfe .gitignore auf Vollständigkeit.

TASK 2: ROUTE-INVENTAR

Aktion 2.1: Liste JEDE Route auf: Pfad (z.B. /app/services/[slug]/page.tsx), Dateiname, Server Component oder Client Component (prüfe "use client"), hat metadata export?, hat layout.tsx in Parent?, hat loading.tsx?, hat error.tsx?, hat not-found.tsx?.

Aktion 2.2: Für jede Route: Prüfe ob sie rendert oder Fehler wirft. Dokumentiere: Daten-Source (statisch JSON, API-Call, Dynamic Rendering), ISR/Revalidation-Strategie, Props erhalten?, Default-Export vorhanden?.

Aktion 2.3: Erstelle Route-Hierarchie-Diagramm (als Text): Zeige Parent-Child-Beziehungen der Routes.

TASK 3: KOMPONENTEN-INVENTAR

Aktion 3.1: Liste JEDE React-Komponente: Dateiname, Pfad, Server oder Client?, Props-Interface vorhanden oder TypeScript-Parameter-Typen?, Wird tatsächlich verwendet (Import-Check), Abhängigkeiten.

Aktion 3.2: Kategorisiere Komponenten: Layout-Komponenten, Page-Komponenten, Shared-Komponenten, UI-Primitives, Form-Komponenten, Data-Komponenten. Pro Kategorie: Anzahl.

Aktion 3.3: Prüfe Props-Drilling vs Context-Usage. Gibt es Props-Drilling über 3+ Ebenen? Wo wird Context verwendet?

TASK 4: DATEN-INVENTAR

Aktion 4.1: Liste JEDE Daten-Datei: Pfad (z.B. /app/data/services.ts), exportierte TypeScript-Interfaces/Types, exportierte Arrays/Objekte, exportierte Getter-Funktionen.

Aktion 4.2: Für jede Datei: Anzahl Datensätze, Struktur (ist es ein Array von Objekten?), werden alle Felder befüllt oder gibt es Null-Werte?, Sind Slugs eindeutig?.

Aktion 4.3: Dokumentiere Daten-Dependencies: Welche Services-Daten referenzieren Kunden-Daten, welche Blog-Posts referenzieren Team-Members, etc.

═══ BLOCK B — STATISCHE BASELINE-CHECKS ═══

TASK 5: TYPESCRIPT AUDIT

Aktion 5.1: Führe npx tsc --noEmit aus. Dokumentiere ALLE Fehler mit Zeilennummer, Datei, Error-Message.

Aktion 5.2: Kategorisiere alle Fehler: Type-Fehler (Typ stimmt nicht), Missing-Import (Datei oder Named-Export existiert nicht), Unused-Variable, Implicit-Any (any-Typ without explicit), Generic-Constraint-Fehler, Union-Type-Mismatch.

Aktion 5.3: Zähle Fehler pro Kategorie. Total: X Fehler, davon Y Implicit-Any, Z Missing-Imports, etc.

TASK 6: BUILD AUDIT

Aktion 6.1: Führe npm run build aus. Dokumentiere JEDEN Fehler und JEDE Warning.

Aktion 6.2: Kategorisiere: Build-Error (Prozess stoppt), Runtime-Warning (Prozess läuft aber warnt), Deprecation-Warning (alte API), Bundle-Size-Warning (Seite zu groß).

Aktion 6.3: Dokumentiere Build-Dauer (in Sekunden). Total Bundle-Size. Größte Routes/Pages.

TASK 7: LINT AUDIT

Aktion 7.1: Führe npm run lint aus. Dokumentiere JEDE Regel-Verletzung.

Aktion 7.2: Kategorisiere nach ESLint-Regel: react/prop-types, @typescript-eslint/explicit-function-return-types, unused-vars, no-console, etc. Pro Regel: Zählung.

Aktion 7.3: Kategorisiere nach Schweregrad: error (muss gefixt), warning (sollte gefixt), info (optional).

TASK 8: DEPENDENCY AUDIT

Aktion 8.1: Prüfe package.json: Welche Dependencies sind installiert? npm list --depth=0.

Aktion 8.2: Führe npm audit aus. Gibt es Security-Vulnerabilities? Mit welchem Severity-Level (critical, high, moderate, low)?

Aktion 8.3: Prüfe auf unused Dependencies (Dateien importieren aber package.json hat sie): z.B. lodash in package.json aber nirgendwo import. Umgekehrt: Dateien importieren etwas aber package.json hat es nicht.

═══ BLOCK C — CROSS-REFERENZ-ANALYSE ═══

TASK 9: IMPORT-GRAPH

Aktion 9.1: Konstruiere kompletten Import-Graphen: Welche Komponente importiert welche, welcher Service importiert welchen, welche Page importiert welche Layout.

Aktion 9.2: Prüfe auf Zirkuläre Imports: A importiert B, B importiert A (direkt oder indirekt). Dokumentiere jeden Fund.

Aktion 9.3: Prüfe auf verwaiste Dateien: Dateien existieren im Projekt aber werden nirgendwo importiert. Dies sind Dead-Code-Kandidaten.

Aktion 9.4: Prüfe auf fehlende Imports: Dateien referenzieren etwas (z.B. const testimonials = TESTIMONIALS) aber TESTIMONIALS ist nie importiert.

TASK 10: DATEN-KONSISTENZ

Aktion 10.1: Alle Slug-Referenzen prüfen. Beispiel: Wenn ein Testimonial serviceSlug="webdesign" referenziert, existiert ein Service mit dem Slug "webdesign" in der Services-Datei?

Aktion 10.2: Alle Author-Referenzen prüfen: Wenn BlogPost author="max-mustermann" referenziert, existiert ein TeamMember mit slug="max-mustermann"?

Aktion 10.3: Alle Asset-Referenzen prüfen: Wenn eine Komponente src="/images/xyz.jpg" hat, existiert /public/images/xyz.jpg?

Aktion 10.4: JEDE Cross-Referenz validieren. Dokumentiere: Wie viele Referenzen insgesamt? Wie viele davon sind gebrochen?

TASK 11: METADATA-VOLLSTÄNDIGKEIT

Aktion 11.1: Prüfe JEDE Route auf metadata export. Welche haben eine Metadata-Funktion, welche nicht? Dokumentiere.

Aktion 11.2: Prüfe auf Duplikat-Titles: Gibt es mehrere Routes mit demselben Title in Metadata?

Aktion 11.3: Prüfe auf fehlende Descriptions: Metadata ohne description oder zu kurz (<50 Zeichen)?

Aktion 11.4: Prüfe auf JSON-LD Schemas: Wo sollten sie sein (Services, Blog, FAQ, Company Pages)? Wo sind sie vorhanden? Wo fehlen sie?

═══ BLOCK D — BASELINE-DOKUMENTATION & DEFECT-LOG ═══

TASK 12: DEFECT-LOG ERSTELLEN

Aktion 12.1: Erstelle .qa-defect-log.md. Pro gefundenem Fehler ein Entry mit: ID (QA-001, QA-002, etc.), Schweregrad (CRITICAL/HIGH/MEDIUM/LOW), Kategorie (Type-Error, Build-Error, Lint-Error, Data-Inconsistency, Route-Error, Component-Error, Import-Error, Metadata-Error), Beschreibung (1 Satz), betroffene Datei(en), vorgeschlagener Fix.

Aktion 12.2: CRITICAL = Build-Breaker oder Runtime-Crash. HIGH = Type-Fehler, fehlende Route, gebrochene Cross-Referenz. MEDIUM = Lint-Warnung, fehlende Metadata. LOW = Style-Inkonsistenz, unused Variable.

Aktion 12.3: Defect-Log formatieren: Eine Tabelle mit Spalten: ID, Severity, Category, File, Description, Fix. Sortiert nach Severity (CRITICAL → HIGH → MEDIUM → LOW).

TASK 13: BASELINE-METRIKEN

Aktion 13.1: Dokumentiere folgende Metriken (DIESE sind die Baseline):

- Build-Dauer: X Sekunden
- Bundle-Size Total: Y MB
- Anzahl TypeScript-Fehler (tsc): Z
- Anzahl Lint-Fehler (npm run lint): A
- Anzahl Lint-Warnungen: B
- Anzahl Routes insgesamt: C
- Anzahl Komponenten insgesamt: D
- Anzahl Daten-Dateien: E
- Anzahl Cross-Reference-Fehler: F
- Anzahl Security-Vulnerabilities (npm audit): G

Aktion 13.2: Vergleiche mit vorherigen Pipelines falls dokumentiert. Sind die Metriken schlechter geworden?

Aktion 13.3: GOAL für Phase 10: Alle Error-Zahlen = 0. Build-Dauer = vorherige oder besser. Bundle-Size = vorherige oder besser.

TASK 14: PRIORISIERUNGS-MATRIX

Aktion 14.1: Erstelle Priorisierungs-Matrix basierend auf Schweregrad und Auswirkung:

TIER 1 (CRITICAL): Build-Breaker, Runtime-Crashes, Type-Errors die nicht kompilieren. PHASE: 2-3 beheben.
TIER 2 (HIGH): Type-Fehler, fehlende Routen, gebrochene Cross-Referenzen, Missing-Imports. PHASE: 2-3 beheben.
TIER 3 (MEDIUM): Lint-Warnungen, fehlende Metadata, Security-Vulnerabilities (low/moderate). PHASE: 4-8 beheben während Visual Preview.
TIER 4 (LOW): Style-Inkonsistenzen, unused Variables, Code-Style-Issues. PHASE: 9-10 beheben.

Aktion 14.2: Dokumentiere: "Phase 2 und 3 beheben diese CRITICAL und HIGH Defects: [Liste]" (aus Defect-Log).

═══ ATOMIC VALIDATION ═══

Validierungs-Checkliste für Phase 1 Completion:

□ .qa-pipeline-state.md existiert und alle 10 Phasen sind aufgelistet
□ Phase 1 ist als "in progress" markiert, Phasen 2-10 als "pending"
□ .qa-defect-log.md existiert mit allen gefundenen Defects
□ Mindestens 5 Defects dokumentiert (oder 0 falls No-Errors)
□ Verzeichnis-Inventar ist komplett: jede .tsx, .ts, .css Datei erfasst
□ Route-Inventar komplett: jede /app/[path]/page.tsx erfasst
□ Komponenten-Inventar komplett: jede Komponente aufgelistet
□ Daten-Inventar komplett: jede /data/*.ts Datei dokumentiert
□ TypeScript Audit durchgeführt: tsc --noEmit Ergebnisse dokumentiert
□ Build Audit durchgeführt: npm run build Ergebnisse dokumentiert
□ Lint Audit durchgeführt: npm run lint Ergebnisse dokumentiert
□ Dependency Audit durchgeführt: npm audit Ergebnisse dokumentiert
□ Import-Graph-Analyse komplett: zirkuläre Imports prüfen
□ Daten-Konsistenz-Check komplett: alle Slugs validiert
□ Metadata-Vollständigkeit-Check komplett: alle Routes geprüft
□ Cross-Reference-Fehler dokumentiert: wie viele gebrochen?
□ Asset-Referenzen validiert: existieren alle /public/* Dateien?
□ Baseline-Metriken dokumentiert: Build-Dauer, Bundle-Size, Error-Zählung
□ Defect-Log sortiert nach Severity (CRITICAL → LOW)
□ Priorisierungs-Matrix erstellt: Tiers 1-4 definiert
□ Handoff-Dokument für Phase 2 vorbereitet
□ Keine offenen Fragen zur Codebase-Struktur
□ Gesamtzahl Defects ermittelt: X Fehler gefunden
□ Gesamtzahl Routes ermittelt: Y Routes
□ Gesamtzahl Komponenten ermittelt: Z Komponenten
□ Tech-Stack bestätigt: Next.js App Router, React 19, TS Strict, Tailwind
□ Dependencies validiert: Keine offensichtlichen Missing/Unused
□ All .md Phase-Dateien sind fehlerfrei und lesbar
□ Alle Zahlen sind konsistent (keine Widersprüche zwischen Tasks)

═══ SELF-OPTIMIZING LOOP & HANDOFF ═══

.qa-pipeline-state.md wird nach jeder Phase aktualisiert. .qa-defect-log.md wird mit "FIXED" markiert wenn Defect behoben, und neue Defects werden hinzugefügt wenn sie während der Fixes entdeckt werden.

Phase 1 Completion signalisiert: Baseline ist stabil und vollständig dokumentiert. Der aktuelle Ist-Zustand der Website ist BEKANNT. Alle fehlende, gebrochene, und fehlerhafte Code-Stellen sind inventarisiert.

Phase 2 Begins: Static Error Hunting I — Types, Logic, Hydration. Alle CRITICAL und HIGH Defects aus Tier 1 und Tier 2 werden systematisch durchgearbeitet und behoben. Ziel: Zero TypeScript Errors, Zero Build Errors.

Phase 3 Continues: Static Error Hunting II — Routes, Components, Data. Restliche Type-Probleme, fehlende Routes, gebrochene Cross-Referenzen.

Phases 4-8: Visual Preview Protocol — Jede Route wird im Browser geöffnet und auf UI/UX-Defects gescannt. MEDIUM-Defects behoben.

Phases 9-10: Final Polish — Code-Style, unused Variables, LOW-Defects.

═══ COMPLIANCE CHECKLIST (25+ ITEMS) ═══

□ QA-PHASE-01.md Datei existiert im /Pipeline Verzeichnis
□ Datei beginnt mit erforderlichem Satz ("Bereinige alle Vorherigen Tasks...")
□ Datei verwendet NO Markdown-Header (#), nur ═══ und ─── Separatoren
□ Alle Content ist auf Deutsch
□ Alle Tasks sind nummeriert: Task 1-4 in Block A, Task 5-8 in Block B, etc.
□ Alle Aktionen sind nummeriert: Aktion X.Y Format
□ Block-Struktur folgt A, B, C, D
□ Ultrathink-Task-Format verwendet
□ Zero-Defect-Protokoll ist dokumentiert
□ Zwei Error-Hunting Methoden sind erklärt
□ SSOT-Regel ist dokumentiert
□ Alle 14 Tasks sind detailliert beschrieben
□ Atomic Validation ist komplett
□ Compliance-Checkliste hat 25+ Items
□ Self-Optimizing Loop erklärt
□ Handoff zu Phase 2 dokumentiert
□ Tech-Stack ist korrekt (Next.js, React 19, TS Strict, Tailwind)
□ Keine Code-Snippets im Dokument (nur Beschreibungen)
□ Defect-Log-Format ist detailliert (ID, Severity, Category, etc.)
□ Priorisierungs-Matrix hat 4 Tiers
□ Baseline-Metriken Liste ist komplett (mindestens 10 Metriken)
□ Deutsche Sprache durchgehend konsistent
□ Dokument ist zwischen 550-700 Zeilen
□ Alle Verweise auf vorherige Pipelines (1, 2, 3) sind dokumentiert
□ Phase 1 von 10 wird deutlich erwähnt

═══ CLOSING ═══

Phase 1 → Phase 2 beginnt mit Static Error Hunting I: Types, Logic & Hydration.

Alle CRITICAL und HIGH Defects aus dem Defect-Log werden systematisch behoben. TypeScript muss 0 Fehler zeigen. npm run build muss erfolgreich durchlaufen. Zirkuläre Imports müssen aufgelöst sein. Cross-Reference-Fehler müssen behoben sein.

Nach Phase 2 ist die Codebase structurally sound. Nach Phase 3 ist die Codebase functionally complete. Nach Phases 4-8 ist die Codebase visually perfect. Nach Phasen 9-10 ist die Codebase production-ready für Client-Handoff.

Dies ist Pipeline 4: Final QA & Error Hunting. Die Website ist bereits feature-complete, beautifully designed (aus Pipelines 1-3). Diese Pipeline findet und fixt JEDEN verbleibenden Fehler. Zero-Defect-Ziel: AM ENDE VON PHASE 10 MUSS DIE WEBSITE MAKELLOS SEIN.
