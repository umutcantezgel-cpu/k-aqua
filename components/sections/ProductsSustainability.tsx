"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ProductsSustainability() {
 const t = useTranslations('Products');
 return (
 <section className="relative py-32 md:py-48 px-4 sm:px-6 md:px-12 z-10 bg-slate-50 border-t border-slate-200">
 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
 
 <article className="space-y-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.6 }}
 >
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900 ">
 {t('Sustainability.title')}
 </h2>
 <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
 <p className=" ">
 {t('Sustainability.p1')}
 </p>
 <p className=" ">
 {t('Sustainability.p2')}
 </p>
 <p className="font-medium text-slate-900 ">
 {t('Sustainability.p3')}
 </p>
 </div>
 </motion.div>
 </article>

 <figure className="relative h-[50vh] w-full rounded-3xl overflow-hidden group border border-slate-200 bg-white p-8">
 <div className="absolute inset-0 bg-gradient-to-tr from-[#8667b3]/5 to-transparent pointer-events-none" />
 <div className="h-full flex flex-col justify-center space-y-12 max-w-sm mx-auto">
 
 <div>
 <div className="flex justify-between text-sm mb-2 font-mono">
 <span className="text-slate-600 ">{t('Sustainability.energy')}</span>
 <span className="text-slate-900 font-bold ">{t('Sustainability.low')}</span>
 </div>
 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
 <div className="h-full bg-[#8667b3] w-[30%] rounded-full" />
 </div>
 </div>

 <div>
 <div className="flex justify-between text-sm mb-2 font-mono">
 <span className="text-slate-600 ">{t('Sustainability.heat')}</span>
 <span className="text-slate-900 font-bold ">{t('Sustainability.minimal')}</span>
 </div>
 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
 <div className="h-full bg-[#8667b3] w-[15%] rounded-full" />
 </div>
 </div>

 <div>
 <div className="flex justify-between text-sm mb-2 font-mono">
 <span className="text-slate-600 ">{t('Sustainability.recyclability')}</span>
 <span className="text-[#6c5194] font-bold">100%</span>
 </div>
 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
 <div className="h-full bg-[#6c5194] w-full rounded-full" />
 </div>
 </div>

 </div>
 </figure>

 </div>
 </section>
 );
}
