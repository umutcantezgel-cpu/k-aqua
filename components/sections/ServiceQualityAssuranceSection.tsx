import React from 'react';
import { Target, Search, BarChart3 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServiceQualityAssuranceSection() {
 const t = useTranslations('Service.QualityAssurance');
 return (
 <section className="py-24 bg-white border-b border-slate-100">
 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
 <div className="mb-16 max-w-3xl">
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('title')}
 </h2>
 <p className="text-lg text-slate-600 leading-relaxed ">
 {t('description')}
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
 <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all min-w-0">
 <Target className="w-8 h-8 text-slate-700 mb-6" />
 <h3 className="text-xl font-bold mb-4 tracking-tight text-slate-900 ">{t('cards.0.title')}</h3>
 <p className="text-slate-600 leading-relaxed text-sm ">
 {t('cards.0.description')}
 </p>
 </div>
 
 <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all min-w-0">
 <Search className="w-8 h-8 text-slate-700 mb-6" />
 <h3 className="text-xl font-bold mb-4 tracking-tight text-slate-900 ">{t('cards.1.title')}</h3>
 <p className="text-slate-600 leading-relaxed text-sm ">
 {t('cards.1.description')}
 </p>
 </div>

 <div className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all min-w-0">
 <BarChart3 className="w-8 h-8 text-slate-700 mb-6" />
 <h3 className="text-xl font-bold mb-4 tracking-tight text-slate-900 ">{t('cards.2.title')}</h3>
 <p className="text-slate-600 leading-relaxed text-sm ">
 {t('cards.2.description')}
 </p>
 </div>
 </div>
 </div>
 </section>
 );
}
