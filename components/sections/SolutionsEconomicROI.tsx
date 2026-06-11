"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'motion/react';
import { TrendingDown, Zap, Clock } from 'lucide-react';

export default function SolutionsEconomicROI() {
 const t = useTranslations('Solutions');

 const metrics = [
 {
 icon: Clock,
 stat: "50%",
 title: t("EconomicROI.fasterTitle"),
 description: t("EconomicROI.fasterDesc")
 },
 {
 icon: TrendingDown,
 stat: "0%",
 title: t("EconomicROI.maintenanceTitle"),
 description: t("EconomicROI.maintenanceDesc")
 },
 {
 icon: Zap,
 stat: "20%",
 title: t("EconomicROI.heatTitle"),
 description: t("EconomicROI.heatDesc")
 }
 ];

 return (
 <section className="relative py-32 lg:py-48 bg-slate-50 border-t border-slate-200/50">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="text-center mb-16 md:mb-24"
 >
 <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-slate-900 ">
 {t("EconomicROI.title")}
 </h2>
 <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light ">
 {t("EconomicROI.subtitle")}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
 {metrics.map((item, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 lg:p-14 hover:-translate-y-1 hover:shadow-md transition-all text-center flex flex-col items-center min-w-0"
 >
 <div className="inline-flex items-center justify-center p-4 bg-slate-50 rounded-2xl mb-8 border border-slate-200">
 <item.icon className="w-8 h-8 text-[#5b2d8c]" strokeWidth={1.5} />
 </div>
 <div className="text-5xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-4 ">
 {item.stat}
 </div>
 <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4 ">
 {item.title}
 </h3>
 <p className="text-slate-600 leading-relaxed text-base sm:text-lg ">
 {item.description}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
