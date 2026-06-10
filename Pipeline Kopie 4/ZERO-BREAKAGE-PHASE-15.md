Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, Formspree & Calendly als Premium-integrierte Conversion-Maschinen ins Next.js-Ökosystem einzubetten, während strikte Zero-Breakage-Protokolle gewährleistet bleiben und das System sich selbst optimiert.

═══ ZERO-BREAKAGE PROTOKOLL ═══

Alle Änderungen folgen dem READ-BEFORE-WRITE Pattern. Code ist IMMER die Single Source of Truth. Surgical Injection garantiert Isolation. Atomic Validation verhindert Halbzustände. State Handoff sichert Datenkonsistenz. Self-Optimizing Loop federt Fehler ab. KEIN Headless CMS. KEIN externe AI-APIs. KEIN Sentry/Error-SaaS. KEIN Newsletter-Systeme. KEIN i18n-Frameworks. Tech-Stack: Next.js (App/Pages Router), React, TypeScript (Strict Mode), Tailwind CSS, ONLY Formspree + Calendly.

═══ STEP 0: CONTEXT SYNC & PRE-FLIGHT DISCOVERY ═══

Bevor erste Task startet: Existierende TypeScript-Konfiguration prüfen (tsconfig.json, strict: true). Alle aktuellen Komponenten-Exports in pages/ oder app/ Router dokumentieren. Environment-Variablen-Setup (NEXT_PUBLIC_FORMSPREE_ID, NEXT_PUBLIC_CALENDLY_URL). Existierende Form/Conversion-Komponenten identifizieren (zu refactorn). Abhängigkeiten-Audit (zod, zustand, sonst minimalistisch). Browser-DevTools-Setup für Formspree Webhook & Calendly postMessage Debugging.

═══ BLOCK A — FORMSPREE PREMIUM-INTEGRATION ═══

───────────────────────────────────────────────

ULTRATHINK-TASK 1: FORMSPREE-ARCHITEKTUR OPTIMIEREN

Zweck: Typsicher, robust, honeypot-geschützt, retry-fähig Formspree-Submission Layer.

