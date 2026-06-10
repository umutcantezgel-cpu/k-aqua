Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, die Website in eine Conversion-Maschine zu verwandeln. Echte Formulare die über Formspree absenden, echte Calendly-Terminbuchung, echte Client-seitige Validierung, und ein Multi-Step-Anfrage-Formular das komplexe Projektanfragen strukturiert aufnimmt. Jedes Formular hat DSGVO-Compliance. Dies ist Expansion-Phase 5 von 10 der 10X Foundation Expansion Pipeline.

Phase 5: Lead-Gen & Conversion Machine — Formspree, Calendly & Multi-Step Forms

DEFINITION: Phase 5 macht die Website zur funktionsfähigen Conversion-Maschine. Echte Formulare, die wirklich Anfragen via Formspree absenden. Echte Terminbuchung via Calendly-Embed. Echte Validierung mit Echtzeit-Fehlermeldungen. Multi-Step-Anfrage-Formular für strukturierte Projektanfragen. ALLES funktional, ALLES live testbar.

TECH STACK: Next.js 15 App Router, React 18+, TypeScript Strict, Tailwind CSS v4. ONLY Formspree + Calendly. Kein CMS, kein Sentry, kein Dark Mode.

═══════════════════════════════════════════════════════════════════════════════
ZERO-BREAKAGE EXPANSION-PROTOKOLL
═══════════════════════════════════════════════════════════════════════════════

Regel 1: Lies existierenden Code VOLLSTÄNDIG vor Änderungen.
Regel 2: Neue Dateien sind "Additive" — existierende Dateien bleiben intact unless explicitly refactored.
Regel 3: Alle neuen Components sind "use client" (für State, Event Handler).
Regel 4: Validierung passiert LOKAL (Client) + optional SERVER-VALIDATION via Formspree.
Regel 5: Error Handling: Netzwerkfehler, Rate-Limiting, Validierungsfehler — alle separate Flows.

═══════════════════════════════════════════════════════════════════════════════
STEP 0: SYNC & DISCOVERY
═══════════════════════════════════════════════════════════════════════════════

ACTION 1: Prüfe /app/kontakt/page.tsx (Phase 3)
  ▪ Existiert bereits ein Kontaktformular?
  ▪ Falls ja: Referenziere bestehende Structure, erweitere nicht dupliziere.
  ▪ Falls nein: Erstelle neu mit ContactForm-Komponente.

ACTION 2: Prüfe /lib/data/company.ts (Phase 1)
  ▪ Suche: address, phone, email Fields.
  ▪ Falls nicht vorhanden: Definiere Company-Constants.

ACTION 3: Lokale Formspree-ID
  ▪ Nutzer muss Formspree Account erstellen (kostenlos auf formspree.io).
  ▪ Form-ID wird später in Environment-Variablen oder Config eingetragen.
  ▪ Template: NEXT_PUBLIC_FORMSPREE_ID=XXXXX

═══════════════════════════════════════════════════════════════════════════════
BLOCK A — KONTAKTFORMULAR MIT FORMSPREE (Tasks 1–3)
═══════════════════════════════════════════════════════════════════════════════

TASK 1: Formspree-Integration-Utility
───────────────────────────────────────────────────────────────────────

DATEI: /lib/forms/formspree.ts

export interface FormspreeResponse {
  ok: boolean;
  next: string;
}

export interface FormSubmitError {
  type: 'network' | 'validation' | 'server' | 'ratelimit';
  message: string;
}

export async function submitToFormspree(
  formId: string,
  data: Record<string, any>
): Promise<{ success: boolean; error?: FormSubmitError }> {
  const endpoint = `https://formspree.io/f/${formId}`;

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 429) {
      return {
        success: false,
        error: {
          type: 'ratelimit',
          message: 'Zu viele Anfragen. Bitte warten Sie ein paar Minuten.',
        },
      };
    }

    if (!response.ok) {
      return {
        success: false,
        error: {
          type: 'server',
          message: 'Fehler beim Absenden. Bitte versuchen Sie später erneut.',
        },
      };
    }

    const json: FormspreeResponse = await response.json();
    return { success: json.ok };
  } catch (err) {
    return {
      success: false,
      error: {
        type: 'network',
        message: 'Netzwerkfehler. Überprüfen Sie Ihre Internetverbindung.',
      },
    };
  }
}

