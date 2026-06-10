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
      ease: "easeOut",
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30, filter: 'blur(12px)' },
  show: { 
    opacity: 1, 
    y: 0, 
    filter: 'blur(0px)',
    transition: { duration: 1.2, ease: "easeOut" } 
  },
};

export default function ReferencesHeroSection() {
  const t = useTranslations('References.Hero');

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col items-center justify-center bg-[#FAFAFA] overflow-hidden">
      
      {/* Breathtaking Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-blue-100/50 blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full bg-sky-100/50 blur-[100px] opacity-60" />
        <div className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-white/80 blur-[80px] opacity-80" />
      </div>

      <motion.div 
        className="relative z-10 max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-12 w-full flex-1 flex flex-col items-center justify-center text-center min-w-0 max-w-full pt-24 pb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center mb-10">
          <div className="w-full min-w-0 max-w-full overflow-hidden flex justify-center">
            <div className="group relative inline-flex items-center space-x-3 px-5 py-2.5 bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.06)] rounded-full hover:bg-white/80 transition-all duration-500 ease-out">
              <div className="p-1.5 bg-blue-500/10 rounded-full">
                <Globe2 className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform duration-500 ease-out" />
              </div>
              <span className="text-[0.75rem] sm:text-xs font-semibold tracking-[0.2em] uppercase text-slate-800">
                {t('badge')}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center mb-10 px-2 sm:px-0">
          <div className="w-full min-w-0 max-w-full overflow-hidden">
            <h1 className="text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-balance text-slate-900 mx-auto font-extrabold pb-2">
              {t('title1')} <br className="hidden sm:block" />
              <span className="text-blue-600">
                {t('title2')}
              </span>
            </h1>
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full flex justify-center px-4 sm:px-0">
          <div className="w-full min-w-0 max-w-full overflow-hidden">
            <p className="text-[clamp(1rem,2vw,1.25rem)] mx-auto text-slate-500 max-w-3xl leading-[1.6] text-balance font-medium">
              {t('description')}
            </p>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Decorative Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-slate-200 to-transparent opacity-50" />
    </section>
  );
}
