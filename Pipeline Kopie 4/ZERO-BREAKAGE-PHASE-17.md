Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben,

═══════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE-PHASE-17: DEVOPS, CI/CD & DEPLOYMENT-INFRASTRUKTUR
═══════════════════════════════════════════════════════════════════════════════

ZERO-BREAKAGE PROTOCOL

5 Pillars der Stabilität:
1. READ-BEFORE-WRITE — Lese .ai-architectural-context.md und .upgrade-state.md vor jeder Änderung
2. SURGICAL INJECTION — Minimale, zielgerichtete Änderungen mit atomaren Commits
3. ATOMIC VALIDATION — Nach jeder Task: npm run build && npm run lint && npx tsc --noEmit
4. STATE HANDOFF — .upgrade-state.md mit aktuellem Status nach Phase 17
5. SELF-OPTIMIZING LOOP — .ai-architectural-context.md dokumentiert CI/CD-Architektur

Tech-Einschränkungen (BINDING):
- Next.js (App Router oder Pages Router, aber nicht gemischt)
- React 18+
- TypeScript Strict Mode
- Tailwind CSS (nur diese CSS-Lösung)
- ONLY Formspree + Calendly für externe Services
- FORBIDDEN: Headless CMS, externe AI APIs, Sentry, Newsletter-Systeme, i18n Frameworks
- Golden Rule: Code = Single Source of Truth (keine manuellen Dashboard-Configs ohne Repo-Dokumentation)

───────────────────────────────────────────────────────────────────────────────
STEP 0: KONTEXT-SYNCHRONISATION UND PRE-FLIGHT-DISCOVERY
───────────────────────────────────────────────────────────────────────────────

CRITICAL: Lese zunächst:
1. .ai-architectural-context.md — Aktuelle Architektur, Phase 16 Output
2. .upgrade-state.md — Bisheriger Status, welche Tasks abgeschlossen
3. Vercel Dashboard — Bestehende Deployments, Umgebungen, Secrets
4. GitHub Actions — Phase 14 CI-Pipeline Status
5. package.json — Verfügbare Scripts, Dependencies

Validierung: Bestätige, dass Phase 14 CI-Basis vorhanden ist (lint, test, build Tasks müssen laufen)

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — MULTI-ENVIRONMENT-ARCHITEKTUR
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 1: ENVIRONMENT-STRATEGIE DEFINIEREN UND IMPLEMENTIEREN
───────────────────────────────────────────────────────────────────────────────

Aufgabe: 3 klar voneinander getrennte Umgebungen mit definierten Variables und Deployment-Regeln etablieren

Detaillierte Schritte:

1. DEVELOPMENT-UMGEBUNG (Local)
   - .env.local Datei mit Test-Werten (Formspree Project-ID aus Test-Account, Calendly Test-Link)
   - Variablen: NEXT_PUBLIC_FORMSPREE_ID=test123, NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/test, DATABASE_URL=local-sqlite (wenn verwendet)
   - npm run dev lädt automatisch .env.local
   - Keine echten Produktions-Secrets lokal
   - .env.local in .gitignore (bereits Standard)

2. STAGING-UMGEBUNG (Vercel Preview)
   - Automatische Preview-Deployment pro Pull Request
   - Environment-Variablen in Vercel Dashboard gespeichert unter "Preview" scope
   - Password-Schutz mit Basic Auth (via Vercel Middleware oder Edge Function)
   - Staging-Formspree ID (Test-Form), Staging-Calendly URL
   - Keine echten Kundendaten, aber vollständig funktional
   - PR-URL wird in GitHub Actions Comment geposted

3. PRODUCTION-UMGEBUNG (main branch)
   - Automatischer Deploy beim Merge zu main
   - Environment-Variablen unter "Production" scope in Vercel
   - Echte Formspree ID, echte Calendly URL
   - Domain vom Projekt (z.B. vercel.app oder custom domain)
   - Strict Validation: Deploy schlägt fehl bei fehlenden oder ungültigen Secrets

