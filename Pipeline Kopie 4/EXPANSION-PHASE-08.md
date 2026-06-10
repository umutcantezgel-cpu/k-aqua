Bereinige alle Vorherigen Tasks um diese durch ausführlich detaillierte Ultrathink Langzeittasks zu Entwickeln welche die übergeordnete Aufgabe haben, jede einzelne der 30+ Routen zum SEO-Magneten zu machen. Echte Next.js generateMetadata Funktionen, echte JSON-LD Structured Data für Organization, BreadcrumbList, Service, Article, FAQ und LocalBusiness, eine dynamische sitemap.ts und robots.ts — alles programmatisch aus Phase-2 Daten generiert. Dies ist Expansion-Phase 8 von 10 der 10X Foundation Expansion Pipeline.

Phase 8 macht jede einzelne der 30+ Routen zum SEO-Magneten. Echte Next.js generateMetadata Funktionen, echte JSON-LD Structured Data (Organization, BreadcrumbList, Service, Article, FAQ, LocalBusiness), eine dynamische sitemap.ts und robots.ts — alles programmatisch generiert aus Phase-2 Daten. Keine statischen Meta-Tags. Keine manuellen Einträge. Alles läuft über Utilities und Server Components.


═══════════════════════════════════════════════════════════════════════════════
═══ ZERO-BREAKAGE EXPANSION-PROTOKOLL ═══
═══════════════════════════════════════════════════════════════════════════════

Dieser Task-Katalog ist eine tiefgreifende Inventory-Kontrolle. KEIN rollback. KEIN revert. Jeder Schritt:
1. Lies bestehenden Code
2. Erweitere oder erstelle Funktionen
3. Update .ai-expansion-context.md (Lesbarkeit)
4. Schreibe alle neuen Dateien in /lib/seo und /components/seo
5. Integriere in bestehende page.tsx-Dateien ohne zu löschen

Checkpoint nach Task 4, Task 8, Task 11, Task 14.


═══════════════════════════════════════════════════════════════════════════════
═══ STEP 0: SYNC & DISCOVERY ═══
═══════════════════════════════════════════════════════════════════════════════

1. Inventar aller /app/**/**/page.tsx Dateien:
   - Homepage: /app/page.tsx (hat bereits metadata?)
   - Statisch: /app/(pages)/kontakt/page.tsx, /app/(pages)/impressum/page.tsx, /app/(pages)/datenschutz/page.tsx, /app/(pages)/agb/page.tsx, /app/(pages)/faq/page.tsx, /app/(pages)/ueber-uns/page.tsx
   - Dynamisch: /app/(services)/leistungen/[slug]/page.tsx, /app/(blog)/blog/[slug]/page.tsx, /app/(portfolio)/referenzen/[slug]/page.tsx
   - Fehlende Meta-Tags? Duplikat-Titles? Leere Descriptions?

2. Phase-2 Daten laden:
   - services.json: Service-Titel, Descriptions, Keywords
   - blog.json: Blog-Titel, Excerpts, Categories
   - case-studies.json: Case-Study-Titel, Summaries

3. Prüfe Routing-Struktur:
   - Trailing Slash Konsistenz
   - URL-Slug Format (deutsche Umlaut-Konvention: ue statt ü)
   - Kanonische URLs für Duplikate


═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK A — METADATA SYSTEM ═══ (Tasks 1-4)
═══════════════════════════════════════════════════════════════════════════════

TASK 1: Metadata-Utility erstellen (/lib/seo/metadata.ts)
───────────────────────────────────────────────────────────

DATEI: /lib/seo/metadata.ts

import { Metadata } from 'next';

interface MetadataParams {
  title: string;
  description: string;
  url: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string[];
  robots?: string;
  twitterHandle?: string;
}

export function createMetadata(params: MetadataParams): Metadata {
  const {
    title,
    description,
    url,
    ogImage = 'https://domain.de/og-default.jpg',
    ogType = 'website',
    keywords = [],
    robots = 'index, follow',
    twitterHandle = '@company',
  } = params;

  const fullTitle = `${title} | Firmenname`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : ['seo', 'service'],
    robots,
    metadataBase: new URL('https://domain.de'),
    openGraph: {
      title: fullTitle,
      description,
      url,
      type: ogType as any,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      siteName: 'Firmenname',
      locale: 'de_DE',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
      creator: twitterHandle,
    },
    alternates: {
      canonical: url,
    },
  };
}


