import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutGlobalStandardsSection() {
 const t = useTranslations('About');

 return (
 <section className="relative py-24 bg-white border-t border-slate-200">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 
 <motion.div 
 initial={{ opacity: 0, x: -20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="min-w-0"
 >
 <div className="flex items-center gap-3 mb-8">
 <span className="h-px w-8 bg-blue-600"></span>
 <span className="text-xs font-mono tracking-[0.2em] text-blue-600 uppercase">{t('standards.subtitle')}</span>
 </div>
 
 <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8 tracking-tight ">
 {t('standards.title')}
 </h2>
 
 <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0 ">
 <p className="mb-6">
 {t('standards.p1')}
 </p>
 <p>
 {t('standards.p2')}
 </p>
 </article>
 </motion.div>

 <motion.div 
 initial={{ opacity: 0, x: 20 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, delay: 0.2 }}
 className="flex flex-col gap-6 min-w-0"
 >
 <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm">
 <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('standards.item1_title')}</h3>
 <p className="text-slate-600 font-light leading-relaxed">
 {t('standards.item1_desc')}
 </p>
 </div>

 <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm">
 <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('standards.item2_title')}</h3>
 <p className="text-slate-600 font-light leading-relaxed">
 {t('standards.item2_desc')}
 </p>
 </div>
 
 <div className="bg-slate-50 border border-slate-200 p-8 rounded-3xl shadow-sm">
 <h3 className="text-2xl font-bold text-slate-900 mb-4">{t('standards.item3_title')}</h3>
 <p className="text-slate-600 font-light leading-relaxed">
 {t('standards.item3_desc')}
 </p>
 </div>
 </motion.div>

 </div>
 </div>
 </section>
 );
}
