"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Building2, Target, Users } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function AboutHeroSection() {
  const t = useTranslations('About');
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -100]);
  
  return (
    <section className="relative w-full min-h-[100svh] h-auto flex flex-col justify-center items-center bg-[#fafafa] overflow-hidden pt-24 pb-16">
      {/* Premium ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-5%] w-[60%] h-[70%] bg-gradient-to-b from-sky-200/40 to-transparent blur-[120px] rounded-full mix-blend-multiply opacity-70"/>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[60%] bg-gradient-to-tr from-blue-200/40 to-transparent blur-[120px] rounded-full mix-blend-multiply opacity-60"/>
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-indigo-100/30 blur-[100px] rounded-full mix-blend-multiply"/>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-w-0 max-w-full overflow-hidden">
        
        {/* Left Column: Typography */}
        <div className="lg:col-span-7 flex flex-col justify-center min-w-0 max-w-full overflow-hidden z-20">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0 max-w-full overflow-hidden mb-8">
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.04em] text-slate-900 w-full min-w-0 max-w-full overflow-hidden break-words hyphens-auto font-medium">
              {t('hero.title_line1')} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500 italic pr-4 pb-2">{t('hero.title_line2')}</span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 max-w-xl w-full min-w-0 max-w-full overflow-hidden border-l-2 border-blue-500/20 pl-6 lg:pl-8 ml-2">
            <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-slate-700 leading-relaxed font-light w-full min-w-0 max-w-full overflow-hidden break-words hyphens-auto">
              {t('hero.p1')}
            </p>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-slate-500 leading-relaxed font-light w-full min-w-0 max-w-full overflow-hidden break-words hyphens-auto">
              {t('hero.p2')}
            </p>
          </motion.div>
        </div>

        {/* Right Column: Abstract Parallax Visuals & Floating Badges */}
        <div className="lg:col-span-5 relative h-full min-h-[400px] lg:min-h-[600px] w-full hidden lg:block">
          <motion.div style={{ y: y1 }} className="absolute top-10 right-0 w-[80%] h-[70%] rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/60 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-sky-50/50 mix-blend-overlay" />
             <div className="w-full h-full p-8 flex flex-col justify-between">
                <Building2 className="w-10 h-10 text-blue-400 opacity-50" strokeWidth={1} />
                <div className="space-y-4">
                  <div className="h-1 w-12 bg-blue-600/20 rounded-full" />
                  <div className="h-1 w-24 bg-slate-300/40 rounded-full" />
                  <div className="h-1 w-16 bg-slate-300/40 rounded-full" />
                </div>
             </div>
          </motion.div>

          <motion.div style={{ y: y2 }} className="absolute bottom-20 left-0 w-[60%] p-6 rounded-2xl bg-white/80 backdrop-blur-xl border border-white shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] flex items-center gap-4">
             <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
               <Users className="w-5 h-5 text-blue-600" />
             </div>
             <div>
               <div className="text-sm font-medium text-slate-900">Global Team</div>
               <div className="text-xs text-slate-500">Working worldwide</div>
             </div>
          </motion.div>
          
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, type: "spring" }}
            className="absolute top-1/3 -left-10 w-20 h-20 rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 flex items-center justify-center shadow-2xl shadow-blue-500/30">
            <Target className="w-8 h-8 text-white" strokeWidth={1.5} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
