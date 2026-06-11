"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ProductsMaterialScience() {
 const t = useTranslations('Products');
 return (
 <section className="relative py-32 md:py-48 px-4 sm:px-6 md:px-12 z-10 bg-white border-t border-slate-200">
 <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
 
 <figure className="order-2 lg:order-1 relative h-[60vh] w-full rounded-3xl border border-slate-200 bg-slate-50 p-4 overflow-hidden group">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#6c519415,_transparent_70%)] opacity-50 group-hover:opacity-100 transition-opacity duration-700" />
 <div className="w-full h-full rounded-2xl border border-slate-200/50 bg-white/50 backdrop-blur flex items-center justify-center p-8">
 <div className="space-y-4 w-full">
 {/* Abstract Representation of Polymer Chains */}
 <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
 <div className="h-full bg-[#6c5194] w-3/4 rounded-full" />
 </div>
 <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
 <div className="h-full bg-[#8667b3] w-5/6 rounded-full" />
 </div>
 <div className="h-4 w-full bg-slate-200 rounded-full overflow-hidden">
 <div className="h-full bg-[#6c5194] w-full rounded-full" />
 </div>
 </div>
 </div>
 <figcaption className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
  <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">
 {t('MaterialScience.badge')}
 </div>
 </figcaption>
 </figure>

 <article className="order-1 lg:order-2 space-y-8">
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-10%" }}
 transition={{ duration: 0.6 }}
 >
 <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6 text-slate-900 ">
 {t('MaterialScience.title')}
 </h2>
 <p className="text-lg sm:text-xl text-[#8667b3] font-mono tracking-tight mb-8 ">
 {t('MaterialScience.subtitle')}
 </p>
 <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
 <p className=" ">
 {t('MaterialScience.p1')}
 </p>
 <p className=" ">
 {t('MaterialScience.p2')}
 </p>
 <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
 <li className="flex items-start gap-3">
 <div className="w-6 h-6 rounded-full bg-[#6c5194]/10 flex items-center justify-center shrink-0 text-[#8667b3] mt-1">
 <Check className="w-3 h-3" />
 </div>
 <span className="text-sm font-medium text-slate-900 ">{t('MaterialScience.features.beta')}</span>
 </li>
 <li className="flex items-start gap-3">
 <div className="w-6 h-6 rounded-full bg-[#6c5194]/10 flex items-center justify-center shrink-0 text-[#8667b3] mt-1">
 <Check className="w-3 h-3" />
 </div>
 <span className="text-sm font-medium text-slate-900 ">{t('MaterialScience.features.pressure')}</span>
 </li>
 <li className="flex items-start gap-3">
 <div className="w-6 h-6 rounded-full bg-[#6c5194]/10 flex items-center justify-center shrink-0 text-[#8667b3] mt-1">
 <Check className="w-3 h-3" />
 </div>
 <span className="text-sm font-medium text-slate-900 ">{t('MaterialScience.features.wall')}</span>
 </li>
 <li className="flex items-start gap-3">
 <div className="w-6 h-6 rounded-full bg-[#6c5194]/10 flex items-center justify-center shrink-0 text-[#8667b3] mt-1">
 <Check className="w-3 h-3" />
 </div>
 <span className="text-sm font-medium text-slate-900 ">{t('MaterialScience.features.flow')}</span>
 </li>
 </ul>
 </div>
 </motion.div>
 </article>

 </div>
 </section>
 );
}
