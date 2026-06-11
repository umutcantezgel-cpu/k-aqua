"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function NewsHeroSection() {
  const t = useTranslations('News.HeroSection');
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  // Infinite Ticker Variants
  const marqueeVariants: any = {
    animate: {
      x: [0, -2000],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  const tickerItems = [
    "LATEST INSIGHTS", "BREAKING NEWS", "COMPANY UPDATES", "GLOBAL IMPACT",
    "LATEST INSIGHTS", "BREAKING NEWS", "COMPANY UPDATES", "GLOBAL IMPACT",
    "LATEST INSIGHTS", "BREAKING NEWS", "COMPANY UPDATES", "GLOBAL IMPACT"
  ];

  return (
    <section ref={containerRef} className="relative min-h-[100svh] h-auto w-full overflow-hidden flex flex-col justify-center items-center bg-[#fafafa]">
      
      {/* Dynamic Headline Ticker */}
      <div className="absolute top-[15%] sm:top-[20%] left-0 w-[200vw] overflow-hidden whitespace-nowrap opacity-[0.03] pointer-events-none select-none flex">
        <motion.div
          variants={marqueeVariants}
          animate="animate"
          className="flex gap-8 items-center"
        >
          {tickerItems.map((item, index) => (
            <React.Fragment key={index}>
              <span className="text-[8rem] sm:text-[14rem] font-bold text-slate-900 leading-none tracking-tighter">
                {item}
              </span>
              <span className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-slate-900 block" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease:"easeOut"}}
          className="w-[80vw] h-[80vw] bg-gradient-to-br from-slate-200/40 via-transparent to-transparent rounded-full blur-[120px]"
        />
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full min-w-0 flex flex-col items-center text-center mt-20"
      >
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-w-0 max-w-6xl overflow-hidden mb-10 flex justify-center"
        >
          <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-tight text-slate-900 break-words hyphens-auto font-medium">
            {t('title1')} <span className="text-slate-400 font-light italic block sm:inline sm:ml-2">{t('title2')}</span>
          </h1>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-w-0 max-w-full overflow-hidden flex justify-center"
        >
          <p className="text-[clamp(1.125rem,2vw,1.5rem)] text-slate-600 max-w-2xl leading-relaxed font-light tracking-wide">
            {t('subtitle')}
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="w-full min-w-0 max-w-full flex justify-center mt-20 sm:mt-28 origin-top"
        >
          <div className="w-[1px] h-24 sm:h-32 bg-gradient-to-b from-slate-900/20 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
