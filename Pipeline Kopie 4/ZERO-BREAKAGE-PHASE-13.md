Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, eine typsichere, datenschutzkonforme Analytics-Infrastruktur zu etablieren die Conversion-Funnel, Engagement-Metriken und Web Vitals erfasst ohne externe Error-Tracking-Services.

═══ ZERO-BREAKAGE PROTOKOLL — LIES DIES VOR JEDER AKTION ═══

THE 5 PILLARS:
1. READ-BEFORE-WRITE: Lese .ai-architectural-context.md und .upgrade-state.md VOLLSTÄNDIG bevor du Code schreibst
2. SURGICAL INJECTION: Nur gezielt in bestehende Dateien injizieren, keine neuen Dateien erstellen außer Dokumentation
3. ATOMIC VALIDATION: Jede Änderung muss npm run build && npm run lint && npx tsc --noEmit bestehen
4. STATE HANDOFF: Aktualisiere .upgrade-state.md nach jedem ULTRATHINK-TASK
5. SELF-OPTIMIZING LOOP: Aktualisiere .ai-architectural-context.md mit Analytics-Architektur am Ende

GOLDEN RULE: Code ist IMMER die Single Source of Truth. Dokumentation folgt dem Code.

TECH-STACK (STRICT):
- Core: Next.js (App Router oder Pages Router), React, TypeScript (Strict Mode)
- Styling: Tailwind CSS, CSS Modules oder CSS Custom Properties
- Erlaubte externe Dienste: AUSSCHLIESSLICH Formspree (Kontaktformular) und Calendly (Terminbuchung)
- STRIKT VERBOTEN: Kein Headless CMS, keine externen AI-APIs, kein Sentry oder externe Error-Tracking-SaaS, keine Newsletter-Systeme, kein i18n-Framework

═══ STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY ═══

Lese folgende Dateien VOLLSTÄNDIG bevor du fortfährst:
1. Öffne .ai-architectural-context.md und dokumentiere die aktuelle Next.js/React-Struktur
2. Öffne .upgrade-state.md und notiere welche Phasen bereits abgeschlossen sind
3. Prüfe ob folgende Dateien existieren (müssen für Phase 13 vorhanden sein):
   - lib/analytics/ oder utils/analytics/ Verzeichnis
   - types/analytics.ts für event-Typen
   - pages/api/events (Pages Router) oder app/api/events (App Router) für Custom-Endpoint
4. Prüfe vorhandene package.json auf @vercel/speed-insights und ga-4 Abhängigkeiten
5. Identifiziere alle Button, Link, Form-Komponenten die tracking-Props benötigen

PRE-FLIGHT VALIDATION:
- node_modules MUSS existieren und aktuell sein
- Alle TypeScript-Fehler MÜSSEN behoben sein vor Phase-13-Injektionen
- Keine breaking changes in bestehenden Komponenten-Props

───

═══ BLOCK A — ANALYTICS-ARCHITEKTUR UND TYPSICHERES EVENT-SYSTEM ═══

ULTRATHINK-TASK 1: ZENTRALES ANALYTICS-MODUL

Erstelle eine typsichere, provider-agnostische Analytics-Abstraktion mit Union-Typ für alle möglichen Events.

SCHRITT 1.1 — AnalyticsEvent Union-Typ definieren:
Datei: lib/analytics/types.ts (oder utils/analytics/types.ts)
- Definiere Union-Typ mit ~20 verschiedenen Event-Varianten
- Jedes Event MUSS folgende Basis-Properties haben: type (Literal), timestamp (ISO8601), sessionId (UUID)
- Event-Varianten MÜSSEN sein:
  * PageViewEvent (url, title, referrer, viewportWidth, colorScheme, utm_source, utm_medium, utm_campaign, utm_content, utm_term)
  * ScrollDepthEvent (depth: 25|50|75|100, engagementScore: number, sectionId?: string)
  * FormFunnelEvent (step: 'view'|'focus'|'field'|'attempt'|'success'|'error'|'abandon', formId: string, fieldName?: string, errorCode?: string)
  * ClickEvent (elementId: string, elementType: string, cta?: string, trackingId?: string, url?: string)
  * EngagementEvent (type: 'rage-click'|'dead-click'|'scroll-velocity', metadata: Record<string,unknown>)
  * WebVitalsEvent (metric: 'LCP'|'FID'|'CLS'|'TTFB'|'INP', value: number, rating: 'good'|'needs-improvement'|'poor')
  * ConversionEvent (conversionId: string, value: number, currency?: string, completionTime: number)
  * CalendlyEvent (eventType: 'invitee.created'|'invitee.canceled', data: Record<string,unknown>)
  * ErrorEvent (errorCode: string, errorMessage: string, errorStack?: string, severity: 'info'|'warning'|'error')

SCHRITT 1.2 — Analytics-Service abstrahieren:
Datei: lib/analytics/service.ts
```typescript
type AnalyticsProvider = 'ga4' | 'vercel' | 'custom' | 'all';

interface AnalyticsServiceConfig {
  ga4Enabled: boolean;
  ga4ConsentLevel: 'necessary' | 'analytics' | 'none';
  vercelEnabled: boolean;
  customEndpoint: string;
  sessionId: string;
  userId?: string;
}

export class AnalyticsService {
  private config: AnalyticsServiceConfig;
  private providers: Map<string, AnalyticsProvider>;

  track(event: AnalyticsEvent, providers?: AnalyticsProvider[]): void {
    // Route zu Providern basierend auf Consent-Level
    const targetProviders = providers || ['all'];
    if (this.config.ga4ConsentLevel === 'none') targetProviders.remove('ga4');
    // Track zu jedem Provider
  }

  setUserId(userId: string): void { ... }
  setSessionId(sessionId: string): void { ... }
}

export const analyticsService = new AnalyticsService(config);
```

SCHRITT 1.3 — Provider-Implementierungen (GA4, Vercel, Custom):
Datei: lib/analytics/providers/

GA4 Provider:
```typescript
export class GA4Provider implements IAnalyticsProvider {
  private gtag: any;

  async init(consentLevel: string): Promise<void> {
    if (consentLevel === 'none') return;
    // Lade GA4-Script mit Consent-Parameter
    // window.dataLayer = window.dataLayer || [];
  }

  track(event: AnalyticsEvent): void {
    if (!this.gtag) return;
    gtag('event', event.type, { /* event properties */ });
  }
}
```

Vercel Provider:
- Lade @vercel/analytics/react und nutze built-in track() für alle Events
- Vercel Analytics ist IMMER aktiv (keine Consent-Gate)
- Custom events via Analytics.track() Methode

