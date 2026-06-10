"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NewsHeroSection() {
 const t = useTranslations('News.HeroSection');

 return (
 <section className="min-h-[50dvh] flex items-center px-4 sm:px-6 lg:px-12 pt-32 pb-16">
 <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center text-center min-w-0">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="flex flex-col items-center"
 >
 <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full border border-slate-200 shadow-sm bg-slate-50/50 backdrop-blur-md mb-8">
 <Newspaper className="w-4 h-4 text-[#5b2d8c]" />
 <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-700 ">{t('badge')}</span>
 </div>
 
 <h1 className="text-4xl sm:text-5xl lg:text-[7rem] font-bold tracking-tighter leading-[0.9] text-slate-900 mb-8 ">
 {t('title1')} <br />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#5b2d8c] to-purple-600 ">
 {t('title2')}
 </span>
 </h1>
 
 <p className="text-xl lg:text-2xl text-slate-600 max-w-[45ch] leading-relaxed font-light ">
 {t('subtitle')}
 </p>
 </motion.div>
 </div>
 </section>
 );
}
