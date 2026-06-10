import type { CompanyInfo } from '@/lib/types';

export const companyInfo: CompanyInfo = {
  name: 'K-Aqua',
  legalName: 'K-Aqua GmbH',
  tagline: 'Engineering Water. Shaping Tomorrow.',
  address: {
    street: 'Industriestraße 42',
    zip: '70565',
    city: 'Stuttgart',
    country: 'Deutschland',
  },
  phone: '+49 711 123456-0',
  email: 'info@k-aqua.de',
  website: 'https://www.k-aqua.de',
  foundedYear: 1990,
  employeeCount: '200+',
  certifications: [
    'ISO 9001:2015',
    'ISO 14001:2015',
    'DVGW-Prüfzeichen',
    'KTW-Zulassung',
    'SKZ-Qualitätszeichen',
    'NSF/ANSI 61',
  ],
  socialMedia: {
    linkedin: 'https://linkedin.com/company/k-aqua',
    twitter: 'https://twitter.com/kaqua_de',
    instagram: 'https://instagram.com/kaqua_official',
  },
  openingHours: {
    'Mo-Fr': '08:00 – 18:00',
    'Sa': 'Nach Vereinbarung',
    'So': 'Geschlossen',
  },
  legal: {
    register: 'Amtsgericht Stuttgart',
    registerNumber: 'HRB 740921',
    vatId: 'DE 287 654 321',
    ceo: 'Dr. Thomas Weber',
  },
};
