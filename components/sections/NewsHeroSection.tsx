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
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <section className="relative min-h-[100svh] flex justify-center items-center px-4 sm:px-6 lg:px-12 pt-32 pb-24 overflow-hidden bg-[#fafafa]">
      {/* Exquisite Ambient Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute top-[-15%] left-[5%] w-[70vw] h-[70vw] bg-gradient-to-br from-blue-200/30 via-transparent to-transparent rounded-full blur-[120px]" 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.5, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-[-20%] right-[-5%] w-[80vw] h-[80vw] bg-gradient-to-tl from-slate-200/40 via-sky-100/30 to-transparent rounded-full blur-[130px]" 
        />
        {/* Subtle noise overlay */}
        <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
      </div>

      <div className="max-w-[1440px] mx-auto w-full flex flex-col items-center text-center relative z-10 min-w-0 max-w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col items-center w-full min-w-0 max-w-full"
        >
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden flex justify-center mb-10">
            <div className="inline-flex items-center space-x-3 px-5 py-2.5 rounded-full border border-blue-100 shadow-[0_4px_24px_rgba(0,0,0,0.03)] bg-white/70 backdrop-blur-xl transition-all duration-500 hover:bg-white/90 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] group">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 text-blue-600 group-hover:scale-110 transition-transform duration-500 ease-easeOut">
                <Newspaper className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-800">{t('badge')}</span>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden mb-10">
            <h1 className="text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-balance text-slate-900">
              {t('title1')} <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 block sm:inline sm:ml-3">
                {t('title2')}
              </span>
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden flex justify-center">
            <p className="text-[clamp(1.125rem,2vw,1.5rem)] text-slate-600 max-w-[45ch] leading-relaxed font-light tracking-wide text-balance">
              {t('subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="w-full min-w-0 max-w-full flex justify-center mt-16 sm:mt-24"
          >
            <div className="w-px h-24 sm:h-32 bg-gradient-to-b from-blue-200/50 to-transparent"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
