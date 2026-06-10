import React from 'react';
import { Link } from '@/i18n/routing';
import { Droplet, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Global.Footer');
  return (
    <footer className="bg-surface-base border-t border-border-subtle pt-20 pb-10">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="min-w-0">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <Droplet className="w-5 h-5 text-on-primary" strokeWidth={2} />
              </div>
              <span className="ml-3 text-xl font-bold text-on-surface break-words hyphens-auto">K-Aqua</span>
            </div>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-xs break-words hyphens-auto">
              {t('description')}
            </p>
          </div>
          
          <div className="min-w-0">
            <h4 className="text-[13px] uppercase tracking-wider font-semibold text-on-surface mb-6 break-words hyphens-auto">{t('explore')}</h4>
            <ul className="space-y-2">
              <li><Link href="/products" className="text-on-surface-variant text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded min-h-[44px] inline-flex items-center">{t('products')}</Link></li>
              <li><Link href="/solutions" className="text-on-surface-variant text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded min-h-[44px] inline-flex items-center">{t('solutions')}</Link></li>
              <li><Link href="/references" className="text-on-surface-variant text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded min-h-[44px] inline-flex items-center">{t('references')}</Link></li>
              <li><Link href="/career" className="text-on-surface-variant text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded min-h-[44px] inline-flex items-center">{t('career')}</Link></li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="text-[13px] uppercase tracking-wider font-semibold text-on-surface mb-6 break-words hyphens-auto">{t('contact')}</h4>
            <ul className="space-y-4 text-sm text-on-surface-variant">
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-outline mr-3 shrink-0 mt-0.5" />
                <span className="break-words hyphens-auto">KWT GmbH, Auweg 3<br />35647 Waldsolms-Brandoberndorf</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 text-outline mr-3 shrink-0" />
                <span className="break-words hyphens-auto">+49 (0)60 85 / 9868-410</span>
              </li>
            </ul>
          </div>

          <div className="min-w-0">
            <h4 className="text-[13px] uppercase tracking-wider font-semibold text-on-surface mb-6 break-words hyphens-auto">{t('legal')}</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-on-surface-variant text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded min-h-[44px] inline-flex items-center">{t('imprint')}</Link></li>
              <li><Link href="/contact" className="text-on-surface-variant text-sm hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded min-h-[44px] inline-flex items-center">{t('privacyPolicy')}</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-on-surface-variant min-w-0">
          <p className="break-words hyphens-auto">&copy; {new Date().getFullYear()} KWT GmbH. {t('allRightsReserved')}</p>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="flex items-center break-words hyphens-auto"><ShieldCheck className="w-4 h-4 mr-2 shrink-0" /> {t('gdpr')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
