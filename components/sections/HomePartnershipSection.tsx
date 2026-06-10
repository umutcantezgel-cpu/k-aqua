"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Link2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomePartnershipSection() {
 const t = useTranslations('Home');
 return (
 <section className="py-24 bg-white border-t border-slate-200 overflow-hidden">
 <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="order-2 lg:order-1 relative h-[60vh] rounded-3xl overflow-hidden bg-slate-50 border border-slate-200"
 >
 <div className="absolute inset-0 flex items-center justify-center p-12">
 <div className="text-center">
 <div className="text-slate-900 font-bold text-4xl tracking-tight mb-4">{t('KWT x KESSEL')}</div>
 <div className="text-slate-500 font-mono text-sm uppercase tracking-widest">{t('Strategic Alliance')}</div>
 </div>
 </div>
 </motion.div>

 <div className="order-1 lg:order-2 flex flex-col items-start min-w-0">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 >
 <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center mb-8">
 <Link2 className="w-6 h-6 text-[#431074]" />
 </div>
 <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-8 text-slate-900 leading-[1.1] ">
 {t('The KESSEL Partnership')} <br /> {t('Unifying Liquid Transport')}
 </h2>
 <div className="space-y-6 text-lg text-slate-600 leading-relaxed ">
 <p>
 {t('partnershipDesc1')}
 </p>
 <p>
 {t('partnershipDesc2')}
 </p>
 <p>
 {t('partnershipDesc3')}
 </p>
 </div>
 </motion.div>
 </div>
 </div>
 </div>
 </section>
 );
}