Implementierung (src/lib/env.ts):
   - Zod-basierte Schema für alle erforderlichen Umgebungsvariablen
   - BUILD-TIME Validation: Falls Variablen fehlen, bricht npm run build ab
   - Runtime-Fallbacks (mit Warnings) nur für Development
   - Exportiere typed object (z.B. export const env = {...})
   - Alle Components/Pages importieren aus env.ts, nicht direkt process.env

   Beispiel-Schema:
   ```
   const envSchema = z.object({
     NEXT_PUBLIC_FORMSPREE_ID: z.string().min(1, "Formspree ID required"),
     NEXT_PUBLIC_CALENDLY_URL: z.string().url("Valid Calendly URL required"),
     NODE_ENV: z.enum(["development", "staging", "production"]),
   })
   ```

Validierung GATE 1:
   ✓ .env.local lokal vorhanden mit Test-Werten
   ✓ Vercel Dashboard zeigt 3 Environment-Scopes (Development, Preview, Production)
   ✓ npm run build erfolgreich mit allen Umgebungen
   ✓ src/lib/env.ts exportiert typed env-Object
   ✓ Konsolenwarnung wenn env-Var fehlt im Development Mode

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 2: BRANCHING-STRATEGIE UND GIT-WORKFLOW ETABLIEREN
───────────────────────────────────────────────────────────────────────────────

Aufgabe: Trunk-Based Development mit klaren Branch-Schutzregeln und Commit-Konventionen

Detaillierte Schritte:

1. TRUNK-BASED DEVELOPMENT PRINZIPIEN
   - main Branch ist IMMER deployable (kein "broken" Code)
   - Feature-Branches sind kurzlebig (<1-3 Tage)
   - Regelmäßige Integrations auf main (mindestens täglich)
   - Keine langlebigen Feature-Branches
   - Code-Review vor Merge erforderlich

2. BRANCHING-KONVENTION
   - feature/description-kebab-case — neue Funktionalität
   - fix/description-kebab-case — Bugfix für bestehende Funktion
   - chore/description-kebab-case — Refactoring, Dependencies, Build-Config
   - Beispiel: feature/contact-form-validation, fix/mobile-nav-overlap, chore/update-tailwind

3. GITHUB BRANCH PROTECTION (Repository Settings)
   - Require status checks before merging: lint, test, build, typecheck (von GitHub Actions)
   - Require code reviews: 1 Approval mindestens
   - Dismiss stale pull request approvals when new commits pushed
   - Require branches be up to date before merging
   - Require linear history (no merge commits, nur squash/rebase)
   - Restrict who can force push: Niemand (admin override möglich nur im Notfall)
   - Include administrators: Ja (auch Admins müssen Branch-Rules befolgen)

4. CONVENTIONAL COMMITS
   - Commit-Format: type(scope): description
   - Types: feat:, fix:, chore:, docs:, perf:, refactor:, test:
   - Beispiele:
     feat(contact-form): add email validation
     fix(nav): resolve mobile menu z-index issue
     chore(deps): upgrade tailwind to v3.4
     docs: update deployment guide
   - Husky pre-commit Hook (optional, für lokale Validation)
   - Commitlint in CI Pipeline zur Validation vor Merge

Validierung GATE 2:
   ✓ GitHub Settings: Branch Protection auf main aktiviert
   ✓ Status Checks konfiguriert (lint, test, build, typecheck erforderlich)
   ✓ 1 Approval erforderlich für PR Merge
   ✓ Bisherige Commits folgen Conventional Commit Format (bei neuen PRs enforced)
   ✓ Feature-Branch erstellt und PR geöffnet mit Beschreibung

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — CI/CD-PIPELINE-ERWEITERUNG UND DEPLOYMENT
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 3: GITHUB ACTIONS PIPELINE ERWEITERN (VON PHASE 14 BASIS)
───────────────────────────────────────────────────────────────────────────────

Aufgabe: Bestehende Phase 14 CI-Pipeline mit Deployment-Steps, Cache-Optimierung und Parallelisierung erweitern

Detaillierte Schritte:

