"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ReferencesLegacySection() {
 const t = useTranslations('References.Legacy');

 return (
 <section className="py-24 md:py-32 bg-slate-50">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
 <motion.article 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="prose prose-lg md:prose-xl max-w-none text-slate-600 leading-relaxed font-light"
 >
 <h2 className="text-3xl md:text-4xl text-slate-900 font-bold mb-8 tracking-tight ">
 {t('title')}
 </h2>
 <p className="text-xl md:text-2xl text-slate-800 font-medium mb-10 leading-snug ">
 {t('p1')}
 </p>
 <p className="mb-6 ">
 {t('p2')}
 </p>
 <p className="mb-6 ">
 {t('p3')}
 </p>
 <p className=" ">
 {t('p4')}
 </p>
 </motion.article>
 </div>
 </section>
 );
}
