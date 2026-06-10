"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Factory } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomeSustainabilitySection() {
 const t = useTranslations('Home');
 return (
 <section className="py-24 bg-white border-t border-slate-200">
 <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
 <div className="lg:col-span-6 flex flex-col items-start min-w-0">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-100 flex items-center justify-center mb-8">
 <Leaf className="w-6 h-6 text-green-700" />
 </div>
 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.1] ">
 {t('Ecological Responsibility')} <br /> {t('Green Building Standards')}
 </h2>
 <div className="space-y-6 text-lg text-slate-600 leading-relaxed mb-8 ">
 <p>
 {t('sustainabilityDesc1')}
 </p>
 <p>
 {t('sustainabilityDesc2')}
 </p>
 </div>
 </motion.div>
 </div>

 <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 min-w-0">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="p-8 bg-slate-50 rounded-3xl border border-slate-200"
 >
 <Recycle className="w-10 h-10 text-green-700 mb-6" />
 <h3 className="text-xl font-bold text-slate-900 mb-3">{t('100% Recyclable')}</h3>
 <p className="text-slate-600 leading-relaxed text-sm">
 {t('recyclableDesc')}
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="p-8 bg-slate-50 rounded-3xl border border-slate-200"
 >
 <Factory className="w-10 h-10 text-green-700 mb-6" />
 <h3 className="text-xl font-bold text-slate-900 mb-3">{t('Low Carbon Footprint')}</h3>
 <p className="text-slate-600 leading-relaxed text-sm">
 {t('carbonFootprintDesc')}
 </p>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 );
}
