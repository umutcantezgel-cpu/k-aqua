import React from 'react';
import { Link } from '@/i18n/routing';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  backgroundImage?: string;
}

export function HeroSection({
  title,
  subtitle,
  ctaText,
  ctaHref = "/kontakt",
  backgroundImage
}: HeroSectionProps) {
  const t = useTranslations('Global.HeroSection');
  const finalTitle = title || t('title');
  const finalSubtitle = subtitle || t('subtitle');
  const finalCtaText = ctaText || t('ctaText');

  return (
    <section className="relative py-24 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-[#1A6FD4] to-[#0D4999] text-white">
      {/* Optional Background Image with Overlay */}
      {backgroundImage && (
        <>
          <div 
            className="absolute inset-0 bg-cover bg-center z-0" 
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-[#0D4999]/80 z-0" />
        </>
      )}

      {/* Decorative patterns */}
      <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Heading variant="h1" responsive className="mb-6 text-white drop-shadow-md">
            {finalTitle}
          </Heading>
          
          <Paragraph size="lg" className="text-[#F8FAFF]/80 mb-10 max-w-2xl mx-auto drop-shadow">
            {finalSubtitle}
          </Paragraph>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={ctaHref} className="inline-flex items-center justify-center rounded-lg font-bold px-8 py-4 text-xl bg-white text-[#1A6FD4] hover:bg-[#EAF3FF] shadow-[0_8px_24px_rgba(13,73,153,0.20)] hover:shadow-[0_16px_48px_rgba(13,73,153,0.25)] transition-all hover:-translate-y-0.5">
              {finalCtaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