TASK 2: Statische Seiten Metadata
──────────────────────────────────

DATEI: /app/page.tsx (Homepage)

export const metadata = createMetadata({
  title: 'Digitale Lösungen | Webentwicklung & SEO',
  description: 'Professionelle Webentwicklung, SEO & digitale Strategien für Ihr Unternehmen. Next.js, React, TypeScript.',
  url: 'https://domain.de',
  keywords: ['Webentwicklung', 'SEO', 'Digital Marketing', 'Next.js'],
  ogType: 'website',
});

DATEI: /app/(pages)/kontakt/page.tsx

export const metadata = createMetadata({
  title: 'Kontakt | Jetzt anfragen',
  description: 'Kontaktieren Sie unser Team für Ihr Projekt. Schnelle Antwort garantiert. Telefon, Email oder Online-Formular.',
  url: 'https://domain.de/kontakt',
  keywords: ['Kontakt', 'Anfrage', 'Support'],
});

DATEI: /app/(pages)/impressum/page.tsx

export const metadata = createMetadata({
  title: 'Impressum',
  description: 'Rechtliche Informationen und Impressum. Angaben gemäß §5 TMG.',
  url: 'https://domain.de/impressum',
  robots: 'noindex, follow',
});

DATEI: /app/(pages)/datenschutz/page.tsx

export const metadata = createMetadata({
  title: 'Datenschutz',
  description: 'Datenschutzerklärung und Informationen zur Verarbeitung Ihrer Daten.',
  url: 'https://domain.de/datenschutz',
  robots: 'noindex, follow',
});

DATEI: /app/(pages)/agb/page.tsx

export const metadata = createMetadata({
  title: 'Allgemeine Geschäftsbedingungen',
  description: 'AGB für die Zusammenarbeit und Services.',
  url: 'https://domain.de/agb',
  robots: 'noindex, follow',
});

DATEI: /app/(pages)/faq/page.tsx

export const metadata = createMetadata({
  title: 'FAQ | Häufig gestellte Fragen',
  description: 'Antworten auf häufige Fragen zu Leistungen, Prozess und Zusammenarbeit.',
  url: 'https://domain.de/faq',
  keywords: ['FAQ', 'Fragen', 'Antworten'],
});

DATEI: /app/(pages)/ueber-uns/page.tsx

export const metadata = createMetadata({
  title: 'Über uns | Team & Erfahrung',
  description: 'Erfahren Sie mehr über unser Team, unsere Erfahrung und unsere Mission.',
  url: 'https://domain.de/ueber-uns',
  keywords: ['Team', 'Erfahrung', 'Mission', 'Über uns'],
});


TASK 3: Dynamische Seiten Metadata
───────────────────────────────────

DATEI: /app/(services)/leistungen/[slug]/page.tsx (generateMetadata)

import { generateMetadata as generateServiceMetadata } from '@/lib/seo/metadata';
import { getAllServices } from '@/lib/data/services';

export async function generateMetadata({ params }) {
  const services = await getAllServices();
  const service = services.find((s) => s.slug === params.slug);

  if (!service) return { title: 'Service nicht gefunden' };

  return generateServiceMetadata({
    title: service.name,
    description: service.shortDescription,
    url: `https://domain.de/leistungen/${service.slug}`,
    keywords: service.keywords || [service.name, 'Service'],
    ogType: 'article',
  });
}

DATEI: /app/(blog)/blog/[slug]/page.tsx (generateMetadata)

import { generateMetadata as generateBlogMetadata } from '@/lib/seo/metadata';
import { getAllBlogPosts } from '@/lib/data/blog';

export async function generateMetadata({ params }) {
  const posts = await getAllBlogPosts();
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) return { title: 'Artikel nicht gefunden' };

  return generateBlogMetadata({
    title: post.title,
    description: post.excerpt,
    url: `https://domain.de/blog/${post.slug}`,
    keywords: post.tags || [],
    ogType: 'article',
  });
}

DATEI: /app/(portfolio)/referenzen/[slug]/page.tsx (generateMetadata)

import { generateMetadata as generateCaseMetadata } from '@/lib/seo/metadata';
import { getAllCaseStudies } from '@/lib/data/case-studies';