Custom Endpoint Provider:
- POST zu /api/events mit batched events (max 50 pro Anfrage)
- Retry-Logic mit exponential backoff (1s, 2s, 4s)
- Nutze BeaconAPI für unload events

SCHRITT 1.4 — Session-Verwaltung:
Datei: lib/analytics/session.ts
```typescript
export function initializeSession(): string {
  let sessionId = sessionStorage.getItem('analytics_sessionId');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('analytics_sessionId', sessionId);
    sessionStorage.setItem('session_start', new Date().toISOString());
  }
  return sessionId;
}

export function getSessionId(): string {
  return sessionStorage.getItem('analytics_sessionId') || '';
}
```

VALIDATION GATE 1.1: npm run build && npx tsc --noEmit MUSS erfolgreich sein, alle AnalyticsEvent-Varianten MÜSSEN typsicher sein

───

ULTRATHINK-TASK 2: AUTOMATISCHES PAGE-VIEW-TRACKING

Implementiere Client-seitiges Page-View-Tracking ohne Hard-Navigation Umladungen.

SCHRITT 2.1 — usePageTracking Hook:
Datei: lib/analytics/hooks/usePageTracking.ts
```typescript
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { analyticsService } from '../service';

export function usePageTracking() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lastPathRef = useRef<string>();

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams}` : '');
    if (lastPathRef.current === url) return;
    lastPathRef.current = url;

    const event: PageViewEvent = {
      type: 'pageView',
      url,
      title: document.title,
      referrer: document.referrer,
      viewportWidth: window.innerWidth,
      viewportCategory: window.innerWidth < 768 ? 'mobile' : window.innerWidth < 1024 ? 'tablet' : 'desktop',
      utm_source: new URLSearchParams(window.location.search).get('utm_source') || '',
      utm_medium: new URLSearchParams(window.location.search).get('utm_medium') || '',
      utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign') || '',
      utm_content: new URLSearchParams(window.location.search).get('utm_content') || '',
      utm_term: new URLSearchParams(window.location.search).get('utm_term') || '',
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
    };

    analyticsService.track(event);
  }, [pathname, searchParams]);
}
```

SCHRITT 2.2 — UTM-Parameter-Capture in sessionStorage:
```typescript
export function captureUTMParameters() {
  const params = new URLSearchParams(window.location.search);
  const utm = {
    source: params.get('utm_source'),
    medium: params.get('utm_medium'),
    campaign: params.get('utm_campaign'),
    content: params.get('utm_content'),
    term: params.get('utm_term'),
    capturedAt: new Date().toISOString(),
  };
  sessionStorage.setItem('utm_parameters', JSON.stringify(utm));
}
```

SCHRITT 2.3 — Root-Layout Integration:
- Rufe usePageTracking() in RootLayout oder _app.tsx auf
- Rufe captureUTMParameters() in useEffect mit [] dependency auf (einmalig beim Mount)
- Initialisiere Session mit initializeSession()

VALIDATION GATE 2.1: Google Analytics Real-Time zeigt Pageviews für jede Navigation, UTM-Parameter sind in sessionStorage vorhanden

───

ULTRATHINK-TASK 3: SCROLL-DEPTH-TRACKING

Implementiere Engagement-Metriken via Intersection Observer (NICHT Scroll-Events).

SCHRITT 3.1 — useScrollDepth Hook:
Datei: lib/analytics/hooks/useScrollDepth.ts
```typescript
export function useScrollDepth() {
  const containerRef = useRef<HTMLDivElement>(null);
  const depthsTrackedRef = useRef<Set<number>>(new Set());
  const startTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    if (!containerRef.current) return;

    const thresholds = [0.25, 0.5, 0.75, 1.0];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const depth = entry.target.getAttribute('data-scroll-depth');
          if (!depth || depthsTrackedRef.current.has(Number(depth))) return;

          depthsTrackedRef.current.add(Number(depth));
          const engagementScore = (Number(depth) / 100) * (Date.now() - startTimeRef.current) / 1000;

          const event: ScrollDepthEvent = {
            type: 'scrollDepth',
            depth: Number(depth) as 25|50|75|100,
            engagementScore,
            sectionId: entry.target.id || undefined,
            timestamp: new Date().toISOString(),
            sessionId: getSessionId(),
          };

          analyticsService.track(event);
        });
      },
      { threshold: thresholds }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return containerRef;
}
```

SCHRITT 3.2 — Scroll-Marker in Content:
- Komponenten mit langen Content MÜSSEN folgende divs enthalten:
  ```html
  <div data-scroll-depth="25" id="content-section-1"></div>
  <div data-scroll-depth="50" id="content-section-2"></div>
  <div data-scroll-depth="75" id="content-section-3"></div>
  <div data-scroll-depth="100" id="content-section-4"></div>
  ```
- Diese divs können leer sein (nur für Observer-Tracking)

SCHRITT 3.3 — Optional: Section Visibility Tracking:
- Komponenten können `sectionVisibility` prop als callback akzeptieren
- Bei Intersection-Änderung: `onSectionVisible(sectionId, isVisible, depth)`
- Nutze dafür: `entry.isIntersecting`, `entry.intersectionRatio`

VALIDATION GATE 3.1: GA4 zeigt ScrollDepthEvent mit Depth 25, 50, 75, 100 für längere Seiten, engagementScore ist > 0

───

═══ BLOCK B — FORMULAR-FUNNEL & CLICK-TRACKING ═══

ULTRATHINK-TASK 4: FORMULAR-FUNNEL-TRACKING (FORMSPREE)

Implementiere 7-stufigen Funnel für Formspree-Integration mit Feld-Analyse.

SCHRITT 4.1 — Form Funnel Event-Types:
```typescript
type FormFunnelStep = 'view' | 'focus' | 'field' | 'attempt' | 'success' | 'error' | 'abandon';

