"use client";

import React from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

export default function ProductsApplicationAreas() {
 const t = useTranslations('Products');
 const applications = [
 {
 title: t('ApplicationAreas.cards.potable.title'),
 desc: t('ApplicationAreas.cards.potable.desc'),
 icon: (
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
 )
 },
 {
 title: t('ApplicationAreas.cards.climate.title'),
 desc: t('ApplicationAreas.cards.climate.desc'),
 icon: (
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"></path><path d="M4.93 4.93l14.14 14.14"></path><path d="M19.07 4.93L4.93 19.07"></path></svg>
 )
 },
 {
 title: t('ApplicationAreas.cards.industrial.title'),
 desc: t('ApplicationAreas.cards.industrial.desc'),
 icon: (
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
 )
 },
 {
 title: t('ApplicationAreas.cards.compressed.title'),
 desc: t('ApplicationAreas.cards.compressed.desc'),
 icon: (
 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
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
 className="p-10 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#6c5194]/30 transition-colors min-w-0"
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
