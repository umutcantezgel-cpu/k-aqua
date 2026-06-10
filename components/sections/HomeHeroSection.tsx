"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from '@/i18n/routing';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowRight, Droplets, Activity, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

const containerVariants: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  },
};

export default function HomeHeroSection() {
  const t = useTranslations('Home');
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center bg-slate-50 overflow-hidden py-20 lg:py-0 w-full min-w-0 max-w-full">
      {/* Background Light Blues & Parallax */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 pointer-events-none w-full min-w-0 max-w-full">
        {/* Soft light ambient glow */}
        <div className="absolute top-[-10%] right-[-5%] w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-sky-200/40 blur-[120px] rounded-full mix-blend-multiply" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] bg-blue-100/50 blur-[100px] rounded-full mix-blend-multiply" />
        
        {/* Subtle grid pattern for technical feel */}
        <div className="absolute inset-0 bg-[url('/grid-pattern-light.svg')] opacity-[0.03] dark:opacity-5" />
      </motion.div>

      <div className="w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full min-w-0 max-w-full flex flex-col justify-center min-h-[100svh] py-20 lg:py-0">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full min-w-0 max-w-full">
          {/* Content Left Side */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start w-full min-w-0 max-w-full pt-10 lg:pt-0"
          >
            {/* Top Badge */}
            <motion.div variants={itemVariants} className="mb-8 w-full min-w-0 max-w-full flex items-start overflow-hidden">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/60 backdrop-blur-xl border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
                <div className="w-2 h-2 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.5)] animate-pulse" />
                <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-600 font-semibold">{t('Advanced Piping Solutions')}</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden mb-6">
              <h1 className="text-[clamp(1.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight text-balance text-slate-900 font-bold w-full min-w-0 max-w-full overflow-hidden">
                {t('Leading the Future of')} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                  {t('Water Supply Infrastructure')}
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="w-full min-w-0 max-w-full overflow-hidden mb-10">
              <p className="text-[clamp(1rem,4vw,1.25rem)] text-balance text-slate-600 max-w-[50ch] font-light leading-relaxed w-full min-w-0 max-w-full">
                {t('K-Aqua core business description')}
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full min-w-0 max-w-full overflow-hidden relative z-20">
              <MagneticButton as="div" className="bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-full !px-0 !py-0 shadow-[0_8px_30px_rgba(14,165,233,0.2)] hover:shadow-[0_8px_40px_rgba(14,165,233,0.4)] transition-all relative overflow-hidden group">
                <div className="absolute inset-0 bg-white/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-500 ease-out" />
                <Link href="/products" className="relative z-10 px-8 py-4 sm:py-5 flex items-center justify-center gap-3 text-sm sm:text-base font-semibold tracking-wide">
                  {t('Explore Our Ecosystem')} <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ease-out duration-300" />
                </Link>
              </MagneticButton>
              
              <MagneticButton as="div" className="bg-white/60 backdrop-blur-md border border-slate-200/60 text-slate-700 hover:bg-white/80 rounded-full transition-all !px-0 !py-0 shadow-sm">
                <Link href="/contact" className="px-8 py-4 sm:py-5 flex items-center justify-center gap-2 text-sm sm:text-base font-medium tracking-wide">
                  {t('Consult an Engineer')}
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Abstract Right Side Graphics */}
          <motion.div 
            style={{ y: y2 }}
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
            className="lg:col-span-5 relative w-full min-w-0 max-w-full h-[40vh] sm:h-[50vh] lg:h-[70vh] mt-10 lg:mt-0 flex items-center justify-center"
          >
            {/* The Glass Container */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-white/40 backdrop-blur-3xl border border-white/60 shadow-[0_8px_32px_rgba(0,0,0,0.04)] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-100/40 to-transparent" />
              
              {/* Inner floating abstract elements */}
              <motion.div 
                animate={{ y: [-10, 10, -10], rotate: [0, 2, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute top-[20%] left-[20%] w-[60%] h-[60%] rounded-full border border-white/40 bg-gradient-to-tr from-sky-200/50 to-transparent blur-md"
              />
              <motion.div 
                animate={{ y: [10, -10, 10], rotate: [0, -2, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[10%] right-[10%] w-[50%] h-[50%] rounded-full border border-white/40 bg-gradient-to-bl from-blue-200/50 to-transparent blur-lg"
              />

              {/* Floating Badges */}
              <div className="absolute inset-0 flex items-center justify-center relative">
                <div className="text-slate-400 font-mono text-sm tracking-[0.3em] uppercase rotate-[-90deg] absolute left-4 lg:left-8 transform origin-center whitespace-nowrap">
                  {t('Industrial Flow Architecture')}
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                  className="absolute top-12 right-6 lg:right-12 bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl flex items-center gap-4 shadow-sm"
                >
                  <div className="bg-sky-100 p-2 rounded-xl text-sky-600">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-800 text-xs font-semibold mb-0.5">Fluid Dynamics</div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-wider">Optimized</div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-20 left-6 lg:left-12 bg-white/70 backdrop-blur-xl border border-white/60 p-4 rounded-2xl flex items-center gap-4 shadow-sm"
                >
                  <div className="bg-blue-100 p-2 rounded-xl text-blue-600">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-800 text-xs font-semibold mb-0.5">System Pressure</div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-wider">Regulated</div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
                  className="absolute bottom-6 right-6 lg:right-12 bg-white/80 backdrop-blur-xl border border-white/60 p-4 rounded-2xl flex items-center gap-4 shadow-sm"
                >
                  <div className="bg-indigo-100 p-2 rounded-xl text-indigo-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-800 text-xs font-semibold mb-0.5">German Engineering</div>
                    <div className="text-slate-500 text-[10px] uppercase tracking-wider">Certified</div>
                  </div>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div 
          style={{ opacity: opacityFade }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        >
          <div className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-mono">Scroll</div>
          <div className="w-[1px] h-12 bg-gradient-to-b from-slate-300 to-transparent" />
        </motion.div>

      </div>
    </section>
  );
}
