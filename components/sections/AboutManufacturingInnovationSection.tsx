import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutManufacturingInnovationSection() {
 const t = useTranslations('About');

 return (
 <section className="relative py-24 bg-slate-50 border-t border-slate-200">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="max-w-5xl mx-auto"
 >
 <div className="flex items-center gap-3 mb-8">
 <span className="h-px w-8 bg-blue-600"></span>
 <span className="text-xs font-mono tracking-[0.2em] text-blue-600 uppercase">{t('manufacturing.subtitle')}</span>
 </div>
 
 <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-10 tracking-tight ">
 {t('manufacturing.title')}
 </h2>
 
 <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0 ">
 <p className="mb-6">
 {t('manufacturing.p1')}
 </p>
 <p className="mb-6">
 {t('manufacturing.p2')}
 </p>
 <p className="mb-6">
 {t('manufacturing.p3')}
 </p>
 <p className="mb-6">
 {t('manufacturing.p4')}
 </p>
 <p>
 {t('manufacturing.p5')}
 </p>
 </article>
 </motion.div>
 </div>
 </section>
 );
}
