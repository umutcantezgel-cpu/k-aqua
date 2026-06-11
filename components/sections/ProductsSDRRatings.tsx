"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export default function ProductsSDRRatings() {
 const t = useTranslations('Products');
 const ratings = [
 { sdr: t('SDRRatings.ratings.sdr6.sdr'), desc: t('SDRRatings.ratings.sdr6.desc'), pressure: t('SDRRatings.ratings.sdr6.pressure') },
 { sdr: t('SDRRatings.ratings.sdr7.sdr'), desc: t('SDRRatings.ratings.sdr7.desc'), pressure: t('SDRRatings.ratings.sdr7.pressure') },
 { sdr: t('SDRRatings.ratings.sdr9.sdr'), desc: t('SDRRatings.ratings.sdr9.desc'), pressure: t('SDRRatings.ratings.sdr9.pressure') },
 { sdr: t('SDRRatings.ratings.sdr11.sdr'), desc: t('SDRRatings.ratings.sdr11.desc'), pressure: t('SDRRatings.ratings.sdr11.pressure') },
 { sdr: t('SDRRatings.ratings.sdr17.sdr'), desc: t('SDRRatings.ratings.sdr17.desc'), pressure: t('SDRRatings.ratings.sdr17.pressure') }
 ];

 return (
 <section className="relative py-32 md:py-48 px-4 sm:px-6 md:px-12 z-10 bg-slate-50 border-t border-slate-200">
 <div className="max-w-7xl mx-auto">
 
 <div className="mb-20 md:text-center max-w-3xl md:mx-auto">
 <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-8 ">
 {t('SDRRatings.title')}
 </h2>
 <p className="text-lg sm:text-xl text-slate-600 font-light leading-relaxed ">
 {t('SDRRatings.subtitle1')} <strong className="text-slate-900 font-medium">{t('SDRRatings.subtitle2')}</strong> {t('SDRRatings.subtitle3')} <strong className="text-[#8667b3] font-medium">{t('SDRRatings.subtitle4')}</strong> {t('SDRRatings.subtitle5')}
 </p>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
 {ratings.map((item, i) => (
 <motion.div 
 key={item.sdr}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-5%" }}
 transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
 className="group relative bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all overflow-hidden min-w-0"
 >
 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#6c5194] to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-1000" />
 <div className="text-3xl font-bold text-slate-900 mb-2 font-mono tracking-tight">{item.sdr}</div>
 <div className="flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-primary mb-3">{item.pressure}</div>
 <p className="text-sm text-slate-600 leading-relaxed font-light ">
 {item.desc}
 </p>
 </motion.div>
 ))}
 </div>

 </div>
 </section>
 );
}
