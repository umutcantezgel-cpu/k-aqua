"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ProductsCTA() {
 const t = useTranslations('Products');
 return (
 <section className="relative py-48 px-4 sm:px-6 md:px-12 z-10 bg-slate-50 text-center flex flex-col items-center justify-center border-t border-slate-200">
 <div className="absolute inset-0 z-0 pointer-events-none opacity-10 bg-[radial-gradient(circle_at_center,_#6c5194_0%,_transparent_50%)]" />
 
 <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 z-10 relative text-slate-900 ">
 {t('CTA.title')}
 </h2>
 <p className="text-lg sm:text-xl text-slate-600 font-light mb-16 max-w-2xl z-10 relative leading-relaxed ">
 {t('CTA.subtitle')}
 </p>

 <div className="z-10 relative flex gap-4">
 <MagneticButton as="div">
 <a 
 href="https://www.k-aqua.de/PDF/K-Aqua_Product_Range_en.pdf"
 target="_blank"
 rel="noopener noreferrer"
 className="group relative inline-flex items-center justify-center px-12 py-6 bg-[#6c5194] text-white font-medium text-lg tracking-wide rounded-full overflow-hidden transition-transform active:scale-95"
 >
 <div className="absolute inset-0 w-full h-full bg-[#8667b3] origin-bottom transform scale-y-0 transition-transform duration-300 ease-out group-hover:scale-y-100" />
 <span className="relative z-10 transition-colors duration-300 ">
 {t('CTA.download')}
 </span>
 </a>
 </MagneticButton>
 </div>
 </section>
 );
}
