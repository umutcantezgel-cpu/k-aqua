'use client';

import React from 'react';
import { Link } from '@/i18n/routing';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/ui/Icon';

interface BreadcrumbProps {
  hideHome?: boolean;
}

const PATH_MAP: Record<string, string> = {
  'leistungen': 'Leistungen',
  'ueber-uns': 'Über Uns',
  'team': 'Das Team',
  'karriere': 'Karriere',
  'partner': 'Partner',
  'blog': 'Blog',
  'referenzen': 'Referenzen',
  'kontakt': 'Kontakt',
  'impressum': 'Impressum',
  'datenschutz': 'Datenschutz',
  'agb': 'AGB',
  'cookie-richtlinie': 'Cookie-Richtlinie'
};

function formatLabel(segment: string): string {
  if (PATH_MAP[segment]) return PATH_MAP[segment];
  // Convert slug to readable string (e.g. "planung-beratung" -> "Planung Beratung")
  return segment
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function Breadcrumb({ hideHome = false }: BreadcrumbProps) {
  const pathname = usePathname();
  
  // Don't render on home page or if no pathname
  if (!pathname || pathname === '/') return null;

  const segments = pathname.split('/').filter(Boolean);
  
  // Build paths
  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    return {
      label: formatLabel(segment),
      href,
      isLast: index === segments.length - 1
    };
  });

  if (!hideHome) {
    breadcrumbs.unshift({ label: 'Startseite', href: '/', isLast: false });
  }

  // Generate JSON-LD
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: `https://k-aqua.de${crumb.href}` // Use actual domain in production
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <nav aria-label="Breadcrumb" className="mb-6 w-full overflow-x-auto pb-2">
        <ol className="flex items-center space-x-2 text-sm text-[#4A7299] whitespace-nowrap min-w-max">
          {breadcrumbs.map((crumb, index) => (
            <React.Fragment key={crumb.href}>
              <li className="flex items-center">
                {crumb.isLast ? (
                  <span className="text-[#0C1929] font-medium" aria-current="page">
                    {crumb.label}
                  </span>
                ) : (
                  <Link 
                    href={crumb.href} 
                    className="hover:text-[#1A6FD4] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6FD4] rounded-sm"
                  >
                    {crumb.label}
                  </Link>
                )}
              </li>
              {!crumb.isLast && (
                <li className="flex items-center text-[#8BAABF]" aria-hidden="true">
                  <Icon name="chevron_right" size="sm" />
                </li>
              )}
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </>
  );
}
