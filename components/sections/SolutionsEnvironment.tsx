"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'motion/react';
import { Leaf } from 'lucide-react';

export default function SolutionsEnvironment() {
 const t = useTranslations('Solutions');

 return (
 <section className="relative py-32 lg:py-48 bg-slate-50 border-t border-slate-200/50">
 <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
 <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
 
 <div className="lg:col-span-6 lg:order-last">
 <motion.div
 initial={{ opacity: 0, x: 40 }}
 whileInView={{ opacity: 1, x: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 >
 <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl mb-8 border border-slate-200 shadow-sm">
 <Leaf className="w-8 h-8 text-[#5b2d8c]" strokeWidth={1.5} />
 </div>
 <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-slate-900 ">
 {t("Environment.title")}
 </h2>
 <article className="prose prose-lg text-slate-600 max-w-none">
 <p className=" ">
 {t("Environment.p1")}
 </p>
 <p className=" ">
 {t("Environment.p2")}
 </p>
 <p className=" ">
 {t("Environment.p3")}
 </p>
 </article>
 </motion.div>
 </div>

 <div className="lg:col-span-6 lg:order-first">
 <motion.div
 initial={{ opacity: 0, scale: 0.95 }}
 whileInView={{ opacity: 1, scale: 1 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="w-full h-[60vh] min-h-[500px] bg-white/80 backdrop-blur-xl border border-slate-200/50 shadow-sm rounded-3xl p-8 hover:-translate-y-1 hover:shadow-md transition-all relative overflow-hidden flex items-center justify-center lg:p-12"
 >
 <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white z-0"></div>
 <div className="relative z-10 w-full h-full border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center">
 <p className="text-slate-400 font-medium tracking-tight ">{t("Environment.diagram")}</p>
 </div>
 </motion.div>
 </div>

 </div>
 </div>
 </section>
 );
}
