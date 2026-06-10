import React from 'react';
import { Link } from '@/i18n/routing';
import { Section } from '@/components/layout/Section';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Button } from '@/components/ui/Button';
import { useTranslations } from 'next-intl';

interface CTASectionProps {
  heading?: string;
  text?: string;
  buttonText?: string;
  buttonHref?: string;
  variant?: 'blue' | 'gray';
}

export function CTASection({
  heading,
  text,
  buttonText,
  buttonHref = "/kontakt",
  variant = 'blue'
}: CTASectionProps) {
  const t = useTranslations('Global.CTASection');
  const isBlue = variant === 'blue';
  
  const finalHeading = heading || t('heading');
  const finalText = text || t('text');
  const finalButtonText = buttonText || t('buttonText');

  return (
    <Section spacing="lg" background={variant}>
      <div className={`max-w-4xl mx-auto text-center px-4 py-12 rounded-3xl ${isBlue ? 'bg-[#1A6FD4] text-white shadow-[0_8px_24px_rgba(13,73,153,0.20)]' : 'border border-[#D4E5F7] bg-white'}`}>
        <Heading variant="h2" responsive className={`mb-6 ${isBlue ? 'text-white' : 'text-[#0C1929]'}`}>
          {finalHeading}
        </Heading>
        
        <Paragraph size="lg" className={`mb-10 max-w-2xl mx-auto ${isBlue ? 'text-[#F8FAFF]/80' : 'text-[#4A7299]'}`}>
          {finalText}
        </Paragraph>
        
        <Link 
          href={buttonHref} 
          className={`inline-flex items-center justify-center rounded-lg font-semibold px-6 py-3 text-lg transition-all hover:-translate-y-0.5 ${
            isBlue ? 'bg-white text-[#1A6FD4] hover:bg-[#EAF3FF] shadow-md' : 'bg-[#1A6FD4] text-white hover:bg-[#0D4999]'
          }`}
        >
          {finalButtonText}
        </Link>
      </div>
    </Section>
  );
}
