"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'motion/react';
import { Activity, Beaker, Shield } from 'lucide-react';

export default function SolutionsMaterialScience() {
 const t = useTranslations('Solutions');

 return (
 <section className="relative py-32 lg:py-48 bg-white border-t border-slate-200/50">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
 
 <motion.div
 initial={{ opacity: 0, x: -40 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="lg:col-span-6"
 >
 <div className="inline-flex items-center justify-center p-4 bg-slate-50 rounded-2xl mb-8 border border-slate-200 shadow-sm">
 <Beaker className="w-8 h-8 text-[#5b2d8c]" strokeWidth={1.5} />
 </div>
 <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-slate-900 ">
 {t("MaterialScience.title")}
 </h2>
 <article className="prose prose-lg text-slate-600 max-w-none">
 <p className=" ">
 {t("MaterialScience.p1")}
 </p>
 <p className=" ">
 {t("MaterialScience.p2")}
 </p>
 </article>
 </motion.div>

 <motion.div
 initial={{ opacity: 0, x: 40 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
 className="lg:col-span-6 flex flex-col gap-6"
 >
 <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm flex items-start gap-6 min-w-0">
 <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm shrink-0">
 <Shield className="w-6 h-6 text-[#5b2d8c]" />
 </div>
 <div>
 <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight ">{t("MaterialScience.chemicalTitle")}</h3>
 <p className="text-slate-600 leading-relaxed ">{t("MaterialScience.chemicalDesc")}</p>
 </div>
 </div>

 <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 md:p-10 shadow-sm flex items-start gap-6 min-w-0">
 <div className="bg-white p-3 rounded-xl border border-slate-200 shadow-sm shrink-0">
 <Activity className="w-6 h-6 text-[#5b2d8c]" />
 </div>
 <div>
 <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 tracking-tight ">{t("MaterialScience.thermalTitle")}</h3>
 <p className="text-slate-600 leading-relaxed ">{t("MaterialScience.thermalDesc")}</p>
 </div>
 </div>
 </motion.div>

 </div>
 </div>
 </section>
 );
}
