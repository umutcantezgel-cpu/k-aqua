"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Droplets, Ear, FlaskConical } from 'lucide-react';

export default function SolutionsHealthSafety() {
 const t = useTranslations('Solutions');

 const safetyFeatures = [
 {
 icon: Droplets,
 title: t("HealthSafety.potableTitle"),
 description: t("HealthSafety.potableDesc")
 },
 {
 icon: ShieldAlert,
 title: t("HealthSafety.legionellaTitle"),
 description: t("HealthSafety.legionellaDesc")
 },
 {
 icon: FlaskConical,
 title: t("HealthSafety.toxicTitle"),
 description: t("HealthSafety.toxicDesc")
 },
 {
 icon: Ear,
 title: t("HealthSafety.acousticTitle"),
 description: t("HealthSafety.acousticDesc")
 }
 ];

 return (
 <section className="relative py-32 lg:py-48 bg-slate-50 border-t border-slate-200/50">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="text-center mb-16 md:mb-24">
 <motion.div
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 >
 <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-slate-900 ">
 {t("HealthSafety.title")}
 </h2>
 <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light ">
 {t("HealthSafety.subtitle")}
 </p>
 </motion.div>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
 {safetyFeatures.map((feature, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 lg:p-12 hover:-translate-y-1 hover:shadow-md transition-all flex flex-col sm:flex-row gap-8 items-start min-w-0"
 >
 <div className="flex-shrink-0 inline-flex items-center justify-center p-4 bg-slate-50 rounded-2xl border border-slate-200">
 <feature.icon className="w-8 h-8 text-[#5b2d8c]" strokeWidth={1.5} />
 </div>
 <div>
 <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-4 ">
 {feature.title}
 </h3>
 <p className="text-slate-600 leading-relaxed text-base sm:text-lg ">
 {feature.description}
 </p>
 </div>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
