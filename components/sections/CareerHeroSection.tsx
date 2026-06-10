"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function CareerHeroSection() {
 const t = useTranslations('Career');

 return (
 <section className="relative min-h-[70vh] flex flex-col justify-center bg-slate-50 pt-32 pb-16 overflow-hidden">
 <div className="absolute inset-0 bg-gradient-to-b from-white to-slate-50 z-0 pointer-events-none" />
 
 <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="max-w-4xl"
 >
 <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold tracking-tighter text-slate-900 mb-8 leading-tight ">
 {t('Hero.title_1')} <br className="hidden md:block" />
 <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#431074] to-[#8c30eb] ">{t('Hero.title_2')}</span>
 </h1>
 <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mb-12 ">
 {t('Hero.subtitle')}
 </p>
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8, delay: 0.2 }}
 viewport={{ once: true }}
 >
 <a 
 href="#open-roles" 
 className="inline-flex items-center justify-center bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full text-lg font-medium transition-colors"
 >
 {t('Hero.cta')}
 </a>
 </motion.div>
 </motion.div>
 </div>
 </section>
 );
}
