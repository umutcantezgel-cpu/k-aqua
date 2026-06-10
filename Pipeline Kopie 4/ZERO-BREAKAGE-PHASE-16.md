Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, diese Next.js/React/TypeScript-Website auf Enterprise-Grade Security und vollständige DSGVO-Compliance zu heben — jede Eingabe wird sanitisiert, jeder Header gehärtet, jede Datenverarbeitung dokumentiert und jedes Cookie rechtlich abgesichert. Kein Angriff auf die OWASP Top 10 darf erfolgreich sein, kein Datenschutzverstoß darf möglich sein, und die Website soll das Vertrauen eines Nutzers in derselben Sekunde gewinnen, in der er sie besucht. Die Phasen 1–15 haben eine funktionale, performante, zugängliche und analytisch durchleuchtete Website geschaffen. Phase 16 macht sie unangreifbar und rechtskonform. Dies ist Phase 16 von 20 der Zero-Breakage & Self-Optimizing Upgrade Pipeline.

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
- STRIKT VERBOTEN: Kein Headless CMS (Sanity, Contentful, Payload etc.), keine externen AI-APIs, kein Sentry oder externe Error-Tracking-SaaS, keine Newsletter-Systeme, kein i18n-Framework. Content lebt im Code oder in lokalen Datenstrukturen.

DIE GOLDENE REGEL: Code ist IMMER die Single Source of Truth (SSOT). Wenn .ai-architectural-context.md etwas anderes sagt als der Code → DER CODE GEWINNT.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

Schritt 0.1 — Kontext-Dokument lesen:
Lies .ai-architectural-context.md vollständig. Verstehe den aktuellen Architektur-Zustand.

Schritt 0.2 — Upgrade-State lesen:
Lies .upgrade-state.md. Prüfe den Handoff von Phase 15. Ergänze:
```
## Phase 16: Enterprise Security & DSGVO-Compliance
- [ ] 0.3 Pre-Flight Security-Audit abgeschlossen
- [ ] Task 1: DSGVO-Tiefenaudit und Datenverarbeitungsinventar
- [ ] Task 2: Cookie-Consent-System (DSGVO-konform)
- [ ] Task 3: Datenschutzerklärung und Impressum
- [ ] Task 4: Content Security Policy (CSP)
- [ ] Task 5: Security-Headers Hardening
- [ ] Task 6: Input-Sanitisierung und XSS-Prävention
- [ ] Task 7: CSRF-Schutz und Formularsicherheit
- [ ] Task 8: Rate-Limiting und DDoS-Grundschutz
- [ ] Task 9: Dependency-Audit und Supply-Chain-Security
- [ ] Task 10: Security-Testing und Penetrationstest-Checkliste
- [ ] Task 11: Self-Optimizing Loop
```

Schritt 0.3 — Pre-Flight Security-Audit:
BEVOR du änderst, führe ein vollständiges Security-Audit durch:

1. Headers-Check: Rufe die Website auf und prüfe ALLE Response-Headers. Dokumentiere fehlende Security-Headers.
2. CSP-Check: Existiert eine Content Security Policy? Wie strikt? Welche Quellen erlaubt?
3. Cookie-Audit: Welche Cookies werden gesetzt? Von wem? Mit welchen Flags (Secure, HttpOnly, SameSite)?
4. Dependency-Audit: npm audit ausführen. JEDE Vulnerability dokumentieren (Severity, Package, Fix).
5. Input-Audit: Alle Eingabefelder identifizieren (Kontaktformular, Suche, URL-Parameter). Wie werden sie validiert?
6. Drittanbieter-Audit: Welche externen Scripts werden geladen? (Calendly, GA4, Formspree). Welche Daten senden sie?
7. Environment-Variables: Welche env-Vars existieren? Sind sie korrekt als NEXT_PUBLIC_ vs. serverseitig getrennt?
8. HTTPS: Wird HTTPS erzwungen? Existiert HSTS?
9. Datenschutzerklärung: Existiert sie? Ist sie vollständig? Letzte Aktualisierung?
10. Impressum: Existiert es? Enthält es alle Pflichtangaben nach §5 TMG?

DOKUMENTIERE ALLES in .ai-architectural-context.md unter:
### 🔒 Security & DSGVO-Status

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — DSGVO-COMPLIANCE & DATENSCHUTZ
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 1: DSGVO-TIEFENAUDIT UND DATENVERARBEITUNGSINVENTAR

