Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, diese Next.js/React/TypeScript-Website so unzerstörbar zu machen, dass KEIN Fehlerzustand — ob Netzwerkausfall, Server-Fehler, fehlende Daten, defekte API, ungültige Nutzereingabe oder Browser-Inkompatibilität — jemals zu einem kaputten, leeren oder verwirrenden Bildschirm führt. Jeder erdenkliche Fehlerzustand wird abgefangen, dem Nutzer freundlich kommuniziert und mit einem konstruktiven Ausweg versehen. Der Besucher soll das Gefühl haben, dass diese Marke unerschütterlich ist. Da Next.js eine eingebaute Error-Handling-Architektur bietet (error.tsx, not-found.tsx, loading.tsx, Suspense Boundaries), bauen wir ein umfassendes Resilienz-System, das diese Mechanismen vollständig ausschöpft. Dies ist Phase 9 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry/externe Monitoring-SaaS, keine Newsletter-Systeme, kein i18n-Framework
- ERROR-LOGGING: Nur lokale Console-Logs oder eigene lokale Logging-Lösung. KEIN Sentry, KEIN externes Error-Tracking-SaaS.

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md VOLLSTÄNDIG. Internalisiere alles aus Phase 1–8.

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe Handoff von Phase 8. Ergänze:
```
## Phase 9: Unzerstörbare Resilienz
- [ ] 0.3 Pre-Flight Discovery abgeschlossen
- [ ] Task 1: Error.tsx auf jeder Route-Ebene
- [ ] Task 2: Not-Found-Handling
- [ ] Task 3: Loading-States als Vertrauens-Kommunikation
- [ ] Task 4: Daten-Fetch-Resilienz
- [ ] Task 5: Formular-Resilienz
- [ ] Task 6: Client-Side-Error-Handling
- [ ] Task 7: Offline-Awareness
- [ ] Task 8: Self-Optimizing Loop
```

Schritt 0.3 — Pre-Flight Discovery:
1. Bestehende Error-Handling: Existieren error.tsx, not-found.tsx, loading.tsx? Wo? Wie?
2. Try/Catch-Audit: Grep nach try/catch. Wo wird gefangen? Wo NICHT?
3. Loading-States: Welche Routen haben loading.tsx? Welche Suspense-Boundaries existieren?
4. Formular-Fehlerzustände: Wie reagiert das Kontaktformular auf Fehler?
5. API-Routes: Existieren welche? Haben sie Error-Handling?

DOKUMENTIERE ALLES in .ai-architectural-context.md unter ### 🛡️ Resilienz & Error-Handling

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — NEXT.JS ERROR-BOUNDARY-ARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: ERROR.TSX AUF JEDER ROUTE-EBENE

Schritt 1.1 — Root-Error-Boundary (app/error.tsx):
Client Component ('use client' ist Pflicht). Props: error (Error), reset (Retry-Funktion).

Design:
- Gebrandetes Layout im Design-System
- Logo (Vertrauen auch im Fehlerfall)
- Headline: "Etwas ist schiefgelaufen" (empathisch)
- Subtext: "Wir arbeiten daran. In der Zwischenzeit können Sie:"
- 3 Aktionen: "Erneut versuchen" (reset()), "Zur Startseite" (Link), "Kontakt" (Telefon/E-Mail)
- Trust: "Wenn das Problem bestehen bleibt: [Telefonnummer]"

Technisch:
- Fehler wird via console.error geloggt (KEIN Sentry)
- Erfasst: error.message, error.stack, Pfad (usePathname), Timestamp
- Production: KEIN Stack-Trace sichtbar
- Development: Stack-Trace zusätzlich

Schritt 1.2 — Segment-spezifische Error-Boundaries:
- app/blog/error.tsx: "Der Artikel konnte nicht geladen werden" + Blog-Übersicht-Link
- app/services/error.tsx: "Die Service-Seite ist gerade nicht erreichbar" + Service-Übersicht
- app/contact/error.tsx: "Das Kontaktformular hat ein Problem" + Telefon/E-Mail direkt

Jede ist KONTEXTBEZOGEN — nicht generisch.

