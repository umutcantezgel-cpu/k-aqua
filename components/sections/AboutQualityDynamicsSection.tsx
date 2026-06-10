import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutQualityDynamicsSection() {
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
 <div className="flex items-center gap-4 mb-8">
 <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center border border-blue-200">
 <ShieldCheck className="w-8 h-8 text-blue-700" />
 </div>
 <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight ">{t('quality.title')}</h2>
 </div>
 
 <article className="prose prose-lg prose-slate max-w-none text-slate-600 font-light leading-relaxed min-w-0 ">
 <p className="mb-6">
 {t('quality.p1')}
 </p>
 <p className="mb-6">
 {t('quality.p2')}
 </p>
 <p className="mb-6">
 {t('quality.p3')}
 </p>
 <p>
 {t('quality.p4')}
 </p>
 </article>
 </motion.div>
 </div>
 </section>
 );
}
