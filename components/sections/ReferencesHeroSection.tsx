"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Globe2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

const containerVariants: any = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

export default function ReferencesHeroSection() {
  const t = useTranslations('References.Hero');

  return (
    <section className="relative w-full min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 overflow-hidden pt-24 pb-16">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px]" />
      </div>

      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full flex flex-col items-center text-center py-12 min-w-0 max-w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="mb-8 w-full min-w-0 max-w-full flex justify-center">
          <div className="inline-flex items-center space-x-3 px-5 py-2.5 bg-white/60 backdrop-blur-xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] rounded-full">
            <div className="p-1.5 bg-blue-500/10 rounded-full">
              <Globe2 className="w-4 h-4 text-blue-600" />
            </div>
            <span className="text-xs sm:text-sm font-mono tracking-[0.2em] uppercase text-slate-700">
              {t('badge')}
            </span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full mb-8 flex justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance text-slate-900 leading-[1.1] max-w-5xl max-w-full drop-shadow-sm">
            {t('title1')} <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {t('title2')}
            </span>
          </h1>
        </motion.div>

        <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center">
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl leading-relaxed text-balance font-light max-w-full">
            {t('description')}
          </p>
        </motion.div>
      </motion.div>
      
      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
    </section>
  );
}
