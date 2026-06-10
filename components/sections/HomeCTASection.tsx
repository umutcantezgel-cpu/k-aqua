"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomeCTASection() {
 const t = useTranslations('Home');
 return (
 <section className="relative py-32 bg-white text-slate-900 overflow-hidden border-t border-slate-200">
 <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-transparent pointer-events-none" />
 
 <div className="relative w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 text-center z-10">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.6 }}
 className="max-w-4xl mx-auto"
 >
 <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.05] ">
 {t('Specify the Apex of')} <br /> {t('Water Infrastructure')}
 </h2>
 <p className="text-xl text-slate-600 leading-relaxed mb-12 max-w-[60ch] mx-auto ">
 {t('ctaDescription')}
 </p>

 <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
 <MagneticButton as="div" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full !px-0 !py-0 w-full sm:w-auto">
 <Link href="/contact" className="px-10 py-5 flex items-center justify-center gap-2 w-full text-lg">
 {t('Initiate Project')} <ArrowRight className="w-5 h-5" />
 </Link>
 </MagneticButton>
 <MagneticButton as="div" className="bg-transparent border border-slate-200 text-slate-900 hover:bg-slate-50 rounded-full !px-0 !py-0 w-full sm:w-auto">
 <Link href="/products" className="px-10 py-5 flex items-center justify-center gap-2 w-full text-lg">
 {t('View Technical Specs')}
 </Link>
 </MagneticButton>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
