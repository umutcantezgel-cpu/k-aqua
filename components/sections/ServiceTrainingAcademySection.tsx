import React from 'react';
import { Award, Users, BookOpen } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ServiceTrainingAcademySection() {
 const t = useTranslations('Service.TrainingAcademy');
 return (
 <section className="py-24 bg-slate-50 border-b border-slate-100">
 <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row gap-16 items-center min-w-0">
 
 <div className="lg:w-1/2">
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('title')}
 </h2>
 <p className="text-lg text-slate-600 leading-relaxed mb-8 ">
 {t('description')}
 </p>
 
 <ul className="flex flex-col gap-6">
 <li className="flex items-start gap-4">
 <div className="mt-1 bg-white p-2 rounded-full border border-slate-200 shrink-0">
 <Users className="w-5 h-5 text-slate-700" />
 </div>
 <div className="min-w-0">
 <h4 className="text-lg font-bold text-slate-900 mb-1 ">{t('list.0.title')}</h4>
 <p className="text-slate-600 text-sm leading-relaxed ">{t('list.0.description')}</p>
 </div>
 </li>
 
 <li className="flex items-start gap-4">
 <div className="mt-1 bg-white p-2 rounded-full border border-slate-200 shrink-0">
 <BookOpen className="w-5 h-5 text-slate-700" />
 </div>
 <div className="min-w-0">
 <h4 className="text-lg font-bold text-slate-900 mb-1 ">{t('list.1.title')}</h4>
 <p className="text-slate-600 text-sm leading-relaxed ">{t('list.1.description')}</p>
 </div>
 </li>

 <li className="flex items-start gap-4">
 <div className="mt-1 bg-white p-2 rounded-full border border-slate-200 shrink-0">
 <Award className="w-5 h-5 text-slate-700" />
 </div>
 <div className="min-w-0">
 <h4 className="text-lg font-bold text-slate-900 mb-1 ">{t('list.2.title')}</h4>
 <p className="text-slate-600 text-sm leading-relaxed ">{t('list.2.description')}</p>
 </div>
 </li>
 </ul>
 </div>

 <div className="lg:w-1/2 w-full h-[500px] bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl relative overflow-hidden flex items-center justify-center hover:-translate-y-1 hover:shadow-md transition-all">
  {/* Abstract representation of the Academy. Normally an image would go here. */}
  <div className="absolute inset-0 bg-slate-50/50"></div>
  <div className="relative z-10 text-center p-8">
  <Award className="w-16 h-16 text-slate-300 mx-auto mb-4" />
  <p className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3 justify-center">{t('protocol')}</p>
  </div>
  </div>

 </div>
 </section>
 );
}
