"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function CareerHiringProcessSection() {
 const t = useTranslations('Career');

 const steps = [
 { num: "01", title: t('HiringProcess.items.0.title'), desc: t('HiringProcess.items.0.desc') },
 { num: "02", title: t('HiringProcess.items.1.title'), desc: t('HiringProcess.items.1.desc') },
 { num: "03", title: t('HiringProcess.items.2.title'), desc: t('HiringProcess.items.2.desc') },
 { num: "04", title: t('HiringProcess.items.3.title'), desc: t('HiringProcess.items.3.desc') }
 ];

 return (
 <section className="py-24 bg-white">
 <div className="max-w-7xl mx-auto px-4 sm:px-6">
 <motion.div
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8 }}
 viewport={{ once: true }}
 className="mb-16"
 >
 <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4 ">{t('HiringProcess.title')}</h2>
 <p className="text-lg text-slate-600 font-light ">{t('HiringProcess.subtitle')}</p>
 </motion.div>

 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
 {steps.map((step, i) => (
 <motion.div
 key={i}
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 transition={{ duration: 0.8, delay: i * 0.1 }}
 viewport={{ once: true }}
 className="relative min-w-0"
 >
 <div className="text-4xl lg:text-5xl font-light text-slate-200 mb-6">{step.num}</div>
 <h3 className="text-xl font-medium text-slate-900 mb-3 ">{step.title}</h3>
 <p className="text-slate-600 font-light leading-relaxed ">{step.desc}</p>
 </motion.div>
 ))}
 </div>
 </div>
 </section>
 );
}
