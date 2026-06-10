import React from 'react';
import { Link } from '@/i18n/routing';
import { FooterLinkGroup } from '@/components/nav/FooterLinkGroup';
import { getNavigationConfig } from '@/lib/data/navigation';
import { getAllServices } from '@/lib/data/services';
import { companyInfo } from '@/lib/data/company';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const navConfig = getNavigationConfig();
  const services = getAllServices();

  const serviceLinks = services.map(s => ({
    label: s.title,
    href: `/leistungen/${s.slug}`
  }));

  // Unternehmen Links aus main config
  const unternehmenItem = navConfig.main.find(item => item.label === 'Über Uns');
  const unternehmenLinks = unternehmenItem?.children?.map(child => ({
    label: child.label,
    href: child.href
  })) || [];

  const legalLinks = navConfig.legal.map(item => ({
    label: item.label,
    href: item.href
  }));

  return (
    <footer className="bg-[#EEF5FF] text-[#0C1929] border-t border-[#D4E5F7] pt-16 pb-8 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Services */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#0C1929]">Leistungen</h3>
            <ul className="space-y-4">
              {serviceLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#4A7299] hover:text-[#1A6FD4] transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Unternehmen */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#0C1929]">Unternehmen</h3>
            <ul className="space-y-4">
              {unternehmenLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#4A7299] hover:text-[#1A6FD4] transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/blog" className="text-[#4A7299] hover:text-[#1A6FD4] transition-colors text-sm font-medium">Blog & Insights</Link>
              </li>
              <li>
                <Link href="/referenzen" className="text-[#4A7299] hover:text-[#1A6FD4] transition-colors text-sm font-medium">Referenzen</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Rechtliches */}
          <div>
            <h3 className="font-bold text-lg mb-6 text-[#0C1929]">Rechtliches</h3>
            <ul className="space-y-4">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-[#4A7299] hover:text-[#1A6FD4] transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Kontakt Info */}
          <div>
            <Link href="/" className="inline-block text-2xl font-black text-[#0D4999] tracking-tighter mb-4" aria-label="Startseite">
              K-AQUA<span className="text-[#00B4D8]">.</span>
            </Link>
            <p className="text-[#4A7299] text-sm mb-6 leading-relaxed">
              {companyInfo.tagline}
            </p>
            <address className="not-italic text-[#4A7299] text-sm space-y-3">
              <p>
                <strong>T</strong> <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="hover:text-[#1A6FD4] transition-colors inline-block ml-2">{companyInfo.phone}</a>
              </p>
              <p>
                <strong>E</strong> <a href={`mailto:${companyInfo.email}`} className="hover:text-[#1A6FD4] transition-colors inline-block ml-2">{companyInfo.email}</a>
              </p>
              <div className="flex items-start mt-2">
                <strong className="mr-3">A</strong>
                <span>
                  {companyInfo.address.street}<br />
                  {companyInfo.address.zip} {companyInfo.address.city}<br />
                  {companyInfo.address.country}
                </span>
              </div>
            </address>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#D4E5F7] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#4A7299] text-sm text-center md:text-left">
            &copy; {currentYear} {companyInfo.legalName}. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-4">
            {navConfig.social.map(social => (
              <a 
                key={social.label}
                href={social.href} 
                target={social.isExternal ? "_blank" : undefined}
                rel={social.isExternal ? "noopener noreferrer" : undefined}
                className="text-[#8BAABF] hover:text-[#1A6FD4] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6FD4] rounded-sm"
                aria-label={social.label}
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
