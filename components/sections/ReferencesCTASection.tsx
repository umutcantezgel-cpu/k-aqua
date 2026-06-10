"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function ReferencesCTASection() {
 const router = useRouter();
 const t = useTranslations('References');

 return (
 <section className="py-32 bg-blue-600 border-t border-slate-200 overflow-hidden relative">
 <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center relative z-10 flex flex-col items-center min-w-0">
 <motion.h2 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 text-white "
 >
 {t('CTA.title')}
 </motion.h2>
 <motion.p 
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ delay: 0.1 }}
 className="text-xl text-blue-100 mb-12 max-w-2xl leading-relaxed "
 >
 {t('CTA.description')}
 </motion.p>
 <motion.button 
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true }}
 transition={{ delay: 0.2 }}
 onClick={() => router.push('/contact')}
 className="inline-flex items-center justify-center bg-white text-blue-700 hover:bg-blue-50 font-semibold text-lg tracking-wide px-10 py-5 rounded-full transition-colors shadow-lg hover:shadow-xl"
 >
 {t('CTA.button')} <ArrowRight className="ml-3 w-5 h-5" />
 </motion.button>
 </div>
 </section>
 );
}
