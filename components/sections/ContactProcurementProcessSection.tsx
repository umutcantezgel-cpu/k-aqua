import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ContactProcurementProcessSection() {
 const t = useTranslations('Contact.Procurement');

 const steps = [
 {
 num: "01",
 title: t('step1.title'),
 desc: t('step1.desc')
 },
 {
 num: "02",
 title: t('step2.title'),
 desc: t('step2.desc')
 },
 {
 num: "03",
 title: t('step3.title'),
 desc: t('step3.desc')
 },
 {
 num: "04",
 title: t('step4.title'),
 desc: t('step4.desc')
 }
 ];

 return (
 <section className="py-24 bg-white border-t border-slate-200">
 <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
 <motion.div 
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="mb-16"
 >
 <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tighter text-slate-900 mb-6 ">
 {t('title')}
 </h2>
 <p className="text-xl text-slate-600 max-w-[60ch] ">
 {t('subtitle')}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {steps.map((step, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.5, delay: idx * 0.1 }}
 className="relative min-w-0 bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all"
 >
 <div className="text-4xl lg:text-5xl font-black text-slate-200 mb-6 tracking-tighter">
 {step.num}
 </div>
 <h3 className="text-xl font-bold text-slate-900 mb-4 ">
 {step.title}
 </h3>
 <p className="text-slate-600 leading-relaxed text-sm font-medium ">
 {step.desc}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