interface FormFunnelEvent {
  type: 'formFunnel';
  step: FormFunnelStep;
  formId: string;
  fieldName?: string;
  fieldIndex?: number;
  fillDuration?: number; // ms
  correctionCount?: number;
  errorCode?: string;
  errorMessage?: string;
  abandonReason?: 'blur' | 'unfocus' | 'timeout';
  timestamp: string;
  sessionId: string;
}
```

SCHRITT 4.2 — useFormTracking Hook:
Datei: lib/analytics/hooks/useFormTracking.ts
```typescript
export function useFormTracking(formId: string) {
  const fieldStartTimesRef = useRef<Map<string, number>>(new Map());
  const fieldCorrectionRef = useRef<Map<string, number>>(new Map());
  const formStartRef = useRef<number>(Date.now());

  useEffect(() => {
    // Track: Form View
    analyticsService.track({
      type: 'formFunnel',
      step: 'view',
      formId,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
    });

    const form = document.getElementById(formId) as HTMLFormElement;
    if (!form) return;

    const handleFieldFocus = (e: FocusEvent) => {
      const field = e.target as HTMLInputElement | HTMLTextAreaElement;
      fieldStartTimesRef.current.set(field.name, Date.now());

      analyticsService.track({
        type: 'formFunnel',
        step: 'focus',
        formId,
        fieldName: field.name,
        fieldIndex: Array.from(form.elements).indexOf(field),
        timestamp: new Date().toISOString(),
        sessionId: getSessionId(),
      });
    };

    const handleFieldInput = (e: Event) => {
      const field = e.target as HTMLInputElement | HTMLTextAreaElement;
      const prevCount = fieldCorrectionRef.current.get(field.name) || 0;
      fieldCorrectionRef.current.set(field.name, prevCount + 1);

      analyticsService.track({
        type: 'formFunnel',
        step: 'field',
        formId,
        fieldName: field.name,
        correctionCount: prevCount,
        timestamp: new Date().toISOString(),
        sessionId: getSessionId(),
      });
    };

    const handleFieldBlur = (e: FocusEvent) => {
      const field = e.target as HTMLInputElement | HTMLTextAreaElement;
      const startTime = fieldStartTimesRef.current.get(field.name) || Date.now();

      analyticsService.track({
        type: 'formFunnel',
        step: 'abandon',
        formId,
        fieldName: field.name,
        fillDuration: Date.now() - startTime,
        correctionCount: fieldCorrectionRef.current.get(field.name) || 0,
        abandonReason: 'blur',
        timestamp: new Date().toISOString(),
        sessionId: getSessionId(),
      });
    };

    form.addEventListener('focusin', handleFieldFocus);
    form.addEventListener('input', handleFieldInput);
    form.addEventListener('focusout', handleFieldBlur);

    return () => {
      form.removeEventListener('focusin', handleFieldFocus);
      form.removeEventListener('input', handleFieldInput);
      form.removeEventListener('focusout', handleFieldBlur);
    };
  }, [formId]);

  const trackSubmit = (success: boolean, error?: string) => {
    analyticsService.track({
      type: 'formFunnel',
      step: success ? 'success' : 'error',
      formId,
      errorCode: error ? 'FORM_SUBMISSION_ERROR' : undefined,
      errorMessage: error,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
    });
  };

  return { trackSubmit };
}
```

SCHRITT 4.3 — Calendly postMessage Event-Tracking:
```typescript
export function trackCalendlyEvents() {
  window.addEventListener('message', (e) => {
    if (e.origin !== 'https://calendly.com') return;
    if (!e.data.event || !e.data.event.startsWith('calendly')) return;

    const event: CalendlyEvent = {
      type: 'calendlyEvent',
      eventType: e.data.event as any,
      data: e.data.payload || {},
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
    };

    analyticsService.track(event);
  });
}
```

SCHRITT 4.4 — Conversion Attribution Tracking:
- Speichere gesamten User-Journey in sessionStorage als JSON Array
- Bei Konversion: sende vollständigen Journey zu Custom Endpoint unter `conversionJourney`
- Journey MUSS enthalten: [PageView, FormStart, FormFields durchlaufen, FormSuccess, optional CalendlyBooking]

VALIDATION GATE 4.1: GA4 Funnel zeigt 7-stufigen Form-Funnel mit Dropout-Analyse, feldspezifische Metriken sind vorhanden

───

ULTRATHINK-TASK 5: CTA-TRACKING-SYSTEM

Implementiere TrackedLink und erweitere Button um trackingId prop.

SCHRITT 5.1 — Button-Komponente erweitern:
Datei: components/Button.tsx (EXISTING FILE — SURGICAL INJECTION)
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  trackingId?: string;
  cta?: string; // z.B. "primary_cta_hero", "secondary_cta_pricing"
}

export function Button({ trackingId, cta, onClick, ...props }: ButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (trackingId || cta) {
      analyticsService.track({
        type: 'click',
        elementId: trackingId || '',
        elementType: 'button',
        cta: cta || props.children?.toString() || '',
        trackingId,
        timestamp: new Date().toISOString(),
        sessionId: getSessionId(),
      });
    }
    onClick?.(e);
  };

  return <button onClick={handleClick} {...props} />;
}
```

SCHRITT 5.2 — TrackedLink Komponente:
Datei: components/TrackedLink.tsx (NEW FILE)
```typescript
import Link from 'next/link';
import { ReactNode } from 'react';
import { analyticsService, getSessionId } from '@/lib/analytics';

interface TrackedLinkProps {
  href: string;
  trackingId?: string;
  cta?: string;
  external?: boolean;
  children: ReactNode;
  className?: string;
}

export function TrackedLink({
  href,
  trackingId,
  cta,
  external = false,
  children,
  className
}: TrackedLinkProps) {

  const handleClick = () => {
    analyticsService.track({
      type: 'click',
      elementId: trackingId || href,
      elementType: 'link',
      elementSubType: external ? 'external' : 'internal',
      cta: cta || children?.toString() || '',
      url: href,
      trackingId,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
    });
  };

  if (external) {
    return (
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
```

SCHRITT 5.3 — CTA Performance Map:
Datei: lib/analytics/cta-map.ts
```typescript
export const CTAMap = {
  // Hero Section
  hero_primary_cta: { section: 'hero', priority: 'primary', expectedConversion: 'contact-form' },
  hero_secondary_cta: { section: 'hero', priority: 'secondary', expectedConversion: 'calendly-book' },

  // Pricing Section
  pricing_starter_cta: { section: 'pricing', tier: 'starter', expectedConversion: 'form-starter' },
  pricing_pro_cta: { section: 'pricing', tier: 'pro', expectedConversion: 'form-pro' },

  // Navigation
  nav_contact_link: { section: 'navigation', expectedConversion: 'contact-form' },
  nav_book_link: { section: 'navigation', expectedConversion: 'calendly-book' },
} as const;

export type CTAKey = keyof typeof CTAMap;
```

SCHRITT 5.4 — Integration in bestehenden Komponenten:
- Alle bestehenden Button-Komponenten MÜSSEN trackingId prop erhalten
- Alle Next.js Link-Komponenten SOLLTEN durch TrackedLink ersetzt werden
- Beispiel: `<Button trackingId="hero_primary_cta" cta="Get Started">Contact Us</Button>`

