"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

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
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export default function AboutHeroSection() {
  const t = useTranslations('About');

  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-32 pb-20 bg-slate-50 overflow-hidden">
      {/* Premium ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[60%] bg-gradient-to-b from-blue-100/30 to-transparent blur-[120px] mix-blend-multiply rounded-[100%]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full min-w-0 max-w-full flex flex-col items-center"
        >
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center justify-center p-4 bg-white/60 backdrop-blur-md border border-white/60 rounded-2xl mb-10 shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
          >
            <Building2 className="w-8 h-8 text-blue-600/90" strokeWidth={1.5} />
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-[1.05] text-slate-900 text-balance w-full min-w-0 max-w-full"
          >
            {t('hero.title_line1')}<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">{t('hero.title_line2')}</span>
          </motion.h1>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1, transition: { duration: 1, ease: "easeOut" } }
            }}
            className="h-[2px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-10 origin-center opacity-50"
          />

          <motion.div 
            variants={itemVariants}
            className="max-w-4xl w-full min-w-0 max-w-full"
          >
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-600/90 leading-relaxed font-light mb-6 text-balance w-full min-w-0 max-w-full">
              {t('hero.p1')}
            </p>
            <p className="text-base sm:text-lg lg:text-xl text-slate-500 leading-relaxed font-light text-balance w-full min-w-0 max-w-full">
              {t('hero.p2')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
