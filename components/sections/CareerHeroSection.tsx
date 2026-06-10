"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

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

export function CareerHeroSection() {
  const t = useTranslations('Career');

  return (
    <section className="relative min-h-[70vh] flex flex-col justify-center bg-slate-50 pt-32 pb-20 overflow-hidden">
      {/* Subtle glassmorphism ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] right-[10%] w-[40%] h-[50%] bg-gradient-to-bl from-[#8c30eb]/10 to-transparent blur-[100px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[0%] -left-[10%] w-[40%] h-[50%] bg-gradient-to-tr from-[#431074]/10 to-transparent blur-[100px] rounded-full mix-blend-multiply" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 w-full flex flex-col">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl w-full min-w-0 max-w-full"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.05] text-balance w-full min-w-0 max-w-full"
          >
            {t('Hero.title_1')} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#431074] via-[#6520b0] to-[#8c30eb]">{t('Hero.title_2')}</span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mb-12 text-balance w-full min-w-0 max-w-full"
          >
            {t('Hero.subtitle')}
          </motion.p>
          
          <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full">
            <a 
              href="#open-roles" 
              className="inline-flex items-center justify-center bg-white/70 backdrop-blur-md border border-white/80 shadow-lg shadow-slate-200/50 text-slate-900 hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all px-8 py-4 rounded-full text-base sm:text-lg font-medium"
            >
              {t('Hero.cta')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
