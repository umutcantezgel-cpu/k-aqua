Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die Codebase zu sterilisieren und alle toten Code-Strukturen zu eliminieren.

═══════════════════════════════════════════════════════════════════════════════
PHASE 9 VON 10: DEAD CODE ELIMINATION & CODEBASE STERILIZATION
═══════════════════════════════════════════════════════════════════════════════

Pipeline 4: Final QA. Die Codebase wird vollständig sterilisiert. Jede Zeile, die nicht zur Produktion gehört, wird entfernt: Toter Code, ungenutzte Imports, verwaiste Komponenten, TODO-Kommentare, console.log Statements, auskommentierter Code, leere Dateien, ungenutzte Dependencies. Am Ende ist der Code so sauber wie ein frisch operierter OP-Saal.

TECH STACK: Next.js App Router, React 19+, TypeScript Strict, Tailwind CSS. Kein Dark Mode, kein Sentry.

───────────────────────────────────────────────────────────────────────────────

═══ ZERO-DEFECT PROTOKOLL ═══

Ziel dieser Phase: Alle nicht-produktiven Code-Strukturen müssen aus der Codebase entfernt sein. Keine Debug-Ausgaben, keine TODO-Marker, keine verwaisten Dateien. Der Code-Quality-Index muss 100% erreichen. Dies ist die letzte Sterilisierungsphase vor dem produktiven Release.

───────────────────────────────────────────────────────────────────────────────

═══ STEP 0: SYNC ═══

Verifiziere, dass die Codebase vom vorherigen Build intakt ist. Überprüfe:
• Alle Dateien im /components, /app, /lib, /utils Verzeichnis sind vorhanden
• tsconfig.json hat "strict": true
• .eslintrc.json existiert mit korrektem Format
• package.json ist konsistent
• node_modules sind frisch installiert oder cached

Starten Sie mit: npm ci und npm run type-check zur Validierung.

───────────────────────────────────────────────────────────────────────────────

═══ BLOCK A — TOTER CODE ═══

ULTRATHINK-TASK-01: UNUSED IMPORTS ELIMINATION

Durchsuche JEDE TypeScript/JavaScript-Datei in /components, /app, /lib, /utils. Identifiziere alle Imports, die deklariert aber nie verwendet werden. TypeScript mit "strict": true sollte viele davon bereits melden. ESLint Regel no-unused-vars wird strikt angewendet.

Prozess: Öffne jede Datei, scannen Sie jeden Import-Statement. Überprüfen Sie, ob der importierte Identifier im Code vorkommt. Falls nicht → löschen. Beispiele: "import { Button } from '@/components/ui/button'" ohne Button-Verwendung. "import type { User }" ohne User-Referenz. Besondere Aufmerksamkeit auf React-Imports in Client-Komponenten die möglicherweise useState nicht verwenden.

Dokumentiere jeden entfernten Import in .qa-defect-log.md mit Dateiname und Grund.

───

ULTRATHINK-TASK-02: UNUSED COMPONENTS ELIMINATION

Erstelle einen Import-Graph der gesamten Codebase. Welche Komponenten in /components werden nirgends importiert? Welche Dateien in /app/api existieren aber werden nicht aufgerufen? Welche utils-Funktionen werden nicht importiert?

Prozess: Durchsuche mit grep/ripgrep nach jedem Komponenten-Namen. Beispiel: "Contact.tsx" → Suche nach "import.*Contact" überall in der Codebase. Falls kein Match → verwaiste Komponente. Entscheide: Löschen oder als "deprecated" markieren mit Datum. Leere oder Placeholder-Komponenten müssen weg.

Für jede verwaiste Komponente: Dokumentiere in defect-log mit Komponenten-Name, Pfad und Entscheidung (gelöscht oder deprecated).

───

ULTRATHINK-TASK-03: UNUSED VARIABLES & FUNCTIONS

Lokale Variablen die deklariert aber nie gelesen werden. Funktionen die exportiert aber nie aufgerufen werden. Type-Definitionen die nie referenziert werden. Alle müssen entfernt werden.

Prozess: TypeScript im strict-mode hilft hier. Nutze "Find All References" in IDE für jeden Export. Falls keine References → löschen. Spezielle Fälle: Utility-Typen in shared type files; Props-Interfaces wo nur Subset verwendet wird. Entferne alle ungenutzten Props aus Interfaces.

Beispiel: Funktion "formatDate()" die nie aufgerufen wird → löschen. Interface "UserProps" mit 10 Feldern wo nur 3 verwendet werden → refactore auf genutzte Felder.

───────────────────────────────────────────────────────────────────────────────

═══ BLOCK B — HYGIENE ═══

ULTRATHINK-TASK-04: TODO ELIMINATION

