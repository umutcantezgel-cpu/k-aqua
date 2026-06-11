"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ReferencesHeroSection() {
  const t = useTranslations('References.Hero');
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] w-full flex flex-col items-center justify-center pt-32 pb-24 px-4 sm:px-6 lg:px-12 bg-[#fafafa] overflow-hidden z-10"
    >
      {/* High-End Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-5%] w-[70vw] h-[70vw] rounded-full bg-gradient-to-b from-blue-100/60 to-transparent blur-[120px] mix-blend-multiply opacity-60" />
        <div className="absolute bottom-[-10%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-t from-sky-100/60 to-transparent blur-[100px] mix-blend-multiply opacity-70" />
        <div className="absolute top-[20%] left-[30%] w-[40vw] h-[40vw] rounded-full bg-white blur-[80px] opacity-80" />
      </div>

      <motion.div 
        style={{ y: y1, opacity: opacity1 }}
        className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center text-center min-w-0 max-w-full"
      >
        {/* Glassmorphic Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-w-0 max-w-full flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/50 backdrop-blur-2xl border border-white/80 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.06)] rounded-full hover:bg-white/70 transition-all duration-500 ease-out group">
            <div className="p-1.5 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors duration-500">
              <Globe2 className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform duration-500 ease-out" />
            </div>
            <span className="text-[0.65rem] sm:text-xs font-bold tracking-[0.25em] uppercase text-slate-800">
              {t('badge')}
            </span>
          </div>
        </motion.div>

        {/* Cinematic Title */}
        <motion.div 
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-w-0 max-w-full overflow-hidden flex justify-center px-2 sm:px-0"
        >
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.03em] text-slate-900 mx-auto font-bold pb-4 break-words hyphens-auto max-w-5xl">
            {t('title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-400">{t('title2')}</span>
          </h1>
        </motion.div>

        {/* Premium Subtitle */}
        <motion.div 
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-w-0 max-w-full overflow-hidden flex justify-center mt-6 sm:mt-10 px-4 sm:px-0"
        >
          <p className="text-[clamp(1.125rem,2vw,1.5rem)] mx-auto text-slate-600 max-w-2xl leading-[1.5] tracking-tight font-medium">
            {t('description')}
          </p>
        </motion.div>
        
        {/* Abstract Visual / Globe Concept */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-w-0 max-w-full flex justify-center mt-16 lg:mt-24 pointer-events-none"
        >
          <div className="relative w-64 h-64 sm:w-96 sm:h-96 rounded-full border border-slate-200/50 flex items-center justify-center shadow-[0_32px_100px_-20px_rgba(0,0,0,0.05)]">
            <div className="absolute inset-4 rounded-full border border-slate-200/30 animate-[spin_40s_linear_infinite]" />
            <div className="absolute inset-10 rounded-full border border-slate-200/20 animate-[spin_30s_linear_infinite_reverse]" />
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/10 to-sky-300/10 backdrop-blur-3xl shadow-inner flex items-center justify-center">
               <Globe2 className="w-12 h-12 text-blue-500/40" />
            </div>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Structural Base */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
