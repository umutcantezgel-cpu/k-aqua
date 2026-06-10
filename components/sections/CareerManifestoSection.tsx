"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function CareerManifestoSection() {
 const t = useTranslations('Career');

 return (
 <section className="py-24 bg-white border-b border-slate-200">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="max-w-4xl"
 >
 <h2 className="text-sm font-mono uppercase tracking-widest text-[#8c30eb] mb-8 ">{t('Manifesto.title')}</h2>
 <p className="text-3xl md:text-5xl font-light text-slate-900 leading-tight mb-8 ">
 {t('Manifesto.quote')}
 </p>
 <p className="text-lg text-slate-600 font-light leading-relaxed ">
 {t('Manifesto.description')}
 </p>
 </motion.div>
 </div>
 </section>
 );
}
