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
      ease:"easeOut",
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease:"easeOut"} 
  },
};

export default function ProductsHeroSection({ heroY, heroOpacity }: ProductsHeroSectionProps) {
  const t = useTranslations('Products');
  
  return (
    <section className="relative min-h-[100svh] h-auto py-32 lg:py-0 flex flex-col items-center justify-center pt-24 px-4 sm:px-6 md:px-12 z-10 overflow-hidden bg-[#FAFAFA]">
      
      {/* Ultra Premium Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-blue-100/40 blur-[120px] opacity-70"/>
        <div className="absolute bottom-[-10%] right-[-20%] w-[60vw] h-[60vw] rounded-full bg-sky-100/40 blur-[100px] opacity-60"/>
        <div className="absolute top-[20%] left-[40%] w-[40vw] h-[40vw] rounded-full bg-white/50 blur-[80px] opacity-50"/>
      </div>

      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-20 w-full min-w-0 max-w-full flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"animate="show"className="text-center max-w-[90rem] mx-auto flex flex-col items-center justify-center w-full min-w-0 max-w-full">
          {/* Badge */}
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center mb-10">
            <div className="w-full min-w-0 max-w-full overflow-hidden flex justify-center">
              <div className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.05)] hover:bg-white/80 transition-all duration-500 ease-out">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"/>
                <span className="text-[0.75rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-800">
                  {t('Hero.badge')}
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-sky-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"/>
              </div>
            </div>
          </motion.div>
          
          {/* Title */}
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center mb-10 px-2 sm:px-0">
            <div className="w-full min-w-0 max-w-full overflow-hidden">
              <h1 className="text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight  text-slate-900 mx-auto font-extrabold pb-2 break-words hyphens-auto">
                {t('Hero.title')}
              </h1>
            </div>
          </motion.div>
          
          {/* Subtitle */}
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center mb-14 px-4 sm:px-0">
            <div className="w-full min-w-0 max-w-full overflow-hidden">
              <p className="text-[clamp(1rem,2vw,1.25rem)] mx-auto text-slate-500 max-w-3xl font-medium leading-[1.6]">
                {t('Hero.subtitle')}
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center">
            <div className="w-full min-w-0 max-w-full overflow-hidden flex justify-center p-4">
              <MagneticButton as="div">
                <button className="relative group overflow-hidden rounded-full bg-slate-900 px-10 py-5 text-white shadow-[0_8px_32px_-8px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.3)] transition-all duration-500 ease-out hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-sky-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"/>
                  <span className="relative z-10 text-sm sm:text-base font-semibold tracking-wide flex items-center gap-3">
                    {t('Hero.button')}
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500 ease-out"fill="none"viewBox="0 0 24 24"stroke="currentColor">
                      <path strokeLinecap="round"strokeLinejoin="round"strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                    </svg>
                  </span>
                </button>
              </MagneticButton>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
