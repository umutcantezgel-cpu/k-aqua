"use client";

import React from 'react';
import { useTranslations } from 'next-intl';

export default function ProductsFittingsArsenal() {
 const t = useTranslations('Products');
 const arsenal = [
 { title: t('FittingsArsenal.items.valves.title'), desc: t('FittingsArsenal.items.valves.desc') },
 { title: t('FittingsArsenal.items.unions.title'), desc: t('FittingsArsenal.items.unions.desc') },
 { title: t('FittingsArsenal.items.cutting.title'), desc: t('FittingsArsenal.items.cutting.desc') },
 { title: t('FittingsArsenal.items.welding.title'), desc: t('FittingsArsenal.items.welding.desc') }
 ];

 return (
 <section className="relative py-32 md:py-48 px-4 sm:px-6 md:px-12 z-10 border-t border-slate-200 bg-white">
 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
 
 <div className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] rounded-3xl overflow-hidden group">
 <div className="w-full h-full">
 <div className="w-full h-full rounded-3xl overflow-hidden border border-slate-200 bg-slate-50 shadow-[inset_0_0_50px_rgba(108,81,148,0.05)]"></div>
 </div>
 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
 <div className="w-32 h-32 rounded-full border border-[#8667b3]/30 flex items-center justify-center backdrop-blur-sm">
 <div className="w-24 h-24 rounded-full border border-[#8667b3]/60 flex items-center justify-center animate-pulse">
 <div className="w-2 h-2 bg-[#6c5194] rounded-full" />
 </div>
 </div>
 </div>
 </div>

 <aside className="lg:col-span-6 lg:col-start-7 space-y-10">
 <div>
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 ">
 {t('FittingsArsenal.title')}
 </h2>
 <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed ">
 {t('FittingsArsenal.subtitle1')}<strong className="text-slate-900 font-medium">{t('FittingsArsenal.subtitle2')}</strong>{t('FittingsArsenal.subtitle3')}
 </p>
 </div>

 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
 {arsenal.map((item, i) => (
 <li key={i} className="flex flex-col p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#8667b3]/30 transition-colors min-w-0">
 <div className="w-8 h-8 rounded bg-[#6c5194]/10 flex items-center justify-center mb-4 text-[#8667b3]">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
 </div>
 <h4 className="text-lg font-bold text-slate-900 mb-2 ">{item.title}</h4>
 <p className="text-sm text-slate-600 font-light ">{item.desc}</p>
 </li>
 ))}
 </ul>
 
 <p className="text-slate-600 font-light leading-relaxed ">
 {t('FittingsArsenal.footer')}
 </p>
 </aside>

 </div>
 </section>
 );
}