export async function generateMetadata({ params }) {
  const cases = await getAllCaseStudies();
  const caseStudy = cases.find((c) => c.slug === params.slug);

  if (!caseStudy) return { title: 'Case Study nicht gefunden' };

  return generateCaseMetadata({
    title: `${caseStudy.clientName} | Case Study`,
    description: caseStudy.summary,
    url: `https://domain.de/referenzen/${caseStudy.slug}`,
    keywords: caseStudy.tags || ['Case Study'],
    ogType: 'article',
  });
}


TASK 4: Metadata Validierung
─────────────────────────────

VALIDATOR-SCRIPT: /scripts/validate-metadata.ts (Checkpoint-Prüfung)

Führe aus: npm run validate-metadata

Prüfpunkte:
- [ ] Keine Duplikat-Titles in der Website
- [ ] Jede Description ist unique
- [ ] Jede Seite hat canonical URL
- [ ] Alle OpenGraph title/description sind nicht leer
- [ ] Alle URLs sind absolute (https://domain.de)
- [ ] Robots-Meta nur auf Legal-Seiten (noindex)
- [ ] Keywords Array ist nicht leer


CHECKPOINT NACH TASK 4: Alle Static Pages + generateMetadata sind deployed. Keine 404er.


═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK B — JSON-LD STRUCTURED DATA ═══ (Tasks 5-8)
═══════════════════════════════════════════════════════════════════════════════

TASK 5: JSON-LD Utility (/lib/seo/jsonld.ts)
─────────────────────────────────────────────

DATEI: /lib/seo/jsonld.ts

export function createOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Firmenname',
    url: 'https://domain.de',
    logo: 'https://domain.de/logo.png',
    sameAs: [
      'https://linkedin.com/company/...',
      'https://twitter.com/company',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Support',
      email: 'info@domain.de',
      telephone: '+49-...',
    },
  };
}

export function createLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Firmenname',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Straße 1',
      addressLocality: 'Stadt',
      postalCode: '12345',
      addressCountry: 'DE',
    },
    telephone: '+49-...',
    email: 'info@domain.de',
    url: 'https://domain.de',
  };
}

export function createBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function createServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: { '@type': 'Organization', name: 'Firmenname' },
  };
}

export function createArticleSchema(article: {
  headline: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: { '@type': 'Person', name: article.author || 'Autor' },
    url: article.url,
    publisher: { '@type': 'Organization', name: 'Firmenname' },
  };
}

export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

export function createWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Firmenname',
    url: 'https://domain.de',
    searchAction: {
      '@type': 'SearchAction',
      target: 'https://domain.de/search?q={search_term_string}',
      query_input: 'required name=search_term_string',
    },
  };
}


TASK 6: JSON-LD Server Component (/components/seo/JsonLd.tsx)
─────────────────────────────────────────────────────────────

DATEI: /components/seo/JsonLd.tsx

export interface JsonLdProps {
  data: Record<string, any>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}


TASK 7: JSON-LD auf allen Seiten
─────────────────────────────────

DATEI: /app/page.tsx (Homepage)

import { JsonLd } from '@/components/seo/JsonLd';
import { createOrganizationSchema, createLocalBusinessSchema, createWebsiteSchema } from '@/lib/seo/jsonld';

export default function Home() {
  return (
    <>
      <JsonLd data={createOrganizationSchema()} />
      <JsonLd data={createLocalBusinessSchema()} />
      <JsonLd data={createWebsiteSchema()} />
      {/* Rest of homepage */}
    </>
  );
}

DATEI: /app/(services)/leistungen/[slug]/page.tsx

import { JsonLd } from '@/components/seo/JsonLd';
import { createServiceSchema } from '@/lib/seo/jsonld';

export default async function ServicePage({ params }) {
  const service = await getServiceBySlug(params.slug);
  
  return (
    <>
      <JsonLd data={createServiceSchema({
        name: service.name,
        description: service.description,
        url: `https://domain.de/leistungen/${service.slug}`,
      })} />
      {/* Rest of page */}
    </>
  );
}

DATEI: /app/(blog)/blog/[slug]/page.tsx

import { JsonLd } from '@/components/seo/JsonLd';
import { createArticleSchema } from '@/lib/seo/jsonld';

