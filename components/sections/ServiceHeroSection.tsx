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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative w-full min-h-[70vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-50 selection:bg-[#5b2d8c]/50">
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br from-slate-200/50 to-slate-300/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-tl from-slate-200/50 to-slate-300/30 blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10 flex flex-col items-center text-center w-full min-w-0 max-w-full">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full min-w-0 max-w-4xl flex flex-col items-center p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/50 backdrop-blur-md border border-white/60 shadow-xl shadow-slate-200/40"
        >
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full">
            <h1 
              className="w-full text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mb-6 leading-tight text-slate-900 text-balance"
              dangerouslySetInnerHTML={{ __html: t('title') }}
            />
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center">
            <p className="w-full max-w-[32ch] text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed mb-10 text-balance">
              {t('subtitle')}
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <MagneticButton as="div">
              <a href="#downloads" className="bg-slate-900 text-white px-8 py-4 rounded-full font-medium tracking-wide text-sm uppercase flex items-center gap-2 hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30">
                <span>{t('button')}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
