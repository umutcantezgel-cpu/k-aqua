"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'motion/react';

export default function SolutionsHeroSection() {
 const t = useTranslations('Solutions');

 return (
 <section className="relative w-full min-h-[100dvh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-50 selection:bg-[#5b2d8c]/50">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
 <motion.div 
 className="max-w-5xl"
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
 >
 <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter leading-[0.95] text-slate-900 mb-8 ">
 {t("Hero.title1")} <br className="hidden md:block"/>
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b2d8c] to-purple-400 ">{t("Hero.title2")}</span> {t("Hero.title3")}
 </h1>
 <motion.p 
 initial={{ opacity: 0, y: 40 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
 className="text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed max-w-[48ch] "
 >
 {t("Hero.subtitle")}
 </motion.p>
 </motion.div>
 </div>
 </section>
 );
}