Durchsuche gesamte Codebase nach TODO, FIXME, HACK, XXX, BUG, REFACTOR Kommentaren. grep -r "TODO\|FIXME\|HACK\|XXX" src/

Für jeden gefundenen Marker: Entscheide: Ist die Aufgabe erledigt? → Kommentar entfernen. Ist sie noch offen und wichtig? → In .qa-defect-log.md unter [DEFECTS-OUTSTANDING] dokumentieren mit vollständiger Beschreibung und Dateiname/Zeile. Anschließend → Kommentar aus Code entfernen.

KEIN TODO darf im Production-Code verbleiben. Das ist absolute Anforderung.

───

ULTRATHINK-TASK-05: CONSOLE STATEMENT CLEANUP

Entferne ALLE console.log, console.warn, console.debug, console.info Statements aus dem gesamten Codebase. Diese sind nur für Development gedacht.

BEHALTE console.error NUR in Error-Handlern, Error-Boundaries und kritischen Exception-Handler. Beispiel: "catch (error) { console.error('Payment failed:', error); }" ist OK. Aber "console.log('user loaded')" ist nicht OK.

Prozess: grep -r "console\.(log|warn|debug|info)" src/ Jedes Match inspizieren. Falls nicht console.error → entfernen. Falls console.error → verifizieren, dass es in Error-Handler ist.

───

ULTRATHINK-TASK-06: COMMENTED-OUT CODE ELIMINATION

Durchsuche nach Blöcken auskommentierten Codes. Code der auskommentiert ist ("// const x = 5;" oder "/* old code */") muss weg.

Begründung: Git hat die vollständige History. Auskommentierter Code ist nur Clutter. Es gibt keine legitimen "vielleicht brauche ich das später"-Cases in Production-Code.

Prozess: Manuell durch Dateien gehen und auskommentierte Code-Blöcke löschen. Normale Kommentare (Erklärungen, Dokumentation) bleiben. Nur Code-Kommentare werden entfernt.

───

ULTRATHINK-TASK-07: LEERE DATEIEN ELIMINATION

Gibt es Dateien die leer sind oder nur einen leeren Export "export {};" haben? Diese sind Platzhalter und gehören nicht in Production.

Prozess: find src/ -type f -name "*.ts*" -size 0 oder ls -la | grep "^-.*0 " Und auch Dateien mit nur "export {}" oder nur Imports ohne Body. Entscheide: Füllen mit echtem Inhalt oder löschen. Bei fehlenden Inhalten → löschen.

───────────────────────────────────────────────────────────────────────────────

═══ BLOCK C — DEPENDENCY & CONFIG CLEANUP ═══

ULTRATHINK-TASK-08: UNUSED DEPENDENCIES

Analysiere package.json. Welche Dependencies und devDependencies werden im Code nicht importiert? npm ls --depth=0 und grep -r "from.*\|import.*\|require.*" um zu checken, welche Packages tatsächlich verwendet werden.

Prozess: Für jede dependency in package.json: Suche nach Imports davon. Beispiel: "lodash" in package.json → grep -r "from 'lodash'\|from \"lodash\"" Falls kein Match → unused dependency. Kandidaten zum Löschen: veraltete Polyfills, Packages die durch native APIs ersetzt wurden, test-only packages in dependencies (sollten in devDependencies sein).

Kommando: npm prune --production um Validation zu starten. Danach: npm audit um sicherzustellen, dass keine Security-Issues durch Removals entstanden sind.

───

ULTRATHINK-TASK-09: CONFIG CLEANUP

Überprüfe next.config.js, tsconfig.json, tailwind.config.js, .eslintrc.json auf Komplexität und Notwendigkeit jeder Option.

next.config.js: Werden alle middleware, rewrites, headers verwendet? Sind alle API-Routen noch aktuell? tsconfig.json: Strict Mode ist aktiviert? lib, types, baseUrl sind nötig? tailwind.config: Content-Paths sind korrekt? Alle Plugins werden verwendet? .eslintrc: Regeln sind konsistent über alle Dateien? Keine Widersprüche zwischen ESLint und TypeScript?

Bereinige jede Config-Datei von ungenutzten oder überbordenden Optionen.

───

ULTRATHINK-TASK-10: ENVIRONMENT VARIABLES

Überprüfe: .env.example existiert mit ALL nötigen Variablen für lokales Development? Keine Secrets sind in .env committed (überprüfe git history mit "git log -p -- .env"). .gitignore hat .env, .env.local, .env.*.local gelistet? Formspree-URL oder andere externe Service-URLs sind als ENV-Variablen definiert, nicht hardcoded in Code?

Prozess: Vergleiche alle process.env.* Zugriffe im Code mit .env.example. Falls Variable fehlt → zu .env.example hinzufügen. Falls .env.example Variable enthält aber nicht im Code verwendet → aus .env.example entfernen.

───────────────────────────────────────────────────────────────────────────────