VALIDATION GATE 5.1: GA4 zeigt Click-Events mit trackingId, externe Links werden mit elementSubType=external gekennzeichnet

───

ULTRATHINK-TASK 6: ENGAGEMENT-METRIKEN

Implementiere Time-on-Page, Rage-Click-Detection, Dead-Click-Detection, Scroll-Velocity-Tracking.

SCHRITT 6.1 — useTimeOnPage Hook:
```typescript
export function useTimeOnPage() {
  const startTimeRef = useRef<number>(Date.now());
  const totalTimeRef = useRef<number>(0);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Page ist nicht mehr sichtbar: pause
        totalTimeRef.current += Date.now() - startTimeRef.current;
      } else {
        // Page wird wieder sichtbar: resume
        startTimeRef.current = Date.now();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      totalTimeRef.current += Date.now() - startTimeRef.current;

      // Bei Unload: track final time
      const timeOnPage = totalTimeRef.current / 1000; // seconds
      analyticsService.track({
        type: 'engagement',
        engagementType: 'timeOnPage',
        value: timeOnPage,
        timestamp: new Date().toISOString(),
        sessionId: getSessionId(),
      });
    };
  }, []);
}
```

SCHRITT 6.2 — Rage-Click-Detection:
```typescript
export function useRageClickDetection() {
  const clicksRef = useRef<Array<{ x: number; y: number; timestamp: number }>>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      clicksRef.current.push({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      });

      // Behalte nur Clicks aus letzten 500ms
      clicksRef.current = clicksRef.current.filter(
        c => Date.now() - c.timestamp < 500
      );

      // Prüfe: 3+ Clicks in 500ms im ±20px Radius
      if (clicksRef.current.length >= 3) {
        const first = clicksRef.current[0];
        const allNearby = clicksRef.current.every(
          c => Math.abs(c.x - first.x) <= 20 && Math.abs(c.y - first.y) <= 20
        );

        if (allNearby) {
          const rageEvent: EngagementEvent = {
            type: 'engagement',
            engagementType: 'rage-click',
            x: first.x,
            y: first.y,
            clickCount: clicksRef.current.length,
            timestamp: new Date().toISOString(),
            sessionId: getSessionId(),
          };
          analyticsService.track(rageEvent);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
}
```

SCHRITT 6.3 — Dead-Click-Detection:
```typescript
const handleClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement;

  // Prüfe: ist Element tatsächlich interaktiv?
  const isInteractive = ['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA'].includes(
    target.tagName
  ) || target.getAttribute('role') === 'button';

  if (!isInteractive) {
    analyticsService.track({
      type: 'engagement',
      engagementType: 'dead-click',
      elementTag: target.tagName,
      elementText: target.textContent?.substring(0, 50) || '',
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
    });
  }
};
```

SCHRITT 6.4 — Scroll-Velocity-Tracking:
```typescript
export function useScrollVelocity() {
  const lastScrollRef = useRef<{ y: number; timestamp: number }>(
    { y: 0, timestamp: Date.now() }
  );

  useEffect(() => {
    let rafId: number;

    const handleScroll = () => {
      const now = Date.now();
      const scrollY = window.scrollY;
      const timeDelta = (now - lastScrollRef.current.timestamp) / 1000;
      const scrollDelta = scrollY - lastScrollRef.current.y;

      if (timeDelta > 0) {
        const velocity = Math.abs(scrollDelta / timeDelta); // pixels per second

        let velocityType: 'reading' | 'scanning' | 'searching';
        if (velocity < 100) velocityType = 'reading';
        else if (velocity < 300) velocityType = 'scanning';
        else velocityType = 'searching';

        analyticsService.track({
          type: 'engagement',
          engagementType: 'scroll-velocity',
          velocity,
          velocityType,
          timestamp: new Date().toISOString(),
          sessionId: getSessionId(),
        });
      }

      lastScrollRef.current = { y: scrollY, timestamp: now };
    };

    const listener = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', listener);
    return () => {
      window.removeEventListener('scroll', listener);
      cancelAnimationFrame(rafId);
    };
  }, []);
}
```

VALIDATION GATE 6.1: GA4 zeigt EngagementEvent mit Subtypen rage-click, dead-click, scroll-velocity, timeOnPage

───

═══ BLOCK C — WEB VITALS UND PERFORMANCE-ANALYTICS ═══

ULTRATHINK-TASK 7: WEB VITALS REAL USER MONITORING

Integriere @vercel/speed-insights und track Web Vitals zu GA4.

SCHRITT 7.1 — @vercel/speed-insights Installation & Setup:
Datei: package.json
```
"@vercel/speed-insights": "^1.1.0"
```

Datei: app/layout.tsx (oder pages/_app.tsx)
```typescript
import { SpeedInsights } from '@vercel/speed-insights/react';

export default function RootLayout() {
  return (
    <html>
      <body>
        {/* ... */}
        <SpeedInsights />
      </body>
    </html>
  );
}
```

SCHRITT 7.2 — Custom Web Vitals Handler:
Datei: lib/analytics/web-vitals.ts
```typescript
import { getCLS, getFID, getFCP, getLCP, getTTFB, getINP } from 'web-vitals';

type MetricName = 'LCP' | 'FID' | 'CLS' | 'TTFB' | 'INP' | 'FCP';
type MetricRating = 'good' | 'needs-improvement' | 'poor';

function getMetricRating(metricName: MetricName, value: number): MetricRating {
  const thresholds: Record<MetricName, [number, number]> = {
    LCP: [2500, 4000],
    FID: [100, 300],
    CLS: [0.1, 0.25],
    TTFB: [600, 1200],
    INP: [200, 500],
    FCP: [1800, 3000],
  };

  const [good, poor] = thresholds[metricName];
  if (value <= good) return 'good';
  if (value <= poor) return 'needs-improvement';
  return 'poor';
}

export function initWebVitals() {
  getLCP((metric) => trackWebVital('LCP', metric.value));
  getFID((metric) => trackWebVital('FID', metric.value));
  getCLS((metric) => trackWebVital('CLS', metric.value));
  getTTFB((metric) => trackWebVital('TTFB', metric.value));
  getINP((metric) => trackWebVital('INP', metric.value));
  getFCP((metric) => trackWebVital('FCP', metric.value));
}

function trackWebVital(metricName: MetricName, value: number) {
  const rating = getMetricRating(metricName, value);

  const event: WebVitalsEvent = {
    type: 'webVitals',
    metric: metricName,
    value,
    rating,
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
  };

  analyticsService.track(event);

  // Sende auch zu GA4 als Custom Event
  if (window.gtag) {
    gtag('event', 'web_vital', {
      metric: metricName,
      value: Math.round(value),
      rating,
    });
  }
}
```

