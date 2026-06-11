"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'motion/react';

export default function SolutionsHeroSection() {
  const t = useTranslations('Solutions');

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.2, ease:"easeOut"} 
    },
  };

  return (
    <section className="relative w-full min-h-[100svh] h-auto py-32 lg:py-0 flex flex-col justify-center overflow-hidden bg-[#fafafa]">
      {/* Premium Background Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: -50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2.5, ease:"easeOut"}}
          className="absolute top-[10%] left-[5%] w-[70vw] md:w-[45vw] h-[70vw] md:h-[45vw] rounded-full bg-gradient-to-br from-blue-500/10 to-sky-400/5 blur-[120px] md:blur-[160px]"/>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 2.5, ease:"easeOut", delay: 0.2 }}
          className="absolute bottom-[5%] right-[5%] w-[60vw] md:w-[40vw] h-[60vw] md:h-[40vw] rounded-full bg-gradient-to-tl from-sky-300/10 to-blue-300/5 blur-[100px] md:blur-[140px]"/>
        <div className="absolute bottom-0 w-full h-[30vh] bg-gradient-to-t from-[#fafafa] to-transparent z-0"/>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full min-w-0 max-w-full flex-1 flex flex-col justify-center py-32">
        <motion.div 
          className="w-full min-w-0 max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"variants={containerVariants}
          initial="hidden"animate="visible">
          <div className="lg:col-span-8 flex flex-col items-start text-left w-full min-w-0 max-w-full">
            <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden mb-6 lg:mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-xl text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-600">
                Solutions
              </span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden">
              <h1 className="w-full min-w-0 max-w-full overflow-hidden text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight  text-slate-900 mb-6 sm:mb-8 break-words hyphens-auto">
                {t("Hero.title1")} <br className="hidden md:block"/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">
                  {t("Hero.title2")}
                </span>{""}
                <span className="text-slate-400 font-light italic">
                  {t("Hero.title3")}
                </span>
              </h1>
            </motion.div>
            
            <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden">
              <p className="w-full min-w-0 max-w-[42ch] text-lg sm:text-xl md:text-[clamp(1.125rem,2vw,1.5rem)] text-slate-500 leading-relaxed  font-light border-l-[3px] border-blue-500/20 pl-6 sm:pl-8 py-2">
                {t("Hero.subtitle")}
              </p>
            </motion.div>
          </div>

          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-4 flex justify-center lg:justify-end w-full">
            {/* Premium structural glowing element to balance the layout */}
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-[22rem] md:h-[22rem]">
              <div className="absolute inset-0 rounded-full border-[1px] border-slate-200/50 backdrop-blur-3xl shadow-2xl flex items-center justify-center bg-white/40">
                <div 
                  className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-blue-500 to-sky-400 blur-2xl animate-pulse"style={{ animationDuration: '4s' }}
                />
                <div className="absolute inset-6 rounded-full border border-white/80 border-t-white mix-blend-overlay shadow-[inset_0_0_20px_rgba(255,255,255,0.8)]"/>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
