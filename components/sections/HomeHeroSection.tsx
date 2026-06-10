"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomeHeroSection() {
 const t = useTranslations('Home');
 return (
 <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden py-24">
 <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
 <div className="lg:col-span-7 flex flex-col items-start z-10 min-w-0">
 <motion.div 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="mb-8 flex items-center space-x-3"
 >
 <div className="w-2 h-2 rounded-full bg-[#431074] animate-pulse" />
 <span className="font-mono text-xs uppercase tracking-[0.2em] text-slate-600">{t('Advanced Piping Solutions')}</span>
 </motion.div>

 <motion.h1 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.1 }}
 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.05] tracking-tight mb-8 text-slate-900 text-balance"
 >
 {t('Leading the Future of')} <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">{t('Water Supply Infrastructure')}</span>
 </motion.h1>

 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.2 }}
 className="text-lg text-slate-600 max-w-[60ch] leading-relaxed mb-10 "
 >
 {t('K-Aqua core business description')}
 </motion.p>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6, delay: 0.3 }}
 className="flex flex-wrap items-center gap-6"
 >
 <MagneticButton as="div" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full !px-0 !py-0">
 <Link href="/products" className="px-8 py-4 flex items-center gap-2">
 {t('Explore Our Ecosystem')} <ArrowRight className="w-4 h-4" />
 </Link>
 </MagneticButton>
 <MagneticButton as="div" className="bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 rounded-full shadow-sm !px-0 !py-0">
 <Link href="/contact" className="px-8 py-4 flex items-center gap-2">
 {t('Consult an Engineer')}
 </Link>
 </MagneticButton>
 </motion.div>
 </div>

 <div className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-50 min-w-0">
 <motion.div 
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8 }}
 className="w-full h-full bg-slate-100 flex items-center justify-center"
 >
 <div className="text-slate-400 font-mono text-sm">{t('Industrial Flow Architecture')}</div>
 </motion.div>
 </div>
 </div>
 </section>
 );
}