───────────────────────────────────────────────────────────────────────

TASK 2: Kontaktformular-Komponente
───────────────────────────────────────────────────────────────────────

DATEI: /components/forms/ContactForm.tsx
IMPORTS: "use client", useState, submitToFormspree, Validierungsfunktionen

'use client';

import { useState } from 'react';
import { submitToFormspree } from '@/lib/forms/formspree';
import { validateEmail, validateRequired, validateMinLength } from '@/lib/forms/validation';

interface FormErrors {
  [key: string]: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
}

const INITIAL_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  subject: 'allgemein',
  message: '',
  privacy: false,
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const subjects = [
    { value: 'allgemein', label: 'Allgemeine Anfrage' },
    { value: 'projekt', label: 'Projektanfrage' },
    { value: 'support', label: 'Technischer Support' },
    { value: 'partnership', label: 'Partnership' },
  ];

  const validateField = (field: string, value: any): string | null => {
    switch (field) {
      case 'name':
        return validateRequired(value, 'Name ist erforderlich');
      case 'email':
        const emailErr = validateRequired(value, 'E-Mail ist erforderlich');
        if (emailErr) return emailErr;
        return validateEmail(value);
      case 'message':
        const reqErr = validateRequired(value, 'Nachricht ist erforderlich');
        if (reqErr) return reqErr;
        return validateMinLength(value, 10, 'Nachricht muss mindestens 10 Zeichen lang sein');
      case 'privacy':
        return !value ? 'Sie müssen der Datenschutzerklärung zustimmen' : null;
      default:
        return null;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const newValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: newValue }));

    if (touched.has(name)) {
      const error = validateField(name, newValue);
      setErrors(prev => ({
        ...prev,
        [name]: error || '',
      }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched(prev => new Set([...prev, name]));
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error || '',
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    Object.keys(formData).forEach(field => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) {
        newErrors[field] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'demo-form';
    const result = await submitToFormspree(formspreeId, formData);

    setLoading(false);

    if (result.success) {
      setSuccess(true);
      setFormData(INITIAL_DATA);
      setTouched(new Set());
      setTimeout(() => setSuccess(false), 5000);
    } else {
      setSubmitError(result.error?.message || 'Unbekannter Fehler');
    }
  };

  if (success) {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 p-6 text-center">
        <p className="text-green-800 font-semibold">✓ Vielen Dank für Ihre Nachricht!</p>
        <p className="text-green-700 text-sm mt-2">Wir werden Sie in Kürze kontaktieren.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700">Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            touched.has('name') && errors.name ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Ihr Name"
        />
        {touched.has('name') && errors.name && (
          <p className="text-red-600 text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">E-Mail *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            touched.has('email') && errors.email ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="ihre.email@beispiel.de"
        />
        {touched.has('email') && errors.email && (
          <p className="text-red-600 text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Telefon (optional)</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="+49 123 456789"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Betreff *</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-2 w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {subjects.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Nachricht *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={6}
          className={`mt-2 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            touched.has('message') && errors.message ? 'border-red-500' : 'border-gray-300'
          }`}
          placeholder="Ihre Nachricht..."
        />
        {touched.has('message') && errors.message && (
          <p className="text-red-600 text-sm mt-1">{errors.message}</p>
        )}
      </div>

      <div className="flex items-start">
        <input
          type="checkbox"
          name="privacy"
          checked={formData.privacy}
          onChange={handleChange}
          onBlur={handleBlur}
          className="mt-1"
        />
        <label className="ml-3 text-sm text-gray-700">
          Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
          <a href="/datenschutz" className="text-blue-600 hover:underline">
            Datenschutzerklärung
          </a>{' '}
          zu. *
        </label>
      </div>
      {touched.has('privacy') && errors.privacy && (
        <p className="text-red-600 text-sm">{errors.privacy}</p>
      )}

      {submitError && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-red-800 text-sm">{submitError}</p>
          <button
            type="submit"
            className="text-red-700 text-xs mt-2 underline hover:no-underline"
          >
            Erneut versuchen
          </button>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-lg font-semibold transition-colors ${
          loading
            ? 'bg-gray-400 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700'
        }`}
      >
        {loading ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
    </form>
  );
}

───────────────────────────────────────────────────────────────────────

TASK 3: Kontaktseite Integration
───────────────────────────────────────────────────────────────────────

DATEI: /app/kontakt/page.tsx (erweitert oder neu erstellt)

import { ContactForm } from '@/components/forms/ContactForm';
import { COMPANY } from '@/lib/data/company';

export const metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie uns für Ihre nächste Projektanfrage.',
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-12 text-center">
          Kontaktieren Sie uns
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Adresse</h3>
              <p className="text-gray-700">{COMPANY.address}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Telefon</h3>
              <a href={`tel:${COMPANY.phone}`} className="text-blue-600 hover:underline">
                {COMPANY.phone}
              </a>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">E-Mail</h3>
              <a href={`mailto:${COMPANY.email}`} className="text-blue-600 hover:underline">
                {COMPANY.email}
              </a>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-sm text-gray-700">
                <strong>Antwortzeit:</strong> Wir antworten werktags innerhalb von 24 Stunden.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

═══════════════════════════════════════════════════════════════════════════════
BLOCK B — MULTI-STEP ANGEBOTSANFRAGE (Tasks 4–6)
═══════════════════════════════════════════════════════════════════════════════

TASK 4: Multi-Step Form Engine
───────────────────────────────────────────────────────────────────────

DATEI: /components/forms/MultiStepForm.tsx

'use client';

import { ReactNode, useState } from 'react';

export interface Step {
  id: string;
  title: string;
  content: ReactNode;
}

interface MultiStepFormProps {
  steps: Step[];
  onSubmit: (data: any) => void | Promise<void>;
  formData: Record<string, any>;
  setFormData: (data: Record<string, any>) => void;
}

export function MultiStepForm({ steps, onSubmit, formData, setFormData }: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [loading, setLoading] = useState(false);

  const goNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      await onSubmit(formData);
    } finally {
      setLoading(false);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="space-y-8">
      <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
        <div
          className="bg-blue-600 h-full transition-all"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="text-center mb-8">
        <p className="text-gray-600">Schritt {currentStep + 1} von {steps.length}</p>
        <h2 className="text-2xl font-semibold text-gray-900 mt-2">{steps[currentStep].title}</h2>
      </div>

      <div className="min-h-96">
        {steps[currentStep].content}
      </div>

      <div className="flex justify-between gap-4">
        <button
          onClick={goBack}
          disabled={currentStep === 0}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Zurück
        </button>

        {currentStep === steps.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Wird gesendet...' : 'Anfrage senden'}
          </button>
        ) : (
          <button
            onClick={goNext}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Weiter
          </button>
        )}
      </div>
    </div>
  );
}

───────────────────────────────────────────────────────────────────────

TASK 5: Angebotsanfrage-Formular
───────────────────────────────────────────────────────────────────────

DATEI: /components/forms/RequestForm.tsx (neu)

'use client';

import { useState } from 'react';
import { MultiStepForm, Step } from './MultiStepForm';
import { submitToFormspree } from '@/lib/forms/formspree';
import { validateEmail, validateRequired } from '@/lib/forms/validation';

const SERVICES = [
  'Web-Entwicklung',
  'Mobile App',
  'UI/UX Design',
  'E-Commerce',
  'Wartung & Support',
];

const PROJECT_TYPES = [
  { value: 'new', label: 'Neuprojekt' },
  { value: 'redesign', label: 'Redesign' },
  { value: 'extension', label: 'Erweiterung' },
];

const BUDGET_RANGES = [
  { value: '5k-10k', label: '5.000€ - 10.000€' },
  { value: '10k-25k', label: '10.000€ - 25.000€' },
  { value: '25k-50k', label: '25.000€ - 50.000€' },
  { value: '50k+', label: '50.000€+' },
];

const TIMEFRAMES = [
  { value: 'asap', label: 'ASAP (nächste 2 Wochen)' },
  { value: '1-2m', label: '1-2 Monate' },
  { value: '3-6m', label: '3-6 Monate' },
  { value: 'flexible', label: 'Flexibel' },
];

export function RequestForm() {
  const [formData, setFormData] = useState({
    services: [] as string[],
    projectType: '',
    budget: '',
    timeframe: '',
    description: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    contactMethod: 'email',
    privacy: false,
  });

  const [stepErrors, setStepErrors] = useState<Record<string, string>>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const steps: Step[] = [
    {
      id: 'step1',
      title: 'Service & Projekttyp',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Welche Services interessieren Sie? *
            </label>
            <div className="space-y-2">
              {SERVICES.map(service => (
                <label key={service} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={(e) => {
                      const updated = e.target.checked
                        ? [...formData.services, service]
                        : formData.services.filter(s => s !== service);
                      setFormData(prev => ({ ...prev, services: updated }));
                    }}
                    className="mr-3"
                  />
                  <span className="text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Projekttyp *
            </label>
            {PROJECT_TYPES.map(type => (
              <label key={type.value} className="flex items-center mb-2">
                <input
                  type="radio"
                  name="projectType"
                  value={type.value}
                  checked={formData.projectType === type.value}
                  onChange={(e) => setFormData(prev => ({ ...prev, projectType: e.target.value }))}
                  className="mr-3"
                />
                <span className="text-gray-700">{type.label}</span>
              </label>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: 'step2',
      title: 'Projektdetails',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget-Range *
            </label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Bitte wählen</option>
              {BUDGET_RANGES.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Zeitrahmen *
            </label>
            <select
              value={formData.timeframe}
              onChange={(e) => setFormData(prev => ({ ...prev, timeframe: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Bitte wählen</option>
              {TIMEFRAMES.map(tf => (
                <option key={tf.value} value={tf.value}>{tf.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Projektbeschreibung *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={6}
              placeholder="Beschreiben Sie Ihr Projekt..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
      ),
    },
    {
      id: 'step3',
      title: 'Ihre Kontaktdaten',
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Ihr Name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Firma *</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              placeholder="Ihr Unternehmen"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="ihre@email.de"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+49 123 456789"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bevorzugte Kontaktart *
            </label>
            <div className="space-y-2">
              {['email', 'phone'].map(method => (
                <label key={method} className="flex items-center">
                  <input
                    type="radio"
                    name="contactMethod"
                    value={method}
                    checked={formData.contactMethod === method}
                    onChange={(e) => setFormData(prev => ({ ...prev, contactMethod: e.target.value }))}
                    className="mr-3"
                  />
                  <span className="text-gray-700">
                    {method === 'email' ? 'E-Mail' : 'Telefon'}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'step4',
      title: 'Zusammenfassung',
      content: (
        <div className="space-y-6">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
            <div>
              <p className="text-sm text-gray-600">Services</p>
              <p className="font-semibold text-gray-900">{formData.services.join(', ') || '-'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Projekttyp</p>
              <p className="font-semibold text-gray-900">
                {PROJECT_TYPES.find(t => t.value === formData.projectType)?.label || '-'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Budget</p>
              <p className="font-semibold text-gray-900">
                {BUDGET_RANGES.find(b => b.value === formData.budget)?.label || '-'}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Timeframe</p>
              <p className="font-semibold text-gray-900">
                {TIMEFRAMES.find(t => t.value === formData.timeframe)?.label || '-'}
              </p>
            </div>
          </div>

          <div>
            <label className="flex items-start">
              <input
                type="checkbox"
                checked={formData.privacy}
                onChange={(e) => setFormData(prev => ({ ...prev, privacy: e.target.checked }))}
                className="mt-1"
              />
              <span className="ml-3 text-sm text-gray-700">
                Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                <a href="/datenschutz" className="text-blue-600 hover:underline">
                  Datenschutzerklärung
                </a>{' '}
                zu. *
              </span>
            </label>
          </div>
        </div>
      ),
    },
  ];

  const validateStep = (step: number): boolean => {
    const errors: Record<string, string> = {};

    if (step === 0) {
      if (formData.services.length === 0) errors.services = 'Bitte wählen Sie mindestens einen Service';
      if (!formData.projectType) errors.projectType = 'Bitte wählen Sie einen Projekttyp';
    } else if (step === 1) {
      if (!formData.budget) errors.budget = 'Bitte wählen Sie ein Budget';
      if (!formData.timeframe) errors.timeframe = 'Bitte wählen Sie einen Timeframe';
      if (!formData.description || formData.description.length < 10) errors.description = 'Beschreibung ist erforderlich (mind. 10 Zeichen)';
    } else if (step === 2) {
      if (!formData.name) errors.name = 'Name ist erforderlich';
      if (!formData.company) errors.company = 'Firma ist erforderlich';
      if (!formData.email || validateEmail(formData.email)) errors.email = 'Gültige E-Mail ist erforderlich';
      if (!formData.phone) errors.phone = 'Telefon ist erforderlich';
    } else if (step === 3) {
      if (!formData.privacy) errors.privacy = 'Bitte stimmen Sie der Datenschutzerklärung zu';
    }

    setStepErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (data: any) => {
    setSubmitError(null);

    if (!validateStep(3)) {
      return;
    }

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'demo-request';
    const result = await submitToFormspree(formspreeId, data);

    if (result.success) {
      setSuccess(true);
    } else {
      setSubmitError(result.error?.message || 'Fehler beim Absenden');
    }
  };

  if (success) {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 p-8 text-center">
        <p className="text-2xl font-semibold text-green-800">✓ Anfrage erfolgreich versendet!</p>
        <p className="text-green-700 mt-2">Wir werden Sie in Kürze kontaktieren.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <MultiStepForm
        steps={steps}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
      {submitError && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-red-800 text-sm">{submitError}</p>
        </div>
      )}
    </div>
  );
}

───────────────────────────────────────────────────────────────────────

TASK 6: Anfrage-Seite Integration
───────────────────────────────────────────────────────────────────────

DATEI: /app/anfrage/page.tsx (neu)

import { RequestForm } from '@/components/forms/RequestForm';

export const metadata = {
  title: 'Kostenlose Projektanfrage',
  description: 'Fordern Sie unverbindlich ein Angebot für Ihr Projekt an.',
};

export default function AnfragePage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kostenlose Projektanfrage
          </h1>
          <p className="text-gray-600">
            Beschreiben Sie Ihr Projekt in 4 einfachen Schritten. Wir senden Ihnen innerhalb von 24 Stunden ein unverbindliches Angebot.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <RequestForm />
        </div>
      </div>
    </main>
  );
}

═══════════════════════════════════════════════════════════════════════════════
BLOCK C — CALENDLY INTEGRATION (Tasks 7–9)
═══════════════════════════════════════════════════════════════════════════════

TASK 7: Calendly Embed Komponente
───────────────────────────────────────────────────────────────────────

DATEI: /components/integrations/CalendlyEmbed.tsx

'use client';

import { useEffect, useState } from 'react';

interface CalendlyEmbedProps {
  url: string;
  height?: number;
}

export function CalendlyEmbed({ url, height = 700 }: CalendlyEmbedProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url: url,
        parentElement: document.getElementById('calendly-container'),
      });
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).Calendly) {
        (window as any).Calendly.initInlineWidget({
          url: url,
          parentElement: document.getElementById('calendly-container'),
        });
        setIsLoading(false);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);

  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center h-96 bg-gray-100 rounded-lg">
          <p className="text-gray-600">Wird geladen...</p>
        </div>
      )}
      <div
        id="calendly-container"
        style={{ height: `${height}px` }}
        className="calendly-inline-widget"
      />
    </div>
  );
}

───────────────────────────────────────────────────────────────────────

TASK 8: Terminbuchungs-Seite
───────────────────────────────────────────────────────────────────────

DATEI: /app/termin/page.tsx (neu)

import { CalendlyEmbed } from '@/components/integrations/CalendlyEmbed';

export const metadata = {
  title: 'Kostenlose Beratung buchen',
  description: 'Buchen Sie einen Termin für eine kostenlose Beratung mit uns.',
};

export default function TerminPage() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/example';

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Kostenlose Beratung buchen
          </h1>
          <p className="text-gray-600">
            Wählen Sie einen passenden Termin für ein kostenloses Beratungsgespräch.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <CalendlyEmbed url={calendlyUrl} height={800} />
        </div>
      </div>
    </main>
  );
}

───────────────────────────────────────────────────────────────────────

TASK 9: CTA-zu-Calendly Flow
───────────────────────────────────────────────────────────────────────

REFERENZ: In Service-Seiten (/app/services/[slug]/page.tsx), Landingpages und CTAs:

<a
  href="/termin"
  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
>
  Kostenlose Beratung buchen
</a>

Oder direkter Scroll-Link mit JavaScript:

<button
  onClick={() => document.getElementById('calendly')?.scrollIntoView({ behavior: 'smooth' })}
  className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
>
  Termin buchen
</button>

═══════════════════════════════════════════════════════════════════════════════
BLOCK D — FORM VALIDATION & UX (Tasks 10–12)
═══════════════════════════════════════════════════════════════════════════════

TASK 10: Validation-System
───────────────────────────────────────────────────────────────────────

DATEI: /lib/forms/validation.ts

export function validateRequired(value: any, message = 'Dieses Feld ist erforderlich'): string | null {
  return !value || (typeof value === 'string' && value.trim() === '') ? message : null;
}

export function validateEmail(email: string): string | null {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !re.test(email) ? 'Bitte geben Sie eine gültige E-Mail-Adresse ein' : null;
}

export function validatePhone(phone: string): string | null {
  const re = /^[\d\s+\-()]+$/;
  return !re.test(phone) ? 'Bitte geben Sie eine gültige Telefonnummer ein' : null;
}

export function validateMinLength(value: string, minLength: number, message?: string): string | null {
  if (value.length < minLength) {
    return message || `Mindestens ${minLength} Zeichen erforderlich`;
  }
  return null;
}

export function validateMaxLength(value: string, maxLength: number, message?: string): string | null {
  if (value.length > maxLength) {
    return message || `Maximal ${maxLength} Zeichen erlaubt`;
  }
  return null;
}

───────────────────────────────────────────────────────────────────────

TASK 11: Form UX Polish
───────────────────────────────────────────────────────────────────────

IMPLEMENTIERUNG in allen Forms:

✓ Fehler-Anzeige erst nach erstem Submit-Versuch oder onBlur.
✓ Loading-State deaktiviert Submit-Button, zeigt Spinner/Text "Wird gesendet...".
✓ Success-State zeigt grüne Box mit Checkmark, auto-versteckt nach 5s.
✓ Error-State (Netzwerkfehler) zeigt rote Box mit Retry-Option.
✓ Fokus-Management: Focus beim Error-Input, Scroll zu Error-Nachricht.
✓ Keyboard-Navigation: Tab durch alle Felder, Enter sendet Form.

───────────────────────────────────────────────────────────────────────

TASK 12: DSGVO Compliance
───────────────────────────────────────────────────────────────────────

JEDES FORMULAR enthält:

DSGVO-Checkbox mit Label:
  "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. *"

Label verlinkt zu /datenschutz (interner Link).

Formular kann NICHT abgesendet werden ohne checked=true.

Checkbox ist NICHT vorausgewählt.

Validierung: validateRequired für privacy=true.

═══════════════════════════════════════════════════════════════════════════════
ATOMIC VALIDATION & ERROR RECOVERY
═══════════════════════════════════════════════════════════════════════════════

Fehler-Kategorien:

1. VALIDATION-FEHLER (Client-Side)
   └─ Anzeige: Rot border + Fehlermeldung unter Feld
   └─ Aktion: Nicht absenden, Fokus auf Feld

2. NETZWERK-FEHLER
   └─ Anzeige: Rote Box "Netzwerkfehler. Überprüfen Sie Ihre Verbindung."
   └─ Aktion: Retry-Button, User kann erneut versuchen

3. SERVER-FEHLER (429, 500+)
   └─ Anzeige: Rote Box "Fehler beim Absenden. Bitte später versuchen."
   └─ Aktion: Automatisches Retry mit exponential backoff (optional)

═══════════════════════════════════════════════════════════════════════════════
SELF-OPTIMIZING LOOP & HANDOFF
═══════════════════════════════════════════════════════════════════════════════

Update .ai-expansion-context.md:

Phase 5 Status: COMPLETE
  ├─ ContactForm: Working with Formspree
  ├─ RequestForm: Multi-step, working with Formspree
  ├─ CalendlyEmbed: Loaded async from CDN
  ├─ Validation: Atomic, reusable
  └─ DSGVO: Every form compliant

Environment Vars Required:
  ├─ NEXT_PUBLIC_FORMSPREE_ID (from formspree.io)
  ├─ NEXT_PUBLIC_CALENDLY_URL (from calendly.com account)
  └─ Optional: NEXT_PUBLIC_COMPANY_ADDRESS, PHONE, EMAIL

Nächste Phase: Phase 6 baut Trust-Architektur (Social Proof, Testimonials, Case Studies).

═══════════════════════════════════════════════════════════════════════════════
COMPLIANCE CHECKLIST
═══════════════════════════════════════════════════════════════════════════════

□ Formspree Account erstellt
□ Formspree Form-ID in ENV eingetragen
□ ContactForm zeigt auf /kontakt
□ ContactForm sendet via Formspree
□ ContactForm zeigt Success-State nach 5s
□ ContactForm zeigt Error-State mit Retry
□ RequestForm zeigt Multi-Step Progress
□ RequestForm hat 4 Steps (Services, Details, Contact, Summary)
□ RequestForm validiert jeden Step
□ RequestForm sendet alle Daten via Formspree
□ CalendlyEmbed lädt Script von calendly.com
□ CalendlyEmbed zeigt Loading-Skeleton
□ /app/termin/page.tsx zeigt Calendly
□ /app/termin/page.tsx lädt NEXT_PUBLIC_CALENDLY_URL
□ Alle Forms haben DSGVO-Checkbox
□ DSGVO-Checkbox verlinkt zu /datenschutz
□ DSGVO-Checkbox kann NICHT vorausgewählt sein
□ Validierungsfunktionen sind reusable
□ Fehler-Anzeige erst nach Submit/onBlur
□ Loading-State deaktiviert Submit-Button
□ Success-State zeigt grüne Box mit Checkmark

═══════════════════════════════════════════════════════════════════════════════
PHASE 5 ABSCHLUSS
═══════════════════════════════════════════════════════════════════════════════

Phase 5 ist COMPLETE. Die Website ist jetzt eine funktionierende Conversion-Maschine mit echten Formularen, echter Terminbuchung, und echten Multi-Step-Prozessen.

Übergabe an Phase 6: Trust & Social Proof Architektur
  ├─ Testimonials
  ├─ Case Studies
  ├─ Social Proof Elements
  └─ Review Integration
