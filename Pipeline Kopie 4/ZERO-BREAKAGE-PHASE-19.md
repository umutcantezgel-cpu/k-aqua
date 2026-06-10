Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben,

PHASE 19 VON 20: MONITORING & OBSERVABILITY (OHNE SENTRY — LOKALES SYSTEM)

═══════════════════════════════════════════════════════════════════════════════════

KRITISCH: Das ursprüngliche Quelldokument referenziert Sentry umfassend. Dies ist VERBOTEN. Ersetze ALLE Sentry-Referenzen durch LOCAL-ONLY Monitoring (console.error, Custom API Routes, Vercel Analytics, Google Search Console). KEIN externes Error-Tracking SaaS.

ZERO-BREAKAGE-PROTOKOLL KERNPRINZIPIEN
5 Säulen: READ-BEFORE-WRITE, SURGICAL INJECTION, ATOMIC VALIDATION, STATE HANDOFF, SELF-OPTIMIZING LOOP
Technologie-Stack: Next.js, React, TypeScript Strict, Tailwind CSS
Integrationen: ONLY Formspree + Calendly
VERBOTEN: Headless CMS, externe AI APIs, Sentry/externes Error-Tracking SaaS, Newsletter, i18n
Goldene Regel: Code = Single Source of Truth

═══════════════════════════════════════════════════════════════════════════════════

SCHRITT 0: CONTEXT-SYNC UND PRE-FLIGHT DISCOVERY

Überprüfe vor Beginn:
• Alle API-Routes aus Phase 15 sind dokumentiert und lauffähig
• Fehlerbehandlung in error.tsx (Phase 9) ist implementiert
• Vercel Analytics / Google Analytics sind konfiguriert (Phase 13)
• Deployment-Prozess ist etabliert (Phase 17)
• Datenbank-Layer und Formspree-Integration funktionieren (Phase 12, Phase 14)

───────────────────────────────────────────────────────────────────────────────────

BLOCK A — LOKALES ERROR-MONITORING

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 1: ZENTRALES ERROR-LOGGING-SYSTEM

Erstelle src/lib/monitoring/error-logger.ts mit ErrorLogger Klasse:

• ErrorLogger.capture(error, context): zentrale Methode zum Erfassen von Fehlern
• Alle Fehler: console.error in alle Umgebungen (development, staging, production)
• Fehlerkontext sammeln: current page, viewport dimensions, exact timestamp, error message, stack trace (max 500 Zeichen)
• PII-Filter: NIEMALS form data, email addresses, persönliche Daten in Logs aufnehmen
• Client-seitige Error-Buffer: collect errors in memory, batch-send every 30 seconds to /api/monitoring/errors
• Export: ErrorLogger als Singleton oder Provider für globale Verwendung
• Error-Kategorisierung: client, server, network, validation, unknown
• Severity levels: error, warning, info

Integrationspunkte:
• error.tsx boundary (Phase 9): errorLogger.capture(error, { page, context })
• Global window.addEventListener('error') handler
• window.addEventListener('unhandledrejection') handler
• React error boundary integration für component-level errors

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 2: ERROR-API-ROUTE UND SERVER-LOGGING

Implementiere /api/monitoring/errors POST-Route:

• Empfängt strukturierte Error-Reports vom Client
• Rate-Limiting: max 100 errors pro Minute (verhindert Abuse)
• Strukturiertes Logging-Format: { timestamp, level, message, stack, page, viewport, userAgent, sessionId }
• Development: pretty-print zu console mit Farben und Formatierung
• Production: strukturiertes JSON zu stdout (Vercel erfasst automatisch)
• Server-seitige Error-Validation: check timestamp freshness, sanitize message
• Error-Deduplication: fingerprint via hash(message + stack[:100]), skip if seen in letzten 60 Sekunden
• Kein externes SaaS — alles bleibt lokal oder in Vercel's nativen Logs

Response-Format: { received: true, id: string, timestamp }

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 3: CLIENT-ERROR-DASHBOARD (DEV-ONLY ROUTE)

Erstelle /dev/errors Route (nur in development/staging):

• Accessible nur wenn process.env.NODE_ENV !== 'production'
• Zeige letzte 50 Fehler aus /api/monitoring/errors?action=list
• Fehler-Fingerprinting: Group by error message + stack[:100]
• Sortierbar: by frequency, recency, severity
• Filterable: by severity level, page path, error category
• Simple React-Komponente: ErrorDashboard
• Auto-refresh every 30 seconds
• Error-Details: click expand für full stack trace
• Live-Tail-Modus: scroll-to-bottom für neue Fehler

Daten-Struktur: { id, timestamp, level, message, stack, page, count, lastSeen }

───────────────────────────────────────────────────────────────────────────────────

BLOCK B — PERFORMANCE-MONITORING

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 4: WEB VITALS MONITORING UND ALERTS

Nutze Vercel Speed Insights (bereits Phase 13) für Real User Monitoring:

