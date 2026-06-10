import React from 'react';
import { useTranslations } from 'next-intl';

export default function ServiceOverviewSection() {
 const t = useTranslations('Service.Overview');
 return (
 <section className="py-24 bg-slate-50 border-b border-slate-100">
 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
 <div className="max-w-4xl">
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-slate-900 ">
 {t('title')}
 </h2>
 <div className="prose prose-lg prose-slate max-w-none">
 <p className="text-xl text-slate-700 leading-relaxed mb-6 ">
 {t('p1')}
 </p>
 <p className="text-lg text-slate-600 leading-relaxed mb-6 ">
 {t('p2')}
 </p>
 <p className="text-lg text-slate-600 leading-relaxed ">
 {t('p3')}
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