Schritt 1.3 — Global-Error-Boundary (app/global-error.tsx):
Für katastrophale Fehler die das Root-Layout betreffen:
- EIGENES html + body (Root-Layout ist kaputt)
- Inline CSS (keine externen Abhängigkeiten)
- Basale Kontaktinfo + Retry-Button

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 2: NOT-FOUND-HANDLING

Schritt 2.1 — Root Not-Found (app/not-found.tsx):
404 ist KEIN Fehler — es ist eine Chance:
- Markenkonformes Design
- Headline: "Diese Seite existiert nicht — aber wir können Ihnen trotzdem helfen"
- Suchfeld auf der 404-Seite
- Links zu 5 meistbesuchten Seiten
- CTA: "Kontaktieren Sie uns"
- Metadata: title "Seite nicht gefunden | [Marke]", robots: { index: false }

Schritt 2.2 — Dynamische Not-Found:
Für [slug]-Routen: notFound() aufrufen wenn Slug nicht existiert. Kontextbezogene Nachricht + Vorschläge ähnlicher Inhalte.

Schritt 2.3 — Soft-404-Vermeidung:
- Leere Suche = 200 mit freundlicher Empty-State. NICHT 404.
- Ungültiger Slug = 404 via notFound().
- Entfernte Seiten = 301-Redirect oder 410 Gone.

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 3: LOADING-STATES ALS VERTRAUENS-KOMMUNIKATION

Schritt 3.1 — loading.tsx pro Route:
Kontextbezogene Skeletons (NICHT generische Spinner):
- Blog-Übersicht: Skeleton-Card-Grid
- Blog-Einzelseite: Skeleton-Artikel (Titelbild, Headline, Textblöcke)
- Service-Seite: Skeleton-Hero + Sektionen
- Startseite: Skeleton-Hero + erste Sektion

Skeletons in EXAKTER Größe des finalen Contents → CLS = 0.

Schritt 3.2 — Suspense-Boundaries:
- Hero (statisch): Sofort sichtbar
- Dynamische Bereiche (Testimonials, Blog-Vorschau, Counter): Eigene Suspense mit eigenem Skeleton
- Progressives Laden sichtbar

Schritt 3.3 — Loading-Feedback bei Interaktionen:
- Button-Submit: Loading-State (Spinner, deaktiviert)
- Route-Wechsel: <RouteChangeIndicator /> — dünner Fortschrittsbalken am oberen Rand, nur sichtbar wenn >300ms
- Formular: useFormStatus()

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — DATEN- UND FORMULAR-RESILIENZ
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: DATEN-FETCH-RESILIENZ

Schritt 4.1 — Server-Component-Fetch:
Jeder fetch() in try/catch. Strategie bei Fehler:
1. Retry: 3 Versuche mit exponentiellem Backoff (1s, 2s, 4s)
2. Fallback-Daten: Gecachte Daten aus letztem Build
3. Graceful Degradation: Sektion nicht rendern statt Crash
4. Letzter Ausweg: notFound() oder throw (→ error.tsx)

Schritt 4.2 — TypeScript Result-Type:
```typescript
type Result<T> = { success: true; data: T } | { success: false; error: string }
```
Jede Fetch-Funktion gibt Result zurück. KEIN untypisiertes any.

Schritt 4.3 — API-Route-Resilienz (falls vorhanden):
- try/catch um jeden Handler
- Konsistentes Error-Format: { error: string, code: number }
- Rate-Limiting → 429
- Validierung → 400
- Interne Fehler → 500 (generisch, KEIN Stack-Trace)

Schritt 4.4 — Client-Side-Fetch:
- Loading-State: Skeleton/Spinner
- Error-State: Freundliche Meldung + Retry-Button
- Retry: 3 Auto-Versuche, dann manuell
- Stale-While-Revalidate: Veraltete Daten besser als leerer Bildschirm
- Offline: "Sie sind offline"-Nachricht

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 5: FORMULAR-RESILIENZ

