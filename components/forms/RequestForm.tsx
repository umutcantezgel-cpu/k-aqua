'use client';

import { useState } from 'react';
import { MultiStepForm, Step } from './MultiStepForm';
import { submitToFormspree } from '@/lib/forms/formspree';
import { validateEmail, validateRequired } from '@/lib/forms/validation';

const SERVICES = [
  'Planung & Beratung',
  'Installation',
  'Wartung & Support',
  'Wasseraufbereitung',
  'Regenwassernutzung',
];

const PROJECT_TYPES = [
  { value: 'new', label: 'Neuprojekt / Neubau' },
  { value: 'modernization', label: 'Modernisierung / Sanierung' },
  { value: 'maintenance', label: 'Wartungsvertrag' },
];

const BUDGET_RANGES = [
  { value: '5k-10k', label: '5.000€ - 10.000€' },
  { value: '10k-25k', label: '10.000€ - 25.000€' },
  { value: '25k-50k', label: '25.000€ - 50.000€' },
  { value: '50k+', label: '50.000€+' },
];

const TIMEFRAMES = [
  { value: 'asap', label: 'ASAP (nächste 4 Wochen)' },
  { value: '1-3m', label: '1-3 Monate' },
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
            <label className="block text-sm font-medium text-[#1E3A5C] mb-3">
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
                    className="mr-3 text-[#1A6FD4] focus:ring-[#1A6FD4] rounded border-[#D4E5F7]"
                  />
                  <span className="text-[#1E3A5C]">{service}</span>
                </label>
              ))}
            </div>
            {stepErrors.services && <p className="text-red-600 text-sm mt-2">{stepErrors.services}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1E3A5C] mb-3">
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
                  className="mr-3 text-[#1A6FD4] focus:ring-[#1A6FD4] border-[#D4E5F7]"
                />
                <span className="text-gray-700">{type.label}</span>
              </label>
            ))}
            {stepErrors.projectType && <p className="text-red-600 text-sm mt-2">{stepErrors.projectType}</p>}
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
            <label className="block text-sm font-medium text-[#1E3A5C] mb-2">
              Budget-Range *
            </label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4] bg-white ${stepErrors.budget ? 'border-[#DE350B]' : 'border-[#D4E5F7]'}`}
            >
              <option value="">Bitte wählen</option>
              {BUDGET_RANGES.map(range => (
                <option key={range.value} value={range.value}>{range.label}</option>
              ))}
            </select>
            {stepErrors.budget && <p className="text-red-600 text-sm mt-1">{stepErrors.budget}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1E3A5C] mb-2">
              Zeitrahmen *
            </label>
            <select
              value={formData.timeframe}
              onChange={(e) => setFormData(prev => ({ ...prev, timeframe: e.target.value }))}
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4] bg-white ${stepErrors.timeframe ? 'border-[#DE350B]' : 'border-[#D4E5F7]'}`}
            >
              <option value="">Bitte wählen</option>
              {TIMEFRAMES.map(tf => (
                <option key={tf.value} value={tf.value}>{tf.label}</option>
              ))}
            </select>
            {stepErrors.timeframe && <p className="text-red-600 text-sm mt-1">{stepErrors.timeframe}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1E3A5C] mb-2">
              Projektbeschreibung *
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              rows={6}
              placeholder="Beschreiben Sie Ihr Bauvorhaben oder Anlagenprojekt in Stichpunkten..."
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4] bg-white ${stepErrors.description ? 'border-[#DE350B]' : 'border-[#D4E5F7]'}`}
            />
            {stepErrors.description && <p className="text-red-600 text-sm mt-1">{stepErrors.description}</p>}
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
            <label className="block text-sm font-medium text-[#1E3A5C] mb-2">Name *</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Ihr Name"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4] bg-white ${stepErrors.name ? 'border-[#DE350B]' : 'border-[#D4E5F7]'}`}
            />
            {stepErrors.name && <p className="text-red-600 text-sm mt-1">{stepErrors.name}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1E3A5C] mb-2">Firma *</label>
            <input
              type="text"
              value={formData.company}
              onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
              placeholder="Ihr Unternehmen / Einrichtung"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4] bg-white ${stepErrors.company ? 'border-[#DE350B]' : 'border-[#D4E5F7]'}`}
            />
            {stepErrors.company && <p className="text-red-600 text-sm mt-1">{stepErrors.company}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1E3A5C] mb-2">E-Mail *</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              placeholder="ihre@email.de"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4] bg-white ${stepErrors.email ? 'border-[#DE350B]' : 'border-[#D4E5F7]'}`}
            />
            {stepErrors.email && <p className="text-red-600 text-sm mt-1">{stepErrors.email}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1E3A5C] mb-2">Telefon *</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
              placeholder="+49 123 456789"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4] bg-white ${stepErrors.phone ? 'border-[#DE350B]' : 'border-[#D4E5F7]'}`}
            />
            {stepErrors.phone && <p className="text-red-600 text-sm mt-1">{stepErrors.phone}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1E3A5C] mb-2">
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
                    className="mr-3 text-[#1A6FD4] focus:ring-[#1A6FD4] border-[#D4E5F7]"
                  />
                  <span className="text-[#1E3A5C]">
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
          <div className="bg-[#EEF5FF] border border-[#D4E5F7] rounded-lg p-6 space-y-4">
            <div>
              <p className="text-sm text-[#4A7299]">Services</p>
              <p className="font-semibold text-[#0C1929]">{formData.services.join(', ') || '-'}</p>
            </div>
            <div>
              <p className="text-sm text-[#4A7299]">Projekttyp</p>
              <p className="font-semibold text-[#0C1929]">
                {PROJECT_TYPES.find(t => t.value === formData.projectType)?.label || '-'}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#4A7299]">Budget</p>
              <p className="font-semibold text-[#0C1929]">
                {BUDGET_RANGES.find(b => b.value === formData.budget)?.label || '-'}
              </p>
            </div>
            <div>
              <p className="text-sm text-[#4A7299]">Timeframe</p>
              <p className="font-semibold text-[#0C1929]">
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
                className="mt-1 text-[#1A6FD4] focus:ring-[#1A6FD4] rounded border-[#D4E5F7]"
              />
              <span className="ml-3 text-sm text-[#1E3A5C]">
                Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
                <a href="/datenschutz" className="text-[#1A6FD4] hover:underline">
                  Datenschutzerklärung
                </a>{' '}
                zu. *
              </span>
            </label>
            {stepErrors.privacy && <p className="text-red-600 text-sm mt-1">{stepErrors.privacy}</p>}
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

    // Final Validation on Submit
    if (!validateStep(3)) {
      return;
    }

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'demo-request';
    const result = await submitToFormspree(formspreeId, { 
      _subject: `Projektanfrage: ${data.company} - ${data.projectType}`,
      ...data 
    });

    if (result.success) {
      setSuccess(true);
    } else {
      setSubmitError(result.error?.message || 'Fehler beim Absenden');
    }
  };

  if (success) {
    return (
      <div className="rounded-xl bg-green-50 border border-green-200 p-8 text-center shadow-sm">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✓</div>
        <p className="text-2xl font-bold text-green-800 mb-2">Anfrage erfolgreich versendet!</p>
        <p className="text-green-700">Vielen Dank für Ihr Vertrauen. Wir prüfen Ihre Anfrage und werden uns innerhalb der nächsten 24 Stunden bei Ihnen melden.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Intercept the internal next step in MultiStepForm to inject our local validateStep? 
          Wait, the prompt MultiStepForm does not take an onNext validation prop.
          So user can click Next regardless of validation, BUT I should probably validate it.
          Let's stick strictly to the User's provided RequestForm.tsx code which only validates on Submit.
          Wait, the user's code just says we validate on submit. Let's add a wrapper or just use the user code.
          Wait, I can wrap the setFormData or onNext if supported. 
          Actually, I will just stick to the prompt's provided validation code. */}
      <MultiStepForm
        steps={steps}
        formData={formData}
        setFormData={setFormData}
        onSubmit={handleSubmit}
      />
      {submitError && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4">
          <p className="text-red-800 text-sm font-medium">{submitError}</p>
        </div>
      )}
    </div>
  );
}
