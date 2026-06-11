"use client";

import React, { useRef } from 'react';
import { motion, MotionValue, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import MagneticButton from '@/components/ui/MagneticButton';

interface ProductsHeroSectionProps {
  heroY: MotionValue<string>;
  heroOpacity: MotionValue<number>;
}

export default function ProductsHeroSection({ heroY, heroOpacity }: ProductsHeroSectionProps) {
  const t = useTranslations('Products');
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center pt-32 pb-24 px-4 sm:px-6 md:px-12 z-10 overflow-hidden bg-[#fafafa]"
    >
      {/* Premium Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-100/40 blur-[120px] mix-blend-multiply opacity-70" />
        <div className="absolute bottom-[-10%] right-[10%] w-[60vw] h-[60vw] rounded-full bg-sky-200/30 blur-[100px] mix-blend-multiply opacity-60" />
        <div className="absolute top-[40%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-indigo-100/30 blur-[90px] mix-blend-multiply opacity-50" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] mix-blend-overlay" />
      </div>

      <motion.div 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative z-20 w-full min-w-0 max-w-full flex-1 flex flex-col items-center justify-center"
      >
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center min-w-0 max-w-full">
          
          {/* Glassmorphic Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0 max-w-full flex justify-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.04)] hover:bg-white/60 transition-colors duration-500">
              <div className="relative flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                <div className="absolute w-2 h-2 rounded-full bg-blue-600 animate-ping opacity-75" />
              </div>
              <span className="text-[0.65rem] sm:text-xs font-bold tracking-[0.25em] uppercase text-slate-800">
                {t('Hero.badge')}
              </span>
            </div>
          </motion.div>
          
          {/* Unbreakable Typography Hero Title */}
          <motion.div 
            initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0 max-w-full overflow-hidden flex justify-center px-2"
          >
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em] text-slate-900 font-bold hyphens-auto break-words max-w-6xl mx-auto pb-4">
              {t('Hero.title')}
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0 max-w-full overflow-hidden flex justify-center mt-6 sm:mt-10 px-4"
          >
            <p className="text-[clamp(1.125rem,2vw,1.5rem)] text-slate-600 max-w-3xl font-medium leading-[1.5] tracking-tight">
              {t('Hero.subtitle')}
            </p>
          </motion.div>

          {/* Product Highlights / Inline Visuals */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0 max-w-full flex justify-center mt-12 sm:mt-16"
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 px-4">
              {[1, 2, 3].map((item) => (
                <div key={item} className="relative group w-32 sm:w-40 h-20 sm:h-24 rounded-2xl overflow-hidden bg-white shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] border border-slate-100 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                  <motion.div style={{ scale: imgScale }} className="absolute inset-0 w-full h-full">
                    <img 
                      src={`https://picsum.photos/seed/product${item}/400/300`} 
                      alt={`Highlight ${item}`}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-100 transition-all duration-700 ease-out mix-blend-luminosity group-hover:mix-blend-normal"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0 max-w-full overflow-hidden flex justify-center mt-12 sm:mt-16"
          >
            <MagneticButton as="div">
              <button className="group relative inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-slate-900 text-white font-medium text-base tracking-wide overflow-hidden shadow-[0_16px_40px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_24px_50px_-16px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out hover:-translate-y-1">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  {t('Hero.button')}
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-500 ease-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </MagneticButton>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
