"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import { ArrowDownRight, Sparkles, Briefcase } from "lucide-react";

export function CareerHeroSection() {
  const t = useTranslations('Career');
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 800], [0, 150]);
  const rotateBadge = useTransform(scrollY, [0, 800], [0, 45]);

  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-center items-start bg-[#fafafa] pt-24 pb-16 overflow-hidden">
      {/* Premium ambient background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[70%] h-[80%] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/60 via-transparent to-transparent blur-[120px]"/>
        <div className="absolute -left-[10%] bottom-[10%] w-[50%] h-[50%] bg-gradient-to-tr from-sky-200/40 to-transparent blur-[120px] rounded-full mix-blend-multiply opacity-50"/>
      </div>
      
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 min-w-0 max-w-full overflow-hidden">
        
        <div className="lg:col-span-8 flex flex-col justify-center min-w-0 max-w-full overflow-hidden z-20">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0 max-w-full overflow-hidden mb-10 relative">
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-[-0.04em] text-slate-900 w-full min-w-0 max-w-full overflow-hidden break-words hyphens-auto font-medium">
              {t('Hero.title_1')} <br />
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 pr-4 pb-2">
                  {t('Hero.title_2')}
                </span>
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
                  className="absolute bottom-2 left-0 w-full h-[0.1em] bg-blue-200/50 origin-left -z-10"
                />
              </span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0 max-w-full overflow-hidden mb-12 flex gap-6 items-start">
            <div className="hidden sm:flex mt-3 w-12 h-[1px] bg-slate-300 shrink-0" />
            <p className="text-[clamp(1.125rem,2.5vw,1.5rem)] text-slate-600 font-light leading-relaxed max-w-2xl w-full min-w-0 max-w-full overflow-hidden break-words hyphens-auto">
              {t('Hero.subtitle')}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0 max-w-full overflow-hidden flex flex-wrap items-center gap-6">
            <a 
              href="#open-roles"
              className="group inline-flex items-center justify-center gap-3 bg-slate-900 text-white hover:bg-blue-600 transition-colors duration-500 px-8 py-4 sm:py-5 rounded-full text-base font-medium shadow-[0_10px_20px_-10px_rgba(0,0,0,0.2)]">
              {t('Hero.cta')}
              <ArrowDownRight className="w-5 h-5 group-hover:rotate-[-45deg] transition-transform duration-500" />
            </a>
            <div className="flex items-center gap-3 text-slate-500 text-sm font-medium px-4 py-2 rounded-full bg-white/50 backdrop-blur-md border border-slate-200/50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              Hiring remotely
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-4 relative hidden lg:block min-h-[500px]">
          <motion.div 
            style={{ y: yImage }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[320px] aspect-[4/5] rounded-3xl bg-gradient-to-br from-slate-100 to-white border border-white shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex flex-col p-6">
            <div className="w-full flex justify-between items-start mb-auto">
               <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                 <Briefcase className="w-4 h-4 text-blue-600" />
               </div>
               <Sparkles className="w-5 h-5 text-amber-400" />
            </div>
            <div className="space-y-3">
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                  className="h-full bg-blue-500"
                />
              </div>
              <div className="h-2 w-2/3 bg-slate-100 rounded-full" />
            </div>
          </motion.div>

          <motion.div 
            style={{ rotate: rotateBadge }}
            className="absolute top-[20%] -right-8 w-24 h-24 rounded-full bg-white/80 backdrop-blur-xl border border-white shadow-xl flex items-center justify-center z-30">
            <div className="text-center">
              <div className="text-xl font-bold text-blue-600 tracking-tighter">100+</div>
              <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Roles</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