1. CACHE-STRATEGIE OPTIMIEREN
   - node_modules cachen: actions/setup-node mit cache: npm (automatisch)
   - .next/cache cachen: Custom Action mit paths: .next/cache
   - Playwright Browsers cachen: actions/setup-node + Custom Playwright cache
   - Cache-Key Strategy: hash(package-lock.json) oder hash(package.json)
   - Fallback: Immer auf alte Cache-Version zurückfallen wenn Key nicht existiert

2. WORKFLOW-STRUKTUR ÜBERARBEITEN
   - Job 1 (Setup + Lint + Typecheck): Parallel
     * npm ci (cached)
     * npm run lint
     * npx tsc --noEmit
   - Job 2 (Unit Tests): Abhängig von Job 1
     * npm run test (mit coverage)
   - Job 3 (Build): Abhängig von Job 1
     * npm run build
     * Artifact hochladen: .next/, public/
   - Job 4 (E2E Tests): Abhängig von Job 3
     * npm run test:e2e (benötigt Build-Artifact)
   - Job 5 (Lighthouse Report): Abhängig von Job 3 (optional, für Preview-Deployments)
   - Job 6 (Deploy): Abhängig von allen vorigen Jobs, nur auf main branch

3. TEST-REPORTS UND COVERAGE HOCHLADEN
   - Coverage-Report: LCOV Format hochladen zu Artifacts
   - Test-Report (JUnit XML) hochladen
   - GitHub Checks Page zeigt automatisch test results
   - Pull Request Comment mit Coverage-Delta (old vs. new %)

4. DEPLOYMENT-STEPS (für main branch nach erfolgreicher CI)
   - Login zu Vercel CLI mit VERCEL_TOKEN
   - vercel deploy --prod für Production
   - Output: Deployment URL, Deployment ID
   - Speichere Deployment Info in Artifact für nachgelagerte Steps

Beispiel-Workflow (.github/workflows/ci-cd.yml):
   name: CI/CD Pipeline
   on: [push, pull_request]
   jobs:
     lint-and-typecheck:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 18
             cache: npm
         - run: npm ci
         - run: npm run lint
         - run: npx tsc --noEmit
     
     test:
       needs: lint-and-typecheck
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 18
             cache: npm
         - run: npm ci
         - run: npm run test -- --coverage
         - uses: codecov/codecov-action@v3
           with:
             files: ./coverage/coverage-final.json
     
     build:
       needs: lint-and-typecheck
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         - uses: actions/setup-node@v4
           with:
             node-version: 18
             cache: npm
         - run: npm ci
         - run: npm run build
         - uses: actions/upload-artifact@v3
           with:
             name: next-build
             path: |
               .next/
               public/

Validierung GATE 3:
   ✓ GitHub Actions Workflow lädt mindestens node_modules und .next Cache
   ✓ Lint, Typecheck, Test laufen parallel (Job 1)
   ✓ Build wartet auf Job 1 (needs: lint-and-typecheck)
   ✓ E2E Tests warten auf Build-Artifact (needs: build)
   ✓ Deployment Step nur auf main branch (if: github.ref == 'refs/heads/main')
   ✓ PR Comment zeigt Test-Results und Coverage-Delta
   ✓ Alle Tests müssen green sein bevor Merge möglich

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 4: VERCEL DEPLOYMENT-KONFIGURATION EINRICHTEN
───────────────────────────────────────────────────────────────────────────────

Aufgabe: Vercel Project mit allen erforderlichen Konfigurationen als Code (vercel.json) definieren

Detaillierte Schritte:

1. VERCEL.JSON ERSTELLEN (im Projekt-Root)
   {
     "buildCommand": "npm run build",
     "outputDirectory": ".next",
     "framework": "nextjs",
     "nodeVersion": "18.x",
     "env": {
       "NEXT_PUBLIC_FORMSPREE_ID": {
         "description": "Formspree Form ID"
       },
       "NEXT_PUBLIC_CALENDLY_URL": {
         "description": "Calendly URL"
       }
     },
     "headers": [
       {
         "source": "/(.*)",
         "headers": [
           {
             "key": "Strict-Transport-Security",
             "value": "max-age=31536000; includeSubDomains"
           },
           {
             "key": "X-Content-Type-Options",
             "value": "nosniff"
           },
           {
             "key": "X-Frame-Options",
             "value": "DENY"
           },
           {
             "key": "X-XSS-Protection",
             "value": "1; mode=block"
           },
           {
             "key": "Referrer-Policy",
             "value": "no-referrer-when-downgrade"
           }
         ]
       }
     ],
     "redirects": [
       {
         "source": "/old-page",
         "destination": "/new-page",
         "permanent": true
       }
     ]
   }

