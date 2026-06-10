// ═══════════════════════════════════════════════════════════════
// K-Aqua Data Engine — Shared Type Definitions
// Single Source of Truth for all data interfaces
// ═══════════════════════════════════════════════════════════════

/** Service offering (e.g., Planung & Beratung, Installation) */
export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[];
  benefits: string[];
  process: ProcessStep[];
  relatedServices: string[];
  featured: boolean;
  order: number;
  metadata: PageMetadata;
}

export interface ProcessStep {
  title: string;
  description: string;
  icon?: string;
}

/** Team member profile */
export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  shortBio: string;
  image: string;
  initials: string;
  skills: string[];
  social?: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  order: number;
}

/** Blog article */
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  category: string;
  tags: string[];
  readingTime: number;
  featured: boolean;
  metadata: PageMetadata;
}

/** Client testimonial / review */
export interface Testimonial {
  id: string;
  clientName: string;
  clientRole: string;
  company: string;
  companyLogo?: string;
  quote: string;
  shortQuote: string;
  rating: number;
  serviceSlug?: string;
  featured: boolean;
  date: string;
}

/** Project reference / case study */
export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  location: string;
  industry: string;
  category: string;
  challenge: string;
  solution: string;
  result: string;
  kpis: CaseStudyKPI[];
  technologies: string[];
  testimonialId?: string;
  duration: string;
  year: number;
  icon: string;
  featured: boolean;
  metadata: PageMetadata;
}

export interface CaseStudyKPI {
  label: string;
  value: string;
  improvement?: string;
}

/** FAQ entry */
export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  serviceSlug?: string;
  order: number;
}

/** Company profile / legal info */
export interface CompanyInfo {
  name: string;
  legalName: string;
  tagline: string;
  address: {
    street: string;
    zip: string;
    city: string;
    country: string;
  };
  phone: string;
  email: string;
  website: string;
  foundedYear: number;
  employeeCount: string;
  certifications: string[];
  socialMedia: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
  openingHours: Record<string, string>;
  legal: {
    register: string;
    registerNumber: string;
    vatId: string;
    ceo: string;
  };
}

/** Navigation link item */
export interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
  children?: NavigationItem[];
}

/** Reusable resource / download item */
export interface Resource {
  id: string;
  title: string;
  description: string;
  icon: string;
  format: string;
  size: string;
  category: string;
  href?: string;
}

/** Job listing */
export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

/** Partner entry */
export interface Partner {
  id: string;
  name: string;
  category: string;
  description: string;
  icon?: string;
}

/** Shared metadata for SEO */
export interface PageMetadata {
  title: string;
  description: string;
  keywords: string[];
}
