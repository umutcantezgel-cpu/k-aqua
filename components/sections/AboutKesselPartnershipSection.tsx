import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutKesselPartnershipSection() {
 const t = useTranslations('About');

 return (
 <section className="relative py-24 bg-white border-t border-slate-200">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
 
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="lg:col-span-12"
 >
 <div className="flex items-center gap-3 mb-8">
 <span className="h-px w-8 bg-blue-600"></span>
 <span className="text-xs font-mono tracking-[0.2em] text-blue-600 uppercase">{t('kessel.subtitle')}</span>
 </div>
 <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-10 tracking-tight ">
 {t('kessel.title')}
 </h2>
 
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
 <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0 ">
 <p className="mb-6">
 {t('kessel.p1')}
 </p>
 <p className="mb-6">
 {t('kessel.p2')}
 </p>
 <p>
 {t('kessel.p3')}
 </p>
 </article>
 
 <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0 ">
 <p className="mb-6">
 {t('kessel.p4')}
 </p>
 <p className="mb-6">
 {t('kessel.p5')}
 </p>
 <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm mt-8">
 <h3 className="text-xl font-semibold text-slate-900 mb-4 ">{t('kessel.benefits_title')}</h3>
 <ul className="list-disc pl-5 space-y-3 text-base text-slate-700 font-normal">
 <li>{t('kessel.benefit_1')}</li>
 <li>{t('kessel.benefit_2')}</li>
 <li>{t('kessel.benefit_3')}</li>
 <li>{t('kessel.benefit_4')}</li>
 </ul>
 </div>
 </article>
 </div>
 </motion.div>

 </div>
 </div>
 </section>
 );
}