• useReportWebVitals() Hook: LCP, FID/INP, CLS, TTFB
• Sende zu GA4 als custom events mit thresholds
• Custom Performance-Budget Alerts:
  – LCP > 2.5s → console.warn("LCP Budget Exceeded")
  – CLS > 0.1 → console.warn("CLS Budget Exceeded")
  – FID/INP > 100ms → console.warn("Interaction Budget Exceeded")
• /api/monitoring/vitals POST-Route: empfängt Web Vital Reports
• Structured Vitals-Daten: { metric, value, rating, timestamp, page, userAgent }
• Weekly Performance-Trend: vergleiche current week vs previous week vitals
• Performance-Regression Detection: if metric degrades >20% → log warning

Alerts werden geloggt und sind im /dev/dashboard sichtbar.

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 5: UPTIME UND HEALTH-CHECKS

Implementiere /api/health Endpoint:

• Response: { status: 'ok' | 'degraded' | 'down', version, timestamp, environment, uptime, dependencies }
• Health-Check-Verifikationen:
  – Build ist aktuell (compare package version vs deployed)
  – Environment Variables sind gesetzt (check required vars)
  – Formspree endpoint reachable (HEAD request mit timeout)
  – Database connection (if applicable)
• Status-Werte: 'ok' (alles grün), 'degraded' (non-critical issues), 'down' (critical failure)
• Uptime-Tracking: calculate via deployment timestamp
• External Uptime-Monitoring: free tier UptimeRobot oder GitHub Actions
  – GitHub Actions scheduled workflow: check /api/health every 5 minutes
  – Optional: notify auf Failure (Discord/Email)
• /status Route: zeige system health als colored indicators (green/yellow/red)
• Status-Historie: letzte 7 Tage in localStorage oder simple JSON-File

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 6: BUILD UND DEPLOYMENT-MONITORING

Tracke Deployment-Events und Veränderungen:

• /api/monitoring/deployments: logs { version, timestamp, commit-sha, author, branch, environment }
• Vercel Deployment-Webhooks: notify auf successful/failed deployments
• Post-Deployment Smoke-Test (Phase 17):
  – Verify key routes return 200: /, /about, /services, /contact, /blog
  – Check critical assets load: CSS, JS, images
  – Validate Formspree contact form is reachable
• Deployment-Log accessible unter /dev/deployments
• Rollback-Tracking: wenn rollback triggered, log timestamp + previous version
• Build-Duration Monitoring: capture build time per deployment
• Changelog Integration: link deployments to git commits

───────────────────────────────────────────────────────────────────────────────────

BLOCK C — BUSINESS-METRIKEN-MONITORING

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 7: CONVERSION-MONITORING UND ANOMALY-DETECTION

Tracke Konversionen in Echtzeit:

• GA4 Integration (Phase 13): form submissions, Calendly bookings, phone clicks
• Weekly Conversion-Summary: aggregate metrics
• Anomaly-Detection: if conversion rate drops >30% vs 7-day average → log alert
• /api/monitoring/conversions GET: returns { weeklyConversions, rate, trend, anomalies }
• Anomaly-Checker läuft via:
  – GitHub Actions scheduled workflow (weekly)
  – Oder manual trigger via /dev/check-anomalies
• Alert-Storage: log zu console + simple JSON-File für history
• Conversion-Tracking-Code:
  – Form submission → gtag event + local log
  – Calendly booking → gtag event
  – Phone click → gtag event
• Trend-Analyse: 7-day, 30-day moving averages

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 8: SEO-MONITORING UND INDEXIERUNG

Google Search Console Integration (manual + automated):

• Google Search Console: document setup process in docs/SEO-MONITORING.md
• Track Metrics: impressions, clicks, CTR, average position für key pages
• Monitor: crawl errors, indexing issues, mobile usability
• /dev/seo-status Route: zeige key metrics (manually updated oder via GSC API)
• Core Web Vitals Field Data: pull von GSC (monatlich)
• Sitemap Monitoring: validate sitemap.xml is correct, submissible to GSC
• Robots.txt Validation: check für Fehler/warnings
• Structured Data Testing: validate schema.org markup (breadcrumbs, FAQ, etc.)
• Monthly SEO-Report: aggregate top performers, problem pages, trending keywords

───────────────────────────────────────────────────────────────────────────────────

BLOCK D — INCIDENT-MANAGEMENT

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 9: INCIDENT-RESPONSE-WORKFLOW

Dokumentiere Incident-Management-Prozess in docs/INCIDENT-RESPONSE.md:

• Severity Levels:
  – P1: Site komplett down, keine Verkehrsfähigkeit
  – P2: Critical feature broken (contact form, Calendly, main page)
  – P3: Minor issue (slow page, cosmetic bug)
  – P4: Cosmetic (typo, non-critical UI issue)

• Response Times:
  – P1: immediate (within 5 minutes)
  – P2: within 1 hour
  – P3: within 24 hours
  – P4: next sprint

