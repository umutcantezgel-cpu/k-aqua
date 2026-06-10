import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function AboutSymbiosisCultureSection() {
 const t = useTranslations('About');

 return (
 <section className="relative py-24 bg-white border-t border-slate-200">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="max-w-5xl mx-auto text-center"
 >
 <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-8 tracking-tight ">{t('symbiosis.title')}</h2>
 <div className="h-px w-24 bg-blue-600 mx-auto mb-10" />
 
 <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed text-left min-w-0 ">
 <p className="mb-6">
 {t('symbiosis.p1')}
 </p>
 <p className="mb-6">
 {t('symbiosis.p2')}
 </p>
 <p className="mb-6">
 {t('symbiosis.p3')}
 </p>
 <p>
 {t('symbiosis.p4')}
 </p>
 </article>
 </motion.div>
 </div>
 </section>
 );
}
