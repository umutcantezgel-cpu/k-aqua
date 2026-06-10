"use client";
import { useTranslations } from 'next-intl';
import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default function SolutionsCtaSection() {
 const t = useTranslations('Solutions');

 return (
 <section className="relative py-32 lg:py-48 bg-slate-50 border-t border-slate-200/50 overflow-hidden">
 <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-200/50 via-slate-50 to-slate-50 pointer-events-none"></div>
 
 <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 text-center">
 <motion.div
 initial={{ opacity: 0, y: 40 }}
 whileInView={{ opacity: 1, y: 0 }}
 viewport={{ once: true, margin: "-100px" }}
 transition={{ duration: 0.8, ease: "easeOut" }}
 className="max-w-4xl mx-auto"
 >
 <div className="inline-flex items-center justify-center p-4 bg-white rounded-2xl mb-8 border border-slate-200 shadow-sm">
 <FileText className="w-8 h-8 text-[#5b2d8c]" strokeWidth={1.5} />
 </div>
 
 <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter mb-8 text-slate-900 ">
 {t("Cta.title")}
 </h2>
 
 <p className="text-lg md:text-2xl text-slate-600 mb-12 font-light leading-relaxed max-w-2xl mx-auto ">
 {t("Cta.subtitle")}
 </p>
 
 <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
 <Link 
 href="/service"
 className="group relative inline-flex items-center justify-center gap-3 px-8 py-5 bg-slate-900 text-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
 >
 <span className="relative z-10 font-medium text-lg tracking-wide ">
 {t("Cta.button1")}
 </span>
 <ArrowRight className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={2} />
 <div className="absolute inset-0 bg-[#5b2d8c] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
 </Link>
 
 <Link 
 href="/contact"
 className="inline-flex items-center justify-center px-8 py-5 text-lg font-medium tracking-wide text-slate-900 bg-white border-2 border-slate-200 rounded-full hover:border-slate-900 hover:bg-slate-50 transition-all duration-300"
 >
 <span className=" ">{t("Cta.button2")}</span>
 </Link>
 </div>
 </motion.div>
 </div>
 </section>
 );
}
