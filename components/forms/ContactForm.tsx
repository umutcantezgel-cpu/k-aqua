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
        <label className="block text-sm font-medium text-[#1E3A5C]">Name *</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-2 w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4] ${
            touched.has('name') && errors.name ? 'border-[#DE350B]' : 'border-[#D4E5F7]'
          }`}
          placeholder="Ihr Name"
        />
        {touched.has('name') && errors.name && (
          <p className="text-[#DE350B] text-sm mt-1">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1E3A5C]">E-Mail *</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`mt-2 w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4] ${
            touched.has('email') && errors.email ? 'border-[#DE350B]' : 'border-[#D4E5F7]'
          }`}
          placeholder="ihre.email@beispiel.de"
        />
        {touched.has('email') && errors.email && (
          <p className="text-[#DE350B] text-sm mt-1">{errors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1E3A5C]">Telefon (optional)</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="mt-2 w-full px-4 py-2 bg-white border border-[#D4E5F7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4]"
          placeholder="+49 123 456789"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1E3A5C]">Betreff *</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="mt-2 w-full px-4 py-2 bg-white border border-[#D4E5F7] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4]"
        >
          {subjects.map(s => (
            <option key={s.value} value={s.value}>{s.label}</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#1E3A5C]">Nachricht *</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          rows={6}
          className={`mt-2 w-full px-4 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1A6FD4] ${
            touched.has('message') && errors.message ? 'border-[#DE350B]' : 'border-[#D4E5F7]'
          }`}
          placeholder="Ihre Nachricht..."
        />
        {touched.has('message') && errors.message && (
          <p className="text-[#DE350B] text-sm mt-1">{errors.message}</p>
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
        <label className="ml-3 text-sm text-[#1E3A5C]">
          Ich stimme der Verarbeitung meiner Daten gemäß der{' '}
          <a href="/datenschutz" className="text-[#1A6FD4] hover:underline">
            Datenschutzerklärung
          </a>{' '}
          zu. *
        </label>
      </div>
      {touched.has('privacy') && errors.privacy && (
        <p className="text-red-600 text-sm mt-1">{errors.privacy}</p>
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
            ? 'bg-[#8BAABF] cursor-not-allowed'
            : 'bg-[#1A6FD4] text-white hover:bg-[#0D4999]'
        }`}
      >
        {loading ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
    </form>
  );
}