SCHRITT 7.3 — Performance-Conversion-Korrelation:
Datei: lib/analytics/correlation.ts
```typescript
export function analyzePerformanceConversionCorrelation() {
  // Diese Analyse läuft im GA4 Backend (Exploration Reports)
  // Lokal speichere: WebVital + konvertiert (Boolean) in Custom Event

  // Bei Conversion (z.B. Form Submit):
  const webVitalSnapshot = sessionStorage.getItem('last_web_vitals_snapshot');
  if (webVitalSnapshot) {
    const vitals = JSON.parse(webVitalSnapshot);
    analyticsService.track({
      type: 'conversion',
      conversionId: 'form_submission_with_vitals',
      vitalsSnapshot: vitals,
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
    });
  }
}
```

VALIDATION GATE 7.1: Vercel Analytics Dashboard zeigt Web Vitals, GA4 empfängt WebVitalsEvent mit numerischen Werten und Rating

───

ULTRATHINK-TASK 8: ERROR-TRACKING ALS ANALYTICS-QUELLE

Implementiere Client-Error-Tracking, 404-Tracking und Formspree-Error-Tracking — ALLES LOKAL, kein Sentry.

SCHRITT 8.1 — Global Error Handler:
Datei: lib/analytics/error-handler.ts
```typescript
export function initErrorTracking() {
  // Uncaught JS Errors
  window.addEventListener('error', (event) => {
    const errorEvent: ErrorEvent = {
      type: 'error',
      errorCode: 'UNCAUGHT_ERROR',
      errorMessage: event.message,
      errorStack: event.error?.stack,
      severity: 'error',
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
    };
    analyticsService.track(errorEvent);
    console.error('[Analytics] Uncaught error tracked:', event.error);
  });

  // Unhandled Promise Rejections
  window.addEventListener('unhandledrejection', (event) => {
    const errorEvent: ErrorEvent = {
      type: 'error',
      errorCode: 'UNHANDLED_REJECTION',
      errorMessage: event.reason?.message || String(event.reason),
      errorStack: event.reason?.stack,
      severity: 'error',
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
    };
    analyticsService.track(errorEvent);
    console.error('[Analytics] Unhandled rejection tracked:', event.reason);
  });
}
```

SCHRITT 8.2 — 404 Page Tracking:
Datei: app/not-found.tsx oder pages/404.tsx
```typescript
'use client';

import { useEffect } from 'react';
import { analyticsService, getSessionId } from '@/lib/analytics';

export default function NotFound() {
  useEffect(() => {
    analyticsService.track({
      type: 'error',
      errorCode: '404_NOT_FOUND',
      errorMessage: `404: ${window.location.pathname}`,
      severity: 'warning',
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
    });
  }, []);

  return <div>404 - Page not found</div>;
}
```

SCHRITT 8.3 — Formspree Error Handler:
```typescript
// Im Form-Component nach Formspree-Integration:
const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const response = await fetch(e.currentTarget.action, {
      method: 'POST',
      body: new FormData(e.currentTarget),
    });

    if (!response.ok) {
      throw new Error(`Formspree error: ${response.status}`);
    }

    // Success
    useFormTracking('contact-form').trackSubmit(true);
  } catch (error) {
    const errorEvent: ErrorEvent = {
      type: 'error',
      errorCode: 'FORMSPREE_SUBMISSION_ERROR',
      errorMessage: error instanceof Error ? error.message : 'Unknown form error',
      severity: 'error',
      timestamp: new Date().toISOString(),
      sessionId: getSessionId(),
    };
    analyticsService.track(errorEvent);
    useFormTracking('contact-form').trackSubmit(false, error instanceof Error ? error.message : '');
  }
};
```

SCHRITT 8.4 — Console Error Monitoring:
```typescript
// Optional: auch console.error() tracken
const originalError = console.error;
console.error = function(...args) {
  originalError.apply(console, args);

  const errorEvent: ErrorEvent = {
    type: 'error',
    errorCode: 'CONSOLE_ERROR',
    errorMessage: args[0]?.toString() || 'Unknown console error',
    severity: 'warning',
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
  };
  analyticsService.track(errorEvent);
};
```

VALIDATION GATE 8.1: GA4 zeigt ErrorEvent mit errorCode, 404s werden separat gezählt, keine Sentry-Integration vorhanden

───

═══ BLOCK D — DASHBOARDS, REPORTING UND A/B-TESTING ═══

ULTRATHINK-TASK 9: GA4 KONFIGURATION UND CUSTOM REPORTS

Konfiguriere GA4 mit Custom Dimensions, Metrics, Conversions und Exploration Reports.

SCHRITT 9.1 — GA4 Custom Dimensions:
Datei: lib/analytics/ga4-config.ts
```typescript
export const GA4_CUSTOM_DIMENSIONS = {
  page_type: { dimensionName: 'page_type', values: ['landing', 'product', 'blog', 'contact', '404'] },
  viewport: { dimensionName: 'viewport', values: ['mobile', 'tablet', 'desktop'] },
  visitor_type: { dimensionName: 'visitor_type', values: ['new', 'returning', 'loyal'] },
  utm_source: { dimensionName: 'utm_source' },
  utm_medium: { dimensionName: 'utm_medium' },
  utm_campaign: { dimensionName: 'utm_campaign' },
  form_step: { dimensionName: 'form_step', values: ['view', 'focus', 'field', 'abandon', 'success', 'error'] },
} as const;

export function setGA4Dimensions(data: Record<string, string>) {
  if (!window.gtag) return;
  gtag('config', 'GA4_MEASUREMENT_ID', { ...data });
}
```

SCHRITT 9.2 — GA4 Custom Metrics (Events):
```typescript
export const GA4_CUSTOM_METRICS = {
  engagement_score: { eventName: 'engagement_score', unit: 'points' },
  form_completion_time: { eventName: 'form_completion_time', unit: 'seconds' },
  scroll_depth: { eventName: 'scroll_depth', unit: 'percent' },
  web_vital_lcp: { eventName: 'web_vital_lcp', unit: 'milliseconds' },
  web_vital_cls: { eventName: 'web_vital_cls', unit: 'decimal' },
  rage_click_count: { eventName: 'rage_click_count', unit: 'count' },
} as const;
```

