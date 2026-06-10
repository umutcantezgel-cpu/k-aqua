"use client";

import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { useTranslations } from 'next-intl';
import MagneticButton from '@/components/ui/MagneticButton';

interface ProductsHeroSectionProps {
 heroY: MotionValue<string>;
 heroOpacity: MotionValue<number>;
}

export default function ProductsHeroSection({ heroY, heroOpacity }: ProductsHeroSectionProps) {
 const t = useTranslations('Products');
 return (
 <section className="relative h-[100dvh] flex flex-col items-center justify-center pt-24 px-4 sm:px-6 md:px-12 z-10">
 <motion.div 
 style={{ y: heroY, opacity: heroOpacity }}
 className="text-center max-w-7xl mx-auto flex flex-col items-center z-20"
 >
 <motion.div 
 initial={{ opacity: 0, scale: 0.9 }}
 animate={{ opacity: 1, scale: 1 }}
 transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
 className="mb-6 px-4 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-md text-xs font-mono tracking-[0.2em] uppercase text-[#a589d6]"
 >
 {t('Hero.badge')}
 </motion.div>
 
 <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[0.9] mb-8 text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-600 ">
 {t('Hero.title')}
 </h1>
 
 <p className="text-lg md:text-2xl text-slate-600 max-w-2xl font-light leading-relaxed mb-12 ">
 {t('Hero.subtitle')}
 </p>

 <MagneticButton as="div">
 <button className="px-8 py-4 bg-[#6c5194] hover:bg-[#8667b3] text-white rounded-full font-medium tracking-wide transition-colors flex items-center gap-3">
 <span>{t('Hero.button')}</span>
 <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
 </button>
 </MagneticButton>
 </motion.div>

 {/* Hero Visual Layer */}
 <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-40 mix-blend-screen">
 <div className="w-full h-full max-w-5xl max-h-[80vh]">
 <div className="w-full h-full aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(108,81,148,0.2)]"></div>
 </div>
 </div>
 </section>
 );
}