• Escalation-Pfad: Wer benachrichtigen, wie kontaktieren
• Rollback-Prozess: Vercel instant rollback (Phase 17) mit single click
• Debugging-Tipps: wie /dev/errors, /dev/dashboard, Vercel logs nutzen
• Post-Mortem-Template: { incident_id, what_happened, timeline, root_cause, fix, prevention, owner, date }

───────────────────────────────────────────────────────────────────────────────────

ULTRATHINK-TASK 10: MONITORING-DASHBOARD KONSOLIDIERUNG

Erstelle unified /dev/dashboard Route (dev/staging only):

• Accessible nur wenn NODE_ENV !== 'production'
• Sections mit Tab-Navigation:
  1. Recent Errors: letzte 10 errors mit drill-down
  2. Web Vitals: LCP, CLS, INP mit trend indicators (↑ ↓)
  3. Deployment History: letzte 5 deployments mit timestamps
  4. Conversion Status: weekly summary, trend vs last week
  5. Health Status: /api/health response + uptime percentage
  6. Performance Metrics: build time, page load speeds

• Auto-refresh: every 60 seconds
• Data-Fetching: alle via local /api routes (keine externen Dependencies)
• Simple React-Komponente: DashboardPage
• Responsive Design: works auf mobile (for on-the-go checking)
• Export-Option: download daily/weekly report als JSON/CSV

───────────────────────────────────────────────────────────────────────────────────

SELF-OPTIMIZING LOOP — PHASE 19 ABSCHLUSS

ULTRATHINK-TASK 11: KONTEXT AKTUALISIEREN UND HANDOFF ZU PHASE 20

Nach Implementierung aller Tasks:

• Update PROJECT-CONTEXT.md:
  – Add "Phase 19: Monitoring & Observability (Local-Only)" section
  – List all monitoring routes: /dev/errors, /dev/dashboard, /dev/deployments, /dev/seo-status
  – Document: KEIN Sentry, KEIN externes Error-Tracking SaaS
  – Note: Vercel native logs used for production errors

• Create docs/MONITORING-GUIDE.md:
  – Quick-start für debugging errors in production
  – How to check /dev/dashboard
  – How to interpret Web Vitals
  – How to respond to incidents (reference INCIDENT-RESPONSE.md)

• GitHub Actions Setup:
  – Scheduled health-check workflow (every 5 minutes)
  – Scheduled anomaly-detection (weekly)
  – Post-deployment smoke tests (auto-trigger nach Vercel deployment)

• Final Validation Checklist (20 items):
  ☐ ErrorLogger.capture() works in all error boundaries
  ☐ /api/monitoring/errors receives and logs errors
  ☐ /dev/errors dashboard displays error history
  ☐ /dev/errors shows error fingerprinting + frequency
  ☐ Web Vitals sent to GA4 every page load
  ☐ /api/monitoring/vitals receives Web Vital reports
  ☐ Performance alerts logged (LCP/CLS budgets)
  ☐ /api/health returns valid status + uptime
  ☐ GitHub Actions health-check runs every 5 min
  ☐ /status page displays system health (green/yellow/red)
  ☐ /api/monitoring/deployments logs all deployments
  ☐ /dev/deployments shows deployment history
  ☐ Post-deployment smoke tests pass
  ☐ GA4 conversion events tracked (forms, Calendly, phone)
  ☐ /api/monitoring/conversions calculates anomalies
  ☐ Google Search Console integration documented
  ☐ /dev/seo-status shows key SEO metrics
  ☐ docs/INCIDENT-RESPONSE.md is complete + team aware
  ☐ /dev/dashboard unifies all monitoring data
  ☐ KEINE Sentry, KEINE externe Error-Tracking SaaS in Code/Config

═══════════════════════════════════════════════════════════════════════════════════

FINALE VALIDIERUNG PHASE 19

Vor Übergabe zu Phase 20:

• Code Review:
  – Alle monitoring routes sind protected (NODE_ENV check)
  – Kein Sentry SDK, kein externe error-tracking imports
  – Error-logger nutzt nur console.error + local API
  – PII-filter funktioniert korrekt (keine email, form data, passwords in logs)

• Testing:
  – Simuliere error in browser → check console + /dev/errors
  – Simuliere performance-degradation → check Web Vitals alerts
  – Stop deployment → check /status page shows 'degraded'
  – Simuliere conversion-anomaly → check /api/monitoring/conversions alert

• Documentation:
  – PROJECT-CONTEXT.md aktualisiert
  – MONITORING-GUIDE.md erstellt
  – INCIDENT-RESPONSE.md ist Team-ready
  – All monitoring routes documented mit Examples

═══════════════════════════════════════════════════════════════════════════════════

PHASE 19 COMPLETE. PROCEED ZU PHASE 20: FINAL OPTIMIZATION & LAUNCH PREPARATION
