"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function SolutionsHeroSection() {
  const t = useTranslations('Solutions');
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scaleImage = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section className="relative w-full min-h-[100svh] py-32 lg:py-0 flex flex-col justify-center overflow-hidden bg-[#fafafa]">
      {/* Abstract structural lighting */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          style={{ y: y1 }}
          className="absolute -top-[20%] -left-[10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tr from-sky-200/30 to-blue-100/20 blur-[140px]"
        />
        <div className="absolute bottom-0 w-full h-[40vh] bg-gradient-to-t from-[#fafafa] to-transparent z-0"/>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full min-w-0 max-w-full flex-1 flex flex-col justify-center items-center py-32">
        <div className="w-full min-w-0 max-w-full overflow-hidden flex flex-col items-center text-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full min-w-0 max-w-full overflow-hidden flex justify-center mb-10"
          >
            <div className="flex items-center justify-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
              <span className="w-2 h-2 rounded-full bg-sky-500" />
              Next Generation Solutions
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="w-full min-w-0 max-w-[1000px] overflow-hidden flex justify-center"
          >
            <h1 className="w-full min-w-0 max-w-full overflow-hidden text-[clamp(2.5rem,8vw,6rem)] leading-[1.05] tracking-[-0.03em] text-slate-900 break-words hyphens-auto font-medium">
              {t("Hero.title1")} <br className="hidden md:block"/>
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                {t("Hero.title2")}
                <motion.span 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
                  className="absolute -bottom-2 left-0 w-full h-[3px] bg-blue-500 origin-left"
                />
              </span>{" "}
              <span className="text-slate-400 font-normal italic pr-2">
                {t("Hero.title3")}
              </span>
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="w-full min-w-0 max-w-full overflow-hidden flex justify-center mt-10 lg:mt-12"
          >
            <p className="w-full min-w-0 max-w-[600px] text-lg md:text-2xl text-slate-500 leading-relaxed font-light">
              {t("Hero.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            className="w-full min-w-0 max-w-4xl mt-20 relative rounded-3xl overflow-hidden aspect-[21/9] border border-slate-200/50 shadow-2xl bg-white"
          >
            <motion.div 
               style={{ scale: scaleImage }}
               className="w-full h-full flex items-center justify-center bg-slate-50 relative overflow-hidden"
            >
              {/* Minimalist interactive scene */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="relative z-10 grid grid-cols-3 gap-6 p-10 w-full h-full">
                 {[1, 2, 3].map((i) => (
                   <motion.div 
                     key={i}
                     whileHover={{ y: -10, scale: 1.02 }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-end p-6 relative overflow-hidden group"
                   >
                     <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
                          ↗
                        </div>
                     </div>
                     <div className="w-12 h-12 rounded-full bg-slate-50 mb-auto flex items-center justify-center border border-slate-100">
                       <div className="w-4 h-4 bg-blue-500 rounded-sm rotate-45" />
                     </div>
                     <div className="h-2 w-16 bg-slate-200 rounded-full mb-3" />
                     <div className="h-2 w-10 bg-slate-100 rounded-full" />
                   </motion.div>
                 ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
