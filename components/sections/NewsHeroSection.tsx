"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function NewsHeroSection() {
  const t = useTranslations('News.HeroSection');

  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[50dvh] lg:min-h-[60dvh] flex items-center px-4 sm:px-6 lg:px-12 pt-32 pb-24 overflow-hidden bg-slate-50">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[10%] w-[50vw] h-[50vw] bg-gradient-to-br from-[#5b2d8c]/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-gradient-to-tl from-slate-300/40 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center text-center relative z-10 min-w-0 max-w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center w-full min-w-0 max-w-full"
        >
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center">
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full border border-white/60 shadow-[0_4px_24px_rgba(0,0,0,0.04)] bg-white/50 backdrop-blur-md mb-10 transition-all hover:bg-white/60 hover:shadow-[0_4px_24px_rgba(0,0,0,0.08)]">
              <Newspaper className="w-4 h-4 text-[#5b2d8c]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-700">{t('badge')}</span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] text-slate-900 mb-8 text-balance">
              {t('title1')} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-[#5b2d8c] to-purple-600 block sm:inline sm:ml-3">
                {t('title2')}
              </span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center">
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-[40ch] leading-relaxed font-medium text-balance">
              {t('subtitle')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
