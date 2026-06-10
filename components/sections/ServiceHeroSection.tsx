import React from 'react';
import { ChevronRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useTranslations } from 'next-intl';

export default function ServiceHeroSection() {
 const t = useTranslations('Service.Hero');
 return (
 <section className="relative w-full min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white border-b border-slate-100">
 <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center text-center min-w-0">
 <div className="max-w-4xl flex flex-col items-center animate-in fade-in slide-in-from-bottom-8 duration-1000">
 <h1 
 className="text-4xl sm:text-5xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.05] text-slate-900 "
 dangerouslySetInnerHTML={{ __html: t('title') }}
 />
 <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed max-w-[32ch] mb-12 ">
 {t('subtitle')}
 </p>
 
 <MagneticButton as="div">
 <a href="#downloads" className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium tracking-wide text-sm uppercase flex items-center gap-2 hover:bg-slate-800 transition-colors">
 <span className=" ">{t('button')}</span>
 <ChevronRight className="w-4 h-4" />
 </a>
 </MagneticButton>
 </div>
 </div>
 </section>
 );
}
