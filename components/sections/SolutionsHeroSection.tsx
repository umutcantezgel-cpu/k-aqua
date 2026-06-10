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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative w-full min-h-[100dvh] flex items-center pt-24 pb-20 overflow-hidden bg-slate-50 selection:bg-[#5b2d8c]/50">
      {/* Background Gradients */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-[#5b2d8c]/10 to-purple-400/5 blur-[120px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-gradient-to-tl from-purple-300/10 to-pink-300/5 blur-[100px]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full min-w-0 max-w-full">
        <motion.div 
          className="w-full min-w-0 max-w-5xl p-8 sm:p-12 lg:p-16 rounded-3xl bg-white/50 backdrop-blur-md border border-white/60 shadow-2xl shadow-[#5b2d8c]/5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full">
            <h1 className="w-full text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-tight text-slate-900 mb-8 text-balance">
              {t("Hero.title1")} <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5b2d8c] to-purple-400">{t("Hero.title2")}</span> {t("Hero.title3")}
            </h1>
          </motion.div>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full">
            <p className="w-full max-w-[48ch] text-lg sm:text-xl md:text-2xl text-slate-600 leading-relaxed text-balance">
              {t("Hero.subtitle")}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
