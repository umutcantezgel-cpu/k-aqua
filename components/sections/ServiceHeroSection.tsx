"use client";
import React from 'react';
import { ChevronRight } from 'lucide-react';
import MagneticButton from '../ui/MagneticButton';
import { useTranslations } from 'next-intl';
import { motion, useScroll, useTransform } from 'motion/react';

export default function ServiceHeroSection() {
  const t = useTranslations('Service.Hero');
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="relative w-full min-h-[100svh] py-32 lg:py-0 flex flex-col justify-center overflow-hidden bg-[#fafafa]">
      {/* Immersive background elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1, opacity: opacityFade }}
          className="absolute top-0 right-0 w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-gradient-to-bl from-blue-200/40 via-sky-100/20 to-transparent blur-[100px] md:blur-[140px] transform translate-x-1/4 -translate-y-1/4"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full min-w-0 max-w-full flex-1 flex flex-col justify-center py-32">
        <div className="w-full min-w-0 max-w-full overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left w-full min-w-0 max-w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full min-w-0 max-w-full overflow-hidden mb-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium uppercase tracking-[0.2em] text-slate-800">
                <span className="w-2 h-2 rounded-full bg-blue-500 relative flex items-center justify-center">
                  <span className="absolute w-full h-full rounded-full bg-blue-500 animate-ping opacity-50" />
                </span>
                Premium Service
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="w-full min-w-0 max-w-full overflow-hidden"
            >
              <h1 
                className="w-full min-w-0 max-w-full overflow-hidden text-[clamp(2.5rem,8vw,6rem)] leading-[1.02] tracking-[-0.04em] text-slate-900 break-words hyphens-auto font-medium"
                dangerouslySetInnerHTML={{ __html: t('title') }}
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="w-full min-w-0 max-w-full overflow-hidden mt-8 lg:mt-12"
            >
              <p className="w-full min-w-0 max-w-2xl text-lg md:text-2xl text-slate-500 leading-[1.6] font-light">
                {t('subtitle')}
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="w-full min-w-0 max-w-full overflow-hidden flex mt-12"
            >
              <MagneticButton as="div">
                <a href="#downloads" className="group relative overflow-hidden bg-slate-900 text-white px-8 py-5 rounded-full font-medium tracking-wide text-sm flex items-center gap-4 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-900/20">
                  <span className="relative z-10">{t('button')}</span>
                  <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform duration-300" />
                  </span>
                </a>
              </MagneticButton>
            </motion.div>
          </div>

          <div className="lg:col-span-5 w-full min-w-0 max-w-full flex justify-center lg:justify-end">
             <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
               className="relative w-full max-w-md aspect-square rounded-[2rem] overflow-hidden bg-white border border-slate-200/60 shadow-2xl p-4 md:p-8"
             >
               <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100" />
               <motion.div 
                 animate={{ 
                   y: [0, -10, 0],
                 }}
                 transition={{ 
                   duration: 6, 
                   repeat: Infinity, 
                   ease: "easeInOut" 
                 }}
                 className="relative z-10 w-full h-full rounded-[1rem] border border-white bg-white/40 shadow-sm backdrop-blur-md flex items-center justify-center"
               >
                 <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-gradient-to-tr from-blue-600 to-sky-300 blur-2xl opacity-20 mix-blend-multiply" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white shadow-xl flex items-center justify-center border border-slate-100">
                      <div className="w-6 h-6 rounded-full bg-blue-500 animate-pulse" />
                    </div>
                 </div>
               </motion.div>
             </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
