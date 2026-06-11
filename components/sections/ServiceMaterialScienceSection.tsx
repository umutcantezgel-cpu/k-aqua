import React from 'react';
import { useTranslations } from 'next-intl';

export default function ServiceMaterialScienceSection() {
 const t = useTranslations('Service.MaterialScience');
 return (
 <section className="py-24 bg-slate-50 border-b border-slate-100">
 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
 
 <div className="lg:col-span-5 sticky top-24">
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('title')}
 </h2>
 <p className="text-lg text-slate-600 leading-relaxed mb-8 ">
 {t('description')}
 </p>
            <div className="p-8 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl hover:-translate-y-1 hover:shadow-md transition-all">
              <h4 className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">{t('coreAdvantageTitle')}</h4>
              <p className="text-slate-700 italic ">
 {t('coreAdvantageQuote')}
 </p>
 </div>
 </div>

 <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all min-w-0">
 <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight ">{t('cards.0.title')}</h3>
 <p className="text-slate-600 leading-relaxed text-sm ">
 {t('cards.0.description')}
 </p>
 </div>

 <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all min-w-0">
 <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight ">{t('cards.1.title')}</h3>
 <p className="text-slate-600 leading-relaxed text-sm ">
 {t('cards.1.description')}
 </p>
 </div>

 <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all min-w-0">
 <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight ">{t('cards.2.title')}</h3>
 <p className="text-slate-600 leading-relaxed text-sm ">
 {t('cards.2.description')}
 </p>
 </div>

 <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all min-w-0">
 <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight ">{t('cards.3.title')}</h3>
 <p className="text-slate-600 leading-relaxed text-sm ">
 {t('cards.3.description')}
 </p>
 </div>
 </div>

 </div>
 </div>
 </section>
 );
}