SCHRITT 9.3 — Conversion Marking in GA4:
Datei: lib/analytics/conversions.ts
```typescript
export const CONVERSION_GOALS = {
  form_submission: { name: 'form_submission', category: 'lead_generation' },
  calendly_booking: { name: 'calendly_booking', category: 'appointment' },
  email_signup: { name: 'email_signup', category: 'engagement' },
  pricing_view: { name: 'pricing_view', category: 'product_interest' },
} as const;

export function markConversion(conversionGoal: keyof typeof CONVERSION_GOALS) {
  if (!window.gtag) return;
  gtag('event', 'conversion', {
    conversion_id: CONVERSION_GOALS[conversionGoal].name,
    conversion_category: CONVERSION_GOALS[conversionGoal].category,
  });

  const conversionEvent: ConversionEvent = {
    type: 'conversion',
    conversionId: CONVERSION_GOALS[conversionGoal].name,
    value: 1,
    currency: 'USD',
    completionTime: Date.now() - (parseInt(sessionStorage.getItem('session_start') || '0') || Date.now()),
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
  };
  analyticsService.track(conversionEvent);
}
```

SCHRITT 9.4 — GA4 Exploration Report Templates:
- **Funnel Report**: Form Funnel mit 7 Steps (view → focus → field → attempt → success/error/abandon)
- **Path Report**: Top conversion paths (PageView → Click → FormStart → FormSuccess)
- **Segment Comparison**: Converters vs Non-Converters by traffic source
- **Cohort Analysis**: Retention rate nach visitor_type (new/returning)

SCHRITT 9.5 — Monthly Report Template:
```markdown
# Monthly Analytics Report — [Month/Year]

## Key Metrics
- Total Sessions: [number]
- New Users: [number]
- Conversion Rate: [percent]
- Average Engagement Time: [seconds]

## Traffic Sources (Top 5)
1. [source] — [sessions] sessions — [conversion_rate]%

## Form Funnel Performance
- View → Focus: [percent]% completion
- Focus → Field: [percent]% completion
- Final Conversion Rate: [percent]%

## Web Vitals
- LCP (avg): [value]ms (rating: [good/needs-improvement/poor])
- CLS (avg): [value] (rating: [good/needs-improvement/poor])
- INP (avg): [value]ms (rating: [good/needs-improvement/poor])

## Engagement Insights
- Rage Clicks: [count] (down [percent]% from last month)
- Scroll Depth: [percent]% users reach 50%+ depth
- Time on Page: [seconds] average
```

VALIDATION GATE 9.1: GA4 Property zeigt Custom Dimensions, Custom Metrics, Conversions sind konfiguriert, Exploration Reports sind verfügbar

───

ULTRATHINK-TASK 10: A/B-TESTING-INFRASTRUKTUR

Implementiere Cookie-basiertes A/B-Testing ohne externe Tools mit useExperiment Hook.

SCHRITT 10.1 — Experiment Config:
Datei: lib/analytics/experiments.ts
```typescript
export interface ExperimentConfig {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'completed';
  variants: {
    control: { label: string; weight: number }; // z.B. weight 50 = 50%
    treatment_a: { label: string; weight: number };
    treatment_b?: { label: string; weight: number };
  };
  startDate: string; // ISO
  endDate?: string; // ISO
  trackingDimension: string;
}

export const ACTIVE_EXPERIMENTS: Record<string, ExperimentConfig> = {
  hero_cta_text: {
    id: 'hero_cta_text_v1',
    name: 'Hero CTA Button Text',
    description: 'Testing "Get Started" vs "Schedule Demo"',
    status: 'active',
    variants: {
      control: { label: 'Get Started', weight: 50 },
      treatment_a: { label: 'Schedule Demo', weight: 50 },
    },
    startDate: '2026-03-01T00:00:00Z',
    endDate: '2026-04-01T00:00:00Z',
    trackingDimension: 'hero_cta_variant',
  },
};
```

SCHRITT 10.2 — useExperiment Hook:
Datei: lib/analytics/hooks/useExperiment.ts
```typescript
export function useExperiment(experimentId: string): string {
  const cookieName = `exp_${experimentId}`;

  // Lese aus Cookie oder weise zu
  const getOrCreateVariant = (): string => {
    const existing = getCookie(cookieName);
    if (existing) return existing;

    const config = ACTIVE_EXPERIMENTS[experimentId];
    if (!config) return 'control';

    const rand = Math.random() * 100;
    let accumulated = 0;

    for (const [variant, { weight }] of Object.entries(config.variants)) {
      accumulated += weight;
      if (rand <= accumulated) {
        setCookie(cookieName, variant, 30); // 30-day cookie
        return variant;
      }
    }

    return 'control';
  };

  const variant = getOrCreateVariant();

  // Track experiment assignment
  useEffect(() => {
    gtag('event', 'experiment_assignment', {
      experiment_id: experimentId,
      variant,
    });
  }, [experimentId, variant]);

  return variant;
}
```

SCHRITT 10.3 — Variant Rendering:
```typescript
// In Komponenten:
export function HeroSection() {
  const variant = useExperiment('hero_cta_text');

  return (
    <Button trackingId="hero_primary_cta">
      {variant === 'control' ? 'Get Started' : 'Schedule Demo'}
    </Button>
  );
}
```

SCHRITT 10.4 — A/B-Test Tracking in GA4:
```typescript
// Bei jedem Event, sende auch experiment variant:
gtag('event', 'conversion', {
  conversion_id: 'form_submission',
  experiment_hero_cta_variant: variant,
});
```

SCHRITT 10.5 — Statistical Significance Calculation:
Datei: lib/analytics/significance.ts
```typescript
export function calculateSignificance(
  control_conversions: number,
  control_samples: number,
  treatment_conversions: number,
  treatment_samples: number
): { zscore: number; pvalue: number; isSignificant: boolean } {
  const p1 = control_conversions / control_samples;
  const p2 = treatment_conversions / treatment_samples;
  const p = (control_conversions + treatment_conversions) / (control_samples + treatment_samples);

  const zscore = (p1 - p2) / Math.sqrt(p * (1 - p) * (1 / control_samples + 1 / treatment_samples));
  const pvalue = 2 * (1 - normalCDF(Math.abs(zscore))); // two-tailed

  return {
    zscore,
    pvalue,
    isSignificant: pvalue < 0.05, // 95% confidence
  };
}
```