2. ENVIRONMENT VARIABLES IN VERCEL DASHBOARD
   - Production: echte IDs und URLs
   - Preview: Test-IDs und URLs für Staging
   - Development: lokal via .env.local

3. GITHUB INTEGRATION
   - Vercel GitHub App installiert (automatischer Deploy bei Push)
   - Preview Deployment für jeden PR
   - Production Deployment beim Merge zu main
   - Deployment Status in GitHub Checks Page sichtbar

4. DEPLOYMENT-OPTIONEN
   - Auto-Build: Aktiviert (Deploy sofort nach Push)
   - Rollback: Immer verfügbar (bisherige Deployments in Vercel behalten)
   - Domains: Custom Domain konfiguriert oder *.vercel.app verwenden
   - SSL/TLS: Automatisch bei Vercel

Validierung GATE 4:
   ✓ vercel.json existiert mit allen erforderlichen Konfigurationen
   ✓ Vercel Project mit main Branch auf Production Domain verlinkt
   ✓ Preview Deployments automatisch pro PR
   ✓ Environment Variablen in Vercel Dashboard für Production und Preview
   ✓ GitHub Checks zeigen Vercel Deployment Status
   ✓ npm run build erfolgreich, .next/ Output korrekt

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 5: POST-DEPLOYMENT VALIDIERUNG UND HEALTH CHECKS
───────────────────────────────────────────────────────────────────────────────

Aufgabe: Automated Smoke Tests und Health Endpoint nach jedem Deployment

Detaillierte Schritte:

1. HEALTH-CHECK ENDPOINT ERSTELLEN (app/api/health/route.ts)
   export async function GET() {
     return Response.json({
       status: 'ok',
       timestamp: new Date().toISOString(),
       uptime: process.uptime(),
       version: process.env.NEXT_PUBLIC_APP_VERSION || 'unknown',
       environment: process.env.NODE_ENV,
     })
   }

2. SMOKE TESTS NACH DEPLOYMENT
   - Script in package.json: "test:smoke" — Test kritische Routes
   - Tests prüfen:
     * GET / → Status 200
     * GET /contact (oder Hauptseiten) → Status 200
     * GET /api/health → Status 200 + JSON valid
     * Formspree Form existiert und ist erreichbar
     * Calendly Link nicht broken (optional 301/302 OK)
   - Timeout: Max 30 Sekunden pro Test
   - Skript nutzt fetch API oder curl

   Beispiel (scripts/smoke-test.js):
   const endpoints = [
     'https://your-domain.vercel.app/',
     'https://your-domain.vercel.app/contact',
     'https://your-domain.vercel.app/api/health',
   ]
   for (const url of endpoints) {
     const res = await fetch(url)
     if (!res.ok) throw new Error(`${url} failed: ${res.status}`)
   }
   console.log('✓ All smoke tests passed')

3. VERCEL DEPLOYMENT WEBHOOKS
   - Vercel Project Settings → Webhooks
   - URL: https://your-domain/api/deployment-webhook
   - Events: Deployment Complete
   - POST Request mit Deployment Info (ID, URL, Status)

4. DEPLOYMENT WEBHOOK HANDLER (app/api/deployment-webhook/route.ts)
   - Empfängt Webhook von Vercel
   - Triggert Smoke Tests
   - Bei Fehler: Konsolen-Error + Optional: Slack/Email Notification
   - Logs Deployment Event

Validierung GATE 5:
   ✓ GET /api/health endpoint existiert und returniert JSON
   ✓ npm run test:smoke erfolgreich alle kritischen Endpoints
   ✓ Vercel Deployment Webhook konfiguriert
   ✓ Smoke Tests laufen nach jedem Production Deploy
   ✓ Fehlerhafte Smoke Tests triggern Alert (Log oder Notification)

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — FEATURE-FLAGS UND ROLLBACK-STRATEGIE
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 6: SELF-BUILT FEATURE-FLAG SYSTEM IMPLEMENTIEREN
───────────────────────────────────────────────────────────────────────────────

