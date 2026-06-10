"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useTranslations } from 'next-intl';
import { motion } from 'motion/react';

export default function ServiceHeroSection() {
  const t = useTranslations('Service.Hero');

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
      transition: { duration: 1.2, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center overflow-hidden bg-[#fafafa]">
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] rounded-full bg-gradient-to-b from-blue-500/10 via-sky-500/5 to-transparent blur-[120px] md:blur-[160px] transform -translate-y-1/4"
        />
        <div className="absolute bottom-0 w-full h-[50vh] bg-gradient-to-t from-[#fafafa] to-transparent z-0" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center text-center w-full min-w-0 max-w-full justify-center flex-1 py-32">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full min-w-0 max-w-5xl flex flex-col items-center"
        >
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden flex justify-center">
            <span className="mb-6 sm:mb-8 inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/80 border border-slate-200/80 shadow-sm backdrop-blur-xl text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-600">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Premium Service
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden flex justify-center">
            <h1 
              className="w-full min-w-0 max-w-full overflow-hidden text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-balance text-slate-900"
              dangerouslySetInnerHTML={{ __html: t('title') }}
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden flex justify-center mt-6 sm:mt-8">
            <p className="w-full min-w-0 max-w-[36ch] text-lg sm:text-xl md:text-[clamp(1.125rem,2vw,1.5rem)] text-slate-500 leading-relaxed text-balance font-light">
              {t('subtitle')}
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants} className="mt-10 sm:mt-14 w-full flex justify-center">
            <MagneticButton as="div">
              <a href="#downloads" className="group relative overflow-hidden bg-white border border-slate-200/60 text-slate-900 px-8 sm:px-10 py-4 sm:py-5 rounded-full font-medium tracking-wide text-xs sm:text-sm flex items-center gap-3 transition-all duration-500 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
                <span className="relative z-10">{t('button')}</span>
                <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <ChevronRight className="w-4 h-4 text-blue-600 group-hover:translate-x-0.5 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-sky-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