SCHRITT 10.6 — Dev-Only Dashboard:
Datei: app/dev/experiments/page.tsx
```typescript
'use client';

import { ACTIVE_EXPERIMENTS } from '@/lib/analytics/experiments';

export default function ExperimentsPage() {
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="p-8">
      <h1>Active Experiments (Dev Only)</h1>
      {Object.entries(ACTIVE_EXPERIMENTS).map(([key, exp]) => (
        <div key={key} className="border p-4 my-4">
          <h3>{exp.name}</h3>
          <p>Status: {exp.status}</p>
          <p>Variants: {Object.keys(exp.variants).join(', ')}</p>
          <p>Your variant: {getCookie(`exp_${exp.id}`) || 'Not assigned'}</p>
        </div>
      ))}
    </div>
  );
}
```

VALIDATION GATE 10.1: Zwei Benutzer in verschiedenen Browser Instanzen sehen unterschiedliche Hero CTA Texte, GA4 zeigt experiment_assignment Events, /dev/experiments zeigt aktive Experimente

───

═══ BLOCK E — DATENSCHUTZ UND CONSENT-INTEGRATION ═══

ULTRATHINK-TASK 11: CONSENT-AWARE ANALYTICS

Implementiere 3-stufiges Consent-System mit Consent Mode V2 für GA4.

SCHRITT 11.1 — Consent Categories:
Datei: lib/analytics/consent.ts
```typescript
export type ConsentCategory = 'essential' | 'analytics' | 'marketing';
export type ConsentLevel = 'none' | 'essential_only' | 'analytics' | 'all';

export interface ConsentState {
  essential: boolean; // Immer true
  analytics: boolean; // Requires cookie consent
  marketing: boolean; // Requires explicit opt-in
  consentVersion: number;
  consentDate: string;
}

export const DEFAULT_CONSENT: ConsentState = {
  essential: true, // Always on
  analytics: false,
  marketing: false,
  consentVersion: 2,
  consentDate: new Date().toISOString(),
};

export function getConsentState(): ConsentState {
  const stored = localStorage.getItem('consent_state');
  return stored ? JSON.parse(stored) : DEFAULT_CONSENT;
}

export function setConsentState(state: ConsentState) {
  localStorage.setItem('consent_state', JSON.stringify(state));

  // Aktualisiere GA4 Consent Mode V2
  gtag('consent', 'update', {
    'analytics_storage': state.analytics ? 'granted' : 'denied',
    'marketing_storage': state.marketing ? 'granted' : 'denied',
    'functionality_storage': 'granted',
    'personalization_storage': state.analytics ? 'granted' : 'denied',
    'wait_for_update': 500,
  });
}
```

SCHRITT 11.2 — Cookie Banner Component:
Datei: components/CookieBanner.tsx
```typescript
'use client';

import { useState, useEffect } from 'react';
import { getConsentState, setConsentState, ConsentState } from '@/lib/analytics/consent';

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(getConsentState());

  useEffect(() => {
    // Zeige Banner nur wenn noch nicht akzeptiert
    if (!localStorage.getItem('consent_state')) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const newConsent = { ...consent, analytics: true, marketing: true };
    setConsentState(newConsent);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const newConsent = { ...consent, analytics: false, marketing: false };
    setConsentState(newConsent);
    setIsVisible(false);
  };

  const handleCustomize = (analytics: boolean, marketing: boolean) => {
    const newConsent = { ...consent, analytics, marketing };
    setConsentState(newConsent);
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4 z-50">
      <p className="mb-4">
        We use cookies for essential functionality and analytics. You can customize your preferences.
      </p>
      <div className="flex gap-2">
        <button onClick={handleRejectAll}>Reject All</button>
        <button onClick={() => handleCustomize(true, false)}>Analytics Only</button>
        <button onClick={handleAcceptAll}>Accept All</button>
      </div>
      <a href="/privacy" className="text-sm text-gray-400 mt-2 block">Privacy Policy</a>
    </div>
  );
}
```

SCHRITT 11.3 — Cookie Inventory Dokumentation:
Datei: public/COOKIE_INVENTORY.md
```markdown
# Cookie Inventory

## Essential Cookies (Always Set)
- analytics_sessionId: Session identifier for analytics tracking (duration: 24h)
- consent_state: User's consent preferences (duration: 12 months)

## Analytics Cookies (Requires Consent)
- _ga: Google Analytics identifier (duration: 2 years)
- _gid: Google Analytics session (duration: 1 day)
- exp_*: A/B test variant assignments (duration: 30 days)

## Marketing Cookies
- Currently unused (reserved for future campaigns)

## Third-Party Cookies
- calendly.com: Scheduling service (Essential for booking functionality)
- formspree.io: Form submission service (Essential for contact form)

## Cookie Banner
- Appears once per session
- Stored in localStorage, not cookies
- Can be reset by clearing localStorage
```

