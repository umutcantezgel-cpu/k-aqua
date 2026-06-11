"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Map } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ReferencesSectorsSection() {
 const t = useTranslations('References.Sectors');

 const sectors = [
 {
 title: t('commercialTitle'),
 description: t('commercialDesc'),
 icon: <Layers className="w-8 h-8 text-blue-600" />
 },
 {
 title: t('hospitalityTitle'),
 description: t('hospitalityDesc'),
 icon: <ShieldCheck className="w-8 h-8 text-blue-600" />
 },
 {
 title: t('municipalTitle'),
 description: t('municipalDesc'),
 icon: <Map className="w-8 h-8 text-blue-600" />
 }
 ];

 return (
 <section className="py-24 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 min-w-0">
 <div className="text-center mb-16">
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 "
 >
 {t('title')}
 </motion.h2>
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="text-lg text-slate-600 max-w-2xl mx-auto "
 >
 {t('description')}
 </motion.p>
 </div>

 <div className="grid md:grid-cols-3 gap-12">
 {sectors.map((sector, idx) => (
 <motion.div 
 key={idx}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: idx * 0.15 }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all min-w-0"
 >
 <div className="w-16 h-16 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6">
 {sector.icon}
 </div>
 <h3 className="text-2xl font-bold text-slate-900 mb-4 ">{sector.title}</h3>
 <p className="text-slate-600 leading-relaxed ">
 {sector.description}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
