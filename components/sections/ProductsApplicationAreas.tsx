"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Droplets, Thermometer, Factory, Gauge } from 'lucide-react';

export default function ProductsApplicationAreas() {
 const t = useTranslations('Products');
 const applications = [
 {
 title: t('ApplicationAreas.cards.potable.title'),
 desc: t('ApplicationAreas.cards.potable.desc'),
 icon: (
 <Droplets className="w-6 h-6" />
 )
 },
 {
 title: t('ApplicationAreas.cards.climate.title'),
 desc: t('ApplicationAreas.cards.climate.desc'),
 icon: (
 <Thermometer className="w-6 h-6" />
 )
 },
 {
 title: t('ApplicationAreas.cards.industrial.title'),
 desc: t('ApplicationAreas.cards.industrial.desc'),
 icon: (
 <Factory className="w-6 h-6" />
 )
 },
 {
 title: t('ApplicationAreas.cards.compressed.title'),
 desc: t('ApplicationAreas.cards.compressed.desc'),
 icon: (
 <Gauge className="w-6 h-6" />
 )
 }
 ];

 return (
 <section className="relative py-32 md:py-48 px-4 sm:px-6 md:px-12 z-10 bg-white border-t border-slate-200">
 <div className="max-w-7xl mx-auto">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.6 }}
 className="mb-16 md:text-center max-w-3xl md:mx-auto"
 >
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('ApplicationAreas.title')}
 </h2>
 <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed ">
 {t('ApplicationAreas.subtitle')}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
 {applications.map((app, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.5, delay: i * 0.1 }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all min-w-0"
 >
 <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#6c5194] mb-8 shadow-sm">
 {app.icon}
 </div>
 <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 ">{app.title}</h3>
 <p className="text-slate-600 leading-relaxed font-light ">{app.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
