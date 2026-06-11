"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Building2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 1, ease:"easeOut"}
  },
};

export default function AboutHeroSection() {
  const t = useTranslations('About');

  return (
    <section className="relative w-full min-h-[100svh] h-auto py-32 lg:py-0 flex flex-col justify-center items-center bg-slate-50 overflow-hidden pt-24 pb-16">
      {/* Premium ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-50/80 via-slate-50 to-slate-50 blur-[80px]"/>
        <div className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-sky-100/40 blur-[120px] rounded-full mix-blend-multiply"/>
        <div className="absolute top-[30%] right-[-10%] w-[40%] h-[60%] bg-blue-100/40 blur-[120px] rounded-full mix-blend-multiply"/>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full flex flex-col items-center text-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"whileInView="visible"viewport={{ once: true, margin:"-100px"}}
          className="w-full min-w-0 max-w-full flex flex-col items-center">
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center justify-center p-4 bg-white/60 backdrop-blur-xl border border-slate-200/50 rounded-2xl mb-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-black/[0.02]">
            <Building2 className="w-8 h-8 text-blue-600"strokeWidth={1.5} />
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden">
            <h1 className="text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight  text-slate-900 w-full min-w-0 max-w-full overflow-hidden break-words hyphens-auto">
              {t('hero.title_line1')}<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">{t('hero.title_line2')}</span>
            </h1>
          </motion.div>
          
          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              visible: { opacity: 1, scaleX: 1, transition: { duration: 1.2, ease:"easeOut"} }
            }}
            className="h-[1px] w-16 sm:w-24 bg-gradient-to-r from-transparent via-blue-500/30 to-transparent my-12 origin-center"/>

          <motion.div 
            variants={itemVariants}
            className="max-w-3xl w-full min-w-0 max-w-full overflow-hidden">
            <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-slate-600 leading-relaxed font-light mb-8  w-full min-w-0 max-w-full overflow-hidden">
              {t('hero.p1')}
            </p>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-slate-500 leading-relaxed font-light  w-full min-w-0 max-w-full overflow-hidden">
              {t('hero.p2')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
