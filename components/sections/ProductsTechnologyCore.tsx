"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

function RevealText({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
 return (
 <motion.span
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
 className="inline-block"
 >
 {children}
 </motion.span>
 );
}

export default function ProductsTechnologyCore() {
 const t = useTranslations('Products');
 return (
 <section className="relative py-32 md:py-48 px-4 sm:px-6 md:px-12 z-10 border-t border-slate-200 bg-white">
 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
 
 {/* Deep Semantic Article */}
 <article className="space-y-12">
 <header>
 <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6 ">
 <RevealText>{t('TechnologyCore.title1')}</RevealText> <RevealText delay={0.1}>{t('TechnologyCore.title2')}</RevealText>
 </h2>
 <p className="text-lg sm:text-xl text-[#8667b3] font-mono tracking-tight ">
 {t('TechnologyCore.subtitle')}
 </p>
 </header>
 
 <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
 <p className=" ">
 {t('TechnologyCore.p1')}
 </p>
 <p className=" ">
 {t('TechnologyCore.p2')}
 </p>
 <p className=" ">
 {t('TechnologyCore.p3')}
 </p>
 </div>
 </article>

 {/* Gamified Visual Replacement */}
 <figure className="relative h-[60vh] lg:h-[80vh] w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 overflow-hidden group">
 <div className="absolute inset-0 bg-gradient-to-tr from-[#6c5194]/10 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
 <div className="w-full h-full">
 <div className="w-full h-full rounded-2xl overflow-hidden"></div>
 </div>
 <figcaption className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
 <div className="font-mono text-xs text-slate-600 uppercase tracking-widest bg-white/80 px-3 py-1.5 rounded backdrop-blur-md">
 {t('TechnologyCore.badge')}
 </div>
 <div className="w-12 h-12 rounded-full border border-[#6c5194]/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
 <div className="w-2 h-2 bg-[#6c5194] rounded-full" />
 </div>
 </figcaption>
 </figure>

 </div>
 </section>
 );
}
