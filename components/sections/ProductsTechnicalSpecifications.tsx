"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ProductsTechnicalSpecifications() {
 const t = useTranslations('Products');
 const specs = [
 { property: t('TechnicalSpecs.specs.density.property'), value: t('TechnicalSpecs.specs.density.value'), method: t('TechnicalSpecs.specs.density.method') },
 { property: t('TechnicalSpecs.specs.melt.property'), value: t('TechnicalSpecs.specs.melt.value'), method: t('TechnicalSpecs.specs.melt.method') },
 { property: t('TechnicalSpecs.specs.thermal.property'), value: t('TechnicalSpecs.specs.thermal.value'), method: t('TechnicalSpecs.specs.thermal.method') },
 { property: t('TechnicalSpecs.specs.expansion.property'), value: t('TechnicalSpecs.specs.expansion.value'), method: t('TechnicalSpecs.specs.expansion.method') },
 { property: t('TechnicalSpecs.specs.modulus.property'), value: t('TechnicalSpecs.specs.modulus.value'), method: t('TechnicalSpecs.specs.modulus.method') },
 { property: t('TechnicalSpecs.specs.yield.property'), value: t('TechnicalSpecs.specs.yield.value'), method: t('TechnicalSpecs.specs.yield.method') },
 ];

 return (
 <section className="relative py-32 px-4 sm:px-6 md:px-12 z-10 bg-slate-50 border-t border-slate-200">
 <div className="max-w-4xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.6 }}
 className="mb-16 md:text-center"
 >
 <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('TechnicalSpecs.title')}
 </h2>
 <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl mx-auto ">
 {t('TechnicalSpecs.subtitle')}
 </p>
 </motion.div>

 <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
 <div className="grid grid-cols-1 md:grid-cols-3 bg-slate-50 border-b border-slate-200 p-6 text-xs uppercase tracking-widest font-bold text-slate-500">
 <div className="hidden md:block ">{t('TechnicalSpecs.headers.property')}</div>
 <div className="hidden md:block ">{t('TechnicalSpecs.headers.value')}</div>
 <div className="hidden md:block ">{t('TechnicalSpecs.headers.method')}</div>
 </div>
 
 <ul className="divide-y divide-slate-100">
 {specs.map((spec, i) => (
 <li key={i} className="grid grid-cols-1 md:grid-cols-3 p-6 gap-2 md:gap-4 hover:bg-slate-50/50 transition-colors">
 <div className="font-medium text-slate-900 ">{spec.property}</div>
 <div className="text-slate-600 font-mono text-sm ">{spec.value}</div>
 <div className="text-[#8667b3] text-sm ">{spec.method}</div>
 </li>
 ))}
 </ul>
 </div>
 </div>
 </section>
 );
}