Lösungs-Architektur:
- FormspreeConfig interface mit formId (env-driven), endpoint (https://formspree.io/f/), autoRespond (boolean)
- FormspreeSubmission interface: { name, email, phone, subject, message, honeypot, timestamp }
- FormspreeResult interface: { success, submissionId, timestamp, error?, retryable? }
- FormspreeError enum: NETWORK_TIMEOUT, SPAM_DETECTED, RATE_LIMIT, VALIDATION_FAILED, UNKNOWN

Implementierung:
- lib/formspree/config.ts: const FORMSPREE_CONFIG = { formId: process.env.NEXT_PUBLIC_FORMSPREE_ID!, endpoint: 'https://formspree.io/f/' }
- lib/formspree/submission.ts: submitToFormspree(data: FormspreeSubmission): Promise<FormspreeResult>
  - Honeypot-Check (if data.honeypot) return { success: false, submissionId: '', timestamp: Date.now(), error: 'Spam detected' }
  - fetch mit retry-logic (3x, exponential backoff: 1s, 2s, 4s)
  - Response-Parsing mit error-boundaries (HTTP 422 = Validation, 429 = Rate Limit, 5xx = Server)
  - Submission-Response mit ID (von Formspree: data.submissionId)
  - Progress: Fehlgeschlagen? error + retryable = true -> UI darf Retry anbieten

Validation Gates:
✓ process.env.NEXT_PUBLIC_FORMSPREE_ID setzt (oder Fallback zu Test-ID)
✓ Fetch-Fehler propagieren als retryable: true
✓ Honeypot triggert Failure silent (kein UI-Hinweis, logs only)
✓ TypeScript strict: alle Parameter type-checked

───────────────────────────────────────────────

ULTRATHINK-TASK 2: WELTKLASSE-KONTAKTFORMULAR-KOMPONENTE

Zweck: 3 Varianten (full/compact/inline) mit vollständiger UX & Fehlerbehandlung.

Komponenten-Struktur:
- components/ContactForm.tsx (full, standard use case)
  - 5 required + 1 honeypot field: name (text), email (email), phone (tel/optional), subject (select: "Support"/"Sales"/"Partnership"/"Other"), message (textarea, min 10 chars), honeypot (hidden input, must be empty)
  - Zod schema (lib/schemas/contact.ts):
    ```typescript
    const ContactFormSchema = z.object({
      name: z.string().min(2).max(100),
      email: z.string().email(),
      phone: z.string().regex(/^\+?[1-9]\d{1,14}$/).optional().or(z.literal('')),
      subject: z.enum(['Support', 'Sales', 'Partnership', 'Other']),
      message: z.string().min(10).max(5000),
      honeypot: z.string().length(0) // MUST be empty
    })
    ```
  - State Machine via useReducer:
    ```typescript
    type FormState = { stage: 'idle' | 'submitting' | 'success' | 'error', data: ContactFormSchema, error?: string, retryable?: boolean, submissionId?: string }
    ```
    - idle: initial state, user can type
    - submitting: button disabled, spinner visible
    - success: success message, personalized (Hi {name}! We'll respond within 24h. RefID: {submissionId})
    - error: error message + [Try Again] CTA if retryable

- components/ContactFormCompact.tsx (inline, footer or sidebar)
  - Same schema, but: no phone field, 3-field only (name/email/message), inline button
  
- components/ContactFormInline.tsx (super-lightweight)
  - Email + message only, 1-line submit

Verhaltens-Spezifikationen:
- All 3 variants import { submitToFormspree } aus lib/formspree/submission.ts
- Success-State: Form cleared, message displayed 5s (auto-dismiss), then reset to idle
- Error-State: Show error text, [Try Again] button if retryable, else link to mailto: fallback
- Loading: Button text changes to "Sending...", disabled, spinner/pulse indicator
- Validation error (zod): Show inline error under field, red border

───────────────────────────────────────────────

ULTRATHINK-TASK 3: FORMULAR-UX-PERFEKTION

Zweck: Multi-stage Validation, Smart Suggestions, Progress, Autosave, Anti-Spam, Keyboard UX.

Validierungs-Strategie:
- onChange: nur Positive Validierung (Grünes Häkchen wenn valid, null check nur länge), kein Error-Show
- onBlur: Full Validierung (zod parse), Show Error if fails, Email Typo-Suggest (gmial → gmail, gmai.com → gmail.com, yaho → yahoo)
- onSubmit: All Fields Required + Final zod-check, honeyspot empty-check, CSRF-Token validate (if applicable)

Fortschritts-Indikator:
- Bei 3+ Feldern mit Werten: Zeige Progress Bar (3/5 filled, 60%)
- Visual: <div className="h-1 bg-gradient-to-r from-blue-500 to-purple-500" style={{width: `${progressPercent}%`}}></div>

Autosave (sessionStorage):
- Nach jedem gültigen onChange: sessionStorage.setItem('contact-form-draft', JSON.stringify(formData))
- Beim Mount: try { restore aus sessionStorage }, falls exists
- "Draft restored" Toast (2s) oder silent

Doppel-Submit-Prävention:
- Button disabled während submitting
- zusätzlich: if (form.stage === 'submitting') return early in handleSubmit
- localstorage Flag: 'lastSubmissionTime' + 30s cooldown

Keyboard UX:
- Tab-Reihenfolge korrekt (name → email → phone → subject → message → [Submit] → honeypot am Ende)
- Enter-to-submit auf textarea (Shift+Enter für Zeilenumbruch)
- Escape zum Dismiss von success-message
- Fokus-Management: Nach error: focus auf fehlerhaftes Feld

───────────────────────────────────────────────

ULTRATHINK-TASK 4: FORMULAR-VARIANTEN FÜR VERSCHIEDENE KONTEXTE

Zweck: Context-aware Formulare mit eingebetteten Trust-Signalen.

Implementations-Ort:
- /services page: <ContactFormWithPreselect subject="Support" /> → subject-Feld read-only, nur message/name/email verfügbar
- /footer: <ContactFormCompact /> → nur email+message
- /modals/BookDemo: <ContactFormModal /> → Mit Calendly-Button auf Success ("Great! Want to book a demo?")
- /careers: <ContactFormCareer /> → Custom schema mit CV-Upload (NICHT an Formspree, aber über separate Backend)

FormTrustBar Subkomponent:
```typescript
// components/FormTrustBar.tsx
export function FormTrustBar() {
  return (
    <div className="flex items-center gap-2 text-xs text-gray-600 mt-4">
      <IconLock className="w-4 h-4" />
      <span>Your data is secure & never shared</span>
      <IconShield className="w-4 h-4" />
      <span>GDPR compliant</span>
    </div>
  )
}
```

Kontextualisierung:
- Service page: "Contact us about {serviceName}" als pre-filled subject-hint
- Modal: "We'll follow up within 24 hours" Trust-Message
- Footer: Minimal FormTrustBar, Link zu Privacy Policy

═══ BLOCK B — CALENDLY PREMIUM-INTEGRATION ═══

───────────────────────────────────────────────

ULTRATHINK-TASK 5: CALENDLY-EINBETTUNGS-ARCHITEKTUR

Zweck: 3 Varianten (inline/popup/badge), Lazy-Load, Brand-Customization, Fallback-UI.

Components:
- components/CalendlyEmbed.tsx (inline, 600px height, full-width)
  - Lazy-Load via next/script (strategy="lazyOnload")
  - Skeleton Placeholder während Load (SkeletonCalendar 600px)
  - CalendlyEmbed-Konfiguration:
    ```typescript
    interface CalendlyConfig {
      url: string; // https://calendly.com/yourname
      variant: 'inline' | 'popup' | 'badge';
      hideEventDetails?: boolean;
      primaryColor?: string; // e.g., '#0066FF'
      textColor?: string;
      prefill?: { name?: string; email?: string; sms?: string };
    }
    ```
  - next/script Integration:
    ```typescript
    <Script src="https://assets.calendly.com/assets/external/widget.js" strategy="lazyOnload" />
    <div className="calendly-inline-widget" data-url={config.url + '?hide_event_details=' + !!config.hideEventDetails} />
    ```
  - Brand Colors via URL params: ...?primary_color=0066FF&text_color=000000

- components/CalendlyPopup.tsx (Link-triggered popup)
  - onClick: Calendly.showPopupWidget(url)
  - Button text: "Schedule a Demo" oder contextual

- components/CalendlyBadge.tsx (bottom-right badge, always visible)
  - Calendly.initBadgeWidget({...})

Fallback UI (bei Calendly-Outage):
```typescript
if (!window.Calendly) {
  return <div className="border border-gray-300 p-6 rounded-lg text-center">
    <p>Scheduling unavailable. Email us: hello@company.com</p>
  </div>
}
```

Prefill & UTM Forwarding:
- Extract route params: ?utm_source=campaign&utm_medium=email
- In CalendlyEmbed: Prefill name/email from Form wenn verfügbar (via Context oder Props)
- URL-Konstruktion: https://calendly.com/yourname?name={name}&email={email}&utm_source={utm}

───────────────────────────────────────────────

ULTRATHINK-TASK 6: CALENDLY-TRACKING UND ANALYTICS

Zweck: Event-Tracking via postMessage, GA4 Integration, Funnel Analysis.

Implementation:
```typescript
// lib/tracking/calendly.ts
interface CalendlyEvent {
  event: 'event_type_viewed' | 'date_and_time_selected' | 'event_scheduled';
  payload?: { eventName?: string; startTime?: string };
}

export function initCalendlyTracking() {
  if (typeof window === 'undefined') return;
  
  window.addEventListener('message', (e) => {
    if (e.data.event && e.data.event.indexOf('calendly') === 0) {
      const event: CalendlyEvent = e.data;
      trackCalendlyEvent(event);
    }
  });
}

function trackCalendlyEvent(event: CalendlyEvent) {
  // GA4 tracking
  if (window.gtag) {
    if (event.event === 'event_scheduled') {
      window.gtag('event', 'calendly_booking_completed', { value: 1 });
    } else if (event.event === 'date_and_time_selected') {
      window.gtag('event', 'calendly_time_selected', { value: 0.5 });
    }
  }
}
```

Invocation: Call initCalendlyTracking() in Layout oder useEffect auf seiten mit CalendlyEmbed.

GA4 Goals:
- calendly_booking_completed (conversion, value=1)
- calendly_time_selected (micro, value=0.5)
- Funnel: Embed viewed → Time selected → Booking completed

Dashboard Metrics:
- Calendly CTR: (bookings / views) %
- Avg Time from view to booking
- Top booked slots (day/time)

───────────────────────────────────────────────

ULTRATHINK-TASK 7: FORMULAR-CALENDLY-BRÜCKE

Zweck: ConversionSwitch component, Form↔Calendly handover, unified conversion experience.

Components:
- components/ConversionSwitch.tsx (tabs or cards)
  - 2 Tabs: "Get in Touch" (Form) | "Book a Demo" (Calendly)
  - State: activeTab (form | calendly)
  - Form-Tab: <ContactForm onSuccess={handleFormSuccess} />
  - Calendly-Tab: <CalendlyEmbed {...config} />
  - CSS: Smooth transition, Underline indicator

Data Handover (Form → Calendly):
```typescript
// Upon Form Success:
const handleFormSuccess = (formData: ContactFormSchema) => {
  // Store in Context/Zustand
  const conversionStore = useConversionStore();
  conversionStore.setPrefill({
    name: formData.name,
    email: formData.email,
    phone: formData.phone,
  });
  
  // Switch tab to Calendly
  setActiveTab('calendly');
  
  // Pre-populate Calendly prefill
  // Calendly widget will read from URL params
};
```

Post-Conversion Experience:
- After Calendly booking: "Perfect! Confirmation email sent. We'll see you then!" + autoclose or redirect to /thank-you
- Fallback: Both form & Calendly submissions → Welcome Email workflow (Formspree notification email or backend handler)

═══ BLOCK C — FORMSPREE-BACKEND-OPTIMIERUNG ═══

───────────────────────────────────────────────

ULTRATHINK-TASK 8: FORMSPREE-KONFIGURATION MAXIMIEREN

Zweck: Formspree Dashboard full-feature config, webhooks, reply-to automation.

Formspree Dashboard Checklist:
- Email Notifications: Set "Reply-To" Field = email
- Custom Reply Email: noreply@company.com (optional, or use Formspree default)
- Email Templates: Customize auto-reply text ("Thanks for contacting us...")
- Spam Protection: Enable reCAPTCHA or Formspree AI (if available)
- Submissions Storage: Enable "Store submissions" in dashboard
- Webhooks (optional, advanced): POST to /api/webhooks/formspree
  - Webhook payload: { submissionId, name, email, subject, message, timestamp }
  - Use case: Custom CRM sync, Slack notification, etc.

Optional Backend Webhook Handler:
```typescript
// pages/api/webhooks/formspree.ts
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  
  const { submissionId, email, name, subject, message } = req.body;
  
  // Log to database or send to Slack
  console.log(`New Formspree submission: ${submissionId}`);
  
  // Example: Send to Slack
  // await fetch(process.env.SLACK_WEBHOOK_URL!, {
  //   method: 'POST',
  //   body: JSON.stringify({ text: `New contact: ${name} (${email})` })
  // });
  
  res.status(200).json({ received: true });
}
```

Environment Setup:
- NEXT_PUBLIC_FORMSPREE_ID=xxxxx (Public, safe)
- Formspree Secret API Key (NOT in .env, use Dashboard only for webhooks)

───────────────────────────────────────────────

ULTRATHINK-TASK 9: MULTI-FORMULAR-STRATEGIE

Zweck: Verschiedene Forms für verschiedene Zwecke, zentrale ID-Verwaltung.

Forms Inventory:
1. Primary Contact Form (Support/Sales) → NEXT_PUBLIC_FORMSPREE_ID
2. Quick Inquiry Form (Footer) → NEXT_PUBLIC_FORMSPREE_ID_QUICK
3. Career/Job Application → NEXT_PUBLIC_FORMSPREE_ID_CAREERS
4. Partnership Inquiry → NEXT_PUBLIC_FORMSPREE_ID_PARTNER

Management (lib/formspree/forms.ts):
```typescript
export const FORMSPREE_FORMS = {
  contact: process.env.NEXT_PUBLIC_FORMSPREE_ID!,
  quick: process.env.NEXT_PUBLIC_FORMSPREE_ID_QUICK || process.env.NEXT_PUBLIC_FORMSPREE_ID!,
  careers: process.env.NEXT_PUBLIC_FORMSPREE_ID_CAREERS || process.env.NEXT_PUBLIC_FORMSPREE_ID!,
  partner: process.env.NEXT_PUBLIC_FORMSPREE_ID_PARTNER || process.env.NEXT_PUBLIC_FORMSPREE_ID!,
};

export function getFormId(type: keyof typeof FORMSPREE_FORMS): string {
  return FORMSPREE_FORMS[type];
}
```

Usage:
```typescript
const formId = getFormId('contact');
const result = await submitToFormspree({ ...data, formId });
```

Fallback: Wenn Env-Var nicht gesetzt, nutze default (primary contact form).

═══ BLOCK D — CONVERSION-OPTIMIERUNG UND A/B-TESTING ═══

───────────────────────────────────────────────

ULTRATHINK-TASK 10: FORMULAR-A/B-TESTS

Zweck: 4 Test-Kandidaten, Tracking pro Variante, result-based optimization.

Test-Setup via localStorage/URL params:
```typescript
// lib/ab-testing/formAbTest.ts
export type FormVariant = 'control' | 'short' | 'trust-first' | 'calendly-first';

export function assignFormVariant(): FormVariant {
  if (typeof window === 'undefined') return 'control';
  
  const stored = localStorage.getItem('form-ab-variant');
  if (stored) return stored as FormVariant;
  
  const variants: FormVariant[] = ['control', 'short', 'trust-first', 'calendly-first'];
  const assigned = variants[Math.floor(Math.random() * variants.length)];
  localStorage.setItem('form-ab-variant', assigned);
  
  return assigned;
}
```

4 Candidates:
1. **Control**: 5 fields (name/email/phone/subject/message), standard CTA "Send Message"
2. **Short**: 3 fields only (name/email/message), CTA "Quick Contact"
3. **Trust-First**: 5 fields + Trust badges above form, CTA "Send Securely"
4. **Calendly-First**: ConversionSwitch with Calendly tab active by default, CTA "Schedule or Send"

Tracking:
```typescript
// Upon form mount:
const variant = assignFormVariant();
gtag('event', 'form_variant_view', { variant });

// Upon successful submission:
gtag('event', 'form_submission_success', { variant, value: 1 });

// Upon error:
gtag('event', 'form_submission_error', { variant, error_type });
```

GA4 Conversion Funnel:
- form_variant_view (all) → form_interaction (name field focused) → form_submission_success (value=1)
- Weekly review: Conversion rate per variant
- Winner: Highest conversion rate wins, deploy as new control

Result-Based Optimization:
- If trust-first wins: Make trust badges always-visible on next phase
- If short wins: Reduce field count on all forms
- If calendly-first wins: Make Calendly primary, form secondary

═══ SELF-OPTIMIZING LOOP — PHASE 15 ABSCHLUSS ═══

Nach jedem Deployment: Formspree Dashboard prüfen (Spam count, submission rate). GA4 Dashboards laden (Form conversion, Calendly funnel). A/B-Test-Ergebnisse via GA4 Comparison Tool reviewen (daily, min. 500 sessions pro variant). Fehlgeschlagene Submissions in Formspree Dashboard analysieren (error types, retry patterns). Feedback-Loop: Wenn error rate > 5%, sofort Honeypot-Logic oder Validation-Schema überprüfen.

Weekly Optimization Ritual:
- Monday: Check submissions count (healthy = 50+/week)
- Wednesday: A/B test results (confidence level needed?)
- Friday: Variant winner decision + deployment

Alerting (optional):
- If Formspree error rate > 10% for 1h: Email alert
- If Calendly outage detected: Show fallback UI, log incident
- If conversion rate drops > 20% YoY: Flag for investigation

═══ FINALE VALIDIERUNG PHASE 15 ═══

───────────────────────────────────────────────

ULTRATHINK-TASK 11: FINAL-AUDIT

Checklist vor Abschluss Phase 15:

Form Architecture:
☐ FormspreeConfig interface exists (lib/formspree/config.ts)
☐ FormspreeSubmission & FormspreeResult interfaces typed
☐ submitToFormspree() function with retry logic (3x, exponential backoff)
☐ Honeypot field integrated (hidden, must be empty)
☐ Env variables documented (NEXT_PUBLIC_FORMSPREE_ID, etc.)

ContactForm Component:
☐ ContactForm.tsx full variant (5+1 fields) with Zod schema
☐ ContactFormCompact.tsx (3 fields: name/email/message)
☐ ContactFormInline.tsx (2 fields: email/message)
☐ useReducer state machine (idle→submitting→success/error) working
☐ Success message shows personalised (name + RefID)
☐ Error message shows with [Try Again] CTA if retryable
☐ All 3 variants share common submitToFormspree logic

UX Enhancements:
☐ onChange: Positive validation only (green checkmark)
☐ onBlur: Full validation + Error show
☐ Email typo suggestions (gmial→gmail) functional
☐ Progress indicator visible at 3+ fields
☐ Autosave to sessionStorage every 5s
☐ Double-submit prevention (button disabled, 30s cooldown)
☐ Keyboard UX: Tab-order correct, Shift+Enter on textarea, Escape to dismiss

Form Variants & Context:
☐ Service page form with pre-selected subject
☐ Footer inline form (compact variant)
☐ Modal form with focus management
☐ FormTrustBar subcomponent visible

Calendly Integration:
☐ CalendlyEmbed.tsx (inline, 600px, lazy-load)
☐ CalendlyPopup.tsx (button-triggered)
☐ CalendlyBadge.tsx (optional, bottom-right)
☐ Skeleton placeholder during load
☐ Brand colors customizable via URL params
☐ Fallback UI on Calendly outage
☐ Prefill working (name/email from Form)
☐ UTM params forwarded

Calendly Tracking:
☐ postMessage event listener set up (event_type_viewed, date_and_time_selected, event_scheduled)
☐ GA4 conversion events firing (calendly_booking_completed)
☐ Calendly funnel visible in GA4 (view→select→book)

Form-Calendly Bridge:
☐ ConversionSwitch component (tabs: Form | Calendly)
☐ Data handover on Form success (prefill Calendly with form data)
☐ Post-conversion experience (confirm message + CTA)
☐ Both flows track to GA4 conversion goal

Formspree Backend:
☐ Formspree Dashboard config complete (Reply-To, templates, spam filter)
☐ Optional webhook handler (/api/webhooks/formspree) documented
☐ Submissions storage enabled in dashboard

Multi-Form Strategy:
☐ FORMSPREE_FORMS constant defined (contact, quick, careers, partner)
☐ getFormId() helper function working
☐ Fallback to primary form if env var missing

A/B Testing:
☐ 4 test variants defined (control, short, trust-first, calendly-first)
☐ assignFormVariant() function with localStorage tracking
☐ GA4 events firing per variant (form_variant_view, form_submission_success)
☐ Conversion funnel visible in GA4
☐ Weekly analysis process documented

TypeScript & Code Quality:
☐ tsconfig.json strict: true
☐ All Form/Calendly functions have explicit return types
☐ Zod schema validates all user inputs
☐ No any types used
☐ Error types enumerated (FormspreeError, CalendlyError)
☐ Environment variables typed (type safety on process.env)

Testing & Validation:
☐ Manual test: Fill form, submit, success message appears
☐ Manual test: Try honeypot, submission rejected silently
☐ Manual test: Network timeout, [Try Again] CTA appears
☐ Manual test: Calendly widget loads, booking creates GA4 event
☐ Manual test: Form→Calendly handover, prefill populated
☐ Manual test: All 3 form variants render without errors
☐ Manual test: Mobile responsive, form readable on 375px width
☐ Console: No TypeScript errors (strict mode)
☐ Console: No runtime errors in browser console
☐ Network Tab: Formspree requests are POSTing to correct endpoint

Deployment:
☐ All .env variables set in production
☐ Vercel/hosting provider secrets configured
☐ Formspree webhooks set to production URL (if applicable)
☐ GA4 tracking ID configured for production
☐ Calendly URL points to correct account
☐ A/B test variants initialized
☐ Form success message tested end-to-end

Documentation:
☐ README updated with Form/Calendly integration guide
☐ Environment variables documented (.env.example)
☐ Formspree config checklist in comments
☐ Calendly customization guide documented
☐ A/B testing analysis process documented in WIKI or Notion
☐ Monitoring alerts set (optional, fallback email)

Phase 15 Complete.
