"use client";

import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export function CareerCTASection() {
 const t = useTranslations('Career');

 return (
 <section className="py-32 bg-white border-t border-slate-200">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 >
 <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 ">
 {t('CTA.title')}
 </h2>
 <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto leading-relaxed mb-12 ">
 {t('CTA.subtitle')}
 </p>

 <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
 <a href="mailto:andrea.nickel@k-aqua.de" className="focus:outline-none w-full sm:w-auto">
 <div className="bg-slate-900 text-white hover:bg-slate-800 px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center transition-colors">
 <Mail className="w-5 h-5 mr-3" />
 {t('CTA.btn_email')}
 </div>
 </a>
 <a href="tel:+4960859868410" className="focus:outline-none w-full sm:w-auto">
 <div className="bg-transparent text-slate-900 border border-slate-200 hover:bg-slate-50 px-8 py-4 rounded-full text-lg font-medium flex items-center justify-center transition-colors">
 <Phone className="w-5 h-5 mr-3" />
 {t('CTA.btn_call')}
 </div>
 </a>
 </div>

 <p className="mt-12 text-slate-500 text-sm font-mono uppercase tracking-widest ">
 {t('CTA.contact_prefix')}: andrea.nickel@k-aqua.de <br className="sm:hidden" />
 <span className="hidden sm:inline "> • </span> +49 (0)60 85 / 9868-410
 </p>
 </motion.div>
 </div>
 </section>
 );
}
