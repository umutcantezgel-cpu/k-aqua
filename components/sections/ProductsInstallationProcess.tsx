"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ProductsInstallationProcess() {
 const t = useTranslations('Products');
 const steps = [
 { num: "01", title: t('Installation.steps.cut.title'), desc: t('Installation.steps.cut.desc') },
 { num: "02", title: t('Installation.steps.thermal.title'), desc: t('Installation.steps.thermal.desc') },
 { num: "03", title: t('Installation.steps.polyfusion.title'), desc: t('Installation.steps.polyfusion.desc') },
 { num: "04", title: t('Installation.steps.homo.title'), desc: t('Installation.steps.homo.desc') }
 ];

 return (
 <section className="relative py-32 md:py-48 px-4 sm:px-6 md:px-12 z-10 bg-white border-t border-slate-200">
 <div className="max-w-7xl mx-auto">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.6 }}
 >
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('Installation.title')}
 </h2>
 <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed mb-6 ">
 {t('Installation.subtitle1')}
 </p>
 <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed ">
 {t('Installation.subtitle2')}
 </p>
 </motion.div>
 <div className="relative h-[40vh] md:h-[50vh] rounded-3xl overflow-hidden bg-slate-50 border border-slate-200 flex items-center justify-center p-8">
 {/* Visual representation of fusion */}
 <div className="flex items-center justify-center w-full max-w-sm relative">
 <div className="w-1/2 h-20 bg-slate-200 rounded-l-lg relative overflow-hidden">
 <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#6c5194]/40 to-transparent" />
 </div>
 <div className="w-8 h-24 bg-[#6c5194] rounded shadow-[0_0_30px_rgba(108,81,148,0.5)] z-10 relative flex items-center justify-center">
 <div className="w-1 h-12 bg-white/50 rounded-full animate-pulse" />
 </div>
 <div className="w-1/2 h-24 bg-slate-200 rounded-r-lg relative overflow-hidden">
 <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#6c5194]/40 to-transparent" />
 </div>
 </div>
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
 {steps.map((step, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.5, delay: i * 0.1 }}
 className="p-8 rounded-2xl bg-slate-50 border border-slate-200 min-w-0"
 >
 <div className="text-sm font-mono text-[#6c5194] mb-4 font-bold">{step.num}</div>
 <h4 className="text-xl font-bold text-slate-900 mb-3 ">{step.title}</h4>
 <p className="text-slate-600 font-light text-sm leading-relaxed ">{step.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
