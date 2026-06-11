"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'motion/react';
import { Check, X } from 'lucide-react';

export default function SolutionsComparative() {
 const t = useTranslations('Solutions');

 const comparisonData = [
 {
 feature: t("Comparative.f1"),
 kaqua: true,
 copper: false,
 steel: false,
 pvc: true,
 },
 {
 feature: t("Comparative.f2"),
 kaqua: true,
 copper: false,
 steel: false,
 pvc: true,
 },
 {
 feature: t("Comparative.f3"),
 kaqua: true,
 copper: false,
 steel: false,
 pvc: false,
 },
 {
 feature: t("Comparative.f4"),
 kaqua: true,
 copper: false,
 steel: false,
 pvc: false,
 },
 {
 feature: t("Comparative.f5"),
 kaqua: true,
 copper: false,
 steel: true,
 pvc: false,
 },
 {
 feature: t("Comparative.f6"),
 kaqua: true,
 copper: true,
 steel: true,
 pvc: false,
 }
 ];

 return (
 <section className="relative py-32 lg:py-48 bg-slate-50 border-t border-slate-200/50">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <motion.div
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="mb-16 md:mb-24"
 >
 <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-slate-900 ">
 {t("Comparative.title")}
 </h2>
 <p className="text-lg md:text-2xl text-slate-500 max-w-3xl leading-relaxed font-light ">
 {t("Comparative.subtitle")}
 </p>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, y: 20 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
 className="bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all overflow-hidden"
 >
 <div className="overflow-x-auto">
 <table className="w-full text-left border-collapse min-w-[800px]">
 <thead>
 <tr className="border-b border-slate-200">
 <th className="py-8 px-8 text-lg font-semibold text-slate-900 w-1/3 ">{t("Comparative.perfFeature")}</th>
 <th className="py-8 px-6 text-center text-lg font-bold text-[#5b2d8c] bg-slate-50/50 w-1/6 ">{t("Comparative.kAqua")}</th>
 <th className="py-8 px-6 text-center text-lg font-medium text-slate-600 w-1/6 ">{t("Comparative.copper")}</th>
 <th className="py-8 px-6 text-center text-lg font-medium text-slate-600 w-1/6 ">{t("Comparative.steel")}</th>
 <th className="py-8 px-6 text-center text-lg font-medium text-slate-600 w-1/6 ">{t("Comparative.pvc")}</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-slate-100">
 {comparisonData.map((row, idx) => (
 <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
 <td className="py-6 px-8 text-slate-700 font-medium ">{row.feature}</td>
 <td className="py-6 px-6 bg-slate-50/30">
 <div className="flex justify-center">
 {row.kaqua ? <Check className="w-6 h-6 text-green-500" strokeWidth={2.5} /> : <X className="w-6 h-6 text-red-400" strokeWidth={2} />}
 </div>
 </td>
 <td className="py-6 px-6">
 <div className="flex justify-center">
 {row.copper ? <Check className="w-6 h-6 text-slate-400" strokeWidth={2} /> : <X className="w-6 h-6 text-slate-300" strokeWidth={2} />}
 </div>
 </td>
 <td className="py-6 px-6">
 <div className="flex justify-center">
 {row.steel ? <Check className="w-6 h-6 text-slate-400" strokeWidth={2} /> : <X className="w-6 h-6 text-slate-300" strokeWidth={2} />}
 </div>
 </td>
 <td className="py-6 px-6">
 <div className="flex justify-center">
 {row.pvc ? <Check className="w-6 h-6 text-slate-400" strokeWidth={2} /> : <X className="w-6 h-6 text-slate-300" strokeWidth={2} />}
 </div>
 </td>
 </tr>
 ))}
 </tbody>
 </table>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
