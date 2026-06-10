"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowRight } from 'lucide-react';
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

export default function HomeHeroSection() {
  const t = useTranslations('Home');
  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-50 overflow-hidden py-24">
      {/* Background elegant gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-gradient-to-br from-blue-100/40 to-purple-100/40 blur-[100px] rounded-full mix-blend-multiply" />
        <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] bg-gradient-to-tl from-slate-200/50 to-blue-50/50 blur-[120px] rounded-full mix-blend-multiply" />
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-7 flex flex-col items-start w-full min-w-0 max-w-full"
        >
          <motion.div variants={itemVariants} className="mb-8 flex items-center space-x-3 w-full min-w-0 max-w-full">
            <div className="px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-md border border-white/40 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#431074] animate-pulse" />
              <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-600 font-medium">{t('Advanced Piping Solutions')}</span>
            </div>
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight mb-8 text-slate-900 text-balance w-full min-w-0 max-w-full"
          >
            {t('Leading the Future of')} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">{t('Water Supply Infrastructure')}</span>
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-[60ch] leading-relaxed mb-10 text-balance w-full min-w-0 max-w-full"
          >
            {t('K-Aqua core business description')}
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 sm:gap-6 w-full min-w-0 max-w-full">
            <MagneticButton as="div" className="bg-slate-900 text-white hover:bg-slate-800 rounded-full !px-0 !py-0 shadow-lg shadow-slate-900/20 transition-all">
              <Link href="/products" className="px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-2 text-sm sm:text-base font-medium">
                {t('Explore Our Ecosystem')} <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            <MagneticButton as="div" className="bg-white/50 backdrop-blur-md border border-white/60 text-slate-900 hover:bg-white/80 rounded-full shadow-sm hover:shadow-md transition-all !px-0 !py-0">
              <Link href="/contact" className="px-6 sm:px-8 py-3.5 sm:py-4 flex items-center gap-2 text-sm sm:text-base font-medium">
                {t('Consult an Engineer')}
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="lg:col-span-5 relative h-[50vh] lg:h-[70vh] rounded-[2rem] overflow-hidden border border-white/50 shadow-2xl shadow-slate-200/50 bg-white/30 backdrop-blur-md min-w-0 w-full max-w-full"
        >
          <div className="absolute inset-1 rounded-[1.8rem] bg-gradient-to-br from-white/60 to-white/10 backdrop-blur-sm border border-white/40 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(67,16,116,0.05),transparent_70%)]" />
            <div className="text-slate-400 font-mono text-sm tracking-wider uppercase">{t('Industrial Flow Architecture')}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