Schritt 1.1 — Verarbeitungsverzeichnis erstellen:
Dokumentiere JEDE Datenverarbeitung auf der Website:

Verarbeitung 1 — Kontaktformular (Formspree):
- Erhobene Daten: Name, E-Mail, Telefon (optional), Betreff, Nachricht
- Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung) ODER Art. 6 Abs. 1 lit. f (berechtigtes Interesse)
- Empfänger: Formspree Inc. (Auftragsverarbeiter, USA — Standardvertragsklauseln prüfen)
- Speicherdauer: Im Formspree-Dashboard bis manueller Löschung
- Löschmechanismus: Manuell im Formspree-Dashboard oder via API

Verarbeitung 2 — Terminbuchung (Calendly):
- Erhobene Daten: Name, E-Mail, gewählter Termin
- Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO
- Empfänger: Calendly LLC (Auftragsverarbeiter, USA)
- Speicherdauer: Gemäß Calendly-Richtlinien
- Hinweis: Calendly setzt eigene Cookies — erfordert Consent

Verarbeitung 3 — Google Analytics 4 (falls aktiviert):
- Erhobene Daten: IP (anonymisiert), Seitenaufrufe, Events, Gerätedaten
- Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
- Empfänger: Google Ireland Limited
- Speicherdauer: 14 Monate (GA4-Standard)
- WICHTIG: NUR nach expliziter Einwilligung aktivieren

Verarbeitung 4 — Vercel Analytics (cookieless):
- Erhobene Daten: Aggregierte Seitenaufrufe, Web Vitals (KEINE personenbezogenen Daten)
- Rechtsgrundlage: Art. 6 Abs. 1 lit. f (berechtigtes Interesse — cookieless, aggregiert)
- KEIN Consent erforderlich

Verarbeitung 5 — Technisch notwendige Cookies:
- visitor_type Cookie: Erstbesucher/Wiederkehrend (UX-Anpassung)
- experiment_* Cookies: A/B-Test-Varianten (kein Tracking, keine PII)
- Rechtsgrundlage: Art. 6 Abs. 1 lit. f (berechtigtes Interesse)
- consent_status Cookie: Speichert die Cookie-Einwilligung selbst

Schritt 1.2 — Auftragsverarbeitungsverträge (AVV) prüfen:
Checke ob AVVs bestehen mit:
- Formspree: Data Processing Agreement (DPA) vorhanden?
- Calendly: DPA vorhanden?
- Google Analytics: DPA vorhanden?
- Vercel: DPA vorhanden? (Vercel hat ein Standard-DPA)
Dokumentiere den Status und verlinke die DPAs.

Schritt 1.3 — Datentransfer in Drittländer (USA):
Seit dem EU-US Data Privacy Framework:
- Prüfe ob Formspree, Calendly und Google im DPF-Register gelistet sind
- Falls JA: Dokumentiere als Rechtsgrundlage für Drittlandtransfer
- Falls NEIN: Standardvertragsklauseln (SCCs) als Absicherung dokumentieren

NACH TASK 1: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 2: COOKIE-CONSENT-SYSTEM

Schritt 2.1 — Cookie-Banner-Komponente erstellen:
Erstelle eine <CookieConsent />-Client-Komponente:

Anforderungen (DSGVO + TTDSG):
- Erscheint beim ERSTEN Besuch (kein consent_status Cookie vorhanden)
- Drei Optionen: "Alle akzeptieren" (primärer Button), "Nur Essentiell" (sekundärer Button), "Einstellungen" (Link)
- KEINE vorangekreuzten Checkboxen für nicht-essentielle Cookies
- "Alle ablehnen" muss genauso einfach sein wie "Alle akzeptieren" (DSGVO-Anforderung)
- Cookie-Banner darf KEINEN Inhalt verdecken (fixed bottom, nicht als Modal)
- Schließen des Banners = "Nur Essentiell" (NICHT "Alle akzeptieren")

Schritt 2.2 — Cookie-Kategorien:
```typescript
type ConsentCategory = 'essential' | 'analytics' | 'marketing'

interface ConsentState {
  essential: true     // IMMER true, nicht deaktivierbar
  analytics: boolean  // GA4, Scroll-Tracking mit GA4
  marketing: boolean  // Calendly-Cookies, UTM-Tracking mit GA4
  timestamp: string   // Wann wurde die Einwilligung erteilt
  version: string     // Version der Consent-Konfiguration (für Re-Consent)
}
```

