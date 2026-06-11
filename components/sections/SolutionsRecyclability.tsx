"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'motion/react';
import { Recycle, PackageOpen, Factory } from 'lucide-react';

export default function SolutionsRecyclability() {
 const t = useTranslations('Solutions');

 return (
 <section className="relative py-32 lg:py-48 bg-white">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <motion.div
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="mb-16 md:mb-24 text-center"
 >
 <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-slate-900 ">
 {t("Recyclability.title")}
 </h2>
 <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-light ">
 {t("Recyclability.subtitle")}
 </p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
 {[
 {
 icon: Recycle,
 title: t("Recyclability.recyclableTitle"),
 content: t("Recyclability.recyclableDesc")
 },
 {
 icon: PackageOpen,
 title: t("Recyclability.resinTitle"),
 content: t("Recyclability.resinDesc")
 },
 {
 icon: Factory,
 title: t("Recyclability.zeroWasteTitle"),
 content: t("Recyclability.zeroWasteDesc")
 }
 ].map((item, index) => (
 <motion.div
 key={index}
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 lg:p-12 hover:-translate-y-1 hover:shadow-md transition-all min-w-0"
 >
 <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl mb-8 border border-slate-200 shadow-sm">
 <item.icon className="w-8 h-8 text-[#5b2d8c]" strokeWidth={1.5} />
 </div>
 <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 mb-6 ">
 {item.title}
 </h3>
 <p className="text-slate-600 leading-relaxed text-base sm:text-lg ">
 {item.content}
 </p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