export default async function BlogPage({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  
  return (
    <>
      <JsonLd data={createArticleSchema({
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: post.author,
        url: `https://domain.de/blog/${post.slug}`,
      })} />
      {/* Rest of page */}
    </>
  );
}

DATEI: /app/(pages)/faq/page.tsx

import { JsonLd } from '@/components/seo/JsonLd';
import { createFAQSchema } from '@/lib/seo/jsonld';

export default function FAQPage() {
  const faqs = [
    { question: 'Wie lange dauert ein Projekt?', answer: 'Je nach Umfang 4-12 Wochen.' },
    // ... mehr FAQs
  ];

  return (
    <>
      <JsonLd data={createFAQSchema(faqs)} />
      {/* Rest of page */}
    </>
  );
}


TASK 8: BreadcrumbList JSON-LD
──────────────────────────────

Update /components/navigation/Breadcrumb.tsx:

import { JsonLd } from '@/components/seo/JsonLd';
import { createBreadcrumbSchema } from '@/lib/seo/jsonld';

export function Breadcrumb({ items }) {
  const schema = createBreadcrumbSchema(items);

  return (
    <>
      <JsonLd data={schema} />
      <nav aria-label="Breadcrumb" className="flex gap-2">
        {items.map((item, idx) => (
          <a key={idx} href={item.url}>
            {item.name} {idx < items.length - 1 && <span>/</span>}
          </a>
        ))}
      </nav>
    </>
  );
}


CHECKPOINT NACH TASK 8: Alle JSON-LD Schemas sind deployed. Google Search Console zeigt Rich Results.


═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK C — SITEMAP, ROBOTS & TECHNISCHES SEO ═══ (Tasks 9-11)
═══════════════════════════════════════════════════════════════════════════════

TASK 9: Dynamische Sitemap (/app/sitemap.ts)
──────────────────────────────────────────────

DATEI: /app/sitemap.ts

import { MetadataRoute } from 'next';
import { getAllServices } from '@/lib/data/services';
import { getAllBlogPosts } from '@/lib/data/blog';
import { getAllCaseStudies } from '@/lib/data/case-studies';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: 'https://domain.de', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://domain.de/leistungen', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://domain.de/blog', changeFrequency: 'daily', priority: 0.8 },
    { url: 'https://domain.de/referenzen', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://domain.de/faq', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://domain.de/ueber-uns', changeFrequency: 'yearly', priority: 0.7 },
    { url: 'https://domain.de/kontakt', changeFrequency: 'yearly', priority: 0.6 },
    { url: 'https://domain.de/impressum', changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://domain.de/datenschutz', changeFrequency: 'yearly', priority: 0.3 },
    { url: 'https://domain.de/agb', changeFrequency: 'yearly', priority: 0.3 },
  ];

  const services = await getAllServices();
  const serviceRoutes = services.map((s) => ({
    url: `https://domain.de/leistungen/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const posts = await getAllBlogPosts();
  const blogRoutes = posts.map((p) => ({
    url: `https://domain.de/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  const cases = await getAllCaseStudies();
  const caseRoutes = cases.map((c) => ({
    url: `https://domain.de/referenzen/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...serviceRoutes, ...blogRoutes, ...caseRoutes];
}


TASK 10: Robots.txt (/app/robots.ts)
────────────────────────────────────

DATEI: /app/robots.ts

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/', '/*.json$'],
    },
    sitemap: 'https://domain.de/sitemap.xml',
  };
}


TASK 11: Canonical URLs & Technisches SEO
──────────────────────────────────────────

Standard in createMetadata():
- alternates.canonical wird gesetzt
- Trailing Slash Konsistenz: Alle URLs enden OHNE /
- URL-Slugs: Deutsche Umlaute als: ue (ü), ae (ä), oe (ö)
- Keine /index Pages
- HTTPS überall


CHECKPOINT NACH TASK 11: Sitemap.xml und robots.txt sind live. Alle URLs sind canonical.


═══════════════════════════════════════════════════════════════════════════════
═══ BLOCK D — VALIDATION & AUDIT ═══ (Tasks 12-14)
═══════════════════════════════════════════════════════════════════════════════

TASK 12: SEO Completeness Audit Script
───────────────────────────────────────

DATEI: /scripts/audit-seo.ts

Führe aus: npm run audit:seo

Prüfungen:
- [ ] Alle Seiten in sitemap.xml?
- [ ] Alle Seiten haben generateMetadata?
- [ ] Alle Seiten haben JSON-LD?
- [ ] Keine Duplikat-Titles?
- [ ] Keine Duplikat-Descriptions?
- [ ] Canonical URLs sind korrekt?
- [ ] OpenGraph Images alle vorhanden?
- [ ] Robots-Meta auf Legal-Seiten (noindex)?


TASK 13: Schema Validation
──────────────────────────

DATEI: /scripts/validate-schema.ts

Validiere alle JSON-LD Objekte gegen Schema.org:
- Organization: name ✓, url ✓, logo ✓
- Article: headline ✓, author ✓, datePublished ✓
- FAQPage: mainEntity Array ✓, Question ✓, Answer ✓
- Service: name ✓, description ✓, provider ✓
- BreadcrumbList: itemListElement Array ✓


TASK 14: Performance Impact Check
──────────────────────────────────

Alle JSON-LD Scripts zusammen max 50kb pro Seite.
Keine zirkulären Referenzen.
Keine redundanten Schemas.


CHECKPOINT NACH TASK 14: Alle Validierungen grün. SEO Score 95+.


═══════════════════════════════════════════════════════════════════════════════
═══ ATOMIC VALIDATION ═══
═══════════════════════════════════════════════════════════════════════════════

BUILD-COMMAND: npm run build -- --verbose

Erwartet:
- Keine build errors
- Alle page.tsx kompilieren
- Alle generateMetadata() funktionieren
- sitemap.ts generiert 30+ Einträge
- robots.ts ist erreichbar unter /robots.txt


═══════════════════════════════════════════════════════════════════════════════
═══ SELF-OPTIMIZING LOOP & HANDOFF ═══
═══════════════════════════════════════════════════════════════════════════════

Update /data/.ai-expansion-context.md:
  Phase 8 COMPLETE: ✓ Metadata System, ✓ JSON-LD, ✓ Sitemap/Robots, ✓ Validierung
  30+ Routen sind SEO-optimiert. Alle Metadata programmatisch. JSON-LD auf allen Seiten.

Update /data/.expansion-state.md:
  Phase 8 → Phase 9 (State Management & Data Flow): Zustandsverwaltung für User Preferences, Session State, API Cache.

CODE = SINGLE SOURCE OF TRUTH.
Keine manuellen Meta-Tags.
Alle Inhalte sind in /lib/data oder komponenten-intern.


═══════════════════════════════════════════════════════════════════════════════
═══ COMPLIANCE CHECKLIST (22+ items) ═══
═══════════════════════════════════════════════════════════════════════════════

METADATA SYSTEM:
□ createMetadata() Utility existiert und ist typsicher
□ Alle statischen Seiten nutzen metadata export
□ Alle dynamischen Seiten haben generateMetadata()
□ Keine Duplikat-Titles
□ Keine leeren Descriptions
□ Alle canonical URLs sind absolut

JSON-LD STRUCTURED DATA:
□ createOrganizationSchema() generiert valides Schema
□ createArticleSchema() auf allen Blog-Posts
□ createServiceSchema() auf allen Service-Seiten
□ createFAQSchema() auf FAQ-Seite
□ createBreadcrumbSchema() automatisch aus Navigation
□ JsonLd.tsx Server Component injiziert alle Scripts

SITEMAP & ROBOTS:
□ /app/sitemap.ts existiert
□ Sitemap hat 30+ URLs
□ /app/robots.ts existiert
□ robots.txt erlaubt /, disallowt /api/, /admin/
□ Sitemap Link in robots.txt

TECHNISCHES SEO:
□ Alle URLs haben canonical
□ Trailing Slash Konsistenz (ohne /)
□ URL-Slugs mit Umlaut-Konvention
□ Keine /index Pages
□ HTTPS überall
□ Keine Duplicate Content

VALIDIERUNG:
□ Build erfolgreich
□ Keine Kompilierungsfehler
□ Alle Dateien in /lib/seo und /components/seo
□ Alle page.tsx Dateien aktualisiert
□ SEO Audit Script läuft
□ Schema Validation erfolgreich
□ Performance: <50kb JSON-LD pro Seite


═══════════════════════════════════════════════════════════════════════════════

Phase 8 COMPLETE.

Phase 8 hat die Website von zufälligen Meta-Tags zu einem SEO-System transformiert.
Jede Route ist programmatisch optimiert. Metadaten, JSON-LD, Sitemap, Robots — alles
läuft automatisch. Keine manuellen Einträge. Code ist SSOT.

Phase 9: State Management & Data Flow. Zustandsverwaltung, User Preferences, Session Cache.

