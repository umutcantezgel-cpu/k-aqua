import React from 'react';
import MagneticButton from '../ui/MagneticButton';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServiceCTASection() {
 const t = useTranslations('Service.CTA');
 return (
 <section className="py-32 bg-slate-50 flex flex-col items-center justify-center text-center px-4 sm:px-6">
 <div className="max-w-3xl flex flex-col items-center min-w-0">
 <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.1] ">
 {t('title')}
 </h2>
 <p className="text-xl text-slate-600 mb-12 max-w-xl ">
 {t('description')}
 </p>
 <MagneticButton as="div">
 <a href="/contact" className="bg-slate-900 text-white px-10 py-5 rounded-full font-medium tracking-wide text-sm uppercase flex items-center gap-3 hover:bg-slate-800 transition-colors">
 <span className=" ">{t('button')}</span>
 <ArrowRight className="w-4 h-4" />
 </a>
 </MagneticButton>
 </div>
 </section>
 );
}
