'use client';

import React, { useState } from 'react';
import { FAQ } from '@/lib/types';
import { Heading } from '@/components/ui/Heading';
import { Paragraph } from '@/components/ui/Paragraph';
import { Icon } from '@/components/ui/Icon';
import { useTranslations } from 'next-intl';

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

export function FAQSection({ faqs, title, subtitle }: FAQSectionProps) {
  const t = useTranslations('Global.FAQSection');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const finalTitle = title || t('title');

  const toggleAccordion = (index: number) => {
    setOpenIndex(prev => prev === index ? null : index);
  };

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="text-center mb-10">
        <Heading variant="h2" className="mb-4">{finalTitle}</Heading>
        {subtitle && <Paragraph size="lg" muted>{subtitle}</Paragraph>}
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={faq.id} 
              className={`border rounded-lg overflow-hidden transition-colors ${isOpen ? 'border-[#B8D1EE] bg-white shadow-sm' : 'border-[#D4E5F7] bg-[#EEF5FF] hover:bg-white'}`}
            >
              <button
                className="w-full px-4 sm:px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1A6FD4]"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
              >
                <span className={`flex-1 min-w-0 font-semibold text-base sm:text-lg text-balance ${isOpen ? 'text-[#1A6FD4]' : 'text-[#0C1929]'}`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 text-[#1A6FD4] transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <Icon name="expand_more" />
                </span>
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-[#4A7299] leading-relaxed border-t border-[#EEF5FF] mt-2 pt-4">
                  {faq.answer}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