SCHRITT 11.4 — Consent Mode V2 Initialization:
Datei: app/layout.tsx (vor GA4-Script)
```typescript
import { CookieBanner } from '@/components/CookieBanner';

export default function RootLayout() {
  return (
    <html>
      <head>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'marketing_storage': 'denied',
            'functionality_storage': 'granted',
            'wait_for_update': 500
          });
        `}} />
      </head>
      <body>
        <CookieBanner />
        {/* Rest of layout */}
      </body>
    </html>
  );
}
```

VALIDATION GATE 11.1: Cookie Banner erscheint beim ersten Besuch, consent_state wird in localStorage gespeichert, GA4 Consent Mode reagiert auf Änderungen, COOKIE_INVENTORY.md ist dokumentiert

───

═══ SELF-OPTIMIZING LOOP — PHASE 13 ABSCHLUSS ═══

SCHRITT 12.1 — Update .ai-architectural-context.md:
- Dokumentiere Analytics-Infrastruktur:
  * Central analytics service mit AnalyticsEvent Union-Type
  * 5 Event-Kategorien: PageView, FormFunnel, Click, Engagement, WebVitals, Error, Conversion, Calendly
  * 3 Provider: GA4 (consent-gated), Vercel (always-on), Custom (/api/events)
  * Consent-Aware: Consent Mode V2, 3 Categories, Cookie Inventory
- Notiere: alle neuen Files (lib/analytics/*, components/TrackedLink.tsx)
- Notiere: alle erweiterten Componenten (Button trackingId, Layout CookieBanner)
- Notiere: GA4 Custom Dimensions, Metrics, Conversions

SCHRITT 12.2 — Update .upgrade-state.md:
- Markiere Phase 13 als completed
- Liste all 11 ULTRATHINK-TASKs als done
- Notiere Pre-Requisites für Phase 14 (Core Logging & Observability)
- Dokumentiere Handoff-Punkt: Analytics-Infrastruktur ist vollständig, prüfe ob alle Events zu Custom /api/events gesendet werden

SCHRITT 12.3 — Final Validation Checklist:
```
Phase 13 Completion Checklist:
□ lib/analytics/types.ts — AnalyticsEvent Union mit ~20 Typen
□ lib/analytics/service.ts — AnalyticsService mit Provider-Routing
□ lib/analytics/providers/ga4.ts — GA4 Provider mit Consent-Gate
□ lib/analytics/providers/vercel.ts — Vercel Analytics Integration
□ lib/analytics/providers/custom.ts — /api/events Custom Endpoint
□ lib/analytics/session.ts — Session-ID-Management
□ lib/analytics/hooks/usePageTracking.ts — Auto PageView + UTM
□ lib/analytics/hooks/useScrollDepth.ts — Intersection Observer Scroll
□ lib/analytics/hooks/useFormTracking.ts — 7-Step Form Funnel
□ lib/analytics/hooks/useTimeOnPage.ts — Page Visibility Time
□ lib/analytics/hooks/useRageClickDetection.ts — 3+ Clicks in 500ms
□ lib/analytics/hooks/useScrollVelocity.ts — Scroll Speed Analysis
□ components/Button.tsx — trackingId + cta Props (EXTENDED)
□ components/TrackedLink.tsx — Internal/External Link Tracking
□ lib/analytics/cta-map.ts — CTA Metadata Mapping
□ lib/analytics/ga4-config.ts — Custom Dimensions & Metrics
□ lib/analytics/conversions.ts — Conversion Goal Marking
□ lib/analytics/web-vitals.ts — @vercel/speed-insights Integration
□ lib/analytics/error-handler.ts — Global Error + 404 + Formspree
□ lib/analytics/experiments.ts — A/B-Test Config & useExperiment
□ lib/analytics/significance.ts — Statistical Significance Calc
□ app/dev/experiments/page.tsx — Dev Dashboard (Dev Only)
□ lib/analytics/consent.ts — 3-Category Consent Logic
□ components/CookieBanner.tsx — Cookie Consent UI
□ public/COOKIE_INVENTORY.md — Full Cookie Documentation
□ app/layout.tsx — GA4 Consent Mode V2 Init + CookieBanner
□ .ai-architectural-context.md — Updated Analytics Architecture
□ .upgrade-state.md — Phase 13 marked complete
□ npm run build passes
□ npm run lint passes
□ npx tsc --noEmit passes
□ NO external Error-Tracking SaaS (Sentry, etc.)
□ NO Headless CMS integration
□ NO external AI-APIs
```

═══ FINALE VALIDIERUNG PHASE 13 ═══

ULTRATHINK-TASK 12: FINAL-AUDIT

Führe Comprehensive Audit durch mit allen 25+ Checkpoints:

SCHRITT 12.1 — TypeScript Type Safety:
□ Alle AnalyticsEvent Varianten sind Union-Typen
□ Alle Event-Handler geben richtige Event-Typen zurück
□ Keine `any` Types in analytics/* Files
□ analyticsService.track() akzeptiert nur AnalyticsEvent Typ
□ Generics für Provider-Interface korrekt

SCHRITT 12.2 — Provider-Architektur:
□ GA4 Provider prüft Consent-Level vor Tracking
□ Vercel Provider arbeitet cookieless
□ Custom Provider batched Events zu /api/events
□ Provider-Fehler werden nicht gesilenced (Console-Log)
□ Retry-Logic mit Exponential Backoff für Custom Endpoint

SCHRITT 12.3 — Event-Coverage:
□ PageView Events haben UTM-Parameter
□ ScrollDepth Events haben engagementScore
□ FormFunnel Events haben alle 7 Steps
□ Click Events haben trackingId + cta
□ WebVitals Events haben rating (good/needs-improvement/poor)
□ Error Events haben severity + errorStack
□ Conversion Events haben completionTime

SCHRITT 12.4 — Hooks Integration:
□ usePageTracking() läuft in RootLayout
□ useScrollDepth() wird auf Content-Pages genutzt
□ useFormTracking() wird auf Form-Komponenten genutzt
□ useTimeOnPage() läuft in RootLayout
□ useRageClickDetection() läuft Global
□ useExperiment() wird in Variant-Komponenten genutzt

SCHRITT 12.5 — GA4 Configuration:
□ Custom Dimensions sind definiert: page_type, viewport, color_scheme, visitor_type, utm_*, form_step
□ Custom Metrics sind definiert: engagement_score, form_completion_time, scroll_depth, web_vital_*, rage_click_count
□ Conversions sind markiert: form_submission, calendly_booking, email_signup, pricing_view
□ Consent Mode V2 ist initialisiert

SCHRITT 12.6 — A/B Testing:
□ Cookie-basiertes Variant Assignment funktioniert
□ /dev/experiments zeigt aktive Experiments
□ Experiment Assignments werden zu GA4 gesendet
□ Statistical Significance Calculator ist implementiert
□ Keine externe A/B-Testing-SaaS

SCHRITT 12.7 — Consent & Privacy:
□ 3 Consent Categories: essential (always), analytics (optional), marketing (optional)
□ Cookie Banner zeigt sich beim ersten Besuch
□ consent_state wird in localStorage gespeichert
□ GA4 Consent Mode V2 reagiert auf Änderungen
□ Cookie Inventory ist dokumentiert
□ Keine Sentry, keine externe Error-Tracking SaaS
□ Keine Newsletter-System Integration

SCHRITT 12.8 — Error Tracking:
□ Global Error Handler fängt uncaught JS errors
□ Unhandled Promise Rejections werden getracked
□ 404 Pages senden Error Events
□ Formspree Fehler werden zu Analytics gesendet
□ All errors sind lokal (kein Sentry/etc.)

SCHRITT 12.9 — Performance:
□ @vercel/speed-insights ist integriert
□ Web Vitals (LCP, FID, CLS, TTFB, INP) werden zu GA4 gesendet
□ Performance-Conversion Correlation ist messbar
□ Keine Performance-Regression durch Analytics-Code

SCHRITT 12.10 — Build & Lint:
□ npm run build erfolgreich
□ npm run lint erfolgreich
□ npx tsc --noEmit erfolgreich
□ Keine Breaking Changes in bestehenden Props
□ Alle neuen Props sind optional (backward-compatible)

Abschluss: Alle Checkpoints bestanden = Phase 13 vollständig implementiert.

Handoff zu Phase 14: Core Logging & Observability
