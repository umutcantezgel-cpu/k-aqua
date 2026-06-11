"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from '@/i18n/routing';
import MagneticButton from '@/components/ui/MagneticButton';
import { ArrowRight, Droplets, Activity, ShieldCheck } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function HomeHeroSection() {
  const t = useTranslations('Home');
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-[100svh] w-full min-w-0 max-w-full bg-[#fafafa] overflow-hidden flex flex-col justify-center pt-32 pb-20 lg:pt-0 lg:pb-0"
    >
      {/* Premium Ambient Background */}
      <div className="absolute inset-0 pointer-events-none w-full min-w-0 max-w-full overflow-hidden">
        {/* Massive Soft Radial Gradients */}
        <motion.div style={{ y: y1 }} className="absolute top-[-15%] right-[-10%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-sky-200/40 rounded-full blur-[140px] mix-blend-multiply" />
        <motion.div style={{ y: y2 }} className="absolute bottom-[-20%] left-[-15%] w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] bg-blue-100/50 rounded-full blur-[120px] mix-blend-multiply" />
        
        {/* Architectural Grid Lines */}
        <div className="absolute inset-0 w-full h-full bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]" />
      </div>

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 min-w-0 max-w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Typography Block */}
        <div className="lg:col-span-8 flex flex-col items-start w-full min-w-0 max-w-full">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 w-full min-w-0 max-w-full"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-full bg-white/60 backdrop-blur-xl border border-black/5 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
              <div className="w-1.5 h-1.5 rounded-full bg-sky-500 animate-pulse shadow-[0_0_10px_rgba(14,165,233,0.5)]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-700 font-semibold">
                {t('Advanced Piping Solutions')}
              </span>
            </div>
          </motion.div>

          <div className="w-full min-w-0 max-w-full overflow-hidden mb-10">
            <h1 className="text-[clamp(3rem,7.5vw,6.5rem)] leading-[1.05] tracking-[-0.03em] text-slate-900 font-medium w-full min-w-0 max-w-full break-words hyphens-auto">
              <motion.span 
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="block origin-bottom"
              >
                {t('Leading the Future of')}
              </motion.span>
              <motion.span 
                initial={{ opacity: 0, y: 50, rotateX: 20 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                className="block mt-2 origin-bottom"
              >
                <span className="text-slate-300 italic font-light mr-4 lg:mr-6 select-none">&amp;</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 font-bold drop-shadow-sm">
                  {t('Water Supply Infrastructure')}
                </span>
              </motion.span>
            </h1>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full min-w-0 max-w-full overflow-hidden mb-12"
          >
            <p className="text-[clamp(1.125rem,2vw,1.375rem)] text-slate-600 max-w-[48ch] font-light leading-relaxed w-full min-w-0 max-w-full">
              {t('K-Aqua core business description')}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6 w-full min-w-0 max-w-full relative z-20"
          >
            <MagneticButton as="div" className="bg-slate-900 text-white rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)] transition-shadow">
              <Link href="/products" className="px-8 py-4 sm:py-5 flex items-center justify-center gap-3 text-sm sm:text-base font-semibold tracking-wide">
                {t('Explore Our Ecosystem')} 
                <ArrowRight className="w-4 h-4" />
              </Link>
            </MagneticButton>
            
            <MagneticButton as="div" className="bg-white/60 backdrop-blur-xl border border-slate-200/80 text-slate-800 rounded-full shadow-sm hover:bg-white/80 transition-colors">
              <Link href="/contact" className="px-8 py-4 sm:py-5 flex items-center justify-center gap-2 text-sm sm:text-base font-medium tracking-wide">
                {t('Consult an Engineer')}
              </Link>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Right Asymmetrical / Parallax Floating Elements */}
        <div className="lg:col-span-4 relative h-64 md:h-[50vh] lg:h-[80vh] w-full min-w-0 max-w-full flex items-center justify-center pointer-events-none mt-16 lg:mt-0">
          <motion.div 
            style={{ y: y3 }}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            className="absolute top-[10%] lg:top-[20%] right-[5%] lg:right-[10%] bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-5 lg:p-6 rounded-3xl flex items-center gap-4 lg:gap-5 w-[85%] lg:w-72"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-sky-100 rounded-2xl flex items-center justify-center text-sky-600 shrink-0">
              <Droplets className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="min-w-0 overflow-hidden">
              <div className="text-slate-900 text-sm lg:text-base font-semibold truncate">Fluid Dynamics</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest mt-0.5">Optimized</div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.6 }}
            className="absolute bottom-[40%] left-[5%] lg:left-[-30%] bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-5 lg:p-6 rounded-3xl flex items-center gap-4 lg:gap-5 w-[85%] lg:w-80"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 shrink-0">
              <Activity className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="min-w-0 overflow-hidden">
              <div className="text-slate-900 text-sm lg:text-base font-semibold truncate">System Pressure</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest mt-0.5">Regulated &amp; Safe</div>
            </div>
          </motion.div>

          <motion.div 
            style={{ y: y1 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.7 }}
            className="absolute bottom-[5%] lg:bottom-[15%] right-[10%] lg:right-[5%] bg-white/80 backdrop-blur-2xl border border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.06)] p-5 lg:p-6 rounded-3xl flex items-center gap-4 lg:gap-5 w-[85%] lg:w-72"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 shrink-0">
              <ShieldCheck className="w-5 h-5 lg:w-6 lg:h-6" />
            </div>
            <div className="min-w-0 overflow-hidden">
              <div className="text-slate-900 text-sm lg:text-base font-semibold truncate">German Tech</div>
              <div className="text-slate-500 text-[10px] uppercase tracking-widest mt-0.5">Certified</div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        style={{ opacity: opacityFade }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none"
      >
        <div className="text-slate-400 text-[10px] uppercase tracking-[0.3em] font-mono font-medium">Scroll</div>
        <div className="w-[1px] h-12 bg-slate-200 overflow-hidden relative">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-slate-500"
          />
        </div>
      </motion.div>

    </section>
  );
}
