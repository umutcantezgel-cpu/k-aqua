"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ProductsQualityAssurance() {
 const t = useTranslations('Products');
 const certifications = [
 {
 title: t('QualityAssurance.certs.din.title'),
 desc: t('QualityAssurance.certs.din.desc')
 },
 {
 title: t('QualityAssurance.certs.dvgw.title'),
 desc: t('QualityAssurance.certs.dvgw.desc')
 },
 {
 title: t('QualityAssurance.certs.iso.title'),
 desc: t('QualityAssurance.certs.iso.desc')
 },
 {
 title: t('QualityAssurance.certs.skz.title'),
 desc: t('QualityAssurance.certs.skz.desc')
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
 className="max-w-3xl mb-16 md:mb-24"
 >
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('QualityAssurance.title')}
 </h2>
 <p className="text-slate-600 text-lg leading-relaxed font-light ">
 {t('QualityAssurance.subtitle')}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {certifications.map((cert, index) => (
 <motion.div
 key={cert.title}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.6, delay: index * 0.1 }}
 className="p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-[#8667b3]/30 transition-colors group min-w-0"
 >
 <div className="h-12 w-12 rounded-full bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-sm">
 <div className="h-4 w-4 rounded-full bg-[#8667b3] group-hover:scale-125 transition-transform duration-500" />
 </div>
 <h3 className="text-xl font-bold text-slate-900 mb-4 ">{cert.title}</h3>
 <p className="text-slate-600 leading-relaxed font-light text-sm ">
 {cert.desc}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