Schritt 2.3 — Consent-Persistenz:
- Speichere als consent_status Cookie (JSON-encoded, HttpOnly: false da Client-seitig lesbar)
- Cookie-Laufzeit: 365 Tage (DSGVO erlaubt max. 12 Monate, dann Re-Consent)
- SameSite: Lax, Secure: true (nur HTTPS)
- Bei Version-Änderung: Re-Consent erzwingen (Banner erneut anzeigen)

Schritt 2.4 — Consent-Integration mit Analytics (Phase 13):
- Das Analytics-Modul prüft bei JEDEM trackEvent() den Consent-Status
- GA4 wird NUR aktiviert wenn analytics === true
- Calendly-Widget wird NUR geladen wenn marketing === true
- Vercel Analytics läuft IMMER (cookieless, kein Consent nötig)
- Google Consent Mode V2: gtag('consent', 'default', { analytics_storage: 'denied' }) → nach Consent: gtag('consent', 'update', { analytics_storage: 'granted' })

Schritt 2.5 — Cookie-Einstellungen nachträglich ändern:
- Ein Link "Cookie-Einstellungen" im Footer öffnet ein Modal mit den Kategorien
- Nutzer kann jederzeit Consent widerrufen oder erweitern
- Bei Widerruf: Entsprechende Cookies werden gelöscht, Scripts deaktiviert

Schritt 2.6 — Cookie-Inventar für Datenschutzerklärung:
Erstelle ein maschinenlesbares Cookie-Inventar (src/lib/cookie-inventory.ts):
```typescript
export const COOKIE_INVENTORY = [
  { name: 'consent_status', category: 'essential', duration: '365 Tage', purpose: 'Speichert Cookie-Einwilligung', provider: 'Eigen' },
  { name: 'visitor_type', category: 'essential', duration: '365 Tage', purpose: 'Unterscheidet Erst-/Wiederkehrende Besucher', provider: 'Eigen' },
  { name: '_ga', category: 'analytics', duration: '2 Jahre', purpose: 'Google Analytics Nutzer-ID', provider: 'Google' },
  { name: '_ga_*', category: 'analytics', duration: '2 Jahre', purpose: 'Google Analytics Session-ID', provider: 'Google' },
  { name: 'experiment_*', category: 'essential', duration: '30 Tage', purpose: 'A/B-Test-Varianten-Zuweisung', provider: 'Eigen' },
] as const
```
Dieses Inventar wird von der Datenschutzerklärung konsumiert (keine Duplikation).

NACH TASK 2: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 3: DATENSCHUTZERKLÄRUNG UND IMPRESSUM

Schritt 3.1 — Datenschutzerklärung (/datenschutz):
Erstelle eine vollständige Datenschutzerklärung als Seite. Inhalt:

1. Verantwortlicher: Name, Adresse, Kontaktdaten (aus den Unternehmensdaten)
2. Datenschutzbeauftragter: Falls erforderlich (>20 Mitarbeiter mit regelmäßiger Datenverarbeitung)
3. Erhebung personenbezogener Daten:
   - Kontaktformular (Formspree): Welche Daten, Zweck, Rechtsgrundlage, Empfänger, Speicherdauer
   - Terminbuchung (Calendly): Welche Daten, Zweck, Rechtsgrundlage, Empfänger
   - Website-Analyse (GA4): Was wird erfasst, Consent-Pflicht, Anonymisierung, Opt-Out
   - Vercel Analytics: Cookieless, aggregiert, kein Consent nötig
4. Cookies und Tracking:
   - Cookie-Tabelle (automatisch aus COOKIE_INVENTORY generiert — SSOT!)
   - Kategorien erklären (Essentiell, Analyse, Marketing)
   - Hinweis auf Cookie-Einstellungen
5. Rechte der betroffenen Person:
   - Auskunft (Art. 15), Berichtigung (Art. 16), Löschung (Art. 17)
   - Einschränkung (Art. 18), Datenübertragbarkeit (Art. 20), Widerspruch (Art. 21)
   - Widerruf der Einwilligung (Art. 7 Abs. 3)
   - Beschwerderecht bei der Aufsichtsbehörde
6. Datenübermittlung in Drittländer (USA):
   - EU-US Data Privacy Framework Status
   - Standardvertragsklauseln als Absicherung
