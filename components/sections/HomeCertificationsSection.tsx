"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, Award, BadgeCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomeCertificationsSection() {
 const t = useTranslations('Home');
 const certifications = [
 {
 title: t('cert1Title'),
 authority: t('cert1Authority'),
 desc: t('cert1Desc')
 },
 {
 title: t('cert2Title'),
 authority: t('cert2Authority'),
 desc: t('cert2Desc')
 },
 {
 title: t('cert3Title'),
 authority: t('cert3Authority'),
 desc: t('cert3Desc')
 },
 {
 title: t('cert4Title'),
 authority: t('cert4Authority'),
 desc: t('cert4Desc')
 }
 ];

 return (
 <section className="py-24 bg-slate-50 border-t border-slate-200">
 <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="text-center max-w-3xl mx-auto mb-16">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <div className="w-16 h-16 mx-auto rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6">
 <FileCheck className="w-8 h-8 text-[#431074]" />
 </div>
 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('Verified by Global Authorities')}
 </h2>
 <p className="text-xl text-slate-600 leading-relaxed ">
 {t('certificationsDescription')}
 </p>
 </motion.div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
 {certifications.map((cert, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: idx * 0.1 }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all text-center flex flex-col items-center min-w-0"
 >
 <Award className="w-10 h-10 text-slate-300 mb-6" />
 <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
 <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">{cert.authority}</div>
 <p className="text-slate-600 text-sm leading-relaxed">{cert.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
