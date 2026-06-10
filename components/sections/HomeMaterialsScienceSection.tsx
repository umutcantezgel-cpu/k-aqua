"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { TestTubeDiagonal, Thermometer, ShieldAlert } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomeMaterialsScienceSection() {
 const t = useTranslations('Home');
 const materials = [
 {
 icon: <TestTubeDiagonal className="w-8 h-8" />,
 title: t('material1Title'),
 description: t('material1Desc')
 },
 {
 icon: <Thermometer className="w-8 h-8" />,
 title: t('material2Title'),
 description: t('material2Desc')
 },
 {
 icon: <ShieldAlert className="w-8 h-8" />,
 title: t('material3Title'),
 description: t('material3Desc')
 }
 ];

 return (
 <section className="py-24 bg-white border-t border-slate-200">
 <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <div className="flex flex-col items-start min-w-0">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.1] ">
 {t('Material Science')} <br /> {t('The Polymer Advantage')}
 </h2>
 <div className="space-y-6 text-lg text-slate-600 leading-relaxed ">
 <p>
 {t('materialsDesc1')}
 </p>
 <p>
 {t('materialsDesc2')}
 </p>
 </div>
 </motion.div>
 </div>

 <div className="grid grid-cols-1 gap-6 min-w-0">
 {materials.map((item, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: idx * 0.1 }}
 className="flex items-start gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-colors min-w-0"
 >
 <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-900 shadow-sm">
 {item.icon}
 </div>
 <div className="min-w-0">
 <h3 className="text-xl font-bold mb-3 text-slate-900 ">{item.title}</h3>
 <p className="text-slate-600 leading-relaxed ">{item.description}</p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </div>
 </section>
 );
}
