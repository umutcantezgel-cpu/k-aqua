"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Thermometer, Gauge } from 'lucide-react';

export default function SolutionsDurability() {
 const t = useTranslations('Solutions');

 const cards = [
 {
 icon: ShieldCheck,
 title: t("Durability.lifespanTitle"),
 description: t("Durability.lifespanDesc")
 },
 {
 icon: Gauge,
 title: t("Durability.pressureTitle"),
 description: t("Durability.pressureDesc")
 },
 {
 icon: Thermometer,
 title: t("Durability.tempTitle"),
 description: t("Durability.tempDesc")
 }
 ];

 return (
 <section className="relative py-32 lg:py-48 bg-white border-t border-slate-200/50">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
 
 <div className="lg:col-span-4">
 <motion.div
 initial={{ opacity: 0, x: -40 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="sticky top-32"
 >
 <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-slate-900 ">
 {t("Durability.title")}
 </h2>
 <p className="text-lg sm:text-xl text-slate-500 leading-relaxed font-light mb-8 ">
 {t("Durability.subtitle")}
 </p>
 </motion.div>
 </div>

 <div className="lg:col-span-8 flex flex-col gap-8">
 {cards.map((card, idx) => (
 <motion.div
 key={idx}
 initial={{ opacity: 0, y: 30 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all lg:p-14 min-w-0"
 >
 <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl mb-8 border border-slate-200/50 shadow-sm">
 <card.icon className="w-8 h-8 text-[#5b2d8c]" strokeWidth={1.5} />
 </div>
 <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-6 ">
 {card.title}
 </h3>
 <p className="text-lg sm:text-xl text-slate-600 leading-relaxed ">
 {card.description}
 </p>
 </motion.div>
 ))}
 </div>

 </div>
 </div>
 </section>
 );
}