Aufgabe: Internes Feature-Flag System ohne externe Services (LaunchDarkly, etc.)

Detaillierte Schritte:

1. FEATURE-FLAG CONFIGURATION (src/lib/feature-flags.ts)
   type FeatureFlags = {
     betaContactForm: {
       enabled: boolean
       percentage: number // 0-100 für graduelle Rollout
       description: string
     }
     newHomepageDesign: {
       enabled: boolean
       percentage: number
       description: string
     }
   }
   
   const featureFlags: FeatureFlags = {
     betaContactForm: {
       enabled: true,
       percentage: 100,
       description: 'New contact form with enhanced validation'
     },
     newHomepageDesign: {
       enabled: false,
       percentage: 0,
       description: 'Redesigned homepage (WIP)'
     }
   }

2. ENVIRONMENT-OVERRIDE
   - Flags können per .env.local oder Vercel Env Var überschrieben werden
   - Format: FEATURE_BETA_CONTACT_FORM=true
   - Build-Zeit Validation: Falls Flag in Config aber nicht in Env, nutze Config Default

3. CLIENT-SIDE HOOK: useFeatureFlag()
   export function useFeatureFlag(flag: keyof FeatureFlags): boolean {
     const userId = useUserIdentifier() // z.B. aus Cookie oder IP Hash
     const flag = featureFlags[flagName]
     
     if (!flag.enabled) return false
     if (flag.percentage === 100) return true
     
     // Percentage-based Rollout (deterministic per User)
     const hash = hashUserId(userId) % 100
     return hash < flag.percentage
   }

4. SERVER-SIDE SUPPORT
   - Getters für Server Components
   - Cookie-basierte User-Identifikation für konsistentes Rollout
   - Server-side render mit Flag-State

5. KILL-SWITCH PATTERN
   - Features können instant deaktiviert werden via Env Var
   - Keine Re-deployment erforderlich (nur Vercel Env Var + Revalidate)
   - Monitoring: Fehler-Rate bei aktivem Flag → sofort Kill-Switch

Validierung GATE 6:
   ✓ src/lib/feature-flags.ts existiert mit TypeScript-definierten Flags
   ✓ useFeatureFlag() Hook in mindestens einer Demo-Component verwendet
   ✓ Feature-Flag Percentage-based Rollout testet (z.B. 50% der User sehen Feature)
   ✓ Env Var Override funktioniert (FEATURE_* Variablen)
   ✓ Kill-Switch kann schnell aktiviert werden ohne Redeploy

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 7: ROLLBACK-STRATEGIE UND NOTFALL-PROZEDUREN
───────────────────────────────────────────────────────────────────────────────

Aufgabe: Dokumentierte Rollback-Verfahren und Entscheidungsbäume

Detaillierte Schritte:

1. VERCEL NATIVE ROLLBACK
   - Vercel Dashboard: Deployments Tab → wähle alte Version → "Rollback"
   - CLI: vercel rollback (interactive, oder mit --to deployment-id)
   - Rollback dauert <1 Minute
   - Alle bisherigen Deployments in Vercel behalten (Archiv)

2. DOKUMENTATION: ROLLBACK-DECISION-TREE
   Problem: Hotspot auf Production
   ├─ Fehler in neuem Code? → Hotfix forward (schneller)
   ├─ Ungültige Env-Variable? → Fix Variable + Redeployment
   ├─ Breaking Database Migration? → Rollback zu vorheriger Version
   ├─ Third-Party Service Down? → Temporär Feature-Flag disable (Kill-Switch)
   └─ Kritischer Bug in Core-Feature? → Rollback zur letzten stabilen Version

