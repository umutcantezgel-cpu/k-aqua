import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutSustainabilityProtocolSection() {
 const t = useTranslations('About');

 return (
 <section className="relative py-24 bg-slate-50 border-t border-slate-200">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="max-w-4xl mx-auto"
 >
 <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-200 bg-emerald-50 mb-8">
 <Leaf className="w-5 h-5 text-emerald-600" />
 <span className="text-sm font-semibold text-emerald-800 uppercase tracking-wider">{t('sustainability.subtitle')}</span>
 </div>
 
 <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-10 tracking-tight ">
 {t('sustainability.title')}
 </h2>
 
 <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0 ">
 <p className="mb-6">
 {t('sustainability.p1')}
 </p>
 <p className="mb-6">
 {t('sustainability.p2')}
 </p>
 <p className="mb-6">
 {t('sustainability.p3')}
 </p>
 <p>
 {t('sustainability.p4')}
 </p>
 </article>
 </motion.div>
 </div>
 </section>
 );
}