7. SSL-Verschlüsselung: Hinweis auf HTTPS
8. Hosting: Vercel (Standort, DPA)

WICHTIG: Die Cookie-Tabelle wird aus COOKIE_INVENTORY importiert und als React-Komponente gerendert. Wenn ein neues Cookie hinzugefügt wird, aktualisiert sich die Datenschutzerklärung automatisch.

Schritt 3.2 — Impressum (/impressum):
Vollständiges Impressum nach §5 TMG:
- Firmenname, Rechtsform
- Vertretungsberechtigte Person(en)
- Postanschrift (KEIN Postfach)
- Telefon, E-Mail
- Umsatzsteuer-ID (falls vorhanden)
- Handelsregister und Registernummer (falls eingetragen)
- Zuständige Aufsichtsbehörde (falls regulierter Beruf)
- Verantwortlich für den Inhalt nach §55 Abs. 2 RStV
- Streitschlichtung: Link zur EU-OS-Plattform (https://ec.europa.eu/consumers/odr)

Schritt 3.3 — Verlinkung:
- Datenschutz und Impressum Links im Footer (IMMER sichtbar, auf JEDER Seite)
- Links in der Cookie-Banner-Erklärung
- Links bei jedem Formular ("Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.")

NACH TASK 3: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — SECURITY-HEADERS UND CSP-HARDENING
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 4: CONTENT SECURITY POLICY (CSP)

Schritt 4.1 — CSP-Architektur:
Implementiere die CSP über Next.js Security Headers in next.config.ts (oder middleware.ts):

Basis-Policy:
```
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-{RANDOM}' https://assets.calendly.com https://www.googletagmanager.com;
  style-src 'self' 'unsafe-inline' https://assets.calendly.com;
  img-src 'self' data: https: blob:;
  font-src 'self';
  connect-src 'self' https://formspree.io https://www.google-analytics.com https://calendly.com https://vitals.vercel-insights.com;
  frame-src https://calendly.com;
  base-uri 'self';
  form-action 'self' https://formspree.io;
  frame-ancestors 'none';
  upgrade-insecure-requests;
```

Schritt 4.2 — Nonce-basierte Script-Ausführung:
Für Inline-Scripts (Next.js generiert welche):
- Generiere eine kryptographische Nonce pro Request in middleware.ts
- Setze die Nonce im CSP-Header: script-src 'nonce-{NONCE}'
- Übergib die Nonce an Next.js via headers()
- Next.js Script-Komponente unterstützt nonce-Prop: <Script nonce={nonce} />

ALTERNATIV (einfacher): script-src 'self' 'unsafe-inline' — weniger sicher aber kompatibler. Dokumentiere die Entscheidung.

Schritt 4.3 — CSP-Reporting:
- Setze report-uri oder report-to Header
- Erstelle eine API-Route /api/csp-report die Violations loggt (console.error)
- KEIN externer CSP-Reporting-Service (kein Sentry, kein Report-URI.com)
- Log-Format: { violatedDirective, blockedURI, documentURI, timestamp }

Schritt 4.4 — CSP im Report-Only Modus testen:
ZUERST: Content-Security-Policy-Report-Only Header setzen. Beobachte die Violations. Erst wenn 0 Violations über 48h → auf enforcing umschalten.

NACH TASK 4: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 5: SECURITY-HEADERS HARDENING

Schritt 5.1 — Vollständiges Header-Set:
Konfiguriere in next.config.ts unter headers():

```typescript
const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '0' },  // Deaktiviert — CSP ist der moderne Ersatz
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
]
```

Schritt 5.2 — Permissions-Policy granular setzen:
- camera=(): Kein Kamerazugriff
- microphone=(): Kein Mikrofonzugriff
- geolocation=(): Kein Standortzugriff
- interest-cohort=(): Opt-Out aus FLoC/Topics API (Privacy)
- payment=(): Keine Payment Request API (nicht benötigt)
- usb=(), bluetooth=(): Nicht benötigt

Schritt 5.3 — HSTS Preload:
- Registriere die Domain bei hstspreload.org
- Voraussetzung: HSTS-Header mit includeSubDomains und preload Direktive
- Prüfe: Alle Subdomains unterstützen HTTPS

Schritt 5.4 — Header-Validierung:
Teste alle Headers mit:
- securityheaders.com → Ziel: A+ Rating
- Mozilla Observatory → Ziel: A+ Rating
- Manuell: curl -I https://domain.de und jeden Header prüfen

NACH TASK 5: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — OWASP TOP 10 ABSICHERUNG
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 6: INPUT-SANITISIERUNG UND XSS-PRÄVENTION

Schritt 6.1 — React's Built-in XSS-Schutz:
React escaped standardmäßig alle Werte in JSX. ABER:
- NIEMALS dangerouslySetInnerHTML verwenden (außer für sanitisierten Markdown-Output)
- Grep nach dangerouslySetInnerHTML in der gesamten Codebase. Jede Verwendung prüfen und absichern oder entfernen.
- Falls Markdown gerendert wird: Verwende eine Sanitisierung-Library (z.B. sanitize-html oder DOMPurify) VOR dem Rendering

Schritt 6.2 — URL-Parameter-Sanitisierung:
Jeder URL-Parameter (searchParams) der in der UI angezeigt wird:
- Escape HTML-Entities
- Validiere gegen erlaubte Werte (Whitelist, nicht Blacklist)
- Beispiel: Blog-Suche — der Suchbegriff wird angezeigt: "Ergebnisse für: {query}" → query muss escaped sein
- Implementiere als sanitizeSearchParam(param: string): string Utility

Schritt 6.3 — Formular-Input-Validierung (Defense-in-Depth):
Die Zod-Schemas aus Phase 5 und Phase 15 sind die erste Verteidigungslinie:
- Client-seitige Validierung (UX)
- Server-seitige Re-Validierung in API-Routes (falls vorhanden)
- Formspree validiert serverseitig (dritte Linie)

Zusätzliche Maßnahmen:
- Max-Length auf allen Input-Feldern (HTML-Attribut UND Zod-Schema)
- Keine SQL oder NoSQL-Injection möglich (kein Datenbank-Backend)
- E-Mail-Validierung: Strikt gegen RFC 5322

NACH TASK 6: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 7: CSRF-SCHUTZ UND FORMULARSICHERHEIT

Schritt 7.1 — CSRF bei Formspree:
Formspree-Formulare senden direkt an Formspree's Server (nicht an eine eigene API-Route). CSRF-Schutz:
- Formspree verwendet Origin-Checking (nur erlaubte Domains können submittieren)
- Konfiguriere die erlaubte Domain im Formspree-Dashboard
- SameSite-Cookies: Alle eigenen Cookies haben SameSite=Lax (verhindert Cross-Site-Request)

Schritt 7.2 — CSRF bei eigenen API-Routes:
Falls eigene API-Routes existieren (/api/analytics, /api/csp-report, /api/webhook/formspree):
- Prüfe Origin-Header: request.headers.get('origin') muss die eigene Domain sein
- Prüfe Referer-Header als Fallback
- Optional: Custom CSRF-Token via Cookie + Header Double-Submit Pattern

Schritt 7.3 — Honeypot-Validierung härten:
Das Honeypot-Feld (_gotcha) aus Phase 15:
- Visuell versteckt (position: absolute; left: -9999px; tabindex: -1)
- aria-hidden="true" (Screenreader sollen es ignorieren)
- autocomplete="off" (Browser sollen es nicht befüllen)
- Wenn ausgefüllt: Submission wird SILENT blockiert (kein Fehler an den Bot, einfach Success simulieren)

NACH TASK 7: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 8: RATE-LIMITING UND DDOS-GRUNDSCHUTZ

Schritt 8.1 — Client-seitiges Rate-Limiting:
Für das Kontaktformular:
- Nach erfolgreichem Submit: Deaktiviere den Button für 60 Sekunden
- Speichere den Timestamp des letzten Submits im sessionStorage
- Bei erneutem Submit innerhalb von 60s: Zeige "Bitte warten Sie einen Moment" statt den Request zu senden
- Dies ist UX-Schutz, NICHT Security-Schutz (Client-seitig umgehbar)

Schritt 8.2 — Server-seitiges Rate-Limiting (API-Routes):
Falls eigene API-Routes existieren:
- Implementiere ein einfaches In-Memory-Rate-Limiting basierend auf IP
- Verwende Next.js Middleware oder den API-Route-Handler
- Limit: 10 Requests pro Minute pro IP auf /api/*
- Bei Überschreitung: 429 Too Many Requests mit Retry-After Header
- WICHTIG: In-Memory-Store funktioniert nur mit einem Server-Instanz (für Vercel: Edge Middleware mit KV oder einfach Client-seitig schützen)

Schritt 8.3 — Formspree's eingebauter Schutz:
Formspree hat eingebautes Rate-Limiting und Spam-Schutz. Dokumentiere:
- Rate-Limit: 50 Submissions/Monat (Free) oder gemäß Plan
- Spam-Filter: Automatisch aktiv
- Honeypot: Konfiguriert (_gotcha)
- reCAPTCHA: DEAKTIVIERT (wir verwenden Honeypot — besser für UX und Accessibility)

NACH TASK 8: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — DEPENDENCY-SECURITY UND TESTING
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 9: DEPENDENCY-AUDIT UND SUPPLY-CHAIN-SECURITY

Schritt 9.1 — npm audit:
Führe npm audit aus und dokumentiere JEDE Vulnerability:
- Critical: SOFORT beheben (npm audit fix oder manuelles Upgrade)
- High: Innerhalb dieser Phase beheben
- Moderate: Dokumentieren und im nächsten Sprint beheben
- Low: Dokumentieren

Schritt 9.2 — Abhängigkeiten minimieren:
Prüfe JEDE Dependency in package.json:
- Wird sie tatsächlich verwendet? (Grep nach Imports)
- Gibt es eine kleinere Alternative? (z.B. date-fns statt moment)
- Kann die Funktionalität nativ implementiert werden? (z.B. eigene cn() statt clsx + tailwind-merge)
- Entferne unbenutzte Dependencies

Schritt 9.3 — Lock-File-Integrität:
- package-lock.json oder pnpm-lock.yaml MUSS im Git sein
- npm ci statt npm install in CI (reproduzierbare Builds)
- Prüfe: Lock-File ist aktuell und konsistent mit package.json

Schritt 9.4 — Renovate/Dependabot:
Falls GitHub verwendet wird:
- Konfiguriere Dependabot (.github/dependabot.yml) für automatische Security-Updates
- Nur Patch- und Minor-Updates automatisch erstellen
- Major-Updates manuell reviewen

Schritt 9.5 — Environment-Variables Security:
- Prüfe: KEINE Secrets in NEXT_PUBLIC_* Variables (nur öffentliche IDs)
- Prüfe: .env.local ist in .gitignore
- Prüfe: Keine API-Keys oder Secrets im Client-Bundle (grep im .next/static Ordner)
- Formspree Form-ID ist öffentlich (NEXT_PUBLIC_FORMSPREE_FORM_ID) — das ist OK, sie ist nicht secret
- Calendly URL ist öffentlich — OK

NACH TASK 9: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

───────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 10: SECURITY-TESTING UND PENETRATIONSTEST-CHECKLISTE

Schritt 10.1 — Automatisierte Security-Tests:
Erstelle tests/security/ mit folgenden Tests:

security-headers.test.ts:
- Teste: Alle Security-Headers sind in der Response vorhanden
- Teste: CSP enthält keine unsafe-eval (oder dokumentierte Ausnahme)
- Teste: HSTS ist gesetzt mit korrektem max-age
- Teste: X-Frame-Options ist DENY
- Teste: Referrer-Policy ist gesetzt

csp-validation.test.ts:
- Teste: CSP erlaubt nur die dokumentierten Quellen
- Teste: CSP blockiert inline-scripts (oder nonce ist korrekt)
- Teste: CSP erlaubt Formspree, Calendly, GA4, Vercel Analytics — und NICHTS anderes

input-sanitization.test.ts:
- Teste: XSS-Payloads in Suchparametern werden escaped
- Teste: HTML-Injection in Formulardaten wird neutralisiert
- Teste: Überlange Eingaben werden abgeschnitten (max-length)

Schritt 10.2 — Manuelle Penetrationstest-Checkliste:
Erstelle docs/SECURITY-CHECKLIST.md:

□ XSS: Versuche <script>alert(1)</script> in jedem Eingabefeld und URL-Parameter
□ CSRF: Versuche ein Formular von einer anderen Domain abzusenden
□ Clickjacking: Versuche die Website in einem iframe einzubetten
□ Open Redirect: Versuche einen redirect-Parameter zu manipulieren
□ Information Disclosure: Prüfe ob Fehlerseiten Stack-Traces zeigen
□ HTTP Methods: Prüfe ob unerwartete Methods (PUT, DELETE) auf API-Routes möglich sind
□ Cookie Security: Prüfe Secure, HttpOnly, SameSite Flags auf allen Cookies
□ HTTPS: Prüfe ob HTTP auf HTTPS redirectet (kein Mixed Content)
□ Directory Traversal: Versuche /../ in URL-Pfaden
□ Source Code Exposure: Prüfe ob .env, .git, oder Source-Maps öffentlich zugänglich sind

Schritt 10.3 — Lighthouse Best Practices:
Führe Lighthouse "Best Practices" Audit aus:
- Ziel: 100/100
- Häufige Probleme: Mixed Content, fehlende HTTPS, vulnerable Libraries

NACH TASK 10: npm run build && npm run lint && npx tsc --noEmit → Grün? Weiter. Rot? STOPP & Fix.

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 16 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

ULTRATHINK-TASK 11: KONTEXT AKTUALISIEREN UND HANDOFF

Schritt 11.1 — .ai-architectural-context.md aktualisieren:
Ergänze unter ### 🔒 Security & DSGVO:
- Cookie-Consent-Architektur und Consent-Kategorien
- CSP-Policy (vollständig dokumentiert)
- Security-Headers (vollständige Liste)
- DSGVO-Verarbeitungsverzeichnis (Zusammenfassung)
- Datenschutzerklärung- und Impressum-Pfade
- Dependency-Audit-Ergebnis
- Security-Test-Abdeckung

Schritt 11.2 — .upgrade-state.md finalisieren.

Schritt 11.3 — Handoff an Phase 17:
```
## Handoff → Phase 17 (DevOps & CI/CD)
- Cookie-Consent-System: [Implementiert, Pfade]
- CSP-Policy: [Modus: Report-Only oder Enforcing]
- Security-Headers: [securityheaders.com Rating]
- npm audit: [Ergebnis: 0 vulnerabilities]
- Environment-Variables: [Dokumentiert, keine Secrets im Client]
- Formspree DSGVO-Status: [AVV vorhanden?]
- Calendly DSGVO-Status: [AVV vorhanden?]
```

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 16
═══════════════════════════════════════════════════════════════════════════════

□ npm run build → ZERO Errors
□ npm run lint → ZERO Errors
□ npx tsc --noEmit → ZERO Errors
□ DSGVO-Verarbeitungsverzeichnis vollständig dokumentiert
□ AVV-Status für Formspree, Calendly, Google, Vercel dokumentiert
□ Drittlandtransfer-Rechtsgrundlage dokumentiert (DPF oder SCCs)
□ Cookie-Consent-Banner: 3 Optionen (Alle/Essentiell/Einstellungen), DSGVO-konform
□ Consent-Kategorien: Essential (immer), Analytics (Consent), Marketing (Consent)
□ Consent-Persistenz: Cookie mit Timestamp und Version
□ Analytics-Integration: KEIN GA4-Event ohne Consent
□ Vercel Analytics: Läuft ohne Consent (cookieless)
□ Datenschutzerklärung: Vollständig, automatische Cookie-Tabelle aus COOKIE_INVENTORY
□ Impressum: Vollständig nach §5 TMG
□ Footer-Links: Datenschutz + Impressum auf jeder Seite sichtbar
□ CSP: Implementiert (Report-Only oder Enforcing)
□ CSP erlaubt nur: self, Formspree, Calendly, GA4, Vercel Analytics
□ CSP-Reporting auf eigene API-Route (KEIN externes SaaS)
□ Security-Headers: HSTS, X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy
□ securityheaders.com: A+ Rating (oder dokumentierte Abweichung)
□ Kein dangerouslySetInnerHTML ohne Sanitisierung
□ URL-Parameter-Sanitisierung implementiert
□ Honeypot-Feld gehärtet (visuell versteckt, aria-hidden, autocomplete off)
□ Client-seitiges Rate-Limiting auf Kontaktformular
□ npm audit: 0 Critical, 0 High Vulnerabilities
□ Keine unbenutzten Dependencies
□ Lock-File im Git, npm ci in CI
□ Keine Secrets in NEXT_PUBLIC_* Variables
□ Keine Secrets im Client-Bundle
□ Security-Tests: Headers, CSP, Input-Sanitisierung
□ Penetrationstest-Checkliste erstellt (docs/SECURITY-CHECKLIST.md)
□ Lighthouse Best Practices: 100/100
□ Kein bestehendes Feature wurde zerstört
□ .ai-architectural-context.md ist aktuell
□ .upgrade-state.md ist aktuell mit Handoff an Phase 17