Schritt 5.1 — Formspree-Fehlerbehandlung:
Validierungsfehler: Feld-spezifische Meldungen, Fokus auf erstes fehlerhaftes Feld.
Netzwerk-Fehler: "Konnte nicht gesendet werden. Prüfen Sie Ihre Verbindung." Daten gehen NICHT verloren. Alternative Kontaktwege anbieten.
Rate-Limiting: "Zu viele Anfragen. Bitte in [X] Minuten erneut."

Schritt 5.2 — Formular-Daten-Persistenz:
sessionStorage-Autosave alle 5s. Bei Crash/Tab-Close: Wiederherstellung. "Vorherigen Fortschritt wiederhergestellt" mit Verwerfen-Option.

Schritt 5.3 — Doppel-Submit-Schutz:
Button deaktiviert während Submit. useFormStatus() für Loading-State. Zeitbasierte Sperre (30s nach Submit).

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — CLIENT-SIDE-RESILIENZ
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: CLIENT-SIDE-ERROR-HANDLING

Schritt 6.1 — Unhandled Errors abfangen:
window.addEventListener('error') und window.addEventListener('unhandledrejection') in einem Root-Client-Component. Fehler loggen (console.error), optional UI-Feedback.

Schritt 6.2 — React Error Boundaries für Client Components:
Zusätzlich zu Next.js error.tsx: Eigene <ErrorBoundary /> Komponente für kritische Client-Widgets (Calendly-Embed, Karussells, Counter). Widget crasht → "Dieses Element konnte nicht geladen werden" statt weißer Seite.

Schritt 6.3 — Defensive Coding Standards:
- Optional Chaining (?.): ÜBERALL wo externe Daten gelesen werden
- Nullish Coalescing (??): Defaults für fehlende Werte
- Type Guards: Prüfe Datenstruktur vor Nutzung
- Array-Bounds: .at() oder Längenprüfung vor Index-Zugriff

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 7: OFFLINE-AWARENESS

Schritt 7.1 — useOnlineStatus()-Hook:
Erkennt Online/Offline via navigator.onLine + Event-Listener. SSR-kompatibel (Default: online).

Schritt 7.2 — Offline-Banner:
Bei Offline: Dezenter Banner am oberen Rand "Sie sind offline. Einige Funktionen sind eingeschränkt." Verschwindet automatisch bei Reconnect.

Schritt 7.3 — Formulare bei Offline:
Formular-Submit bei Offline → Speichere Daten lokal. Bei Reconnect: Automatisch senden oder Nutzer fragen. "Ihre Nachricht wird gesendet sobald Sie wieder online sind."

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 9 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 8: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 8.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### 🛡️ Resilienz & Error-Handling:
- Error-Boundary-Architektur (Root, Segment, Global)
- Not-Found-Handling
- Loading-State-System
- Fetch-Resilienz-Pattern (Result<T>)
- Formular-Resilienz
- Offline-Awareness
- Defensive Coding Standards

Schritt 8.2 — .upgrade-state.md finalisieren.

Schritt 8.3 — Handoff an Phase 10:
```
## Handoff → Phase 10 (Content-Architektur)
- Error-Boundaries: [Pfade und Abdeckung]
- Loading-States: [Welche Routen haben Skeletons]
- Formular-Resilienz: [Status]
- Empty-States die Content brauchen: [Liste]
```

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 9
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ app/error.tsx: Gebrandte Error-Seite mit Retry + Startseite + Kontakt
□ Segment-error.tsx für Blog, Services, Kontakt
□ app/global-error.tsx als Ultima-Ratio-Fallback
□ app/not-found.tsx: Markenkonform mit Suche + beliebte Seiten
□ notFound() bei ungültigen [slug]-Routen
□ loading.tsx mit kontextbezogenen Skeletons auf jeder Route
□ Suspense-Boundaries für granulares progressives Laden
□ CLS = 0 bei Loading→Content-Transition
□ Fetch-Resilienz: Result<T>, Retry, Fallback, Graceful Degradation
□ Formular: Feld-Fehler, Netzwerk-Fehler, Daten-Persistenz
□ Offline-Banner und Offline-Formular-Queue
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 10