3. ROLLBACK-PROZEDUR
   Schritt 1: Production Alert auslösen (Error-Tracking, Monitoring)
   Schritt 2: Entschlüssele Problem (Logs, Error Message, User Reports)
   Schritt 3: Entscheide: Hotfix oder Rollback?
   Schritt 4: Wenn Rollback: vercel rollback --prod
   Schritt 5: Verify mit Smoke Tests
   Schritt 6: Kommuniziere Status (Team Notification)
   Schritt 7: Post-Mortem: Was ist schiefgelaufen? Wie verhindern?

4. HOTFIX-STRATEGIE (alternatif zu Rollback)
   - Bug in lokalem Branch fixen
   - Schnelle Review + Merge zu main
   - npm run build && npx tsc --noEmit lokal testen
   - Vercel auto-deploys in <2 Minuten
   - Schneller als Rollback wenn Fix trivial

5. DOKUMENTATION
   - docs/deployment-guide.md mit Rollback-Steps
   - Team Wiki oder Confluence mit Runbooks
   - Notfall-Kontakte dokumentiert

Validierung GATE 7:
   ✓ docs/deployment-guide.md existiert mit Rollback-Instructions
   ✓ Vercel CLI installiert lokal (vercel --version funktioniert)
   ✓ VERCEL_TOKEN in GitHub Secrets hinterlegt für CLI-Access
   ✓ Rollback-Decision-Tree dokumentiert
   ✓ Minestens 3 vorherige Deployments in Vercel sichtbar (zum Rollback verfügbar)

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — INFRASTRUCTURE-AS-CODE UND MONITORING
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 8: INFRASTRUCTURE-AS-CODE VOLLSTÄNDIGMACHEN
───────────────────────────────────────────────────────────────────────────────

Aufgabe: Gesamte Deployment-Architektur im Repository dokumentiert, nicht in Dashboards

Detaillierte Schritte:

