"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ReferencesHeroSection() {
 const t = useTranslations('References.Hero');

 return (
 <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-slate-50 border-b border-slate-200 overflow-hidden">
 <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-100 to-slate-50" />
 
 <motion.div 
 className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex flex-col items-center text-center py-24 min-w-0"
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 >
 <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white border border-slate-200 shadow-sm rounded-full mb-8">
 <Globe2 className="w-4 h-4 text-blue-600" />
 <span className="text-xs font-mono tracking-widest uppercase text-slate-700 ">{t('badge')}</span>
 </div>
 <h1 className="text-4xl md:text-5xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-tight mb-8 max-w-5xl mx-auto ">
 {t('title1')} <br /> 
 <span className="text-blue-600 ">
 {t('title2')}
 </span>
 </h1>
 <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed ">
 {t('description')}
 </p>
 </motion.div>
 </section>
 );
}
