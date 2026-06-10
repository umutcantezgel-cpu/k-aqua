"use client";

import React from 'react';
import { motion, MotionValue } from 'framer-motion';
import { useTranslations } from 'next-intl';
import MagneticButton from '@/components/ui/MagneticButton';

interface ProductsHeroSectionProps {
  heroY: MotionValue<string>;
  heroOpacity: MotionValue<number>;
}

const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 1, ease: "easeOut" } 
  },
};

export default function ProductsHeroSection({ heroY, heroOpacity }: ProductsHeroSectionProps) {
  const t = useTranslations('Products');
  
  return (
    <section className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-24 px-4 sm:px-6 md:px-12 z-10 overflow-hidden bg-slate-50">
      
      {/* Premium Background Gradients & Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#a589d6]/20 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#6c5194]/15 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-blue-400/10 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-20 w-full min-w-0 max-w-full"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center max-w-5xl mx-auto flex flex-col items-center w-full min-w-0 max-w-full"
        >
          <motion.div variants={itemVariants} className="mb-8 w-full min-w-0 max-w-full flex justify-center">
            <div className="inline-flex px-5 py-2 rounded-full border border-white/40 bg-white/50 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.04)] text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-[#6c5194]">
              {t('Hero.badge')}
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full mb-8 flex justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-balance text-transparent bg-clip-text bg-gradient-to-b from-slate-900 via-slate-800 to-slate-500 drop-shadow-sm max-w-full">
              {t('Hero.title')}
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full mb-12 flex justify-center">
            <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl font-light leading-relaxed text-balance max-w-full">
              {t('Hero.subtitle')}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center">
            <MagneticButton as="div">
              <button className="group relative px-8 py-4 bg-gradient-to-b from-[#7a5ca3] to-[#6c5194] text-white rounded-full font-medium tracking-wide shadow-[0_8px_32px_rgba(108,81,148,0.3)] hover:shadow-[0_16px_48px_rgba(108,81,148,0.4)] transition-all duration-500 hover:-translate-y-1 flex items-center gap-3 overflow-hidden border border-white/10">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">{t('Hero.button')}</span>
                <div className="relative z-10 w-2 h-2 rounded-full bg-white/90 animate-pulse shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
              </button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Hero Visual Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center opacity-30 mix-blend-overlay">
        <div className="w-full h-full max-w-5xl max-h-[80vh] flex items-center justify-center">
          <div className="w-full h-full aspect-square md:aspect-video rounded-full overflow-hidden shadow-[inset_0_0_100px_rgba(108,81,148,0.1)] border border-white/20"></div>
        </div>
      </div>
    </section>
  );
}