═══ BLOCK D — FINAL LINT & VALIDATION ═══

ULTRATHINK-TASK-11: FINAL FULL LINT

Führe npm run lint aus (oder eslint . --ext .ts,.tsx,.js,.jsx). Das Ergebnis muss ZERO Errors UND ZERO Warnings sein. Keine Warnungen akzeptiert.

Falls Warnings vorhanden: Jede einzelne beheben oder mit Kommentar bewusst suppressed. Beispiel: "// eslint-disable-next-line no-console" mit begründung warum console.error hier nötig ist. Alle Suppressions werden dokumentiert.

───

ULTRATHINK-TASK-12: FINAL BUILD

npm run build MUSS erfolgreich sein mit ZERO Errors UND ZERO Warnings. Das Next.js Build sollte optimierte Production-Artifacts produzieren. Keine Dead-Code-Elimination-Warnings vom Bundler. Keine TypeScript-Compile-Errors.

Vergleiche Bundle-Size mit Phase-1 Baseline (falls dokumentiert). Die Size sollte nicht gewachsen sein; eher geschrumpft durch Dead-Code-Elimination.

───

ULTRATHINK-TASK-13: DEFECT-LOG FINAL UPDATE

Aktualisiere .qa-defect-log.md vollständig. ALLE verbleibenden bekannten Defects müssen mit Status gekennzeichnet sein: [RESOLVED], [WONTFIX], [DEFERRED-TO-PHASE-10].

Falls [WONTFIX] oder [DEFERRED]: Explizite Begründung erforderlich. Beispiel: "[WONTFIX] — Datei X bleibt wegen Legacy-Integration" oder "[DEFERRED-TO-PHASE-10] — Feature Y braucht mehr Research".

Defect-Log darf keine unklassifizierten Einträge enthalten.

───────────────────────────────────────────────────────────────────────────────

═══ ATOMIC VALIDATION ═══

Nach jedem Block (A, B, C, D) ein Checkpoint:
• BLOCK A vollendet → npm run type-check muss Zero Errors sein
• BLOCK B vollendet → npm run lint muss Zero Warnings sein
• BLOCK C vollendet → package.json ist konsistent, alle ENV-Variablen dokumentiert
• BLOCK D vollendet → npm run build produziert Production-Artifacts erfolgreich

Falls ein Checkpoint scheitert → sofort zurück zu verursachenden Task, nicht weitermachen.

───────────────────────────────────────────────────────────────────────────────

═══ SELF-OPTIMIZING LOOP ═══

Nach Completion aller Blöcke: Wiederhole die Lint/Build-Zyklen 2x. Falls neue Warnings auftauchen → beheben → repeat bis stabil. Dies stellt sicher, dass keine versteckten Abhängigkeiten durch frühere Löschungen kaputt gehen.

───────────────────────────────────────────────────────────────────────────────

═══ COMPLETION CHECKLIST ═══

Vor dem Sign-Off dieser Phase: Verifiziere folgende 20+ Items:

☐ Alle unused imports gelöscht
☐ Alle verwaisten Komponenten gelöscht oder dokumentiert
☐ Alle ungenutzten Variablen/Funktionen entfernt
☐ Null TODO/FIXME/HACK Kommentare im Code
☐ Alle console.log/warn/debug entfernt (außer console.error in Error-Handlern)
☐ Kein auskommentierter Code vorhanden
☐ Keine leeren Dateien im src/
☐ package.json enthält nur genutzte Dependencies
☐ node_modules konsistent nach npm ci
☐ next.config.js optimiert
☐ tsconfig.json strict Mode aktiv
☐ tailwind.config.js hat nur genutzte Content-Paths
☐ .eslintrc konsistent und aktuell
☐ .env.example komplett und sicher
☐ .gitignore hat alle sensiblen Dateien
☐ npm run type-check: Zero Errors
☐ npm run lint: Zero Errors, Zero Warnings
☐ npm run build: Erfolgreich, Production-Artifacts erzeugt
☐ .qa-defect-log.md vollständig klassifiziert
☐ Alle Blöcke (A/B/C/D) mit Checkpoints validiert
☐ Build-Size dokumentiert vs Phase-1 Baseline
☐ Self-Optimizing-Loop 2x durchlaufen

───────────────────────────────────────────────────────────────────────────────

═══ CLOSING ═══

PHASE 9 ist VOLLENDET. Die Codebase ist STERIL. Kein toter Code, keine Debug-Ausgaben, keine verwaisten Dateien. Der Code ist produktionsreif und sauber.

NÄCHSTE PHASE: PHASE 10 VON 10 — FINAL DEPLOYMENT & VERIFICATION. Hier wird die finale Validierung, Smoke-Tests, und Production-Deployment durchgeführt. Dies ist der letzte Schritt vor Go-Live.