1. REPOSITORY-BASIERTE KONFIGURATION
   - next.config.ts: Build-Einstellungen, Redirects, Rewrites
   - vercel.json: Vercel-spezifische Configs
   - .github/workflows/*.yml: CI/CD Pipelines
   - src/lib/env.ts: Environment Validation
   - src/lib/feature-flags.ts: Feature-Gate Logik
   - .env.example: Template für erforderliche Variablen

2. EXTERNE SERVICE KONFIGURATION DOKUMENTIEREN
   - docs/external-services.md mit:
     * Formspree Project-ID und Dashboard-Link
     * Formspree Form-Setup (Felddefinition, Email-Einstellung)
     * Calendly Account und Book-Link
     * Google Analytics 4 Property ID
     * Vercel Project ID und Domains
     * GitHub Repository Settings und Branch Protection
   - Alle Credentials als Vercel Env-Variablen (nicht im Repo)
   - Nur Public IDs und Links im Repo dokumentieren

3. REPRODUCIBILITY CHECK
   - Neues Team-Member: Clone Repo → npm install → npm run dev
   - Soll funktionieren ohne manuelle Dashboard-Navigation
   - Nur erforderlich: .env.local setzen mit Test-Credentials
   - Deployment: npm ci → npm run build → vercel deploy (mit VERCEL_TOKEN) = vollständig

4. MONITORING UND OBSERVABILITY
   - /api/health Endpoint für uptime monitoring
   - GitHub Actions: Test-Results in Checks Page
   - Vercel Deployment Logs: Verfügbar im Dashboard
   - Browser Console Errors: Nur in Development Mode geloggt
   - NO external Error-Tracking (Sentry, etc.)

Validierung GATE 8:
   ✓ next.config.ts konfiguriert mit Security Headers und Redirects
   ✓ vercel.json existiert mit Build- und Environment-Config
   ✓ .github/workflows/ alle Pipeline-Steps dokumentiert
   ✓ docs/external-services.md mit allen konfigurierten Services
   ✓ .env.example zeigt alle erforderlichen Variablen
   ✓ Deployment ohne Manuelle Dashboard-Actions möglich

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 9: BUILD-PERFORMANCE-OPTIMIERUNG UND ANALYSE
───────────────────────────────────────────────────────────────────────────────

Aufgabe: Build-Zeiten analysieren und Optimierungen durchführen

Detaillierte Schritte:

1. BUILD-ANALYSE
   - npm run build -- --profile (Next.js 13+)
   - Ausgabe zeigt: Timing pro Route, welche SSG/SSR/ISR
   - Ziel: Build <60 Sekunden (für schnelle Iteration)
   - Identify bottlenecks: Welche Routes sind slowest?

2. NEXT.JS OPTIMIERUNGEN (next.config.ts)
   const nextConfig = {
     swcMinify: true, // SWC statt Babel (schneller)
     typescript: {
       tsconfigPath: './tsconfig.json',
     },
     compiler: {
       removeConsole: process.env.NODE_ENV === 'production',
     },
     staticPageGenerationTimeout: 60,
     experimental: {
       // Turbopack wenn stable (Next.js 14+)
       turbopack: process.env.NODE_ENV === 'development',
     },
   }

3. CACHE-WARMING IN CI
   - npm run build in GitHub Actions cacht .next/
   - Folgender Build nutzt incrementales Rebuild
   - Cache-Key: hash(src/, public/, next.config.ts, package-lock.json)
   - Invalidation: Bei Dependency-Update oder Config-Änderung

4. BUILD-OUTPUT ANALYSE
   - .next/static/ enthält kompilierte Pages und Components
   - .next/server/ enthält Server-Side Code
   - Public/ Assets sollten minimal sein (externe Files lagern)
   - Unerwünschte Dateien in Build-Output: Prüfe next.config.ts Excludes

5. DEVELOPMENT-PERFORMANCE
   - npm run dev nutzt Turbopack (Next.js 14+) oder HMR (Hot Module Reload)
   - Changes sind instant verfügbar
   - Falls Slow: Check Middleware oder _app.tsx für synchrone Operations

Validierung GATE 9:
   ✓ npm run build komplettiert <60 Sekunden
   ✓ Build-Profile zeigt Route-Breakdown (SSG vs SSR)
   ✓ .next/cache wird in GitHub Actions gecacht
   ✓ swcMinify: true aktiviert in next.config.ts
   ✓ npm run dev HMR funktioniert (<2 Sekunden für File-Change)
   ✓ Incremental Build verfügbar (npm run build nach Edit schneller als first build)

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP — PHASE 17 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

───────────────────────────────────────────────────────────────────────────────
ULTRATHINK-TASK 10: KONTEXT-UPDATE UND HANDOFF ZU PHASE 18
───────────────────────────────────────────────────────────────────────────────

Aufgabe: Architektur-Dokumentation aktualisieren und Ready für Phase 18

Detaillierte Schritte:

1. .AI-ARCHITECTURAL-CONTEXT.MD AKTUALISIEREN
   Abschnitt "DevOps & Deployment":
   - Environment-Strategie: Development (local), Staging (Vercel Preview), Production (main)
   - CI/CD Pipeline: GitHub Actions mit Cache, Parallelisierung, Smoke Tests
   - Deployment: Vercel mit vercel.json Config, Auto-Deploy per Branch
   - Feature-Flags: src/lib/feature-flags.ts mit Percentage-based Rollout
   - Rollback: Vercel Native Rollback oder Hotfix-Forward Decision-Tree
   - Health Monitoring: /api/health Endpoint + Smoke Tests post-Deploy
   - Infrastructure-as-Code: Alles im Repo, keine manuellen Dashboard-Configs

2. .UPGRADE-STATE.MD AKTUALISIEREN
   Phase 17 Status:
   - ✓ Multi-Environment Architektur (Dev/Staging/Prod)
   - ✓ GitHub Actions erweitert mit Deploy-Steps
   - ✓ Vercel Deployment konfiguriert
   - ✓ Feature-Flag System
   - ✓ Rollback Strategie dokumentiert
   - ✓ Build-Performance optimiert
   - Status: COMPLETE — Bereit für Phase 18 (Security & Monitoring Deep-Dive)
   Next: Phase 18 wird Security-Tests, Error-Tracking Alternative, Observability erweitern

3. HANDOFF-PACKAGE VORBEREITEN
   - Commit: "Phase 17: DevOps, CI/CD & Deployment Infrastructure"
   - Commit-Message enthält Checklist aller 10 Tasks
   - Push zu main oder Merge über PR
   - Review vor Merge bestätigt: Alle Gates erfolgreich

4. TEAM KOMMUNIKATION
   - Deployment Guide dokumentiert für neue Team-Member
   - Notfall-Runbooks verfügbar
   - Monitoring-Alerts konfiguriert (wenn Fehler in Health-Check)

Validierung GATE 10:
   ✓ .ai-architectural-context.md mit DevOps-Sektion aktualisiert
   ✓ .upgrade-state.md markiert Phase 17 COMPLETE
   ✓ docs/deployment-guide.md vollständig mit Rollback + Hotfix Prozeduren
   ✓ Alle Code-Changes gecoomittet mit Conventional Commit Messages
   ✓ PR mit Phase 17 Summary merged zu main
   ✓ Phase 18 Voraussetzungen erfüllt: Code-Basis stabil, Deployments automatisiert

═══════════════════════════════════════════════════════════════════════════════
FINALE VALIDIERUNG PHASE 17 — COMPREHENSIVE CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

Development Environment:
  ☐ .env.local vorhanden mit Test-Formspree ID und Calendly URL
  ☐ npm run dev startet ohne Fehler
  ☐ src/lib/env.ts mit Zod-Validation vorhanden

Staging Environment:
  ☐ Vercel Preview Deployment pro PR funktioniert
  ☐ Staging Env-Variablen in Vercel Dashboard
  ☐ Preview-URL in PR-Comment von Vercel sichtbar

Production Environment:
  ☐ Main Branch automatisch auf vercel.app deployiert
  ☐ Production Env-Variablen mit echten IDs konfiguriert
  ☐ Custom Domain oder Vercel URL funktioniert

CI/CD Pipeline:
  ☐ GitHub Actions lädt node_modules Cache
  ☐ GitHub Actions lädt .next Cache
  ☐ Lint + Typecheck + Test parallel (Job 1)
  ☐ Build wartet auf Job 1 (Job 3)
  ☐ E2E Tests warten auf Build-Artifact
  ☐ Deploy Step nur auf main branch
  ☐ PR Status Checks blocking (Merge nicht möglich bei Fehler)

Branch Protection:
  ☐ GitHub Branch Protection auf main aktiviert
  ☐ Status Checks required (lint, test, build, typecheck)
  ☐ 1 Approval erforderlich vor Merge
  ☐ Force-push disabled
  ☐ Stale approvals dismissed bei neuen Commits

Deployment & Rollback:
  ☐ vercel.json im Root mit Build + Header Config
  ☐ npm run build erfolgreich
  ☐ Smoke Tests existieren und alle green
  ☐ /api/health Endpoint funktioniert
  ☐ Vercel Rollback verfügbar (3+ Deployments in History)
  ☐ docs/deployment-guide.md mit Rollback-Instructions

Feature Flags:
  ☐ src/lib/feature-flags.ts mit TypeScript-Typen
  ☐ useFeatureFlag() Hook implementiert
  ☐ Mindestens 1 Feature-Flag mit Demo
  ☐ Percentage-based Rollout funktioniert
  ☐ Env-Var Override funktioniert (FEATURE_* Variablen)

Infrastructure:
  ☐ docs/external-services.md dokumentiert alle Services
  ☐ .env.example zeigt alle erforderlichen Variablen
  ☐ Keine Credentials im Repo
  ☐ Vercel Env Vars für Production/Preview/Development
  ☐ GitHub Settings dokumentiert

Performance:
  ☐ npm run build <60 Sekunden
  ☐ Build-Profile zeigt Route-Breakdown
  ☐ .next Cache in GitHub Actions
  ☐ npm run dev HMR <2 Sekunden für File-Change

Documentation:
  ☐ .ai-architectural-context.md aktualisiert mit Phase 17 Output
  ☐ .upgrade-state.md markiert Phase 17 COMPLETE
  ☐ Conventional Commits ab jetzt enforced in CI
  ☐ Team-Wiki mit Rollback + Hotfix Runbooks

═══════════════════════════════════════════════════════════════════════════════
BEREIT FÜR PHASE 18: SECURITY & MONITORING DEEP-DIVE
═══════════════════════════════════════════════════════════════════════════════
